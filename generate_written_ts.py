import csv, re, json
from collections import defaultdict
from pathlib import Path

TOPIC_MAP = {
    'โครงสร้างอะตอมและตารางธาตุ': 'atomic-structure',
    'พันธะเคมี': 'chemical-bonding',
    'สมดุลเคมี': 'chemical-equilibrium',
    'เทอร์โมเคมี': 'thermochemistry',
    'สมการเคมีและสโตอิชิโอเมทรี': 'stoichiometry',
    'อัตราการเกิดปฏิกิริยาเคมี': 'reaction-rate',
    'กรด-เบส': 'acid-base',
    'ไฟฟ้าเคมี': 'electrochemistry',
    'เคมีอินทรีย์': 'organic-chemistry',
    'เคมีวิเคราะห์': 'analytical-chemistry',
    'ก๊าซ': 'gas',
    'ของแข็งและของเหลว': 'solid-liquid',
    'สารละลาย': 'solution',
    'นิวเคลียร์เคมี': 'nuclear-chemistry',
}

def topic_id(th):
    for k, v in TOPIC_MAP.items():
        if k in th:
            return v
    return 'general'

def esc(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '')

mapping_path = Path('crop_mapping.json')
mapping = json.loads(mapping_path.read_text(encoding='utf-8')) if mapping_path.exists() else {}

with open('เฉลยข้อสอบเคมี-อัตนัย.csv', encoding='utf-8-sig') as f:
    rows = list(csv.DictReader(f))

groups = defaultdict(list)
for r in rows:
    year_str = r['ปี'].replace('ปี ', '').replace('ปี','').strip()
    year = int(year_str) - 2500
    qnum = int(r['ข้อที่'])
    groups[(year, qnum)].append(r)

lines = []
lines.append("export interface WrittenSubQuestion {")
lines.append("  label: string")
lines.append("  text: string")
lines.append("  points: number")
lines.append("  answer: string")
lines.append("  unit?: string")
lines.append("}")
lines.append("")
lines.append("export interface WrittenQuestion {")
lines.append("  id: string")
lines.append("  year: number")
lines.append("  questionNum: number")
lines.append("  topicId: string")
lines.append("  contextText: string")
lines.append("  subQuestions: WrittenSubQuestion[]")
lines.append("  totalPoints: number")
lines.append("  imageUrl?: string")
lines.append("}")
lines.append("")
lines.append("export const writtenExamQuestions: WrittenQuestion[] = [")

YEARS = [60,61,62,64,65,66,67,68]
for year in YEARS:
    lines.append(f"  // ===== ปี {year} ({year+2500}) =====")
    year_keys = [(y,q) for y,q in sorted(groups.keys()) if y==year]
    for (y, qnum) in year_keys:
        subs = groups[(y,qnum)]
        first = subs[0]
        ctx = esc(first['ข้อมูลเพิ่มเติม'])
        tid = topic_id(first['หมวดหมู่'])
        total = sum(float(s['คะแนน']) for s in subs)

        lines.append("  {")
        lines.append(f"    id: 'y{year}-w{qnum}',")
        lines.append(f"    year: {year},")
        lines.append(f"    questionNum: {qnum},")
        lines.append(f"    topicId: '{tid}',")
        lines.append(f"    contextText: '{ctx}',")
        lines.append(f"    totalPoints: {total},")
        image_url = mapping.get(f'y{year}-w{qnum}')
        if image_url:
            lines.append(f"    imageUrl: '{esc(image_url)}',")
        lines.append("    subQuestions: [")
        for s in subs:
            lbl = esc(s['ข้อย่อย'])
            txt = esc(s['โจทย์'])
            ans = esc(s['เฉลย'])
            pts = float(s['คะแนน'])
            lines.append("      {")
            lines.append(f"        label: '{lbl}',")
            lines.append(f"        text: '{txt}',")
            lines.append(f"        points: {pts},")
            lines.append(f"        answer: '{ans}',")
            lines.append("      },")
        lines.append("    ],")
        lines.append("  },")
    lines.append("")

lines.append("]")
lines.append("")
lines.append("export function getWrittenQuestionsByYear(year: number): WrittenQuestion[] {")
lines.append("  return writtenExamQuestions.filter(q => q.year === year)")
lines.append("}")
lines.append("")
lines.append("export function getWrittenTotalPoints(year: number): number {")
lines.append("  return getWrittenQuestionsByYear(year).reduce((sum, q) => sum + q.totalPoints, 0)")
lines.append("}")
lines.append("")
lines.append("export function getWrittenQuestionsByTopic(topicId: string): WrittenQuestion[] {")
lines.append("  return writtenExamQuestions.filter(q => q.topicId === topicId)")
lines.append("}")
lines.append("")

out = '\n'.join(lines)
with open('src/data/chemistry/writtenExamQuestions.ts', 'w', encoding='utf-8') as f:
    f.write(out)

q_count = sum(1 for k in groups if k[0] in YEARS)
print(f'done: {q_count} questions written')
