"""
Extract all questions from exam PDFs.
- Reads text per page, parses question number + text + choices
- Assigns imageUrl = page PNG for questions with embedded figures
- Outputs additions to gen_y*.js (appended questions array)
"""
import fitz
import re
import json
import sys

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

# Already digitized question ids per year
EXISTING = {
    60: {2,3,5,6,12,18,19,20,21,24,25,26,27,28,29,30,31,33,34,35,36,37,38,41,42,43,44,45,47,48,49,50,51,52,53,54,55,56,57,58},
    61: {2,5,9,14,15,17,34,35,36,37,40,43,44,45,46,47,49,51},
    62: {2,3,4,5,6,7,8,11,12,13,21,23,26,27,29,30,37,38,40,41,42,43,45,47,49,54,55,56,57,58,59,60},
    64: {31,32,33,34,35,37,38,40,41,42,44,48,49,51,55,59,60},
    65: {2,32,33,34,42,44,50,54,55,56},
    66: {30,31,32,33,34,35,36,38,39,40,43,44,45},
    67: {33,34,35,38,39,40,41,42,43,44},
    68: {32,33,34,37,38,40,41,42,43},
}


def clean(s):
    return ' '.join(s.split())


def parse_page(text):
    """Extract question blocks from a page's text. Returns list of (qnum, qtext, choices)."""
    results = []
    # Normalize newlines
    text = text.replace('\r\n', '\n').replace('\r', '\n')
    lines = [l.strip() for l in text.split('\n') if l.strip()]

    i = 0
    while i < len(lines):
        # Match question start: "N." or "N. " at beginning of line where N is 1-60
        m = re.match(r'^(\d{1,2})\.\s+(.*)', lines[i])
        if m:
            qnum = int(m.group(1))
            if 1 <= qnum <= 60:
                qtext_lines = [m.group(2)]
                i += 1
                # Collect question body until we hit choices or next question
                while i < len(lines):
                    # Check if this is a choice line: starts with (1)/(2)/(3)/(4) or ก./ข./ค./ง.
                    if re.match(r'^\([1-4]\)', lines[i]) or re.match(r'^[กขคง]\.', lines[i]):
                        break
                    # Check if next question
                    if re.match(r'^\d{1,2}\.\s+', lines[i]):
                        break
                    qtext_lines.append(lines[i])
                    i += 1

                qtext = clean(' '.join(qtext_lines))

                # Collect choices
                choices = []
                while i < len(lines) and len(choices) < 4:
                    cm = re.match(r'^\([1-4]\)\s*(.*)|^[กขคง]\.\s*(.*)', lines[i])
                    if cm:
                        choice_text = cm.group(1) or cm.group(2) or ''
                        # Collect multi-line choice
                        i += 1
                        while i < len(lines):
                            if (re.match(r'^\([1-4]\)', lines[i]) or
                                re.match(r'^[กขคง]\.', lines[i]) or
                                re.match(r'^\d{1,2}\.\s+', lines[i])):
                                break
                            choice_text += ' ' + lines[i]
                            i += 1
                        choices.append(clean(choice_text))
                    else:
                        break

                if qtext and len(choices) == 4:
                    results.append((qnum, qtext, choices))
                continue
        i += 1

    return results


all_new = {}

for pdf_path, year in EXAMS:
    doc = fitz.open(pdf_path)
    existing = EXISTING.get(year, set())
    new_qs = {}

    for page_idx, page in enumerate(doc):
        page_num = page_idx + 1
        text = page.get_text()
        parsed = parse_page(text)

        # Check if page has images/figures
        image_list = page.get_images()
        has_figures = len(image_list) > 0

        for qnum, qtext, choices in parsed:
            if qnum not in existing and qnum not in new_qs:
                new_qs[qnum] = {
                    'qnum': qnum,
                    'text': qtext,
                    'choices': choices,
                    'page': page_num,
                    'has_figures': has_figures,
                    'image_count': len(image_list),
                }

    doc.close()
    all_new[year] = new_qs
    print(f'y{year}: found {len(new_qs)} new questions (not yet digitized)')

# Save full results
with open('extracted_questions.json', 'w', encoding='utf-8') as f:
    json.dump(
        {str(y): {str(k): v for k, v in qs.items()} for y, qs in all_new.items()},
        f, ensure_ascii=False, indent=2
    )

print('\nSaved to extracted_questions.json')
