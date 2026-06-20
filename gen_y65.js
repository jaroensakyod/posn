// Year 65 (2565) POSN Camp 1 Chemistry - from scanned PDF (300dpi + crops).
// Every numeric answer verified by script AND reconciled with printed choices.
const questions = [
  {
    id: 'y65-q2', year: 65, questionNum: 2, topicId: 'atomic-structure',
    text: 'สเปกตรัมของไฮโดรเจน 4 เส้น: 410 nm (ม่วง), 434 nm (น้ำเงินแกมม่วง), 486 nm (น้ำเงินเขียว), 656 nm (แดง) เกิดจากการเปลี่ยนระดับพลังงาน a: n=6→2, b: n=4→2, c: n=5→2, d: n=3→2 เส้นสเปกตรัม a, b, c, d จะมีสีตามลำดับข้อใด',
    choices: ['น้ำเงินเขียว, น้ำเงินแกมม่วง, แดง, ม่วง', 'น้ำเงินแกมม่วง, ม่วง, น้ำเงินเขียว, แดง', 'น้ำเงินเขียว, ม่วง, แดง, น้ำเงินแกมม่วง', 'ม่วง, น้ำเงินเขียว, น้ำเงินแกมม่วง, แดง'],
    correctIndex: 3,
    explanation: 'อนุกรมบัลเมอร์ 1/λ ∝ (1/4−1/n²): n ยิ่งสูง ΔE ยิ่งมาก λ ยิ่งสั้น. a(n=6)=410 ม่วง, c(n=5)=434 น้ำเงินแกมม่วง, b(n=4)=486 น้ำเงินเขียว, d(n=3)=656 แดง → a,b,c,d = ม่วง, น้ำเงินเขียว, น้ำเงินแกมม่วง, แดง → ข้อ ง'
  },
  {
    id: 'y65-q32', year: 65, questionNum: 32, topicId: 'stoichiometry',
    text: 'เมื่อนำโลหะ A 1.00 g มาละลายด้วยกรด จากนั้นนำไปตกตะกอน พบว่าได้ตะกอน ASO₄ 1.50 g โลหะ A มีมวลอะตอมเท่าใด (SO₄=96)',
    choices: ['48', '64', '96', '192'],
    correctIndex: 3,
    explanation: 'mol A = mol ASO₄. ให้ M = มวลอะตอม A: 1.00/M = 1.50/(M+96) → M+96 = 1.50M → 96 = 0.5M → M = 192 → ข้อ ง'
  },
  {
    id: 'y65-q33', year: 65, questionNum: 33, topicId: 'stoichiometry',
    text: 'จำนวนอะตอมทั้งหมดในแมกนีเซียมไซยาไนด์ (magnesium cyanide, Mg(CN)₂) 91.2 g เป็นเท่าใด (Mg=24, C=12, N=14)',
    choices: ['7.22×10²³', '2.17×10²⁴', '3.29×10²⁴', '3.61×10²⁴'],
    correctIndex: 3,
    explanation: 'M(Mg(CN)₂) = 24+2(12+14) = 76. mol = 91.2/76 = 1.2. แต่ละสูตรมี 5 อะตอม (Mg+2C+2N). อะตอมรวม = 1.2×5×6.02×10²³ = 3.61×10²⁴ → ข้อ ง'
  },
  {
    id: 'y65-q34', year: 65, questionNum: 34, topicId: 'stoichiometry',
    text: 'สารประกอบชนิดหนึ่ง 1 โมเลกุลประกอบด้วย A 2 อะตอม และ B 3 อะตอม (A₂B₃) ร้อยละโดยมวลของ B ในสารประกอบนี้เท่ากับ 64 ถ้ามวลอะตอมของ B เท่ากับ 32 มวลอะตอมของธาตุ A เป็นเท่าใด',
    choices: ['27', '32', '54', '108'],
    correctIndex: 0,
    explanation: 'มวล B ในสูตร = 3×32 = 96. %B = 96/(2A+96) = 0.64 → 96 = 1.28A+61.44 → A = 27 → ข้อ ก'
  },
  {
    id: 'y65-q42', year: 65, questionNum: 42, topicId: 'solutions',
    text: 'พิจารณาสารละลาย a, b, c: a=NaCl 50 ppm, b=NaCl ร้อยละ 0.050 โดยมวลต่อปริมาตร, c=NaCl 5.0×10⁻³ M เรียงความเข้มข้นจากมากไปน้อยข้อใดถูก (NaCl=58.5)',
    choices: ['a>b>c', 'a>c>b', 'b>c>a', 'c>b>a'],
    correctIndex: 2,
    explanation: 'แปลงเป็น M: a=0.050/58.5=8.55×10⁻⁴, b=0.5 g/L /58.5=8.55×10⁻³, c=5.0×10⁻³. เรียง b>c>a → ข้อ ค'
  },
  {
    id: 'y65-q44', year: 65, questionNum: 44, topicId: 'solutions',
    text: 'เตรียมสารละลายคอปเปอร์(II)ซัลเฟตเพนตะไฮเดรต (CuSO₄·5H₂O, M=250) 2.495 g ปรับปริมาตร 100.00 mL จากนั้นปิเปต 5.00 mL ลงขวด 250.0 mL ปรับปริมาตร ความเข้มข้น Cu²⁺ ปลายสุดเป็นกี่ ppm (Cu=63.5)',
    choices: ['0.127', '127', '199', '499'],
    correctIndex: 1,
    explanation: 'mol = 2.495/250 = 0.00998 → เข้มข้นแรก = 0.0998 M. เจือจาง 5/250 → 0.001996 M. Cu²⁺ = 0.001996×63.5×1000 = 127 ppm → ข้อ ข'
  },
  {
    id: 'y65-q50', year: 65, questionNum: 50, topicId: 'stoichiometry',
    text: 'น้ำมันดีเซลชนิดหนึ่งประกอบด้วย C₁₅H₂₄ เท่านั้น มีความหนาแน่น 0.816 g/mL ถ้านำน้ำมัน 2.00 L มาเผาไหม้อย่างสมบูรณ์ จะเกิดแก๊สคาร์บอนไดออกไซด์กี่ลิตรที่ STP',
    choices: ['3.29×10³', '2.69×10³', '2.20×10²', '1.79×10²'],
    correctIndex: 1,
    explanation: 'มวล = 2000×0.816 = 1632 g; M(C₁₅H₂₄)=204 → 8.0 mol. เผาไหม้ได้ CO₂ = 15×8.0 = 120 mol → 120×22.4 = 2688 L = 2.69×10³ → ข้อ ข'
  },
  {
    id: 'y65-q54', year: 65, questionNum: 54, topicId: 'stoichiometry',
    text: 'CO₂+H₂O→C₆H₁₂O₆+O₂ แล้ว C₆H₁₂O₆→2C₂H₅OH+2CO₂ ถ้าต้องการเตรียมเอทานอลร้อยละ 75 ปริมาตร 200 mL (ความหนาแน่นเอทานอล 0.782 g/mL) ต้องเกิดคาร์บอนไดออกไซด์กี่กรัม (C₂H₅OH=46)',
    choices: ['5.1', '56', '112', '224'],
    correctIndex: 2,
    explanation: 'เอทานอล = 200×0.75×0.782 = 117.3 g → 117.3/46 = 2.55 mol. การหมัก CO₂ = mol เอทานอล = 2.55 → 2.55×44 = 112 g → ข้อ ค'
  },
  {
    id: 'y65-q55', year: 65, questionNum: 55, topicId: 'stoichiometry',
    text: 'ผสมสารละลาย Pb(NO₃)₂ 0.100 M 25.0 mL กับ KI 0.100 M 45.0 mL จะเกิดตะกอน PbI₂ กี่กรัม (Pb=207, I=127)',
    choices: ['0.576', '1.04', '2.07', '4.15'],
    correctIndex: 1,
    explanation: 'Pb²⁺=0.0025 mol, I⁻=0.0045 mol. Pb²⁺+2I⁻→PbI₂: I⁻ เป็นตัวกำหนด → PbI₂ = 0.0045/2 = 0.00225 mol. M(PbI₂)=461 → 0.00225×461 = 1.04 g → ข้อ ข'
  },
  {
    id: 'y65-q56', year: 65, questionNum: 56, topicId: 'stoichiometry',
    text: 'โซเดียมไฮดรอกไซด์ (NaOH) 4.0 g ทำปฏิกิริยากับแคลเซียมคลอไรด์ (CaCl₂) 11.1 g โดยน้ำเป็นตัวทำละลาย หลังปฏิกิริยาเกิดสมบูรณ์มีผลิตภัณฑ์เกิดขึ้นรวมกันกี่กรัม (NaOH=40, CaCl₂=111)',
    choices: ['5.8', '9.6', '13.2', '15.1'],
    correctIndex: 1,
    explanation: '2NaOH+CaCl₂→Ca(OH)₂+2NaCl. NaOH=0.1, CaCl₂=0.1; NaOH เป็นตัวกำหนด → Ca(OH)₂=0.05×74=3.7 g, NaCl=0.1×58.5=5.85 g. รวม = 9.55 ≈ 9.6 g → ข้อ ข'
  },
];

module.exports = questions;
if (require.main === module) {
  console.log('Year 65 questions authored:', questions.length);
}
