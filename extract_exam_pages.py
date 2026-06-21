"""
Extract every page of each exam PDF as a PNG image.
Output: public/exam-images/y{YY}-p{PAGE}.png
"""
import fitz  # pymupdf
import os

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

OUT_DIR = 'public/exam-images'
os.makedirs(OUT_DIR, exist_ok=True)

for pdf_path, year in EXAMS:
    if not os.path.exists(pdf_path):
        print(f'SKIP {pdf_path} (not found)')
        continue
    doc = fitz.open(pdf_path)
    print(f'y{year}: {len(doc)} pages')
    for i, page in enumerate(doc):
        mat = fitz.Matrix(2, 2)  # 2x zoom → ~150 dpi → ~1200px wide
        pix = page.get_pixmap(matrix=mat)
        out = f'{OUT_DIR}/y{year}-p{i+1}.png'
        pix.save(out)
    doc.close()
    print(f'  saved to {OUT_DIR}/y{year}-p*.png')

print('\nDone!')
