// Year 67 (2567) POSN Camp 1 Chemistry - additional questions from exam_texts.json.
// Every numeric answer verified by script and reconciled with printed choices.
const questions = [
  {
    id: 'y67-q33', year: 67, questionNum: 33, topicId: 'stoichiometry',
    text: 'สารประกอบประกอบด้วย Na, S, O เท่านั้น มีกำมะถัน 26.9% และออกซิเจน 53.8% โดยมวล ถ้ามวลสูตรเป็นสองเท่าของมวลสูตรเอมพิริคัล สารนี้ 3.01×10²³ หน่วยสูตร มีมวลกี่กรัม (Na=23, S=32, O=16)',
    choices: ['119', '71', '63', '59.5'],
    correctIndex: 0,
    explanation: 'Na = 100−26.9−53.8 = 19.3%. โมล Na:S:O = 19.3/23 : 26.9/32 : 53.8/16 = 1:1:4 → NaSO₄ (มวล 119). มวลสูตรจริง = 2×119 = 238 (Na₂S₂O₈). 3.01×10²³ = 0.5 mol → 0.5×238 = 119 g → ข้อ ก'
  },
  {
    id: 'y67-q34', year: 67, questionNum: 34, topicId: 'stoichiometry',
    text: 'สารประกอบมี Ba เป็นองค์ประกอบ ละลายสารนี้ 6.85 g เติม NaIO₃ มากเกินพอ เกิดตะกอน Ba(IO₃)₂ 4.87 g ร้อยละโดยมวลของ Ba ในสารประกอบเป็นเท่าใด (Ba=137, I=127, O=16)',
    choices: ['10', '20', '31', '40'],
    correctIndex: 1,
    explanation: 'M(Ba(IO₃)₂) = 137+2(127+48) = 487 → mol = 4.87/487 = 0.01 → mol Ba = 0.01 → มวล Ba = 1.37 g. %Ba = 1.37/6.85×100 = 20% → ข้อ ข'
  },
  {
    id: 'y67-q35', year: 67, questionNum: 35, topicId: 'stoichiometry',
    text: 'UF₆ 3.52 g ทำปฏิกิริยากับน้ำมากเกินพอ ได้สารประกอบสูตรเอมพิริคัล UₓOᵧFᵤ มวล 3.08 g และ HF 0.80 g สูตรเอมพิริคัลคือข้อใด (U=238, F=19, O=16, H=1)',
    choices: ['UOF₂', 'UOF₄', 'UO₂F', 'UO₂F₂'],
    correctIndex: 3,
    explanation: 'UF₆ = 3.52/352 = 0.01 mol → U=0.01, F รวม=0.06. HF = 0.80/20 = 0.04 → F ในผลิตภัณฑ์ = 0.02. มวล O = 3.08 − 0.01×238 − 0.02×19 = 0.32 → 0.02 mol O. U:O:F = 0.01:0.02:0.02 = 1:2:2 → UO₂F₂ → ข้อ ง'
  },
  {
    id: 'y67-q38', year: 67, questionNum: 38, topicId: 'stoichiometry',
    text: '2NaOH + Cl₂ → NaOCl + NaCl + H₂O ถ้าใช้ NaOH 20.0 g ทำปฏิกิริยากับ Cl₂ มากเกินพอ จะได้ NaOCl กี่กรัม (NaOH=40, NaOCl=74.5)',
    choices: ['10.0', '18.6', '37.2', '74.5'],
    correctIndex: 1,
    explanation: 'NaOH = 20.0/40 = 0.5 mol → NaOCl = 0.5/2 = 0.25 mol → 0.25×74.5 = 18.6 g → ข้อ ข'
  },
  {
    id: 'y67-q39', year: 67, questionNum: 39, topicId: 'stoichiometry',
    text: 'กลูโคส (C₆H₁₂O₆) ถูกเปลี่ยนเป็น CO₂ และ CH₄ ถ้าปลวกผลิตกลูโคสได้วันละ 27 mg ในเวลา 1 ปี (365 วัน) จะเกิด CO₂ จากปลวก 1 ตัวกี่โมล (กลูโคส=180; C₆H₁₂O₆ → 3CO₂ + 3CH₄)',
    choices: ['0.16', '0.055', '4.5×10⁻⁴', '1.5×10⁻⁴'],
    correctIndex: 0,
    explanation: 'กลูโคสทั้งปี = 27×365 = 9855 mg = 9.855 g → 9.855/180 = 0.0548 mol. CO₂ = 3×0.0548 = 0.164 ≈ 0.16 mol → ข้อ ก'
  },
  {
    id: 'y67-q40', year: 67, questionNum: 40, topicId: 'stoichiometry',
    text: 'Cu₃FeS₃ + O₂ → 3Cu + FeO + 3SO₂ ถ้าใช้บอร์ไนต์ 34.25 kg ทำปฏิกิริยากับ O₂ มากเกินพอ และสูญเสีย SO₂ ร้อยละ 10 ปริมาตร SO₂ ที่สูญเสียเป็นกี่ลิตรที่ STP (Cu₃FeS₃=342.5)',
    choices: ['6.72×10³', '2.24×10³', '672', '224'],
    correctIndex: 2,
    explanation: 'บอร์ไนต์ = 34250/342.5 = 100 mol → SO₂ = 300 mol. สูญเสีย 10% = 30 mol → 30×22.4 = 672 L → ข้อ ค'
  },
  {
    id: 'y67-q41', year: 67, questionNum: 41, topicId: 'stoichiometry',
    text: 'C(s) + SiO₂(s) → SiC(s) + 2CO(g) ถ้าให้คาร์บอน 2 mol ทำปฏิกิริยากับ SiO₂ 6 mol จะเกิด SiC กี่กรัม (SiC=40)',
    choices: ['27', '40', '80', '240'],
    correctIndex: 2,
    explanation: 'อัตราส่วน C:SiO₂ = 1:1; C 2 mol ต้องการ SiO₂ 2 mol (มี 6 เหลือ) → C เป็นตัวกำหนด → SiC = 2 mol = 2×40 = 80 g → ข้อ ค'
  },
  {
    id: 'y67-q42', year: 67, questionNum: 42, topicId: 'analytical-chemistry',
    text: 'พ่นอากาศ 20 m³ ที่มี SO₂ ลงในน้ำ สารละลายทำปฏิกิริยาพอดีกับ KMnO₄ 0.00400 M 8.00 mL (5SO₂ + 2KMnO₄ + 2H₂O → ...) อากาศนี้มี SO₂ กี่ไมโครกรัมต่อลูกบาศก์เมตร (SO₂=64)',
    choices: ['41.0', '102', '256', '5120'],
    correctIndex: 2,
    explanation: 'KMnO₄ = 0.00400×0.008 = 3.2×10⁻⁵ mol → SO₂ = 5/2 × 3.2×10⁻⁵ = 8×10⁻⁵ mol = 5.12×10⁻³ g = 5120 µg. ÷20 m³ = 256 µg/m³ → ข้อ ค'
  },
  {
    id: 'y67-q43', year: 67, questionNum: 43, topicId: 'stoichiometry',
    text: 'ผ่าน NH₃ บน CuO ที่อุณหภูมิสูง ได้ N₂ + Cu + H₂O (2NH₃ + 3CuO → N₂ + 3Cu + 3H₂O) ใช้ NH₃ 51 g กับ CuO 159 g ข้อใดถูก (NH₃=17, CuO=79.5, Cu=63.5)',
    choices: ['เกิด N₂ 56 g และ Cu 286 g', 'เหลือ NH₃ 28 g และเกิด N₂ 42 g', 'NH₃ เป็นสารกำหนดปริมาณ เกิด Cu 127 g', 'CuO เป็นสารกำหนดปริมาณ และเกิด Cu 127 g'],
    correctIndex: 3,
    explanation: 'NH₃ = 3 mol, CuO = 2 mol. NH₃ ต้องการ CuO = 4.5 > 2 → CuO เป็นตัวกำหนด. Cu = 2 mol = 127 g → ข้อ ง'
  },
  {
    id: 'y67-q44', year: 67, questionNum: 44, topicId: 'stoichiometry',
    text: 'A+2B→C (50%); 2C+D→4E (50%); 2E+3F→G (80%) ต้องการ G 1.5 kg ต้องใช้ A กี่กิโลกรัม (B,D,F มากเกินพอ; A=100, G=150 g/mol)',
    choices: ['0.20', '1.0', '1.5', '5.0'],
    correctIndex: 3,
    explanation: 'G = 1500/150 = 10 mol. ย้อน: E = 10×2/0.80 = 25; C = 25/4×2/0.50 = 25; A = 25/0.50 = 50 mol → 50×100 = 5000 g = 5.0 kg → ข้อ ง'
  },
]

module.exports = questions
if (require.main === module) {
  console.log('Year 67 questions authored:', questions.length)
}
