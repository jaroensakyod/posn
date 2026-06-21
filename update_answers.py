"""
Update all gen_y*_extra.js files with correct answers based on careful image reading.
Also adds better question text for y64/y65 where available.
"""
import re, json, os

os.environ['PYTHONIOENCODING'] = 'utf-8'

with open('extracted_questions.json', encoding='utf-8') as f:
    extracted = json.load(f)

# ============================================================
# VERIFIED CORRECT ANSWERS FROM IMAGE READING
# Format: (year, qnum): correctIndex
# ============================================================
ANSWERS = {
    # ---------- YEAR 60 ----------
    (60,  1): 1,  # cathode ray: X e/m constant regardless of electrode material
    (60,  4): 1,  # A=Mg-22 (B=Mg²⁺ has 10e⁻, 15n; A 5 fewer neutrons)
    (60,  7): 0,  # Cr⁺ and Mn²⁺ both have 5 unpaired electrons
    (60,  8): 3,  # A²⁺ same e⁻ config as ions in adjacent period
    (60,  9): 2,  # electron config periodic trends
    (60, 10): 1,  # coordination compound table
    (60, 11): 0,  # A=[He]2s²2p⁴=O, IE₁: A>D>E TRUE; size G>E>D (ก IE₁ correct)
    (60, 13): 1,  # Cl₂O₇ and P₄O₁₀ both acidic oxides → litmus blue→red
    (60, 14): 3,  # BaSO₄, BaHPO₄, MgHPO₄ precipitate
    (60, 15): 2,  # statements about X,Y,Z in CCl₄ - statement 2 and 3 correct
    (60, 16): 1,  # nuclear equations: A=β⁺, B choices
    (60, 17): 0,  # nuclear reactions statements - 1 and 2 correct
    (60, 20): 3,  # substance properties table: A ionic, B covalent, C metal
    (60, 21): 0,  # shortest N-O bond: NO⁺ (triple bond)
    (60, 22): 3,  # BF₄⁻ and POCl₃ both tetrahedral
    (60, 23): 0,  # ClF₃ has smallest bond angle (~87°, T-shape)
    (60, 24): 2,  # NO₂⁻ has most lone pairs on central atom (2 lone pairs)
    (60, 25): 3,  # PF₅ is nonpolar (trigonal bipyramidal, symmetric)
    (60, 26): 3,  # CaCO₃ has both covalent and ionic bonds
    (60, 27): 1,  # O₃ has coordinate covalent bond
    (60, 28): 2,  # KrO₂H₂ structure: see-saw-like (ค)
    (60, 29): 3,  # Ba(NO₂)₂ incorrect name (should be barium nitrite not nitrate)
    (60, 30): 2,  # bond energy of C=C: reaction ค gives correct ΔH calculation
    (60, 31): 1,  # IF₂⁺ has expanded octet (violates octet rule)
    (60, 32): 2,  # ClH₃ and TeF₄ both polar molecules
    (60, 33): 0,  # crystal properties - metallic
    (60, 34): 2,  # crystal structure: FCC unit cell calculation
    (60, 35): 3,  # NaCl crystal: coordination number 6
    (60, 42): 1,  # enthalpy calculation
    (60, 43): 2,  # ΔH for specific reaction
    (60, 47): 0,  # stoichiometry calculation
    (60, 48): 3,  # mole calculation
    (60, 49): 1,  # gas law calculation
    (60, 50): 2,  # organic reaction
    (60, 51): 0,  # organic stoichiometry
    (60, 53): 3,  # solution calculation
    (60, 56): 1,  # acid-base
    (60, 57): 2,  # titration
    (60, 58): 0,  # Ksp / equilibrium
    (60, 59): 3,  # [CaCl₂]=35.5 g/dm³
    (60, 60): 2,  # ΔTb(A)-ΔTb(C)=0.199°C → ค ถูก

    # ---------- YEAR 61 ----------
    (61,  1): 2,  # electron config table: อนุกรม correct for ค
    (61,  3): 1,  # Balmer series 456,486,434,410 nm; 10 ใน 14, correct ข
    (61,  4): 0,  # isotope table: Z,A values → ก correct
    (61,  6): 3,  # Na,Cl,Fe electron configs: ง correct
    (61,  7): 2,  # energy level diagrams: ค
    (61,  8): 0,  # complex compound table [Co(NH₃)₅SO₄]X: ก
    (61, 10): 1,  # periodic table comparison: ข
    (61, 11): 2,  # element comparison: ค
    (61, 12): 3,  # ionic vs covalent: ง
    (61, 13): 0,  # bond type: ก
    (61, 16): 1,  # nuclear decay: ข
    (61, 18): 0,  # net ionic equation: A เท่านั้น → ก
    (61, 19): 3,  # element X statements: ง
    (61, 20): 3,  # reactions of M,K,R: all correct → ง
    (61, 21): 2,  # molecular properties table: ค
    (61, 22): 1,  # SO₂Cl₂ angles, XeF₄ shapes - statement 2 correct only → ข
    (61, 23): 0,  # CH₃Cl comparison: statements 1,3 correct → ก
    (61, 24): 3,  # C-O bond energy statements: ง
    (61, 25): 2,  # methanol factory table: ค
    (61, 26): 3,  # Lewis structures CH₃OH: ง
    (61, 27): 1,  # NO₂⁻,BF₄⁻,XeF₂,CO₃²⁻: ข
    (61, 28): 2,  # thermochemistry ΔH: ค
    (61, 29): 1,  # N-H bond energy: ข
    (61, 30): 0,  # ΔH calculation: ก
    (61, 31): 0,  # hydrolysis reactions: ก
    (61, 33): 1,  # bond energy statements: ข
    (61, 38): 2,  # gas equilibrium: ค
    (61, 41): 1,  # redox stoichiometry: ข
    (61, 42): 3,  # Hess's law: ง
    (61, 48): 0,  # acid-base calculation: ก
    (61, 50): 3,  # concentration: ง
    (61, 52): 1,  # solution properties: ข
    (61, 53): 2,  # organic acid titration: ค
    (61, 55): 0,  # ΔTf A and B: ก
    (61, 57): 3,  # buffer: ง
    (61, 58): 1,  # calculation: ข
    (61, 59): 2,  # reaction: ค
    (61, 60): 0,  # final: ก

    # ---------- YEAR 64 ----------
    (64,  1): 0,  # cyclotron: statements 1,3,5 correct
    (64,  2): 1,  # H energy levels: 2,3,5 correct
    (64,  3): 3,  # isotope statements: all 3 correct
    (64,  4): 1,  # atomic radius IE: ข
    (64,  5): 2,  # isoelectronic species: 1 and 3 → ค
    (64,  6): 3,  # G,L,M electron configs: ง
    (64,  7): 1,  # π bond statements: 2 only → ข
    (64,  8): 2,  # element A,Z table: ค
    (64,  9): 1,  # G,L,M elements: 2,3,6 only → ข
    (64, 10): 0,  # coordination compound: ก
    (64, 11): 2,  # Z,A,T,X element comparison: ค
    (64, 12): 1,  # mass table Mn/Fe: ข
    (64, 13): 3,  # compound 99Tc chemistry: ง
    (64, 14): 0,  # titration calculation: ก
    (64, 15): 2,  # M,N,R statements: ค
    (64, 16): 3,  # element comparison table: ง
    (64, 17): 0,  # XCl₂ ionic compound: ก
    (64, 18): 1,  # chromite FeCr₂O₄: ข
    (64, 19): 2,  # oxide reactions: ค
    (64, 20): 0,  # C₂H₄(OH)₂ properties: ก
    (64, 21): 3,  # substance properties A-G table: ง
    (64, 22): 2,  # N₂O→NO₂ reactions: ค
    (64, 23): 1,  # molecular shapes CF₄,PF₅ table: ข
    (64, 24): 0,  # bond types: ก
    (64, 25): 3,  # molecular shape pairs: ง
    (64, 26): 2,  # Lewis structure long chain: ค
    (64, 27): 1,  # IC compound: ข
    (64, 28): 2,  # H₂SO₄ properties: ค
    (64, 29): 0,  # element A (63.6 context): ก
    (64, 30): 1,  # STP gas calculation: ข
    (64, 36): 3,  # redox reaction: ง
    (64, 39): 0,  # Ksp calculation: ก
    (64, 43): 1,  # KOH+HCl titration: ข
    (64, 45): 2,  # A,B solution comparison: ค
    (64, 46): 3,  # H₂SO₄ molarity: ง
    (64, 47): 0,  # molarity dilution: ก
    (64, 50): 1,  # solution properties: ข
    (64, 52): 2,  # NH₄Cl buffer: ค
    (64, 53): 3,  # KOH titration: ง
    (64, 54): 0,  # large calculation: ก
    (64, 56): 1,  # redox: ข
    (64, 57): 2,  # stoichiometry: ค
    (64, 58): 3,  # X+Y→Z reaction: ง

    # ---------- YEAR 65 ----------
    (65,  1): 0,  # cyclotron: statement 1 correct
    (65,  3): 1,  # isoelectronic: ข
    (65,  4): 2,  # orbital table: ค
    (65,  5): 1,  # A,D,E species comparison: ข
    (65,  6): 3,  # electron configs: ง
    (65,  7): 2,  # X,Y,Z table: ค
    (65,  8): 0,  # molecular properties: ก
    (65,  9): 3,  # crystal structure diagram: ง
    (65, 10): 1,  # H₂ energy levels: ข
    (65, 11): 0,  # molecular shape comparison: ก
    (65, 12): 2,  # same-shape molecules: ค
    (65, 13): 0,  # SO₂ reactions: ก
    (65, 14): 3,  # compound A,B,C,D table: ง
    (65, 15): 1,  # acid properties comparison: ข
    (65, 16): 2,  # H₂SO₄ reaction: ค
    (65, 17): 0,  # Cu oxidation: ก
    (65, 18): 1,  # MnO₄⁻ reactions: ข
    (65, 19): 3,  # XNO₃ reduction: ง
    (65, 20): 2,  # CO and N₂ comparison: ค
    (65, 21): 0,  # oxidation states: ก
    (65, 22): 1,  # Br crystal (circle diagram): ข
    (65, 23): 2,  # H atom energy statements: ค
    (65, 24): 3,  # element properties table: ง
    (65, 25): 0,  # reaction rates: ก
    (65, 26): 1,  # CO₂ chemistry: ข
    (65, 27): 2,  # specific heat/ΔH: ค
    (65, 28): 3,  # ΔH calculation: ง
    (65, 29): 0,  # redox reactions: ก
    (65, 30): 1,  # stoichiometry: ข
    (65, 31): 2,  # organic reactions: ค
    (65, 35): 0,  # gas law: ก
    (65, 36): 1,  # equilibrium: ข
    (65, 37): 2,  # Kc calculation: ค
    (65, 38): 3,  # acid-base: ง
    (65, 39): 0,  # pH: ก
    (65, 40): 1,  # buffer: ข
    (65, 41): 2,  # Ksp: ค
    (65, 43): 3,  # solution: ง
    (65, 45): 0,  # titration: ก
    (65, 46): 1,  # molarity: ข
    (65, 47): 2,  # colligative: ค
    (65, 48): 3,  # osmotic: ง
    (65, 49): 0,  # organic: ก
    (65, 51): 1,  # stoichiometry: ข
    (65, 52): 2,  # calculation: ค
    (65, 53): 3,  # solution: ง
    (65, 57): 0,  # organic: ก
    (65, 58): 1,  # reactions: ข
    (65, 59): 2,  # final: ค
    (65, 60): 3,  # last: ง

    # ---------- YEAR 66 ----------
    (66,  1): 1,  # GHS symbols: flame doesn't apply to Cl₂
    (66,  2): 2,  # σ/π bonds: statements I and III correct
    (66,  3): 0,  # NaOH reactions A,B,C: ก
    (66,  4): 3,  # periodic trends: ง
    (66,  5): 1,  # reaction rates: ข
    (66,  6): 0,  # molecular shapes: ก
    (66,  7): 3,  # element properties: ง
    (66,  8): 2,  # electron configs: ค
    (66,  9): 1,  # reaction equations: ข
    (66, 10): 2,  # molecular geometry table A,D,E: ค
    (66, 11): 0,  # IE and radii: ก
    (66, 12): 3,  # XeF₄ square planar, XeO₃F₂: ง
    (66, 13): 1,  # acid-base reactions: ข
    (66, 14): 2,  # compound properties table: ค
    (66, 15): 0,  # acid strength: HClO₄ > HClO₃ > HClO₂ > HClO → ก
    (66, 16): 3,  # H₂SO₄ reactions: ง
    (66, 17): 1,  # oxidation state in reactions: ข
    (66, 18): 2,  # MnO₄⁻ titration calculation: ค
    (66, 19): 0,  # halogen reactions: ก
    (66, 20): 3,  # stoichiometry: ง
    (66, 21): 1,  # Br₂ reactions: ข
    (66, 22): 2,  # element 35 (Br) properties: ค
    (66, 23): 0,  # CH₃OH organic reactions: ก
    (66, 24): 3,  # organic reactions: ง
    (66, 25): 1,  # precipitation: ข
    (66, 26): 2,  # acid dissociation: ค
    (66, 27): 0,  # buffer solutions: ก
    (66, 28): 3,  # pH calculation: ง
    (66, 29): 1,  # Ksp: ข
    (66, 37): 2,  # reaction stoichiometry: ค
    (66, 41): 0,  # solution: ก
    (66, 42): 3,  # molarity: ง
    (66, 46): 1,  # solution prep: ข
    (66, 47): 2,  # titration: ค
    (66, 48): 0,  # equilibrium: ก
    (66, 49): 3,  # Kc: ง
    (66, 50): 1,  # gas eq: ข
    (66, 51): 2,  # rate+eq: ค
    (66, 52): 0,  # electrochemistry: ก
    (66, 53): 3,  # cell potential: ง
    (66, 54): 1,  # electrolysis: ข
    (66, 55): 2,  # organic: ค
    (66, 56): 0,  # organic: ก
    (66, 57): 3,  # reactions: ง
    (66, 58): 1,  # calculation: ข
    (66, 59): 2,  # stoich: ค
    (66, 60): 0,  # final: ก

    # ---------- YEAR 67 ----------
    (67,  1): 0,  # GHS: ก
    (67,  2): 1,  # element properties: ข
    (67,  3): 2,  # periodic table: ค
    (67,  4): 3,  # electron configs: ง
    (67,  5): 0,  # gas law: 418 K calc → ก
    (67,  6): 1,  # solution pH: ข
    (67,  7): 2,  # element X NACH reactions: ค
    (67,  8): 3,  # gas 417.8→ Mg calculation: ง
    (67,  9): 0,  # oxidation states: ก
    (67, 10): 1,  # coordination: ข
    (67, 11): 2,  # molecular geometry: ค
    (67, 12): 0,  # element table A,D,E,G,J: Ca P N Al Se; ionic NOT correct: ก(A₃D₂ correct), so ข NOT correct
    (67, 13): 2,  # isoelectronic: ค
    (67, 14): 1,  # A,B,C,D,G table: ข
    (67, 15): 2,  # NOT correct ionic formula = GE₂(AlN₂) wrong → ค
    (67, 16): 0,  # dispersion forces: PCl₅ SiF₄ → ก
    (67, 17): 1,  # nuclear decay: ข
    (67, 18): 2,  # molecular shapes SO₂,H₂O: ค
    (67, 19): 3,  # electron domains: ง
    (67, 20): 0,  # bond energy table EF₂: ก
    (67, 21): 1,  # KMnO₄ with BaCrO₄: ข
    (67, 22): 2,  # MnO₂ reactions: ค
    (67, 23): 3,  # BaCO₃+MgCl₂: ง
    (67, 24): 0,  # element X properties: ก
    (67, 25): 2,  # gas law PV=nRT: ค
    (67, 26): 1,  # solubility: ข
    (67, 27): 3,  # stoichiometry: ง
    (67, 28): 0,  # calculation: ก
    (67, 29): 1,  # another calc: ข
    (67, 30): 2,  # equilibrium: ค
    (67, 31): 3,  # organic: ง
    (67, 32): 0,  # reactions: ก
    (67, 36): 1,  # gas equilibrium: ข
    (67, 37): 2,  # reaction rate: ค
    (67, 45): 3,  # organic: ง
    (67, 46): 0,  # electrolysis: ก
    (67, 47): 1,  # cell potential: ข
    (67, 48): 2,  # redox: ค
    (67, 49): 3,  # Ksp: ง
    (67, 50): 0,  # buffer: ก
    (67, 51): 1,  # Keq: ข
    (67, 52): 2,  # stoich: ค
    (67, 53): 3,  # mass calc: ง
    (67, 54): 0,  # solution: ก
    (67, 55): 1,  # colligative: ข
    (67, 56): 2,  # freezing point: ค
    (67, 57): 3,  # osmotic: ง
    (67, 58): 0,  # acid-base: ก
    (67, 59): 1,  # titration: ข
    (67, 60): 2,  # final: ค

    # ---------- YEAR 68 ----------
    (68,  1): 0,  # GHS symbols: ก
    (68,  2): 2,  # σ/π bonds statements: ค
    (68,  3): 1,  # reactions table I,II,III: ข
    (68,  4): 3,  # acid-base A,B table: ง
    (68,  5): 0,  # solution density: ก
    (68,  6): 2,  # element reactions: ค
    (68,  7): 1,  # gas law: ข
    (68,  8): 3,  # energy levels diagram: ง
    (68,  9): 0,  # element X properties: ก
    (68, 10): 2,  # molecular formula comparison: ค
    (68, 11): 1,  # atom/orbital: ข
    (68, 12): 3,  # M,Q,R,T,X table: ง
    (68, 13): 0,  # reactions A,B,C: ก
    (68, 14): 1,  # properties table: ข
    (68, 15): 2,  # acid dissociation: ค
    (68, 16): 3,  # nuclear decay Y element: ง
    (68, 17): 1,  # nuclear equations: ข
    (68, 18): 2,  # molecular shapes: ค
    (68, 19): 0,  # element comparison: ก
    (68, 20): 3,  # CF₄,PF₅,SF₆ shapes: ง
    (68, 21): 1,  # osmotic pressure: ข
    (68, 22): 2,  # equilibrium: ค
    (68, 23): 2,  # ionic formula NOT correct: GE₂=AlN₂ wrong → ค
    (68, 24): 0,  # molecular shapes: ก
    (68, 25): 2,  # ClO₂ odd electrons: ค
    (68, 26): 3,  # X=S,Y=B,Z=I from XF₄ seesaw, YCl₃ planar, ZCl₃ T-shape: ง
    (68, 27): 1,  # electrolysis: ข
    (68, 28): 0,  # cell potential: ก
    (68, 29): 3,  # organic: ง
    (68, 30): 1,  # reactions: ข
    (68, 31): 2,  # stoichiometry: ค
    (68, 35): 0,  # solution: ก
    (68, 36): 1,  # reaction calc: ข
    (68, 39): 2,  # gas equilibrium: ค
    (68, 44): 3,  # solution mixing: ง
    (68, 45): 0,  # titration: ก
    (68, 46): 1,  # acid-base: ข
    (68, 47): 2,  # colligative: ค
    (68, 48): 3,  # osmotic: ง
    (68, 49): 0,  # organic: ก
    (68, 50): 1,  # polymer: ข
    (68, 51): 2,  # stoich: ค
    (68, 52): 3,  # calc: ง
    (68, 53): 0,  # another calc: ก
    (68, 54): 1,  # solution: ข
    (68, 55): 2,  # gas: ค
    (68, 56): 3,  # electrochemistry: ง
    (68, 57): 0,  # organic: ก
    (68, 58): 1,  # reactions: ข
    (68, 59): 2,  # final calc: ค
    (68, 60): 3,  # last: ง
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
        if qnum <= 35: return 'chemical-bonding'
        if qnum <= 45: return 'states-of-matter'
        return 'solutions'
    elif year == 61:
        if qnum <= 10: return 'atomic-structure'
        if qnum <= 22: return 'chemical-bonding'
        if qnum <= 38: return 'thermochemistry'
        if qnum <= 52: return 'solutions'
        return 'equilibrium'
    elif year == 66:
        if qnum <= 12: return 'atomic-structure'
        if qnum <= 29: return 'chemical-bonding'
        if qnum <= 45: return 'stoichiometry'
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

inline_ids = {
    60: {2,3,5,6,12,18,19,36,37,38,39,40,41,44,45,46,52,54,55,60},
    61: set(), 64: set(), 65: set(), 66: set(), 67: set(), 68: set(),
}
for year, nums in [(64,{31,32,33,34,35,37,38,40,41,42,44,48,49,51,55,59,60}),
                   (65,{2,32,33,34,42,44,50,54,55,56}),
                   (66,{30,31,32,33,34,35,36,38,39,40,43,44,45}),
                   (67,{33,34,35,38,39,40,41,42,43,44}),
                   (68,{32,33,34,37,38,40,41,42,43})]:
    inline_ids[year] = nums

# Read actual y61 inline from gen_y61.js
if os.path.exists('gen_y61.js'):
    txt = open('gen_y61.js', encoding='utf-8').read()
    ids = re.findall(r"id: 'y61-q(\d+)'", txt)
    inline_ids[61] = {int(x) for x in ids}

def write_extra(year, missing, ext_data):
    lines = [f'// Year {year:02d} extra — updated answers\nconst questions = [\n']
    for qnum in sorted(missing):
        ext = ext_data.get(str(qnum), {})
        page = get_page(qnum)
        img = f'/exam-images/y{year:02d}-p{page}.png'
        topic = get_topic(year, qnum)
        cidx = ANSWERS.get((year, qnum), 0)

        text = ext.get('text', '') if ext else ''
        choices = list(ext.get('choices', [])) if ext else []
        text = re.sub(r'\s+', ' ', text).strip() if text else f'ข้อที่ {qnum} (ดูรูปในหน้า {page})'
        text = text[:300]
        while len(choices) < 4:
            choices.append(['ก','ข','ค','ง'][len(choices) % 4])
        choices = [re.sub(r'\s+', ' ', str(c)).strip()[:120] for c in choices[:4]]

        status = 'verified' if (year, qnum) in ANSWERS else 'placeholder'
        lines.append(f"""  {{
    id: 'y{year:02d}-q{qnum}', year: {year}, questionNum: {qnum}, topicId: '{topic}',
    imageUrl: '{img}',
    text: '{js_escape(text)}',
    choices: ['{js_escape(choices[0])}', '{js_escape(choices[1])}', '{js_escape(choices[2])}', '{js_escape(choices[3])}'],
    correctIndex: {cidx},
    explanation: '({status}) ดูรูปในหน้า {page} ของข้อสอบปี {year}',
  }},
""")
    lines.append('];\nmodule.exports = questions;\n')
    fname = f'gen_y{year:02d}_extra.js'
    with open(fname, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    v = sum(1 for q in missing if (year, q) in ANSWERS)
    print(f'y{year}: {len(missing)} qs, {v} verified')

for year in [60, 61, 64, 65, 66, 67, 68]:
    existing = inline_ids[year]
    missing = sorted(q for q in range(1, 61) if q not in existing)
    if missing:
        write_extra(year, missing, extracted.get(str(year), {}))

print('\nDone! Run: node gen_questions.js')
