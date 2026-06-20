// Year 66 (2566) POSN Camp 1 Chemistry - additional questions extracted from exam_texts.json.
// Every numeric answer verified by script and reconciled with printed choices.
const questions = [
  {
    id: 'y66-q30', year: 66, questionNum: 30, topicId: 'atomic-structure',
    text: 'ธาตุรีเนียม (Re) มี 2 ไอโซโทป คือ ¹⁸⁵Re (มวล 185.0) และ ¹⁸⁷Re (มวล 187.0) มวลอะตอมเฉลี่ย 186.2 ปริมาณร้อยละของ ¹⁸⁵Re และ ¹⁸⁷Re เป็นเท่าใดตามลำดับ',
    choices: ['25 และ 75', '40 และ 60', '60 และ 40', '75 และ 25'],
    correctIndex: 1,
    explanation: 'ให้ ¹⁸⁵Re = x: 185x + 187(1−x) = 186.2 → 187 − 2x = 186.2 → x = 0.40 → 40% และ 60% → ข้อ ข'
  },
  {
    id: 'y66-q31', year: 66, questionNum: 31, topicId: 'stoichiometry',
    text: 'ไฮโดรคาร์บอนชนิดหนึ่ง 1 โมเลกุลมี C 2 อะตอม สารนี้ 1.505×10²⁴ โมเลกุล มี 9.03×10²⁴ อะตอม สูตรโมเลกุลและจำนวนโมล H ในสาร 1.505×10²⁴ โมเลกุล เป็นดังข้อใด',
    choices: ['C₂H₄, 10', 'C₂H₆, 10', 'C₂H₄, 15', 'C₂H₆, 15'],
    correctIndex: 0,
    explanation: 'อะตอมต่อโมเลกุล = 9.03×10²⁴/1.505×10²⁴ = 6 → C₂H₄. โมเลกุล = 1.505×10²⁴/6.02×10²³ = 2.5 mol → mol H = 2.5×4 = 10 → ข้อ ก'
  },
  {
    id: 'y66-q32', year: 66, questionNum: 32, topicId: 'stoichiometry',
    text: 'แอมโมเนียมไนเทรต (NH₄NO₃) มีไนโตรเจนร้อยละเท่าใดโดยมวล และถ้าต้องการเตรียมปุ๋ยน้ำให้มีไนโตรเจน 21 %w/v ปริมาตร 1 L ต้องใช้สารนี้กี่กรัม (N=14, NH₄NO₃=80)',
    choices: ['17.5 %, 1200 g', '28 %, 750 g', '35 %, 210 g', '35 %, 600 g'],
    correctIndex: 3,
    explanation: '%N = 2×14/80 = 35%. ต้องการ N 21 g ใน 1 L → NH₄NO₃ = 21/0.35 = 60 g → ข้อ ง'
  },
  {
    id: 'y66-q33', year: 66, questionNum: 33, topicId: 'stoichiometry',
    text: 'สารประกอบออกไซด์ M₂O₃ 63.5 g มีออกซิเจน 12.0 g มวลอะตอมของธาตุ M เป็นเท่าใด',
    choices: ['46', '69', '103', '206'],
    correctIndex: 2,
    explanation: 'mol O = 12.0/16 = 0.75 → mol M₂O₃ = 0.25 → mol M = 0.50. มวล M = 63.5−12.0 = 51.5 g → M = 51.5/0.50 = 103 → ข้อ ค'
  },
  {
    id: 'y66-q34', year: 66, questionNum: 34, topicId: 'stoichiometry',
    text: 'สารประกอบ Na₃AO₄·xH₂O มีออกซิเจน 64.0 %w/w และมวลโมเลกุล 400 g/mol มวลอะตอมของธาตุ A เป็นเท่าใด (Na=23, O=16, H=1)',
    choices: ['31', '51', '75', '87'],
    correctIndex: 1,
    explanation: 'มวล O = 400×0.64 = 256 → จำนวน O = 16 อะตอม. AO₄ มี 4, ที่เหลือ 12 มาจาก H₂O → x=12. A = 400 − (3×23 + 4×16 + 12×18) = 400 − 349 = 51 → ข้อ ข'
  },
  {
    id: 'y66-q35', year: 66, questionNum: 35, topicId: 'stoichiometry',
    text: 'ธาตุ X และ Z เกิดสารประกอบ X₂Z₃ ซึ่งมี X 70 %w/w และมวลต่อโมล 160 g/mol มวลต่อโมลของ XZ เป็นกี่กรัม/โมล',
    choices: ['45', '56', '72', '100'],
    correctIndex: 2,
    explanation: 'มวล X ใน X₂Z₃ = 160×0.70 = 112 → X = 56. มวล Z = 48 → Z = 16. XZ = 56+16 = 72 → ข้อ ค'
  },
  {
    id: 'y66-q36', year: 66, questionNum: 36, topicId: 'solutions',
    text: 'สารละลายโซเดียมคาร์บอเนต (Na₂CO₃) เข้มข้น 2.65 %w/v ความหนาแน่น 1.03 g/mL จะมีความเข้มข้นของโซเดียมไอออนกี่โมลาร์ (Na₂CO₃=106)',
    choices: ['0.125', '0.250', '0.500', '0.515'],
    correctIndex: 2,
    explanation: '2.65 %w/v = 26.5 g/L → 26.5/106 = 0.25 mol/L Na₂CO₃. แต่ละโมลให้ Na⁺ 2 ตัว → [Na⁺] = 0.50 M → ข้อ ค'
  },
  {
    id: 'y66-q38', year: 66, questionNum: 38, topicId: 'solutions',
    text: 'สารละลายกลูโคส (C₆H₁₂O₆) เข้มข้น 2.0 mol/kg ความหนาแน่น 1.10 g/mL มีความเข้มข้นกี่โมลต่อลิตร (กลูโคส=180)',
    choices: ['1.3', '1.6', '2.2', '3.4'],
    correctIndex: 1,
    explanation: '2.0 mol ในน้ำ 1 kg: มวลกลูโคส = 360 g → มวลสารละลาย = 1360 g → ปริมาตร = 1360/1.10 = 1236 mL. ความเข้มข้น = 2.0/1.236 = 1.6 mol/L → ข้อ ข'
  },
  {
    id: 'y66-q39', year: 66, questionNum: 39, topicId: 'solutions',
    text: 'เตรียม H₂C₂O₄ โดยชั่ง H₂C₂O₄·2H₂O 3.15 g (M=126) ละลายเป็น 100 mL ถ้าต้องการเตรียม H₂C₂O₄ เข้มข้น 0.020 mol/L 250 mL ต้องใช้สารละลายที่เตรียมไว้กี่ mL',
    choices: ['8.0', '14', '20', '50'],
    correctIndex: 2,
    explanation: 'สต๊อก = (3.15/126)/0.1 = 0.25 M. ต้องการ mol = 0.020×0.250 = 0.005 → V = 0.005/0.25 = 0.020 L = 20 mL → ข้อ ค'
  },
  {
    id: 'y66-q40', year: 66, questionNum: 40, topicId: 'solutions',
    text: 'สารละลาย X เข้มข้น 47.0 %w/w 100 mL ความหนาแน่น 1.50 g/mL (M=40.0) หากต้องการเจือจางให้เข้มข้น 1.00 mol/L ต้องเติมน้ำกี่ mL',
    choices: ['1760', '1660', '1075', '683'],
    correctIndex: 1,
    explanation: 'มวลสารละลาย = 150 g → X = 70.5 g → 1.7625 mol. ปริมาตรสุดท้าย = 1.7625/1.00 = 1762 mL → เติมน้ำ = 1762 − 100 ≈ 1660 mL → ข้อ ข'
  },
  {
    id: 'y66-q43', year: 66, questionNum: 43, topicId: 'stoichiometry',
    text: 'CO₂ + 2NH₃ → NH₂CONH₂ + H₂O ถ้า CO₂ ทำปฏิกิริยาพอดีกับ NH₃ 10.2 kg จะมีผลิตภัณฑ์เกิดขึ้นทั้งหมดกี่กิโลกรัม (NH₃=17, ยูเรีย=60, H₂O=18)',
    choices: ['10.8', '18.0', '23.4', '36.0'],
    correctIndex: 2,
    explanation: 'NH₃ = 10.2/17 = 0.6 kmol → ยูเรีย = 0.3 kmol, H₂O = 0.3 kmol. มวลผลิตภัณฑ์ = 0.3×60 + 0.3×18 = 18 + 5.4 = 23.4 kg → ข้อ ค'
  },
  {
    id: 'y66-q44', year: 66, questionNum: 44, topicId: 'stoichiometry',
    text: 'ใส่โลหะสังกะสี 19.50 g ลงในสารละลายซิลเวอร์ไนเทรต Zn + 2AgNO₃ → 2Ag + Zn(NO₃)₂ เมื่อปฏิกิริยาดำเนินไประยะหนึ่ง ของแข็งทั้งหมดมีสังกะสี 18.85 g ของแข็งนี้มีเงินอยู่ร้อยละโดยมวลเท่าใด (Zn=65, Ag=108)',
    choices: ['5.42', '10.3', '11.5', '76.9'],
    correctIndex: 1,
    explanation: 'Zn ที่ทำปฏิกิริยา = (19.50−18.85)/65 = 0.01 mol → Ag เกิด = 0.02 mol = 2.16 g. ของแข็งรวม = 18.85+2.16 = 21.01 g. %Ag = 2.16/21.01×100 = 10.3% → ข้อ ข'
  },
  {
    id: 'y66-q45', year: 66, questionNum: 45, topicId: 'stoichiometry',
    text: 'สารประกอบ MnFₓ 1.12 g ให้ความร้อนกับโพแทสเซียมมากเกินพอ ได้โลหะแมงกานีส 0.55 g และโพแทสเซียมฟลูออไรด์ 1.74 g สูตรเคมีของสารประกอบนี้คือข้อใด (Mn=55, F=19)',
    choices: ['MnF₂', 'MnF₃', 'MnF₄', 'MnF₅'],
    correctIndex: 1,
    explanation: 'mol Mn = 0.55/55 = 0.01. มวล F = 1.12−0.55 = 0.57 g → mol F = 0.03. อัตราส่วน F:Mn = 3:1 → MnF₃ → ข้อ ข'
  },
]

module.exports = questions
if (require.main === module) {
  console.log('Year 66 questions authored:', questions.length)
}
