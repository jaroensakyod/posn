"""
Apply crop mapping to pastExamQuestions.ts
Run once after finishing all crops:  python apply_crop_mapping.py
"""
import json
from pathlib import Path

BASE = Path(__file__).parent
QUESTIONS_FILE = BASE / "src/data/chemistry/pastExamQuestions.ts"
MAPPING_FILE = BASE / "crop_mapping.json"

mapping = json.loads(MAPPING_FILE.read_text(encoding="utf-8"))
text = QUESTIONS_FILE.read_text(encoding="utf-8")

# Find the array bounds in the TS file
start = text.find("= [") + 2
depth = 0
end = start
for i, ch in enumerate(text[start:], start):
    if ch == "[":
        depth += 1
    elif ch == "]":
        depth -= 1
        if depth == 0:
            end = i
            break

arr = json.loads(text[start : end + 1])

changed = 0
for q in arr:
    qid = q["id"]
    if qid not in mapping:
        continue
    new_url = mapping[qid]
    if new_url is None:
        if "imageUrl" in q:
            del q["imageUrl"]
            changed += 1
            print(f"[skip] {qid}: imageUrl removed")
    else:
        old = q.get("imageUrl", "(none)")
        q["imageUrl"] = new_url
        if old != new_url:
            changed += 1
            print(f"[ok]   {qid}: {old} -> {new_url}")

prefix = text[:start]
new_arr = json.dumps(arr, ensure_ascii=False, indent=2)
suffix = text[end + 1:]
QUESTIONS_FILE.write_text(prefix + new_arr + suffix, encoding="utf-8")
print(f"\nอัปเดตแล้ว {changed} ข้อ จาก {len(mapping)} รายการใน mapping")
