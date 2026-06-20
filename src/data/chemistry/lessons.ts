export interface ContentBlock {
  type: 'text' | 'math' | 'math-block' | 'example' | 'note' | 'formula-box' | 'heading' | 'list'
  content: string
  items?: string[]
  label?: string
}

export interface Lesson {
  topicId: string
  sections: LessonSection[]
}

export interface LessonSection {
  title: string
  blocks: ContentBlock[]
}

export const chemistryLessons: Record<string, Lesson> = {
  'atomic-structure': {
    topicId: 'atomic-structure',
    sections: [
      {
        title: '1. แบบจำลองอะตอม',
        blocks: [
          {
            type: 'text',
            content:
              'อะตอมเป็นหน่วยพื้นฐานของสสาร ประกอบด้วย นิวเคลียส (โปรตอน + นิวตรอน) ที่ศูนย์กลาง และอิเล็กตรอนวิ่งรอบนิวเคลียส',
          },
          {
            type: 'heading',
            content: 'แบบจำลองของบอร์ (Bohr Model)',
          },
          {
            type: 'text',
            content:
              'บอร์เสนอว่าอิเล็กตรอนเคลื่อนที่เป็นวงกลมในระดับพลังงานที่กำหนด (shell n = 1, 2, 3, ...) โดยพลังงานของแต่ละระดับในอะตอมไฮโดรเจนคือ:',
          },
          {
            type: 'math-block',
            content: 'E_n = -\\frac{13.6 \\text{ eV}}{n^2}',
          },
          {
            type: 'text',
            content:
              'เมื่ออิเล็กตรอนกระโดดจากระดับพลังงานสูง (n₂) ลงมาระดับต่ำ (n₁) จะปล่อยโฟตอนที่มีพลังงาน:',
          },
          {
            type: 'math-block',
            content: '\\Delta E = E_{n_2} - E_{n_1} = 13.6\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) \\text{ eV}',
          },
          {
            type: 'example',
            label: 'ตัวอย่าง',
            content:
              'อิเล็กตรอนในอะตอม H กระโดดจาก n=3 ลง n=1 (Lyman series) ปล่อยพลังงานเท่าไร?\n\nΔE = 13.6(1/1² − 1/3²) = 13.6(1 − 1/9) = 13.6 × 8/9 ≈ 12.09 eV',
          },
        ],
      },
      {
        title: '2. เลขควอนตัม (Quantum Numbers)',
        blocks: [
          {
            type: 'text',
            content:
              'สถานะของอิเล็กตรอนในอะตอมระบุด้วยเลขควอนตัม 4 ค่า:',
          },
          {
            type: 'list',
            content: '',
            items: [
              'n (Principal) = 1, 2, 3, ... → ระดับพลังงานหลัก ยิ่งมาก อิเล็กตรอนยิ่งอยู่ไกลนิวเคลียส',
              'ℓ (Angular momentum) = 0, 1, ..., n−1 → รูปร่างออร์บิทัล (s, p, d, f)',
              'mₗ (Magnetic) = −ℓ, ..., 0, ..., +ℓ → การวางตัวในอวกาศ',
              'mₛ (Spin) = +½ หรือ −½ → สปินของอิเล็กตรอน',
            ],
          },
          {
            type: 'formula-box',
            label: 'หลักการสำคัญ',
            content:
              'กฎกีดกันของเพาลี: อิเล็กตรอนสองตัวในอะตอมเดียวกันจะมีเลขควอนตัมครบ 4 ค่าเหมือนกันไม่ได้\n\nกฎของฮุนด์: อิเล็กตรอนจะเข้าออร์บิทัลเดี่ยวก่อน โดยมีสปินขนาน แล้วจึงคู่',
          },
        ],
      },
      {
        title: '3. การจัดเรียงอิเล็กตรอน',
        blocks: [
          {
            type: 'text',
            content:
              'การจัดเรียงอิเล็กตรอนตามลำดับพลังงานของออร์บิทัล (Aufbau Principle):',
          },
          {
            type: 'formula-box',
            label: 'ลำดับการเติม',
            content: '1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → ...',
          },
          {
            type: 'example',
            label: 'ตัวอย่าง',
            content:
              'Fe (Z=26): [Ar] 3d⁶ 4s²\nCr (Z=24): [Ar] 3d⁵ 4s¹  ← ยกเว้น เพราะ half-filled d มีเสถียรภาพพิเศษ\nCu (Z=29): [Ar] 3d¹⁰ 4s¹ ← ยกเว้น เพราะ fully-filled d มีเสถียรภาพพิเศษ',
          },
        ],
      },
      {
        title: '4. สมบัติตามตารางธาตุ (Periodic Trends)',
        blocks: [
          {
            type: 'text',
            content: 'สมบัติของธาตุเปลี่ยนแปลงตามแนวโน้มในตารางธาตุ:',
          },
          {
            type: 'list',
            content: '',
            items: [
              'รัศมีอะตอม: เพิ่มลงในหมู่ (เพิ่ม shell), ลดขวาในคาบ (Zeff เพิ่ม)',
              'พลังงานไอออไนเซชัน (IE): ลดลงในหมู่, เพิ่มขวาในคาบ',
              'อิเล็กโทรเนกาติวิตี (EN): F มากสุด, เพิ่มขวาและขึ้นบน',
              'ความสัมพรรคภาพอิเล็กตรอน (EA): มีแนวโน้มเพิ่มขวาในคาบ',
            ],
          },
          {
            type: 'note',
            label: 'ข้อสังเกต สอวน',
            content:
              'ข้อสอบ สอวน มักถามเรื่อง: ลำดับ IE₁ ของธาตุในคาบเดียวกัน (สังเกตความผิดปกติที่หมู่ IIA vs IIIA และ VA vs VIA), การเปรียบเทียบ EN ของธาตุต่างๆ',
          },
        ],
      },
    ],
  },

  'stoichiometry': {
    topicId: 'stoichiometry',
    sections: [
      {
        title: '1. แนวคิดโมล (Mole Concept)',
        blocks: [
          {
            type: 'text',
            content:
              'โมล (mol) คือหน่วยปริมาณสาร 1 โมล = 6.022 × 10²³ อนุภาค (เลขของอาโวกาโดร NA)',
          },
          {
            type: 'formula-box',
            label: 'สูตรสำคัญ',
            content:
              'n = m / M\nn = จำนวนโมล (mol)\nm = มวล (g)\nM = มวลโมลาร์ (g/mol)\n\nn = V / 22.4  (แก๊สที่ STP, V เป็น L)\nn = N / NA   (N = จำนวนอนุภาค)',
          },
          {
            type: 'example',
            label: 'ตัวอย่าง',
            content:
              'NaCl 58.5 g มีกี่โมล และกี่โมเลกุล?\nM(NaCl) = 23 + 35.5 = 58.5 g/mol\nn = 58.5/58.5 = 1.00 mol\nN = 1.00 × 6.022×10²³ = 6.022×10²³ คู่ไอออน',
          },
        ],
      },
      {
        title: '2. การดุลสมการและการคำนวณ',
        blocks: [
          {
            type: 'text',
            content:
              'สมการเคมีที่ดุลแล้วจะบอกอัตราส่วนโมลระหว่างสารตั้งต้นและผลิตภัณฑ์',
          },
          {
            type: 'example',
            label: 'ตัวอย่าง',
            content:
              'สมการ: 2H₂ + O₂ → 2H₂O\nH₂ 4.0 g จะได้ H₂O กี่กรัม?\n\nn(H₂) = 4.0/2.0 = 2.0 mol\nจากสมการ: H₂ : H₂O = 2 : 2 = 1 : 1\nn(H₂O) = 2.0 mol\nm(H₂O) = 2.0 × 18.0 = 36.0 g',
          },
          {
            type: 'formula-box',
            label: 'สารจำกัดปฏิกิริยา (Limiting Reagent)',
            content:
              'วิธีหา: แปลงสารตั้งต้นทุกชนิดเป็นโมลของผลิตภัณฑ์ → สารที่ให้ผลิตภัณฑ์น้อยที่สุดคือ Limiting Reagent\n\nร้อยละผลผลิต = (ผลผลิตจริง / ผลผลิตทางทฤษฎี) × 100%',
          },
        ],
      },
    ],
  },

  'thermochemistry': {
    topicId: 'thermochemistry',
    sections: [
      {
        title: '1. พลังงานและความร้อน',
        blocks: [
          {
            type: 'text',
            content:
              'ระบบ (System) คือส่วนที่สนใจ สิ่งแวดล้อม (Surroundings) คือส่วนที่เหลือ\n\nกฎข้อที่ 1: พลังงานรวมของจักรวาลคงที่เสมอ',
          },
          {
            type: 'math-block',
            content: '\\Delta U = q + w',
          },
          {
            type: 'text',
            content: 'โดย q = ความร้อน (บวก=ดูดความร้อน), w = งาน (w = −PΔV สำหรับแก๊ส)',
          },
          {
            type: 'formula-box',
            label: 'เอนทัลปี (Enthalpy)',
            content:
              'H = U + PV\nΔH = ΔU + PΔV  (ความดันคงที่)\n\nΔH < 0 → ปฏิกิริยาคายความร้อน (Exothermic)\nΔH > 0 → ปฏิกิริยาดูดความร้อน (Endothermic)',
          },
        ],
      },
      {
        title: '2. กฎของเฮสส์ (Hess\'s Law)',
        blocks: [
          {
            type: 'text',
            content:
              'ΔH ของปฏิกิริยาไม่ขึ้นอยู่กับเส้นทาง ขึ้นอยู่กับสถานะเริ่มต้นและสุดท้ายเท่านั้น',
          },
          {
            type: 'math-block',
            content: '\\Delta H_{rxn} = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})',
          },
          {
            type: 'example',
            label: 'ตัวอย่าง',
            content:
              'C(s) + O₂(g) → CO₂(g)  ΔH₁ = −393.5 kJ\nH₂(g) + ½O₂(g) → H₂O(l)  ΔH₂ = −285.8 kJ\nCH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)  ΔH₃ = −890.3 kJ\n\nหา ΔHf° ของ CH₄:\nΔHf°(CH₄) = ΔH₁ + 2ΔH₂ − ΔH₃ = −393.5 + 2(−285.8) − (−890.3) = −74.8 kJ/mol',
          },
        ],
      },
      {
        title: '3. เอนโทรปีและพลังงานกิ๊บส์',
        blocks: [
          {
            type: 'formula-box',
            label: 'พลังงานอิสระกิ๊บส์',
            content:
              'ΔG = ΔH − TΔS\n\nΔG < 0 → ปฏิกิริยาเกิดเองได้ (Spontaneous)\nΔG > 0 → ปฏิกิริยาไม่เกิดเอง\nΔG = 0 → สมดุล',
          },
          {
            type: 'list',
            content: 'สรุปกรณีของ ΔH และ ΔS:',
            items: [
              'ΔH < 0, ΔS > 0 → Spontaneous ทุก T',
              'ΔH > 0, ΔS < 0 → Non-spontaneous ทุก T',
              'ΔH < 0, ΔS < 0 → Spontaneous เมื่อ T ต่ำ',
              'ΔH > 0, ΔS > 0 → Spontaneous เมื่อ T สูง',
            ],
          },
        ],
      },
    ],
  },

  'equilibrium': {
    topicId: 'equilibrium',
    sections: [
      {
        title: '1. ค่าคงที่สมดุล',
        blocks: [
          {
            type: 'text',
            content:
              'ที่สมดุล อัตราการเกิดปฏิกิริยาไปข้างหน้า = อัตราย้อนกลับ\nสำหรับสมการ: aA + bB ⇌ cC + dD',
          },
          {
            type: 'math-block',
            content: 'K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}',
          },
          {
            type: 'math-block',
            content: 'K_p = \\frac{P_C^c \\cdot P_D^d}{P_A^a \\cdot P_B^b} = K_c(RT)^{\\Delta n}',
          },
          {
            type: 'text',
            content: 'โดย Δn = (c+d) − (a+b) คือผลต่างของโมลแก๊สระหว่างผลิตภัณฑ์และสารตั้งต้น',
          },
          {
            type: 'note',
            label: 'สิ่งที่ไม่อยู่ใน K',
            content: 'ของแข็งและของเหลวบริสุทธิ์ไม่ปรากฏในนิพจน์ K',
          },
        ],
      },
      {
        title: '2. หลักของเลอชาเตอลิเอ',
        blocks: [
          {
            type: 'text',
            content:
              'ถ้ารบกวนระบบที่อยู่ในสมดุล ระบบจะปรับตัวเพื่อต้านการรบกวนนั้น',
          },
          {
            type: 'list',
            content: 'สรุปผลของการรบกวน:',
            items: [
              'เพิ่มความเข้มข้นของสารตั้งต้น → สมดุลเลื่อนไปทางผลิตภัณฑ์',
              'เพิ่มความดัน (ลดปริมาตร) → สมดุลเลื่อนไปด้านที่โมลแก๊สน้อยกว่า',
              'เพิ่มอุณหภูมิ → สมดุลเลื่อนไปทาง Endothermic (K เปลี่ยน)',
              'เติมตัวเร่งปฏิกิริยา → ไม่เปลี่ยน K แต่ถึงสมดุลเร็วขึ้น',
            ],
          },
        ],
      },
      {
        title: '3. การคำนวณสมดุล (ICE Table)',
        blocks: [
          {
            type: 'example',
            label: 'ตัวอย่าง ICE Table',
            content:
              'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  Kc = 0.500\nเริ่มต้น: [N₂]=1.00 M, [H₂]=3.00 M, [NH₃]=0\n\n        N₂    H₂     NH₃\nI:      1.00  3.00   0\nC:      −x    −3x    +2x\nE:    1.00−x  3.00−3x  2x\n\nKc = (2x)²/[(1.00−x)(3.00−3x)³] = 0.500\nแก้สมการหา x แล้วหาความเข้มข้นที่สมดุล',
          },
        ],
      },
    ],
  },

  'acid-base': {
    topicId: 'acid-base',
    sections: [
      {
        title: '1. ทฤษฎีกรด-เบส',
        blocks: [
          {
            type: 'list',
            content: 'ทฤษฎีหลัก:',
            items: [
              'Arrhenius: กรดให้ H⁺, เบสให้ OH⁻ ในน้ำ',
              'Brønsted-Lowry: กรดให้โปรตอน (H⁺), เบสรับโปรตอน',
              'Lewis: กรดรับคู่อิเล็กตรอน, เบสให้คู่อิเล็กตรอน',
            ],
          },
          {
            type: 'formula-box',
            label: 'pH และ Kw',
            content:
              'pH = −log[H⁺]     pOH = −log[OH⁻]\npH + pOH = 14  (ที่ 25°C)\nKw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴  (25°C)',
          },
        ],
      },
      {
        title: '2. กรด-เบสอ่อน',
        blocks: [
          {
            type: 'text',
            content: 'กรดอ่อน HA ⇌ H⁺ + A⁻  มีค่า Ka',
          },
          {
            type: 'math-block',
            content: 'K_a = \\frac{[H^+][A^-]}{[HA]}',
          },
          {
            type: 'formula-box',
            label: 'การประมาณ pH ของกรดอ่อน',
            content:
              'ถ้า Ka << C (ความเข้มข้นเริ่มต้น):\n[H⁺] ≈ √(Ka × C)\npH = ½(pKa − log C)',
          },
          {
            type: 'example',
            label: 'ตัวอย่าง',
            content:
              'CH₃COOH 0.10 M (Ka = 1.8×10⁻⁵) มี pH เท่าไร?\n[H⁺] = √(1.8×10⁻⁵ × 0.10) = √(1.8×10⁻⁶) = 1.34×10⁻³ M\npH = −log(1.34×10⁻³) = 2.87',
          },
        ],
      },
      {
        title: '3. สารละลายบัฟเฟอร์',
        blocks: [
          {
            type: 'text',
            content:
              'บัฟเฟอร์ = กรดอ่อน + เกลือของเบสคู่ (หรือเบสอ่อน + เกลือกรดคู่) ทำหน้าที่รักษา pH ให้คงที่',
          },
          {
            type: 'math-block',
            content: '\\text{Henderson-Hasselbalch: } pH = pK_a + \\log\\frac{[A^-]}{[HA]}',
          },
          {
            type: 'example',
            label: 'ตัวอย่าง',
            content:
              'บัฟเฟอร์ CH₃COOH 0.20 M + CH₃COONa 0.30 M (pKa = 4.74)\npH = 4.74 + log(0.30/0.20) = 4.74 + 0.18 = 4.92',
          },
        ],
      },
    ],
  },

  'electrochemistry': {
    topicId: 'electrochemistry',
    sections: [
      {
        title: '1. ปฏิกิริยารีดอกซ์',
        blocks: [
          {
            type: 'text',
            content:
              'ออกซิเดชัน = เสียอิเล็กตรอน (เลขออกซิเดชันเพิ่ม)\nรีดักชัน = รับอิเล็กตรอน (เลขออกซิเดชันลด)',
          },
          {
            type: 'note',
            label: 'จำง่ายๆ',
            content: 'OIL RIG: Oxidation Is Loss, Reduction Is Gain\nLEO GER: Lose Electrons Oxidation, Gain Electrons Reduction',
          },
        ],
      },
      {
        title: '2. เซลล์กัลวานิก',
        blocks: [
          {
            type: 'text',
            content:
              'เซลล์กัลวานิก (Galvanic/Voltaic Cell) แปลงพลังงานเคมีเป็นไฟฟ้า\n\nขั้วแอโนด (Anode): เกิดออกซิเดชัน (−)\nขั้วแคโทด (Cathode): เกิดรีดักชัน (+)',
          },
          {
            type: 'math-block',
            content: 'E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}',
          },
          {
            type: 'formula-box',
            label: 'สมการเนิร์นสต์',
            content:
              'E = E° − (RT/nF) ln Q\nที่ 25°C: E = E° − (0.0592/n) log Q\n\nเมื่อสมดุล: E = 0, Q = K\nln K = nFE°/RT = nE°/0.0257',
          },
        ],
      },
      {
        title: '3. อิเล็กโทรลิซิสและกฎฟาราเดย์',
        blocks: [
          {
            type: 'formula-box',
            label: 'กฎของฟาราเดย์',
            content:
              'm = (M × I × t) / (n × F)\n\nm = มวลของสารที่ได้ (g)\nM = มวลโมลาร์ (g/mol)\nI = กระแส (A)\nt = เวลา (s)\nn = จำนวน e⁻ ต่อ 1 โมลของสาร\nF = 96485 C/mol ≈ 96500 C/mol',
          },
          {
            type: 'example',
            label: 'ตัวอย่าง',
            content:
              'ไฟฟ้า 2.00 A ผ่าน CuSO₄(aq) นาน 1000 s จะได้ Cu กี่กรัม?\n(Cu²⁺ + 2e⁻ → Cu, M=63.5, n=2)\nm = (63.5 × 2.00 × 1000)/(2 × 96500) = 0.658 g',
          },
        ],
      },
    ],
  },

  'kinetics': {
    topicId: 'kinetics',
    sections: [
      {
        title: '1. อัตราการเกิดปฏิกิริยา',
        blocks: [
          {
            type: 'text',
            content:
              'สำหรับ aA + bB → cC + dD อัตราการเกิดปฏิกิริยา:',
          },
          {
            type: 'math-block',
            content: 'r = -\\frac{1}{a}\\frac{d[A]}{dt} = -\\frac{1}{b}\\frac{d[B]}{dt} = \\frac{1}{c}\\frac{d[C]}{dt}',
          },
          {
            type: 'formula-box',
            label: 'กฎอัตรา (Rate Law)',
            content:
              'r = k[A]^m[B]^n\n\nk = ค่าคงที่อัตรา (ขึ้นกับ T)\nm, n = อันดับของสารตั้งต้น (หาจากการทดลอง)\nอันดับรวม = m + n',
          },
        ],
      },
      {
        title: '2. สมการอัตราในฟังก์ชันของเวลา',
        blocks: [
          {
            type: 'list',
            content: 'สมการสำหรับอันดับต่างๆ:',
            items: [
              'อันดับ 0: [A] = [A]₀ − kt',
              'อันดับ 1: ln[A] = ln[A]₀ − kt  (t½ = ln2/k = 0.693/k)',
              'อันดับ 2: 1/[A] = 1/[A]₀ + kt',
            ],
          },
          {
            type: 'formula-box',
            label: 'สมการอาร์เรเนียส (Arrhenius)',
            content:
              'k = A·e^(−Ea/RT)\nln k = ln A − Ea/RT\n\nln(k₂/k₁) = −(Ea/R)(1/T₂ − 1/T₁)\n\nEa = พลังงานกระตุ้น (J/mol)\nR = 8.314 J/(mol·K)',
          },
        ],
      },
    ],
  },

  'chemical-bonding': {
    topicId: 'chemical-bonding',
    sections: [
      {
        title: '1. พันธะไอออนิกและโคเวเลนต์',
        blocks: [
          {
            type: 'list',
            content: 'ประเภทพันธะ:',
            items: [
              'พันธะไอออนิก: โลหะ + อโลหะ ΔEN > 1.7 → ถ่ายโอน e⁻',
              'พันธะโคเวเลนต์: อโลหะ + อโลหะ → ใช้ e⁻ ร่วมกัน',
              'พันธะโคเวเลนต์มีขั้ว: ΔEN 0.4–1.7',
              'พันธะโลหะ: โครงตาข่ายไอออนบวกในทะเล e⁻',
            ],
          },
        ],
      },
      {
        title: '2. ทฤษฎี VSEPR และรูปร่างโมเลกุล',
        blocks: [
          {
            type: 'text',
            content:
              'VSEPR (Valence Shell Electron Pair Repulsion): คู่อิเล็กตรอนรอบอะตอมกลางผลักกัน จัดตัวห่างที่สุด',
          },
          {
            type: 'list',
            content: 'รูปร่างตาม VSEPR:',
            items: [
              'AB₂ (0 lone pair): เส้นตรง 180° (BeCl₂, CO₂)',
              'AB₃ (0 LP): สามเหลี่ยมแบนราบ 120° (BF₃)',
              'AB₄ (0 LP): จัตุรมุข 109.5° (CH₄)',
              'AB₃E (1 LP): พีระมิดสามเหลี่ยม ~107° (NH₃)',
              'AB₂E₂ (2 LP): รูปตัว V ~104.5° (H₂O)',
              'AB₅ (0 LP): สองพีระมิดสามเหลี่ยม (PCl₅)',
              'AB₆ (0 LP): ทรงแปดหน้า 90° (SF₆)',
            ],
          },
        ],
      },
      {
        title: '3. แรงระหว่างโมเลกุล',
        blocks: [
          {
            type: 'list',
            content: 'จากแรงมากไปน้อย:',
            items: [
              'พันธะไฮโดรเจน (H-bond): N, O, F ← สำคัญมาก',
              'แรง Dipole-Dipole: โมเลกุลมีขั้ว',
              'แรง London Dispersion (van der Waals): ทุกโมเลกุล ขึ้นกับมวลโมลาร์',
            ],
          },
          {
            type: 'note',
            label: 'ประยุกต์ใช้',
            content:
              'แรงระหว่างโมเลกุลส่งผลต่อจุดเดือด จุดหลอมเหลว ความหนืด และความดันไอ\nH₂O มีจุดเดือดสูงผิดปกติเพราะ H-bond แข็งแรง',
          },
        ],
      },
    ],
  },
}
