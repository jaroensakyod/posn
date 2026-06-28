"""
patch_image_urls.py
===================
Replace CDN imageUrl -> local auto-crop file ใน pastExamQuestions.ts
สำหรับข้อที่มีไฟล์ auto-crop แล้ว
"""
import json
import re
import shutil
from pathlib import Path

BASE = Path(__file__).parent
TS_FILE = BASE / "src/data/chemistry/pastExamQuestions.ts"
CROP_FILE = BASE / "auto_crop_result.json"

with open(CROP_FILE, encoding="utf-8") as f:
    crop = json.load(f)

# สร้าง lookup: "y60-q1" -> "/exam-images/y60-q01_auto.png"
lookup = {}
for year, qs in crop.items():
    for qnum, info in qs.items():
        qid_short = f"y{year}-q{int(qnum)}"   # y60-q1 (ไม่ zero-pad)
        lookup[qid_short] = info["path"]       # /exam-images/y60-q01_auto.png

# backup
shutil.copy(TS_FILE, TS_FILE.with_suffix(".ts.bak"))

ts = TS_FILE.read_text(encoding="utf-8")
replaced = 0

for qid_short, local_path in lookup.items():
    cdn_url = f"https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/{qid_short}.png"
    if cdn_url in ts:
        ts = ts.replace(f'"{cdn_url}"', f'"{local_path}"')
        replaced += 1

TS_FILE.write_text(ts, encoding="utf-8")
print(f"Replaced {replaced} CDN URLs -> local paths")
print(f"Backup: {TS_FILE.with_suffix('.ts.bak')}")
