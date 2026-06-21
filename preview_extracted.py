import json

with open('extracted_questions.json', encoding='utf-8') as f:
    data = json.load(f)

for year in ['60', '61', '62', '66', '67', '68']:
    qs = data.get(year, {})
    print(f'\n=== y{year}: {len(qs)} questions ===')
    for qnum in sorted(qs.keys(), key=int)[:4]:
        q = qs[qnum]
        print(f'  Q{qnum} (p{q["page"]}, {q["image_count"]} imgs): {q["text"][:70]}')
        for ci, c in enumerate(q["choices"]):
            print(f'    ({ci+1}) {c[:50]}')
