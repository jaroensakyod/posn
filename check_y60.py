import re
txt = open('src/data/chemistry/pastExamQuestions.ts', encoding='utf-8').read()
pairs = re.findall(r'"year":\s*(\d+)[^}]*?"questionNum":\s*(\d+)', txt)
y60 = sorted(int(n) for y,n in pairs if y=='60')
print('y60 existing:', len(y60), y60)
all_missing = [q for q in range(1,61) if q not in y60]
print('y60 missing:', len(all_missing), all_missing)
