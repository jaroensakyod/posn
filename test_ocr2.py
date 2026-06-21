"""
Try higher DPI render + image preprocessing for better OCR accuracy.
"""
import fitz
import pytesseract
from PIL import Image, ImageFilter, ImageEnhance
import io, os

os.environ['TESSDATA_PREFIX'] = r'C:\Users\ASUS\miniconda3\Library\share\tessdata'
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\ASUS\miniconda3\Library\bin\tesseract.exe'

doc = fitz.open('public/exams/posn1-62-chem.pdf')
page = doc[2]  # page 3 (0-indexed)

# Render at 4x zoom (~300 dpi)
mat = fitz.Matrix(4, 4)
pix = page.get_pixmap(matrix=mat, colorspace=fitz.csGRAY)
img_data = pix.tobytes('png')
img = Image.open(io.BytesIO(img_data))

# Enhance sharpness and contrast
img = ImageEnhance.Contrast(img).enhance(1.5)
img = ImageEnhance.Sharpness(img).enhance(2.0)

text = pytesseract.image_to_string(img, lang='tha+eng', config='--psm 6 --oem 3')
print(text[:3000])
doc.close()
