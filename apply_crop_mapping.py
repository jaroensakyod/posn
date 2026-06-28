"""
Apply crop mapping to pastExamQuestions.ts AND writtenExamQuestions.ts
Run once after finishing all crops:  python apply_crop_mapping.py
"""
import json, re
from pathlib import Path

BASE = Path(__file__).parent
MC_FILE = BASE / "src/data/chemistry/pastExamQuestions.ts"
WRITTEN_FILE = BASE / "src/data/chemistry/writtenExamQuestions.ts"
MAPPING_FILE = BASE / "crop_mapping.json"

mapping = json.loads(MAPPING_FILE.read_text(encoding="utf-8"))

# ===== Patch MC (JSON array inside TS) =====
def patch_mc(filepath, mapping):
    text = filepath.read_text(encoding="utf-8")
    start = text.find("= [") + 2
    depth = 0; end = start
    for i, ch in enumerate(text[start:], start):
        if ch == "[": depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0: end = i; break
    arr = json.loads(text[start:end+1])
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
                print(f"[skip] {qid}")
        else:
            if q.get("imageUrl") != new_url:
                q["imageUrl"] = new_url
                changed += 1
                print(f"[ok]   {qid} -> {new_url}")
    filepath.write_text(
        text[:start] + json.dumps(arr, ensure_ascii=False, indent=2) + text[end+1:],
        encoding="utf-8"
    )
    return changed

# ===== Patch Written (TS object literals — regex approach) =====
def patch_written(filepath, mapping):
    text = filepath.read_text(encoding="utf-8")
    changed = 0
    written_ids = {k: v for k, v in mapping.items() if "-w" in k}

    for qid, new_url in written_ids.items():
        # Find the block starting at this id
        id_pat = re.compile(r"(id:\s*'" + re.escape(qid) + r"')")
        m = id_pat.search(text)
        if not m:
            print(f"[warn] {qid}: not found")
            continue

        block_start = m.start()
        # Find the closing } of this object (next top-level })
        depth = 0; block_end = block_start
        in_obj = False
        for i, ch in enumerate(text[block_start:], block_start):
            if ch == "{": depth += 1; in_obj = True
            elif ch == "}":
                depth -= 1
                if in_obj and depth == 0:
                    block_end = i + 1
                    break

        block = text[block_start:block_end]

        if new_url is None:
            # Remove imageUrl line if exists
            new_block = re.sub(r",?\s*imageUrl:\s*'[^']*'", "", block)
        else:
            if "imageUrl:" in block:
                # Replace existing
                new_block = re.sub(r"imageUrl:\s*'[^']*'", f"imageUrl: '{new_url}'", block)
            else:
                # Insert before closing }
                new_block = block[:-1] + f",\n  imageUrl: '{new_url}'" + "}"

        if new_block != block:
            text = text[:block_start] + new_block + text[block_end:]
            changed += 1
            print(f"[ok]   {qid} -> {new_url}")

    filepath.write_text(text, encoding="utf-8")
    return changed

mc_changed = patch_mc(MC_FILE, mapping)
written_changed = patch_written(WRITTEN_FILE, mapping)
print(f"\nMC: {mc_changed} | Written: {written_changed} | total: {mc_changed+written_changed}")
