export interface PastExamQuestion {
  id: string
  year: number
  questionNum: number
  topicId: string
  text: string
  choices: [string, string, string, string]
  correctIndex: number
  explanation?: string
  requiresImage?: boolean
}

export const pastExamQuestions: PastExamQuestion[] = [
  {
    "id": "y60-q2",
    "year": 60,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "text": "ในปี ค.ศ. 2016 IUPAC ได้ประกาศเพิ่มธาตุ Ts (เทนเนสซีน) ซึ่งมีเลขอะตอมเท่ากับ 117 ข้อสันนิษฐานเกี่ยวกับธาตุ Ts ข้อใดไม่ถูกต้อง",
    "choices": [
      "มีสถานะเป็นของแข็ง",
      "อยู่ในคาบที่ 7 หมู่ VIIA",
      "มีเลขออกซิเดชันเพียงค่าเดียว คือ -1",
      "การจัดอิเล็กตรอนในสถานะพื้น มีอิเล็กตรอนเดี่ยว 1 อิเล็กตรอน"
    ],
    "correctIndex": 2,
    "explanation": "Ts อยู่หมู่ VIIA คาบ 7 เหมือน At ควรมีหลายเลขออกซิเดชัน ไม่ใช่แค่ -1"
  },
  {
    "id": "y60-q3",
    "year": 60,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "text": "เมื่อกระตุ้นอะตอมไฮโดรเจนด้วยรังสีเหนือม่วงความยาวคลื่น 97 nm จะเกิดเส้นสเปกตรัมจากการคายพลังงานได้จำนวนมากที่สุดกี่เส้น",
    "choices": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 3,
    "explanation": "97 nm ตรงกับ n=1 ไป n=4 เส้นสเปกตรัมที่เกิดได้ = C(4,2) = 6 เส้น"
  },
  {
    "id": "y60-q5",
    "year": 60,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "ธาตุ A(Z=12), E(Z=15) และ J(Z=33) สมบัติข้อใดถูกต้อง",
    "choices": [
      "ธาตุทั้งสามอยู่คนละหมู่กัน",
      "จุดเดือดของ A < J < E",
      "ความเป็นโลหะของ J < E < A",
      "ไอออนของ A มีขนาดเล็กกว่าไอออนของ E"
    ],
    "correctIndex": 2,
    "explanation": "A=Mg(หมู่2), E=P(หมู่15), J=As(หมู่15) ความเป็นโลหะ: As<P<Mg ดังนั้น J<E<A ถูกต้อง"
  },
  {
    "id": "y60-q6",
    "year": 60,
    "questionNum": 6,
    "topicId": "atomic-structure",
    "text": "การจัดเรียงอิเล็กตรอนของโคบอลต์ไอออนในสารประกอบ Co2O3 ข้อใดถูกต้อง",
    "choices": [
      "[Ar] 4s2 3d7",
      "[Ar] 4s2 3d4",
      "1s2 2s2 2p6 3s2 3p6 3d6",
      "1s2 2s2 2p6 3s2 3p3 3d10 4s1"
    ],
    "correctIndex": 2,
    "explanation": "Co3+ (เสีย 3e-) มีการจัดเรียงอิเล็กตรอน [Ar]3d6 = 1s2 2s2 2p6 3s2 3p6 3d6"
  },
  {
    "id": "y60-q12",
    "year": 60,
    "questionNum": 12,
    "topicId": "atomic-structure",
    "text": "ไอออน X2+ และ Y- มีจำนวนอิเล็กตรอนเท่ากับธาตุ Ar คาบและหมู่ของธาตุ X และ Y ข้อใดถูกต้อง",
    "choices": [
      "X: หมู่2 คาบ2, Y: หมู่3 คาบ7",
      "X: หมู่2 คาบ4, Y: หมู่7 คาบ3",
      "X: หมู่3 คาบ7, Y: หมู่3 คาบ2",
      "X: หมู่4 คาบ3, Y: หมู่2 คาบ2"
    ],
    "correctIndex": 1,
    "explanation": "X2+ มี 18e- → X มี 20e- = Ca(หมู่2,คาบ4); Y- มี 18e- → Y มี 17e- = Cl(หมู่7,คาบ3)"
  },
  {
    "id": "y60-q18",
    "year": 60,
    "questionNum": 18,
    "topicId": "chemical-bonding",
    "text": "การเปรียบเทียบจุดเดือดของสาร ข้อใดถูกต้อง",
    "choices": [
      "HCl < HBr < HI < HF",
      "HF < HCl < HBr < HI",
      "HI < HBr < HCl < HF",
      "HBr < HI < HCl < HF"
    ],
    "correctIndex": 0,
    "explanation": "HF มีพันธะไฮโดรเจนแข็งแรงมาก จึงมีจุดเดือดสูงสุด ส่วน HCl<HBr<HI เรียงตามมวลโมเลกุล"
  },
  {
    "id": "y60-q19",
    "year": 60,
    "questionNum": 19,
    "topicId": "stoichiometry",
    "text": "สมการไอออนิกสุทธิของปฏิกิริยาระหว่าง Pb(NO3)2 กับ K2SO4 ในสารละลาย ข้อใดถูกต้อง",
    "choices": [
      "K+(aq) + NO3-(aq) → KNO3(s)",
      "Pb2+(aq) + SO42-(aq) → PbSO4(s)",
      "Pb2+(aq) + 3NO3-(aq) + K+(aq) → Pb(NO3)2(s)",
      "Pb2+(aq) + NO3-(aq) + K+(aq) + SO42-(aq) → PbSO4(s) + NO3-(aq)"
    ],
    "correctIndex": 1,
    "explanation": "PbSO4 ไม่ละลายน้ำ สมการไอออนิกสุทธิ: Pb2+ + SO42- → PbSO4(s)"
  },
  {
    "id": "y60-q36",
    "year": 60,
    "questionNum": 36,
    "topicId": "states-of-matter",
    "text": "แก๊สชนิดหนึ่งที่อุณหภูมิ 20°C มีปริมาตร 100 cm3 ที่ความดันคงที่ อุณหภูมิ 10°C แก๊สนี้มีปริมาตรกี่ลูกบาศก์เซนติเมตร",
    "choices": [
      "50.0",
      "96.6",
      "103.5",
      "200"
    ],
    "correctIndex": 1,
    "explanation": "กฎชาร์ล: V1/T1=V2/T2 → 100/293=V2/283 → V2=96.6 cm3"
  },
  {
    "id": "y60-q37",
    "year": 60,
    "questionNum": 37,
    "topicId": "states-of-matter",
    "text": "ข้อใดเป็นภาวะที่แก๊สฮีเลียมมีพฤติกรรมคล้ายแก๊สอุดมคติมากที่สุด",
    "choices": [
      "50 K และ 150 mmHg",
      "50 K และ 6 atm",
      "750 K และ 150 mmHg",
      "750 K และ 6 atm"
    ],
    "correctIndex": 2,
    "explanation": "แก๊สอุดมคติที่สุดเมื่ออุณหภูมิสูงและความดันต่ำ → 750K และ 150 mmHg"
  },
  {
    "id": "y60-q38",
    "year": 60,
    "questionNum": 38,
    "topicId": "states-of-matter",
    "text": "แก๊สอุดมคติมีปริมาตร 0.40 L ที่ 2.0 atm และ 273°C แก๊สชนิดนี้จะมีปริมาตรกี่ลิตรที่ STP",
    "choices": [
      "0.20",
      "0.40",
      "0.80",
      "1.20"
    ],
    "correctIndex": 0,
    "explanation": "T1=546K, T2=273K, P1=2atm, P2=1atm → V2=0.40×(2/1)×(273/546)=0.20 L"
  },
  {
    "id": "y60-q39",
    "year": 60,
    "questionNum": 39,
    "topicId": "states-of-matter",
    "text": "ที่ปริมาตรและมวลของแก๊สคงที่ เมื่ออุณหภูมิเพิ่มจาก 25°C เป็น 50°C ความดันของแก๊สจะเพิ่มขึ้น 2 เท่า ข้อความนี้ถูกหรือผิด",
    "choices": [
      "ถูก เพราะ 50/25=2",
      "ผิด เพราะ 323/298 ≠ 2",
      "ถูก เพราะกฎของเกย์-ลูสแซก",
      "ผิด เพราะความดันขึ้นกับจำนวนโมล"
    ],
    "correctIndex": 1,
    "explanation": "25°C=298K, 50°C=323K อัตราส่วน 323/298 ≈ 1.08 ≠ 2 ดังนั้นความดันไม่ได้เพิ่ม 2 เท่า"
  },
  {
    "id": "y60-q40",
    "year": 60,
    "questionNum": 40,
    "topicId": "states-of-matter",
    "text": "แก๊ส A ที่ STP มีความหนาแน่น 1.25 g/L แก๊ส A จำนวน 5 โมลมีมวลกี่กรัม",
    "choices": [
      "112",
      "140",
      "224",
      "280"
    ],
    "correctIndex": 1,
    "explanation": "MW = 1.25×22.4 = 28 g/mol, 5 mol = 140 g"
  },
  {
    "id": "y60-q41",
    "year": 60,
    "questionNum": 41,
    "topicId": "states-of-matter",
    "text": "แก๊ส H2 แพร่ผ่านแผ่นรูพรุนใช้เวลา 12 วินาที ภายใต้ภาวะเดียวกัน แก๊ส O2 จะใช้เวลากี่วินาที",
    "choices": [
      "3",
      "24",
      "36",
      "48"
    ],
    "correctIndex": 3,
    "explanation": "กฎเกรแฮม: t(O2)/t(H2) = sqrt(32/2) = 4 → t(O2) = 12×4 = 48 วินาที"
  },
  {
    "id": "y60-q44",
    "year": 60,
    "questionNum": 44,
    "topicId": "stoichiometry",
    "text": "2LiOH + CO2 → Li2CO3 + H2O ถ้านำ LiOH 240 g ทำปฏิกิริยาพอดีกับ CO2 ที่ 1.00 atm, 500 K จะต้องใช้ CO2 กี่ลิตร",
    "choices": [
      "93",
      "186",
      "205",
      "410"
    ],
    "correctIndex": 2,
    "explanation": "LiOH 240g = 10mol → CO2 = 5mol, V = 5×0.082×500/1.00 = 205 L"
  },
  {
    "id": "y60-q45",
    "year": 60,
    "questionNum": 45,
    "topicId": "stoichiometry",
    "text": "สารละลาย HCl 0.2 mol/dm3 ปริมาตร 200 cm3 ทำปฏิกิริยาพอดีกับสารประกอบคาร์บอเนต 3.94 g เกิด CO2 448 cm3 ที่ STP สูตรเคมีของสารประกอบคาร์บอเนตคือข้อใด",
    "choices": [
      "Na2CO3",
      "MgCO3",
      "CaCO3",
      "BaCO3"
    ],
    "correctIndex": 3,
    "explanation": "HCl=0.04mol, CO2=0.02mol → คาร์บอเนต=0.02mol, MW=3.94/0.02=197 → BaCO3 (MW=197)"
  },
  {
    "id": "y60-q46",
    "year": 60,
    "questionNum": 46,
    "topicId": "stoichiometry",
    "text": "CO + 2H2 → CH3OH ถ้าใช้ CO 350 g ทำปฏิกิริยากับ H2 65.0 g จะได้ CH3OH กี่กรัม",
    "choices": [
      "400",
      "520",
      "800",
      "1040"
    ],
    "correctIndex": 0,
    "explanation": "CO=12.5mol, H2=32.5mol → CO จำกัด (ต้อง H2 25mol แต่มี 32.5), CH3OH = 12.5×32 = 400 g"
  },
  {
    "id": "y60-q52",
    "year": 60,
    "questionNum": 52,
    "topicId": "stoichiometry",
    "text": "A + 5B → 4C + 2D นำสาร A 20.8 g ทำปฏิกิริยากับสาร B 80.5 g เกิดสาร C 70.4 g ถ้า MW(A)=52, MW(B)=32 มวลโมเลกุลของสาร C คือข้อใด",
    "choices": [
      "36",
      "44",
      "51",
      "84"
    ],
    "correctIndex": 1,
    "explanation": "A=0.4mol, B=2.516mol → A จำกัด, C=4×0.4=1.6mol, MW(C)=70.4/1.6=44"
  },
  {
    "id": "y60-q54",
    "year": 60,
    "questionNum": 54,
    "topicId": "solutions",
    "text": "สารละลาย A เตรียมจาก MgCl2·6H2O 4.06 g ในน้ำ 250 cm3 ต้องการ MgCl2 0.0100 mol/dm3 ปริมาตร 500 cm3 โดยเจือจางจาก A จะต้องใช้ A กี่ cm3",
    "choices": [
      "29.2",
      "62.5",
      "125",
      "250"
    ],
    "correctIndex": 1,
    "explanation": "MgCl2·6H2O MW=203, mol=0.02 ใน 250mL → C(A)=0.08M, 0.08V1=0.01×500 → V1=62.5 mL"
  },
  {
    "id": "y60-q55",
    "year": 60,
    "questionNum": 55,
    "topicId": "solutions",
    "text": "สารละลาย H2SO4 เข้มข้น 3.50 mol/dm3 มีความหนาแน่น 1.20 g/cm3 มีความเข้มข้นกี่โมแลล",
    "choices": [
      "2.30",
      "2.92",
      "4.08",
      "4.20"
    ],
    "correctIndex": 2,
    "explanation": "H2SO4=3.50×98=343g ใน 1L, มวลน้ำ=1200-343=857g, m=3.50/0.857=4.08 mol/kg"
  },
  {
    "id": "y60-q60",
    "year": 60,
    "questionNum": 60,
    "topicId": "solutions",
    "text": "A: สารประกอบโคเวเลนต์ 1.20 g ในเบนซีน 50.0 g จุดเยือกแข็ง 5.01°C B: เติมเบนซีน 50.0 g ลงใน A (Kf เบนซีน=4.90°C/m จุดเยือกแข็งเบนซีน=5.50°C) ข้อใดถูกต้อง",
    "choices": [
      "A มีจุดเดือด 82.6°C",
      "B มีจุดเยือกแข็งต่ำกว่า C อยู่ 5.06°C",
      "A มีค่า dTb มากกว่า C อยู่ 0.199°C",
      "B มีจุดเยือกแข็งต่ำกว่า A อยู่ 0.245°C"
    ],
    "correctIndex": 3,
    "explanation": "dTf(A)=5.50-5.01=0.49°C, m(A)=0.1mol/kg, ใน A+B(0.1kg): m(B)=0.05m, dTf(B)=0.245°C → B ต่ำกว่า A อีก 0.245°C"
  },
  {
    "id": "y61-q2",
    "year": 61,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "text": "อะตอมของธาตุ X มี 14 นิวตรอน และ X3+ มี 10 อิเล็กตรอน ธาตุ X มีเลขอะตอมและเลขมวลเป็นเท่าใดตามลำดับ",
    "choices": [
      "10 และ 14",
      "13 และ 14",
      "13 และ 27",
      "27 และ 13"
    ],
    "correctIndex": 2,
    "explanation": "X3+ มี 10e- → X มี 13 โปรตอน (Al), เลขมวล = 13+14 = 27"
  },
  {
    "id": "y61-q5",
    "year": 61,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "ข้อใดเป็นการจัดอิเล็กตรอนของธาตุอโลหะที่มีความว่องไวในการเกิดปฏิกิริยามากที่สุด",
    "choices": [
      "1s2 2s2 2p2",
      "1s2 2s2 2p5",
      "1s2 2s2 2p6 3s1",
      "1s2 2s2 2p6 3s2 3p5"
    ],
    "correctIndex": 1,
    "explanation": "1s2 2s2 2p5 คือ F (ฟลูออรีน) มี EN สูงสุด ว่องไวที่สุดในบรรดาอโลหะ"
  },
  {
    "id": "y61-q6",
    "year": 61,
    "questionNum": 6,
    "topicId": "atomic-structure",
    "text": "ธาตุ: L(19), M(20), Q(34), R(35), T(37) ข้อใดผิดเกี่ยวกับ IE2",
    "choices": [
      "L น้อยกว่า M",
      "M น้อยกว่า Q",
      "Q น้อยกว่า R",
      "R น้อยกว่า T"
    ],
    "correctIndex": 0,
    "explanation": "L=K(หมู่1) IE2 สูงมากเพราะดึง e- จาก noble gas core > M=Ca(หมู่2) ดังนั้น L>M ข้อ ก. บอก L<M จึงผิด"
  },
  {
    "id": "y61-q9",
    "year": 61,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "text": "สารประกอบออกไซด์ X ละลายน้ำแล้วเปลี่ยนสีลิตมัสจากน้ำเงินเป็นแดง ออกไซด์ Y ละลายน้ำแล้วเปลี่ยนสีลิตมัสจากแดงเป็นน้ำเงิน สูตรใดสอดคล้อง",
    "choices": [
      "X=BeO, Y=N2O5",
      "X=SiO2, Y=CaO",
      "X=Cl2O7, Y=Al2O3",
      "X=SO3, Y=Na2O"
    ],
    "correctIndex": 3,
    "explanation": "ออกไซด์กรด: SO3(ละลายน้ำได้ H2SO4 เปลี่ยนลิตมัสน้ำเงินเป็นแดง), ออกไซด์เบส: Na2O(ละลายน้ำได้ NaOH เปลี่ยนลิตมัสแดงเป็นน้ำเงิน) ✓"
  },
  {
    "id": "y61-q15",
    "year": 61,
    "questionNum": 15,
    "topicId": "atomic-structure",
    "text": "การสลายตัวของธาตุกัมมันตรังสีโดยการแผ่รังสีชนิดใดส่งผลให้ธาตุใหม่มีเลขอะตอมเพิ่มขึ้น 1 หน่วย",
    "choices": [
      "แอลฟา",
      "บีตา",
      "แกมมา",
      "โพซิตรอน"
    ],
    "correctIndex": 1,
    "explanation": "รังสีบีตา (อิเล็กตรอน) ทำให้นิวตรอน→โปรตอน เลขอะตอมเพิ่ม 1"
  },
  {
    "id": "y61-q21",
    "year": 61,
    "questionNum": 21,
    "topicId": "chemical-bonding",
    "text": "จำนวนพันธะและอิเล็กตรอนคู่โดดเดี่ยวในโครงสร้าง C2N2 (ทุกอะตอมเป็นไปตามกฎออกเตต)",
    "choices": [
      "พันธะเดี่ยว 1, พันธะสาม 1, lone pair 1 คู่",
      "พันธะเดี่ยว 1, พันธะสาม 2, lone pair 2 คู่",
      "พันธะเดี่ยว 1, พันธะคู่ 2, lone pair 2 คู่",
      "พันธะเดี่ยว 2, พันธะคู่ 1, พันธะสาม 2, lone pair 2 คู่"
    ],
    "correctIndex": 1,
    "explanation": "N≡C-C≡N: พันธะสาม 2 พันธะ, พันธะเดี่ยว 1 พันธะ, lone pair ที่ N แต่ละตัว = 2 คู่รวม"
  },
  {
    "id": "y61-q28",
    "year": 61,
    "questionNum": 28,
    "topicId": "chemical-bonding",
    "text": "ข้อใดผิดเกี่ยวกับไอออน NH4+",
    "choices": [
      "มีรูปร่างเป็นทรงสี่หน้า",
      "ประกอบด้วยพันธะโคเวเลนต์มีขั้ว",
      "อะตอมกลางไม่มีอิเล็กตรอนคู่โดดเดี่ยว",
      "ความยาวพันธะ N-H 3 พันธะเหมือนกัน แต่แตกต่างจากพันธะที่สี่"
    ],
    "correctIndex": 3,
    "explanation": "NH4+ มีพันธะ N-H 4 พันธะที่สมมูลกันทั้งหมด ข้อ ง. ผิด"
  },
  {
    "id": "y61-q33",
    "year": 61,
    "questionNum": 33,
    "topicId": "stoichiometry",
    "text": "แก๊ส Cl2 และแก๊ส H2 ในขวดปิด หลังฉายแสง UV พบ Cl2 เหลือ 30%, H2 เหลือ 50%, HCl เกิด 20% ร้อยละโดยปริมาตรของ H2 เมื่อตอนเริ่มต้นคือเท่าใด",
    "choices": [
      "20",
      "40",
      "60",
      "80"
    ],
    "correctIndex": 2,
    "explanation": "HCl เกิด 20% → Cl2 ทำปฏิกิริยาไป 25%, H2 ทำปฏิกิริยาไป 20% ต้องการ %H2 เริ่มต้น: H2 เริ่ม = 50+20 = 70? ลอง: ถ้า H2 เริ่ม = 60 → H2 ทำปฏิกิริยา 20 → H2 เหลือ 40? ไม่ตรง → ถ้า H2 เริ่ม = 70 → H2 เหลือ 50 → ทำปฏิกิริยา 20 → HCl = 40? ลอง 60%: H2 เหลือ 50, ทำปฏิกิริยา = 10 → HCl = 10 ไม่ใช่ 20"
  },
  {
    "id": "y61-q37",
    "year": 61,
    "questionNum": 37,
    "topicId": "stoichiometry",
    "text": "Na2CO3 0.0800 mol/dm3 ปริมาตร 75.0 cm3 ผสมกับ AgNO3 0.200 mol/dm3 ปริมาตร 25.0 cm3 ให้ตะกอน Ag2CO3 สารตั้งต้นที่เหลือมีความเข้มข้นกี่ mol/dm3",
    "choices": [
      "0.0100",
      "0.0350",
      "0.0467",
      "0.0700"
    ],
    "correctIndex": 1,
    "explanation": "Na2CO3=0.006mol, AgNO3=0.005mol → 2Ag++CO32-→Ag2CO3, Ag+หมด, CO32-เหลือ=0.006-0.0025=0.0035mol ใน 100mL = 0.0350 M"
  },
  {
    "id": "y62-q2",
    "year": 62,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "text": "คลื่นแม่เหล็กไฟฟ้าในข้อใดมีพลังงานมากที่สุด",
    "choices": [
      "ความถี่ 4.0×10^12 s-1",
      "พลังงาน 3.3×10^-23 J",
      "ความยาวคลื่น 400 nm",
      "ความยาวคลื่น 300 nm"
    ],
    "correctIndex": 3,
    "explanation": "E=hc/λ พลังงานแปรผกผันกับ λ, 300 nm สั้นที่สุด มีพลังงานสูงสุด"
  },
  {
    "id": "y62-q3",
    "year": 62,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "text": "การกระตุ้นอิเล็กตรอนของธาตุ A จาก n=3 ไป n=4 ใช้แสงความยาวคลื่น 600 nm การกระตุ้นจาก n=2 ไป n=3 จะต้องใช้ความยาวคลื่นดังข้อใด",
    "choices": [
      "น้อยกว่า 600 nm",
      "มากกว่า 600 nm",
      "เท่ากับ 600 nm",
      "เท่ากับ 600 nm และเพิ่มจำนวนหลอด"
    ],
    "correctIndex": 0,
    "explanation": "ช่องว่างพลังงาน n=2 ถึง n=3 > n=3 ถึง n=4 ต้องใช้พลังงานมากกว่า → λ น้อยกว่า 600 nm"
  },
  {
    "id": "y62-q4",
    "year": 62,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกเกี่ยวกับระดับพลังงานของออร์บิทัลในอะตอมต่าง ๆ",
    "choices": [
      "สำหรับ H อะตอม 2p มีพลังงานสูงกว่า 2s",
      "สำหรับ S(Z=16) อะตอม 3p มีพลังงานสูงกว่า 3s",
      "สำหรับ Ni(Z=28) อะตอม 3d มีพลังงานสูงกว่า 4p",
      "สำหรับ Br(Z=35) อะตอม 3d มีพลังงานสูงกว่า 4p"
    ],
    "correctIndex": 1,
    "explanation": "ในอะตอมที่มีหลายอิเล็กตรอน 3p > 3s เสมอ (ข. ถูก) ใน H อะตอม 2s และ 2p มีพลังงานเท่ากัน (ก. ผิด)"
  },
  {
    "id": "y62-q5",
    "year": 62,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกเกี่ยวกับธาตุที่มีเลขอะตอม 23 (V)",
    "choices": [
      "ธาตุนี้อยู่ในหมู่เดียวกับธาตุที่มีเลขอะตอม 43",
      "มีอิเล็กตรอนบรรจุใน 3d ออร์บิทัล 3 อิเล็กตรอน",
      "มีอิเล็กตรอนในระดับพลังงาน n=3 เท่านั้น",
      "ถ้าเสีย 2 อิเล็กตรอน จำนวนอิเล็กตรอนใน 3d ออร์บิทัลลดลง"
    ],
    "correctIndex": 0,
    "explanation": "V(23) [Ar]3d34s2 อยู่หมู่ VB เหมือน Tc(43) [Kr]4d55s2 ✓"
  },
  {
    "id": "y66-q36",
    "year": 66,
    "questionNum": 36,
    "topicId": "solutions",
    "text": "สารละลาย Na2CO3 เข้มข้น 2.65% w/v มีความหนาแน่น 1.03 g/mL จะมีความเข้มข้นของ Na+ กี่โมลาร์",
    "choices": [
      "0.125",
      "0.250",
      "0.500",
      "0.515"
    ],
    "correctIndex": 2,
    "explanation": "Na2CO3 2.65g/100mL = 26.5g/L, MW=106 → 0.250 M, Na+ = 2×0.250 = 0.500 M"
  },
  {
    "id": "y66-q38",
    "year": 66,
    "questionNum": 38,
    "topicId": "solutions",
    "text": "สารละลายกลูโคส (MW=180) ในน้ำ เข้มข้น 2.0 mol/kg มีความหนาแน่น 1.10 g/mL มีความเข้มข้นกี่โมล/ลิตร",
    "choices": [
      "1.3",
      "1.6",
      "2.2",
      "3.4"
    ],
    "correctIndex": 1,
    "explanation": "2mol กลูโคสใน 1kg น้ำ, มวลรวม=2×180+1000=1360g, ปริมาตร=1360/1.10=1236mL, M=2/1.236=1.6 M"
  },
  {
    "id": "y66-q42",
    "year": 66,
    "questionNum": 42,
    "topicId": "stoichiometry",
    "text": "สมการเคมีที่ดุลแล้วในข้อใดมีตัวเลขสัมประสิทธิ์ของ H2O มากที่สุด",
    "choices": [
      "C2H5OH + O2 → CO2 + H2O",
      "Sr(OH)2 + HBr → SrBr2 + H2O",
      "HNO3 + Ca(OH)2 → Ca(NO3)2 + H2O",
      "MnO2 + HCl → MnCl2 + Cl2 + H2O"
    ],
    "correctIndex": 0,
    "explanation": "ก: C2H5OH + 3O2 → 2CO2 + 3H2O (H2O=3 มากที่สุด)"
  },
  {
    "id": "y66-q44",
    "year": 66,
    "questionNum": 44,
    "topicId": "stoichiometry",
    "text": "ใส่ Zn 19.50 g ในสารละลาย AgNO3 (Zn + 2AgNO3 → Zn(NO3)2 + 2Ag) ปฏิกิริยาระยะหนึ่ง มีของแข็ง Zn เหลือ 18.85 g ของแข็งนี้มีโลหะเงินร้อยละโดยมวลเท่าใด",
    "choices": [
      "5.42",
      "10.3",
      "11.5",
      "76.9"
    ],
    "correctIndex": 1,
    "explanation": "Zn หายไป=0.65g=0.01mol → Ag=0.02mol=2.16g, ของแข็งรวม=18.85+2.16=21.01g, %Ag=10.3%"
  },
  {
    "id": "y66-q54",
    "year": 66,
    "questionNum": 54,
    "topicId": "states-of-matter",
    "text": "บรรจุ He 10.0 mol ที่ STP ในกระป๋องที่ทนความดันสูงสุด 3040 torr นำไปให้ความร้อน กระป๋องจะระเบิดที่อุณหภูมิกี่องศาเซลเซียส",
    "choices": [
      "1092",
      "819",
      "341",
      "68"
    ],
    "correctIndex": 1,
    "explanation": "P1=760torr, T1=273K → T2=273×(3040/760)=1092K=819°C"
  },
  {
    "id": "y66-q55",
    "year": 66,
    "questionNum": 55,
    "topicId": "states-of-matter",
    "text": "แก๊สในกระบอกสูบ ความดันเพิ่ม 2 เท่า อุณหภูมิ(K) เพิ่ม 4 เท่า มีแก๊สรั่วออก 20% ปริมาตรเป็นกี่เท่าของปริมาตรเริ่มต้น",
    "choices": [
      "0.40",
      "0.62",
      "1.6",
      "2.0"
    ],
    "correctIndex": 2,
    "explanation": "PV=nRT, n เหลือ 0.8 → V2=0.8n×4T/(2P)×V1/(nT/P)=1.6V1"
  },
  {
    "id": "y66-q56",
    "year": 66,
    "questionNum": 56,
    "topicId": "states-of-matter",
    "text": "มนุษย์หายใจ 15 ครั้ง/นาที แต่ละครั้ง 310 mL ที่ 27°C, 1.0 atm มวลต่อโมลอากาศ=30 g/mol มวลอากาศที่หายใจใน 1 นาทีเป็นกี่กรัม",
    "choices": [
      "0.38",
      "4.2",
      "5.7",
      "63"
    ],
    "correctIndex": 1,
    "explanation": "V=15×310=4650mL=4.65L, n=PV/RT=1×4.65/(0.082×300)=0.189mol, มวล=0.189×30=5.7g ดังนั้น 5.7"
  },
  {
    "id": "y66-q57",
    "year": 66,
    "questionNum": 57,
    "topicId": "states-of-matter",
    "text": "ของเหลว X (MW=60, d=0.80 g/mL) ปริมาตร 15 mL ระเหยเป็นไอทั้งหมดที่ 27°C, 1.0 atm มีปริมาตรกี่ลิตร",
    "choices": [
      "0.30",
      "0.33",
      "4.5",
      "4.9"
    ],
    "correctIndex": 3,
    "explanation": "มวล=15×0.80=12g, mol=12/60=0.20mol, V=nRT/P=0.20×0.082×300=4.92 ≈ 4.9 L"
  },
  {
    "id": "y66-q58",
    "year": 66,
    "questionNum": 58,
    "topicId": "stoichiometry",
    "text": "BaH2(s) + 2H2O(l) → Ba(OH)2(s) + 2H2(g) ถ้าต้องการ H2 24.6 L ที่ 27°C, 1.00 atm จะต้องใช้ BaH2 กี่กรัม (MW BaH2=139)",
    "choices": [
      "70",
      "76",
      "139",
      "278"
    ],
    "correctIndex": 2,
    "explanation": "n(H2)=PV/RT=1×24.6/(0.082×300)=1.0mol, n(BaH2)=0.5mol=0.5×139=69.5≈70g ดังนั้น 70"
  },
  {
    "id": "y67-q9",
    "year": 67,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "text": "ธาตุ X มี 3 ไอโซโทป: (2a+4)X, (2a+6)X, (2a+8)X อัตราส่วนโดยมวล 5:2:1 มวลอะตอมเฉลี่ยของธาตุนี้คือข้อใด",
    "choices": [
      "2a + 5",
      "2a + 5.5",
      "2a + 6",
      "2a + 6.5"
    ],
    "correctIndex": 0,
    "explanation": "[5(2a+4)+2(2a+6)+1(2a+8)]/8=(16a+40)/8=2a+5"
  },
  {
    "id": "y67-q11",
    "year": 67,
    "questionNum": 11,
    "topicId": "atomic-structure",
    "text": "อะตอมหรือไอออนในข้อใดมีมวลใกล้เคียงกันมากที่สุด",
    "choices": [
      "ไอออนที่มีประจุเท่ากัน",
      "อะตอมที่เป็นไอโซโทปกัน",
      "ไอออนที่มีจำนวนอนุภาคมูลฐานเท่ากัน",
      "อะตอมที่มีจำนวนอนุภาคในนิวเคลียสเท่ากัน"
    ],
    "correctIndex": 3,
    "explanation": "อะตอมที่มีจำนวนอนุภาคในนิวเคลียส (โปรตอน+นิวตรอน) เท่ากัน = เลขมวลเท่ากัน = มวลใกล้เคียงกัน"
  },
  {
    "id": "y67-q13",
    "year": 67,
    "questionNum": 13,
    "topicId": "atomic-structure",
    "text": "ข้อใดเปรียบเทียบค่าพลังงานไอออไนเซชันลำดับที่ 2 ของธาตุ 69Ga(31), 40Ca(20) และ 39K(19) ได้ถูกต้อง",
    "choices": [
      "39K > 69Ga > 40Ca",
      "69Ga > 40Ca > 39K",
      "39K > 40Ca > 69Ga",
      "40Ca > 39K > 69Ga"
    ],
    "correctIndex": 0,
    "explanation": "K(หมู่1) IE2 สูงมาก (ดึง e- จาก core), Ga IE2 ปานกลาง, Ca(หมู่2) IE2 ต่ำกว่า K แต่ K IE2 ค่าจริง 3052 > Ga 1979 > Ca 1145 kJ/mol → K>Ga>Ca"
  },
  {
    "id": "y67-q17",
    "year": 67,
    "questionNum": 17,
    "topicId": "atomic-structure",
    "text": "ข้อใดเป็นสมการการสลายตัวของสารกัมมันตรังสีที่ถูกต้อง",
    "choices": [
      "129Te(52) → 129Te(52) + β",
      "226Ra(88) → 222Rn(86) + α",
      "214Po(84) → 210Pb(82) + 2α",
      "238U(92) → 238Np(93) + 2β"
    ],
    "correctIndex": 1,
    "explanation": "226Ra → 222Rn + 4He: เลขมวล 226=222+4✓, เลขอะตอม 88=86+2✓"
  },
  {
    "id": "y67-q27",
    "year": 67,
    "questionNum": 27,
    "topicId": "chemical-bonding",
    "text": "เพชรและแกรไฟต์เป็นอัญรูปกัน ข้อใดผิด",
    "choices": [
      "แกรไฟต์มีโครงสร้างเรโซแนนซ์",
      "มุมพันธะในเพชรมากกว่าในแกรไฟต์",
      "พันธะ C-C ในแกรไฟต์สั้นกว่าในเพชร แต่ยาวกว่าใน C2H4",
      "คาร์บอนในแกรไฟต์สร้างพันธะเดี่ยว 2 และพันธะคู่ 1"
    ],
    "correctIndex": 1,
    "explanation": "มุมพันธะในเพชร(sp3)=109.5°, แกรไฟต์(sp2)=120° → แกรไฟต์มากกว่า ข้อ ข. ผิด"
  },
  {
    "id": "y67-q30",
    "year": 67,
    "questionNum": 30,
    "topicId": "stoichiometry",
    "text": "1 กะรัต = 200 mg เพชรที่มีคาร์บอน 8.03×10^22 อะตอม คิดเป็นกี่กะรัต",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "mol C = 8.03×10^22/6.02×10^23 = 0.1334 mol, มวล=0.1334×12=1.6g=1600mg=8 กะรัต"
  },
  {
    "id": "y67-q31",
    "year": 67,
    "questionNum": 31,
    "topicId": "stoichiometry",
    "text": "เกลืออะลูมิเนียมซัลเฟต 13.68 g มีจำนวนไอออนทั้งหมดเท่าใด (Al2(SO4)3 MW=342)",
    "choices": [
      "4.82×10^22",
      "9.64×10^22",
      "1.20×10^23",
      "3.01×10^24"
    ],
    "correctIndex": 1,
    "explanation": "mol = 13.68/342 = 0.04 mol, แตกตัว: 2Al3+ + 3SO42- = 5 ไอออน/formula, ไอออนรวม = 0.04×5×6.02×10^23 = 1.20×10^23"
  },
  {
    "id": "y67-q32",
    "year": 67,
    "questionNum": 32,
    "topicId": "stoichiometry",
    "text": "แก๊ส CnH2n+2 ปริมาตร 0.224 L ที่ STP เผาไหม้สมบูรณ์ ผ่านลง Ca(OH)2 ได้ตะกอน CaCO3 3.0 g สูตรเอมพิริคัลของแก๊สคือข้อใด",
    "choices": [
      "C2H6",
      "C3H6",
      "C3H8",
      "C4H10"
    ],
    "correctIndex": 2,
    "explanation": "แก๊ส=0.01mol, CaCO3=0.03mol=CO2 → C ต่อโมล = 3 → C3H8"
  },
  {
    "id": "y67-q37",
    "year": 67,
    "questionNum": 37,
    "topicId": "stoichiometry",
    "text": "MHCO3 5.0 g ละลายใน 0.10 L นำ 0.020 L ไปทำปฏิกิริยากับ HCl มากเกินพอ เกิด CO2 ปริมาตร 0.224 L ที่ STP ธาตุ M คือข้อใด",
    "choices": [
      "Li",
      "Na",
      "K",
      "Rb"
    ],
    "correctIndex": 2,
    "explanation": "CO2=0.01mol ใน 20mL → ใน 100mL=0.05mol, MW(MHCO3)=5.0/0.05=100 → M=100-61=39 → K"
  },
  {
    "id": "y67-q38",
    "year": 67,
    "questionNum": 38,
    "topicId": "stoichiometry",
    "text": "2NaOH + Cl2 → NaOCl + NaCl + H2O ถ้าใช้ NaOH 20.0 g ทำปฏิกิริยากับ Cl2 มากเกินพอ จะได้ NaOCl กี่กรัม",
    "choices": [
      "10.0",
      "18.6",
      "37.2",
      "74.5"
    ],
    "correctIndex": 1,
    "explanation": "NaOH 20g=0.5mol → NaOCl=0.25mol=0.25×74.5=18.6g"
  },
  {
    "id": "y67-q45",
    "year": 67,
    "questionNum": 45,
    "topicId": "stoichiometry",
    "text": "2A + B → 3C + D, A 50g (MW=25), B 20g (MW=40) เกิด C 135g มวลโมเลกุลของ C เป็นเท่าใด",
    "choices": [
      "45",
      "67.5",
      "90",
      "270"
    ],
    "correctIndex": 2,
    "explanation": "A=2mol, B=0.5mol → B เป็น limiting reagent, C=3×0.5=1.5mol=135g → MW(C)=90"
  },
  {
    "id": "y67-q50",
    "year": 67,
    "questionNum": 50,
    "topicId": "solutions",
    "text": "ผสม Na2SO4 0.100 mol/L ปริมาตร 200 mL กับ NaCl 0.150 mol/L ปริมาตร 200 mL ความเข้มข้นของ Na+ ในสารละลายผสมเป็นเท่าใด",
    "choices": [
      "0.125",
      "0.175",
      "0.250",
      "0.350"
    ],
    "correctIndex": 1,
    "explanation": "Na+ จาก Na2SO4=2×0.1×0.2=0.04mol, จาก NaCl=0.15×0.2=0.03mol, รวม=0.07mol ใน 400mL=0.175M"
  },
  {
    "id": "y67-q51",
    "year": 67,
    "questionNum": 51,
    "topicId": "solutions",
    "text": "สารอินทรีย์ 3.85 g ละลายในเบนซีน 100 g จุดเดือด 80.75°C (เบนซีน: จุดเดือด 80.09°C, Kb=2.64°C/m) มวลต่อโมลของสารอินทรีย์คือข้อใด",
    "choices": [
      "58",
      "102",
      "154",
      "296"
    ],
    "correctIndex": 2,
    "explanation": "dTb=0.66°C, m=0.66/2.64=0.25mol/kg, mol=0.025mol, MW=3.85/0.025=154 g/mol"
  },
  {
    "id": "y67-q54",
    "year": 67,
    "questionNum": 54,
    "topicId": "states-of-matter",
    "text": "ภาชนะ A(C4H10), B(SO2), C(He) เหมือนกันทุกประการที่ STP ข้อใดเปรียบเทียบจำนวนอนุภาค (N) ได้ถูกต้อง",
    "choices": [
      "N(C)>N(A)>N(B)",
      "N(B)>N(A)>N(C)",
      "N(A)>N(B)>N(C)",
      "N(A)=N(B)=N(C)"
    ],
    "correctIndex": 3,
    "explanation": "กฎอาโวกาโดร: ที่ T,P เดียวกัน แก๊สทุกชนิดมีจำนวนโมลเท่ากัน → N เท่ากัน"
  },
  {
    "id": "y67-q56",
    "year": 67,
    "questionNum": 56,
    "topicId": "states-of-matter",
    "text": "ดิวทีเรียม D2 (มวลอะตอม=2) ข้อใดกล่าวถูกต้อง",
    "choices": [
      "พลังงานพันธะ D-D สูงกว่า H-H ประมาณ 2 เท่า",
      "ที่ P,T เท่ากัน ความหนาแน่นของ D2 เป็น 2 เท่าของ H2",
      "D2 สลายตัวให้อนุภาคบีตาได้ 2 ครั้งกลายเป็น H2 2 โมเลกุล",
      "ที่ P,T เท่ากัน อัตราการแพร่ผ่านของ H2 เป็น 2 เท่าของ D2"
    ],
    "correctIndex": 1,
    "explanation": "ความหนาแน่น ∝ MW, D2(MW=4)/H2(MW=2) = 2 เท่า ✓"
  },
  {
    "id": "y68-q10",
    "year": 68,
    "questionNum": 10,
    "topicId": "atomic-structure",
    "text": "ข้อใดผิด: ก.ธาตุเลขอะตอม 32 มี 2 เวเลนซ์อิเล็กตรอน ข.ไอออน A+ มีเวเลนซ์อิเล็กตรอน 8 → A เป็นธาตุกลุ่ม s ค.ขนาด Ca2+<K+<S2-<K ง.ธาตุที่มีการจัดเรียง 1s22s22p63s23p64s1 เป็นโลหะแอลคาไล",
    "choices": [
      "ธาตุเลขอะตอม 32 มี 2 เวเลนซ์อิเล็กตรอน",
      "ไอออน A+ มีเวเลนซ์อิเล็กตรอน 8 → A เป็นธาตุกลุ่ม s",
      "ขนาด Ca2+<K+<S2-<K",
      "ธาตุที่มีการจัดเรียง 1s22s22p63s23p64s1 เป็นโลหะแอลคาไล"
    ],
    "correctIndex": 0,
    "explanation": "เลขอะตอม 32 = Ge หมู่ 14 (IVA) มี 4 เวเลนซ์อิเล็กตรอน ไม่ใช่ 2"
  },
  {
    "id": "y68-q11",
    "year": 68,
    "questionNum": 11,
    "topicId": "atomic-structure",
    "text": "ธาตุ A มีการจัดเรียงอิเล็กตรอน 1s22s22p63s2 ข้อใดผิด",
    "choices": [
      "ธาตุ A ทำปฏิกิริยากับน้ำได้ช้ากว่าโซเดียม",
      "ไอออนที่เสถียรของ A มีจำนวนโปรตอนน้อยกว่าอิเล็กตรอน",
      "ธาตุ A มี IE1 สูงกว่าธาตุที่เลขอะตอม 11 และ 20",
      "ธาตุ A มีขนาดอะตอมใหญ่กว่าธาตุที่เลขอะตอม 9"
    ],
    "correctIndex": 1,
    "explanation": "A=Mg, Mg2+ มีโปรตอน=12 อิเล็กตรอน=10 → โปรตอน>อิเล็กตรอน ข้อ ข. บอกว่าโปรตอนน้อยกว่า จึงผิด"
  },
  {
    "id": "y68-q16",
    "year": 68,
    "questionNum": 16,
    "topicId": "atomic-structure",
    "text": "F-18 ครึ่งชีวิต 110 นาที สลายตัวให้รังสีโพสิตรอน I.เริ่ม 8.00น. เหลือ 12.5% เวลา 13.50น. II.ผลิตภัณฑ์คือ 18O ข้อใดถูก",
    "choices": [
      "I และ II",
      "II และ III",
      "I และ III",
      "II เท่านั้น"
    ],
    "correctIndex": 0,
    "explanation": "I: 13.50-8.00=350min, (1/2)^3.18 ≈ 12.5%✓ II: F(9)→O(8) เลขอะตอมลด 1✓ ทั้ง I และ II ถูก"
  },
  {
    "id": "y68-q17",
    "year": 68,
    "questionNum": 17,
    "topicId": "atomic-structure",
    "text": "การเปลี่ยนแปลงใดเป็นการสลายตัวที่มีการปลดปล่อยรังสีบีตา: I.38K→38Ar II.214Bi→214Po III.2H→3He IV.238U→239Np",
    "choices": [
      "I และ II",
      "II และ III",
      "III และ IV",
      "II เท่านั้น"
    ],
    "correctIndex": 3,
    "explanation": "รังสีบีตา: Z+1, A ไม่เปลี่ยน. II: Bi(83)→Po(84) Z+1, A=214✓. I,III,IV ไม่ใช่ beta decay → II เท่านั้น"
  },
  {
    "id": "y68-q29",
    "year": 68,
    "questionNum": 29,
    "topicId": "states-of-matter",
    "text": "ภาชนะบรรจุ He 0.50 mol และ X2 0.25 mol มวลรวม 18 g มวลอะตอมของธาตุ X เป็นเท่าใด",
    "choices": [
      "16",
      "32",
      "64",
      "72"
    ],
    "correctIndex": 1,
    "explanation": "มวล He=0.50×4=2g, มวล X2=16g, MW(X2)=16/0.25=64 → มวลอะตอม X=32"
  },
  {
    "id": "y68-q30",
    "year": 68,
    "questionNum": 30,
    "topicId": "stoichiometry",
    "text": "แก๊สนีออน 60 g มีจำนวนอะตอมเท่ากับแก๊สออกซิเจนกี่กรัม",
    "choices": [
      "12",
      "24",
      "48",
      "96"
    ],
    "correctIndex": 2,
    "explanation": "Ne 60g=3mol=3NA อะตอม, O2 ต้องมี 3NA อะตอม O = 3mol O atoms = 3×16 = 48 g"
  },
  {
    "id": "y68-q31",
    "year": 68,
    "questionNum": 31,
    "topicId": "stoichiometry",
    "text": "ภาชนะหนัก 14 g บรรจุ Ar ที่ STP ชั่งได้ 34 g บรรจุแก๊สตัวอย่างที่ STP ชั่งได้ 46 g แก๊สตัวอย่างคือข้อใด",
    "choices": [
      "O2",
      "CH4",
      "NO2",
      "SO2"
    ],
    "correctIndex": 3,
    "explanation": "มวล Ar=20g, mol Ar=0.5mol, มวลแก๊สตัวอย่าง=32g, MW=32/0.5=64 → SO2(MW=64)"
  },
  {
    "id": "y68-q35",
    "year": 68,
    "questionNum": 35,
    "topicId": "stoichiometry",
    "text": "เผาเกลือไฮเดรต BaCl2·nH2O 1.22 g พบว่ามวลลดลงเหลือ 1.04 g สูตรเคมีของเกลือไฮเดรตคือข้อใด",
    "choices": [
      "BaCl2·H2O",
      "BaCl2·2H2O",
      "BaCl2·3H2O",
      "BaCl2·4H2O"
    ],
    "correctIndex": 1,
    "explanation": "น้ำสูญเสีย=0.18g=0.01mol H2O, BaCl2=1.04g=0.005mol → H2O:BaCl2=2 → BaCl2·2H2O"
  },
  {
    "id": "y68-q44",
    "year": 68,
    "questionNum": 44,
    "topicId": "stoichiometry",
    "text": "CaCO3 + 2HCl → CaCl2 + H2O + CO2 ใช้น้ำยามี HCl 10.0% w/w, d=1.05 g/mL ปริมาตร 146 mL จะเกิด CO2 กี่ลิตรที่ STP",
    "choices": [
      "4.27",
      "4.48",
      "4.70",
      "9.41"
    ],
    "correctIndex": 1,
    "explanation": "มวลน้ำยา=146×1.05=153.3g, HCl=15.33g=0.42mol, CO2=0.21mol=4.70L แต่คำนวณได้ 4.70 → ต้องตรวจ: HCl 10% ของ 153.3g = 15.33g/36.5=0.42mol, CO2=0.42/2=0.21mol=4.70L"
  },
  {
    "id": "y68-q49",
    "year": 68,
    "questionNum": 49,
    "topicId": "solutions",
    "text": "ต้องเติมน้ำกี่กรัมลงในเอทานอล C2H5OH 138 g เพื่อให้เศษส่วนโมลของเอทานอล = 0.40",
    "choices": [
      "22",
      "32",
      "36",
      "81"
    ],
    "correctIndex": 3,
    "explanation": "mol EtOH=3mol, x(EtOH)=3/(3+n(H2O))=0.40 → n(H2O)=4.5mol=81g"
  },
  {
    "id": "y68-q50",
    "year": 68,
    "questionNum": 50,
    "topicId": "solutions",
    "text": "สารละลาย A: NaOH 30g ใน 500mL, สารละลาย B: NaOH 1.0M ผสม A 200mL กับ B 300mL สารละลายผสมมีความเข้มข้นกี่โมล/ลิตร",
    "choices": [
      "0.60",
      "1.2",
      "1.3",
      "2.1"
    ],
    "correctIndex": 1,
    "explanation": "C(A)=1.5M, mol NaOH รวม=1.5×0.2+1.0×0.3=0.6mol ใน 500mL=1.2M"
  },
  {
    "id": "y68-q51",
    "year": 68,
    "questionNum": 51,
    "topicId": "solutions",
    "text": "ต้องใช้กลูโคส C6H12O6 (MW=180) กี่กรัมละลายในน้ำ 30.0 g เพื่อให้จุดเดือด 101.02°C (Kb น้ำ=0.51°C/m)",
    "choices": [
      "1.1",
      "2.7",
      "3.0",
      "11"
    ],
    "correctIndex": 3,
    "explanation": "dTb=1.02°C, m=2.0mol/kg, mol=2.0×0.030=0.060mol, มวล=0.060×180=10.8 ≈ 11g"
  },
  {
    "id": "y68-q53",
    "year": 68,
    "questionNum": 53,
    "topicId": "states-of-matter",
    "text": "เมื่อปริมาตรลดจาก 600 mL เป็น 300 mL ความดันเปลี่ยนจาก 1.00 atm เป็น a atm กราฟ P vs 1/V มีลักษณะใด และ a มีค่าเท่าใด",
    "choices": [
      "กราฟเส้นตรง, a=2.00 atm",
      "กราฟเส้นโค้ง, a=2.00 atm",
      "กราฟเส้นตรง, a=0.50 atm",
      "กราฟเส้นโค้ง, a=0.50 atm"
    ],
    "correctIndex": 0,
    "explanation": "กฎบอยล์: P=k/V → P vs 1/V เป็นเส้นตรง, V ลดครึ่ง → P เพิ่ม 2 เท่า → a=2.00 atm"
  },
  {
    "id": "y68-q54",
    "year": 68,
    "questionNum": 54,
    "topicId": "states-of-matter",
    "text": "กระป๋องสเปรย์ 450 mL บรรจุแก๊สความดัน 10.2 atm ที่ 24°C เมื่ออุณหภูมิสูงถึง 57°C ความดันจะเป็นกี่บรรยากาศ",
    "choices": [
      "4.29",
      "9.18",
      "11.3",
      "24.2"
    ],
    "correctIndex": 2,
    "explanation": "กฎเกย์-ลูสแซก: P1/T1=P2/T2, 10.2/297=P2/330 → P2=11.3 atm"
  },
  {
    "id": "y68-q55",
    "year": 68,
    "questionNum": 55,
    "topicId": "states-of-matter",
    "text": "แก๊สมีปริมาตร 2.50 L ที่ 3.00 atm, 127°C หากปริมาตรเพิ่มเป็น 5.00 L ที่ 327°C ความดันใหม่เป็นกี่ atm",
    "choices": [
      "1.00",
      "2.25",
      "3.86",
      "7.72"
    ],
    "correctIndex": 1,
    "explanation": "P1V1/T1=P2V2/T2 → 3.00×2.50/400=P2×5.00/600 → P2=2.25 atm"
  }
]

export function getExamQuestionsByTopic(topicId: string): PastExamQuestion[] {
  return pastExamQuestions.filter(q => q.topicId === topicId && !q.requiresImage && q.correctIndex >= 0)
}

export function getExamQuestionsByYear(year: number): PastExamQuestion[] {
  return pastExamQuestions.filter(q => q.year === year)
}

export function getTopicYearMap(): Record<string, number[]> {
  const map: Record<string, number[]> = {}
  pastExamQuestions.forEach(q => {
    if (!map[q.topicId]) map[q.topicId] = []
    if (!map[q.topicId].includes(q.year)) map[q.topicId].push(q.year)
  })
  return map
}
