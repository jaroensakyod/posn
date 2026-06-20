// Year 64 (2564) POSN Camp 1 Chemistry - from scanned PDF (rendered at 300dpi + 4-5x crops).
// Every numeric answer verified by script AND reconciled against the printed choices.
// Questions whose scanned values didn't reconcile (likely misread) were omitted.
const questions = [
  {
    id: 'y64-q31', year: 64, questionNum: 31, topicId: 'stoichiometry',
    text: 'พิจารณาแก๊สแอมโมเนีย (NH₃) ปริมาณต่อไปนี้ 1) 0.500 mol 2) 4.25 g 3) 8.96 L ที่ STP 4) 6.02×10²² โมเลกุล เรียงลำดับปริมาณแอมโมเนียจากมากไปน้อยข้อใดถูกต้อง',
    choices: ['1, 3, 2, 4', '2, 4, 1, 3', '3, 2, 4, 1', '4, 1, 3, 2'],
    correctIndex: 0,
    explanation: 'แปลงเป็นโมล: 1)=0.500, 2)=4.25/17=0.25, 3)=8.96/22.4=0.40, 4)=6.02×10²²/6.02×10²³=0.10. เรียงมาก→น้อย: 1>3>2>4 → ข้อ ก'
  },
  {
    id: 'y64-q32', year: 64, questionNum: 32, topicId: 'atomic-structure',
    text: 'ไอโซโทปกัมมันตรังสีชนิดหนึ่ง 1.00 g สลายตัวเป็นเวลา 1 ปี เหลือ 1.00×10¹⁸ อะตอม วัดปริมาตรแก๊สฮีเลียมที่ได้จากการสลายตัวได้ 0.112 mL ที่ STP ไอโซโทปนี้มีเลขมวลประมาณเท่าใด',
    choices: ['2.00×10²', '3.01×10²', '1.50×10⁵', '3.01×10⁵'],
    correctIndex: 2,
    explanation: 'He = 0.112×10⁻³/22.4 = 5×10⁻⁶ mol → อะตอมที่สลาย = 5×10⁻⁶×6.02×10²³ = 3.01×10¹⁸. อะตอมเริ่มต้น = 3.01×10¹⁸+1.00×10¹⁸ = 4.01×10¹⁸ = 6.66×10⁻⁶ mol. เลขมวล = 1.00 g / 6.66×10⁻⁶ ≈ 1.50×10⁵ → ข้อ ค'
  },
  {
    id: 'y64-q33', year: 64, questionNum: 33, topicId: 'states-of-matter',
    text: 'แก๊สชนิดหนึ่งมีมวล 0.400 g และมีปริมาตร 140 mL ที่ STP แก๊สนี้เป็นแก๊สชนิดใด',
    choices: ['CH₄', 'NH₃', 'SO₂', 'C₄H₁₀'],
    correctIndex: 2,
    explanation: 'mol = 0.140/22.4 = 0.00625. มวลโมเลกุล = 0.400/0.00625 = 64 = SO₂ → ข้อ ค'
  },
  {
    id: 'y64-q34', year: 64, questionNum: 34, topicId: 'stoichiometry',
    text: 'ฟอสฟีน (PH₃) เป็นแก๊สที่ใช้รมควันเพื่อกำจัดแมลง ข้อความเกี่ยวกับ PH₃ ต่อไปนี้ข้อใดผิด (P=31)',
    choices: ['PH₃ 0.400 mol มีมวล 13.6 g', 'PH₃ 10.2 g มี 1.81×10²³ โมเลกุล', 'PH₃ 6.80 g มีปริมาตร 4.48 L ที่ STP', 'ความหนาแน่นที่ STP ของ PH₃ = 0.66 g/L'],
    correctIndex: 3,
    explanation: 'M(PH₃)=34. ก) 0.400×34=13.6 ✓; ข) 10.2/34×6.02×10²³=1.81×10²³ ✓; ค) 6.80/34×22.4=4.48 ✓; ง) ความหนาแน่น = 34/22.4 = 1.52 g/L ไม่ใช่ 0.66 → ข้อ ง ผิด'
  },
  {
    id: 'y64-q35', year: 64, questionNum: 35, topicId: 'stoichiometry',
    text: 'โซเดียมไนไตรด์ (Na₃N) มีร้อยละโดยมวลของไนโตรเจนเป็นเท่าใด (Na=23, N=14)',
    choices: ['16.9', '20.3', '37.8', '64.6'],
    correctIndex: 0,
    explanation: 'Na₃N มวลสูตร = 3(23)+14 = 83. ร้อยละ N = 14/83×100 = 16.9% → ข้อ ก'
  },
  {
    id: 'y64-q37', year: 64, questionNum: 37, topicId: 'stoichiometry',
    text: 'สารชนิดหนึ่งประกอบด้วยโซเดียม โครเมียม และออกซิเจน ร้อยละ 17.6, 39.7 และ 42.7 โดยมวลตามลำดับ สูตรเอมพิริคัลของสารนี้คือข้อใด (Na=23, Cr=52, O=16)',
    choices: ['NaCrO₃', 'NaCrO₄', 'Na₂CrO₄', 'Na₂Cr₂O₇'],
    correctIndex: 3,
    explanation: 'mol Na:Cr:O = 17.6/23 : 39.7/52 : 42.7/16 = 0.765 : 0.763 : 2.67 = 1 : 1 : 3.5 = 2 : 2 : 7 → Na₂Cr₂O₇ → ข้อ ง'
  },
  {
    id: 'y64-q38', year: 64, questionNum: 38, topicId: 'solutions',
    text: 'สารละลายกรด H₂SO₄ เข้มข้น 5.00 mL มีความหนาแน่น 1.30 g/mL นำไปทำให้เป็น 500 mL จะมีความเข้มข้นประมาณกี่ mol/dm³ (H₂SO₄=98)',
    choices: ['0.13', '0.26', '1.0', '2.0'],
    correctIndex: 0,
    explanation: 'มวล H₂SO₄ = 5.00×1.30 = 6.5 g → 6.5/98 = 0.0663 mol ในปริมาตร 0.5 dm³ = 0.13 mol/dm³ → ข้อ ก'
  },
  {
    id: 'y64-q40', year: 64, questionNum: 40, topicId: 'solutions',
    text: 'นำ NaOH 20 g ละลายและปรับปริมาตรเป็น 50 mL ได้สารละลายที่มีความหนาแน่น 1.3 g/mL เศษส่วนโมลของ NaOH เท่าใด (NaOH=40)',
    choices: ['0.12', '0.15', '0.17', '0.20'],
    correctIndex: 2,
    explanation: 'มวลสารละลาย = 50×1.3 = 65 g → น้ำ = 45 g. mol NaOH = 0.5, mol น้ำ = 45/18 = 2.5. เศษส่วนโมล = 0.5/(0.5+2.5) = 0.167 ≈ 0.17 → ข้อ ค'
  },
  {
    id: 'y64-q41', year: 64, questionNum: 41, topicId: 'solutions',
    text: 'สารละลาย A เตรียมจาก MgCl₂·6H₂O 20.3 g ในน้ำปรับปริมาตร 500 mL ถ้าต้องการเตรียม MgCl₂ เข้มข้น 0.0100 M ปริมาตร 500 mL โดยเจือจางจาก A จะต้องใช้สารละลาย A กี่มิลลิลิตร (MgCl₂·6H₂O=203)',
    choices: ['11.7', '23.4', '25.0', '50.0'],
    correctIndex: 2,
    explanation: 'A เข้มข้น = (20.3/203)/0.5 = 0.200 M. ต้องการ mol = 0.0100×0.5 = 0.005 → ปริมาตร A = 0.005/0.200 = 0.025 L = 25.0 mL → ข้อ ค'
  },
  {
    id: 'y64-q42', year: 64, questionNum: 42, topicId: 'solutions',
    text: 'สารละลายกลูโคส (C₆H₁₂O₆) เข้มข้นร้อยละ 5.00 โดยมวล ปริมาตร 200 mL (ρ=1.00 g/mL) ต้องการเตรียมให้เป็นเข้มข้นร้อยละ 10.00 โดยมวล จะต้องเติมกลูโคสลงไปอีกกี่กรัม',
    choices: ['5.6', '11.2', '16.8', '22.2'],
    correctIndex: 1,
    explanation: 'มวลสารละลาย = 200 g มีกลูโคส 10 g. ให้เติม x g: (10+x)/(200+x)=0.10 → 0.9x=10 → x=11.1 ≈ 11.2 g → ข้อ ข'
  },
  {
    id: 'y64-q44', year: 64, questionNum: 44, topicId: 'solutions',
    text: 'A=สารละลายกลูโคส (C₆H₁₂O₆) 18% w/w; B=สารละลายยูเรีย (CO(NH₂)₂) 1.0 m; C=สารละลายเอทิลีนไกลคอล (C₂H₆O₂) เศษส่วนโมล 0.18 การเปรียบเทียบจุดเดือดและจุดเยือกแข็งข้อใดถูกต้อง (กลูโคส=180, ยูเรีย=60, เอทิลีนไกลคอล=62, น้ำ=18)',
    choices: ['จุดเดือด A>B>C', 'จุดเดือด B>A>C', 'จุดเยือกแข็ง A>B>C', 'จุดเยือกแข็ง B>A>C'],
    correctIndex: 3,
    explanation: 'โมแลล: A=(18/180)/0.082=1.22, B=1.0, C=0.18/(0.82×18/1000)=12.2. ลำดับ C>A>B. จุดเยือกแข็ง (ยิ่งโมแลลมากยิ่งต่ำ) → B>A>C → ข้อ ง'
  },
  {
    id: 'y64-q48', year: 64, questionNum: 48, topicId: 'stoichiometry',
    text: 'ธาตุ A ทำปฏิกิริยากับธาตุ B เกิดสารประกอบ 2 ชนิด คือ A₃B₂ และ AB₂ ถ้า A₃B₂ 0.05 mol มีมวล 9 g และ AB₂ 0.1 mol มีมวล 10 g ข้อใดถูก',
    choices: ['A มีมวลอะตอมน้อยกว่า B เท่ากับ 10', 'A มีมวลอะตอมมากกว่า B เท่ากับ 10', 'A มีมวลอะตอมน้อยกว่า B เท่ากับ 40', 'A มีมวลอะตอมมากกว่า B เท่ากับ 40'],
    correctIndex: 1,
    explanation: 'M(A₃B₂)=9/0.05=180 → 3a+2b=180. M(AB₂)=10/0.1=100 → a+2b=100. ลบกัน: 2a=80 → a=40, b=30. A มากกว่า B = 10 → ข้อ ข'
  },
  {
    id: 'y64-q49', year: 64, questionNum: 49, topicId: 'stoichiometry',
    text: 'จากปฏิกิริยา Al₄C₃(s) + H₂O(l) → Al(OH)₃(s) + CH₄(g) (สมการยังไม่ดุล) ถ้าเกิด CH₄ 9.6 g จะมี Al(OH)₃ เกิดขึ้นกี่โมล',
    choices: ['0.25', '0.45', '0.60', '0.80'],
    correctIndex: 3,
    explanation: 'Al₄C₃ + 12H₂O → 4Al(OH)₃ + 3CH₄. CH₄ = 9.6/16 = 0.6 mol → Al(OH)₃ = 0.6×4/3 = 0.80 mol → ข้อ ง'
  },
  {
    id: 'y64-q51', year: 64, questionNum: 51, topicId: 'stoichiometry',
    text: 'NaOH + Al + H₂O → NaAl(OH)₄ + H₂ (สมการยังไม่ดุล) ถ้าอะลูมิเนียม 3.24 g ทำปฏิกิริยากับโซเดียมไฮดรอกไซด์มากเกินพอ จะเกิดแก๊สไฮโดรเจนกี่ลิตรที่ STP (Al=27)',
    choices: ['0.9', '1.8', '2.7', '4.0'],
    correctIndex: 3,
    explanation: '2Al + 2NaOH + 6H₂O → 2NaAl(OH)₄ + 3H₂. Al = 3.24/27 = 0.12 mol → H₂ = 0.12×3/2 = 0.18 mol → 0.18×22.4 = 4.03 ≈ 4.0 L → ข้อ ง'
  },
  {
    id: 'y64-q55', year: 64, questionNum: 55, topicId: 'stoichiometry',
    text: 'I₂O₅ + 5CO → I₂ + 5CO₂ เกิดในแก๊สตัวอย่าง 250 mL ไอโอดีนที่ได้ทำปฏิกิริยาพอดีกับ Na₂S₂O₃ 0.10 M 8.0 mL (I₂+2Na₂S₂O₃→2NaI+Na₂S₄O₆) แก๊ส CO ในตัวอย่างคิดเป็นร้อยละโดยปริมาตร (%v/v) เท่าใด (แก๊ส 1 mol = 25.0 L)',
    choices: ['3.2', '18', '20', '40'],
    correctIndex: 2,
    explanation: 'Na₂S₂O₃ = 0.10×0.008 = 0.0008 mol → I₂ = 0.0004 mol → CO = 5×I₂ = 0.002 mol. ปริมาตร CO = 0.002×25.0 = 0.05 L = 50 mL. %v/v = 50/250×100 = 20% → ข้อ ค'
  },
  {
    id: 'y64-q59', year: 64, questionNum: 59, topicId: 'stoichiometry',
    text: 'ปฏิกิริยาระหว่าง X และ Y ได้ Z เป็นผลิตภัณฑ์ ดังสมการ 3X + Y → 2Z มีผลได้ร้อยละ 75 ถ้าต้องการเตรียม Z 120 g ต้องใช้ X และ Y อย่างละกี่โมล (มวลโมเลกุล Z = 40)',
    choices: ['X=6, Y=2', 'X=4.5, Y=1.5', 'X=3, Y=1', 'X=1.5, Y=9.5'],
    correctIndex: 0,
    explanation: 'Z ที่ต้องการจริง = 120/40 = 3 mol → Z ทางทฤษฎี = 3/0.75 = 4 mol. X:Z=3:2 → X = 6 mol; Y:Z=1:2 → Y = 2 mol → ข้อ ก'
  },
  {
    id: 'y64-q60', year: 64, questionNum: 60, topicId: 'stoichiometry',
    text: 'ถ้าเตรียมไนโตรเบนซีนดังสมการ C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O มีผลได้ร้อยละ 85 เมื่อใช้เบนซีน (C₆H₆) 52 g จะเกิดไนโตรเบนซีนกี่กรัม (มวลโมเลกุล HNO₃=63, C₆H₆=78, C₆H₅NO₂=123)',
    choices: ['10.5', '12.3', '14.5', '70.0'],
    correctIndex: 3,
    explanation: 'C₆H₆ = 52/78 = 0.667 mol → ไนโตรเบนซีน = 0.667×0.85×123 = 69.7 ≈ 70.0 g → ข้อ ง'
  },
];

module.exports = questions;
if (require.main === module) {
  console.log('Year 64 questions authored:', questions.length);
}
