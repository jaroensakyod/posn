"""
Read text from each exam PDF and find which page each question number is on.
Helps identify page location for missing (image-dependent) questions.
"""
import fitz
import re
import json

EXAMS = [
    ('public/exams/posn1-60-chem.pdf', 60),
    ('public/exams/posn1-61-chem.pdf', 61),
    ('public/exams/posn1-62-chem.pdf', 62),
    ('public/exams/posn1-64-chem.pdf', 64),
    ('public/exams/posn1-65-chem.pdf', 65),
    ('public/exams/posn1-66-chem.pdf', 66),
    ('public/exams/posn1-67-chem.pdf', 67),
    ('public/exams/posn1-68-chem.pdf', 68),
]

# Questions already digitized per year
EXISTING = {
    60: [2,3,5,6,12,18,19,20,21,24,25,26,27,28,29,30,31,33,34,35,36,37,38,41,42,43,44,45,47,48,49,50,51,52,53,54,55,56,57,58],
    61: [2,5,9,14,15,17,34,35,36,37,40,43,44,45,46,47,49,51],
    62: [2,3,4,5,6,7,8,11,12,13,21,23,26,27,29,30,37,38,40,41,42,43,45,47,49,54,55,56,57,58,59,60],
    64: [31,32,33,34,35,37,38,40,41,42,44,48,49,51,55,59,60],
    65: [2,32,33,34,42,44,50,54,55,56],
    66: [30,31,32,33,34,35,36,38,39,40,43,44,45],
    67: [33,34,35,38,39,40,41,42,43,44],
    68: [32,33,34,37,38,40,41,42,43],
}

result = {}

for pdf_path, year in EXAMS:
    doc = fitz.open(pdf_path)
    # Build page→text map
    page_texts = [page.get_text() for page in doc]
    doc.close()

    # Find which page each question number appears on
    q_to_page = {}
    for pnum, text in enumerate(page_texts, 1):
        # Match "ข้อที่ N" or standalone "N." or "N)" at start of line
        nums = re.findall(r'(?:ข้อที่\s*|^|\n)(\d{1,2})(?:\.|\.| )', text)
        for n in nums:
            n = int(n)
            if 1 <= n <= 60 and n not in q_to_page:
                q_to_page[n] = pnum

    existing = EXISTING.get(year, [])
    missing = [q for q in range(1, 61) if q not in existing and q not in q_to_page]
    image_qs = [q for q in range(1, 61) if q not in existing]

    result[year] = {}
    for q in image_qs:
        page = q_to_page.get(q, '?')
        result[year][q] = page

    print(f'\ny{year} — missing from digitized data: {image_qs}')
    for q in image_qs:
        print(f'  q{q} -> page {q_to_page.get(q, "?")}')

with open('question_page_map.json', 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print('\nSaved to question_page_map.json')
