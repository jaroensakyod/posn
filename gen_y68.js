// Year 68 (2568) POSN Camp 1 Chemistry - additional questions from exam_texts.json.
// Every numeric answer verified by script and reconciled with printed choices.
const questions = [
  {
    id: 'y68-q32', year: 68, questionNum: 32, topicId: 'stoichiometry',
    text: 'อัตราส่วนโดยมวลของธาตุออกซิเจนใน Fe₂O₃ ต่อ Fe₂(SO₄)₃ ที่มีมวลเท่ากัน มีค่าเท่าใด (Fe₂O₃=160, Fe₂(SO₄)₃=400)',
    choices: ['0.25', '0.48', '0.62', '1.6'],
    correctIndex: 2,
    explanation: 'สัดส่วนมวล O: ใน Fe₂O₃ = 48/160 = 0.30 ; ใน Fe₂(SO₄)₃ = 192/400 = 0.48. อัตราส่วน = 0.30/0.48 = 0.62 → ข้อ ค'
  },
  {
    id: 'y68-q33', year: 68, questionNum: 33, topicId: 'stoichiometry',
    text: 'ข้อใดผิด (CH₂Cl₂=85, (NH₄)₃PO₄=149)',
    choices: ['CH₂Cl₂ 1 โมเลกุลมีมวล 1.4×10⁻²² g', 'N₂ มีความหนาแน่น 1.25 g/L ที่ STP', '(NH₄)₃PO₄ 3.0 mol มีแอมโมเนียมไอออน 5.4×10²⁴ ไอออน', 'H₂ 0.20 g มีจำนวน 1.3×10²² โมเลกุล'],
    correctIndex: 3,
    explanation: 'ก) 85/6.02×10²³ = 1.4×10⁻²² ✓; ข) 28/22.4 = 1.25 ✓; ค) 3×3×6.02×10²³ = 5.4×10²⁴ ✓; ง) H₂ 0.20/2 = 0.1 mol = 6.0×10²² ไม่ใช่ 1.3×10²² → ข้อ ง ผิด'
  },
  {
    id: 'y68-q34', year: 68, questionNum: 34, topicId: 'stoichiometry',
    text: 'เปรียบเทียบร้อยละโดยมวลของไนโตรเจนในปุ๋ย: ยูเรีย CO(NH₂)₂(60), NH₄NO₃(80), NaNO₃(85), (NH₄)₂HPO₄(132) ข้อใดถูก',
    choices: ['CO(NH₂)₂ > NH₄NO₃ > (NH₄)₂HPO₄ > NaNO₃', 'NaNO₃ > (NH₄)₂HPO₄ > NH₄NO₃ > CO(NH₂)₂', 'CO(NH₂)₂ > NH₄NO₃ > NaNO₃ > (NH₄)₂HPO₄', 'NH₄NO₃ > CO(NH₂)₂ > (NH₄)₂HPO₄ > NaNO₃'],
    correctIndex: 0,
    explanation: '%N: ยูเรีย 28/60=46.7, NH₄NO₃ 28/80=35, (NH₄)₂HPO₄ 28/132=21.2, NaNO₃ 14/85=16.5. ลำดับ: ยูเรีย > NH₄NO₃ > (NH₄)₂HPO₄ > NaNO₃ → ข้อ ก'
  },
  {
    id: 'y68-q37', year: 68, questionNum: 37, topicId: 'stoichiometry',
    text: 'เผาไหม้สมบูรณ์ของโพรเพน (C₃H₈) 11 g ความบริสุทธิ์ 80% โดยมวล (สิ่งเจือปนไม่ทำปฏิกิริยา): I) ใช้ O₂ 1.2 mol II) เกิดไอน้ำ 14 g III) เกิด CO₂ 13 L ที่ STP ข้อใดถูก',
    choices: ['I และ II', 'II และ III', 'I และ III', 'II เท่านั้น'],
    correctIndex: 1,
    explanation: 'C₃H₈ = 11×0.80/44 = 0.2 mol. C₃H₈+5O₂→3CO₂+4H₂O. I) O₂=1.0 mol (ไม่ใช่ 1.2) ผิด; II) H₂O=0.8 mol=14.4≈14 g ✓; III) CO₂=0.6 mol=13.4≈13 L ✓ → ข้อ ข'
  },
  {
    id: 'y68-q38', year: 68, questionNum: 38, topicId: 'stoichiometry',
    text: 'รถวิ่ง 20 km/น้ำมัน 1 L น้ำมันมีคาร์บอน 75% โดยมวล ความหนาแน่น 0.80 g/mL วิ่ง 8.0 km ปล่อย CO₂ กี่กิโลกรัม (C=12, CO₂=44)',
    choices: ['0.24', '0.88', '1.2', '1.4'],
    correctIndex: 1,
    explanation: 'วิ่ง 8 km ใช้น้ำมัน 0.4 L = 320 g → C = 240 g = 20 mol → CO₂ = 20 mol = 880 g = 0.88 kg → ข้อ ข'
  },
  {
    id: 'y68-q40', year: 68, questionNum: 40, topicId: 'stoichiometry',
    text: 'แก๊สผสม O₃ และ O₂ ปริมาตรรวม 44.8 L ที่ STP เมื่อให้ความร้อนจน O₃ กลายเป็น O₂ ทั้งหมด (2O₃→3O₂) ปริมาตรเพิ่มขึ้น 0.25 เท่า ร้อยละโดยปริมาตรของ O₃ เป็นเท่าใด',
    choices: ['50.0', '40.0', '25.0', '20.0'],
    correctIndex: 0,
    explanation: 'ให้ O₃ = x: 2O₃→3O₂ ทำให้ปริมาตรเพิ่ม 0.5x = 0.25×44.8 → x = 22.4 L → %O₃ = 22.4/44.8 = 50% → ข้อ ก'
  },
  {
    id: 'y68-q41', year: 68, questionNum: 41, topicId: 'stoichiometry',
    text: 'เผาของผสม MgCO₃ และ MgO 504 g ได้ CO₂ 33.6 L ที่ STP (MgCO₃→MgO+CO₂) อัตราส่วนโดยมวลของ MgCO₃ ต่อ MgO ในของผสมเป็นเท่าใด (MgCO₃=84)',
    choices: ['1 : 3', '3 : 1', '1 : 7.4', '7.4 : 1'],
    correctIndex: 0,
    explanation: 'CO₂ = 33.6/22.4 = 1.5 mol → MgCO₃ = 1.5 mol = 126 g. MgO = 504−126 = 378 g. อัตราส่วน 126:378 = 1:3 → ข้อ ก'
  },
  {
    id: 'y68-q42', year: 68, questionNum: 42, topicId: 'stoichiometry',
    text: 'KCN + Na₂S₂O₃ → KSCN + Na₂SO₃ เติม Na₂S₂O₃ 2.37 g ลงในสารละลายที่มี KCN 1.30 g ข้อใดถูก (KCN=65, KSCN=97, Na₂SO₃=126, Na₂S₂O₃=158)',
    choices: ['เกิด KSCN 1.89 g', 'เกิด Na₂SO₃ 1.46 g', 'หลังปฏิกิริยาเหลือสารตั้งต้น 0.98 g', 'เติม Na₂S₂O₃ เพิ่มอีก 0.79 g จึงกำจัด KCN หมด'],
    correctIndex: 3,
    explanation: 'KCN = 0.02 mol, Na₂S₂O₃ = 0.015 mol (เป็นตัวกำหนด). KCN เหลือ = 0.005 mol → ต้องเติม Na₂S₂O₃ อีก 0.005×158 = 0.79 g → ข้อ ง'
  },
  {
    id: 'y68-q43', year: 68, questionNum: 43, topicId: 'stoichiometry',
    text: 'ต้องใช้ออกตะซัลเฟอร์ (S₈) กี่กรัมทำปฏิกิริยากับ P₄ มากเกินพอ ให้เกิด P₄S₁₀ 11.1 g ถ้าผลได้ร้อยละ 50 (4P₄ + 5S₈ → 4P₄S₁₀; S₈=256, P₄S₁₀=444)',
    choices: ['8.00', '10.2', '16.0', '32.0'],
    correctIndex: 2,
    explanation: 'P₄S₁₀ จริง = 11.1/444 = 0.025 mol → ทางทฤษฎี (50%) = 0.05 mol. S₈ = 0.05×5/4 = 0.0625 mol = 0.0625×256 = 16.0 g → ข้อ ค'
  },
]

module.exports = questions
if (require.main === module) {
  console.log('Year 68 questions authored:', questions.length)
}
