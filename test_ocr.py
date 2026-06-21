import pytesseract
from PIL import Image
import os

os.environ['TESSDATA_PREFIX'] = r'C:\Users\ASUS\miniconda3\Library\share\tessdata'
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\ASUS\miniconda3\Library\bin\tesseract.exe'

img = Image.open('public/exam-images/y62-p3.png')
text = pytesseract.image_to_string(img, lang='tha+eng', config='--psm 6')
print(text[:2000])
