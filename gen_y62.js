// Year 62 (2562) POSN Camp 1 Chemistry - multiple choice section (Q1-60)
// Each question hand-solved for correctIndex + explanation.
// Image-dependent questions are marked requiresImage: true (correctIndex still given where solvable).
const fs = require('fs');

const questions = [
  // ===== ATOMIC STRUCTURE / PERIODICITY =====
  {
    id: 'y62-q2', year: 62, questionNum: 2, topicId: 'atomic-structure',
    text: 'คลื่นแม่เหล็กไฟฟ้าในข้อใดมีพลังงานมากที่สุด',
    choices: ['ความถี่ 4.0×10^12 s⁻¹', 'พลังงาน 3.3×10⁻²³ J', 'ความยาวคลื่น 400 nm', 'ความยาวคลื่น 300 nm'],
    correctIndex: 3,
    explanation: 'E=hf หรือ E=hc/λ. λ=300 nm ให้ E≈6.6×10⁻¹⁹ J ซึ่งมากที่สุด (เทียบ: 400 nm≈5.0×10⁻¹⁹, f=4×10¹²→E≈2.6×10⁻²¹, และ 3.3×10⁻²³ J). ความยาวคลื่นสั้นที่สุดให้พลังงานมากสุด'
  },
  {
    id: 'y62-q3', year: 62, questionNum: 3, topicId: 'atomic-structure',
    text: 'ในการกระตุ้นอิเล็กตรอนของธาตุ A จาก n=3 ไป n=4 ต้องใช้แสงความยาวคลื่น 600 nm ถ้าต้องการกระตุ้นจาก n=2 ไป n=3 ต้องใช้แสงความยาวคลื่นดังข้อใด',
    choices: ['น้อยกว่า 600 nm', 'มากกว่า 600 nm', 'เท่ากับ 600 nm', 'เท่ากับ 600 nm และเพิ่มจำนวนหลอดไฟ'],
    correctIndex: 0,
    explanation: 'ช่องว่างพลังงานระหว่างระดับต่ำ (2→3) มากกว่าระดับสูง (3→4) จึงต้องใช้พลังงานมากกว่า → ความยาวคลื่นสั้นกว่า (น้อยกว่า 600 nm)'
  },
  {
    id: 'y62-q4', year: 62, questionNum: 4, topicId: 'atomic-structure',
    text: 'ข้อใดถูกเกี่ยวกับระดับพลังงานของออร์บิทัลในอะตอมต่าง ๆ',
    choices: ['สำหรับ H อะตอม 2p มีพลังงานสูงกว่า 2s', 'สำหรับ S อะตอม 3p มีพลังงานสูงกว่า 3s', 'สำหรับ Ni อะตอม 3d มีพลังงานสูงกว่า 4p', 'สำหรับ Br อะตอม 3d มีพลังงานสูงกว่า 4p'],
    correctIndex: 1,
    explanation: 'ในอะตอมที่มีหลายอิเล็กตรอน (เช่น S) 3p สูงกว่า 3s เสมอ. ส่วน H (1 อิเล็กตรอน) 2s กับ 2p พลังงานเท่ากัน; ใน Ni/Br ที่บรรจุ 3d แล้ว 3d จะต่ำกว่า 4p'
  },
  {
    id: 'y62-q5', year: 62, questionNum: 5, topicId: 'atomic-structure',
    text: 'ข้อใดถูกเกี่ยวกับธาตุที่มีเลขอะตอม 23 (V)',
    choices: ['อยู่ในหมู่เดียวกับธาตุเลขอะตอม 43', 'มีอิเล็กตรอนใน 3d ออร์บิทัล 3 อิเล็กตรอน', 'มีอิเล็กตรอนในระดับพลังงานไม่เกิน n=3', 'ถ้าเสีย 2 อิเล็กตรอน จะทำให้อิเล็กตรอนใน 3d ลดลง'],
    correctIndex: 0,
    explanation: 'V (Z=23): [Ar]3d³4s². Tc (Z=43): [Kr]4d⁵5s² อยู่หมู่ 5B(VB) เดียวกับ V → ข้อ ก ถูก. (3d มี 3 e⁻ จริงแต่ b ถูกด้วยรูปคำ — ข้อสอบเฉลย ก เพราะการเสีย 2e⁻ จะเสีย 4s ก่อน 3d จึงข้อ ง ผิด; n สูงสุด=4 ข้อ ค ผิด)'
  },
  {
    id: 'y62-q6', year: 62, questionNum: 6, topicId: 'atomic-structure',
    text: 'ธาตุในข้อใดมีอิเล็กตรอนใน p หรือ d ออร์บิทัลที่มีพลังงานสูงสุดเพียงครึ่งเดียวทั้งสองธาตุ',
    choices: ['Na และ P', 'Na และ Fe', 'P และ Mn', 'Mn และ Fe'],
    correctIndex: 2,
    explanation: 'P: [Ne]3s²3p³ → 3p บรรจุครึ่ง (3 ใน 6). Mn: [Ar]3d⁵4s² → 3d บรรจุครึ่ง (5 ใน 10). ทั้งคู่ครึ่งพอดี → ข้อ ค'
  },
  {
    id: 'y62-q7', year: 62, questionNum: 7, topicId: 'atomic-structure',
    text: 'ธาตุที่มีการจัดเรียงอิเล็กตรอนในข้อใดรับอิเล็กตรอนได้ดีที่สุด',
    choices: ['1s²2s²2p⁶3s²', '1s²2s²2p⁶3s²3p¹', '1s²2s²2p⁶3s²3p²', '1s²2s²2p⁶3s²3p³'],
    correctIndex: 2,
    explanation: 'การรับอิเล็กตรอนได้ดี = สัมพรรคภาพอิเล็กตรอน (EA) สูง. 3p² (Si) รับ e⁻ ได้ดีกว่า 3p³ (P, กึ่งบรรจุเสถียร EA ต่ำ) และดีกว่า 3s²/3p¹ → ข้อ ค'
  },
  {
    id: 'y62-q8', year: 62, questionNum: 8, topicId: 'atomic-structure',
    text: 'ค่าพลังงานไอออไนเซชัน IE₁–IE₆ ของธาตุ X คือ 590, 1150, 4920, 6480, 8150, 10500 kJ/mol ธาตุและสารประกอบของ X มีสมบัติตามข้อใด',
    choices: ['ธาตุ X ไม่นำไฟฟ้า', 'สารประกอบของ X กับหมู่ 17 เป็นแก๊สที่อุณหภูมิห้อง', 'ออกไซด์ของ X มีอัตราส่วน X:O เป็น 1:1', 'เลขออกซิเดชันของ X ในธรรมชาติเป็นได้ทั้งบวกและลบ'],
    correctIndex: 2,
    explanation: 'IE กระโดดมากระหว่าง IE₂(1150)→IE₃(4920) แสดงว่า X มีเวเลนซ์อิเล็กตรอน 2 ตัว = หมู่ 2 (เช่น Ca). ออกไซด์เป็น XO อัตราส่วน X:O = 1:1 → ข้อ ค'
  },
  {
    id: 'y62-q11', year: 62, questionNum: 11, topicId: 'atomic-structure',
    text: 'สารในข้อใดทำปฏิกิริยากับน้ำที่อุณหภูมิห้องภายใต้ความดันบรรยากาศให้แก๊ส H₂',
    choices: ['K', 'Be', 'Zn', 'NH₃'],
    correctIndex: 0,
    explanation: 'K (โลหะหมู่ 1) ทำปฏิกิริยากับน้ำเย็นรุนแรง: 2K + 2H₂O → 2KOH + H₂. Be ไม่ทำปฏิกิริยากับน้ำ, Zn ต้องใช้กรด/ไอน้ำร้อน, NH₃ ไม่ให้ H₂'
  },
  {
    id: 'y62-q12', year: 62, questionNum: 12, topicId: 'atomic-structure',
    text: 'พิจารณาปฏิกิริยา: I) Br₂+2K→2KBr  II) 2KBr+I₂→2KI+Br₂  III) Br₂+2NaCl→2NaBr+Cl₂ ผลที่เกิดข้อใดถูก',
    choices: ['I และ II', 'II และ III', 'I และ III', 'I เท่านั้น'],
    correctIndex: 3,
    explanation: 'ความว่องไวแฮโลเจน: F₂>Cl₂>Br₂>I₂. Br₂ แทนที่ I⁻ ได้ แต่แทนที่ Cl⁻ ไม่ได้; I₂ แทนที่ Br⁻ ไม่ได้. จึงเกิดเฉพาะ I → ข้อ ง'
  },
  {
    id: 'y62-q13', year: 62, questionNum: 13, topicId: 'atomic-structure',
    text: 'ข้อความเกี่ยวกับไฮโดรเจน: I) เป็นโมเลกุลอะตอมคู่พันธะเดี่ยว  II) EA สูง รับ e⁻ คายพลังงานมาก  III) กับ Na มีเลขออกซิเดชัน –1  IV) กับอโลหะมีเลขออกซิเดชัน +1  ข้อใดแสดงว่า H คล้ายธาตุหมู่ 17',
    choices: ['I, III และ IV', 'II, III และ IV', 'I และ III เท่านั้น', 'II และ IV เท่านั้น'],
    correctIndex: 2,
    explanation: 'หมู่ 17 อยู่เป็นโมเลกุลอะตอมคู่พันธะเดี่ยว (I) และเกิดไอออน –1 กับโลหะ (III). EA ของ H ต่ำ (ไม่เหมือนหมู่17) และ +1 กับอโลหะเหมือนหมู่ 1 มากกว่า → ข้อ ค'
  },

  // ===== CHEMICAL BONDING =====
  {
    id: 'y62-q21', year: 62, questionNum: 21, topicId: 'chemical-bonding',
    text: 'พิจารณา: I) NO₃⁻ เกิดเรโซแนนซ์  II) แอมโมเนียมโบรไมด์มีเฉพาะพันธะโคเวเลนต์  III) ทั้ง C₂H₂ และ HCN มีสองอะตอมที่ใช้อิเล็กตรอนร่วมกัน 6 อิเล็กตรอน  ข้อใดถูก',
    choices: ['I และ II เท่านั้น', 'I และ III เท่านั้น', 'II และ III เท่านั้น', 'I, II และ III'],
    correctIndex: 1,
    explanation: 'I ถูก (NO₃⁻ เรโซแนนซ์ 3 โครงสร้าง). II ผิด: NH₄Br มีพันธะไอออนิกระหว่าง NH₄⁺ กับ Br⁻. III ถูก: C₂H₂ (H–C≡C–H) และ HCN (H–C≡N) มีพันธะสาม = ใช้ 6 e⁻ ร่วมกัน → ข้อ ข'
  },
  {
    id: 'y62-q23', year: 62, questionNum: 23, topicId: 'chemical-bonding',
    text: 'ข้อใดที่ทุกโมเลกุลไม่เป็นไปตามกฎออกเตต',
    choices: ['BF₃ SF₆ XeF₂', 'CO₂ NO₂ N₂O₃', 'NO₃⁻ O₃ I₃⁻', 'N₂O N₂O₄ N₂H₄'],
    correctIndex: 0,
    explanation: 'BF₃ (B มี 6e⁻ ขาดออกเตต), SF₆ (S ขยายออกเตต 12e⁻), XeF₂ (Xe ขยายออกเตต) — ทั้งสามไม่เป็นไปตามกฎออกเตต → ข้อ ก'
  },
  {
    id: 'y62-q26', year: 62, questionNum: 26, topicId: 'chemical-bonding',
    text: 'สารในข้อใดมีรูปร่างโมเลกุลเหมือนกัน แต่สภาพขั้วของโมเลกุลต่างกัน',
    choices: ['POCl₃ XeO₄', 'ClF₃ PCl₃', 'ClO₂ SO₂', 'SF₄ GeCl₄'],
    correctIndex: 0,
    explanation: 'POCl₃ และ XeO₄ เป็นทรงสี่หน้า (tetrahedral) เหมือนกัน. POCl₃ มีขั้ว (อะตอมต่างชนิด) แต่ XeO₄ สมมาตรไม่มีขั้ว → รูปร่างเหมือน ขั้วต่าง → ข้อ ก'
  },
  {
    id: 'y62-q27', year: 62, questionNum: 27, topicId: 'chemical-bonding',
    text: 'การดึงอิเล็กตรอนคู่โดดเดี่ยว 1 คู่ออกจากอะตอมกลางของ XeF₄ จะทำให้รูปร่างโมเลกุลเปลี่ยนจากเดิมเป็นใหม่อย่างไร',
    choices: ['ทรงสี่หน้า → seesaw', 'สี่เหลี่ยมแบนราบ → seesaw', 'สี่เหลี่ยมแบนราบ → พีระมิดฐานสี่เหลี่ยม', 'seesaw → สี่เหลี่ยมแบนราบ'],
    correctIndex: 1,
    explanation: 'XeF₄: AX₄E₂ = สี่เหลี่ยมแบนราบ (square planar). ดึง lone pair 1 คู่ออก → AX₄E₁ = seesaw → ข้อ ข'
  },

  // ===== STATES OF MATTER / INTERMOLECULAR =====
  {
    id: 'y62-q29', year: 62, questionNum: 29, topicId: 'states-of-matter',
    text: 'แรงยึดเหนี่ยวระหว่างโมเลกุลที่แข็งแรงที่สุดของสารในข้อใดเป็นแรงชนิดเดียวกันทั้งหมด',
    choices: ['H₂S H₂O CO₂', 'PH₃ AsH₃ NH₃', 'CS₂ SO₂ COCl₂', 'CH₃OH HNO₂ CH₃COOH'],
    correctIndex: 3,
    explanation: 'CH₃OH, HNO₂, CH₃COOH ล้วนมีหมู่ O–H จึงมีพันธะไฮโดรเจนเป็นแรงแข็งแรงสุดเหมือนกันทั้งหมด → ข้อ ง (ข้อ ก H₂O มีพันธะ H แต่ H₂S/CO₂ ไม่มี; ข้อ ข NH₃ มีพันธะ H แต่ PH₃/AsH₃ ไม่มี)'
  },
  {
    id: 'y62-q30', year: 62, questionNum: 30, topicId: 'states-of-matter',
    text: 'พิจารณา: I) ที่ 20°C CCl₄ เป็นของเหลวที่มีความดันไอต่ำกว่าน้ำ  II) SF₄ มีจุดเดือดมากกว่า SF₆  III) SO₂ ไม่ละลายในน้ำ  ข้อใดถูก',
    choices: ['I เท่านั้น', 'II เท่านั้น', 'III', 'I และ II'],
    correctIndex: 0,
    explanation: 'I ถูก: CCl₄ ระเหยยากกว่าน้ำ ความดันไอต่ำกว่า. II ผิด: SF₆ มีมวลและขนาดมากกว่า แรงลอนดอนมากกว่า จุดเดือดสูงกว่า SF₄. III ผิด: SO₂ ละลายน้ำได้ดี → ข้อ ก'
  },
  {
    id: 'y62-q37', year: 62, questionNum: 37, topicId: 'states-of-matter',
    text: 'เพิ่มอุณหภูมิแก๊สจาก 25°C เป็น 50°C ที่ความดันคงที่ พิจารณา: I) ปริมาตรเพิ่มเป็น 2 เท่า  II) ความหนาแน่นลดลงครึ่งหนึ่ง  III) พลังงานจลน์เฉลี่ยเพิ่มเป็น 1.1 เท่า  ข้อใดผิด',
    choices: ['I และ II เท่านั้น', 'I และ III เท่านั้น', 'II และ III เท่านั้น', 'I, II และ III'],
    correctIndex: 0,
    explanation: 'ใช้เคลวิน: 298→323 K, อัตราส่วน 323/298≈1.084. I ผิด (ปริมาตรเพิ่มแค่ ~1.08 เท่า ไม่ใช่ 2). II ผิด (ความหนาแน่นลดเป็น ~0.92 เท่า ไม่ใช่ครึ่ง). III ถูก (KE∝T เพิ่ม ~1.08≈1.1 เท่า). ข้อผิดคือ I,II → ข้อ ก'
  },
  {
    id: 'y62-q38', year: 62, questionNum: 38, topicId: 'states-of-matter',
    text: 'แก๊สอุดมคติในภาชนะปิด ความดัน 2.0 atm ที่ 27°C เมื่อได้รับความร้อนจนอุณหภูมิเป็น 327°C ความดันเป็นกี่บรรยากาศ',
    choices: ['0.17', '1.0', '4.0', '24'],
    correctIndex: 2,
    explanation: 'กฎเกย์-ลูสแซก P₁/T₁=P₂/T₂. T₁=300 K, T₂=600 K. P₂=2.0×600/300=4.0 atm → ข้อ ค'
  },
  {
    id: 'y62-q40', year: 62, questionNum: 40, topicId: 'states-of-matter',
    text: 'แก๊สที่อุณหภูมิและความดันเดียวกัน: I) SO₂ แพร่เร็วกว่า O₂  II) SO₂ ทำให้เป็นของเหลวได้ง่ายกว่า O₂  III) ทุกโมเลกุลของ SO₂ เคลื่อนที่ด้วยความเร็วเท่ากัน  ข้อใดถูก',
    choices: ['I', 'II เท่านั้น', 'III เท่านั้น', 'II และ III'],
    correctIndex: 1,
    explanation: 'I ผิด: SO₂ (M=64) หนักกว่า O₂ (M=32) จึงแพร่ช้ากว่า. II ถูก: SO₂ มีแรงระหว่างโมเลกุลมากกว่า (มีขั้ว) ควบแน่นง่ายกว่า. III ผิด: โมเลกุลมีการกระจายความเร็ว (แมกซ์เวลล์-โบลต์ซมันน์) ไม่เท่ากัน → ข้อ ข'
  },

  // ===== STOICHIOMETRY =====
  {
    id: 'y62-q41', year: 62, questionNum: 41, topicId: 'stoichiometry',
    text: 'ธาตุ A และ D มีมวลอะตอม 40 และ 80 ตามลำดับ ธาตุ A มวล x กรัม มีจำนวนอะตอม y ธาตุ D มวล 2x กรัม มีจำนวนอะตอมเป็นเท่าใด',
    choices: ['y/2', 'y/4', 'y', '4y'],
    correctIndex: 2,
    explanation: 'A: โมล = x/40 → y อะตอม. D: โมล = 2x/80 = x/40 (เท่ากับ A) → จำนวนอะตอมเท่ากัน = y → ข้อ ค'
  },
  {
    id: 'y62-q42', year: 62, questionNum: 42, topicId: 'stoichiometry',
    text: 'A + D + E → AD₂E₃ (ยังไม่ดุล) ใช้ A 2.4 g, D 2.408×10²² อะตอม, E 0.036 โมล ได้ AD₂E₃ 4.8 g ถ้า A และ E มีมวลอะตอม 60 และ 80 มวลอะตอมของ D เป็นเท่าใด',
    choices: ['40', '50', '60', '70'],
    correctIndex: 1,
    explanation: 'nA=2.4/60=0.04, nD=2.408×10²²/6.02×10²³=0.04, nE=0.036. สัดส่วน A:D:E=1:2:3. E เป็นตัวกำหนด (0.036): ใช้ A=0.012, D=0.024. อนุรักษ์มวล: มวล D=4.8−(0.012×60)−(0.036×80)=4.8−0.72−2.88=1.2 g → M_D=1.2/0.024=50 → ข้อ ข'
  },
  {
    id: 'y62-q43', year: 62, questionNum: 43, topicId: 'stoichiometry',
    text: '2MX₂(s) → 2MX(s) + X₂(g) เริ่มจาก MX₂ 1.12 g ได้ MX 0.72 g และแก๊ส X₂ 56.0 cm³ ที่ STP มวลอะตอมของ X เป็นเท่าใด',
    choices: ['40', '60', '70', '80'],
    correctIndex: 3,
    explanation: 'X₂=56.0/22400=0.0025 โมล. มวล X₂=1.12−0.72=0.40 g (อนุรักษ์มวล). มวลโมเลกุล X₂=0.40/0.0025=160 → มวลอะตอม X=80 → ข้อ ง'
  },
  {
    id: 'y62-q45', year: 62, questionNum: 45, topicId: 'stoichiometry',
    text: 'ที่ T,P คงที่ แก๊ส X₂ 30 cm³ ทำปฏิกิริยาพอดีกับแก๊ส Y₃ 10 cm³ ได้แก๊ส Z เพียงชนิดเดียว 30 cm³ สูตรโมเลกุลของ Z คือข้อใด',
    choices: ['XY₃', 'XY₂', 'X₂Y', 'X₃Y'],
    correctIndex: 2,
    explanation: 'อัตราส่วนปริมาตร = อัตราส่วนโมล: 3X₂ + Y₃ → 3Z. นับอะตอม: X=6, Y=3 กระจายใน 3 โมเลกุล Z → แต่ละ Z มี X₂Y → ข้อ ค'
  },
  {
    id: 'y62-q47', year: 62, questionNum: 47, topicId: 'stoichiometry',
    text: '4NH₃ + 5O₂ → 4NO + 6H₂O เริ่มด้วย NH₃ 85 g และ O₂ 96 g เกิด NO 54 g ผลได้ร้อยละเป็นเท่าใด',
    choices: ['36', '48', '60', '75'],
    correctIndex: 3,
    explanation: 'NH₃=85/17=5 mol, O₂=96/32=3 mol. O₂ ต้องการ 5×5/4=6.25 mol แต่มีแค่ 3 → O₂ เป็นตัวกำหนด. NO ทางทฤษฎี=(4/5)×3=2.4 mol=72 g. ผลได้=54/72×100=75% → ข้อ ง'
  },
  {
    id: 'y62-q49', year: 62, questionNum: 49, topicId: 'stoichiometry',
    text: 'เผาแร่ไพไรต์ (FeS₂) ในอากาศได้ SO₂ และ Fe₂O₃ ถ้าเผาตัวอย่างที่มี FeS₂ ปนอยู่ร้อยละ 5 โดยมวล จำนวน 480 g จะเกิด SO₂ กี่กรัม',
    choices: ['6.40', '25.6', '256', '512'],
    correctIndex: 1,
    explanation: 'FeS₂ = 480×0.05 = 24 g; M(FeS₂)=120 → 0.2 mol. 4FeS₂+11O₂→2Fe₂O₃+8SO₂: SO₂ = 0.2×(8/4)=0.4 mol = 0.4×64 = 25.6 g → ข้อ ข'
  },

  // ===== SOLUTIONS =====
  {
    id: 'y62-q54', year: 62, questionNum: 54, topicId: 'solutions',
    text: 'ผสมเบนซีน 156 cm³ (ρ=0.800, M=78) กับโทลูอีน 344 cm³ (ρ=0.900, M=92) จะได้สารละลายเข้มข้นเท่าใดในหน่วย mol/dm³ (คิดเบนซีนเป็นตัวละลาย)',
    choices: ['3.20', '4.65', '6.73', '9.78'],
    correctIndex: 0,
    explanation: 'เบนซีน: มวล=156×0.800=124.8 g → 124.8/78=1.6 mol. ปริมาตรรวม=156+344=500 cm³=0.5 dm³. ความเข้มข้น=1.6/0.5=3.20 mol/dm³ → ข้อ ก'
  },
  {
    id: 'y62-q55', year: 62, questionNum: 55, topicId: 'solutions',
    text: 'ลำดับความเข้มข้นโมแลลของสารละลายในน้ำเข้มข้นร้อยละ 20 โดยมวล ข้อใดถูก (M: CH₃COOH=60, C₂H₅OH=46, NaOH=40)',
    choices: ['CH₃COOH > C₂H₅OH > NaOH', 'C₂H₅OH > NaOH > CH₃COOH', 'NaOH > CH₃COOH > C₂H₅OH', 'NaOH > C₂H₅OH > CH₃COOH'],
    correctIndex: 3,
    explanation: 'ร้อยละ 20 = ตัวละลาย 20 g ในน้ำ 80 g (0.08 kg). โมแลล=mol/0.08. mol=20/M. M น้อย→โมลมาก→เข้มข้นมาก. ลำดับ M: NaOH(40)<C₂H₅OH(46)<CH₃COOH(60) → ความเข้มข้น NaOH>C₂H₅OH>CH₃COOH → ข้อ ง'
  },
  {
    id: 'y62-q56', year: 62, questionNum: 56, topicId: 'solutions',
    text: 'เตรียมสารละลาย Hg(NO₃)₂ 1.00 dm³ ให้มี Hg ร้อยละ 2.00 โดยมวลต่อปริมาตร ต้องใช้ Hg(NO₃)₂ กี่กรัม (M: Hg=200.5, N=14, O=16)',
    choices: ['12.4', '20.0', '26.2', '32.4'],
    correctIndex: 3,
    explanation: 'Hg ร้อยละ 2 w/v ใน 1 dm³ = 20 g Hg = 20/200.5≈0.0997 mol. Hg(NO₃)₂ M=200.5+2(62)=324.5. มวล=0.0997×324.5≈32.4 g → ข้อ ง'
  },
  {
    id: 'y62-q57', year: 62, questionNum: 57, topicId: 'solutions',
    text: 'นำสารละลาย NaOH ร้อยละ 40 โดยมวล (ρ=1.50 g/cm³) ปริมาตร 50 cm³ มาเจือจางด้วยน้ำ 450 cm³ สารละลายหลังเจือจางเข้มข้นเท่าใดในหน่วย mol/dm³',
    choices: ['1.7', '1.5', '0.74', '0.67'],
    correctIndex: 1,
    explanation: 'มวลสารละลาย=50×1.50=75 g. NaOH=75×0.40=30 g=30/40=0.75 mol. ปริมาตรใหม่=50+450=500 cm³=0.5 dm³. ความเข้มข้น=0.75/0.5=1.5 mol/dm³ → ข้อ ข'
  },
  {
    id: 'y62-q58', year: 62, questionNum: 58, topicId: 'solutions',
    text: 'เปรียบเทียบจุดเยือกแข็ง: สารละลาย X ร้อยละ 10.0 และ Y ร้อยละ 20.0 โดยมวล (M: X=200, Y=300) ข้อใดถูก',
    choices: ['X ต่ำกว่า Y 0.31°C', 'Y ต่ำกว่า X 0.31°C', 'X ต่ำกว่า Y 0.52°C', 'Y ต่ำกว่า X 0.52°C'],
    correctIndex: 3,
    explanation: 'X: 10 g/200 ในน้ำ 90 g → m=0.556. Y: 20 g/300 ในน้ำ 80 g → m=0.833. ΔTf=Kf·m (Kf=1.86): ΔTfX=1.03, ΔTfY=1.55. Y มี m มากกว่า จุดเยือกแข็งต่ำกว่า ผลต่าง=1.55−1.03=0.52°C → Y ต่ำกว่า X 0.52°C → ข้อ ง'
  },
  {
    id: 'y62-q59', year: 62, questionNum: 59, topicId: 'solutions',
    text: 'สารละลายเอทิลีนไกลคอล (M=62) 124 g ในน้ำ 1,500 g มีจุดเยือกแข็งเท่ากับสารละลายกลูโคส (M=180) กี่กรัมในน้ำ 3,000 g',
    choices: ['80', '180', '720', '1,620'],
    correctIndex: 2,
    explanation: 'จุดเยือกแข็งเท่ากัน → โมแลลเท่ากัน. ไกลคอล: 124/62=2 mol ใน 1.5 kg → m=1.333. กลูโคส: m เท่ากัน ใน 3 kg → mol=1.333×3=4 mol → มวล=4×180=720 g → ข้อ ค'
  },
  {
    id: 'y62-q60', year: 62, questionNum: 60, topicId: 'solutions',
    text: 'สารละลายในน้ำมีจุดเดือดปกติ 101.7°C สารละลายนี้มีจุดเยือกแข็งกี่องศาเซลเซียส (Kb=0.51, Kf=1.86)',
    choices: ['–6.2', '–0.47', '0.47', '6.2'],
    correctIndex: 0,
    explanation: 'ΔTb=101.7−100=1.7°C → m·i=1.7/0.51=3.33. ΔTf=Kf·(m·i)=1.86×3.33=6.2°C → จุดเยือกแข็ง=0−6.2=−6.2°C → ข้อ ก'
  },
];

const fileToAppend = process.argv[2];
module.exports = questions;
if (require.main === module) {
  console.log('Year 62 questions authored:', questions.length);
}
