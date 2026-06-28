"""
auto_crop_questions.py
======================
ใช้ PyMuPDF วิเคราะห์ layout แต่ละหน้า แล้ว crop รูปต่อข้อโดยอัตโนมัติ

วิธีใช้:
  python auto_crop_questions.py           # รันทุกปี
  python auto_crop_questions.py 60        # รันแค่ปี 60
  python auto_crop_questions.py 60 3      # รันปี 60 หน้า 3 อย่างเดียว (debug)

Output:
  public/exam-images/<qid>_auto.png   รูป crop ต่อข้อ
  auto_crop_result.json               สรุปผล (ใช้ตรวจสอบ)
"""

import fitz  # PyMuPDF
import json
import sys
from pathlib import Path

# ===== Config =====
BASE = Path(__file__).parent
OUTPUT_DIR = BASE / "public/exam-images"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

EXAMS = {
    60: BASE / "public/exams/posn1-60-chem.pdf",
    61: BASE / "public/exams/posn1-61-chem.pdf",
    62: BASE / "public/exams/posn1-62-chem.pdf",
    64: BASE / "public/exams/posn1-64-chem.pdf",
    65: BASE / "public/exams/posn1-65-chem.pdf",
    66: BASE / "public/exams/posn1-66-chem.pdf",
    67: BASE / "public/exams/posn1-67-chem.pdf",
    68: BASE / "public/exams/posn1-68-chem.pdf",
}

# DPI สำหรับ render หน้าก่อน crop (300 dpi คมชัด)
RENDER_DPI = 300
SCALE = RENDER_DPI / 72  # fitz ใช้ 72 dpi เป็น base

# ระยะขยาย crop box (px ใน space 72dpi)
PADDING = 4


def find_question_blocks(page):
    """
    หา bounding box ของแต่ละข้อในหน้า
    คืนค่า list of (qnum, rect) โดย rect คือ fitz.Rect
    """
    import re

    # get_text("blocks") คืน [(x0,y0,x1,y1, text, block_no, type), ...]
    # type=0 = text, type=1 = image
    blocks = page.get_text("blocks")

    # แยก text blocks
    text_blocks = [(fitz.Rect(b[:4]), b[4]) for b in blocks if b[6] == 0]

    questions = []  # (qnum, start_block_idx)
    for i, (rect, text) in enumerate(text_blocks):
        m = re.match(r'^\s*(\d{1,2})\s*\.\s+', text.strip())
        if m:
            qnum = int(m.group(1))
            if 1 <= qnum <= 60:
                questions.append((qnum, i, rect))

    if not questions:
        return []

    result = []
    for idx, (qnum, start_idx, start_rect) in enumerate(questions):
        # ขอบบนของข้อนี้
        y_top = start_rect.y0 - PADDING

        # ขอบล่าง = y_top ของข้อถัดไป หรือ ล่างสุดของหน้า
        if idx + 1 < len(questions):
            next_rect = questions[idx + 1][2]
            y_bottom = next_rect.y0 - PADDING
        else:
            y_bottom = page.rect.height

        # หา x_min/x_max จาก blocks ในช่วงนี้
        x_min = page.rect.width
        x_max = 0.0
        for rect, _ in text_blocks:
            if rect.y0 >= y_top and rect.y1 <= y_bottom + 40:
                x_min = min(x_min, rect.x0)
                x_max = max(x_max, rect.x1)

        # รวม image blocks ที่อยู่ในช่วงนี้
        img_blocks = [(fitz.Rect(b[:4]), b[4]) for b in blocks if b[6] == 1]
        for rect, _ in img_blocks:
            if rect.y0 >= y_top - 20 and rect.y1 <= y_bottom + 20:
                x_min = min(x_min, rect.x0)
                x_max = max(x_max, rect.x1)
                y_bottom = max(y_bottom, rect.y1)

        # fallback width
        if x_max <= x_min:
            x_min, x_max = 0, page.rect.width

        crop_rect = fitz.Rect(
            x_min - PADDING,
            max(0, y_top),
            x_max + PADDING,
            min(page.rect.height, y_bottom + PADDING)
        )
        result.append((qnum, crop_rect))

    return result


def crop_question(page, rect) -> bytes:
    """Render หน้าที่ rect ที่ระบุ แล้วคืนเป็น PNG bytes"""
    mat = fitz.Matrix(SCALE, SCALE)
    # clip = area ที่ต้องการ
    clip = fitz.Rect(rect)
    pix = page.get_pixmap(matrix=mat, clip=clip)
    return pix.tobytes("png")


def process_pdf(year: int, pdf_path: Path, target_page: int = None):
    """
    Process PDF ปีเดียว
    target_page: ถ้าระบุ จะ process แค่หน้านั้น (1-indexed) สำหรับ debug
    """
    if not pdf_path.exists():
        print(f"  ไม่พบไฟล์: {pdf_path}")
        return {}

    doc = fitz.open(str(pdf_path))
    results = {}  # qnum -> {"page": n, "path": "..."}

    for page_idx in range(len(doc)):
        page_num = page_idx + 1
        if target_page and page_num != target_page:
            continue

        page = doc[page_idx]
        questions = find_question_blocks(page)

        if not questions:
            continue

        for qnum, rect in questions:
            # qid format เดียวกับ crop_tool เดิม
            qid = f"y{year}-q{qnum:02d}"
            out_path = OUTPUT_DIR / f"{qid}_auto.png"

            png_bytes = crop_question(page, rect)
            out_path.write_bytes(png_bytes)

            results[qnum] = {
                "qid": qid,
                "page": page_num,
                "rect": list(rect),
                "path": f"/exam-images/{qid}_auto.png",
            }

        print(f"  y{year} page {page_num}: found {len(questions)} qs -> {[q for q,_ in questions]}")

    doc.close()
    return results


def main():
    args = sys.argv[1:]
    target_year = int(args[0]) if args else None
    target_page = int(args[1]) if len(args) >= 2 else None

    all_results = {}

    years_to_run = [target_year] if target_year else list(EXAMS.keys())

    for year in years_to_run:
        pdf_path = EXAMS.get(year)
        if not pdf_path:
            print(f"ไม่มี config สำหรับปี {year}")
            continue
        print(f"\n=== ปี {year} ===")
        results = process_pdf(year, pdf_path, target_page)
        all_results[year] = results
        print(f"  รวม: {len(results)} ข้อที่ crop ได้")

    # บันทึกสรุป
    out_json = BASE / "auto_crop_result.json"
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(
            {str(y): {str(k): v for k, v in qs.items()} for y, qs in all_results.items()},
            f, ensure_ascii=False, indent=2
        )
    print(f"\nบันทึกสรุปที่ {out_json}")
    print("รูป crop อยู่ที่ public/exam-images/*_auto.png")


if __name__ == "__main__":
    main()
