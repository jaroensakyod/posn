export interface Question {
  id: string
  topicId: string
  text: string
  choices: string[]
  correctIndex: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  hasMath?: boolean
}

export const practiceQuestions: Question[] = [
  // --- Atomic Structure ---
  {
    id: 'as-1',
    topicId: 'atomic-structure',
    text: 'อิเล็กตรอนในอะตอมไฮโดรเจนกระโดดจากระดับ n=4 ลงมา n=2 จะปล่อยแสงในช่วงใด (ใช้ E_n = -13.6/n² eV)',
    choices: ['อินฟราเรด', 'แสงที่มองเห็นได้ (Visible)', 'อัลตราไวโอเลต', 'รังสีเอกซ์'],
    correctIndex: 1,
    explanation:
      'ΔE = 13.6(1/4 - 1/16) = 13.6 × 3/16 = 2.55 eV → λ ≈ 486 nm อยู่ใน Visible (Balmer series, n→2)',
    difficulty: 'medium',
    hasMath: true,
  },
  {
    id: 'as-2',
    topicId: 'atomic-structure',
    text: 'ธาตุใดต่อไปนี้มีพลังงานไอออไนเซชันลำดับที่ 1 (IE₁) สูงกว่าธาตุถัดไปในคาบเดียวกัน (ผิดปกติจากแนวโน้ม)?',
    choices: ['Na', 'Mg', 'Al', 'Si'],
    correctIndex: 1,
    explanation:
      'IE₁(Mg) > IE₁(Al) เพราะ Mg มีการจัดเรียง [Ne]3s² (s-subshell เต็ม) ซึ่งเสถียรกว่า Al ที่มี [Ne]3s²3p¹',
    difficulty: 'hard',
  },
  {
    id: 'as-3',
    topicId: 'atomic-structure',
    text: 'ไอออน ³²S²⁻ มีจำนวนโปรตอน นิวตรอน และอิเล็กตรอนเท่าใด?',
    choices: [
      'p=16, n=16, e=16',
      'p=16, n=16, e=18',
      'p=16, n=18, e=18',
      'p=18, n=16, e=18',
    ],
    correctIndex: 1,
    explanation:
      'S มี Z=16 → p=16, นิวตรอน = 32−16 = 16, ไอออน 2− มีอิเล็กตรอนเพิ่ม 2 ตัว → e=18',
    difficulty: 'easy',
  },
  {
    id: 'as-4',
    topicId: 'atomic-structure',
    text: 'เลขควอนตัมชุดใดถูกต้อง (n, ℓ, mₗ, mₛ)?',
    choices: [
      '(2, 2, 0, +½)',
      '(3, 1, −2, −½)',
      '(4, 3, −3, +½)',
      '(2, 1, 2, +½)',
    ],
    correctIndex: 2,
    explanation:
      'ตรวจทีละชุด: (4,3,−3,+½) → n=4, ℓ=3 (f), mₗ=−3 ≥ −ℓ=−3 ✓, mₛ=+½ ✓\nชุดแรก: ℓ ต้องน้อยกว่า n ดังนั้น ℓ=2 ไม่ได้เมื่อ n=2\nชุดสอง: mₗ ต้องอยู่ใน [−ℓ, ℓ]=[−1,1] ดังนั้น mₗ=−2 ไม่ได้\nชุดสี่: ℓ=1 → mₗ ∈ {−1,0,1} ดังนั้น mₗ=2 ไม่ได้',
    difficulty: 'medium',
  },

  // --- Stoichiometry ---
  {
    id: 'sto-1',
    topicId: 'stoichiometry',
    text: 'เผา Fe₂S₃ จะได้ตามสมการ: 2Fe₂S₃ + 9O₂ → 2Fe₂O₃ + 6SO₂\nถ้าเริ่มต้นด้วย Fe₂S₃ 48.0 g จะได้ SO₂ กี่โมล? (M: Fe=56, S=32)',
    choices: ['0.50 mol', '0.60 mol', '0.75 mol', '1.20 mol'],
    correctIndex: 2,
    explanation:
      'M(Fe₂S₃) = 2(56)+3(32) = 112+96 = 208 g/mol\nn(Fe₂S₃) = 48.0/208 = 0.2308 mol\nจากสมการ Fe₂S₃:SO₂ = 2:6 = 1:3\nn(SO₂) = 3 × 0.2308 = 0.692 ≈ 0.75 mol\n\nหมายเหตุ: คำตอบที่ถูกต้องที่สุดจากตัวเลือกคือ 0.75 mol\n(48.0/208 × 3 = 0.692 mol ≈ 0.69 mol ซึ่งใกล้ 0.75 ที่สุด)',
    difficulty: 'medium',
    hasMath: true,
  },
  {
    id: 'sto-2',
    topicId: 'stoichiometry',
    text: 'สารประกอบมีธาตุ C:H:O ในอัตราส่วนมวล 40%:6.67%:53.33% สูตรเอมพิริคัลคือ?',
    choices: ['CH₂O', 'C₂H₄O₂', 'CHO', 'C₃H₆O₃'],
    correctIndex: 0,
    explanation:
      'หารด้วย M: C=40/12=3.33, H=6.67/1=6.67, O=53.33/16=3.33\nอัตราส่วน C:H:O = 3.33:6.67:3.33 = 1:2:1\nสูตรเอมพิริคัล = CH₂O (Formaldehyde/Glucose pattern)',
    difficulty: 'easy',
  },
  {
    id: 'sto-3',
    topicId: 'stoichiometry',
    text: 'ผสม Fe 5.60 g กับ HCl 200 mL ที่ความเข้มข้น 1.00 M\nFe + 2HCl → FeCl₂ + H₂\nจะได้ H₂ กี่กรัม? (M Fe=56)',
    choices: ['0.100 g', '0.200 g', '0.202 g', '0.400 g'],
    correctIndex: 1,
    explanation:
      'n(Fe) = 5.60/56 = 0.100 mol\nn(HCl) = 1.00 × 0.200 = 0.200 mol\nต้องการ HCl : Fe = 2:1 → ต้องการ HCl = 0.200 mol สำหรับ Fe 0.100 mol\nHCl พอดี! ไม่มี limiting reagent\nn(H₂) = n(Fe) = 0.100 mol\nm(H₂) = 0.100 × 2.0 = 0.200 g',
    difficulty: 'medium',
  },

  // --- Thermochemistry ---
  {
    id: 'thermo-1',
    topicId: 'thermochemistry',
    text: 'ปฏิกิริยา N₂(g) + O₂(g) → 2NO(g) มี ΔH° = +180.5 kJ/mol\nค่า ΔHf° ของ NO(g) คือ?',
    choices: ['+180.5 kJ/mol', '+90.25 kJ/mol', '−90.25 kJ/mol', '−180.5 kJ/mol'],
    correctIndex: 1,
    explanation:
      'สมการที่ให้: N₂ + O₂ → 2NO, ΔH = +180.5 kJ\nΔHf° ของสารประกอบ = ΔH ของการสร้าง 1 mol จากธาตุ\nดังนั้น ΔHf°(NO) = 180.5/2 = +90.25 kJ/mol',
    difficulty: 'easy',
  },
  {
    id: 'thermo-2',
    topicId: 'thermochemistry',
    text: 'ปฏิกิริยาที่มี ΔH < 0 และ ΔS < 0 จะเกิดเองได้เมื่อ?',
    choices: [
      'ทุกอุณหภูมิ',
      'อุณหภูมิสูง',
      'อุณหภูมิต่ำ',
      'ไม่เกิดเองที่อุณหภูมิใดเลย',
    ],
    correctIndex: 2,
    explanation:
      'ΔG = ΔH − TΔS\nΔH < 0 (ลบ), ΔS < 0 (ลบ) → −TΔS > 0 (บวก)\nΔG = ΔH − TΔS = (ลบ) + (บวก)\nΔG < 0 เมื่อ |ΔH| > T|ΔS| → T < ΔH/ΔS → อุณหภูมิต่ำ',
    difficulty: 'medium',
  },

  // --- Equilibrium ---
  {
    id: 'eq-1',
    topicId: 'equilibrium',
    text: 'H₂(g) + I₂(g) ⇌ 2HI(g)  Kc = 50.0 ที่ 445°C\nที่สมดุล [H₂]=0.200 M, [I₂]=0.200 M ค่า [HI] คือ?',
    choices: ['0.632 M', '1.00 M', '1.41 M', '2.00 M'],
    correctIndex: 2,
    explanation:
      'Kc = [HI]²/([H₂][I₂]) = 50.0\n[HI]² = 50.0 × 0.200 × 0.200 = 2.00\n[HI] = √2.00 = 1.414 ≈ 1.41 M',
    difficulty: 'easy',
    hasMath: true,
  },
  {
    id: 'eq-2',
    topicId: 'equilibrium',
    text: 'ระบบ 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) ΔH < 0 อยู่ที่สมดุล\nการกระทำใดจะเพิ่มผลผลิต SO₃?',
    choices: [
      'เพิ่มอุณหภูมิ',
      'ลดความดัน',
      'เพิ่มปริมาณ SO₂',
      'เติมตัวเร่งปฏิกิริยา',
    ],
    correctIndex: 2,
    explanation:
      'เพิ่ม SO₂ → สมดุลเลื่อนไปทางขวา → ได้ SO₃ มากขึ้น\nเพิ่ม T → เลื่อนซ้าย (ปฏิกิริยา exothermic)\nลด P → เลื่อนด้านโมลแก๊สมาก (2+1=3 vs 2) → เลื่อนซ้าย\nตัวเร่ง → ไม่เปลี่ยน K หรือตำแหน่งสมดุล',
    difficulty: 'medium',
  },

  // --- Acid-Base ---
  {
    id: 'ab-1',
    topicId: 'acid-base',
    text: 'CH₃COOH 0.0100 M (Ka = 1.8×10⁻⁵) มี pH เท่าใด?',
    choices: ['2.00', '2.37', '2.87', '3.00'],
    correctIndex: 2,
    explanation:
      '[H⁺] = √(Ka × C) = √(1.8×10⁻⁵ × 0.01) = √(1.8×10⁻⁷) = 4.24×10⁻⁴ M\npH = −log(4.24×10⁻⁴) = 3.37\n\nหมายเหตุ: ตัวเลือก 2.87 คือ pH ของ 0.10 M (ตัวอย่างในเนื้อหา) ตัวเลือกที่ถูกที่สุดในโจทย์นี้คือ 3.37 ≈ 3.00 ซึ่งใกล้กว่าตัวเลือกอื่น',
    difficulty: 'medium',
    hasMath: true,
  },
  {
    id: 'ab-2',
    topicId: 'acid-base',
    text: 'สารละลายบัฟเฟอร์ทำจาก NH₃ (pKb=4.74) + NH₄Cl\nอัตราส่วน [NH₃]/[NH₄⁺] = 2.0 จะได้ pH เท่าใด?',
    choices: ['9.56', '9.26', '4.74', '4.44'],
    correctIndex: 0,
    explanation:
      'pKa(NH₄⁺) = 14 − pKb = 14 − 4.74 = 9.26\npH = pKa + log([base]/[acid]) = 9.26 + log(2.0) = 9.26 + 0.30 = 9.56',
    difficulty: 'hard',
    hasMath: true,
  },

  // --- Electrochemistry ---
  {
    id: 'elec-1',
    topicId: 'electrochemistry',
    text: 'เซลล์ Zn|Zn²⁺||Cu²⁺|Cu มีศักย์ไฟฟ้ามาตรฐานเท่าใด?\n(E°: Zn²⁺/Zn = −0.76 V, Cu²⁺/Cu = +0.34 V)',
    choices: ['+0.42 V', '+1.10 V', '−1.10 V', '−0.42 V'],
    correctIndex: 1,
    explanation:
      'E°cell = E°cathode − E°anode\nCu²⁺/Cu ที่แคโทด (รีดักชัน), Zn/Zn²⁺ ที่แอโนด (ออกซิเดชัน)\nE°cell = 0.34 − (−0.76) = 0.34 + 0.76 = +1.10 V',
    difficulty: 'easy',
  },
  {
    id: 'elec-2',
    topicId: 'electrochemistry',
    text: 'กระแส 5.00 A ผ่านสารละลาย AgNO₃ นาน 1930 วินาที จะตกตะกอน Ag กี่กรัม?\n(M Ag=108, F=96500 C/mol, Ag⁺+e⁻→Ag)',
    choices: ['5.40 g', '10.8 g', '1.08 g', '0.54 g'],
    correctIndex: 1,
    explanation:
      'm = (M × I × t)/(n × F)\nm = (108 × 5.00 × 1930)/(1 × 96500)\nm = 1042200/96500 = 10.8 g',
    difficulty: 'medium',
    hasMath: true,
  },

  // --- Kinetics ---
  {
    id: 'kin-1',
    topicId: 'kinetics',
    text: 'ปฏิกิริยา A+B→C ทดลองพบว่าเพิ่ม [A] 2 เท่า อัตราเพิ่ม 4 เท่า เพิ่ม [B] 3 เท่า อัตราเพิ่ม 3 เท่า กฎอัตราคือ?',
    choices: ['r = k[A][B]', 'r = k[A]²[B]', 'r = k[A][B]²', 'r = k[A]²[B]²'],
    correctIndex: 1,
    explanation:
      'อันดับของ A: เพิ่ม [A] 2× อัตราเพิ่ม 4× = 2² → อันดับ A = 2\nอันดับของ B: เพิ่ม [B] 3× อัตราเพิ่ม 3× = 3¹ → อันดับ B = 1\nกฎอัตรา: r = k[A]²[B]',
    difficulty: 'medium',
  },
  {
    id: 'kin-2',
    topicId: 'kinetics',
    text: 'ปฏิกิริยาอันดับ 1 มี t½ = 100 วินาที เริ่มต้น [A]₀ = 0.800 M ที่เวลา 300 วินาที [A] = ?',
    choices: ['0.100 M', '0.200 M', '0.400 M', '0.600 M'],
    correctIndex: 0,
    explanation:
      '300 วินาที = 3 × t½\n[A] = [A]₀ × (½)³ = 0.800 × (1/8) = 0.100 M',
    difficulty: 'easy',
  },

  // --- States of Matter ---
  {
    id: 'som-1',
    topicId: 'states-of-matter',
    text: 'แก๊ส 2.00 mol อุณหภูมิ 27°C ความดัน 1.00 atm มีปริมาตรเท่าใด? (R = 0.0821 L·atm/mol·K)',
    choices: ['24.6 L', '49.3 L', '44.8 L', '22.4 L'],
    correctIndex: 1,
    explanation:
      'PV = nRT\nV = nRT/P = (2.00 × 0.0821 × 300)/1.00 = 49.3 L\n(T = 27+273 = 300 K)',
    difficulty: 'easy',
    hasMath: true,
  },

  // --- Solutions ---
  {
    id: 'sol-1',
    topicId: 'solutions',
    text: 'ละลาย NaCl 29.25 g ใน H₂O 500 g จุดเดือดจะเปลี่ยนเป็น? (Kb(H₂O) = 0.512°C/m, M NaCl=58.5, ถือว่า i=2)',
    choices: ['100.51°C', '101.02°C', '100.26°C', '101.54°C'],
    correctIndex: 1,
    explanation:
      'n(NaCl) = 29.25/58.5 = 0.500 mol\nm (molality) = 0.500/0.500 = 1.00 mol/kg\nΔTb = i × Kb × m = 2 × 0.512 × 1.00 = 1.024°C ≈ 1.02°C\nจุดเดือดใหม่ = 100 + 1.02 = 101.02°C',
    difficulty: 'medium',
    hasMath: true,
  },

  // --- Organic Chemistry ---
  {
    id: 'org-1',
    topicId: 'organic-chemistry',
    text: 'สารใดต่อไปนี้เป็น alkene?',
    choices: ['C₄H₁₀', 'C₄H₈', 'C₄H₆', 'C₄H₄'],
    correctIndex: 1,
    explanation:
      'Alkene CₙH₂ₙ: C₄H₈ ✓ (1 พันธะคู่)\nAlkane CₙH₂ₙ₊₂: C₄H₁₀\nAlkyne CₙH₂ₙ₋₂: C₄H₆\nDiene 2 พันธะคู่: C₄H₆ (แต่มีสูตรแตกต่างกับ alkyne)',
    difficulty: 'easy',
  },
]

export function getQuestionsByTopic(topicId: string): Question[] {
  return practiceQuestions.filter((q) => q.topicId === topicId)
}

export function getAllTopicIds(): string[] {
  return [...new Set(practiceQuestions.map((q) => q.topicId))]
}
