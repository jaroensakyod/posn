"""
auto_crop_ocr.py
================
สำหรับ PDF ที่เป็น scanned image (ปี 64, 65)
ใช้ Tesseract OCR detect ข้อแต่ละข้อ แล้ว crop เหมือน auto_crop_questions.py
"""
import fitz
import pytesseract
import re
import json
from pathlib import Path
from PIL import Image
import io

pytesseract.pytesseract.tesseract_cmd = r"C:\Users\ASUS\miniconda3\Library\bin\tesseract.exe"
import os
os.environ["TESSDATA_PREFIX"] = r"C:\Users\ASUS\miniconda3\Library\share\tessdata"

BASE = Path(__file__).parent
OUTPUT_DIR = BASE / "public/exam-images"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

EXAMS = {
    64: BASE / "public/exams/posn1-64-chem.pdf",
    65: BASE / "public/exams/posn1-65-chem.pdf",
}

RENDER_DPI = 200   # OCR ใช้ 200 dpi พอ
SCALE = RENDER_DPI / 72
PADDING = 10


def page_to_pil(page) -> Image.Image:
    mat = fitz.Matrix(SCALE, SCALE)
    pix = page.get_pixmap(matrix=mat)
    return Image.open(io.BytesIO(pix.tobytes("png")))


def ocr_page(img: Image.Image) -> list[dict]:
    """
    OCR หน้า และหา bounding box ของแต่ละข้อ
    คืน list of {qnum, x0, y0, x1, y1} (pixel coords ใน img)
    """
    data = pytesseract.image_to_data(
        img, lang="tha+eng",
        config="--psm 6",
        output_type=pytesseract.Output.DICT
    )

    words = []
    for i, word in enumerate(data["text"]):
        conf = int(data["conf"][i])
        if conf < 20 or not word.strip():
            continue
        words.append({
            "text": word,
            "x": data["left"][i],
            "y": data["top"][i],
            "w": data["width"][i],
            "h": data["height"][i],
            "line": data["line_num"][i],
            "block": data["block_num"][i],
        })

    # หาข้อที่เริ่มด้วย "N." ที่อยู่ซ้ายสุดของหน้า (left margin < 15% ของความกว้าง)
    questions = []
    iw, ih = img.size
    left_margin = iw * 0.15  # threshold

    for i, w in enumerate(words):
        # ต้องอยู่ใกล้ขอบซ้าย
        if w["x"] > left_margin:
            continue
        m = re.match(r'^(\d{1,2})\.?$', w["text"].strip())
        if m:
            qnum = int(m.group(1))
            if 1 <= qnum <= 60:
                # ต้องไม่ซ้ำ และ qnum ต้องมากกว่า qnum ก่อนหน้า (ข้อเรียงลำดับ)
                if questions and qnum <= questions[-1][0]:
                    continue
                questions.append((qnum, w["y"], i))

    if not questions:
        return []

    result = []
    for idx, (qnum, y_top, word_idx) in enumerate(questions):
        y0 = max(0, y_top - PADDING)
        if idx + 1 < len(questions):
            y1 = questions[idx + 1][1] - PADDING
        else:
            y1 = ih
        y1 = min(ih, max(y0 + 50, y1 + PADDING))  # ป้องกัน y1 < y0
        result.append({"qnum": qnum, "x0": 0, "y0": y0, "x1": iw, "y1": y1})

    return result


def process_year(year: int, pdf_path: Path) -> dict:
    if not pdf_path.exists():
        print(f"  ไม่พบ: {pdf_path}")
        return {}

    doc = fitz.open(str(pdf_path))
    results = {}

    for page_idx in range(len(doc)):
        page_num = page_idx + 1
        page = doc[page_idx]

        # ถ้ามี text layer ปกติ ข้ามไป (ใช้ auto_crop_questions.py แทน)
        if len(page.get_text()) > 50:
            continue

        img = page_to_pil(page)
        questions = ocr_page(img)

        if not questions:
            continue

        for q in questions:
            qnum = q["qnum"]
            if qnum in results:
                continue

            crop_box = (q["x0"], q["y0"], q["x1"], q["y1"])
            cropped = img.crop(crop_box)

            qid = f"y{year}-q{qnum:02d}"
            out_path = OUTPUT_DIR / f"{qid}_auto.png"
            cropped.save(out_path)

            results[qnum] = {
                "qid": qid,
                "page": page_num,
                "path": f"/exam-images/{qid}_auto.png",
            }

        print(f"  y{year} page {page_num}: OCR found {len(questions)} qs -> {[q['qnum'] for q in questions]}")

    doc.close()
    return results


all_results = {}
for year, pdf_path in EXAMS.items():
    print(f"\n=== year {year} (OCR) ===")
    r = process_year(year, pdf_path)
    all_results[year] = r
    print(f"  total: {len(r)} questions cropped")

# merge เข้า auto_crop_result.json
result_file = BASE / "auto_crop_result.json"
with open(result_file, encoding="utf-8") as f:
    existing = json.load(f)

for year, qs in all_results.items():
    existing[str(year)] = {str(k): v for k, v in qs.items()}

with open(result_file, "w", encoding="utf-8") as f:
    json.dump(existing, f, ensure_ascii=False, indent=2)

print(f"\nSaved to {result_file}")
