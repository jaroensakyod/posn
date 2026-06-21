import re
txt = open('gen_questions.js', encoding='utf-8').read()
ids = re.findall(r"id: 'y60-q(\d+)'", txt)
nums = sorted(int(x) for x in set(ids))
print('All y60 IDs in gen_questions.js:', len(nums), nums)

# Check which are NOT in extras
extra_txt = open('gen_y60_extra.js', encoding='utf-8').read()
extra_ids = re.findall(r"id: 'y60-q(\d+)'", extra_txt)
extra_nums = sorted(int(x) for x in set(extra_ids))
print('Extra y60 IDs:', len(extra_nums), extra_nums)

combined = sorted(set(nums) | set(extra_nums))
print('Combined unique:', len(combined), combined)
missing = [q for q in range(1,61) if q not in combined]
print('Still missing:', missing)
