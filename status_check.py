import re, json

txt = open('src/data/chemistry/pastExamQuestions.ts', encoding='utf-8').read()
pairs = re.findall(r'"year":\s*(\d+)[^}]*?"questionNum":\s*(\d+)[^}]*?"correctIndex":\s*(\d+)', txt)

print(f'Total: {len(pairs)} questions')
needs_review = 0
for y in [60,61,62,64,65,66,67,68]:
    qs = [(int(n),int(c)) for yr,n,c in pairs if yr==str(y)]
    zeros = sum(1 for _,c in qs if c==0)
    print(f'  y{y}: {len(qs)} questions, {zeros} with correctIndex=0 (need review)')
    needs_review += zeros

print(f'\nTotal needing review: {needs_review}')
print(f'Total with answers: {len(pairs)-needs_review}')

# Check bundle size of generated TS file
import os
size_kb = os.path.getsize('src/data/chemistry/pastExamQuestions.ts') / 1024
print(f'\npastExamQuestions.ts size: {size_kb:.0f} KB')
