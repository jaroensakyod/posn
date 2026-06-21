"""
Generate JS additions for all missing questions across all years.
Uses extracted text from extracted_questions.json + imageUrl for each page.
Writes individual gen_y*_extra.js files.
"""
import json, fitz, re, os, sys

os.environ['PYTHONIOENCODING'] = 'utf-8'
sys.stdout.reconfigure(encoding='utf-8')

# Load extracted text (from PDF text layer - works for text-based PDFs)
with open('extracted_questions.json', encoding='utf-8') as f:
    extracted = json.load(f)

# Currently digitized question ids per year
EXISTING = {
    60: {2,3,5,6,12,18,19,20,21,24,25,26,27,28,29,30,31,33,34,35,36,37,38,41,42,43,44,45,47,48,49,50,51,52,53,54,55,56,57,58},
    61: {2,5,9,14,15,17,34,35,36,37,40,43,44,45,46,47,49,51},
    62: set(range(1,61)),  # done
    64: {31,32,33,34,35,37,38,40,41,42,44,48,49,51,55,59,60},
    65: {2,32,33,34,42,44,50,54,55,56},
    66: {30,31,32,33,34,35,36,38,39,40,43,44,45},
    67: {33,34,35,38,39,40,41,42,43,44},
    68: {32,33,34,37,38,40,41,42,43},
}

# Topic assignments by question number (rough heuristic based on POSN exam structure)
# Each year has a different structure, but common patterns:
TOPIC_HEURISTIC = {
    # Typically: 1-20 atomic/bonding, 21-40 states/stoich, 41-60 solutions/equilibrium
    'default': lambda q: (
        'atomic-structure' if q <= 10 else
        'chemical-bonding' if q <= 20 else
        'stoichiometry' if q <= 30 else
        'states-of-matter' if q <= 40 else
        'solutions' if q <= 50 else
        'equilibrium'
    )
}

def get_topic(year, qnum):
    """Rough topic assignment - user should verify."""
    if year == 60:
        if qnum <= 6: return 'atomic-structure'
        if qnum <= 12: return 'atomic-structure'
        if qnum <= 17: return 'chemical-bonding'
        if qnum <= 23: return 'chemical-bonding'
        if qnum <= 32: return 'chemical-bonding'
        if qnum <= 40: return 'states-of-matter'
        if qnum <= 50: return 'stoichiometry'
        return 'solutions'
    elif year == 61:
        if qnum <= 8: return 'atomic-structure'
        if qnum <= 17: return 'chemical-bonding'
        if qnum <= 27: return 'stoichiometry'
        if qnum <= 37: return 'states-of-matter'
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
        if qnum <= 10: return 'atomic-structure'
        if qnum <= 20: return 'chemical-bonding'
        if qnum <= 30: return 'stoichiometry'
        if qnum <= 45: return 'solutions'
        return 'equilibrium'
    elif year == 67:
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 30: return 'chemical-bonding'
        if qnum <= 45: return 'stoichiometry'
        return 'solutions'
    elif year == 68:
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 31: return 'chemical-bonding'
        if qnum <= 45: return 'solutions'
        return 'acid-base'
    return 'stoichiometry'

def find_page_for_question(pdf_path, qnum, year):
    """Find which PDF page contains a given question number."""
    try:
        doc = fitz.open(pdf_path)
        for pnum, page in enumerate(doc, 1):
            text = page.get_text()
            # Look for question number pattern at start of line
            if re.search(rf'(?:^|\n)\s*{qnum}\s*[.)]\s', text, re.MULTILINE):
                doc.close()
                return pnum
        doc.close()
    except:
        pass
    # Fallback: estimate page based on question number
    # Usually 6-7 questions per page, starting at page 3
    return max(3, 3 + (qnum - 1) // 6)

def js_escape(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')

# Page estimates for years with scanned PDFs (y64, y65)
PAGE_ESTIMATES = {
    64: {q: max(3, 3 + (q-1)//6) for q in range(1, 61)},
    65: {q: max(3, 3 + (q-1)//6) for q in range(1, 61)},
}

# Per-year page cache (question -> page number)
page_cache = {}

def get_page(year, qnum):
    key = (year, qnum)
    if key in page_cache:
        return page_cache[key]

    if year in PAGE_ESTIMATES:
        p = PAGE_ESTIMATES[year].get(qnum, 3)
    else:
        pdf = f'public/exams/posn1-{year:02d}-chem.pdf'
        if os.path.exists(pdf):
            p = find_page_for_question(pdf, qnum, year)
        else:
            p = max(3, 3 + (qnum - 1) // 6)

    page_cache[key] = p
    return p

def build_question(year, qnum, ext_data=None):
    """Build a JS question object."""
    page = get_page(year, qnum)
    image_url = f'/exam-images/y{year:02d}-p{page}.png'
    topic = get_topic(year, qnum)

    if ext_data and ext_data.get('text') and len(ext_data['text']) > 10:
        text = ext_data['text'][:300]
        choices = ext_data.get('choices', ['ก', 'ข', 'ค', 'ง'])
        if len(choices) < 4:
            choices = (choices + ['ก', 'ข', 'ค', 'ง'])[:4]
    else:
        text = f'ข้อที่ {qnum} (ดูรูปประกอบ)'
        choices = ['ก', 'ข', 'ค', 'ง']

    # Clean up text
    text = re.sub(r'\s+', ' ', text).strip()
    choices = [re.sub(r'\s+', ' ', c).strip()[:100] for c in choices[:4]]
    while len(choices) < 4:
        choices.append('—')

    return {
        'id': f'y{year:02d}-q{qnum}',
        'year': year,
        'qnum': qnum,
        'topic': topic,
        'text': text,
        'choices': choices,
        'imageUrl': image_url,
    }

def write_additions(year, questions):
    """Write a JS additions file for a year."""
    if not questions:
        return

    lines = [f'// Year {year} — additional questions (auto-generated)\n']
    lines.append('const questions = [\n')

    for q in sorted(questions, key=lambda x: x['qnum']):
        text_esc = js_escape(q['text'])
        choices_js = ', '.join(f"'{js_escape(c)}'" for c in q['choices'])
        lines.append(f"""  {{
    id: 'y{year:02d}-q{q['qnum']}', year: {year}, questionNum: {q['qnum']}, topicId: '{q['topic']}',
    imageUrl: '{q['imageUrl']}',
    text: '{text_esc}',
    choices: [{choices_js}],
    correctIndex: 0,
    explanation: 'ดูรูปประกอบหน้า {q['imageUrl'].split('-p')[1].replace('.png', '')} ของข้อสอบปี {year}',
  }},
""")

    lines.append('];\n')
    lines.append('module.exports = questions;\n')

    fname = f'gen_y{year:02d}_extra.js'
    with open(fname, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Written {fname}: {len(questions)} questions')

# Process each year (skip 62 which is done)
for year in [60, 61, 64, 65, 66, 67, 68]:
    existing = EXISTING[year]
    ext_year = extracted.get(str(year), {})

    missing = [q for q in range(1, 61) if q not in existing]

    qs = []
    for qnum in missing:
        ext_data = ext_year.get(str(qnum))
        q = build_question(year, qnum, ext_data)
        qs.append(q)

    write_additions(year, qs)

print('\nAll extra files written!')
print('Now update gen_questions.js to import these extra files.')
