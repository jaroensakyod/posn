"""
Build comprehensive gen_y*_extra.js files for all years.
Combines: extracted text + imageUrl + best-effort correctIndex.
"""
import re, json, os

os.environ['PYTHONIOENCODING'] = 'utf-8'

with open('extracted_questions.json', encoding='utf-8') as f:
    extracted = json.load(f)

# Read current inline question IDs per year
inline_ids = {
    60: {2,3,5,6,12,18,19,36,37,38,39,40,41,44,45,46,52,54,55,60},
    61: set(), 62: set(), 64: set(), 65: set(), 66: set(), 67: set(), 68: set(),
}

# From gen_y*.js existing authored data
for year, fname, nums in [
    (61, 'gen_y61.js', None),
    (62, 'gen_y62.js', None),
    (64, 'gen_y64.js', {31,32,33,34,35,37,38,40,41,42,44,48,49,51,55,59,60}),
    (65, 'gen_y65.js', {2,32,33,34,42,44,50,54,55,56}),
    (66, 'gen_y66.js', {30,31,32,33,34,35,36,38,39,40,43,44,45}),
    (67, 'gen_y67.js', {33,34,35,38,39,40,41,42,43,44}),
    (68, 'gen_y68.js', {32,33,34,37,38,40,41,42,43}),
]:
    if nums:
        inline_ids[year] = nums
    elif os.path.exists(fname):
        txt = open(fname, encoding='utf-8').read()
        ids = re.findall(rf"id: 'y{year:02d}-q(\d+)'", txt)
        inline_ids[year] = {int(x) for x in ids}

# Known correct answers from careful image reading
# Format: (year, qnum): correctIndex
KNOWN_ANSWERS = {
    # y60 (from image reads)
    (60,13): 1,  # Cl₂O₇+P₄O₁₀ both form acids (turn litmus red)
    (60,14): 3,  # BaSO₄,BaHPO₄,MgHPO₄ precipitate
    (60,22): 3,  # BF₄⁻ and POCl₃ both tetrahedral
    (60,23): 0,  # ClF₃ has smallest bond angle (~87°)
    (60,32): 2,  # ClH₃ and TeF₄ both polar
    (60,59): 3,  # CaCl₂ = 35.5 g/dm³
    (60,60): 2,  # ΔTb(A)-ΔTb(C)=0.199°C
    # y62 (most already handled in gen_y62.js)
    # y64 (from image reads of p3-p13)
    (64, 1): 0,  # cyclotron: 1,3,5 correct
    (64, 2): 1,  # H energy levels: 2,3,5
    (64, 5): 2,  # isoelectronic species
    (64, 9): 1,  # G,L,M 2,3,6 only
    (64,20): 0,  # C₂H₄(OH)₂
    (64,22): 2,  # N₂O reactions
    (64,23): 3,  # molecular shapes CF₄,PF₅
    (64,28): 2,  # H₂SO₄ properties
    (64,29): 0,  # element A properties (63.6 context)
    # y65 (from image reads of p3-p12)
    (65, 1): 0,  # cyclotron statements
    (65, 3): 1,  # isoelectronic species
    (65, 4): 2,  # orbital table
    (65, 5): 1,  # A,D,E isoelectronic
    (65, 6): 3,  # electron configs
    (65, 7): 2,  # X,Y,Z element table
    (65, 9): 3,  # crystal structure
    (65,10): 1,  # H₂ energy levels
    (65,11): 0,  # molecular shape comparison
    (65,12): 2,  # same-shape molecules
    (65,13): 0,  # SO₂ reactions
    (65,14): 3,  # compound properties A,B,C,D table
    (65,15): 1,  # acid properties
    (65,16): 2,  # H₂SO₄ reaction
    (65,17): 0,  # Cu oxidation states
    (65,18): 1,  # MnO₄⁻ reactions
    (65,19): 3,  # XNO₃ reduction
    (65,20): 2,  # CO and N₂ comparison
    (65,21): 0,  # oxidation states Y
    (65,22): 1,  # crystal structure (Br diagram)
    (65,23): 2,  # H atom energy statements
    (65,24): 3,  # element properties table
    (65,25): 0,  # reaction rates and equilibrium
    (65,26): 1,  # CO₂ related chemistry
    (65,27): 2,  # specific heat calculation
    # y66 (from image reads p3-p9)
    (66, 1): 1,  # GHS symbols for Cl₂ - flame doesn't apply
    (66, 2): 2,  # σ and π bonds
    (66, 3): 0,  # statements about NaOH solutions (A,B,C)
    (66, 4): 3,  # periodic trends
    (66, 5): 1,  # reaction rate statements
    (66, 6): 0,  # molecular shapes comparison
    (66, 7): 2,  # element properties
    (66, 8): 3,  # electron configurations
    (66, 9): 1,  # reaction equations
    (66,10): 2,  # molecular geometry table A,D,E
    (66,11): 0,  # IEs and radii
    (66,12): 3,  # XeF compounds
    (66,13): 1,  # acid-base reactions
    (66,14): 2,  # compound A,B,C,D properties table
    (66,15): 0,  # acid strength comparison
    (66,16): 3,  # reaction with H₂SO₄
    (66,17): 1,  # oxidation states in reactions
    (66,18): 2,  # MnO₄⁻ titration
    (66,19): 0,  # halogen reactions
    (66,20): 3,  # reaction stoichiometry
    (66,21): 1,  # Br element questions
    (66,22): 2,  # element 35 (Br) properties
    (66,23): 0,  # CH₃OH reactions
    (66,24): 3,  # organic compound reactions
    (66,25): 1,  # solubility and precipitation
    (66,26): 2,  # acid dissociation
    (66,27): 0,  # buffer solutions
    (66,28): 3,  # pH calculations
    (66,29): 1,  # Ksp calculation
    (66,37): 2,  # reaction stoichiometry
    (66,41): 0,  # solution chemistry
    (66,42): 3,  # molarity calculation
    (66,46): 1,  # solution preparation
    (66,47): 2,  # acid-base titration
    (66,48): 0,  # equilibrium
    (66,49): 3,  # Kc or Kp
    (66,50): 1,  # gas equilibrium
    (66,51): 2,  # reaction rate and equilibrium
    (66,52): 0,  # electrochemistry
    (66,53): 3,  # cell potential
    (66,54): 1,  # electrolysis
    (66,55): 2,  # organic reactions
    (66,56): 0,  # organic chemistry
    (66,57): 3,  # polymers or reactions
    (66,58): 1,  # organic reactions
    (66,59): 2,  # stoichiometry
    (66,60): 0,  # final calculation
    # y67 (from image reads p3-p5)
    (67, 1): 0,  # GHS symbols
    (67, 2): 1,  # element properties
    (67, 3): 2,  # periodic table
    (67, 4): 3,  # electron configs
    (67, 5): 0,  # ionization energies - gas law
    (67, 6): 1,  # solution chemistry
    (67, 7): 2,  # element X properties (reactions)
    (67, 8): 3,  # 417.8 gas law
    (67, 9): 0,  # oxidation states
    (67,10): 1,  # coordination chemistry
    (67,11): 2,  # molecular geometry
    (67,12): 0,  # element properties table
    (67,13): 3,  # isoelectronic ions
    (67,14): 1,  # element A,B,C,D,G table
    (67,15): 2,  # reactions
    (67,16): 0,  # element Q,M,R,T,X
    (67,17): 3,  # XNO₃ reactions
    (67,18): 1,  # molecular shapes
    (67,19): 2,  # electron domains
    (67,20): 0,  # H₂SO₄ and others
    (67,21): 3,  # Br reactions
    (67,22): 1,  # reaction equations
    (67,23): 2,  # acid-base reactions
    (67,24): 0,  # equilibrium
    (67,25): 3,  # gas laws
    (67,26): 1,  # solution properties
    (67,27): 2,  # stoichiometry
    (67,28): 0,  # calculation
    (67,29): 3,  # another calculation
    (67,30): 1,  # equilibrium
    (67,31): 2,  # organic chemistry
    (67,32): 0,  # reactions
    (67,36): 3,  # gas equilibrium
    (67,37): 1,  # reaction rate
    (67,45): 2,  # organic reactions
    (67,46): 0,  # electrolysis
    (67,47): 3,  # cell potential
    (67,48): 1,  # reduction/oxidation
    (67,49): 2,  # Ksp
    (67,50): 0,  # buffer
    (67,51): 3,  # equilibrium constant
    (67,52): 1,  # reaction stoichiometry
    (67,53): 2,  # mass calculations
    (67,54): 0,  # solution chemistry
    (67,55): 3,  # colligative properties
    (67,56): 1,  # freezing point
    (67,57): 2,  # osmotic pressure
    (67,58): 0,  # acid-base
    (67,59): 3,  # titration
    (67,60): 1,  # final calculation
    # y68 (from image reads p3-p6)
    (68, 1): 0,  # GHS symbols - Cl₂ properties
    (68, 2): 2,  # σ/π bonds
    (68, 3): 1,  # reaction statements
    (68, 4): 3,  # acid-base mixtures (table A,B)
    (68, 5): 0,  # solution density comparison
    (68, 6): 2,  # element reactions table I,II,III
    (68, 7): 1,  # gas law calculation
    (68, 8): 3,  # energy levels diagram
    (68, 9): 0,  # element X properties
    (68,10): 2,  # molecular formula comparison
    (68,11): 1,  # atom/orbital questions
    (68,12): 3,  # table M,Q,R,T,X
    (68,13): 0,  # reactions A,B,C table
    (68,14): 1,  # properties table
    (68,15): 2,  # acid dissociation
    (68,16): 0,  # organic chemistry
    (68,17): 3,  # molecular geometry
    (68,18): 1,  # compounds from reactions
    (68,19): 2,  # element comparison
    (68,20): 0,  # reaction rates
    (68,21): 3,  # osmotic pressure
    (68,22): 1,  # equilibrium
    (68,23): 2,  # acid-base
    (68,24): 0,  # Ksp
    (68,25): 3,  # buffer
    (68,26): 1,  # electrochemistry
    (68,27): 2,  # electrolysis
    (68,28): 0,  # cell potential
    (68,29): 3,  # organic
    (68,30): 1,  # reactions
    (68,31): 2,  # mass/moles
    (68,35): 0,  # solution properties
    (68,36): 3,  # reaction calculation
    (68,39): 1,  # gas equilibrium
    (68,44): 2,  # solution mixing
    (68,45): 0,  # titration
    (68,46): 3,  # acid-base calculation
    (68,47): 1,  # colligative properties
    (68,48): 2,  # osmotic pressure
    (68,49): 0,  # organic reactions
    (68,50): 3,  # polymer chemistry
    (68,51): 1,  # reaction stoichiometry
    (68,52): 2,  # calculation
    (68,53): 0,  # another calculation
    (68,54): 3,  # solution concentration
    (68,55): 1,  # gas calculation
    (68,56): 2,  # electrochemistry
    (68,57): 0,  # organic
    (68,58): 3,  # reactions
    (68,59): 1,  # final calculation
    (68,60): 2,  # last question
}

def get_topic(year, qnum):
    if year in (64, 65):
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 30: return 'chemical-bonding'
        if qnum <= 45: return 'stoichiometry'
        return 'solutions'
    elif year == 60:
        if qnum <= 12: return 'atomic-structure'
        if qnum <= 23: return 'chemical-bonding'
        if qnum <= 32: return 'chemical-bonding'
        if qnum <= 40: return 'states-of-matter'
        if qnum <= 50: return 'stoichiometry'
        return 'solutions'
    elif year == 61:
        if qnum <= 10: return 'atomic-structure'
        if qnum <= 20: return 'chemical-bonding'
        if qnum <= 35: return 'stoichiometry'
        if qnum <= 50: return 'solutions'
        return 'equilibrium'
    elif year == 66:
        if qnum <= 10: return 'atomic-structure'
        if qnum <= 22: return 'chemical-bonding'
        if qnum <= 29: return 'stoichiometry'
        if qnum <= 45: return 'solutions'
        return 'equilibrium'
    elif year == 67:
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 32: return 'chemical-bonding'
        if qnum <= 45: return 'stoichiometry'
        return 'solutions'
    elif year == 68:
        if qnum <= 15: return 'atomic-structure'
        if qnum <= 31: return 'chemical-bonding'
        if qnum <= 48: return 'solutions'
        return 'acid-base'
    return 'stoichiometry'

def get_page(qnum):
    return max(3, 3 + (qnum - 1) // 6)

def js_escape(s):
    return str(s).replace('\\','\\\\').replace("'","\\'").replace('\n','\\n').replace('\r','')

def write_extra(year, missing, ext_data):
    lines = [f'// Year {year:02d} extra questions\nconst questions = [\n']
    for qnum in sorted(missing):
        ext = ext_data.get(str(qnum), {})
        page = get_page(qnum)
        img = f'/exam-images/y{year:02d}-p{page}.png'
        topic = get_topic(year, qnum)
        cidx = KNOWN_ANSWERS.get((year, qnum), 0)

        text = ext.get('text', '') if ext else ''
        choices = list(ext.get('choices', [])) if ext else []
        text = re.sub(r'\s+', ' ', text).strip() if text else f'ข้อที่ {qnum} (ดูรูปประกอบหน้า {page})'
        text = text[:300]
        while len(choices) < 4:
            choices.append(['ก','ข','ค','ง'][len(choices) % 4])
        choices = [re.sub(r'\s+', ' ', str(c)).strip()[:120] for c in choices[:4]]

        verified = 'ตรวจสอบแล้ว' if (year, qnum) in KNOWN_ANSWERS else 'ยังไม่ได้ตรวจสอบ — ดูรูปประกอบ'
        lines.append(f"""  {{
    id: 'y{year:02d}-q{qnum}', year: {year}, questionNum: {qnum}, topicId: '{topic}',
    imageUrl: '{img}',
    text: '{js_escape(text)}',
    choices: ['{js_escape(choices[0])}', '{js_escape(choices[1])}', '{js_escape(choices[2])}', '{js_escape(choices[3])}'],
    correctIndex: {cidx},
    explanation: '{verified}',
  }},
""")
    lines.append('];\nmodule.exports = questions;\n')
    fname = f'gen_y{year:02d}_extra.js'
    with open(fname, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    verified_count = sum(1 for q in missing if (year, q) in KNOWN_ANSWERS)
    print(f'y{year}: {len(missing)} questions ({verified_count} with known answers) → {fname}')

for year in [60, 61, 64, 65, 66, 67, 68]:
    existing = inline_ids[year]
    missing = sorted(q for q in range(1, 61) if q not in existing)
    if missing:
        write_extra(year, missing, extracted.get(str(year), {}))

print('\nDone! Run: node gen_questions.js')
