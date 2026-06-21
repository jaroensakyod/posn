"""
Read and print text from a specific PDF page to understand the layout.
"""
import fitz
import sys

pdf = sys.argv[1] if len(sys.argv) > 1 else 'public/exams/posn1-62-chem.pdf'
page_num = int(sys.argv[2]) if len(sys.argv) > 2 else 1

doc = fitz.open(pdf)
page = doc[page_num - 1]
print(f'=== {pdf} page {page_num} ===')
text = page.get_text()
sys.stdout.buffer.write(text.encode('utf-8', errors='replace'))
sys.stdout.buffer.write(b'\n')
doc.close()
