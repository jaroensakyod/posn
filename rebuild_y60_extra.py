"""Rebuild gen_y60_extra.js covering ALL 40 missing y60 questions."""
import re, json, os

os.environ['PYTHONIOENCODING'] = 'utf-8'

with open('extracted_questions.json', encoding='utf-8') as f:
    extracted = json.load(f)

ext60 = extracted.get('60', {})

# Questions ONLY in inline gen_questions.js (20 of them)
inline = {2,3,5,6,12,18,19,36,37,38,39,40,41,44,45,46,52,54,55,60}
all_missing = sorted(q for q in range(1,61) if q not in inline)
print(f'Missing from inline: {len(all_missing)} questions')

def get_topic(qnum):
    if qnum <= 12: return 'atomic-structure'
    if qnum <= 23: return 'chemical-bonding'
    if qnum <= 32: return 'chemical-bonding'
    if qnum <= 40: return 'states-of-matter'
    if qnum <= 50: return 'stoichiometry'
    return 'solutions'

def get_page(qnum):
    # Questions start at page 3, ~6 per page
    return max(3, 3 + (qnum - 1) // 6)

def js_escape(s):
    return s.replace('\\','\\\\').replace("'","\\'").replace('\n','\\n').replace('\r','')

lines = ['// Year 60 extra — ALL missing questions\nconst questions = [\n']

for qnum in all_missing:
    ext = ext60.get(str(qnum), {})
    page = get_page(qnum)
    img = f'/exam-images/y60-p{page}.png'
    topic = get_topic(qnum)

    text = ext.get('text', '') if ext else ''
    choices = ext.get('choices', []) if ext else []
    text = re.sub(r'\s+', ' ', text).strip() if text else f'ข้อที่ {qnum} (ดูรูปประกอบหน้า {page})'
    text = text[:300]
    if len(choices) < 4:
        choices = (choices + ['ก','ข','ค','ง'])[:4]
    choices = [re.sub(r'\s+', ' ', str(c)).strip()[:120] for c in choices[:4]]

    lines.append(f"""  {{
    id: 'y60-q{qnum}', year: 60, questionNum: {qnum}, topicId: '{topic}',
    imageUrl: '{img}',
    text: '{js_escape(text)}',
    choices: ['{js_escape(choices[0])}', '{js_escape(choices[1])}', '{js_escape(choices[2])}', '{js_escape(choices[3])}'],
    correctIndex: 0,
    explanation: 'ดูรูปประกอบหน้า {page} ของข้อสอบปี 60',
  }},
""")

lines.append('];\nmodule.exports = questions;\n')
with open('gen_y60_extra.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)
print(f'Written gen_y60_extra.js: {len(all_missing)} questions')
