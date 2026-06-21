"""
Re-generate all extra files based on ACTUAL missing questions in pastExamQuestions.ts
"""
import re, json, fitz, os, sys

os.environ['PYTHONIOENCODING'] = 'utf-8'

# Read actual state from generated TS file
txt = open('src/data/chemistry/pastExamQuestions.ts', encoding='utf-8').read()
pairs = re.findall(r'"year":\s*(\d+)[^}]*?"questionNum":\s*(\d+)', txt)

existing_by_year = {}
for y, q in pairs:
    y, q = int(y), int(q)
    existing_by_year.setdefault(y, set()).add(q)

for y in [60,61,62,64,65,66,67,68]:
    ex = existing_by_year.get(y, set())
    missing = [q for q in range(1,61) if q not in ex]
    print(f'y{y}: {len(ex)} existing, {len(missing)} missing: {missing}')

print()

# Load extracted text
with open('extracted_questions.json', encoding='utf-8') as f:
    extracted = json.load(f)

def get_topic(year, qnum):
    if year == 60:
        if qnum <= 12: return 'atomic-structure'
        if qnum <= 23: return 'chemical-bonding'
        if qnum <= 32: return 'chemical-bonding'
        if qnum <= 40: return 'states-of-matter'
        if qnum <= 50: return 'stoichiometry'
        return 'solutions'
    elif year == 61:
        if qnum <= 10: return 'atomic-structure'
        if qnum <= 20: return 'chemical-bonding'
        if qnum <= 35: return 'stoichiometry'
        if qnum <= 50: return 'solutions'
        return 'equilibrium'
    elif year == 64:
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 30: return 'chemical-bonding'
        if qnum <= 45: return 'stoichiometry'
        return 'solutions'
    elif year == 65:
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 30: return 'chemical-bonding'
        if qnum <= 45: return 'states-of-matter'
        return 'solutions'
    elif year == 66:
        if qnum <= 12: return 'atomic-structure'
        if qnum <= 29: return 'chemical-bonding'
        if qnum <= 45: return 'stoichiometry'
        return 'solutions'
    elif year == 67:
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 32: return 'chemical-bonding'
        if qnum <= 45: return 'stoichiometry'
        return 'solutions'
    elif year == 68:
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 31: return 'chemical-bonding'
        if qnum <= 48: return 'solutions'
        return 'acid-base'
    return 'stoichiometry'

def get_page_estimate(year, qnum):
    """Estimate PDF page number for a given question."""
    # Pages 1-2 are cover/data. Questions start at page 3.
    # Roughly 6-7 questions per page.
    return max(3, 3 + (qnum - 1) // 6)

def js_escape(s):
    return s.replace('\\','\\\\').replace("'","\\'").replace('\n','\\n').replace('\r','')

def write_extra(year, missing):
    ext_year = extracted.get(str(year), {})
    lines = [f'// Year {year:02d} extra — auto-generated from missing questions\nconst questions = [\n']

    for qnum in missing:
        ext = ext_year.get(str(qnum), {})
        page = get_page_estimate(year, qnum)
        img = f'/exam-images/y{year:02d}-p{page}.png'
        topic = get_topic(year, qnum)

        text = ext.get('text','') if ext else ''
        choices = ext.get('choices', []) if ext else []

        text = re.sub(r'\s+',' ', text).strip() if text else f'ข้อที่ {qnum} (ดูรูปในหน้า {page})'
        text = text[:300]

        if len(choices) < 4:
            choices = (choices + ['ก','ข','ค','ง'])[:4]
        choices = [re.sub(r'\s+',' ', str(c)).strip()[:120] for c in choices[:4]]

        lines.append(f"""  {{
    id: 'y{year:02d}-q{qnum}', year: {year}, questionNum: {qnum}, topicId: '{topic}',
    imageUrl: '{img}',
    text: '{js_escape(text)}',
    choices: ['{js_escape(choices[0])}', '{js_escape(choices[1])}', '{js_escape(choices[2])}', '{js_escape(choices[3])}'],
    correctIndex: 0,
    explanation: 'ดูรูปในหน้า {page} ของข้อสอบปี {year} (correctIndex ยังไม่ได้ตรวจสอบ)',
  }},
""")

    lines.append('];\nmodule.exports = questions;\n')
    fname = f'gen_y{year:02d}_extra.js'
    with open(fname, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Written {fname}: {len(missing)} questions')

for year in [60, 61, 64, 65, 66, 67, 68]:
    ex = existing_by_year.get(year, set())
    missing = sorted(q for q in range(1,61) if q not in ex)
    if missing:
        write_extra(year, missing)

print('\nDone! Run node gen_questions.js to regenerate.')
