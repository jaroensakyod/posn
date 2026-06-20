// Year 61 (2561) POSN Camp 1 Chemistry - multiple choice section
// Hand-solved correctIndex + explanation; all numeric answers verified by script.
const questions = [
  // ===== ATOMIC STRUCTURE / PERIODICITY =====
  {
    id: 'y61-q2', year: 61, questionNum: 2, topicId: 'atomic-structure',
    text: 'อะตอมของธาตุ X มี 14 นิวตรอน และไอออนที่เสถียรของธาตุ X คือ X³⁺ ซึ่งมี 10 อิเล็กตรอน ธาตุ X มีเลขอะตอมและเลขมวลเป็นเท่าใดตามลำดับ',
    choices: ['10 และ 14', '13 และ 14', '13 และ 27', '27 และ 13'],
    correctIndex: 2,
    explanation: 'X³⁺ มี 10 e⁻ → อะตอมกลางมี 13 e⁻ = เลขอะตอม 13 (Al). เลขมวล = โปรตอน+นิวตรอน = 13+14 = 27 → ข้อ ค'
  },
  {
    id: 'y61-q5', year: 61, questionNum: 5, topicId: 'atomic-structure',
    text: 'ข้อใดเป็นการจัดอิเล็กตรอนของธาตุอโลหะที่มีความว่องไวในการเกิดปฏิกิริยามากที่สุด',
    choices: ['1s²2s²2p²', '1s²2s²2p⁵', '1s²2s²2p⁶3s¹', '1s²2s²2p⁶3s²3p⁵'],
    correctIndex: 1,
    explanation: '2p⁵ คือ F (ฟลูออรีน) อโลหะที่ว่องไวที่สุด มี EN และ EA สูงสุด ดึงอิเล็กตรอนได้แรงที่สุด → ข้อ ข (3s¹ เป็นโลหะ Na)'
  },
  {
    id: 'y61-q9', year: 61, questionNum: 9, topicId: 'atomic-structure',
    text: 'ออกไซด์ X ละลายน้ำเปลี่ยนลิตมัสน้ำเงิน→แดง (กรด); ออกไซด์ Y เปลี่ยนแดง→น้ำเงิน (เบส) สูตรในข้อใดสอดคล้อง',
    choices: ['X=BeO, Y=N₂O₅', 'X=SiO₂, Y=CaO', 'X=Cl₂O₇, Y=Al₂O₃', 'X=SO₃, Y=Na₂O'],
    correctIndex: 3,
    explanation: 'X ต้องเป็นออกไซด์กรด (อโลหะ): SO₃→H₂SO₄. Y ต้องเป็นออกไซด์เบส (โลหะหมู่ 1/2): Na₂O→NaOH. ข้อ ง ถูก (Al₂O₃ เป็นแอมโฟเทริก, SiO₂ ไม่ละลายน้ำ)'
  },
  {
    id: 'y61-q14', year: 61, questionNum: 14, topicId: 'chemical-bonding',
    text: 'ข้อใดเป็นสารประกอบเชิงซ้อนที่ธาตุแทรนซิชันมีเลขออกซิเดชันสูงที่สุด',
    choices: ['MnO₂', 'NiSO₄', 'K₄[Fe(CN)₆]', '[Cr(NH₃)₆]Cl₃'],
    correctIndex: 3,
    explanation: 'เลขออกซิเดชัน: MnO₂ Mn=+4 (ไม่ใช่สารเชิงซ้อน), NiSO₄ Ni=+2, K₄[Fe(CN)₆] Fe=+2, [Cr(NH₃)₆]Cl₃ Cr=+3. ในกลุ่มสารเชิงซ้อน Cr=+3 สูงสุด → ข้อ ง'
  },
  {
    id: 'y61-q15', year: 61, questionNum: 15, topicId: 'atomic-structure',
    text: 'การสลายตัวของธาตุกัมมันตรังสีโดยการแผ่รังสีชนิดใดทำให้ธาตุใหม่มีเลขอะตอมเพิ่มขึ้น 1 หน่วย',
    choices: ['แอลฟา', 'บีตา', 'แกมมา', 'โพซิตรอน'],
    correctIndex: 1,
    explanation: 'การสลายบีตา (β⁻): นิวตรอน→โปรตอน+อิเล็กตรอน เลขอะตอมเพิ่ม 1 เลขมวลคงเดิม. แอลฟาลด 2, แกมมาไม่เปลี่ยน, โพซิตรอนลด 1 → ข้อ ข'
  },
  {
    id: 'y61-q17', year: 61, questionNum: 17, topicId: 'atomic-structure',
    text: 'ปฏิกิริยานิวเคลียร์ในข้อใดจัดเป็นปฏิกิริยาฟิวชัน',
    choices: ['⁹⁹Tc → ⁹⁹Ru + β', '¹⁴N + n → ¹⁴C + ¹H', '³He + ²H → ⁴He + ¹H', '²³⁵U + n → ⁹⁰Kr + ¹⁴⁴Ba + 2n'],
    correctIndex: 2,
    explanation: 'ฟิวชัน = นิวเคลียสเบารวมกันเป็นนิวเคลียสที่ใหญ่ขึ้น. ³He + ²H → ⁴He + ¹H เป็นการหลอมรวม → ข้อ ค (ข้อ ง คือฟิชชัน)'
  },

  // ===== STOICHIOMETRY (verified numerics) =====
  {
    id: 'y61-q34', year: 61, questionNum: 34, topicId: 'stoichiometry',
    text: 'เกลือซัลเฟตของโลหะ ASO₄ 3.22 g ทำปฏิกิริยากับ BaCl₂ มากเกินพอ ได้ตะกอน BaSO₄ (มวลสูตร 233) 4.66 g โลหะ A ควรเป็นธาตุใด',
    choices: ['Ti', 'Cu', 'Zn', 'Zr'],
    correctIndex: 2,
    explanation: 'mol BaSO₄ = 4.66/233 = 0.02 → mol ASO₄ = 0.02. มวลสูตร ASO₄ = 3.22/0.02 = 161 → มวลอะตอม A = 161−96 = 65 = Zn → ข้อ ค'
  },
  {
    id: 'y61-q35', year: 61, questionNum: 35, topicId: 'stoichiometry',
    text: 'แก๊สผสม CO₂ CO H₂ CH₄ C₂H₄ Ar ร้อยละ 12, 28, 3, 0.5, 0.5, 56 โดยปริมาตร เผา 200 m³ อย่างสมบูรณ์ต้องใช้อากาศ (O₂ 20%) อย่างน้อยกี่ m³',
    choices: ['36.0', '90.0', '180', '210'],
    correctIndex: 2,
    explanation: 'O₂ ที่ใช้ต่อปริมาตร: CO×0.5 + H₂×0.5 + CH₄×2 + C₂H₄×3 = 0.28(0.5)+0.03(0.5)+0.005(2)+0.005(3) = 0.18. O₂ = 200×0.18 = 36 m³. อากาศ = 36/0.20 = 180 m³ → ข้อ ค'
  },
  {
    id: 'y61-q36', year: 61, questionNum: 36, topicId: 'stoichiometry',
    text: 'เผา Mg ในแก๊ส N₂ ได้ Mg₃N₂ (ผลได้ร้อยละ 40) นำ Mg₃N₂ ละลายน้ำได้ NH₃ ต้องการ NH₃ 4.48 L ที่ STP ต้องเริ่มด้วย Mg น้อยที่สุดกี่กรัม',
    choices: ['12', '18', '36', '72'],
    correctIndex: 1,
    explanation: 'NH₃ = 4.48/22.4 = 0.2 mol. Mg₃N₂+6H₂O→3Mg(OH)₂+2NH₃: Mg₃N₂ = 0.1 mol → Mg ทฤษฎี = 0.3 mol. ผลได้ 40% → Mg จริง = 0.3/0.4 = 0.75 mol = 18 g → ข้อ ข'
  },
  {
    id: 'y61-q37', year: 61, questionNum: 37, topicId: 'stoichiometry',
    text: 'ผสม Na₂CO₃ 0.0800 M 75.0 cm³ กับ AgNO₃ 0.200 M 25.0 cm³ ได้ตะกอน Ag₂CO₃ หลังปฏิกิริยาสมบูรณ์ สารตั้งต้นที่เหลือมีความเข้มข้นเท่าใด (mol/dm³)',
    choices: ['0.0100', '0.0350', '0.0467', '0.0700'],
    correctIndex: 1,
    explanation: 'Na₂CO₃=0.006 mol, AgNO₃=0.005 mol. 2Ag⁺+CO₃²⁻→Ag₂CO₃: Ag⁺ หมด ใช้ CO₃²⁻ 0.0025. CO₃²⁻ เหลือ = 0.006−0.0025 = 0.0035 mol ในปริมาตรรวม 0.1 dm³ = 0.035 M → ข้อ ข'
  },
  {
    id: 'y61-q40', year: 61, questionNum: 40, topicId: 'stoichiometry',
    text: '3NaBH₄ + 4BF₃ → 3NaBF₄ + 2B₂H₆ (ผลได้ร้อยละ 70) ต้องการ B₂H₆ 0.210 mol ต้องใช้ NaBH₄ กี่โมล (BF₃ มากเกินพอ)',
    choices: ['0.200', '0.220', '0.300', '0.450'],
    correctIndex: 3,
    explanation: 'B₂H₆ ทฤษฎี = 0.210/0.70 = 0.300 mol. อัตราส่วน NaBH₄:B₂H₆ = 3:2 → NaBH₄ = 0.300×3/2 = 0.450 mol → ข้อ ง'
  },
  {
    id: 'y61-q43', year: 61, questionNum: 43, topicId: 'stoichiometry',
    text: '4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂ ให้ CO₂ 336 cm³ ทำปฏิกิริยากับ KO₂ 0.710 g ปริมาตรสูงสุดของ O₂ ที่ STP เป็นกี่ cm³',
    choices: ['168', '224', '299', '504'],
    correctIndex: 0,
    explanation: 'CO₂=336/22400=0.015 mol, KO₂=0.710/71=0.010 mol. ต้องการ CO₂=KO₂/2=0.005 (มีพอ) → KO₂ เป็นตัวกำหนด. O₂=0.010×3/4=0.0075 mol=168 cm³ → ข้อ ก'
  },
  {
    id: 'y61-q45', year: 61, questionNum: 45, topicId: 'stoichiometry',
    text: 'ผสม Na₂SO₄ 0.10 M 20 cm³ กับ Na₃PO₄ 0.30 M 50 cm³ ความเข้มข้นของ Na⁺ เป็นเท่าใด (mol/dm³)',
    choices: ['0.017', '0.049', '0.24', '0.70'],
    correctIndex: 3,
    explanation: 'Na⁺ จาก Na₂SO₄ = 2×0.10×0.020 = 0.004 mol; จาก Na₃PO₄ = 3×0.30×0.050 = 0.045 mol. รวม = 0.049 mol ในปริมาตร 0.070 dm³ = 0.70 M → ข้อ ง'
  },
  {
    id: 'y61-q46', year: 61, questionNum: 46, topicId: 'stoichiometry',
    text: 'MnO₂ + 4HCl → Cl₂ + MnCl₂ + 2H₂O ต้องการ Cl₂ 3.55 g เมื่อปฏิกิริยาสมบูรณ์ HCl ทำปฏิกิริยาไปกี่กรัม',
    choices: ['7.30', '10.0', '15.0', '20.0'],
    correctIndex: 0,
    explanation: 'Cl₂ = 3.55/71 = 0.05 mol. อัตราส่วน HCl:Cl₂ = 4:1 → HCl = 0.20 mol = 0.20×36.5 = 7.30 g → ข้อ ก'
  },
  {
    id: 'y61-q47', year: 61, questionNum: 47, topicId: 'stoichiometry',
    text: 'น้ำส้มสายชู CH₃COOH ร้อยละ 5.00 โดยมวล (ρ=1.15 g/cm³) 200 cm³ ทำปฏิกิริยากับ NaHCO₃ 4.200 g สารละลายที่ได้มี CH₃COOH เข้มข้นเท่าใด (mol/dm³, ปริมาตรไม่เปลี่ยน)',
    choices: ['0.583', '0.708', '0.833', '0.958'],
    correctIndex: 1,
    explanation: 'CH₃COOH = 200×1.15×0.05/60 = 0.1917 mol. NaHCO₃ = 4.200/84 = 0.05 mol (1:1). เหลือ = 0.1417 mol ใน 0.2 dm³ = 0.708 M → ข้อ ข'
  },

  // ===== SOLUTIONS / STATES =====
  {
    id: 'y61-q44', year: 61, questionNum: 44, topicId: 'solutions',
    text: 'สารละลายกรด A เข้มข้น 12.0 mol/dm³ มีกรด A ร้อยละ 75.0 โดยมวล ความหนาแน่น 1.57 g/cm³ กรด A ควรเป็นกรดชนิดใด',
    choices: ['HCl', 'HBr', 'CH₃COOH', 'H₃PO₄'],
    correctIndex: 3,
    explanation: 'ใน 1 dm³: มวลสารละลาย = 1570 g, มวลกรด = 1570×0.75 = 1177.5 g. มวลโมเลกุล = 1177.5/12.0 ≈ 98 = H₃PO₄ → ข้อ ง'
  },
  {
    id: 'y61-q49', year: 61, questionNum: 49, topicId: 'solutions',
    text: 'ละลายสาร X 2.80 g ในเบนซีน 32.0 g มีจุดเดือดสูงกว่าเบนซีน 1.40°C มวลโมเลกุลของ X เป็นเท่าใด (Kb=2.53°C/m)',
    choices: ['24.7', '87.5', '158', '221'],
    correctIndex: 2,
    explanation: 'm = ΔTb/Kb = 1.40/2.53 = 0.5534. mol X = 0.5534×0.032 = 0.01771. M = 2.80/0.01771 = 158 → ข้อ ค'
  },
  {
    id: 'y61-q51', year: 61, questionNum: 51, topicId: 'solutions',
    text: 'ต้องเติมสาร X (180 g/mol) กี่กรัมในน้ำ 100 cm³ ที่ 25°C ให้จุดเดือดและจุดเยือกแข็งต่างกัน 109.48°C (Kf=1.86, Kb=0.51, ρ=1.00)',
    choices: ['4.00', '72.0', '126', '720'],
    correctIndex: 1,
    explanation: 'ผลต่าง = (100+0.51m) − (0−1.86m) = 100 + 2.37m = 109.48 → m = 4.0. น้ำ 100 g = 0.1 kg → mol X = 0.4 → มวล = 0.4×180 = 72.0 g → ข้อ ข'
  },
];

module.exports = questions;
if (require.main === module) {
  console.log('Year 61 questions authored:', questions.length);
}
