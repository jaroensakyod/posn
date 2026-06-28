"""
Exam Image Crop Tool  (v2)
==========================
- เลือกปีข้อสอบ → เห็นรายชื่อข้อทั้งปี
- เลื่อนดูทุกหน้าของปีนั้นด้วยปุ่ม ◀/▶ หรือพิมพ์เลขหน้า
- คลิกข้อที่ต้องการ → ลาก crop box บนรูป → บันทึก
- ข้อที่ไม่ต้องรูป → กด "ไม่ต้องการรูป"
- หลัง crop เสร็จ → รัน apply_crop_mapping.py
"""

import tkinter as tk
from tkinter import ttk, messagebox
import json
import re
import os
from pathlib import Path
from glob import glob

try:
    from PIL import Image, ImageTk
except ImportError:
    import subprocess, sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "-q"])
    from PIL import Image, ImageTk

# ===== Paths =====
BASE_DIR = Path(__file__).parent
QUESTIONS_FILE = BASE_DIR / "src/data/chemistry/pastExamQuestions.ts"
WRITTEN_FILE = BASE_DIR / "src/data/chemistry/writtenExamQuestions.ts"
IMAGES_DIR = BASE_DIR / "public/exam-images"
MAPPING_FILE = BASE_DIR / "crop_mapping.json"

YEARS = [60, 61, 62, 64, 65, 66, 67, 68]

def _parse_ts_array(filepath: Path) -> list:
    text = filepath.read_text(encoding="utf-8")
    start = text.find("= [") + 2
    depth = 0; end = start
    for i, ch in enumerate(text[start:], start):
        if ch == "[": depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0: end = i; break
    return json.loads(text[start:end+1])

def parse_written_questions():
    text = WRITTEN_FILE.read_text(encoding="utf-8")
    pat = re.compile(r"id:\s*'(y\d+-w\d+)',\s*year:\s*(\d+),\s*questionNum:\s*(\d+)")
    ctx_pat = re.compile(r"contextText:\s*'([^']*)'")
    results = []
    for m in pat.finditer(text):
        qid, year, qnum = m.group(1), int(m.group(2)), int(m.group(3))
        # find nearest contextText after this match
        cm = ctx_pat.search(text, m.end())
        ctx = cm.group(1)[:120] if cm else ""
        results.append({
            "id": qid, "year": year, "questionNum": qnum,
            "contextText": ctx, "text": ctx,
            "choices": [], "correctIndex": -1, "_written": True,
        })
    return results

def parse_questions():
    mc = _parse_ts_array(QUESTIONS_FILE)
    written = parse_written_questions()
    return mc + written

def load_mapping():
    if MAPPING_FILE.exists():
        return json.loads(MAPPING_FILE.read_text(encoding="utf-8"))
    return {}

def save_mapping(mapping):
    MAPPING_FILE.write_text(json.dumps(mapping, ensure_ascii=False, indent=2), encoding="utf-8")

def get_pages_for_year(year: int):
    """Return sorted list of page image paths for a given year."""
    pattern = str(IMAGES_DIR / f"y{year}-p*.png")
    files = sorted(glob(pattern), key=lambda p: int(re.search(r'-p(\d+)', p).group(1)))
    return files


class CropTool:
    CANVAS_W = 700
    CANVAS_H = 900

    def __init__(self, root):
        self.root = root
        self.root.title("Exam Crop Tool v2")
        self.root.resizable(True, True)

        self.all_questions = parse_questions()
        self.mapping = load_mapping()

        self.current_year = YEARS[0]
        self.year_questions = []   # questions for current year
        self.selected_q_idx = 0

        self.page_files = []       # list of page image paths for current year
        self.page_idx = 0          # index into page_files

        self.img_orig = None
        self.img_tk = None
        self.scale = 1.0
        self.rect_start = None
        self.rect_id = None
        self.crop_box = None

        self._build_ui()
        root.update_idletasks()
        root.after(100, lambda: self._set_year(YEARS[0]))

    # ===== UI =====

    def _build_ui(self):
        root = self.root

        # Top bar
        top = tk.Frame(root, bg="#1e293b", padx=8, pady=6)
        top.pack(fill=tk.X)

        tk.Label(top, text="ปีข้อสอบ:", bg="#1e293b", fg="#94a3b8",
                  font=("Segoe UI", 9)).pack(side=tk.LEFT)
        self.year_var = tk.IntVar(value=YEARS[0])
        for y in YEARS:
            tk.Radiobutton(top, text=f"ปี{y}", variable=self.year_var, value=y,
                           bg="#1e293b", fg="white", selectcolor="#3b82f6",
                           activebackground="#1e293b", activeforeground="white",
                           font=("Segoe UI", 8), command=lambda yy=y: self._set_year(yy)
                           ).pack(side=tk.LEFT, padx=2)

        self.lbl_progress = tk.Label(top, text="", bg="#1e293b", fg="#94a3b8",
                                      font=("Segoe UI", 8))
        self.lbl_progress.pack(side=tk.RIGHT)

        # Main area
        main = tk.Frame(root)
        main.pack(fill=tk.BOTH, expand=True)

        # ---- Canvas (left) ----
        canvas_frame = tk.Frame(main, bg="#0f172a")
        canvas_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

        # Page navigation bar
        nav_bar = tk.Frame(canvas_frame, bg="#1e293b", padx=4, pady=4)
        nav_bar.pack(fill=tk.X)

        self.btn_prev_page = tk.Button(nav_bar, text="◀", font=("Segoe UI", 9),
                                        bg="#334155", fg="white", relief=tk.FLAT,
                                        padx=6, pady=2, command=self._prev_page_img)
        self.btn_prev_page.pack(side=tk.LEFT)

        self.lbl_page_info = tk.Label(nav_bar, text="", bg="#1e293b", fg="white",
                                       font=("Segoe UI", 9), width=20)
        self.lbl_page_info.pack(side=tk.LEFT, padx=6)

        self.btn_next_page = tk.Button(nav_bar, text="▶", font=("Segoe UI", 9),
                                        bg="#334155", fg="white", relief=tk.FLAT,
                                        padx=6, pady=2, command=self._next_page_img)
        self.btn_next_page.pack(side=tk.LEFT)

        # Page jump
        tk.Label(nav_bar, text="  ไปหน้า:", bg="#1e293b", fg="#94a3b8",
                  font=("Segoe UI", 8)).pack(side=tk.LEFT)
        self.page_entry = tk.Entry(nav_bar, width=4, font=("Segoe UI", 9))
        self.page_entry.pack(side=tk.LEFT)
        self.page_entry.bind("<Return>", self._jump_page)

        self.canvas = tk.Canvas(canvas_frame, bg="#0f172a",
                                 width=self.CANVAS_W, height=self.CANVAS_H,
                                 cursor="crosshair")
        self.canvas.pack(fill=tk.BOTH, expand=True)
        self.canvas.bind("<ButtonPress-1>", self._on_press)
        self.canvas.bind("<B1-Motion>", self._on_drag)
        self.canvas.bind("<ButtonRelease-1>", self._on_release)

        # ---- Side panel (right) ----
        side = tk.Frame(main, width=290, bg="#f8fafc", padx=8, pady=8)
        side.pack(side=tk.RIGHT, fill=tk.Y)
        side.pack_propagate(False)

        tk.Label(side, text="ข้อในปีนี้ (คลิกเลือก)", font=("Segoe UI", 9, "bold"),
                  bg="#f8fafc").pack(anchor=tk.W)

        # Search / filter
        filter_frame = tk.Frame(side, bg="#f8fafc")
        filter_frame.pack(fill=tk.X, pady=(2, 4))
        tk.Label(filter_frame, text="กรอง:", bg="#f8fafc", font=("Segoe UI", 8),
                  fg="#64748b").pack(side=tk.LEFT)
        self.filter_var = tk.StringVar()
        self.filter_var.trace_add("write", lambda *_: self._refresh_listbox())
        tk.Entry(filter_frame, textvariable=self.filter_var,
                  font=("Segoe UI", 8), width=12).pack(side=tk.LEFT, padx=4)
        self.show_undone_var = tk.BooleanVar(value=False)
        tk.Checkbutton(filter_frame, text="แค่ยังไม่ทำ", variable=self.show_undone_var,
                        bg="#f8fafc", font=("Segoe UI", 8),
                        command=self._refresh_listbox).pack(side=tk.LEFT)

        # Listbox
        lb_frame = tk.Frame(side, bg="#f8fafc")
        lb_frame.pack(fill=tk.X)
        sb = tk.Scrollbar(lb_frame)
        sb.pack(side=tk.RIGHT, fill=tk.Y)
        self.q_listbox = tk.Listbox(lb_frame, font=("Courier New", 8), height=14,
                                     selectmode=tk.SINGLE, activestyle="none",
                                     selectbackground="#3b82f6", selectforeground="white",
                                     yscrollcommand=sb.set)
        self.q_listbox.pack(fill=tk.X)
        sb.config(command=self.q_listbox.yview)
        self.q_listbox.bind("<<ListboxSelect>>", self._on_q_select)

        # Question text preview
        tk.Label(side, text="โจทย์", font=("Segoe UI", 8, "bold"),
                  bg="#f8fafc").pack(anchor=tk.W, pady=(8, 2))
        self.txt_q = tk.Text(side, height=5, font=("Segoe UI", 7), wrap=tk.WORD,
                              state=tk.DISABLED, bg="#f1f5f9", relief=tk.FLAT)
        self.txt_q.pack(fill=tk.X)

        # Status & crop info
        self.lbl_status = tk.Label(side, text="", font=("Segoe UI", 8),
                                    bg="#f8fafc", fg="#64748b", wraplength=260, justify=tk.LEFT)
        self.lbl_status.pack(anchor=tk.W, pady=(4, 0))
        self.lbl_crop = tk.Label(side, text="ยังไม่ได้เลือกพื้นที่", font=("Segoe UI", 7),
                                   bg="#f8fafc", fg="#94a3b8")
        self.lbl_crop.pack(anchor=tk.W)

        # Buttons
        btn_frame = tk.Frame(side, bg="#f8fafc")
        btn_frame.pack(fill=tk.X, pady=(8, 0))

        self.btn_save = tk.Button(btn_frame, text="[SAVE] บันทึก Crop",
                                   font=("Segoe UI", 9, "bold"),
                                   bg="#22c55e", fg="white", relief=tk.FLAT,
                                   padx=8, pady=5, state=tk.DISABLED,
                                   command=self._save_crop)
        self.btn_save.pack(fill=tk.X, pady=2)

        self.btn_skip = tk.Button(btn_frame, text="[SKIP] ข้อนี้ไม่ต้องการรูป",
                                   font=("Segoe UI", 9),
                                   bg="#f59e0b", fg="white", relief=tk.FLAT,
                                   padx=8, pady=5,
                                   command=self._mark_no_image)
        self.btn_skip.pack(fill=tk.X, pady=2)

        self.btn_goto = tk.Button(btn_frame, text="[GOTO] ไปหน้าของข้อนี้",
                                   font=("Segoe UI", 9),
                                   bg="#6366f1", fg="white", relief=tk.FLAT,
                                   padx=8, pady=5,
                                   command=self._goto_question_page)
        self.btn_goto.pack(fill=tk.X, pady=2)

        tk.Frame(btn_frame, bg="#e2e8f0", height=1).pack(fill=tk.X, pady=6)

        # Stats
        self.lbl_stats = tk.Label(side, text="", font=("Segoe UI", 8),
                                   bg="#f8fafc", fg="#64748b")
        self.lbl_stats.pack(anchor=tk.W)

        tk.Frame(side, bg="#e2e8f0", height=1).pack(fill=tk.X, pady=6)
        tk.Button(side, text="สร้าง apply script",
                   font=("Segoe UI", 8), bg="#0f172a", fg="white",
                   relief=tk.FLAT, padx=6, pady=4,
                   command=self._show_stats).pack(fill=tk.X)

    # ===== Year & page management =====

    def _set_year(self, year: int):
        self.current_year = year
        self.year_var.set(year)
        self.year_questions = [q for q in self.all_questions if q["year"] == year]
        self.page_files = get_pages_for_year(year)
        self.page_idx = 0
        self._refresh_listbox()
        self._load_page_img()
        self._update_stats()

    def _load_page_img(self):
        if not self.page_files:
            self.canvas.delete("all")
            self.canvas.create_text(350, 450, text="ไม่พบรูปหน้านี้",
                                     fill="white", font=("Segoe UI", 14))
            self.img_orig = None
            self.lbl_page_info.config(text="ไม่มีรูป")
            return
        if self.page_idx >= len(self.page_files):
            self.page_idx = len(self.page_files) - 1
        if self.page_idx < 0:
            self.page_idx = 0

        path = self.page_files[self.page_idx]
        fname = Path(path).name
        self.lbl_page_info.config(text=f"{fname}  ({self.page_idx+1}/{len(self.page_files)})")
        self.img_orig = Image.open(path)
        self._render_image()
        self.crop_box = None
        self.lbl_crop.config(text="ยังไม่ได้เลือกพื้นที่")
        self.btn_save.config(state=tk.DISABLED)

    def _render_image(self):
        if self.img_orig is None:
            return
        cw = max(self.canvas.winfo_width(), self.CANVAS_W)
        ch = max(self.canvas.winfo_height(), self.CANVAS_H)
        iw, ih = self.img_orig.size
        self.scale = min(cw / iw, ch / ih)
        nw, nh = int(iw * self.scale), int(ih * self.scale)
        img_resized = self.img_orig.resize((nw, nh), Image.LANCZOS)
        self.img_tk = ImageTk.PhotoImage(img_resized)
        self.canvas.delete("all")
        self.canvas.create_image(0, 0, anchor=tk.NW, image=self.img_tk)

    def _prev_page_img(self):
        self.page_idx -= 1
        self._load_page_img()

    def _next_page_img(self):
        self.page_idx += 1
        self._load_page_img()

    def _jump_page(self, event=None):
        try:
            p = int(self.page_entry.get()) - 1
            if 0 <= p < len(self.page_files):
                self.page_idx = p
                self._load_page_img()
        except ValueError:
            pass

    def _goto_question_page(self):
        """ไปที่หน้าที่ข้อนี้เคยชี้ไว้ (imageUrl)"""
        q = self._selected_question()
        if not q:
            return
        url = q.get("imageUrl")
        if not url:
            self.lbl_status.config(text="ข้อนี้ไม่มี imageUrl — เลื่อนหาหน้าเองได้เลย", fg="#d97706")
            return
        fname = Path(url).name  # e.g. y60-p3.png
        for i, p in enumerate(self.page_files):
            if Path(p).name == fname:
                self.page_idx = i
                self._load_page_img()
                return
        self.lbl_status.config(text=f"ไม่พบไฟล์: {fname}", fg="red")

    # ===== Listbox =====

    def _refresh_listbox(self):
        keyword = self.filter_var.get().lower()
        undone_only = self.show_undone_var.get()
        self.q_listbox.delete(0, tk.END)
        self._listbox_items = []

        for q in self.year_questions:
            qid = q["id"]
            status = ""
            if qid in self.mapping:
                v = self.mapping[qid]
                status = " [ok]" if v else " [--]"
            if undone_only and qid in self.mapping:
                continue
            is_written = q.get("_written", False)
            prefix = "W" if is_written else "Q"
            preview = q.get("contextText", q.get("text", ""))[:40]
            row = f"{prefix}{q['questionNum']:>3}{status}  {preview}"
            if keyword and keyword not in row.lower():
                continue
            self.q_listbox.insert(tk.END, row)
            self._listbox_items.append(q)

        if self._listbox_items:
            self.q_listbox.selection_set(0)
            self._on_q_select(None)

    def _on_q_select(self, event):
        sel = self.q_listbox.curselection()
        if not sel:
            return
        q = self._listbox_items[sel[0]]
        self.selected_q_idx = sel[0]

        self.txt_q.config(state=tk.NORMAL)
        self.txt_q.delete("1.0", tk.END)
        if q.get("_written"):
            preview = f"[ข้อเขียน] ข้อ {q['questionNum']}\n{q.get('contextText','')[:300]}"
        else:
            preview = f"ข้อ {q['questionNum']}: {q.get('text','')[:400]}"
        self.txt_q.insert(tk.END, preview)
        self.txt_q.config(state=tk.DISABLED)

        qid = q["id"]
        if qid in self.mapping:
            v = self.mapping[qid]
            if v:
                self.lbl_status.config(text=f"[ok] -> {v}", fg="#16a34a")
            else:
                self.lbl_status.config(text="[--] ไม่ต้องการรูป", fg="#d97706")
        else:
            url = q.get("imageUrl", "")
            hint = f"imageUrl: {url}" if url else "ยังไม่มี imageUrl"
            self.lbl_status.config(text=f"ยังไม่ได้ทำ  ({hint})", fg="#64748b")

        self.crop_box = None
        self.lbl_crop.config(text="ยังไม่ได้เลือกพื้นที่")
        self.btn_save.config(state=tk.DISABLED)
        self._render_image()

    def _selected_question(self):
        items = getattr(self, "_listbox_items", [])
        idx = self.selected_q_idx
        if items and 0 <= idx < len(items):
            return items[idx]
        return None

    # ===== Canvas drawing =====

    def _on_press(self, event):
        self.rect_start = (event.x, event.y)
        if self.rect_id:
            self.canvas.delete(self.rect_id)

    def _on_drag(self, event):
        if not self.rect_start:
            return
        if self.rect_id:
            self.canvas.delete(self.rect_id)
        x0, y0 = self.rect_start
        self.rect_id = self.canvas.create_rectangle(
            x0, y0, event.x, event.y,
            outline="#ef4444", width=2, dash=(4, 4)
        )

    def _on_release(self, event):
        if not self.rect_start:
            return
        x0, y0 = self.rect_start
        x1, y1 = event.x, event.y
        lx, rx = sorted([x0, x1])
        ty, by = sorted([y0, y1])
        s = self.scale
        ox, oy, ox2, oy2 = int(lx/s), int(ty/s), int(rx/s), int(by/s)
        if self.img_orig:
            iw, ih = self.img_orig.size
            ox, oy, ox2, oy2 = max(0,ox), max(0,oy), min(ox2,iw), min(oy2,ih)
        if ox2-ox < 5 or oy2-oy < 5:
            self.lbl_crop.config(text="พื้นที่เล็กเกินไป ลากใหม่")
            return
        self.crop_box = (ox, oy, ox2, oy2)
        self.lbl_crop.config(text=f"crop: ({ox},{oy})-({ox2},{oy2})  {ox2-ox}x{oy2-oy}px")
        self.btn_save.config(state=tk.NORMAL)

    # ===== Actions =====

    def _save_crop(self):
        if not self.crop_box or not self.img_orig:
            return
        q = self._selected_question()
        if not q:
            return
        qid = q["id"]
        out_filename = f"{qid}.png"
        out_path = IMAGES_DIR / out_filename
        cropped = self.img_orig.crop(self.crop_box)
        cropped.save(out_path)
        new_url = f"/exam-images/{out_filename}"
        self.mapping[qid] = new_url
        save_mapping(self.mapping)
        self.lbl_status.config(text=f"[ok] บันทึก -> {new_url}", fg="#16a34a")
        self._refresh_listbox_status(qid, f" [ok]")
        self._update_stats()

    def _mark_no_image(self):
        q = self._selected_question()
        if not q:
            return
        qid = q["id"]
        self.mapping[qid] = None
        save_mapping(self.mapping)
        self.lbl_status.config(text="[--] ไม่ต้องการรูป", fg="#d97706")
        self._refresh_listbox_status(qid, " [--]")
        self._update_stats()

    def _refresh_listbox_status(self, qid: str, tag: str):
        items = getattr(self, "_listbox_items", [])
        for i, q in enumerate(items):
            if q["id"] == qid:
                current = self.q_listbox.get(i)
                for old in [" [ok]", " [--]"]:
                    current = current.replace(old, "")
                current = current.replace(f"Q{q['questionNum']:>3}", f"Q{q['questionNum']:>3}{tag}", 1)
                self.q_listbox.delete(i)
                self.q_listbox.insert(i, current)
                self.q_listbox.selection_set(i)
                break

    def _update_stats(self):
        year_qs = self.year_questions
        total = len(year_qs)
        done = sum(1 for q in year_qs if q["id"] in self.mapping and self.mapping[q["id"]])
        skipped = sum(1 for q in year_qs if q["id"] in self.mapping and self.mapping[q["id"]] is None)
        self.lbl_stats.config(text=f"ปี {self.current_year}: crop={done}  skip={skipped}  ยัง={total-done-skipped}/{total}")

        all_total = len(self.all_questions)
        all_done = sum(1 for q in self.all_questions if q["id"] in self.mapping)
        self.lbl_progress.config(text=f"รวมทั้งหมด: {all_done}/{all_total}")

    def _show_stats(self):
        done = sum(1 for v in self.mapping.values() if v)
        skip = sum(1 for v in self.mapping.values() if v is None)
        total = len(self.all_questions)
        messagebox.showinfo(
            "สถิติ",
            f"crop แล้ว: {done}\nข้ามแล้ว: {skip}\nยังไม่ทำ: {total-done-skip}/{total}\n\n"
            f"เมื่อพร้อมแล้วรัน:\n  python apply_crop_mapping.py"
        )


def main():
    root = tk.Tk()
    root.geometry("1100x940")
    app = CropTool(root)
    root.mainloop()


if __name__ == "__main__":
    main()
