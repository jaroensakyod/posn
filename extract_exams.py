import pdfplumber
import json
import sys
import os

files = {
    60: 'posn1-60-chem.pdf',
    61: 'posn1-61-chem.pdf',
    62: 'posn1-62-chem.pdf',
    64: 'posn1-64-chem.pdf',
    65: 'posn1-65-chem.pdf',
    66: 'posn1-66-chem.pdf',
    67: 'posn1-67-chem.pdf',
    68: 'posn1-68-chem.pdf',
}

base = r'C:\Users\ASUS\Desktop\posn\ข้อสอบเก่า เคมี ค่าย 1'
out = {}

for yr, fn in files.items():
    path = os.path.join(base, fn)
    pages_text = []
    try:
        with pdfplumber.open(path) as pdf:
            for page in pdf.pages:
                text = page.extract_text() or ''
                pages_text.append(text)
        out[str(yr)] = pages_text
        print(f'OK {yr}: {len(pages_text)} pages', file=sys.stderr)
    except Exception as e:
        out[str(yr)] = []
        print(f'ERR {yr}: {e}', file=sys.stderr)

with open(r'C:\Users\ASUS\Desktop\posn\exam_texts.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=2)

print('Done', file=sys.stderr)
