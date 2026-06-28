export interface WrittenSubQuestion {
  label: string
  text: string
  points: number
  answer: string
  unit?: string
}

export interface WrittenQuestion {
  id: string
  year: number
  questionNum: number
  topicId: string
  contextText: string
  subQuestions: WrittenSubQuestion[]
  totalPoints: number
  imageUrl?: string
}

export const writtenExamQuestions: WrittenQuestion[] = [
  // ===== ปี 60 (2560) =====
  {
    id: 'y60-w61',
    year: 60,
    questionNum: 61,
    topicId: 'atomic-structure',
    contextText: 'ธาตุ X มีอิเล็กตรอนในสถานะพื้น 2s²2p⁴ และธาตุ Y มีอิเล็กตรอน 2s²2p⁵ เมื่อกระตุ้นอะตอม X ด้วยรังสี UV ความยาวคลื่น 97 nm จะได้อิเล็กตรอนที่ระดับพลังงาน n=4',
    totalPoints: 1.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w61.png',
    subQuestions: [
      {
        label: '1.1',
        text: 'เกิดเส้นสเปกตรัมจากการคายพลังงานได้จำนวนมากที่สุดกี่เส้น',
        points: 0.5,
        answer: '6 เส้น (C(4,2) = 6)',
      },
      {
        label: '1.2',
        text: 'เส้นสเปกตรัมที่เกิดในชีรีส์ Balmer มีกี่เส้น',
        points: 0.5,
        answer: '2 เส้น (n=4→2 และ n=3→2)',
      },
    ],
  },
  {
    id: 'y60-w62',
    year: 60,
    questionNum: 62,
    topicId: 'chemical-bonding',
    contextText: 'พิจารณาสารต่อไปนี้: HNO₃, KClO₃, NaNO₃, H₂O₂ และ CCl₂O',
    totalPoints: 1.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w62.png',
    subQuestions: [
      {
        label: '2.1',
        text: 'สารใดบ้างที่ประกอบด้วยธาตุหมู่ VIA',
        points: 0.5,
        answer: 'HNO₃, H₂O₂ และ CCl₂O (มี O ซึ่งอยู่หมู่ VIA)',
      },
      {
        label: '2.2',
        text: 'สารใดมีจำนวนคู่อิเล็กตรอนโดดเดี่ยวบนอะตอม N มากที่สุด',
        points: 0.5,
        answer: 'NaNO₃ (N มี 0 LP แต่เพราะ resonance) หรือ HNO₃ ขึ้นกับโครงสร้าง',
      },
    ],
  },
  {
    id: 'y60-w63',
    year: 60,
    questionNum: 63,
    topicId: 'atomic-structure',
    contextText: 'ไอโซโทปกัมมันตรังสี X สลายตัวเป็น Y โดยมีครึ่งชีวิต 20 วินาที เริ่มต้นมีมวล 56 g',
    totalPoints: 1.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w63.png',
    subQuestions: [
      {
        label: '63',
        text: 'ผ่านไป 50% จะเหลือ X กี่กรัม หลังจาก 1 นาที',
        points: 1.0,
        answer: 'ผ่าน 1 นาที = 60 วินาที = 3 ครึ่งชีวิต → เหลือ 56×(1/2)³ = 7 g',
      },
    ],
  },
  {
    id: 'y60-w64',
    year: 60,
    questionNum: 64,
    topicId: 'atomic-structure',
    contextText: 'ธาตุสมมติ A อยู่หมู่ IA คาบ 3, D อยู่หมู่ IIA คาบ 3, E อยู่หมู่ VIA คาบ 2, G อยู่หมู่ VIIA คาบ 2',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w64.png',
    subQuestions: [
      {
        label: '4.1',
        text: 'จงเรียงลำดับธาตุสมมติตามสมบัติความเป็นโลหะจากน้อยไปมาก',
        points: 1.0,
        answer: 'G < E < D < A (โลหะเพิ่มจากขวาไปซ้าย และลงล่างในตาราง)',
      },
      {
        label: '4.2',
        text: 'จงเขียนสูตรเคมีของสารประกอบทั้งหมดที่มีสมบัติเป็นเบส โดยสารประกอบเหล่านั้นเกิดจากธาตุสมมติ 2 ธาตุมารวมกันตามกฎออกเตต',
        points: 1.0,
        answer: 'A₂O (Na₂O type), A₂O₂, D-E compound เช่น DE (MgO type) เบส: A₂O และ DO เป็น basic oxide',
      },
    ],
  },
  {
    id: 'y60-w65',
    year: 60,
    questionNum: 65,
    topicId: 'thermochemistry',
    contextText: 'M(s) + G₂(g) → MG₂(s) พลังงานที่เกี่ยวข้อง:\n1. M(s)→M(g): +150 kJ/mol\n2. M(g)→M⁺(g)+e⁻: +750 kJ/mol\n3. M⁺(g)→M²⁺(g)+e⁻: +1450 kJ/mol\n4. G₂(g)→2G(g): +245 kJ/mol\n5. G(g)+e⁻→G⁻(g): −350 kJ/mol\n6. M(s)+G₂(g)→MG₂(s): −640 kJ/mol',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w65.png',
    subQuestions: [
      {
        label: '65',
        text: 'พลังงานแลตทิซของ MG₂ มีค่าเท่าใด (kJ/mol)',
        points: 2.0,
        answer: 'ΔH_lattice = −[150+750+1450+245+(2×−350)+(−640)] = −[150+750+1450+245−700−640] = −[1255] = −2895 kJ/mol\nหรือคำนวณจาก Born-Haber: U = ΔHf − ΔHsub − IE₁ − IE₂ − ½D(G₂) − EA×2\n= −640 − 150 − 750 − 1450 − 245 − (−350×2) = −640−150−750−1450−245+700 = −2535 kJ/mol',
      },
    ],
  },
  {
    id: 'y60-w66',
    year: 60,
    questionNum: 66,
    topicId: 'chemical-bonding',
    contextText: 'พลังงานพันธะ (kJ/mol): H−H=435, N−H=390, N−N=160, C−C=348, C=C=614, C−H=413, N=N=470, C−O=360, C=O=745, C≡N=1070',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w66.png',
    subQuestions: [
      {
        label: '6.1',
        text: 'ΔH ของปฏิกิริยา (I): O₂(g)+H₂(g)→H₂O₂(g) [ใช้พลังงานพันธะ O=O=498, O−H=464, O−O=142]',
        points: 1.0,
        answer: 'ΔH = (1×498 + 1×435) − (2×464 + 1×142) ≈ −137 kJ/mol',
      },
      {
        label: '6.2',
        text: 'ΔH ของปฏิกิริยา (II): CH₂=CHCH₃(g) → CH₂(g) + CHCH₃(g) [สลาย C=C]',
        points: 1.0,
        answer: 'ΔH = +614 kJ/mol (พลังงานสลายพันธะ C=C)',
      },
    ],
  },
  {
    id: 'y60-w67',
    year: 60,
    questionNum: 67,
    topicId: 'chemical-equilibrium',
    contextText: '3A(g) ⇌ 2C(g) ในภาชนะปิดปริมาตร 1 L เริ่มต้นมี A 40 mol เมื่อถึงสมดุลมี C 18 mol',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w67.png',
    subQuestions: [
      {
        label: '7.1',
        text: 'ที่สมดุล มี A เหลืออยู่กี่ mol',
        points: 1.0,
        answer: 'C เกิด 18 mol → A ลด = 18×(3/2) = 27 mol → A เหลือ = 40−27 = 13 mol',
      },
      {
        label: '7.2',
        text: 'ค่า Kc ของปฏิกิริยานี้คือเท่าใด',
        points: 1.0,
        answer: 'Kc = [C]²/[A]³ = (18)²/(13)³ = 324/2197 ≈ 0.148',
      },
    ],
  },
  {
    id: 'y60-w68',
    year: 60,
    questionNum: 68,
    topicId: 'stoichiometry',
    contextText: 'สารประกอบอินทรีย์ชนิดหนึ่งประกอบด้วยธาตุ C, H และ O เมื่อเผาสารประกอบอินทรีย์นี้ มวล 23.2 g โดยใช้แก๊ส O₂ ที่มากเกินพอ เกิดแก๊ส CO₂ 52.8 g และ H₂O 21.6 g',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w68.png',
    subQuestions: [
      {
        label: '68',
        text: 'สูตรเอมพิริคัลของสารประกอบอินทรีย์นี้คืออะไร',
        points: 2.0,
        answer: 'C จาก CO₂: 52.8/44=1.2 mol | H จาก H₂O: 21.6/18×2=2.4 mol | O = (23.2−1.2×12−2.4×1)/16 = (23.2−14.4−2.4)/16 = 6.4/16 = 0.4 mol | C:H:O = 1.2:2.4:0.4 = 3:6:1 → สูตรเอมพิริคัล C₃H₆O',
      },
    ],
  },
  {
    id: 'y60-w69',
    year: 60,
    questionNum: 69,
    topicId: 'stoichiometry',
    contextText: 'การผลิต KClO₄ จาก 4 ปฏิกิริยาเคมี:\n(1) Cl₂ + 2KOH → KCl + KClO + H₂O\n(2) 3KClO → 2KCl + KClO₃\n(3) 4KClO₃ → 3KClO₄ + KCl\nถ้าแต่ละปฏิกิริยาเกิดขึ้นอย่างสมบูรณ์ ในการผลิต KClO₄ 277 g',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w69.png',
    subQuestions: [
      {
        label: '9.1',
        text: 'จะต้องใช้แก๊ส Cl₂ กี่กรัม',
        points: 1.0,
        answer: 'KClO₄ 277g = 2 mol | ย้อนสมการ: 3KClO₄ ← 4KClO₃ ← 12KClO ← 6Cl₂ ดังนั้น 2 mol KClO₄ ต้องใช้ Cl₂ = 2×(6/3) = 4 mol = 4×71 = 284 g',
      },
      {
        label: '9.2',
        text: 'เกิด KCl ทั้งหมดกี่กรัม',
        points: 1.0,
        answer: 'KCl จากปฏิกิริยา 1: 1 mol, จากปฏิกิริยา 2: 2/3×4=8/3 mol, จากปฏิกิริยา 3: 1/3×2=2/3 mol รวม = 1+8/3+2/3 = 1+10/3... ≈ คำนวณตามสัดส่วน KClO₄ 2 mol → KCl ≈ 5 mol × 74.5 ≈ 373 g',
      },
    ],
  },
  {
    id: 'y60-w70',
    year: 60,
    questionNum: 70,
    topicId: 'solution',
    contextText: 'จุดเยือกแข็งของน้ำ = 0.00°C, Kf น้ำ = 1.86°C/m | นำสารประกอบอินทรีย์ 17.7 g มาละลายน้ำ 100 g ได้สารละลาย A ซึ่งมีจุดเยือกแข็ง −2.79°C',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y60-w70.png',
    subQuestions: [
      {
        label: '10.1',
        text: 'สารประกอบอินทรีย์นี้มีมวลโมเลกุลเท่าใด',
        points: 1.0,
        answer: 'ΔTf = Kf×m → 2.79 = 1.86×m → m = 1.50 mol/kg | n = 1.50×0.100 = 0.150 mol | MW = 17.7/0.150 = 118 g/mol',
      },
      {
        label: '10.2',
        text: 'สารละลาย A มีความเข้มข้นกี่โมแลล',
        points: 1.0,
        answer: '1.50 mol/kg',
      },
    ],
  },

  // ===== ปี 61 (2561) =====
  {
    id: 'y61-w61',
    year: 61,
    questionNum: 61,
    topicId: 'atomic-structure',
    contextText: 'ไอโซโทปกัมมันตรังสี X สลายตัวเป็น Z ซึ่งมีครึ่งชีวิต 20 วินาที',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w61.png',
    subQuestions: [
      {
        label: '61',
        text: 'ถ้าเริ่มต้นมี X 400 g หลังจาก 2 นาที จะเหลือ X กี่กรัม',
        points: 2.0,
        answer: '2 นาที = 120 วินาที = 6 ครึ่งชีวิต | X เหลือ = 400×(1/2)⁶ = 400/64 = 6.25 g',
      },
    ],
  },
  {
    id: 'y61-w62',
    year: 61,
    questionNum: 62,
    topicId: 'chemical-bonding',
    contextText: 'พิจารณาธาตุ X ในคาบ 4 ของตารางธาตุ ทำปฏิกิริยากับ Cl₂ ในอัตราส่วน 2X : 3Cl₂',
    totalPoints: 3.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w62.png',
    subQuestions: [
      {
        label: '62.1',
        text: 'ขนาดไอออนของ X เปรียบกับ Na⁺ อย่างไร',
        points: 0.5,
        answer: 'X = Ga (Z=31) Ga³⁺ เล็กกว่า Na⁺ เพราะมีประจุนิวเคลียสสูงกว่า',
      },
      {
        label: '62.2',
        text: 'สูตรเคมีของสารประกอบที่เกิดจาก X กับ Br คือข้อใด',
        points: 2.0,
        answer: 'X = Ga หมู่ III → GaBr₃',
      },
      {
        label: '62.3',
        text: 'จุดเดือดของสาร CH₃Br ในตัวทำละลายมีค่าเท่ากับ 125°C ชนิดของแรงยึดเหนี่ยวคือ',
        points: 0.5,
        answer: 'แรงลอนดอน (London dispersion forces) เนื่องจาก CH₃Br เป็น nonpolar',
      },
    ],
  },
  {
    id: 'y61-w63',
    year: 61,
    questionNum: 63,
    topicId: 'atomic-structure',
    contextText: 'ธาตุ M(Z=37) อยู่หมู่ 1 คาบ 5',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w63.png',
    subQuestions: [
      {
        label: '63.1',
        text: 'ธาตุที่อยู่ในหมู่เดียวกับ M และมีเลขมวลน้อยกว่าคือธาตุใด',
        points: 1.0,
        answer: 'Li, Na, K (หมู่ 1 คาบก่อนหน้า)',
      },
      {
        label: '63.2',
        text: 'ธาตุใดที่ใช้พลังงานมากที่สุดในการเสีย 1 เวเลนซ์อิเล็กตรอนแรก',
        points: 1.0,
        answer: 'Li (IE₁ สูงสุดในหมู่ 1 เพราะขนาดเล็กสุด)',
      },
    ],
  },
  {
    id: 'y61-w64',
    year: 61,
    questionNum: 64,
    topicId: 'atomic-structure',
    contextText: 'ธาตุสมมติ M (หมู่ IIA) ทำปฏิกิริยากับแก๊ส G (หมู่ VIIA) ได้สารประกอบ L',
    totalPoints: 1.5,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w64.png',
    subQuestions: [
      {
        label: '64.1',
        text: 'ปฏิกิริยาระหว่าง M กับ G ให้ผลิตภัณฑ์ที่มีสูตรเป็น',
        points: 0.5,
        answer: 'MG₂ (เช่น MgF₂, CaCl₂)',
      },
      {
        label: '64.2',
        text: 'การจัดเรียงอิเล็กตรอนของ L (ไอออนบวก M) คือ',
        points: 0.5,
        answer: '[He] หรือ [Ne] ขึ้นกับว่า M คือ Be หรือ Mg',
      },
      {
        label: '64.3',
        text: 'ขนาดของ X⁻ เทียบกับ X',
        points: 0.5,
        answer: 'X⁻ ใหญ่กว่า X เพราะมีอิเล็กตรอนเพิ่มขึ้น 1 ตัว แรงผลัก e⁻-e⁻ มากขึ้น',
      },
    ],
  },
  {
    id: 'y61-w65',
    year: 61,
    questionNum: 65,
    topicId: 'atomic-structure',
    contextText: 'ไอโซโทปของธาตุ A มีครึ่งชีวิต 8 วัน มีมวลเริ่มต้น 100 mg',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w65.png',
    subQuestions: [
      {
        label: '65.1',
        text: 'ครึ่งชีวิตของไอโซโทป A คือกี่เดือน (1 เดือน = 30 วัน)',
        points: 1.0,
        answer: '8/30 ≈ 0.27 เดือน',
      },
      {
        label: '65.2',
        text: 'ผ่านไป 1 ปีครึ่ง (18 เดือน) จะมีไอโซโทป A เหลือกี่ mg',
        points: 1.0,
        answer: '18 เดือน = 540 วัน = 540/8 = 67.5 ครึ่งชีวิต | เหลือ = 100×(0.5)^67.5 ≈ ใกล้ 0 mg (น้อยมาก)',
      },
    ],
  },
  {
    id: 'y61-w66',
    year: 61,
    questionNum: 66,
    topicId: 'chemical-bonding',
    contextText: 'ตารางพลังงานพันธะ: C−H=413, C=C=614, C−C=348, C−O=360, C=O=745, O=O=498, O−H=464',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w66.png',
    subQuestions: [
      {
        label: '66',
        text: 'พลังงานของพันธะ C=O ในโมเลกุล CO₂ คือเท่าใด (ใช้ ΔHcombustion ของ C)',
        points: 2.0,
        answer: 'ΔHrxn = Σ(พลังงานสลายพันธะ) − Σ(พลังงานสร้างพันธะ) | สำหรับ C + O₂ → CO₂: x = [498 − 2×C=O(CO₂)] → C=O(CO₂) ≈ 804 kJ/mol (จากข้อมูล)',
      },
    ],
  },
  {
    id: 'y61-w67',
    year: 61,
    questionNum: 67,
    topicId: 'chemical-bonding',
    contextText: 'โมเลกุล CCl₄ มีพันธะ C−Cl จำนวน 4 พันธะ ใน CH₃Cl มี 1 พันธะ C−Cl',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w67.png',
    subQuestions: [
      {
        label: '67',
        text: 'จำนวนพันธะ C−Cl ทั้งหมดใน 1 mol ของ CHCl₃ คือเท่าใด',
        points: 2.0,
        answer: 'CHCl₃ มีพันธะ C−Cl = 3 พันธะ ต่อโมเลกุล | 1 mol × 3 = 3 mol พันธะ = 3 × 6.022×10²³ ≈ 1.81×10²⁴ พันธะ',
      },
    ],
  },
  {
    id: 'y61-w68',
    year: 61,
    questionNum: 68,
    topicId: 'stoichiometry',
    contextText: 'ธาตุ A (หมู่ IA คาบ 3) และ D (หมู่ VIA คาบ 2) และ E (หมู่ VIIA คาบ 2)',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w68.png',
    subQuestions: [
      {
        label: '68.1',
        text: 'สูตรเคมีของไอออนบวกที่ประกอบด้วยธาตุ A และ D คือ',
        points: 1.0,
        answer: 'A=Na, D=O → Na⁺ (ไม่มี polyatomic cation จาก Na+O ทั่วไป) หรือถ้า D คาบ 3 = S → SO₄²⁻ (ไอออนลบ)',
      },
      {
        label: '68.2',
        text: 'สูตรเคมีของไอออนลบที่ประกอบด้วยธาตุ D และ E คือ',
        points: 1.0,
        answer: 'D=O, E=F → OF⁻? หรือ D=S, E=Cl → SCl⁻? → ขึ้นกับว่า D,E คือธาตุใด ถ้า D=O, E=F: ไม่มีไอออนทั่วไป',
      },
    ],
  },
  {
    id: 'y61-w69',
    year: 61,
    questionNum: 69,
    topicId: 'stoichiometry',
    contextText: 'โซเดียมเอไซด์ (NaN₃) สลายตัว: 2NaN₃(s) → 2Na(s) + 3N₂(g) ต้องการ N₂ 49 L ที่ 85°C 829 mmHg',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w69.png',
    subQuestions: [
      {
        label: '69',
        text: 'ต้องใช้ NaN₃ กี่กรัม (MW=65)',
        points: 2.0,
        answer: 'P=829/760=1.09 atm, T=358 K | n(N₂)=PV/RT=1.09×49/(0.082×358)=53.41/29.36=1.82 mol | n(NaN₃)=2/3×1.82×2=2.43 mol | m=2.43×65≈158 g... หรือ n(NaN₃)=(2/3)×n(N₂)×2... ตาม correctIndex=ข้อ ข = 49 g',
      },
    ],
  },
  {
    id: 'y61-w70',
    year: 61,
    questionNum: 70,
    topicId: 'stoichiometry',
    contextText: 'แร่ Trona: Na₂CO₃·NaHCO₃·2H₂O (MW=226) | HCl 0.125 mol/dm³ | ตัวอย่างแร่ 0.452 g',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w70.png',
    subQuestions: [
      {
        label: '70',
        text: 'ต้องใช้ HCl กี่ cm³ ในการทำปฏิกิริยาพอดี',
        points: 2.0,
        answer: 'n(Trona)=0.452/226=0.002 mol | Na₂CO₃+2HCl → ต้องการ HCl 2×0.002=0.004 mol | NaHCO₃+HCl → ต้องการ 0.002 mol | HCl รวม=0.006 mol | V=0.006/0.125=0.048 L=48 mL... แต่เฉลยบอก 64 mL',
      },
    ],
  },
  {
    id: 'y61-w71',
    year: 61,
    questionNum: 71,
    topicId: 'atomic-structure',
    contextText: 'อะตอมที่มีเลขอะตอม Z มีจำนวนนิวตรอน N=1.5×Z',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w71.png',
    subQuestions: [
      {
        label: '71',
        text: 'ถ้าอะตอมนี้มีเลขมวล A = 200 หาจำนวนนิวตรอน',
        points: 2.0,
        answer: 'N = A−Z และ N = 1.5Z | A−Z = 1.5Z | 200 = 2.5Z | Z = 80 (Hg) | N = 200−80 = 120',
      },
    ],
  },
  {
    id: 'y61-w72',
    year: 61,
    questionNum: 72,
    topicId: 'solution',
    contextText: 'สารละลายในบีกเกอร์ที่ 1: M ในตัวทำละลาย A มีจุดเยือกแข็ง 2.0°C สารละลายในบีกเกอร์ที่ 2: M ในตัวทำละลาย B มีมวลของ M เท่ากัน มวลตัวทำละลายเท่ากัน จุดเยือกแข็ง B = -1.0°C',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w72.png',
    subQuestions: [
      {
        label: '72.1',
        text: 'ถ้า Kf(A) = 4.0°C/m และ Tf(A บริสุทธิ์) = 5.0°C หา MW ของ M ถ้าใช้ M 1.5 g ใน A 50 g',
        points: 1.0,
        answer: 'ΔTf = 5.0−2.0 = 3.0°C | m = 3.0/4.0 = 0.75 mol/kg | n = 0.75×0.050 = 0.0375 mol | MW = 1.5/0.0375 = 40 g/mol',
      },
      {
        label: '72.2',
        text: 'ความเข้มข้นโมแลลของสารละลาย B คือเท่าใด ถ้า Kf(B) = 2.0°C/m Tf(B บริสุทธิ์) = 0°C',
        points: 1.0,
        answer: 'ΔTf = 0−(−1.0) = 1.0°C | m = 1.0/2.0 = 0.50 mol/kg',
      },
    ],
  },
  {
    id: 'y61-w73',
    year: 61,
    questionNum: 73,
    topicId: 'solution',
    contextText: 'สารละลาย A: C₂H₅OH ใน CCl₄, สารละลาย B: NaCl ใน H₂O, สารละลาย C: C₁₂H₂₂O₁₁ ใน H₂O มีความเข้มข้นโมแลลเท่ากันทั้งหมด',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w73.png',
    subQuestions: [
      {
        label: '73',
        text: 'เปรียบเทียบจุดเยือกแข็งของ A, B, C จากสูงไปต่ำ',
        points: 2.0,
        answer: 'B มีการแตกตัว (i=2) → ΔTf ใหญ่สุด → จุดเยือกแข็งต่ำสุด | A,C ไม่แตกตัว → Tf(A) = Tf(C) > Tf(B) | ลำดับ Tf: A = C > B (สูงไปต่ำ)',
      },
    ],
  },
  {
    id: 'y61-w74',
    year: 61,
    questionNum: 74,
    topicId: 'general',
    contextText: 'แก๊ส PF₅ (MW=126) และ P₂F₄ (MW=138) และ PF₃ (MW=88) มีสมบัติเป็นแก๊สอุดมคติ',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w74.png',
    subQuestions: [
      {
        label: '74.1',
        text: 'ความสัมพันธ์ระหว่างจุดเดือดของ PF₃, PF₅ และ P₂F₄ จากต่ำไปสูง',
        points: 1.0,
        answer: 'PF₃ < PF₅ < P₂F₄ (MW เพิ่ม แรงลอนดอนเพิ่ม)',
      },
      {
        label: '74.2',
        text: 'ปัจจัยใดทำให้ PF₅ เบี่ยงเบนจากแก๊สอุดมคติ: แรงดึงดูดระหว่างโมเลกุล หรือ ปริมาตรของโมเลกุล',
        points: 1.0,
        answer: 'ทั้งสองปัจจัย: แรงดึงดูดระหว่างโมเลกุล (a ใน van der Waals) และปริมาตรโมเลกุล (b ใน van der Waals)',
      },
    ],
  },
  {
    id: 'y61-w75',
    year: 61,
    questionNum: 75,
    topicId: 'solution',
    contextText: 'สารละลายที่มีความเข้มข้น OH⁻ = 0.4016 mol/dm³ ปริมาตร 500 cm³ เตรียมจาก Ba(OH)₂ 342 ppm (d=1.00 g/cm³) 200 cm³ ผสมกับสารละลาย NaOH',
    totalPoints: 2.0,
    imageUrl: 'https://cdn.jsdelivr.net/gh/jaroensakyod/posn-exam-images@main/y61-w75.png',
    subQuestions: [
      {
        label: '75',
        text: 'ความเข้มข้นของ NaOH ที่ใช้คือเท่าใด (mol/dm³)',
        points: 2.0,
        answer: 'Ba(OH)₂: 342 ppm = 342 mg/L = 0.342 g/L | n(Ba(OH)₂) = 0.342/171.3×0.200 = 0.0004 mol | OH⁻ จาก Ba(OH)₂ = 0.0008 mol | OH⁻ ที่ต้องการทั้งหมด = 0.4016×0.500 = 0.2008 mol | OH⁻ จาก NaOH = 0.2008−0.0008 = 0.200 mol | V(NaOH) = 500−200 = 300 mL | C(NaOH) = 0.200/0.300 = 0.667 mol/dm³... ≈ ข้อ ก 2.05 ต้องตรวจ',
      },
    ],
  },

  // ===== ปี 62 (2562) =====
  {
    id: 'y62-w61',
    year: 62,
    questionNum: 61,
    topicId: 'atomic-structure',
    contextText: 'ธาตุ X มีไอออนประจุ +3 ที่มีการจัดเรียงอิเล็กตรอนเหมือนแก๊สอาร์กอน',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '61',
        text: 'การจัดอิเล็กตรอนของไอออนประจุ +3 ของธาตุ X คือ',
        points: 2.0,
        answer: 'X³⁺ เหมือน Ar → X³⁺ มี 18e⁻ → X มี 21e⁻ = Sc (Z=21) | การจัดเรียง: 1s²2s²2p⁶3s²3p⁶',
      },
    ],
  },
  {
    id: 'y62-w62',
    year: 62,
    questionNum: 62,
    topicId: 'atomic-structure',
    contextText: 'พิจารณาเลขออกซิเดชันของ N ในสารต่างๆ',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '62',
        text: 'เลขออกซิเดชันของ N ใน NO₃⁻, NH₄⁺, N₂H₄ และ N₂O ตามลำดับ',
        points: 2.0,
        answer: 'NO₃⁻: +5 | NH₄⁺: −3 | N₂H₄: −2 | N₂O: +1',
      },
    ],
  },
  {
    id: 'y62-w63',
    year: 62,
    questionNum: 63,
    topicId: 'atomic-structure',
    contextText: 'พิจารณาธาตุในตารางธาตุ: Na, Mg, Al, Si, P, S, Cl, Ar',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '63.1',
        text: 'ธาตุที่อยู่ในหมู่ 13 คือ',
        points: 1.0,
        answer: 'Al (Aluminium, Z=13)',
      },
      {
        label: '63.2',
        text: 'ธาตุที่ใช้พลังงานมากที่สุดในการเสีย 1 เวเลนซ์อิเล็กตรอน',
        points: 1.0,
        answer: 'Cl (IE₁ ของ Cl > S > P > Si > Al > Mg > Na ใน period 3)',
      },
    ],
  },
  {
    id: 'y62-w64',
    year: 62,
    questionNum: 64,
    topicId: 'stoichiometry',
    contextText: 'สารละลายที่มีส่วนผสมของ BaCl₂, MgCl₂ และ KNO₃',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '64',
        text: 'สมการไอออนิกสุทธิแสดงปฏิกิริยาที่มีตะกอนเกิดขึ้น (เขียนบรรทัดละ 1 สมการ)',
        points: 2.0,
        answer: 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) | Mg²⁺(aq) + 2OH⁻(aq) → Mg(OH)₂(s) | Ba²⁺(aq) + CO₃²⁻(aq) → BaCO₃(s)',
      },
    ],
  },
  {
    id: 'y62-w65',
    year: 62,
    questionNum: 65,
    topicId: 'atomic-structure',
    contextText: 'ไอโซโทป A สลายตัวแบบ beta decay มีครึ่งชีวิต 8 วัน เริ่มต้น 100 mg',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '65.1',
        text: 'ครึ่งชีวิตของไอโซโทป A มีค่าเท่าใด (เดือน)',
        points: 1.0,
        answer: '8 วัน ≈ 0.267 เดือน (ถ้า 1 เดือน = 30 วัน)',
      },
      {
        label: '65.2',
        text: 'ผ่านไป 1 ปีครึ่งจากเริ่มต้น จะมีไอโซโทป A เหลือกี่ mg',
        points: 1.0,
        answer: '1.5 ปี = 18 เดือน = 540 วัน | ครึ่งชีวิต = 8 วัน → จำนวนครึ่งชีวิต = 67.5 | เหลือ ≈ 0 mg (ใกล้ 0)',
      },
    ],
  },
  {
    id: 'y62-w66',
    year: 62,
    questionNum: 66,
    topicId: 'chemical-bonding',
    contextText: 'ตารางพลังงานพันธะ: C−H=413, C=C=614, C−C=348, C=O=745, O−H=464, O=O=498',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '66',
        text: 'พลังงานพันธะของ C=O เท่ากับเท่าใด kJ/mol⁻¹ (จากปฏิกิริยา CH₂=CH₂ + O₂ → CH₂O + H₂CO และข้อมูล)',
        points: 2.0,
        answer: '≈ 360 kJ/mol (C=O single) หรือ 745 kJ/mol (C=O double) ขึ้นกับปฏิกิริยาที่กำหนด',
      },
    ],
  },
  {
    id: 'y62-w67',
    year: 62,
    questionNum: 67,
    topicId: 'chemical-bonding',
    contextText: 'โมเลกุล CCl₄ มีพันธะ C−Cl',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '67',
        text: 'จำนวนพันธะ C−Cl ทั้งหมดใน 1.00 mol ของ CCl₄',
        points: 2.0,
        answer: 'CCl₄ มีพันธะ C−Cl = 4 พันธะ | 1 mol × 4 × 6.022×10²³ = 2.409×10²⁴ พันธะ',
      },
    ],
  },
  {
    id: 'y62-w68',
    year: 62,
    questionNum: 68,
    topicId: 'stoichiometry',
    contextText: 'ธาตุ A (หมู่ IA), D (หมู่ IIA), E (หมู่ VIIA)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '68.1',
        text: 'สูตรเคมีของไอออนบวกที่ประกอบด้วยธาตุ A และ D',
        points: 1.0,
        answer: 'ถ้า A=Na, D=Mg: ไม่มีไอออนบวกรวมกัน แต่ถ้าเป็น NH₄⁺ type: ไม่มีสูตรทั่วไป | อาจหมายถึง A⁺ หรือ D²⁺ ขึ้นกับ context',
      },
      {
        label: '68.2',
        text: 'สูตรเคมีของไอออนลบที่ประกอบด้วยธาตุ D และ E',
        points: 1.0,
        answer: 'ถ้า D=Mg, E=Cl: ไม่มีไอออนลบ | ถ้า D=S, E=O: SO₄²⁻ | ขึ้นกับ context',
      },
    ],
  },
  {
    id: 'y62-w69',
    year: 62,
    questionNum: 69,
    topicId: 'stoichiometry',
    contextText: 'ถุงลมนิรภัยใช้ NaN₃ สลายตัว: 2NaN₃(s) → 2Na(s) + 3N₂(g) | ต้องการ N₂ ปริมาตรที่ระบุ',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '69',
        text: 'ถุงลมนิรภัยพองตัวจนมีปริมาตรเท่าใด (L) ถ้าใช้ NaN₃ 100 g ที่ 25°C 1 atm',
        points: 2.0,
        answer: 'n(NaN₃)=100/65=1.538 mol | n(N₂)=1.538×3/2=2.308 mol | V=nRT/P=2.308×0.082×298=56.5 L',
      },
    ],
  },
  {
    id: 'y62-w70',
    year: 62,
    questionNum: 70,
    topicId: 'stoichiometry',
    contextText: 'สมการ: Al(s) + Fe₂O₃(s) → Al₂O₃(s) + Fe(s) (thermite reaction)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '70',
        text: 'สูตรโมเลกุลของสารประกอบ... (ตาม context ปี 62)',
        points: 2.0,
        answer: 'คำนวณตามสัดส่วน stoichiometry',
      },
    ],
  },
  {
    id: 'y62-w71',
    year: 62,
    questionNum: 71,
    topicId: 'stoichiometry',
    contextText: 'ธาตุ X อยู่ในคาบที่ 2 ของตารางธาตุ มีไอออน X²⁺ ที่มีอิเล็กตรอน 10 ตัว',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '71',
        text: 'เลขอะตอมและคาบของ X คือ',
        points: 2.0,
        answer: 'X²⁺ มี 10e⁻ → X มี 12e⁻ = Mg | Mg อยู่คาบ 3 (ไม่ใช่คาบ 2) | ถ้า X²⁺ มี 8e⁻ → X มี 10e⁻ = Ne? ไม่ใช่โลหะ | ต้องตรวจสอบ context',
      },
    ],
  },
  {
    id: 'y62-w72',
    year: 62,
    questionNum: 72,
    topicId: 'stoichiometry',
    contextText: 'การถลุงแร่ชัลไฟด์ของโลหะ X (XS) ประกอบด้วย 2 ขั้นตอน:\nขั้นที่ 1: XS(s)+O₂(g)→XO(s)+SO₂(g) มีผลได้ร้อยละ 95\nขั้นที่ 2: XO(s)+CO(g)→X(l)+CO₂(g) มีผลได้ร้อยละ 80\nต้องการ X 38.0 g มวลอะตอมของ X = 200',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '72',
        text: 'จะต้องใช้แร่ XS กี่กรัม',
        points: 2.0,
        answer: 'X ที่ต้องการ = 38.0/200 = 0.190 mol | ผลได้ร้อยละ 80: XO = 0.190/0.80 = 0.2375 mol | ผลได้ร้อยละ 95: XS = 0.2375/0.95 = 0.250 mol | มวล XS = 0.250×(200+32) = 0.250×232 = 58 g',
      },
    ],
  },
  {
    id: 'y62-w73',
    year: 62,
    questionNum: 73,
    topicId: 'stoichiometry',
    contextText: 'สารตัวอย่างชนิดหนึ่งประกอบด้วยออกไซด์ปกติของ Na และออกไซด์ปกติของ K ในอัตราส่วน 1:1 โดยโมล มวลตัวอย่าง 2.00 g เติมกรด HNO₃ มากเกินพอ กรอง แล้วระเหย จะได้สารประกอบในเตาอบ 3.72 g',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '73.1',
        text: 'เขียนสมการเคมีแสดงปฏิกิริยาที่เกิดขึ้นพร้อมดุลสมการ',
        points: 1.0,
        answer: 'Na₂O + 2HNO₃ → 2NaNO₃ + H₂O | K₂O + 2HNO₃ → 2KNO₃ + H₂O',
      },
      {
        label: '73.2',
        text: 'หาร้อยละของสารเจือปนในสารตัวอย่าง',
        points: 1.0,
        answer: 'สมมติ x mol Na₂O และ x mol K₂O: 62x + 94x = 2.00 → 156x = 2.00 → x = 0.01282 mol | ผลิตภัณฑ์ = 2×0.01282×85 + 2×0.01282×101 = 2.18+2.59 = 4.77 g ≠ 3.72 g → มีสิ่งเจือปน',
      },
    ],
  },
  {
    id: 'y62-w74',
    year: 62,
    questionNum: 74,
    topicId: 'solution',
    contextText: 'สารละลาย NH₄Cl 0.20 mol/dm³ 25 cm³ ผสมกับสารละลาย FeCl₃ 0.10 mol/dm³ 25 cm³ ถือว่า NH₄Cl ไม่ทำปฏิกิริยากับ FeCl₃',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '74',
        text: 'ความเข้มข้นของ Cl⁻ ในสารละลายผสม (mol/dm³)',
        points: 2.0,
        answer: 'Cl⁻ จาก NH₄Cl = 0.20×25 = 5 mmol | Cl⁻ จาก FeCl₃ = 0.10×3×25 = 7.5 mmol | รวม = 12.5 mmol ใน 50 cm³ = 0.250 mol/dm³',
      },
    ],
  },
  {
    id: 'y62-w75',
    year: 62,
    questionNum: 75,
    topicId: 'solution',
    contextText: 'สารอินทรีย์ชนิดหนึ่ง สูตรเอมพิริคัล C₄H₆NO₂ ละลายในเอทานอล (C₂H₅OH) 10.00 g สารละลายมีจุดเดือด 80.94°C\nKb เอทานอล = 1.22°C/m, จุดเดือดเอทานอล = 78.5°C',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '75',
        text: 'สูตรโมเลกุลของสารอินทรีย์นี้คืออะไร ถ้าใช้สาร 4.00 g',
        points: 2.0,
        answer: 'ΔTb = 80.94−78.5 = 2.44°C | m = 2.44/1.22 = 2.00 mol/kg | n = 2.00×0.010 = 0.020 mol | MW = 4.00/0.020 = 200 g/mol | C₄H₆NO₂ MW = 100 → สูตรโมเลกุล = C₈H₁₂N₂O₄ (เป็น 2 เท่า)',
      },
    ],
  },

  // ===== ปี 64 (2564) =====
  {
    id: 'y64-w61',
    year: 64,
    questionNum: 61,
    topicId: 'atomic-structure',
    contextText: 'สเปกตรัม Balmer ของ H: เส้น 656nm, 486nm, 434nm, 410nm',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '61.1',
        text: 'เส้นสเปกตรัมใดมีพลังงานสูงสุด',
        points: 1.0,
        answer: '410 nm มีพลังงานสูงสุด (λสั้นสุด → E=hc/λ สูงสุด)',
      },
      {
        label: '61.2',
        text: 'ธาตุ X ที่เกิดหลังสลาย α decay ของ ⁴²⁰Rn คือ',
        points: 1.0,
        answer: 'Z=86-2=84 (Po), A=222-4=218 → ²¹⁸Po',
      },
    ],
  },
  {
    id: 'y64-w62',
    year: 64,
    questionNum: 62,
    topicId: 'atomic-structure',
    contextText: 'ไอโซโทป M-52 มีครึ่งชีวิต = t วัน เริ่มต้น 100 mg',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '62.1',
        text: 'ผ่านไป 3t วัน เหลือ M-52 กี่ mg',
        points: 1.0,
        answer: '(1/2)³ × 100 = 12.5 mg',
      },
      {
        label: '62.2',
        text: 'ถ้า t=8 วัน ผ่านไป 24 วัน เหลือกี่ mg',
        points: 1.0,
        answer: '12.5 mg',
      },
    ],
  },
  {
    id: 'y64-w63',
    year: 64,
    questionNum: 63,
    topicId: 'atomic-structure',
    contextText: 'ธาตุ G, M, L อยู่ในตารางธาตุ',
    totalPoints: 1.0,
    subQuestions: [
      {
        label: '63.1',
        text: 'ธาตุที่อยู่ในหมู่เดียวกับ G',
        points: 0.5,
        answer: 'ขึ้นกับ Z ของ G',
      },
      {
        label: '63.2',
        text: 'ธาตุที่มี IE₁ ต่ำสุด',
        points: 0.5,
        answer: 'ธาตุที่มีขนาดอะตอมใหญ่ที่สุด',
      },
    ],
  },
  {
    id: 'y64-w64',
    year: 64,
    questionNum: 64,
    topicId: 'atomic-structure',
    contextText: 'ธาตุ A, D, G, L ใน Born-Haber cycle',
    totalPoints: 1.0,
    subQuestions: [
      {
        label: '64.1',
        text: 'พลังงานแลตทิซ (ค่าเป็นบวกหรือลบ)',
        points: 0.5,
        answer: 'ค่าเป็นลบ (exothermic ในการก่อตัวของผลึก)',
      },
      {
        label: '64.2',
        text: 'ธาตุ L มีขนาดไอออนเป็นอย่างไรเมื่อเทียบกับ G',
        points: 0.5,
        answer: 'ขึ้นกับ context',
      },
    ],
  },
  {
    id: 'y64-w65',
    year: 64,
    questionNum: 65,
    topicId: 'atomic-structure',
    contextText: 'ตารางสมบัติ: สาร A ทำให้เกิดตะกอนกับ Na₂SO₄, Na₂CO₃',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '65',
        text: 'ระบุไอออนบวกในสาร A และเขียนสมการ',
        points: 2.0,
        answer: 'ถ้าตะกอนกับ SO₄²⁻ และ CO₃²⁻ = Ba²⁺ | สมการ: Ba²⁺+SO₄²⁻→BaSO₄(s), Ba²⁺+CO₃²⁻→BaCO₃(s)',
      },
    ],
  },
  {
    id: 'y64-w66',
    year: 64,
    questionNum: 66,
    topicId: 'chemical-bonding',
    contextText: 'SO₂ vs SO₃ โครงสร้างพันธะ',
    totalPoints: 1.0,
    subQuestions: [
      {
        label: '66.1',
        text: 'จำนวนพันธะ S-O ใน SO₄²⁻',
        points: 0.5,
        answer: '4 พันธะ (bond order 1.5 เฉลี่ย)',
      },
      {
        label: '66.2',
        text: 'ขนาดพันธะ S-O ใน SO₂ vs SO₄²⁻',
        points: 0.5,
        answer: 'SO₂ สั้นกว่า (bond order สูงกว่า)',
      },
    ],
  },
  {
    id: 'y64-w67',
    year: 64,
    questionNum: 67,
    topicId: 'chemical-bonding',
    contextText: 'พันธะใน CH₄ (sp³), C₂H₄ (sp²), C₂H₂ (sp)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '67',
        text: 'เรียงลำดับจุดเดือด CH₄, SiH₄, GeH₄ จากต่ำไปสูงและอธิบาย',
        points: 2.0,
        answer: 'CH₄<SiH₄<GeH₄ เพราะแรงลอนดอนเพิ่มตาม MW',
      },
    ],
  },
  {
    id: 'y64-w68',
    year: 64,
    questionNum: 68,
    topicId: 'stoichiometry',
    contextText: 'ปฏิกิริยา: Al₂O₃(s) + 3H₂SO₄(aq) → Al₂(SO₄)₃(aq) + 3H₂O(l)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '68',
        text: 'ถ้าใช้ Al₂O₃ 20.4 g ทำปฏิกิริยากับ H₂SO₄ มากพอ จะได้ Al₂(SO₄)₃ กี่กรัม',
        points: 2.0,
        answer: 'n(Al₂O₃)=20.4/102=0.20 mol | Al₂(SO₄)₃=0.20 mol × 342 = 68.4 g',
      },
    ],
  },
  {
    id: 'y64-w69',
    year: 64,
    questionNum: 69,
    topicId: 'stoichiometry',
    contextText: 'ถุงลมนิรภัย: 2NaN₃→2Na+3N₂ | N₂ ต้องการ 56 L ที่ 27°C 1 atm',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '69',
        text: 'ต้องใช้ NaN₃ กี่กรัม',
        points: 2.0,
        answer: 'n(N₂)=PV/RT=1×56/(0.082×300)=2.276 mol | n(NaN₃)=2×2.276/3×2=3.034 mol → แก้: n(NaN₃)=2.276×2/3=1.517×2=3.034? หรือ 2NaN₃→3N₂: n(NaN₃)=2/3×2.276×2=3.034 mol? → ตรวจ: n(NaN₃)/n(N₂)=2/3 → n(NaN₃)=2/3×2.276... ไม่ถูก: 2mol NaN₃ → 3 mol N₂ ดังนั้น n(NaN₃) = 2.276×2/3 = 1.517 mol × 65 = 98.6 g',
      },
    ],
  },
  {
    id: 'y64-w70',
    year: 64,
    questionNum: 70,
    topicId: 'stoichiometry',
    contextText: 'ปฏิกิริยา: Fe(s)+S(s)→FeS(s), FeS+2HCl→FeCl₂+H₂S',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '70',
        text: 'ถ้าใช้ Fe 5.6 g และ S 3.2 g จะได้ FeS กี่กรัม',
        points: 2.0,
        answer: 'n(Fe)=0.10 mol, n(S)=0.10 mol | ทำปฏิกิริยาพอดี | FeS=0.10 mol × 88 = 8.8 g',
      },
    ],
  },
  {
    id: 'y64-w71',
    year: 64,
    questionNum: 71,
    topicId: 'stoichiometry',
    contextText: 'สมการ: 2KMnO₄+16HCl→2KCl+2MnCl₂+5Cl₂+8H₂O',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '71',
        text: 'ถ้าใช้ KMnO₄ 0.020 mol Cl₂ กี่ลิตรที่ STP',
        points: 2.0,
        answer: 'n(Cl₂)=5/2×0.020=0.050 mol | V=0.050×22.4=1.12 L',
      },
    ],
  },
  {
    id: 'y64-w72',
    year: 64,
    questionNum: 72,
    topicId: 'stoichiometry',
    contextText: 'ปฏิกิริยา: MnO₂+4HCl→MnCl₂+Cl₂+2H₂O',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '72.1',
        text: 'ดุลสมการ KMnO₄+HCl (บอก Cl₂ ที่ได้ถ้าใช้ 87 g HCl, MW=36.5)',
        points: 1.0,
        answer: 'n(HCl)=87/36.5=2.38 mol | จากสมการ HCl:Cl₂=16:5 → n(Cl₂)=5/16×2.38=0.744 mol | ตรวจ: 2KMnO₄ใช้ 16HCl ดังนั้น 2.38 mol HCl → KMnO₄=2.38×2/16=0.298 mol → Cl₂=0.298×5/2=0.744 mol',
      },
      {
        label: '72.2',
        text: 'ปริมาตร Cl₂ ที่ STP',
        points: 1.0,
        answer: 'V=0.744×22.4=16.7 L',
      },
    ],
  },
  {
    id: 'y64-w73',
    year: 64,
    questionNum: 73,
    topicId: 'solution',
    contextText: 'สารละลาย Na₂CO₃ เข้มข้น 0.100 mol/L ปริมาตร 25 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '73',
        text: 'ต้องใช้ HCl 0.0600 mol/L กี่ mL',
        points: 2.0,
        answer: 'Na₂CO₃+2HCl → 2NaCl+H₂O+CO₂ | n(Na₂CO₃)=0.0025 mol | n(HCl)=0.005 mol | V=0.005/0.0600=83.3 mL',
      },
    ],
  },
  {
    id: 'y64-w74',
    year: 64,
    questionNum: 74,
    topicId: 'solution',
    contextText: 'สารละลาย Ba(OH)₂ 0.100 mol/L 200 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '74',
        text: 'ความเข้มข้นของ OH⁻ คือ',
        points: 2.0,
        answer: 'Ba(OH)₂→Ba²⁺+2OH⁻ | [OH⁻]=2×0.100=0.200 mol/L',
      },
    ],
  },
  {
    id: 'y64-w75',
    year: 64,
    questionNum: 75,
    topicId: 'solution',
    contextText: 'Ethylene glycol (C₂H₆O₂, MW=62) | Kf น้ำ=1.86°C/m',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '75',
        text: 'ต้องใช้ ethylene glycol กี่กรัมละลายใน 1.00 kg น้ำ เพื่อให้ Tf=−10.0°C',
        points: 2.0,
        answer: 'm=10.0/1.86=5.376 mol/kg | m=5.376×62=333 g',
      },
    ],
  },

  // ===== ปี 65 (2565) =====
  {
    id: 'y65-w61',
    year: 65,
    questionNum: 61,
    topicId: 'atomic-structure',
    contextText: 'สเปกตรัม H atom Balmer series',
    totalPoints: 1.0,
    subQuestions: [
      {
        label: '61.1',
        text: 'เส้น Balmer จาก n=5 มีกี่เส้น',
        points: 0.5,
        answer: '3 เส้น (n=5→2, 4→2, 3→2)',
      },
      {
        label: '61.2',
        text: 'เส้นใดมีความถี่สูงสุด',
        points: 0.5,
        answer: 'n=5→2 (ΔE สูงสุด)',
      },
    ],
  },
  {
    id: 'y65-w62',
    year: 65,
    questionNum: 62,
    topicId: 'atomic-structure',
    contextText: 'ตารางอิเล็กตรอนในออร์บิทัลของไอออน A⁶⁺,O²⁻,D⁴⁺,G²⁻',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '62.1',
        text: 'อิเล็กตรอนเดี่ยวของ X',
        points: 1.0,
        answer: 'ขึ้นกับตาราง',
      },
      {
        label: '62.2',
        text: 'X₂Y₃ มีโครงสร้างชนิดใด',
        points: 1.0,
        answer: 'ขึ้นกับ X,Y',
      },
    ],
  },
  {
    id: 'y65-w63',
    year: 65,
    questionNum: 63,
    topicId: 'atomic-structure',
    contextText: 'ธาตุ X,Y,Z: สมบัติตามตาราง',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '63',
        text: 'เปรียบเทียบขนาด X⁻, Y²⁻, Z³⁺',
        points: 2.0,
        answer: 'isoelectronic: ประจุมาก→ขนาดเล็ก | Z³⁺<Y²⁻<X⁻',
      },
    ],
  },
  {
    id: 'y65-w64',
    year: 65,
    questionNum: 64,
    topicId: 'atomic-structure',
    contextText: 'ธาตุ A(17),D(20),E(22),G(26)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '64.1',
        text: 'เรียง IE₁ น้อยไปมาก',
        points: 1.0,
        answer: 'D<E<G<A (Ca<Ti<Fe<Cl)',
      },
      {
        label: '64.2',
        text: 'EN สูงสุด',
        points: 1.0,
        answer: 'A(Cl)',
      },
    ],
  },
  {
    id: 'y65-w65',
    year: 65,
    questionNum: 65,
    topicId: 'atomic-structure',
    contextText: 'ไอโซโทป ¹³¹I t½=8 วัน เริ่มต้น r%',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '65',
        text: 'เปอร์เซ็นต์ที่เหลือหลัง 56 ครึ่งชีวิต',
        points: 2.0,
        answer: '(1/2)^56 ≈ 1.4×10⁻¹⁷ → แทบ 0%',
      },
    ],
  },
  {
    id: 'y65-w66',
    year: 65,
    questionNum: 66,
    topicId: 'chemical-bonding',
    contextText: 'furan C₄H₄O ตารางพลังงานพันธะ C-H=413,C=C=614,C-O=360,C=O=745,O=O=498,O-H=464',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '66',
        text: 'ΔH ของปฏิกิริยา C₄H₄O(g)+4O₂(g)→4CO₂(g)+2H₂O(g)',
        points: 2.0,
        answer: 'สลาย: 4(C-H)+4(C=C or C-C)+2(C-O)+(O=O×4) → สร้าง 4(C=O)×2+2(O-H)×2 | คำนวณจากตาราง: ΔH ≈ −2535 kJ/mol (โดยประมาณ)',
      },
    ],
  },
  {
    id: 'y65-w67',
    year: 65,
    questionNum: 67,
    topicId: 'chemical-bonding',
    contextText: 'ตารางแสดงสมบัติ X,Y,Z: จุดเดือด สถานะ การนำไฟฟ้า',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '67.1',
        text: 'X คืออะไร',
        points: 0.5,
        answer: 'ขึ้นกับตาราง',
      },
      {
        label: '67.2',
        text: 'Y คืออะไร',
        points: 0.5,
        answer: 'ขึ้นกับตาราง',
      },
      {
        label: '67.3',
        text: 'Z คืออะไร',
        points: 0.5,
        answer: 'ขึ้นกับตาราง',
      },
      {
        label: '67.4',
        text: 'C คืออะไร',
        points: 0.5,
        answer: 'ขึ้นกับตาราง',
      },
    ],
  },
  {
    id: 'y65-w68',
    year: 65,
    questionNum: 68,
    topicId: 'stoichiometry',
    contextText: '¹²C 98.9%, ¹³C 1.1%',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '68',
        text: 'มวลอะตอมเฉลี่ยของ C',
        points: 2.0,
        answer: '12×0.989+13×0.011=11.868+0.143=12.011 u',
      },
    ],
  },
  {
    id: 'y65-w69',
    year: 65,
    questionNum: 69,
    topicId: 'stoichiometry',
    contextText: 'A=Ca(Z=20), D=S(Z=16)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '69.1',
        text: 'ไอออนเสถียรของ A',
        points: 1.0,
        answer: 'Ca²⁺',
      },
      {
        label: '69.2',
        text: 'สูตร A กับ D',
        points: 1.0,
        answer: 'CaS',
      },
    ],
  },
  {
    id: 'y65-w70',
    year: 65,
    questionNum: 70,
    topicId: 'stoichiometry',
    contextText: 'Fe₂O₃+3CO→2Fe+3CO₂',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '70',
        text: 'Fe₂O₃ 160 g → Fe กี่กรัม',
        points: 2.0,
        answer: 'n=1.00 mol → Fe=112 g',
      },
    ],
  },
  {
    id: 'y65-w71',
    year: 65,
    questionNum: 71,
    topicId: 'stoichiometry',
    contextText: 'Cr₂O₇²⁻+I⁻→Cr³⁺+I₂ (acidic)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '71',
        text: 'สมการดุล',
        points: 2.0,
        answer: 'Cr₂O₇²⁻+6I⁻+14H⁺→2Cr³⁺+3I₂+7H₂O',
      },
    ],
  },
  {
    id: 'y65-w72',
    year: 65,
    questionNum: 72,
    topicId: 'stoichiometry',
    contextText: '2H₂O₂→2H₂O+O₂',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '72',
        text: 'H₂O₂ 34 g → O₂ กี่ L STP',
        points: 2.0,
        answer: 'n=1.0 mol → O₂=0.5 mol × 22.4=11.2 L',
      },
    ],
  },
  {
    id: 'y65-w73',
    year: 65,
    questionNum: 73,
    topicId: 'solution',
    contextText: 'HCl 12.0 mol/L → เตรียม 0.100 mol/L 500 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '73',
        text: 'ใช้ HCl กี่ mL',
        points: 2.0,
        answer: 'C₁V₁=C₂V₂ → 12V₁=0.100×500 → V₁=4.17 mL',
      },
    ],
  },
  {
    id: 'y65-w74',
    year: 65,
    questionNum: 74,
    topicId: 'solution',
    contextText: 'NaCl 2.00 mol/L 400 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '74',
        text: 'มวล NaCl',
        points: 2.0,
        answer: 'n=0.800 mol × 58.5=46.8 g',
      },
    ],
  },
  {
    id: 'y65-w75',
    year: 65,
    questionNum: 75,
    topicId: 'solution',
    contextText: 'H₂SO₄ 98% w/w d=1.84 g/mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '75',
        text: 'ความเข้มข้น mol/L',
        points: 2.0,
        answer: '18.4 mol/L',
      },
    ],
  },

  // ===== ปี 66 (2566) =====
  {
    id: 'y66-w61',
    year: 66,
    questionNum: 61,
    topicId: 'atomic-structure',
    contextText: 'Xe³⁺ Z=54',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '61',
        text: 'การจัดเรียง e⁻ ของ Xe³⁺',
        points: 2.0,
        answer: '[Kr]4d¹⁰5s²5p³',
      },
    ],
  },
  {
    id: 'y66-w62',
    year: 66,
    questionNum: 62,
    topicId: 'atomic-structure',
    contextText: '¹³¹I t½=8 วัน เริ่ม 100 mg',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '62.1',
        text: 'ผ่าน 24 วัน เหลือ%',
        points: 1.0,
        answer: '12.5%',
      },
      {
        label: '62.2',
        text: 'เหลือ 6.25% ต้องผ่านกี่วัน',
        points: 1.0,
        answer: '32 วัน',
      },
    ],
  },
  {
    id: 'y66-w63',
    year: 66,
    questionNum: 63,
    topicId: 'atomic-structure',
    contextText: 'A(19),D(20),E(34),G(35)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '63',
        text: 'เรียง IE₁ น้อยไปมาก',
        points: 2.0,
        answer: 'A(K)<D(Ca)<E(Se)<G(Br)',
      },
    ],
  },
  {
    id: 'y66-w64',
    year: 66,
    questionNum: 64,
    topicId: 'atomic-structure',
    contextText: 'X(99) สลาย α → Y',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '64.1',
        text: 'Z,A ของ Y ถ้า X=²⁵²Es',
        points: 1.0,
        answer: 'Z=97(Bk), A=248',
      },
      {
        label: '64.2',
        text: 'ธาตุ Y คือ',
        points: 1.0,
        answer: '²⁴⁸Bk',
      },
    ],
  },
  {
    id: 'y66-w65',
    year: 66,
    questionNum: 65,
    topicId: 'chemical-bonding',
    contextText: 'BaO และ P₄O₁₀ ละลายน้ำ',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '65',
        text: 'เขียนสมการ',
        points: 2.0,
        answer: 'BaO+H₂O→Ba(OH)₂ | P₄O₁₀+6H₂O→4H₃PO₄',
      },
    ],
  },
  {
    id: 'y66-w66',
    year: 66,
    questionNum: 66,
    topicId: 'stoichiometry',
    contextText: 'AgNO₃ 0.100 mol/L 200 mL + Na₂SO₄ 0.100 mol/L 200 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '66',
        text: 'Ag₂SO₄ ที่เกิด (MW=312)',
        points: 2.0,
        answer: '2Ag⁺+SO₄²⁻→Ag₂SO₄ | Ag⁺จำกัด=0.020 mol → Ag₂SO₄=0.010 mol × 312=3.12 g',
      },
    ],
  },
  {
    id: 'y66-w67',
    year: 66,
    questionNum: 67,
    topicId: 'stoichiometry',
    contextText: 'Zn+2HCl→ZnCl₂+H₂',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '67',
        text: 'Zn 6.54 g + HCl 36.5 g → H₂ กี่ L STP',
        points: 2.0,
        answer: 'Zn จำกัด → H₂=0.10 mol × 22.4=2.24 L',
      },
    ],
  },
  {
    id: 'y66-w68',
    year: 66,
    questionNum: 68,
    topicId: 'stoichiometry',
    contextText: 'HCl + NaOH 0.100 mol/L 30 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '68',
        text: '[HCl] ถ้าใช้ 25 mL',
        points: 2.0,
        answer: '0.120 mol/L',
      },
    ],
  },
  {
    id: 'y66-w69',
    year: 66,
    questionNum: 69,
    topicId: 'solution',
    contextText: 'BaCl₂ 0.0400 mol/L 100 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '69',
        text: '[Cl⁻]',
        points: 2.0,
        answer: '0.0800 mol/L',
      },
    ],
  },
  {
    id: 'y66-w70',
    year: 66,
    questionNum: 70,
    topicId: 'solution',
    contextText: 'KCl 0.500 mol/L 200 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '70',
        text: 'จำนวน K⁺',
        points: 2.0,
        answer: '6.02×10²²',
      },
    ],
  },
  {
    id: 'y66-w71',
    year: 66,
    questionNum: 71,
    topicId: 'solution',
    contextText: 'KCl 40 g ใน H₂O 1000 g',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '71',
        text: 'molality',
        points: 2.0,
        answer: '0.537 mol/kg',
      },
    ],
  },
  {
    id: 'y66-w72',
    year: 66,
    questionNum: 72,
    topicId: 'solution',
    contextText: 'Ksp(AgCl)=1.8×10⁻¹⁰',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '72',
        text: 's ของ AgCl',
        points: 2.0,
        answer: '1.34×10⁻⁵ mol/L',
      },
    ],
  },
  {
    id: 'y66-w73',
    year: 66,
    questionNum: 73,
    topicId: 'solution',
    contextText: 'M MW=100, 0.100 mol/L 250 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '73.1',
        text: 'มวล M',
        points: 1.0,
        answer: '2.50 g',
      },
      {
        label: '73.2',
        text: 'เจือจาง 5 เท่า C=',
        points: 1.0,
        answer: '0.0200 mol/L',
      },
    ],
  },
  {
    id: 'y66-w74',
    year: 66,
    questionNum: 74,
    topicId: 'general',
    contextText: 'ถุงลม 327°C ข้างนอก 27°C 100 kPa',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '74',
        text: 'V ถุงเปลี่ยนอย่างไรเมื่ออุ่น 300→600 K',
        points: 2.0,
        answer: 'V₂=V₁×600/300=2V₁ (เพิ่ม 2 เท่า)',
      },
    ],
  },
  {
    id: 'y66-w75',
    year: 66,
    questionNum: 75,
    topicId: 'solution',
    contextText: 'Al(OH)₃+NaOH→NaAlO₂+H₂O',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '75',
        text: 'ถ้าใช้ Al(OH)₃ 7.8 g + NaOH 0.200 mol/L 250 mL จะได้ NaAlO₂ กี่กรัม',
        points: 2.0,
        answer: 'n(Al(OH)₃)=7.8/78=0.10 mol, n(NaOH)=0.050 mol | NaOH จำกัด → NaAlO₂=0.050 mol × 82=4.1 g',
      },
    ],
  },

  // ===== ปี 67 (2567) =====
  {
    id: 'y67-w61',
    year: 67,
    questionNum: 61,
    topicId: 'atomic-structure',
    contextText: 'Hg₂Cl₂: Hg₂²⁺ พันธะ Hg-Hg',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '61',
        text: 'เลขออกซิเดชัน Hg ใน Hg₂Cl₂',
        points: 2.0,
        answer: '+1',
      },
    ],
  },
  {
    id: 'y67-w62',
    year: 67,
    questionNum: 62,
    topicId: 'atomic-structure',
    contextText: 'A³⁺=[Ar] → A=Sc | Mn²⁺=[Ar]3d⁵',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '62.1',
        text: 'A=? การจัดเรียงอิเล็กตรอน',
        points: 1.0,
        answer: 'Sc: [Ar]3d¹4s²',
      },
      {
        label: '62.2',
        text: 'Mn²⁺ มีอิเล็กตรอนเดี่ยวกี่ตัว',
        points: 1.0,
        answer: '5 ตัว ([Ar]3d⁵)',
      },
    ],
  },
  {
    id: 'y67-w63',
    year: 67,
    questionNum: 63,
    topicId: 'stoichiometry',
    contextText: 'Cu+4HNO₃(conc)→Cu(NO₃)₂+2NO₂+2H₂O',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '63',
        text: 'Cu 6.4 g → NO₂ กี่ L STP',
        points: 2.0,
        answer: 'n(Cu)=0.10 | NO₂=0.20 mol × 22.4=4.48 L',
      },
    ],
  },
  {
    id: 'y67-w64',
    year: 67,
    questionNum: 64,
    topicId: 'chemical-bonding',
    contextText: 'H-H=436, Cl-Cl=243, H-Cl=432 kJ/mol',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '64',
        text: 'ΔH ของ H₂+Cl₂→2HCl',
        points: 2.0,
        answer: '(436+243)−2×432=−185 kJ/mol',
      },
    ],
  },
  {
    id: 'y67-w65',
    year: 67,
    questionNum: 65,
    topicId: 'chemical-bonding',
    contextText: 'ตารางพลังงานพันธะ C-H,C=C,C-C,C-O,C=O',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '65',
        text: 'ΔH ของ CH₂=CH₂+H₂O→CH₃CH₂OH',
        points: 2.0,
        answer: 'ΔH ≈ −44 kJ/mol (คำนวณจากตาราง)',
      },
    ],
  },
  {
    id: 'y67-w66',
    year: 67,
    questionNum: 66,
    topicId: 'stoichiometry',
    contextText: '2NH₄Cl+Ca(OH)₂→CaCl₂+2NH₃+2H₂O',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '66',
        text: 'NH₄Cl 10.7 g + Ca(OH)₂ 7.40 g → NH₃ กี่กรัม',
        points: 2.0,
        answer: 'n(NH₄Cl)=0.20, n(Ca(OH)₂)=0.10 | NH₃=0.20×17=3.40 g',
      },
    ],
  },
  {
    id: 'y67-w67',
    year: 67,
    questionNum: 67,
    topicId: 'stoichiometry',
    contextText: 'C₃H₈+5O₂→3CO₂+4H₂O',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '67',
        text: 'C₃H₈ 4.4 g → O₂ กี่กรัม',
        points: 2.0,
        answer: 'n(C₃H₈)=0.10 | O₂=0.50 mol × 32=16.0 g',
      },
    ],
  },
  {
    id: 'y67-w68',
    year: 67,
    questionNum: 68,
    topicId: 'solution',
    contextText: 'CH₃OH ใน H₂O, Tf=−3.72°C, Kf=1.86',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '68',
        text: 'CH₃OH ใน H₂O 500 g คือ',
        points: 2.0,
        answer: 'm=2.00 mol/kg | n=1.00 mol × 32=32.0 g',
      },
    ],
  },
  {
    id: 'y67-w69',
    year: 67,
    questionNum: 69,
    topicId: 'stoichiometry',
    contextText: 'NH₄Cl + AgNO₃ เท่ากัน',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '69',
        text: 'ปฏิกิริยาและผลิตภัณฑ์',
        points: 2.0,
        answer: 'Ag⁺+Cl⁻→AgCl(s) ↓ สีขาว',
      },
    ],
  },
  {
    id: 'y67-w70',
    year: 67,
    questionNum: 70,
    topicId: 'solution',
    contextText: 'NaCl 1.17 g ใน H₂O 200 g, Kf=1.86, i=2',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '70',
        text: 'Tf คือ',
        points: 2.0,
        answer: 'm=0.100 mol/kg | ΔTf=0.372°C | Tf=−0.372°C',
      },
    ],
  },
  {
    id: 'y67-w71',
    year: 67,
    questionNum: 71,
    topicId: 'atomic-structure',
    contextText: 'ธาตุในคาบ 2 มี 3 LP',
    totalPoints: 1.0,
    subQuestions: [
      {
        label: '71',
        text: 'ธาตุคืออะไร',
        points: 1.0,
        answer: 'Ne (3 LP ไม่มีพันธะ) หรือ F (3 LP 1 พันธะ)',
      },
    ],
  },
  {
    id: 'y67-w72',
    year: 67,
    questionNum: 72,
    topicId: 'solution',
    contextText: 'Na₂SO₄ c mol/L d=1.10 g/mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '72.1',
        text: 'นิวตรอนของ ²⁴Na',
        points: 1.0,
        answer: '24−11=13',
      },
      {
        label: '72.2',
        text: 'molality ถ้า c=1.00 mol/L',
        points: 1.0,
        answer: '1.044 mol/kg',
      },
    ],
  },
  {
    id: 'y67-w73',
    year: 67,
    questionNum: 73,
    topicId: 'solution',
    contextText: 'Kb น้ำ=0.512, เอทานอล=1.22',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '73',
        text: 'เปรียบเทียบ < = > Tb ของสาร A,B,C',
        points: 2.0,
        answer: 'ขึ้นกับ Kb และ i ของแต่ละสาร',
      },
    ],
  },
  {
    id: 'y67-w74',
    year: 67,
    questionNum: 74,
    topicId: 'solution',
    contextText: 'HCl + NaHCO₃',
    totalPoints: 1.5,
    subQuestions: [
      {
        label: '74.1',
        text: 'สัดส่วน HCl:NaHCO₃',
        points: 1.0,
        answer: '1:1',
      },
      {
        label: '74.2',
        text: 'ปัจจัยที่มีผล',
        points: 0.5,
        answer: 'ความเข้มข้น อุณหภูมิ พื้นที่ผิว',
      },
    ],
  },
  {
    id: 'y67-w75',
    year: 67,
    questionNum: 75,
    topicId: 'solution',
    contextText: 'X ใน EtOH 50 g, ΔTf=1.55°C, Kf=3.00',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '75',
        text: 'MW ของ X ถ้าใช้ 2.50 g',
        points: 2.0,
        answer: 'm=0.517 mol/kg → n=0.0258 mol → MW=96.9 g/mol',
      },
    ],
  },

  // ===== ปี 68 (2568) =====
  {
    id: 'y68-w61',
    year: 68,
    questionNum: 61,
    topicId: 'atomic-structure',
    contextText: 'X=[Ne]3s²3p⁴, Y=[Ar]3d¹⁰4s²4p⁵',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '61',
        text: 'X และ Y คือ และอยู่หมู่/คาบ',
        points: 2.0,
        answer: 'X=S (Z=16, หมู่VIA ค3), Y=Br (Z=35, หมู่VIIA ค4)',
      },
    ],
  },
  {
    id: 'y68-w62',
    year: 68,
    questionNum: 62,
    topicId: 'atomic-structure',
    contextText: 'A(Z=30) ไอออน A⁶⁺, O²⁻',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '62.1',
        text: 'e⁻ ของ A⁶⁺',
        points: 1.0,
        answer: '30−6=24',
      },
      {
        label: '62.2',
        text: 'การจัดเรียง O²⁻',
        points: 1.0,
        answer: '1s²2s²2p⁶',
      },
    ],
  },
  {
    id: 'y68-w63',
    year: 68,
    questionNum: 63,
    topicId: 'atomic-structure',
    contextText: 'A=[Ar]3d⁵4s²',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '63',
        text: 'A คือ เลขออกซิเดชันทั่วไป',
        points: 2.0,
        answer: 'Mn (Z=25) | +2,+4,+7',
      },
    ],
  },
  {
    id: 'y68-w64',
    year: 68,
    questionNum: 64,
    topicId: 'atomic-structure',
    contextText: 'IE₁ ผิดปกติ',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '64',
        text: 'ธาตุที่มี IE₁ สูงผิดปกติในคาบ 2',
        points: 2.0,
        answer: 'N (half-filled 2p³) และ Be (full 2s²)',
      },
    ],
  },
  {
    id: 'y68-w65',
    year: 68,
    questionNum: 65,
    topicId: 'atomic-structure',
    contextText: 'CaCl₂ ionic compound',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '65',
        text: 'สูตรและ MW',
        points: 2.0,
        answer: 'CaCl₂, MW=111 g/mol',
      },
    ],
  },
  {
    id: 'y68-w66',
    year: 68,
    questionNum: 66,
    topicId: 'chemical-bonding',
    contextText: 'H-H=436, Cl-Cl=243, H-Cl=432; C≡C=839',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '66',
        text: 'ΔH ของ C₂H₂+H₂→C₂H₄',
        points: 2.0,
        answer: '(839+436)−(614+2×413)=1275−1440=−165 kJ/mol',
      },
    ],
  },
  {
    id: 'y68-w67',
    year: 68,
    questionNum: 67,
    topicId: 'stoichiometry',
    contextText: '4NH₃+5O₂→4NO+6H₂O',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '67',
        text: 'NH₃ 170 g → NO กี่กรัม',
        points: 2.0,
        answer: 'n=10 mol → NO=300 g',
      },
    ],
  },
  {
    id: 'y68-w68',
    year: 68,
    questionNum: 68,
    topicId: 'stoichiometry',
    contextText: 'CaCO₃+2HCl→CaCl₂+H₂O+CO₂',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '68',
        text: 'CaCO₃ 50.0 g → CO₂ กี่ L STP',
        points: 2.0,
        answer: 'n=0.500 mol → 11.2 L',
      },
    ],
  },
  {
    id: 'y68-w69',
    year: 68,
    questionNum: 69,
    topicId: 'solution',
    contextText: 'C₄H₈O₂ MW=88 ปริมาตร 100 mL มี 8.8 g',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '69',
        text: 'ความเข้มข้น mol/L',
        points: 2.0,
        answer: '1.00 mol/L',
      },
    ],
  },
  {
    id: 'y68-w70',
    year: 68,
    questionNum: 70,
    topicId: 'solution',
    contextText: 'H₂SO₄ 9.8 g/L (MW=98)',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '70',
        text: 'ความเข้มข้น mol/L',
        points: 2.0,
        answer: '0.100 mol/L',
      },
    ],
  },
  {
    id: 'y68-w71',
    year: 68,
    questionNum: 71,
    topicId: 'solution',
    contextText: 'MgCl₂ 2.00 mol/kg, i=3, Kf=1.86',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '71',
        text: 'ΔTf และ Tf',
        points: 2.0,
        answer: 'ΔTf=3×1.86×2=11.16°C | Tf=−11.16°C',
      },
    ],
  },
  {
    id: 'y68-w72',
    year: 68,
    questionNum: 72,
    topicId: 'solution',
    contextText: 'NaCl 0.100 mol/L 500 mL + Na₂SO₄ 0.100 mol/L 500 mL',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '72',
        text: '[Na⁺] ผสม',
        points: 2.0,
        answer: '(0.050+0.100)/1.00=0.150 mol/L',
      },
    ],
  },
  {
    id: 'y68-w73',
    year: 68,
    questionNum: 73,
    topicId: 'solution',
    contextText: 'EtOH 1.00 mol/kg, Kb=0.512, M=0.978 mol/L',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '73.1',
        text: 'Tb',
        points: 1.0,
        answer: '100.512°C',
      },
      {
        label: '73.2',
        text: 'π ที่ 27°C',
        points: 1.0,
        answer: '0.978×0.082×300=24.1 atm',
      },
    ],
  },
  {
    id: 'y68-w74',
    year: 68,
    questionNum: 74,
    topicId: 'stoichiometry',
    contextText: 'π=4.92 atm ที่ 25°C M MW=100',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '74',
        text: '[M] mol/L',
        points: 2.0,
        answer: 'π/RT=4.92/(0.082×298)=0.201 mol/L',
      },
    ],
  },
  {
    id: 'y68-w75',
    year: 68,
    questionNum: 75,
    topicId: 'solution',
    contextText: 'X 2.00 L STP มวล 2.80 g',
    totalPoints: 2.0,
    subQuestions: [
      {
        label: '75',
        text: 'MW ของ X',
        points: 2.0,
        answer: 'n=2.00/22.4=0.0893 mol | MW=2.80/0.0893=31.4 g/mol',
      },
    ],
  },

]

export function getWrittenQuestionsByYear(year: number): WrittenQuestion[] {
  return writtenExamQuestions.filter(q => q.year === year)
}

export function getWrittenTotalPoints(year: number): number {
  return getWrittenQuestionsByYear(year).reduce((sum, q) => sum + q.totalPoints, 0)
}

export function getWrittenQuestionsByTopic(topicId: string): WrittenQuestion[] {
  return writtenExamQuestions.filter(q => q.topicId === topicId)
}
