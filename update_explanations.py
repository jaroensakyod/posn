"""
อัปเดต explanation ใน pastExamQuestions.ts จาก CSV
รัน: python update_explanations.py
"""
import csv, json
from pathlib import Path

BASE = Path(__file__).parent
TS_FILE = BASE / "src/data/chemistry/pastExamQuestions.ts"
CSV_FILE = BASE / "เฉลยข้อสอบเคมี-ปรนัย.csv"

with open(CSV_FILE, encoding='utf-8-sig') as f:
    rows = list(csv.DictReader(f))

# build lookup: (year_short, qnum) -> explanation
lookup = {}
for r in rows:
    year_str = r['ปี'].replace('ปี ', '').replace('ปี','').strip()
    year = int(year_str) - 2500
    qnum = int(r['ข้อที่'])
    expl = r['คำอธิบาย'].strip()
    if expl and not expl.startswith('(verified)'):
        lookup[(year, qnum)] = expl

# load TS array
text = TS_FILE.read_text(encoding='utf-8')
start = text.find("= [") + 2
depth = 0; end = start
for i, ch in enumerate(text[start:], start):
    if ch == "[": depth += 1
    elif ch == "]":
        depth -= 1
        if depth == 0: end = i; break

arr = json.loads(text[start:end+1])

updated = 0
for q in arr:
    qid = q.get('id', '')  # e.g. y60-q1
    parts = qid.replace('y','').split('-q')
    if len(parts) != 2: continue
    year, qnum = int(parts[0]), int(parts[1])
    key = (year, qnum)
    if key in lookup:
        old = q.get('explanation', '')
        if old.startswith('(verified)') or not old:
            q['explanation'] = lookup[key]
            updated += 1
            print(f"[ok] y{year}-q{qnum}: {lookup[key][:60]}")

TS_FILE.write_text(
    text[:start] + json.dumps(arr, ensure_ascii=False, indent=2) + text[end+1:],
    encoding='utf-8'
)
print(f"\nอัปเดต {updated} ข้อ")
print("ที่เหลือยังเป็น placeholder — แก้ใน CSV แล้วรัน script นี้ซ้ำได้เลย")
