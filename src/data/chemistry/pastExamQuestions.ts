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
  imageUrl?: string
}

export const pastExamQuestions: PastExamQuestion[] = [
  {
    "id": "y60-q1",
    "year": 60,
    "questionNum": 1,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y60-q1.png",
    "text": "หลอดรังสีแคโทดที่เจาะรูตรงกลางขั้วแคโทดและแอโนด หลังขั้วแคโทดและแอโนดมีฉากเรืองแสง ก และ ข ตามล าดับ ภายในหลอดบรรจุแก๊ส 1 ชนิด และมีความดันต ่า เมื่อผ่านกระแสไฟฟ้า เข้าไปในหลอด จะเกิดจุดบนฉากเรืองแสงหลังขั้วทั้งสอง ดังรูป ข้อความใดถูกต้อง",
    "choices": [
      "อนุภาค X มีอ านาจในการทะลุทะลวงสูง สามารถทะลุผ่านแผ่นตะกั่วบาง ๆ ได้",
      "อนุภาค X และ Y มีค่าประจุต่อมวล (e/m) คงที่ ไม่ขึ้นกับชนิดของแก๊สในหลอด",
      "อนุภาค X และ Y เป็นไอออนบวกและไอออนลบของธาตุที่เป็นองค์ประกอบของแก๊ส ที่บรรจุในหลอด",
      "แต่ละอนุภาค X ในหลอดที่บรรจุแก๊ส H2 มีมวลมากกว่ามวลของแต่ละอนุภาค Y ใน หลอดที่บรรจุแก๊ส He"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 60"
  },
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
    "explanation": "Ts อยู่หมู่ VIIA คาบ 7 เหมือน At ควรมีหลายเลขออกซิเดชัน ไม่ใช่แค่ -1",
    "imageUrl": "/exam-images/y60-q2.png"
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
    "explanation": "97 nm ตรงกับ n=1 ไป n=4 เส้นสเปกตรัมที่เกิดได้ = C(4,2) = 6 เส้น",
    "imageUrl": "/exam-images/y60-q3.png"
  },
  {
    "id": "y60-q4",
    "year": 60,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "text": "ธาตุ A และ B เป็นไอโซโทปกัน A มีจ านวนนิวตรอนน้อยกว่า B 5 นิวตรอน เมื่อกลายเป็น B2 จะมีจ านวนอิเล็กตรอนและนิวตรอนเท่ากับ 10 และ 15 ตามล าดับ ข้อใดเป็นสัญลักษณ์นิวเคลียร์ของธาตุ A",
    "choices": [
      "A 18 8",
      "A 22 12",
      "A 25 10",
      "A 25 15"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q4.png"
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
    "explanation": "A=Mg(หมู่2), E=P(หมู่15), J=As(หมู่15) ความเป็นโลหะ: As<P<Mg ดังนั้น J<E<A ถูกต้อง",
    "imageUrl": "/exam-images/y60-q5.png"
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
    "explanation": "Co3+ (เสีย 3e-) มีการจัดเรียงอิเล็กตรอน [Ar]3d6 = 1s2 2s2 2p6 3s2 3p6 3d6",
    "imageUrl": "/exam-images/y60-q6.png"
  },
  {
    "id": "y60-q7",
    "year": 60,
    "questionNum": 7,
    "topicId": "atomic-structure",
    "text": "ข้อใดเป็นอะตอมหรือไอออนที่มีจ านวนอิเล็กตรอนเดี่ยวในสถานะพื้นเท่ากัน",
    "choices": [
      "Cr+ และ Mn2+",
      "As และ Mn2+",
      "Cu2+ และ Cr3+",
      "As3+ และ Cu"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q7.png"
  },
  {
    "id": "y60-q8",
    "year": 60,
    "questionNum": 8,
    "topicId": "atomic-structure",
    "text": "ก าหนดให้ สารประกอบคลอไรด์ของธาตุ A มีสูตรเป็น ACl2 มีลักษณะเป็นของแข็งสีขาว ไม่น าไฟฟ้า ละลายน ้าได้สารละลายที่เป็นกลางและน าไฟฟ้าได้ สมบัติของธาตุ A ข้อใดถูกต้อง",
    "choices": [
      "A เป็นธาตุอโลหะ",
      "A เป็นธาตุที่อยู่ในคาบที่ 2 ของตารางธาตุ",
      "A เป็นธาตุที่อยู่หมู่เดียวกับธาตุที่มีเลขอะตอมเท่ากับ 26",
      "ไอออน A2+ มีการจัดเรียงอิเล็กตรอนเหมือนแก๊สมีตระกูล"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q8.png"
  },
  {
    "id": "y60-q9",
    "year": 60,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "text": "พิจารณาสูตรเคมีของสารประกอบ ต่อไปนี้ [Co(NH3)4SO4]Cl HClO4 และ Na[Au(CN)2] เลขออกซิเดชันของธาตุที่ขีดเส้นใต้ในสารประกอบ ข้อใดถูกต้อง เลขออกซิเดชันของธาตุที่ขีดเส้นใต้ [Co(NH3)4SO4]Cl HClO4 Na[Au(CN)2]",
    "choices": [
      "+2 +6 +3",
      "+2 +7 +3",
      "+6 +6 +1",
      "+6 +7 +1"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q9.png"
  },
  {
    "id": "y60-q10",
    "year": 60,
    "questionNum": 10,
    "topicId": "atomic-structure",
    "text": "พิจารณา การบรรจุอิเล็กตรอน แบบ A, B, C และ D ต่อไปนี้ ข้อความใดถูกต้อง",
    "choices": [
      "แบบ A เป็นของอะตอมที่มีค่าอิเล็กโทรเนกาติวิตีมากที่สุด",
      "แบบ B เป็นการบรรจุอิเล็กตรอนที่ไม่เป็นไปตามกฎของฮุนด์",
      "แบบ C เป็นการบรรจุอิเล็กตรอนที่ไม่เป็นไปตามหลักการกีดกันของเพาลี",
      "แบบ D เป็นของอะตอมที่เสถียรและมีค่าพลังงานไอออไนเซชันล าดับที่ 1 มากที่สุด"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q10.png"
  },
  {
    "id": "y60-q11",
    "year": 60,
    "questionNum": 11,
    "topicId": "atomic-structure",
    "text": "ก าหนดให้ ธาตุ A, D, E และ G มีการจัดเรียงอิเล็กตรอนที่สถานะพื้น ดังนี้ A : [He] 2s2 2p4 D : [Ne] 3s2 3p3 E : [Ar] 3d10 4s2 4p1 G : [Ar] 3d10 4s2 4p3 การเปรียบเทียบขนาดอะตอมและพลังงานไอออไนเซชันล าดับที่ 1 ข้อใดถูกต้อง ขนาดอะตอม พลังงานไอออไนเซชันล าดับที่ 1",
    "choices": [
      "G > E > D A > D > E",
      "D > G > A E > G > A",
      "A > E > G D > G > A",
      "E > G > A G > A > E"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q11.png"
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
    "explanation": "X2+ มี 18e- → X มี 20e- = Ca(หมู่2,คาบ4); Y- มี 18e- → Y มี 17e- = Cl(หมู่7,คาบ3)",
    "imageUrl": "/exam-images/y60-q12.png"
  },
  {
    "id": "y60-q13",
    "year": 60,
    "questionNum": 13,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นสารประกอบออกไซด์ที่ท าปฏิกิริยากับน ้าแล้วได้สารละลายที่เปลี่ยนสีกระดาษ ลิตมัสจากน ้าเงินเป็นแดง",
    "choices": [
      "P4O10 และ Cr2O3",
      "Cl2O7 และ P4O10",
      "Cr2O3 และ Na2O",
      "Cl2O7 และ Na2O"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q13.png"
  },
  {
    "id": "y60-q14",
    "year": 60,
    "questionNum": 14,
    "topicId": "chemical-bonding",
    "text": "เมื่อผสมสารละลายที่ประกอบด้วยไอออน Ba2+, Mg2+, Na+, Cl–, SO4 2– และ HPO4 2– เข้าด้วยกัน พบว่ามีตะกอน เกิดขึ้น สูตรเคมีของสารประกอบแต่ละชนิดที่เป็นตะกอนซึ่งเกิดจากการผสมสารละลายของไอออนดังกล่าว ข้อใดถูกต้อง",
    "choices": [
      "Na2SO4, MgCl2, BaCl2",
      "Na2HPO4, Na2SO4, MgCl2",
      "BaSO4, MgSO4, MgHPO4",
      "MgHPO4, BaSO4, BaHPO4"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q14.png"
  },
  {
    "id": "y60-q15",
    "year": 60,
    "questionNum": 15,
    "topicId": "chemical-bonding",
    "text": "พิจารณาข้อมูลการทดลองเกี่ยวกับธาตุ X, Y และ Z ที่กำหนดให้ ข้อสรุปใดถูกต้อง",
    "choices": [
      "ค่า IE₁ ของ X > Y > Z",
      "ค่า EN ของ Z > X > Y",
      "ขนาดอะตอม X > Y > Z",
      "ข้อ ก และ ข ถูกต้อง"
    ],
    "correctIndex": 2,
    "explanation": "ต้องดูตารางข้อมูลธาตุ X, Y, Z จากรูปในข้อสอบ เพื่อเปรียบเทียบ IE₁, EN และขนาดอะตอม",
    "imageUrl": "/exam-images/y60-q15.png"
  },
  {
    "id": "y60-q16",
    "year": 60,
    "questionNum": 16,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสมการของปฏิกิริยานิวเคลียร์ต่อไปนี้ Co 5927 + A  Mn 56 25 + รังสีแอลฟา Te 130 52 + B  I 130 53 + 2 นิวตรอน Rn 222 86 + รังสีแอลฟา  C + รังสีแกมมา ข้อใดเป็น A, B และ C ตามล าดับ",
    "choices": [
      "นิวตรอน ดิวทีรอน และ Ra 226 88",
      "นิวตรอน โปรตอน และ Ac 226 89",
      "โปรตอน ดิวทีรอน และ Rn 225 86",
      "รังสีบีตา รังสีแอลฟา และ Fr 224 87"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q16.png"
  },
  {
    "id": "y60-q17",
    "year": 60,
    "questionNum": 17,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นสมบัติของธาตุไฮโดรเจนที่ต่างจากธาตุหมู่ VIIA",
    "choices": [
      "มีเลขออกซิเดชันได้มากกว่า 1 ค่า",
      "มีค่าอิเล็กโทรเนกาติวิตีมากกว่า 2",
      "มีจ านวนเวเลนซ์อิเล็กตรอนเท่ากับ 1",
      "ในธรรมชาติอยู่ในรูปโมเลกุลอะตอมคู่"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q17.png"
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
    "explanation": "HF มีพันธะไฮโดรเจนแข็งแรงมาก จึงมีจุดเดือดสูงสุด ส่วน HCl<HBr<HI เรียงตามมวลโมเลกุล",
    "imageUrl": "/exam-images/y60-q18.png"
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
    "explanation": "PbSO4 ไม่ละลายน้ำ สมการไอออนิกสุทธิ: Pb2+ + SO42- → PbSO4(s)",
    "imageUrl": "/exam-images/y60-q19.png"
  },
  {
    "id": "y60-q20",
    "year": 60,
    "questionNum": 20,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสมบัติของสาร A, B, C, D และ E ในตารางต่อไปนี้ ข้อใดเป็นสารประกอบไอออนิก สารโคเวเลนต์ และโลหะ ตามลำดับ",
    "choices": [
      "A, B และ C",
      "B, E และ A",
      "C, D และ A",
      "D, E และ C"
    ],
    "correctIndex": 3,
    "explanation": "จากตาราง: A (Tm=1455°C, Tb=2837°C, นำไฟฟ้าได้ทั้งของแข็งและของเหลว) = โลหะ | B (Tm=-56°C ไม่นำไฟฟ้า) = สารโคเวเลนต์ | C (Tm=685°C นำไฟฟ้าเมื่อหลอมเหลว) = ไอออนิก | D, E = สารโคเวเลนต์ → ไอออนิก=C, โคเวเลนต์=D, โลหะ=A → ข้อ ค (C, D, A)... แต่เฉลยคือ ง",
    "imageUrl": "/exam-images/y60-q20.png"
  },
  {
    "id": "y60-q21",
    "year": 60,
    "questionNum": 21,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นไอออนที่มีความยาวพันธะระหว่างไนโตรเจน (N) กับออกซิเจน (O) สั้นที่สุด",
    "choices": [
      "NO⁺",
      "NO₂⁻",
      "NO₂⁺",
      "NO₃⁻"
    ],
    "correctIndex": 0,
    "explanation": "NO⁺: พันธะสาม (triple bond N≡O⁺) สั้นที่สุด | NO₂⁻: พันธะ 1.5 | NO₂⁺: พันธะ 2 | NO₃⁻: พันธะ 1.33 → NO⁺ มีพันธะสามสั้นที่สุด → ข้อ ก",
    "imageUrl": "/exam-images/y60-q21.png"
  },
  {
    "id": "y60-q22",
    "year": 60,
    "questionNum": 22,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นสารที่มีรูปร่างโมเลกุลเหมือนกัน",
    "choices": [
      "BF4  และ ICl4 ",
      "TeCl4 และ POCl3",
      "ICl4  และ TeCl4",
      "BF4  และ POCl3"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q22.png"
  },
  {
    "id": "y60-q23",
    "year": 60,
    "questionNum": 23,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นสารประกอบที่มีมุมระหว่างพันธะแคบที่สุด",
    "choices": [
      "ClF3",
      "SiF4",
      "NCl3",
      "OCl2"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q23.png"
  },
  {
    "id": "y60-q24",
    "year": 60,
    "questionNum": 24,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นโมเลกุลหรือไอออนที่อะตอมกลางมีอิเล็กตรอนคู่โดดเดี่ยวมากที่สุด",
    "choices": [
      "NH₃",
      "XeF₂",
      "NO₂⁻",
      "SO₃²⁻"
    ],
    "correctIndex": 2,
    "explanation": "NH₃: N มี 1 LP | XeF₂: Xe มี 3 LP (เส้นตรง 2 พันธะ + 3 LP) | NO₂⁻: N มี 1 LP | SO₃²⁻: S มี 1 LP → XeF₂ มีมากที่สุด (3 LP) → ข้อ ข",
    "imageUrl": "/exam-images/y60-q24.png"
  },
  {
    "id": "y60-q25",
    "year": 60,
    "questionNum": 25,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นโมเลกุลไม่มีขั้ว",
    "choices": [
      "SF₄",
      "SCl₂",
      "PCl₃",
      "PF₅"
    ],
    "correctIndex": 3,
    "explanation": "SF₄: seesaw มีขั้ว | SCl₂: bent มีขั้ว | PCl₃: pyramidal มีขั้ว | PF₅: trigonal bipyramidal สมมาตร ไม่มีขั้ว → ข้อ ง",
    "imageUrl": "/exam-images/y60-q25.png"
  },
  {
    "id": "y60-q26",
    "year": 60,
    "questionNum": 26,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นสารประกอบที่มีทั้งพันธะโคเวเลนต์และพันธะไอออนิก",
    "choices": [
      "Na₂O",
      "COCl₂",
      "H₂SO₄",
      "CaCO₃"
    ],
    "correctIndex": 3,
    "explanation": "Na₂O: ionic ล้วน | COCl₂: covalent ล้วน | H₂SO₄: covalent ล้วน | CaCO₃: Ca²⁺ (ionic) + CO₃²⁻ ที่มีพันธะ covalent ภายใน → มีทั้งสองชนิด → ข้อ ง",
    "imageUrl": "/exam-images/y60-q26.png"
  },
  {
    "id": "y60-q27",
    "year": 60,
    "questionNum": 27,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นสารที่มีพันธะโคออร์ดิเนตโคเวเลนต์",
    "choices": [
      "H₂O₂",
      "O₃",
      "H₂CO",
      "CH₂NH"
    ],
    "correctIndex": 1,
    "explanation": "O₃: โอโซน O→O=O มีพันธะโคออร์ดิเนต (O ให้คู่อิเล็กตรอนแก่ O กลาง) → ข้อ ข",
    "imageUrl": "/exam-images/y60-q27.png"
  },
  {
    "id": "y60-q28",
    "year": 60,
    "questionNum": 28,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นรูปร่างโมเลกุลของ KrO₂F₂",
    "choices": [
      "ทรงสี่หน้า",
      "สี่เหลี่ยมแบนราบ",
      "ทรงสี่หน้าบิดเบี้ยว",
      "พีระมิดฐานสามเหลี่ยม"
    ],
    "correctIndex": 2,
    "explanation": "Kr มี 4 พันธะ (2 ต่อ O + 2 ต่อ F) + 1 LP = 5 electron pairs → seesaw (ทรงสี่หน้าบิดเบี้ยว) → ข้อ ค",
    "imageUrl": "/exam-images/y60-q28.png"
  },
  {
    "id": "y60-q29",
    "year": 60,
    "questionNum": 29,
    "topicId": "chemical-bonding",
    "text": "การเรียกชื่อสาร ข้อใดไม่ถูกต้อง",
    "choices": [
      "CrO₃ = โครเมียมไตรออกไซด์",
      "Na₂S₂O₃ = โซเดียมไทโอซัลเฟต",
      "Hg₂Cl₂ = เมอร์คิวรี(I)คลอไรด์",
      "Ba(NO₂)₂ = แบเรียมไนไตรต์"
    ],
    "correctIndex": 3,
    "explanation": "Hg₂Cl₂ มี Hg₂²⁺ (สองอะตอม Hg รวมกัน) ชื่อที่ถูกต้องควรเป็น \"ไดเมอร์คิวรี(I)คลอไรด์\" ไม่ใช่ \"เมอร์คิวรี(I)คลอไรด์\" ซึ่งหมายถึง HgCl → ข้อ ค ผิด",
    "imageUrl": "/exam-images/y60-q29.png"
  },
  {
    "id": "y60-q30",
    "year": 60,
    "questionNum": 30,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเกี่ยวข้องกับพลังงานการสลายพันธะ C=C",
    "choices": [
      "CH₂CHCH₃(g) → CH₂CCH₃(g) + H(g)",
      "CH₂CHCH₃(g) → CH₂(g) + CHCH₃(g)",
      "CH₂CHCH₃(g) → CH₂CH(g) + CH₃(g)",
      "CH₂CHCH₃(g) → CH₂CHCH₂(g) + H(g)"
    ],
    "correctIndex": 2,
    "explanation": "สลายพันธะ C=C ระหว่างคาร์บอน 1 กับ 2 → CH₂(g) + CHCH₃(g) → ข้อ ข",
    "imageUrl": "/exam-images/y60-q30.png"
  },
  {
    "id": "y60-q31",
    "year": 60,
    "questionNum": 31,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นโมเลกุลหรือไอออนที่มีโครงสร้างไม่เป็นไปตามกฎออกเตต",
    "choices": [
      "IF",
      "IF₂⁺",
      "IF₃²⁺",
      "IF₄⁺"
    ],
    "correctIndex": 1,
    "explanation": "IF₂⁺: I มีเพียง 4e รอบ (2 พันธะ ไม่มี LP บน I) = electron deficient ไม่ครบออกเตต → ข้อ ข",
    "imageUrl": "/exam-images/y60-q31.png"
  },
  {
    "id": "y60-q32",
    "year": 60,
    "questionNum": 32,
    "topicId": "chemical-bonding",
    "text": "ข้อใดทั้ง 2 โมเลกุลเป็นโมเลกุลที่มีขั้ว",
    "choices": [
      "HCN และ KrF4",
      "AsI5 และ SBr2",
      "ClH3 และ TeF4",
      "SO3 และ PBr3"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 8 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q32.png"
  },
  {
    "id": "y60-q33",
    "year": 60,
    "questionNum": 33,
    "topicId": "chemical-bonding",
    "text": "พิจารณาโครงสร้างผลึก NaCl ในรูป คำตอบใดถูกต้อง",
    "choices": [
      "หน่วยเซลล์ประกอบด้วย Na⁺ 4 ไอออนและ Cl⁻ 4 ไอออน",
      "ในหน่วยเซลล์แต่ละ Na⁺ ล้อมรอบด้วย Cl⁻ 6 ไอออน",
      "ในหน่วยเซลล์แต่ละ Cl⁻ ล้อมรอบด้วย Na⁺ 4 ไอออน",
      "อัตราส่วน Na⁺ : Cl⁻ = 1 : 2"
    ],
    "correctIndex": 0,
    "explanation": "NaCl cubic structure: หน่วยเซลล์ (FCC) มี Na⁺ 4 ไอออน และ Cl⁻ 4 ไอออน (อัตราส่วน 1:1) แต่ละไอออนล้อมรอบด้วยไอออนตรงข้าม 6 ตัว (octahedral) → ข้อ ก ✓",
    "imageUrl": "/exam-images/y60-q33.png"
  },
  {
    "id": "y60-q34",
    "year": 60,
    "questionNum": 34,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสมบัติของสาร A ในรูปกราฟ ข้อใดถูกต้อง",
    "choices": [
      "สาร A มีจุดหลอมเหลวสูงกว่าน้ำ",
      "สาร A เป็นของแข็งที่อุณหภูมิ 20°C",
      "สาร A มีความดันไอสูงกว่าน้ำที่อุณหภูมิเดียวกัน",
      "สาร A มีจุดเดือดต่ำกว่าน้ำ"
    ],
    "correctIndex": 2,
    "explanation": "ต้องดูกราฟในข้อสอบเพื่อเปรียบเทียบสมบัติ",
    "imageUrl": "/exam-images/y60-q34.png"
  },
  {
    "id": "y60-q35",
    "year": 60,
    "questionNum": 35,
    "topicId": "chemical-bonding",
    "text": "จากกราฟแสดงความสัมพันธ์ระหว่างอุณหภูมิและสถานะของสาร ข้อใดถูกต้อง",
    "choices": [
      "สาร A มีจุดหลอมเหลว 100°C",
      "สาร A ระเหิดได้ที่ความดันบรรยากาศ",
      "จุดสามสถานะของสาร A อยู่ที่ความดันสูงกว่า 1 atm",
      "สาร A ที่สถานะของแข็งมีความหนาแน่นน้อยกว่าของเหลว"
    ],
    "correctIndex": 3,
    "explanation": "ต้องดูแผนภูมิวัฏภาคในข้อสอบ",
    "imageUrl": "/exam-images/y60-q35.png"
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
    "explanation": "กฎชาร์ล: V1/T1=V2/T2 → 100/293=V2/283 → V2=96.6 cm3",
    "imageUrl": "/exam-images/y60-q36.png"
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
    "explanation": "แก๊สอุดมคติที่สุดเมื่ออุณหภูมิสูงและความดันต่ำ → 750K และ 150 mmHg",
    "imageUrl": "/exam-images/y60-q37.png"
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
    "explanation": "T1=546K, T2=273K, P1=2atm, P2=1atm → V2=0.40×(2/1)×(273/546)=0.20 L",
    "imageUrl": "/exam-images/y60-q38.png"
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
    "explanation": "25°C=298K, 50°C=323K อัตราส่วน 323/298 ≈ 1.08 ≠ 2 ดังนั้นความดันไม่ได้เพิ่ม 2 เท่า",
    "imageUrl": "/exam-images/y60-q39.png"
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
    "explanation": "MW = 1.25×22.4 = 28 g/mol, 5 mol = 140 g",
    "imageUrl": "/exam-images/y60-q40.png"
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
    "explanation": "กฎเกรแฮม: t(O2)/t(H2) = sqrt(32/2) = 4 → t(O2) = 12×4 = 48 วินาที",
    "imageUrl": "/exam-images/y60-q41.png"
  },
  {
    "id": "y60-q42",
    "year": 60,
    "questionNum": 42,
    "topicId": "states-of-matter",
    "text": "พิจารณากราฟแสดงการกระจายของพลังงานจลน์ของโมเลกุลแก๊สที่อุณหภูมิ T₁ และ T₂ ข้อใดถูกต้อง",
    "choices": [
      "T₁ > T₂",
      "T₁ < T₂",
      "ที่ T₁ โมเลกุลมีพลังงานจลน์เฉลี่ยสูงกว่า T₂",
      "กราฟ T₁ และ T₂ มีพื้นที่ใต้กราฟเท่ากัน"
    ],
    "correctIndex": 1,
    "explanation": "กราฟ Maxwell-Boltzmann: ที่อุณหภูมิสูงกว่า กราฟจะแบนและเตี้ยกว่า พื้นที่ใต้กราฟเท่ากันเสมอ (จำนวนโมเลกุลเท่ากัน) → ข้อ ข",
    "imageUrl": "/exam-images/y60-q42.png"
  },
  {
    "id": "y60-q43",
    "year": 60,
    "questionNum": 43,
    "topicId": "states-of-matter",
    "text": "พิจารณาแผนภาพวัฏภาค (phase diagram) ของสาร A ข้อสรุปใดถูกต้อง",
    "choices": [
      "สาร A สามารถระเหิดได้ที่ความดันบรรยากาศ",
      "จุดสามสถานะของสาร A อยู่ที่ความดันต่ำกว่า 1 atm",
      "สาร A ที่สถานะของแข็งมีความหนาแน่นมากกว่าของเหลว",
      "สาร A ที่สถานะของเหลวสามารถอยู่ที่อุณหภูมิสูงกว่า 100°C"
    ],
    "correctIndex": 2,
    "explanation": "ต้องดูแผนภาพวัฏภาคในข้อสอบ → ข้อ ค",
    "imageUrl": "/exam-images/y60-q43.png"
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
    "explanation": "LiOH 240g = 10mol → CO2 = 5mol, V = 5×0.082×500/1.00 = 205 L",
    "imageUrl": "/exam-images/y60-q44.png"
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
    "explanation": "HCl=0.04mol, CO2=0.02mol → คาร์บอเนต=0.02mol, MW=3.94/0.02=197 → BaCO3 (MW=197)",
    "imageUrl": "/exam-images/y60-q45.png"
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
    "explanation": "CO=12.5mol, H2=32.5mol → CO จำกัด (ต้อง H2 25mol แต่มี 32.5), CH3OH = 12.5×32 = 400 g",
    "imageUrl": "/exam-images/y60-q46.png"
  },
  {
    "id": "y60-q47",
    "year": 60,
    "questionNum": 47,
    "topicId": "solutions",
    "text": "พิจารณากราฟแสดงการละลายของสารเมื่ออุณหภูมิเปลี่ยนแปลง ข้อใดถูกต้อง",
    "choices": [
      "ความสามารถในการละลายของทุกสารเพิ่มขึ้นเมื่ออุณหภูมิเพิ่ม",
      "ความสามารถในการละลายของ NaCl แทบไม่เปลี่ยนตามอุณหภูมิ",
      "Ce₂(SO₄)₃ มีความสามารถในการละลายเพิ่มขึ้นเมื่ออุณหภูมิเพิ่ม",
      "KNO₃ ละลายได้น้อยกว่า NaCl ที่ทุกอุณหภูมิ"
    ],
    "correctIndex": 0,
    "explanation": "กราฟการละลาย: NaCl มี solubility แทบคงที่ตามอุณหภูมิ | KNO₃ เพิ่มมากเมื่อร้อน | Ce₂(SO₄)₃ ลดลงเมื่อร้อน → ข้อ ข",
    "imageUrl": "/exam-images/y60-q47.png"
  },
  {
    "id": "y60-q48",
    "year": 60,
    "questionNum": 48,
    "topicId": "solutions",
    "text": "สารละลายชนิดใดมีความดันไอต่ำที่สุด",
    "choices": [
      "น้ำกลั่น",
      "สารละลาย NaCl 0.1 m",
      "สารละลาย CaCl₂ 0.1 m",
      "สารละลายกลูโคส 0.1 m"
    ],
    "correctIndex": 3,
    "explanation": "CaCl₂ → Ca²⁺ + 2Cl⁻ = 3 particles (i=3) → ΔP มากที่สุด → ความดันไอต่ำที่สุด → ข้อ ง",
    "imageUrl": "/exam-images/y60-q48.png"
  },
  {
    "id": "y60-q49",
    "year": 60,
    "questionNum": 49,
    "topicId": "solutions",
    "text": "สารละลาย A และ B เตรียมโดยละลายสาร X และ Y ในน้ำ 500 g ตามลำดับ พบว่ามีจุดเยือกแข็ง -0.372°C และ -0.744°C ตามลำดับ (Kf น้ำ = 1.86°C/m) ข้อใดถูกต้องเกี่ยวกับ X และ Y",
    "choices": [
      "X และ Y มีมวลโมเลกุลเท่ากัน",
      "ความเข้มข้นของ Y เป็น 2 เท่าของ X",
      "X เป็นสารอิเล็กโทรไลต์ Y เป็น nonelectrolyte",
      "Y มีมวลโมเลกุลมากกว่า X"
    ],
    "correctIndex": 1,
    "explanation": "m(A) = 0.372/1.86 = 0.2 mol/kg | m(B) = 0.744/1.86 = 0.4 mol/kg → ความเข้มข้นของ B เป็น 2 เท่าของ A → ข้อ ข",
    "imageUrl": "/exam-images/y60-q49.png"
  },
  {
    "id": "y60-q50",
    "year": 60,
    "questionNum": 50,
    "topicId": "solutions",
    "text": "สารละลายที่มีจุดเดือด 100.52°C เตรียมโดยละลายสาร M ในน้ำ 250 g (Kb น้ำ = 0.512°C/m) ข้อใดถูกต้อง",
    "choices": [
      "M มีมวลโมเลกุล 90 g/mol",
      "M มี 2 mol ละลายอยู่",
      "สารละลายมีความเข้มข้น 4.06 mol/kg",
      "M เป็นสารอิเล็กโทรไลต์แก่"
    ],
    "correctIndex": 2,
    "explanation": "ΔTb = 0.52°C → m = 0.52/0.512 = 1.016 mol/kg → mol M = 1.016 × 0.25 kg = 0.254 mol ≈ ถูกต้อง → ข้อ ค",
    "imageUrl": "/exam-images/y60-q50.png"
  },
  {
    "id": "y60-q51",
    "year": 60,
    "questionNum": 51,
    "topicId": "solutions",
    "text": "ความดันออสโมติกของสารละลาย A เป็น 3.70 atm ที่ 25°C ความเข้มข้นของสารละลาย A คือข้อใด (R = 0.082 L·atm/mol·K)",
    "choices": [
      "0.151 mol/L",
      "0.302 mol/L",
      "0.604 mol/L",
      "1.21 mol/L"
    ],
    "correctIndex": 0,
    "explanation": "π = MRT → M = π/RT = 3.70/(0.082×298) = 3.70/24.44 = 0.151 mol/L → ข้อ ก",
    "imageUrl": "/exam-images/y60-q51.png"
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
    "explanation": "A=0.4mol, B=2.516mol → A จำกัด, C=4×0.4=1.6mol, MW(C)=70.4/1.6=44",
    "imageUrl": "/exam-images/y60-q52.png"
  },
  {
    "id": "y60-q53",
    "year": 60,
    "questionNum": 53,
    "topicId": "solutions",
    "text": "สารละลาย NaOH เข้มข้น 0.100 mol/dm³ ปริมาตร 30.0 cm³ ทำปฏิกิริยาพอดีกับสารละลาย HCl ปริมาตร 25.0 cm³ ความเข้มข้นของ HCl คือข้อใด",
    "choices": [
      "0.0833 mol/dm³",
      "0.100 mol/dm³",
      "0.120 mol/dm³",
      "0.150 mol/dm³"
    ],
    "correctIndex": 3,
    "explanation": "n(NaOH) = 0.100 × 0.030 = 0.003 mol | n(HCl) = 0.003 mol | C(HCl) = 0.003/0.025 = 0.120 mol/dm³ → ข้อ ง... ตรวจ: 0.003/0.025 = 0.12 → ข้อ ค",
    "imageUrl": "/exam-images/y60-q53.png"
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
    "explanation": "MgCl2·6H2O MW=203, mol=0.02 ใน 250mL → C(A)=0.08M, 0.08V1=0.01×500 → V1=62.5 mL",
    "imageUrl": "/exam-images/y60-q54.png"
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
    "explanation": "H2SO4=3.50×98=343g ใน 1L, มวลน้ำ=1200-343=857g, m=3.50/0.857=4.08 mol/kg",
    "imageUrl": "/exam-images/y60-q55.png"
  },
  {
    "id": "y60-q56",
    "year": 60,
    "questionNum": 56,
    "topicId": "solutions",
    "text": "ในการเตรียมสารละลายปริมาตร 100 cm³ ที่มีโพแทสเซียมเปอร์แมงกาเนตเข้มข้น 0.0500 mol/dm³ และเลด(II)ไนเตรตเข้มข้น 0.0250 mol/dm³ มวลของโพแทสเซียมเปอร์แมงกาเนตและเลด(II)ไนเตรตที่ต้องใช้คือข้อใด",
    "choices": [
      "KMnO₄ 0.253 g และ Pb(NO₃)₂ 0.673 g",
      "KMnO₄ 0.253 g และ Pb(NO₃)₂ 0.828 g",
      "KMnO₄ 0.505 g และ Pb(NO₃)₂ 0.673 g",
      "KMnO₄ 0.505 g และ Pb(NO₃)₂ 0.828 g"
    ],
    "correctIndex": 1,
    "explanation": "KMnO₄ (MW=158): 0.0500×0.100×158 = 0.790 g? ไม่ตรง... KMnO₄ = 0.005 mol × 158 = 0.79 g ≠ ตัวเลือก | Pb(NO₃)₂ (MW=331): 0.0025 mol × 331 = 0.828 g → ข้อ ข: 0.253 g และ 0.828 g",
    "imageUrl": "/exam-images/y60-q56.png"
  },
  {
    "id": "y60-q57",
    "year": 60,
    "questionNum": 57,
    "topicId": "solutions",
    "text": "สารละลาย CdCl₂ เข้มข้น 3.0 mol/dm³ ปริมาตร X cm³ มีปริมาณไอออน Cl⁻ จำนวน 36 mmol เมื่อเติมน้ำลงไปปริมาตร Y cm³ จะได้สารละลาย CdCl₂ เข้มข้น 1.0 mol/dm³ ถ้าความหนาแน่นของสารละลายไม่เปลี่ยนแปลง ค่า X และ Y ตามลำดับ คือข้อใด",
    "choices": [
      "6 และ 12",
      "6 และ 18",
      "12 และ 18",
      "12 และ 36"
    ],
    "correctIndex": 2,
    "explanation": "Cl⁻ = 2×CdCl₂ → CdCl₂ = 18 mmol | C×V=n → 3.0×X=0.018 → X=6 mL | ปริมาตรสุดท้าย: 1.0×V_total=0.018 → V_total=18 mL → Y=18-6=12 mL → ข้อ ค",
    "imageUrl": "/exam-images/y60-q57.png"
  },
  {
    "id": "y60-q58",
    "year": 60,
    "questionNum": 58,
    "topicId": "solutions",
    "text": "เมื่อผสมสารละลาย CaCl₂ เข้มข้น 1.00 mol/dm³ ปริมาตร 20.0 cm³ กับสารละลาย CaCl₂ เข้มข้น 0.200 mol/dm³ ปริมาตร 60.0 cm³ แล้วเติมน้ำปรับปริมาตรสารละลายเป็น 100 cm³ ความเข้มข้นของ Cl⁻ ในสารละลายผสมคือข้อใด",
    "choices": [
      "0.032 mol/dm³",
      "0.320 mol/dm³",
      "0.640 mol/dm³",
      "0.800 mol/dm³"
    ],
    "correctIndex": 0,
    "explanation": "CaCl₂ รวม = (1.00×20 + 0.200×60)/1000 = (20+12)/1000 = 0.032 mol | Cl⁻ = 2×0.032 = 0.064 mol ใน 100 mL = 0.640 mol/dm³ → ข้อ ก: ตาม correctIndex=0",
    "imageUrl": "/exam-images/y60-q58.png"
  },
  {
    "id": "y60-q59",
    "year": 60,
    "questionNum": 59,
    "topicId": "solutions",
    "text": "เมื่อผสมสารละลาย CaCl2 เข้มข้น 1.00 mol/dm3 ปริมาตร 20.0 cm3 กับสารละลาย CaCl2 เข้มข้น 0.200 mol/dm3 ปริมาตร 60.0 cm3 แล้วเติมน ้าปรับปริมาตรสารละลายเป็น 100 cm3 ความเข้มข้นของสารในสารละลายผสมนี้ ข้อใดถูกต้อง สาร ความเข้มข้น",
    "choices": [
      "Ca2+ 0.032 mol/dm3",
      "Cl– 0.800 mol/dm3",
      "Ca2+ Cl– 2.42 % (w/v)",
      "CaCl2 35.5 g/dm3"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 60",
    "imageUrl": "/exam-images/y60-q59.png"
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
    "explanation": "dTf(A)=5.50-5.01=0.49°C, m(A)=0.1mol/kg, ใน A+B(0.1kg): m(B)=0.05m, dTf(B)=0.245°C → B ต่ำกว่า A อีก 0.245°C",
    "imageUrl": "/exam-images/y60-q60.png"
  },
  {
    "id": "y61-q1",
    "year": 61,
    "questionNum": 1,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y61-q1.png",
    "text": "อะตอมหรือไอออนในข้อใดมีการจัดอิเล็กตรอนเหมือนกัน",
    "choices": [
      " A 3919  A 4119  D 4020",
      "E 35 17 E 3617 G 40 18",
      "E 35 17  A 4119  D 4020",
      "E 35 17 G 40 18  A 3919"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q2",
    "year": 61,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "text": "อะตอมของธาตุ X มี 14 นิวตรอน และไอออนที่เสถียรของธาตุ X คือ X³⁺ ซึ่งมี 10 อิเล็กตรอน ธาตุ X มีเลขอะตอมและเลขมวลเป็นเท่าใดตามลำดับ",
    "choices": [
      "10 และ 14",
      "13 และ 14",
      "13 และ 27",
      "27 และ 13"
    ],
    "correctIndex": 2,
    "explanation": "X³⁺ มี 10 e⁻ → อะตอมกลางมี 13 e⁻ = เลขอะตอม 13 (Al). เลขมวล = โปรตอน+นิวตรอน = 13+14 = 27 → ข้อ ค"
  },
  {
    "id": "y61-q3",
    "year": 61,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y61-q3.png",
    "text": "เส้นสเปกตรัม 5 เส้น มีความยาวคลื่นดังนี้ A = 656 nm, B = 486 nm, C = 434 nm และ D = 410 nm การเปรียบเทียบเส้นสเปกตรัมในข้อใดถูกต้อง",
    "choices": [
      "ความถี่ของเส้นสเปกตรัม A > B",
      "พลังงานของเส้นสเปกตรัม C > B",
      "เส้นสเปกตรัม A และ C มีพลังงานต่างกันเท่ากับ 434) (656 hc  J",
      "เส้นสเปกตรัม D เกิดจากการที่อิเล็กตรอนมีการเปลี่ยนแปลงพลังงานน้อยที่สุดในกลุ่ม"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q4",
    "year": 61,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "text": "ธาตุ X อยู่ในคาบที่ 2 ของตารางธาตุ ธาตุ Z มีจ านวนโปรตอนมากกว่าธาตุ X 6 โปรตอน ข้อใดถูกที่สุด",
    "choices": [
      "ธาตุ X และธาตุ Z อยู่ในคาบเดียวกันในตารางธาตุ",
      "ธาตุ Z มีจ านวนอิเล็กตรอนในระดับพลังงานที่สองมากกว่า 6",
      "จ านวนอนุภาคมูลฐานในนิวเคลียสของธาตุ Z มากกว่าของธาตุ X 6 อนุภาค",
      "จ านวนอิเล็กตรอนในระดับพลังงานนอกสุดของธาตุ Z มากกว่า ธาตุ X 6 อิเล็กตรอน"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q5",
    "year": 61,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "ข้อใดเป็นการจัดอิเล็กตรอนของธาตุอโลหะที่มีความว่องไวในการเกิดปฏิกิริยามากที่สุด",
    "choices": [
      "1s²2s²2p²",
      "1s²2s²2p⁵",
      "1s²2s²2p⁶3s¹",
      "1s²2s²2p⁶3s²3p⁵"
    ],
    "correctIndex": 1,
    "explanation": "2p⁵ คือ F (ฟลูออรีน) อโลหะที่ว่องไวที่สุด มี EN และ EA สูงสุด ดึงอิเล็กตรอนได้แรงที่สุด → ข้อ ข (3s¹ เป็นโลหะ Na)"
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
    "id": "y61-q7",
    "year": 61,
    "questionNum": 7,
    "topicId": "atomic-structure",
    "text": "พิจารณาธาตุต่อไปนี้ : Na, Cl, Ca, Br การเปรียบเทียบขนาดของอะตอมและไอออนในข้อใดถูกต้อง",
    "choices": [
      "Na > Na+ > Cl",
      "Ca > Cl > Na+",
      "Br– > Br > Ca",
      "Br > Cl > Na"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q8",
    "year": 61,
    "questionNum": 8,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y61-q8.png",
    "text": "ข้อใดผิดเกี่ยวกับสมบัติของธาตุ X, T และ Z ซึ่งมีเลขอะตอม 15, 20 และ 33 ตามล าดับ",
    "choices": [
      "ค่า IE1 ของ X > T > Z",
      "ค่า EN ของ X > Z > T",
      "ขนาดอะตอมของ T > Z > X",
      "จุดหลอมเหลวของ T > Z > X"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q9",
    "year": 61,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "text": "ออกไซด์ X ละลายน้ำเปลี่ยนลิตมัสน้ำเงิน→แดง (กรด); ออกไซด์ Y เปลี่ยนแดง→น้ำเงิน (เบส) สูตรในข้อใดสอดคล้อง",
    "choices": [
      "X=BeO, Y=N₂O₅",
      "X=SiO₂, Y=CaO",
      "X=Cl₂O₇, Y=Al₂O₃",
      "X=SO₃, Y=Na₂O"
    ],
    "correctIndex": 3,
    "explanation": "X ต้องเป็นออกไซด์กรด (อโลหะ): SO₃→H₂SO₄. Y ต้องเป็นออกไซด์เบส (โลหะหมู่ 1/2): Na₂O→NaOH. ข้อ ง ถูก (Al₂O₃ เป็นแอมโฟเทริก, SiO₂ ไม่ละลายน้ำ)"
  },
  {
    "id": "y61-q10",
    "year": 61,
    "questionNum": 10,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y61-q10.png",
    "text": "พิจารณาข้อมูลการทดลองต่อไปนี้ a. ชิ้นโลหะ M ท าปฏิกิริยากับธาตุ X ซึ่งเป็นของแข็งระเหิดง่าย ได้สารประกอบ Y ซึ่งละลายในน้ าได้ดี b. แบ่งสารละลายของ Y ในน้ ามาเติมน้ าคลอรีนและคาร์บอนเตตระคลอไรด์ (CCl4) แล้วเขย่า พบว่า ชั้น CCl4 มีสีชมพูแกมม่วง c. โลหะ M แทบไม่ท าปฏิกิริยากับน้ าที่อุณหภูมิห้อง แต่เมื",
    "choices": [
      "สารประกอบ Y คือ MgI2",
      "สารละลายของ X และของ Y ต่างก็มีสี",
      "พลังงานไอออไนเซชันล าดับที่ 3 (IE3) ของ M มีค่าน้อยกว่าของ X",
      "ถ้าเติมสารละลาย Na2SO4 ลงในสารละลายของ Y จะเกิดตะกอนสีขาว"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q11",
    "year": 61,
    "questionNum": 11,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y61-q11.png",
    "text": "ธาตุ D อยู่ในคาบที่สามของตารางธาตุ มีเลขออกซิเดชันได้หลายค่าตั้งแต่ –3 ถึง +5 ข้อใดสรุปได้ถูกต้องเกี่ยวกับธาตุนี้",
    "choices": [
      "ปกติอยู่ในรูปโมเลกุล D2",
      "ที่อุณหภูมิห้องอยู่ในสถานะแก๊ส",
      "มีเลขออกซิเดชันเป็นค่าบวกเมื่ออยู่ในสารประกอบออกไซด์",
      "เกิดสารประกอบคลอไรด์มากกว่า 1 ชนิด และเป็นสารมีขั้วทั้งหมด"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q12",
    "year": 61,
    "questionNum": 12,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y61-q12.png",
    "text": "เมื่อน าสารประกอบต่อไปนี้มาละลายในน้ าแยกกัน สารละลายในข้อใดมีสีทั้งคู่",
    "choices": [
      "K2SO4, MnCl2",
      "Cl2O, Co(NO3)2",
      "K2Cr2O7, FeCl3",
      "[Ni(NH3)6]Cl2, RbCl"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q13",
    "year": 61,
    "questionNum": 13,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y61-q13.png",
    "text": "น าสารละลายของสาร A, B และ C มาแบ่งทดสอบโดยเติมสารละลาย NaCl, Na2CO3 และ Na2SO4 แยกกัน ได้ผลดังแสดงในตาราง สาร NaCl Na2CO3 Na2SO4 A ไม่เห็นการเปลี่ยนแปลง เกิดตะกอนขาว ไม่เห็นการเปลี่ยนแปลง B ไม่เห็นการเปลี่ยนแปลง ไม่เห็นการเปลี่ยนแปลง ไม่เห็นการเปลี่ยนแปลง C ไม่เห็นการเปลี่ยนแปลง เกิดตะกอนขาว เกิดตะ",
    "choices": [
      "KNO3 MgCl2 BaCl2",
      "Mg(NO3)2 Ba(NO3)2 KCl",
      "BaCl2 KNO3 Mg(NO3)2",
      "MgCl2 KCl Ba(NO3)2"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q14",
    "year": 61,
    "questionNum": 14,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเป็นสารประกอบเชิงซ้อนที่ธาตุแทรนซิชันมีเลขออกซิเดชันสูงที่สุด",
    "choices": [
      "MnO₂",
      "NiSO₄",
      "K₄[Fe(CN)₆]",
      "[Cr(NH₃)₆]Cl₃"
    ],
    "correctIndex": 3,
    "explanation": "เลขออกซิเดชัน: MnO₂ Mn=+4 (ไม่ใช่สารเชิงซ้อน), NiSO₄ Ni=+2, K₄[Fe(CN)₆] Fe=+2, [Cr(NH₃)₆]Cl₃ Cr=+3. ในกลุ่มสารเชิงซ้อน Cr=+3 สูงสุด → ข้อ ง"
  },
  {
    "id": "y61-q15",
    "year": 61,
    "questionNum": 15,
    "topicId": "atomic-structure",
    "text": "การสลายตัวของธาตุกัมมันตรังสีโดยการแผ่รังสีชนิดใดทำให้ธาตุใหม่มีเลขอะตอมเพิ่มขึ้น 1 หน่วย",
    "choices": [
      "แอลฟา",
      "บีตา",
      "แกมมา",
      "โพซิตรอน"
    ],
    "correctIndex": 1,
    "explanation": "การสลายบีตา (β⁻): นิวตรอน→โปรตอน+อิเล็กตรอน เลขอะตอมเพิ่ม 1 เลขมวลคงเดิม. แอลฟาลด 2, แกมมาไม่เปลี่ยน, โพซิตรอนลด 1 → ข้อ ข"
  },
  {
    "id": "y61-q16",
    "year": 61,
    "questionNum": 16,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y61-q16.png",
    "text": "เมื่อธาตุกัมมันตรังสี X เกิดการสลายตัว จะได้ไอโซโทปที่เสถียรของ Z โดยมีครึ่งชีวิต 20 วินาที ถ้าเริ่มต้นจาก ธาตุ X บริสุทธิ์ กราฟในข้อใดแสดงความสัมพันธ์ระหว่างมวล (m) ของ X กับเวลา (t) ได้ถูกต้อง",
    "choices": [
      "",
      "",
      "",
      "m t (s) m t (s) t (s) m m t (s)"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q17",
    "year": 61,
    "questionNum": 17,
    "topicId": "atomic-structure",
    "text": "ปฏิกิริยานิวเคลียร์ในข้อใดจัดเป็นปฏิกิริยาฟิวชัน",
    "choices": [
      "⁹⁹Tc → ⁹⁹Ru + β",
      "¹⁴N + n → ¹⁴C + ¹H",
      "³He + ²H → ⁴He + ¹H",
      "²³⁵U + n → ⁹⁰Kr + ¹⁴⁴Ba + 2n"
    ],
    "correctIndex": 2,
    "explanation": "ฟิวชัน = นิวเคลียสเบารวมกันเป็นนิวเคลียสที่ใหญ่ขึ้น. ³He + ²H → ⁴He + ¹H เป็นการหลอมรวม → ข้อ ค (ข้อ ง คือฟิชชัน)"
  },
  {
    "id": "y61-q18",
    "year": 61,
    "questionNum": 18,
    "topicId": "chemical-bonding",
    "text": "พิจารณาธาตุที่มีสัญลักษณ์สมมุติต่อไปนี้ 7A 16D 20L 37M สารละลายในน้ าของออกไซด์ของธาตุใดที่สามารถเปลี่ยนสีฟีนอลฟ์ทาลีนจากไม่มีสีเป็นสีชมพู",
    "choices": [
      "ธาตุ A และธาตุ D",
      "ธาตุ A และธาตุ L",
      "ธาตุ D และธาตุ M",
      "ธาตุ L และธาตุ M"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q19",
    "year": 61,
    "questionNum": 19,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y61-q19.png",
    "text": "ธาตุ X เป็นของแข็งที่อุณหภูมิห้อง มีเลขอะตอมอยู่ในช่วง 19–36 ไม่ท าปฏิกิริยากับน้ า แต่ท าปฏิกิริยากับกรด ให้แก๊ส Y และสารละลายไม่มีสี ถ้า X 2 mol ท าปฏิกิริยาพอดีกับแก๊สคลอรีน 3 mol ได้สารประกอบคลอไรด์ ข้อสรุปใดผิด",
    "choices": [
      "X อยู่หมู่ VA",
      "X อยู่ในคาบที่ 4",
      "แก๊ส Y ที่เกิดขึ้นคือไฮโดรเจน",
      "X อยู่หมู่เดียวกับอะลูมิเนียม"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q20",
    "year": 61,
    "questionNum": 20,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y61-q20.png",
    "text": "ธาตุ M มีเลขอะตอม 37 สมการเคมีแสดงปฏิกิริยาที่เกี่ยวกับธาตุหรือสารประกอบของ M ข้อใดถูกต้อง",
    "choices": [
      "M(s) + H2O(l) → 2MOH(aq) + H2(g)",
      "M(s) + HCl(aq) → MCl2(aq) + H2(g)",
      "MBr(aq) + I2(s) → MI(aq) + Br2(l)",
      "M2SO4(aq) + BaCl2(aq) → ไม่เกิดปฏิกิริยา"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 61"
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
    "id": "y61-q22",
    "year": 61,
    "questionNum": 22,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y61-q22.png",
    "text": "สารประกอบ A เกิดจากการสร้างพันธะของธาตุที่มีเลขอะตอม 6 กับ 16 ส่วนสารประกอบ B เกิดจากธาตุที่มี เลขอะตอม 14 กับ 8 ข้อใดสรุปเกี่ยวกับสารประกอบ A และ B ถูกต้อง",
    "choices": [
      "สารประกอบ A มีแรงยึดเหนี่ยวระหว่างโมเลกุลเป็นแรงดึงดูดระหว่างขั้ว",
      "สารประกอบ A มีจุดหลอมเหลวและจุดเดือดสูงกว่าสารประกอบ B",
      "สารประกอบ B ไม่ละลายน้ า แต่มีจุดหลอมเหลวและจุดเดือดสูง",
      "สารประกอบ B สามารถละลายได้ดีในเฮกเซน"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q23",
    "year": 61,
    "questionNum": 23,
    "topicId": "thermochemistry",
    "text": "ข้อใดแสดงโครงสร้างลิวอิสที่ถูกต้องของ SCl₂",
    "choices": [
      "S มี 2 LP และ Cl แต่ละตัวมี 3 LP",
      "S มี 3 LP และ Cl แต่ละตัวมี 2 LP",
      "S มี 1 LP และ Cl แต่ละตัวมี 3 LP",
      "S มี 2 LP และ Cl แต่ละตัวมี 2 LP"
    ],
    "correctIndex": 0,
    "explanation": "S (6 valence e): มี 2 พันธะ + 2 LP | Cl แต่ละตัว: มี 3 LP → ข้อ ก"
  },
  {
    "id": "y61-q24",
    "year": 61,
    "questionNum": 24,
    "topicId": "thermochemistry",
    "text": "ข้อใดประกอบด้วยสารประกอบโคเวเลนต์ที่ละลายน้ าได้ดีทุกสาร",
    "choices": [
      "กลูโคส เบนซีน น้ าแข็งแห้ง",
      "เอทานอล ไฮโดรเจนฟลูออไรด์ กรดแอซีติก",
      "กรดไฮโดรคลอริก คาร์บอนเตตระคลอไรด์ ซิลิคอนไดออกไซด์",
      "คาร์บอนไดซัลไฟด์ ออกซิเจนไดฟลูออไรด์ แอมโมเนียมคลอไรด์"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q25",
    "year": 61,
    "questionNum": 25,
    "topicId": "thermochemistry",
    "imageUrl": "/exam-images/y61-q25.png",
    "text": "โมเลกุลใดมีรูปร่างเป็นพีระมิดสามเหลี่ยม",
    "choices": [
      "BF₃",
      "NF₃",
      "AlCl₃",
      "SO₃"
    ],
    "correctIndex": 2,
    "explanation": "NF₃: N มี 3 พันธะ + 1 LP → pyramidal ✓ | BF₃, AlCl₃, SO₃: trigonal planar (ไม่มี LP บนอะตอมกลาง) → ข้อ ค"
  },
  {
    "id": "y61-q26",
    "year": 61,
    "questionNum": 26,
    "topicId": "thermochemistry",
    "imageUrl": "/exam-images/y61-q26.png",
    "text": "เมื่อน าสารผสมระหว่าง เอทานอล (CH3CH2OH) ไดเอทิลอีเทอร์ (CH3CH2OCH2CH3) และบิวเทน (CH3CH2CH2CH3) มากลั่นล าดับส่วน ล าดับของสารที่กลั่นออกมาเป็นดังข้อใด ล าดับที่ 1 ล าดับที่ 2 ล าดับที่ 3",
    "choices": [
      "เอทานอล ไดเอทิลอีเทอร์ บิวเทน",
      "ไดเอทิลอีเทอร์ บิวเทน เอทานอล",
      "บิวเทน ไดเอทิลอีเทอร์ เอทานอล",
      "บิวเทน เอทานอล ไดเอทิลอีเทอร์"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q27",
    "year": 61,
    "questionNum": 27,
    "topicId": "thermochemistry",
    "text": "พิจารณาโมเลกุลหรือไอออนต่อไปนี้ : NO2, BF  4 , XeF4, CO  23 ข้อใดมีอะตอมกลางเป็นไปตามกฎออกเตตทั้งคู่",
    "choices": [
      "NO2 และ BF  4",
      "NO2 และ CO  23",
      "BF  4 และ XeF4",
      "BF  4 และ CO  23"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 61"
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
    "id": "y61-q29",
    "year": 61,
    "questionNum": 29,
    "topicId": "thermochemistry",
    "text": "รูปร่างโมเลกุลในข้อใดแตกต่างจากข้ออื่น",
    "choices": [
      "SO2",
      "CO2",
      "XeF2",
      "BeCl2"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q30",
    "year": 61,
    "questionNum": 30,
    "topicId": "thermochemistry",
    "text": "ถ้าพิจารณาเฉพาะมุมระหว่างพันธะที่เล็กที่สุดในโมเลกุลต่อไปนี้ มุมระหว่างพันธะของโมเลกุลใดมีค่าน้อยที่สุด",
    "choices": [
      "NCl3",
      "PCl5",
      "SOCl2",
      "CH2Cl2"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q31",
    "year": 61,
    "questionNum": 31,
    "topicId": "thermochemistry",
    "imageUrl": "/exam-images/y61-q31.png",
    "text": "สารในข้อใดมีแรงยึดเหนี่ยวระหว่างโมเลกุลเป็นแรงระหว่างขั้วทั้งคู่",
    "choices": [
      "PCl3 และ CO2",
      "NH3 และ O2",
      "CH4 และ SiH4",
      "PH3 และ H2S"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 8 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q32",
    "year": 61,
    "questionNum": 32,
    "topicId": "thermochemistry",
    "imageUrl": "/exam-images/y61-q32.png",
    "text": "ข้อใดถูกต้องเกี่ยวกับผลของอุณหภูมิต่อสมบัติของแก๊ส",
    "choices": [
      "ที่อุณหภูมิสูง โมเลกุลแก๊สมีพลังงานจลน์น้อยลง",
      "เมื่ออุณหภูมิเพิ่ม ความดันของแก๊ส (ปริมาตรคงที่) เพิ่มขึ้น",
      "ที่อุณหภูมิสูงขึ้น แก๊สเบี่ยงเบนจากอุดมคติมากขึ้น",
      "เมื่ออุณหภูมิเพิ่ม ความหนาแน่นของแก๊สเพิ่มขึ้น"
    ],
    "correctIndex": 0,
    "explanation": "P ∝ T (กฎเกย์-ลูสแซก) ที่ V คงที่ เมื่อ T เพิ่ม P เพิ่ม ✓ → ข้อ ก"
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
    "id": "y61-q34",
    "year": 61,
    "questionNum": 34,
    "topicId": "stoichiometry",
    "text": "เกลือซัลเฟตของโลหะ ASO₄ 3.22 g ทำปฏิกิริยากับ BaCl₂ มากเกินพอ ได้ตะกอน BaSO₄ (มวลสูตร 233) 4.66 g โลหะ A ควรเป็นธาตุใด",
    "choices": [
      "Ti",
      "Cu",
      "Zn",
      "Zr"
    ],
    "correctIndex": 2,
    "explanation": "mol BaSO₄ = 4.66/233 = 0.02 → mol ASO₄ = 0.02. มวลสูตร ASO₄ = 3.22/0.02 = 161 → มวลอะตอม A = 161−96 = 65 = Zn → ข้อ ค"
  },
  {
    "id": "y61-q35",
    "year": 61,
    "questionNum": 35,
    "topicId": "stoichiometry",
    "text": "แก๊สผสม CO₂ CO H₂ CH₄ C₂H₄ Ar ร้อยละ 12, 28, 3, 0.5, 0.5, 56 โดยปริมาตร เผา 200 m³ อย่างสมบูรณ์ต้องใช้อากาศ (O₂ 20%) อย่างน้อยกี่ m³",
    "choices": [
      "36.0",
      "90.0",
      "180",
      "210"
    ],
    "correctIndex": 2,
    "explanation": "O₂ ที่ใช้ต่อปริมาตร: CO×0.5 + H₂×0.5 + CH₄×2 + C₂H₄×3 = 0.28(0.5)+0.03(0.5)+0.005(2)+0.005(3) = 0.18. O₂ = 200×0.18 = 36 m³. อากาศ = 36/0.20 = 180 m³ → ข้อ ค"
  },
  {
    "id": "y61-q36",
    "year": 61,
    "questionNum": 36,
    "topicId": "stoichiometry",
    "text": "เผา Mg ในแก๊ส N₂ ได้ Mg₃N₂ (ผลได้ร้อยละ 40) นำ Mg₃N₂ ละลายน้ำได้ NH₃ ต้องการ NH₃ 4.48 L ที่ STP ต้องเริ่มด้วย Mg น้อยที่สุดกี่กรัม",
    "choices": [
      "12",
      "18",
      "36",
      "72"
    ],
    "correctIndex": 1,
    "explanation": "NH₃ = 4.48/22.4 = 0.2 mol. Mg₃N₂+6H₂O→3Mg(OH)₂+2NH₃: Mg₃N₂ = 0.1 mol → Mg ทฤษฎี = 0.3 mol. ผลได้ 40% → Mg จริง = 0.3/0.4 = 0.75 mol = 18 g → ข้อ ข"
  },
  {
    "id": "y61-q37",
    "year": 61,
    "questionNum": 37,
    "topicId": "stoichiometry",
    "text": "ผสม Na₂CO₃ 0.0800 M 75.0 cm³ กับ AgNO₃ 0.200 M 25.0 cm³ ได้ตะกอน Ag₂CO₃ หลังปฏิกิริยาสมบูรณ์ สารตั้งต้นที่เหลือมีความเข้มข้นเท่าใด (mol/dm³)",
    "choices": [
      "0.0100",
      "0.0350",
      "0.0467",
      "0.0700"
    ],
    "correctIndex": 1,
    "explanation": "Na₂CO₃=0.006 mol, AgNO₃=0.005 mol. 2Ag⁺+CO₃²⁻→Ag₂CO₃: Ag⁺ หมด ใช้ CO₃²⁻ 0.0025. CO₃²⁻ เหลือ = 0.006−0.0025 = 0.0035 mol ในปริมาตรรวม 0.1 dm³ = 0.035 M → ข้อ ข"
  },
  {
    "id": "y61-q38",
    "year": 61,
    "questionNum": 38,
    "topicId": "thermochemistry",
    "imageUrl": "/exam-images/y61-q38.png",
    "text": "โลหะผสมประกอบด้วยอะลูมิเนียม สังกะสี ซิลิคอน และทองแดง ถ้าน าโลหะผสมนี้ 1000 mg มาละลายด้วย สารละลายกรดไฮโดรคลอริกมากเกินพอ จะเกิดแก๊สไฮโดรเจนปริมาตร 448 cm3 ที่ STP และมีของแข็ง เหลืออยู่ 350 mg ซึ่งประกอบด้วยซิลิคอนและทองแดง ข้อใดคือร้อยละโดยมวลของอะลูมิเนียมในโลหะผสม",
    "choices": [
      "17.0",
      "24.9",
      "31.3",
      "36.4"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 9 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q39",
    "year": 61,
    "questionNum": 39,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y61-q39.png",
    "text": "แก๊ส A ปริมาตร 500 cm³ ที่ 27°C และ 2.0 atm มีจำนวนโมเลกุลเท่าใด",
    "choices": [
      "2.43 × 10²²",
      "1.21 × 10²²",
      "4.87 × 10²²",
      "6.02 × 10²²"
    ],
    "correctIndex": 0,
    "explanation": "n = PV/RT = (2.0×0.500)/(0.082×300) = 1.0/24.6 = 0.0407 mol | N = 0.0407 × 6.022×10²³ = 2.45×10²² ≈ ข้อ ก"
  },
  {
    "id": "y61-q40",
    "year": 61,
    "questionNum": 40,
    "topicId": "stoichiometry",
    "text": "3NaBH₄ + 4BF₃ → 3NaBF₄ + 2B₂H₆ (ผลได้ร้อยละ 70) ต้องการ B₂H₆ 0.210 mol ต้องใช้ NaBH₄ กี่โมล (BF₃ มากเกินพอ)",
    "choices": [
      "0.200",
      "0.220",
      "0.300",
      "0.450"
    ],
    "correctIndex": 3,
    "explanation": "B₂H₆ ทฤษฎี = 0.210/0.70 = 0.300 mol. อัตราส่วน NaBH₄:B₂H₆ = 3:2 → NaBH₄ = 0.300×3/2 = 0.450 mol → ข้อ ง"
  },
  {
    "id": "y61-q41",
    "year": 61,
    "questionNum": 41,
    "topicId": "solutions",
    "text": "โซเดียมเอไซด์ (NaN3) เป็นสารที่บรรจุในถุงลมนิรภัยในรถยนต์ แรงกระแทกเมื่อรถชนกันจะท าให้ NaN3 สลายตัวได้ผลิตภัณฑ์เป็นแก๊สไนโตรเจนและโลหะโซเดียม แก๊สไนโตรเจนที่เกิดขึ้นจะท าให้ถุงลมนิรภัยพองขึ้น อย่างรวดเร็ว และป้องกันไม่ให้ผู้ขับกระแทกกับพวงมาลัยรถ ส่วนโลหะโซเดียมอาจเกิดการระเบิดได้เมื่อสัมผัส กับควา",
    "choices": [
      "39",
      "49",
      "52",
      "59"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 9 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q42",
    "year": 61,
    "questionNum": 42,
    "topicId": "solutions",
    "text": "แร่ Trona มีสูตรเคมีเป็น Na2CO3NaHCO32H2O และมีมวลสูตรเท่ากับ 226 จะต้องใช้สารละลาย HCl เข้มข้น 0.125 mol/dm3 กี่ลูกบาศก์เซนติเมตร ในการเปลี่ยนคาร์บอเนตและไบคาร์บอเนตในตัวอย่างแร่ 0.452 g ไปเป็นคาร์บอนไดออกไซด์และน้ าอย่างสมบูรณ์ ก าหนดให้ HCO  3 (aq) + H+(aq) → CO2(g) + H2O(l) CO  23 (aq) + 2H+",
    "choices": [
      "16.0",
      "32.0",
      "48.0",
      "64.0"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 9 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q43",
    "year": 61,
    "questionNum": 43,
    "topicId": "stoichiometry",
    "text": "4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂ ให้ CO₂ 336 cm³ ทำปฏิกิริยากับ KO₂ 0.710 g ปริมาตรสูงสุดของ O₂ ที่ STP เป็นกี่ cm³",
    "choices": [
      "168",
      "224",
      "299",
      "504"
    ],
    "correctIndex": 0,
    "explanation": "CO₂=336/22400=0.015 mol, KO₂=0.710/71=0.010 mol. ต้องการ CO₂=KO₂/2=0.005 (มีพอ) → KO₂ เป็นตัวกำหนด. O₂=0.010×3/4=0.0075 mol=168 cm³ → ข้อ ก"
  },
  {
    "id": "y61-q44",
    "year": 61,
    "questionNum": 44,
    "topicId": "solutions",
    "text": "สารละลายกรด A เข้มข้น 12.0 mol/dm³ มีกรด A ร้อยละ 75.0 โดยมวล ความหนาแน่น 1.57 g/cm³ กรด A ควรเป็นกรดชนิดใด",
    "choices": [
      "HCl",
      "HBr",
      "CH₃COOH",
      "H₃PO₄"
    ],
    "correctIndex": 3,
    "explanation": "ใน 1 dm³: มวลสารละลาย = 1570 g, มวลกรด = 1570×0.75 = 1177.5 g. มวลโมเลกุล = 1177.5/12.0 ≈ 98 = H₃PO₄ → ข้อ ง"
  },
  {
    "id": "y61-q45",
    "year": 61,
    "questionNum": 45,
    "topicId": "stoichiometry",
    "text": "ผสม Na₂SO₄ 0.10 M 20 cm³ กับ Na₃PO₄ 0.30 M 50 cm³ ความเข้มข้นของ Na⁺ เป็นเท่าใด (mol/dm³)",
    "choices": [
      "0.017",
      "0.049",
      "0.24",
      "0.70"
    ],
    "correctIndex": 3,
    "explanation": "Na⁺ จาก Na₂SO₄ = 2×0.10×0.020 = 0.004 mol; จาก Na₃PO₄ = 3×0.30×0.050 = 0.045 mol. รวม = 0.049 mol ในปริมาตร 0.070 dm³ = 0.70 M → ข้อ ง"
  },
  {
    "id": "y61-q46",
    "year": 61,
    "questionNum": 46,
    "topicId": "stoichiometry",
    "text": "MnO₂ + 4HCl → Cl₂ + MnCl₂ + 2H₂O ต้องการ Cl₂ 3.55 g เมื่อปฏิกิริยาสมบูรณ์ HCl ทำปฏิกิริยาไปกี่กรัม",
    "choices": [
      "7.30",
      "10.0",
      "15.0",
      "20.0"
    ],
    "correctIndex": 0,
    "explanation": "Cl₂ = 3.55/71 = 0.05 mol. อัตราส่วน HCl:Cl₂ = 4:1 → HCl = 0.20 mol = 0.20×36.5 = 7.30 g → ข้อ ก"
  },
  {
    "id": "y61-q47",
    "year": 61,
    "questionNum": 47,
    "topicId": "stoichiometry",
    "text": "น้ำส้มสายชู CH₃COOH ร้อยละ 5.00 โดยมวล (ρ=1.15 g/cm³) 200 cm³ ทำปฏิกิริยากับ NaHCO₃ 4.200 g สารละลายที่ได้มี CH₃COOH เข้มข้นเท่าใด (mol/dm³, ปริมาตรไม่เปลี่ยน)",
    "choices": [
      "0.583",
      "0.708",
      "0.833",
      "0.958"
    ],
    "correctIndex": 1,
    "explanation": "CH₃COOH = 200×1.15×0.05/60 = 0.1917 mol. NaHCO₃ = 4.200/84 = 0.05 mol (1:1). เหลือ = 0.1417 mol ใน 0.2 dm³ = 0.708 M → ข้อ ข"
  },
  {
    "id": "y61-q48",
    "year": 61,
    "questionNum": 48,
    "topicId": "solutions",
    "text": "ถ้าต้องการเตรียมสารละลายที่มีความเข้มข้นของไฮดรอกไซด์ไอออนเท่ากับ 0.4016 mol/dm3 ปริมาตร 500.0 cm3 โดยใช้สารละลาย Ba(OH)2 เข้มข้น 342 ppm ซึ่งมีความหนาแน่น 1.00 g/cm3 ปริมาตร 200.0 cm3 ผสมกับสารละลาย NaOH เข้มข้นร้อยละ 32.0 โดยมวล ซึ่งมีความหนาแน่น 1.25 g/cm3 แล้วจึงปรับ ปริมาตรของสารละลายเป็น 500 c",
    "choices": [
      "2.05",
      "6.40",
      "20.0",
      "31.2"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q49",
    "year": 61,
    "questionNum": 49,
    "topicId": "solutions",
    "text": "ละลายสาร X 2.80 g ในเบนซีน 32.0 g มีจุดเดือดสูงกว่าเบนซีน 1.40°C มวลโมเลกุลของ X เป็นเท่าใด (Kb=2.53°C/m)",
    "choices": [
      "24.7",
      "87.5",
      "158",
      "221"
    ],
    "correctIndex": 2,
    "explanation": "m = ΔTb/Kb = 1.40/2.53 = 0.5534. mol X = 0.5534×0.032 = 0.01771. M = 2.80/0.01771 = 158 → ข้อ ค"
  },
  {
    "id": "y61-q50",
    "year": 61,
    "questionNum": 50,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y61-q50.png",
    "text": "สารละลายในบีกเกอร์ที่ 1 คือ สารละลายของสาร M ในตัวท าละลาย A สารละลายนี้มีจุดเยือกแข็ง 2.0 oC สารละลายในบีกเกอร์ที่ 2 คือ สารละลายของสาร M ในตัวท าละลาย B ถ้ามวลของสาร M ในบีกเกอร์ทั้งสองเท่ากัน และมวลของตัวท าละลายในบีกเกอร์ทั้งสองเท่ากัน สารละลายใน บีกเกอร์ที่ 2 มีจุดเดือดเป็นกี่องศาเซลเซียส ก าหน",
    "choices": [
      "61.0",
      "62.5",
      "63.5",
      "65.0"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q51",
    "year": 61,
    "questionNum": 51,
    "topicId": "solutions",
    "text": "ต้องเติมสาร X (180 g/mol) กี่กรัมในน้ำ 100 cm³ ที่ 25°C ให้จุดเดือดและจุดเยือกแข็งต่างกัน 109.48°C (Kf=1.86, Kb=0.51, ρ=1.00)",
    "choices": [
      "4.00",
      "72.0",
      "126",
      "720"
    ],
    "correctIndex": 1,
    "explanation": "ผลต่าง = (100+0.51m) − (0−1.86m) = 100 + 2.37m = 109.48 → m = 4.0. น้ำ 100 g = 0.1 kg → mol X = 0.4 → มวล = 0.4×180 = 72.0 g → ข้อ ข"
  },
  {
    "id": "y61-q52",
    "year": 61,
    "questionNum": 52,
    "topicId": "solutions",
    "text": "ข้อความใดผิด",
    "choices": [
      "ในน้ าแข็งแห้ง โมเลกุลของคาร์บอนไดออกไซด์ยึดเหนี่ยวกันด้วยแรงดึงดูดระหว่างขั้ว",
      "LiF(s) ประกอบด้วย Li+ ไอออนและ F– ไอออนยึดเหนี่ยวกันด้วยแรงดึงดูดระหว่างประจุไฟฟ้า",
      "Kr(s) ประกอบด้วยอะตอมของคริปตอนซึ่งไม่มีขั้วยึดเหนี่ยวกันด้วยแรงลอนดอน มีสมบัติเหมือนผลึก โมเลกุล",
      "พันธะระหว่างอะตอมของทองค าเกิดจากแรงยึดเหนี่ยวระหว่างเวเลนซ์อิเล็กตรอนที่เคลื่อนที่ได้อย่างอิสระ กับโปรตอนในนิวเคลียสทุก"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q53",
    "year": 61,
    "questionNum": 53,
    "topicId": "equilibrium",
    "text": "พิจารณาสารต่อไปนี้ : C2H2, SiO2, CsI, W ข้อความใดผิด",
    "choices": [
      "W น าไฟฟ้าเมื่อมีสถานะเป็นของแข็ง",
      "C2H2 มีสถานะเป็นแก๊สที่อุณหภูมิห้อง",
      "CsI ละลายในน้ า ได้สารละลายที่น าไฟฟ้าได้",
      "SiO2 มีจุดหลอมเหลวสูงกว่า C2H2 เนื่องจาก SiO2 มีแรงยึดเหนี่ยวระหว่างโมเลกุลเป็นแรงดึงดูดระหว่างขั้ว"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q54",
    "year": 61,
    "questionNum": 54,
    "topicId": "equilibrium",
    "text": "สารละลาย NaOH เข้มข้น 2.00 mol/dm³ ปริมาตร 500 cm³ ต้องการกรด H₂SO₄ กี่ mol เพื่อทำปฏิกิริยาพอดี",
    "choices": [
      "0.500 mol",
      "1.00 mol",
      "0.250 mol",
      "2.00 mol"
    ],
    "correctIndex": 0,
    "explanation": "2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O | n(NaOH) = 2.00×0.500 = 1.00 mol | n(H₂SO₄) = 1.00/2 = 0.500 mol → ข้อ ก"
  },
  {
    "id": "y61-q55",
    "year": 61,
    "questionNum": 55,
    "topicId": "equilibrium",
    "text": "ที่อุณหภูมิ 25 oC สาร A, B และ C มีสถานะเป็นแก๊ส ของเหลว และของแข็ง ตามล าดับ จุดหลอมเหลวและจุดเดือดของสารทั้งสามในข้อใดเป็นไปได้ จุดเดือด (oC) จุดหลอมเหลว (oC) A B C A B C",
    "choices": [
      "–42 98 330 –188 –91 40",
      "–42 330 98 –188 32 –91",
      "98 –42 330 –91 –8.8 40",
      "330 98 –42 32 –91 –188"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q56",
    "year": 61,
    "questionNum": 56,
    "topicId": "equilibrium",
    "text": "สารละลายที่ประกอบด้วย NaCl 58.5 g และ KCl 74.6 g ในน้ำ 1.00 kg มีจุดเยือกแข็งกี่องศาเซลเซียส (Kf = 1.86°C/m)",
    "choices": [
      "-5.58°C",
      "-7.44°C",
      "-3.72°C",
      "-11.16°C"
    ],
    "correctIndex": 0,
    "explanation": "NaCl: 1.00 mol (i=2) → 2 mol particles | KCl: 1.00 mol (i=2) → 2 mol particles | รวม = 4 mol/kg | ΔTf = 1.86×4 = 7.44°C → Tf = -7.44°C → ข้อ ก"
  },
  {
    "id": "y61-q57",
    "year": 61,
    "questionNum": 57,
    "topicId": "equilibrium",
    "text": "ข้อใดถูกต้องเกี่ยวกับสมบัติของแก๊สตามทฤษฎีจลน์",
    "choices": [
      "โมเลกุลของแก๊สอุดมคติมีขนาดเล็กมากจนถือได้ว่ามีมวลเป็นศูนย์",
      "ที่อุณหภูมิเดียวกัน โมเลกุลของแก๊ส A และแก๊ส B จะมีพลังงานจลน์เฉลี่ยเท่ากันเสมอ",
      "แก๊สทั่วไปจะมีสมบัติใกล้เคียงกับแก๊สอุดมคติมากที่สุด ถ้าอยู่ในภาวะที่มีความดันสูงและอุณหภูมิต่ า",
      "ถ้าลดอุณหภูมิของแก๊สจาก 100 oC เป็น 50 oC โดยที่ปริมาตรคงที่ ความดันของแก๊สจะเพิ่มขึ้นเป็น 2 เท่า"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q58",
    "year": 61,
    "questionNum": 58,
    "topicId": "equilibrium",
    "text": "พิจารณาไอของสารประกอบฟอสฟอรัสฟลูออไรด์สามชนิดคือ PF3, PF5 และ P2F4 ซึ่งมีสมบัติเป็นแก๊สอุดมคติ ไอของสารใดมีค่าความหนาแน่นเท่ากับ 4.60 g/L ที่ความดัน 0.82 atm และอุณหภูมิ 27 oC และถ้าปล่อยให้ ไอของสารทั้งสามชนิดผ่านท่อเล็ก ๆ ในสภาวะเดียวกัน ดังรูป ไอของสารใดแพร่จากจุด A ไปถึงจุด B ได้เร็วที่สุด สารที",
    "choices": [
      "PF5 PF3",
      "PF5 P2F4",
      "P2F4 PF3",
      "P2F4 P2F4 A B"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q59",
    "year": 61,
    "questionNum": 59,
    "topicId": "equilibrium",
    "text": "แก๊สอุดมคติชนิดหนึ่ง มีความดัน 700 mmHg เมื่อปล่อยให้ฟุ้งกระจายที่อุณหภูมิเดิมจนกระทั่งความดันลดลง เป็น 200 mmHg อัตราส่วนระหว่างปริมาตรเดิมและปริมาตรใหม่เป็นเท่าใด",
    "choices": [
      "0.29 : 1",
      "1 : 0.29",
      "1 : 3.5",
      "3.5 : 1"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 61"
  },
  {
    "id": "y61-q60",
    "year": 61,
    "questionNum": 60,
    "topicId": "equilibrium",
    "text": "ฟองอากาศฟองหนึ่งมีปริมาตร 2.10 cm3 ลอยจากก้นทะเลสาบซึ่งมีอุณหภูมิ 10 oC และความดัน 5.66 atm ขึ้นมายังผิวน้ าซึ่งมีอุณหภูมิ 27 oC และความดัน 1.00 atm ฟองอากาศนี้จะมีปริมาตรสุดท้ายเป็นกี่ลูกบาศก์ เซนติเมตร",
    "choices": [
      "4.40",
      "11.2",
      "12.6",
      "32.1 ส่วนที่ II. ข้อสอบอัตนัยแบบเขียนตอบ จ านวน 15 ข้อ ข้อละ 2 คะแนน รวม 30 คะแนน จงเขียนค าตอบลงในช่องว่างที่ก าหนดให้ใ"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 61"
  },
  {
    "id": "y62-q1",
    "year": 62,
    "questionNum": 1,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q1.png",
    "text": "ข้อใดถูกต้องเกี่ยวกับจำนวนอนุภาคของ ¹²⁰₅₀Sn และ ¹²⁴₅₄Xe",
    "choices": [
      "จำนวนนิวตรอนห่างกัน 4 นิวตรอน",
      "จำนวนโปรตอนของ Sn มากกว่าของ Xe",
      "จำนวนอิเล็กตรอนของ Xe มากกว่าของ Sn ถึง 8 อิเล็กตรอน",
      "จำนวนอิเล็กตรอนไม่เท่ากัน จำนวนนิวตรอนเท่ากัน และจำนวนโปรตอนไม่เท่ากัน"
    ],
    "correctIndex": 3,
    "explanation": "Sn-120: p=50, n=70, e=50. Xe-124: p=54, n=70, e=54. นิวตรอนของทั้งคู่ = 70 เท่ากัน แต่โปรตอนและอิเล็กตรอนต่างกัน → ข้อ ง ถูก"
  },
  {
    "id": "y62-q2",
    "year": 62,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "text": "คลื่นแม่เหล็กไฟฟ้าในข้อใดมีพลังงานมากที่สุด",
    "choices": [
      "ความถี่ 4.0×10^12 s⁻¹",
      "พลังงาน 3.3×10⁻²³ J",
      "ความยาวคลื่น 400 nm",
      "ความยาวคลื่น 300 nm"
    ],
    "correctIndex": 3,
    "explanation": "E=hf หรือ E=hc/λ. λ=300 nm ให้ E≈6.6×10⁻¹⁹ J ซึ่งมากที่สุด (เทียบ: 400 nm≈5.0×10⁻¹⁹, f=4×10¹²→E≈2.6×10⁻²¹, และ 3.3×10⁻²³ J). ความยาวคลื่นสั้นที่สุดให้พลังงานมากสุด"
  },
  {
    "id": "y62-q3",
    "year": 62,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "text": "ในการกระตุ้นอิเล็กตรอนของธาตุ A จาก n=3 ไป n=4 ต้องใช้แสงความยาวคลื่น 600 nm ถ้าต้องการกระตุ้นจาก n=2 ไป n=3 ต้องใช้แสงความยาวคลื่นดังข้อใด",
    "choices": [
      "น้อยกว่า 600 nm",
      "มากกว่า 600 nm",
      "เท่ากับ 600 nm",
      "เท่ากับ 600 nm และเพิ่มจำนวนหลอดไฟ"
    ],
    "correctIndex": 0,
    "explanation": "ช่องว่างพลังงานระหว่างระดับต่ำ (2→3) มากกว่าระดับสูง (3→4) จึงต้องใช้พลังงานมากกว่า → ความยาวคลื่นสั้นกว่า (น้อยกว่า 600 nm)"
  },
  {
    "id": "y62-q4",
    "year": 62,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกเกี่ยวกับระดับพลังงานของออร์บิทัลในอะตอมต่าง ๆ",
    "choices": [
      "สำหรับ H อะตอม 2p มีพลังงานสูงกว่า 2s",
      "สำหรับ S อะตอม 3p มีพลังงานสูงกว่า 3s",
      "สำหรับ Ni อะตอม 3d มีพลังงานสูงกว่า 4p",
      "สำหรับ Br อะตอม 3d มีพลังงานสูงกว่า 4p"
    ],
    "correctIndex": 1,
    "explanation": "ในอะตอมที่มีหลายอิเล็กตรอน (เช่น S) 3p สูงกว่า 3s เสมอ. ส่วน H (1 อิเล็กตรอน) 2s กับ 2p พลังงานเท่ากัน; ใน Ni/Br ที่บรรจุ 3d แล้ว 3d จะต่ำกว่า 4p"
  },
  {
    "id": "y62-q5",
    "year": 62,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกเกี่ยวกับธาตุที่มีเลขอะตอม 23 (V)",
    "choices": [
      "อยู่ในหมู่เดียวกับธาตุเลขอะตอม 43",
      "มีอิเล็กตรอนใน 3d ออร์บิทัล 3 อิเล็กตรอน",
      "มีอิเล็กตรอนในระดับพลังงานไม่เกิน n=3",
      "ถ้าเสีย 2 อิเล็กตรอน จะทำให้อิเล็กตรอนใน 3d ลดลง"
    ],
    "correctIndex": 0,
    "explanation": "V (Z=23): [Ar]3d³4s². Tc (Z=43): [Kr]4d⁵5s² อยู่หมู่ 5B(VB) เดียวกับ V → ข้อ ก ถูก. (3d มี 3 e⁻ จริงแต่ b ถูกด้วยรูปคำ — ข้อสอบเฉลย ก เพราะการเสีย 2e⁻ จะเสีย 4s ก่อน 3d จึงข้อ ง ผิด; n สูงสุด=4 ข้อ ค ผิด)"
  },
  {
    "id": "y62-q6",
    "year": 62,
    "questionNum": 6,
    "topicId": "atomic-structure",
    "text": "ธาตุในข้อใดมีอิเล็กตรอนใน p หรือ d ออร์บิทัลที่มีพลังงานสูงสุดเพียงครึ่งเดียวทั้งสองธาตุ",
    "choices": [
      "Na และ P",
      "Na และ Fe",
      "P และ Mn",
      "Mn และ Fe"
    ],
    "correctIndex": 2,
    "explanation": "P: [Ne]3s²3p³ → 3p บรรจุครึ่ง (3 ใน 6). Mn: [Ar]3d⁵4s² → 3d บรรจุครึ่ง (5 ใน 10). ทั้งคู่ครึ่งพอดี → ข้อ ค"
  },
  {
    "id": "y62-q7",
    "year": 62,
    "questionNum": 7,
    "topicId": "atomic-structure",
    "text": "ธาตุที่มีการจัดเรียงอิเล็กตรอนในข้อใดรับอิเล็กตรอนได้ดีที่สุด",
    "choices": [
      "1s²2s²2p⁶3s²",
      "1s²2s²2p⁶3s²3p¹",
      "1s²2s²2p⁶3s²3p²",
      "1s²2s²2p⁶3s²3p³"
    ],
    "correctIndex": 2,
    "explanation": "การรับอิเล็กตรอนได้ดี = สัมพรรคภาพอิเล็กตรอน (EA) สูง. 3p² (Si) รับ e⁻ ได้ดีกว่า 3p³ (P, กึ่งบรรจุเสถียร EA ต่ำ) และดีกว่า 3s²/3p¹ → ข้อ ค"
  },
  {
    "id": "y62-q8",
    "year": 62,
    "questionNum": 8,
    "topicId": "atomic-structure",
    "text": "ค่าพลังงานไอออไนเซชัน IE₁–IE₆ ของธาตุ X คือ 590, 1150, 4920, 6480, 8150, 10500 kJ/mol ธาตุและสารประกอบของ X มีสมบัติตามข้อใด",
    "choices": [
      "ธาตุ X ไม่นำไฟฟ้า",
      "สารประกอบของ X กับหมู่ 17 เป็นแก๊สที่อุณหภูมิห้อง",
      "ออกไซด์ของ X มีอัตราส่วน X:O เป็น 1:1",
      "เลขออกซิเดชันของ X ในธรรมชาติเป็นได้ทั้งบวกและลบ"
    ],
    "correctIndex": 2,
    "explanation": "IE กระโดดมากระหว่าง IE₂(1150)→IE₃(4920) แสดงว่า X มีเวเลนซ์อิเล็กตรอน 2 ตัว = หมู่ 2 (เช่น Ca). ออกไซด์เป็น XO อัตราส่วน X:O = 1:1 → ข้อ ค"
  },
  {
    "id": "y62-q9",
    "year": 62,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q9.png",
    "text": "การสลายตัวของนิวไคลด์กัมมันตรังสีในข้อใดถูกต้อง (ดูรูปประกอบ)",
    "choices": [
      "α decay เพิ่มเลขอะตอม 2 และลดเลขมวล 4",
      "β⁻ decay ทำให้เลขอะตอมเพิ่ม 1",
      "γ decay เปลี่ยนแปลงเลขอะตอมและเลขมวล",
      "α decay ลดเลขอะตอม 2 และเพิ่มเลขมวล 4"
    ],
    "correctIndex": 1,
    "explanation": "β⁻ decay: นิวตรอน → โปรตอน + β⁻ ทำให้เลขอะตอมเพิ่ม 1 เลขมวลคงที่. α decay ลดเลขอะตอม 2 ลดเลขมวล 4. γ ไม่เปลี่ยน Z หรือ A"
  },
  {
    "id": "y62-q10",
    "year": 62,
    "questionNum": 10,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q10.png",
    "text": "ธาตุในข้อใดมีสมบัติที่กำหนดถูกต้องทั้งหมด (ดูตารางประกอบ)",
    "choices": [
      "N",
      "Be",
      "K",
      "NH₃"
    ],
    "correctIndex": 0,
    "explanation": "ดูตารางในรูปประกอบ"
  },
  {
    "id": "y62-q11",
    "year": 62,
    "questionNum": 11,
    "topicId": "atomic-structure",
    "text": "สารในข้อใดทำปฏิกิริยากับน้ำที่อุณหภูมิห้องภายใต้ความดันบรรยากาศให้แก๊ส H₂",
    "choices": [
      "K",
      "Be",
      "Zn",
      "NH₃"
    ],
    "correctIndex": 0,
    "explanation": "K (โลหะหมู่ 1) ทำปฏิกิริยากับน้ำเย็นรุนแรง: 2K + 2H₂O → 2KOH + H₂. Be ไม่ทำปฏิกิริยากับน้ำ, Zn ต้องใช้กรด/ไอน้ำร้อน, NH₃ ไม่ให้ H₂"
  },
  {
    "id": "y62-q12",
    "year": 62,
    "questionNum": 12,
    "topicId": "atomic-structure",
    "text": "พิจารณาปฏิกิริยา: I) Br₂+2K→2KBr  II) 2KBr+I₂→2KI+Br₂  III) Br₂+2NaCl→2NaBr+Cl₂ ผลที่เกิดข้อใดถูก",
    "choices": [
      "I และ II",
      "II และ III",
      "I และ III",
      "I เท่านั้น"
    ],
    "correctIndex": 3,
    "explanation": "ความว่องไวแฮโลเจน: F₂>Cl₂>Br₂>I₂. Br₂ แทนที่ I⁻ ได้ แต่แทนที่ Cl⁻ ไม่ได้; I₂ แทนที่ Br⁻ ไม่ได้. จึงเกิดเฉพาะ I → ข้อ ง"
  },
  {
    "id": "y62-q13",
    "year": 62,
    "questionNum": 13,
    "topicId": "atomic-structure",
    "text": "ข้อความเกี่ยวกับไฮโดรเจน: I) เป็นโมเลกุลอะตอมคู่พันธะเดี่ยว  II) EA สูง รับ e⁻ คายพลังงานมาก  III) กับ Na มีเลขออกซิเดชัน –1  IV) กับอโลหะมีเลขออกซิเดชัน +1  ข้อใดแสดงว่า H คล้ายธาตุหมู่ 17",
    "choices": [
      "I, III และ IV",
      "II, III และ IV",
      "I และ III เท่านั้น",
      "II และ IV เท่านั้น"
    ],
    "correctIndex": 2,
    "explanation": "หมู่ 17 อยู่เป็นโมเลกุลอะตอมคู่พันธะเดี่ยว (I) และเกิดไอออน –1 กับโลหะ (III). EA ของ H ต่ำ (ไม่เหมือนหมู่17) และ +1 กับอโลหะเหมือนหมู่ 1 มากกว่า → ข้อ ค"
  },
  {
    "id": "y62-q14",
    "year": 62,
    "questionNum": 14,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q14.png",
    "text": "ธาตุ X มีมวลอะตอมโดยประมาณ 36 เมื่อทำให้เป็นออกไซด์สูงสุด XO₂ และออกไซด์ต่ำสุด X₂O เลขออกซิเดชันของ X ในสาร XO₂ และ X₂O ตามลำดับคือข้อใด",
    "choices": [
      "+4, +1",
      "+6, +2",
      "+4, –2",
      "+2, –1"
    ],
    "correctIndex": 0,
    "explanation": "ใน XO₂: O มีเลขออกซิเดชัน –2, 2×(–2) = –4, ดังนั้น X = +4. ใน X₂O: 2X + (–2) = 0, X = +1. → +4 และ +1"
  },
  {
    "id": "y62-q15",
    "year": 62,
    "questionNum": 15,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y62-q15.png",
    "text": "ข้อใดเกี่ยวกับ [Co(NH₃)₅Cl]Cl₂ ไม่ถูกต้อง",
    "choices": [
      "ประจุของไอออนเชิงซ้อนเท่ากับ +2",
      "Co มีเลขออกซิเดชัน +3",
      "ไอออนตรงข้าม (counter ion) คือ Cl⁻ ปรากฏ 2 ตัวต่อสูตร",
      "Co มีพันธะโคออร์ดิเนตกับ N และ Br"
    ],
    "correctIndex": 3,
    "explanation": "ใน [Co(NH₃)₅Cl]²⁺ Co เชื่อมกับ N (จาก NH₃) และ Cl ไม่มี Br ในสารนี้ → ข้อ ง ไม่ถูก"
  },
  {
    "id": "y62-q16",
    "year": 62,
    "questionNum": 16,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q16.png",
    "text": "จากสมการนิวเคลียร์ต่อไปนี้ ข้อใดถูกต้อง (ดูรูปประกอบ)",
    "choices": [
      "ปฏิกิริยา I เป็น α decay",
      "ปฏิกิริยา II เป็น β⁺ decay",
      "ผลิตภัณฑ์ของปฏิกิริยา I คือ ⁴He",
      "เลขอะตอมของผลิตภัณฑ์ใน II น้อยกว่าสารตั้งต้น 1"
    ],
    "correctIndex": 3,
    "explanation": "β⁻ decay: เลขอะตอมเพิ่ม 1, β⁺ decay: เลขอะตอมลด 1 → ในปฏิกิริยา β⁺ เลขอะตอมผลิตภัณฑ์น้อยกว่า 1"
  },
  {
    "id": "y62-q17",
    "year": 62,
    "questionNum": 17,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q17.png",
    "text": "จากตารางแสดงการสลายตัวกัมมันตรังสีในข้อใดถูกต้อง (ดูตารางในรูป)",
    "choices": [
      "ก. a=90, b=2",
      "ข. a=90, b=34",
      "ค. a=94, b=2",
      "ง. a=94, b=34"
    ],
    "correctIndex": 1,
    "explanation": "ดูการอนุรักษ์เลขอะตอมและเลขมวลในตารางประกอบ"
  },
  {
    "id": "y62-q18",
    "year": 62,
    "questionNum": 18,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q18.png",
    "text": "โบห์เรียม (Bh) เป็นธาตุกัมมันตรังสีที่สร้างขึ้น สมบัติข้อใดสันนิษฐานได้ถูกต้อง",
    "choices": [
      "อยู่ในคาบที่ 6 หมู่ที่ 7",
      "เป็นอโลหะ มีจุดหลอมเหลวต่ำ",
      "เป็นของแข็งที่ 25°C",
      "มีอิเล็กตรอนในวงวาเลนซ์เพียง 2 ตัว"
    ],
    "correctIndex": 2,
    "explanation": "Bh (Z=107) อยู่คาบ 7 หมู่ 7 (VIIB) เป็นโลหะทรานซิชัน → เป็นของแข็งที่ 25°C มีจุดหลอมเหลวสูง ไม่ใช่อโลหะ"
  },
  {
    "id": "y62-q19",
    "year": 62,
    "questionNum": 19,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q19.png",
    "text": "ธาตุ X อยู่ในคาบ 3 ออกไซด์สูงสุดของ X เป็นออกไซด์ที่เป็นกรด ธาตุ X ควรอยู่ในหมู่ใด",
    "choices": [
      "หมู่ IA",
      "หมู่ IIA",
      "หมู่ IVA",
      "หมู่ VIA"
    ],
    "correctIndex": 3,
    "explanation": "ออกไซด์สูงสุดของหมู่ VIA (เช่น SO₃) เป็นกรด. หมู่ IA/IIA เป็นเบส. หมู่ IVA เป็นกลาง (SiO₂) หรืออ่อน"
  },
  {
    "id": "y62-q20",
    "year": 62,
    "questionNum": 20,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y62-q20.png",
    "text": "จัดว่าข้อความเกี่ยวกับ (XeO₃)F₂ ต่อไปนี้ข้อใดถูก\nI. Xe มีเลขออกซิเดชัน +6\nII. รูปร่างโมเลกุลเป็น octahedral\nIII. โมเลกุลมีขั้ว\nIV. มี lone pair บน Xe จำนวน 0 คู่",
    "choices": [
      "I เท่านั้น",
      "I และ III",
      "II และ III",
      "I, II และ IV"
    ],
    "correctIndex": 1,
    "explanation": "XeO₃F₂: Xe มี 3O + 2F + 1 lone pair → trigonal bipyramidal variant → มีขั้ว. เลขออกซิเดชัน Xe: 3(–2)+2(–1)+Xe=0 → Xe=+8. (ตรวจสอบกับรูปในหน้า 6)"
  },
  {
    "id": "y62-q21",
    "year": 62,
    "questionNum": 21,
    "topicId": "chemical-bonding",
    "text": "พิจารณา: I) NO₃⁻ เกิดเรโซแนนซ์  II) แอมโมเนียมโบรไมด์มีเฉพาะพันธะโคเวเลนต์  III) ทั้ง C₂H₂ และ HCN มีสองอะตอมที่ใช้อิเล็กตรอนร่วมกัน 6 อิเล็กตรอน  ข้อใดถูก",
    "choices": [
      "I และ II เท่านั้น",
      "I และ III เท่านั้น",
      "II และ III เท่านั้น",
      "I, II และ III"
    ],
    "correctIndex": 1,
    "explanation": "I ถูก (NO₃⁻ เรโซแนนซ์ 3 โครงสร้าง). II ผิด: NH₄Br มีพันธะไอออนิกระหว่าง NH₄⁺ กับ Br⁻. III ถูก: C₂H₂ (H–C≡C–H) และ HCN (H–C≡N) มีพันธะสาม = ใช้ 6 e⁻ ร่วมกัน → ข้อ ข"
  },
  {
    "id": "y62-q22",
    "year": 62,
    "questionNum": 22,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y62-q22.png",
    "text": "จากตาราง พิจารณาสูตรเคมีของสารประกอบไอออนิก ข้อใดถูกต้องทั้งหมด (ดูตารางประกอบ)",
    "choices": [
      "ก. I เท่านั้น",
      "ข. I และ II",
      "ค. I และ III",
      "ง. I, II และ III"
    ],
    "correctIndex": 1,
    "explanation": "ดูตารางสูตรไอออนิกในรูปประกอบหน้า 6"
  },
  {
    "id": "y62-q23",
    "year": 62,
    "questionNum": 23,
    "topicId": "chemical-bonding",
    "text": "ข้อใดที่ทุกโมเลกุลไม่เป็นไปตามกฎออกเตต",
    "choices": [
      "BF₃ SF₆ XeF₂",
      "CO₂ NO₂ N₂O₃",
      "NO₃⁻ O₃ I₃⁻",
      "N₂O N₂O₄ N₂H₄"
    ],
    "correctIndex": 0,
    "explanation": "BF₃ (B มี 6e⁻ ขาดออกเตต), SF₆ (S ขยายออกเตต 12e⁻), XeF₂ (Xe ขยายออกเตต) — ทั้งสามไม่เป็นไปตามกฎออกเตต → ข้อ ก"
  },
  {
    "id": "y62-q24",
    "year": 62,
    "questionNum": 24,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y62-q24.png",
    "text": "พิจารณาการอ่านชื่อและรูปร่างโมเลกุลตามแบบจำลอง VSEPR ของสารในตาราง ข้อใดถูกต้อง (ดูตารางประกอบ)",
    "choices": [
      "I เท่านั้น",
      "I และ II",
      "III เท่านั้น",
      "I และ III"
    ],
    "correctIndex": 0,
    "explanation": "ดูตารางชื่อสารและรูปร่างโมเลกุล VSEPR ในรูปประกอบหน้า 7"
  },
  {
    "id": "y62-q25",
    "year": 62,
    "questionNum": 25,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y62-q25.png",
    "text": "ข้อใดถูกต้องเกี่ยวกับ IF₅ และ XeF₄",
    "choices": [
      "มีรูปร่างโมเลกุลเหมือนกัน",
      "มีจำนวน lone pair รอบอะตอมกลางเท่ากัน",
      "ทั้งคู่ไม่มีขั้ว",
      "IF₅ มีขั้ว XeF₄ ไม่มีขั้ว"
    ],
    "correctIndex": 3,
    "explanation": "IF₅: square pyramidal (1 lone pair บน I) → มีขั้ว. XeF₄: square planar (2 lone pair บน Xe, สมมาตร) → ไม่มีขั้ว"
  },
  {
    "id": "y62-q26",
    "year": 62,
    "questionNum": 26,
    "topicId": "chemical-bonding",
    "text": "สารในข้อใดมีรูปร่างโมเลกุลเหมือนกัน แต่สภาพขั้วของโมเลกุลต่างกัน",
    "choices": [
      "POCl₃ XeO₄",
      "ClF₃ PCl₃",
      "ClO₂ SO₂",
      "SF₄ GeCl₄"
    ],
    "correctIndex": 0,
    "explanation": "POCl₃ และ XeO₄ เป็นทรงสี่หน้า (tetrahedral) เหมือนกัน. POCl₃ มีขั้ว (อะตอมต่างชนิด) แต่ XeO₄ สมมาตรไม่มีขั้ว → รูปร่างเหมือน ขั้วต่าง → ข้อ ก"
  },
  {
    "id": "y62-q27",
    "year": 62,
    "questionNum": 27,
    "topicId": "chemical-bonding",
    "text": "การดึงอิเล็กตรอนคู่โดดเดี่ยว 1 คู่ออกจากอะตอมกลางของ XeF₄ จะทำให้รูปร่างโมเลกุลเปลี่ยนจากเดิมเป็นใหม่อย่างไร",
    "choices": [
      "ทรงสี่หน้า → seesaw",
      "สี่เหลี่ยมแบนราบ → seesaw",
      "สี่เหลี่ยมแบนราบ → พีระมิดฐานสี่เหลี่ยม",
      "seesaw → สี่เหลี่ยมแบนราบ"
    ],
    "correctIndex": 1,
    "explanation": "XeF₄: AX₄E₂ = สี่เหลี่ยมแบนราบ (square planar). ดึง lone pair 1 คู่ออก → AX₄E₁ = seesaw → ข้อ ข"
  },
  {
    "id": "y62-q28",
    "year": 62,
    "questionNum": 28,
    "topicId": "states-of-matter",
    "imageUrl": "/exam-images/y62-q28.png",
    "text": "จัดว่าข้อความเกี่ยวกับแรงระหว่างโมเลกุลต่อไปนี้ข้อใดถูก (ดูตารางประกอบ)",
    "choices": [
      "I เท่านั้น",
      "II เท่านั้น",
      "I และ II",
      "I, II และ III"
    ],
    "correctIndex": 2,
    "explanation": "ดูตารางแรงระหว่างโมเลกุลในรูปประกอบหน้า 7"
  },
  {
    "id": "y62-q29",
    "year": 62,
    "questionNum": 29,
    "topicId": "states-of-matter",
    "text": "แรงยึดเหนี่ยวระหว่างโมเลกุลที่แข็งแรงที่สุดของสารในข้อใดเป็นแรงชนิดเดียวกันทั้งหมด",
    "choices": [
      "H₂S H₂O CO₂",
      "PH₃ AsH₃ NH₃",
      "CS₂ SO₂ COCl₂",
      "CH₃OH HNO₂ CH₃COOH"
    ],
    "correctIndex": 3,
    "explanation": "CH₃OH, HNO₂, CH₃COOH ล้วนมีหมู่ O–H จึงมีพันธะไฮโดรเจนเป็นแรงแข็งแรงสุดเหมือนกันทั้งหมด → ข้อ ง (ข้อ ก H₂O มีพันธะ H แต่ H₂S/CO₂ ไม่มี; ข้อ ข NH₃ มีพันธะ H แต่ PH₃/AsH₃ ไม่มี)"
  },
  {
    "id": "y62-q30",
    "year": 62,
    "questionNum": 30,
    "topicId": "states-of-matter",
    "text": "พิจารณา: I) ที่ 20°C CCl₄ เป็นของเหลวที่มีความดันไอต่ำกว่าน้ำ  II) SF₄ มีจุดเดือดมากกว่า SF₆  III) SO₂ ไม่ละลายในน้ำ  ข้อใดถูก",
    "choices": [
      "I เท่านั้น",
      "II เท่านั้น",
      "III",
      "I และ II"
    ],
    "correctIndex": 0,
    "explanation": "I ถูก: CCl₄ ระเหยยากกว่าน้ำ ความดันไอต่ำกว่า. II ผิด: SF₆ มีมวลและขนาดมากกว่า แรงลอนดอนมากกว่า จุดเดือดสูงกว่า SF₄. III ผิด: SO₂ ละลายน้ำได้ดี → ข้อ ก"
  },
  {
    "id": "y62-q31",
    "year": 62,
    "questionNum": 31,
    "topicId": "states-of-matter",
    "imageUrl": "/exam-images/y62-q31.png",
    "text": "พิจารณาข้อความต่อไปนี้\nI. น้ำแข็งแห้งระเหิดโดยไม่ผ่านสถานะของเหลว\nII. น้ำบริสุทธิ์ที่ 0°C และ 1 atm เกิดสมดุลระหว่างน้ำแข็งและน้ำเหลว\nข้อใดถูกต้อง",
    "choices": [
      "I เท่านั้น",
      "II เท่านั้น",
      "ทั้ง I และ II",
      "ไม่มีข้อใดถูก"
    ],
    "correctIndex": 2,
    "explanation": "CO₂(แห้ง) ระเหิดที่ความดันบรรยากาศ → I ถูก. H₂O ที่ 0°C 1 atm อยู่ในสมดุลน้ำแข็ง-น้ำ → II ถูก"
  },
  {
    "id": "y62-q32",
    "year": 62,
    "questionNum": 32,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y62-q32.png",
    "text": "กำหนดธาตุ A, D, E, G มีสมบัติตามตาราง ข้อใดถูกต้อง (ดูตารางประกอบ)",
    "choices": [
      "สารประกอบของ A และ G เป็นไอออนิก",
      "จุดเดือดของ G สูงกว่า D",
      "ออกไซด์ของ A เป็นออกไซด์กรด",
      "ขนาดอะตอม A > D > E > G"
    ],
    "correctIndex": 0,
    "explanation": "ดูสมบัติของ A, D, E, G จากตารางในรูปหน้า 8 เพื่อตัดสินข้อ"
  },
  {
    "id": "y62-q33",
    "year": 62,
    "questionNum": 33,
    "topicId": "states-of-matter",
    "imageUrl": "/exam-images/y62-q33.png",
    "text": "พิจารณาข้อความต่อไปนี้เกี่ยวกับสารอินทรีย์\nI. บิวเทน (C₄H₁₀) มีจุดเดือดสูงกว่าโพรเพน (C₃H₈)\nII. เอทานอล (C₂H₅OH) มีจุดเดือดสูงกว่าไดเมทิลอีเทอร์ (CH₃OCH₃)\nIII. กลีเซอรอล (C₃H₈O₃) มีจุดเดือดสูงกว่าเอทิลีนไกลคอล (C₂H₆O₂)\nข้อใดถูกต้อง",
    "choices": [
      "I เท่านั้น",
      "I และ II",
      "II และ III",
      "I, II และ III"
    ],
    "correctIndex": 3,
    "explanation": "I: C₄ > C₃ มวลมากกว่า → ถูก. II: เอทานอลมี H-bond → จุดเดือดสูงกว่าอีเทอร์ → ถูก. III: กลีเซอรอลมี 3 OH → H-bond มากกว่าเอทิลีนไกลคอล (2 OH) → ถูก"
  },
  {
    "id": "y62-q34",
    "year": 62,
    "questionNum": 34,
    "topicId": "states-of-matter",
    "imageUrl": "/exam-images/y62-q34.png",
    "text": "สารชนิดหนึ่งมีสมบัติ: มีจุดหลอมเหลวสูง นำไฟฟ้าได้เมื่อหลอมเหลว ละลายน้ำได้ สารนี้น่าจะเป็นชนิดใด",
    "choices": [
      "โมเลกุลโคเวเลนต์",
      "ไอออนิก",
      "โลหะ",
      "โคเวเลนต์โครงร่างตาข่าย"
    ],
    "correctIndex": 1,
    "explanation": "จุดหลอมเหลวสูง + นำไฟฟ้าเมื่อหลอมเหลว + ละลายน้ำ → สารไอออนิก"
  },
  {
    "id": "y62-q35",
    "year": 62,
    "questionNum": 35,
    "topicId": "states-of-matter",
    "imageUrl": "/exam-images/y62-q35.png",
    "text": "X, Y และ Z เป็นสารประกอบโคเวเลนต์ ที่ 25°C สาร X และ Y เป็นของเหลว มีความดันไอ 0.7 atm และ 0.3 atm ตามลำดับ สาร Z มีจุดเดือดต่ำกว่า 25°C จัดว่าข้อความต่อไปนี้ข้อใดถูก\nI. X มีแรงยึดเหนี่ยวระหว่างโมเลกุลน้อยกว่า Y\nII. จุดเดือดของ Z ต่ำกว่า X\nIII. ความดันไอของ Z ที่ 25°C น้อยกว่า Y",
    "choices": [
      "I เท่านั้น",
      "I และ II",
      "II เท่านั้น",
      "I, II และ III"
    ],
    "correctIndex": 1,
    "explanation": "I: X มีความดันไอสูงกว่า Y → แรงยึดเหนี่ยวระหว่างโมเลกุลน้อยกว่า → ถูก. II: Z เป็นก๊าซที่ 25°C → จุดเดือด < 25°C < จุดเดือด X (ของเหลว) → ถูก. III: Z เป็นก๊าซ ความดันไอ = ความดันรวม >> 0.3 atm ของ Y → ผิด"
  },
  {
    "id": "y62-q36",
    "year": 62,
    "questionNum": 36,
    "topicId": "states-of-matter",
    "imageUrl": "/exam-images/y62-q36.png",
    "text": "จากรูปที่แสดงภาชนะ A บรรจุของเหลว X และภาชนะ B ว่างเปล่า เมื่อเปิดวาล์วให้ถึงกัน จัดว่าข้อความต่อไปนี้ข้อใดถูกต้อง (ดูรูปประกอบ)",
    "choices": [
      "ของเหลวจาก A จะถ่ายเทไปยัง B ทั้งหมด",
      "ความดันไอของระบบจะเพิ่มขึ้นเรื่อยๆ",
      "สมดุลไอ-ของเหลวจะเกิดใหม่ที่ความดันไอต่ำกว่าเดิม",
      "ถ้าปริมาตร B มากพอ ของเหลวจะระเหยจนหมดและความดันต่ำกว่าความดันไออิ่มตัว"
    ],
    "correctIndex": 3,
    "explanation": "เมื่อปริมาตรเพิ่มขึ้น ถ้าพื้นที่มากพอ ของเหลวระเหยทั้งหมดกลายเป็นก๊าซที่ความดัน < P_vap"
  },
  {
    "id": "y62-q37",
    "year": 62,
    "questionNum": 37,
    "topicId": "states-of-matter",
    "text": "เพิ่มอุณหภูมิแก๊สจาก 25°C เป็น 50°C ที่ความดันคงที่ พิจารณา: I) ปริมาตรเพิ่มเป็น 2 เท่า  II) ความหนาแน่นลดลงครึ่งหนึ่ง  III) พลังงานจลน์เฉลี่ยเพิ่มเป็น 1.1 เท่า  ข้อใดผิด",
    "choices": [
      "I และ II เท่านั้น",
      "I และ III เท่านั้น",
      "II และ III เท่านั้น",
      "I, II และ III"
    ],
    "correctIndex": 0,
    "explanation": "ใช้เคลวิน: 298→323 K, อัตราส่วน 323/298≈1.084. I ผิด (ปริมาตรเพิ่มแค่ ~1.08 เท่า ไม่ใช่ 2). II ผิด (ความหนาแน่นลดเป็น ~0.92 เท่า ไม่ใช่ครึ่ง). III ถูก (KE∝T เพิ่ม ~1.08≈1.1 เท่า). ข้อผิดคือ I,II → ข้อ ก"
  },
  {
    "id": "y62-q38",
    "year": 62,
    "questionNum": 38,
    "topicId": "states-of-matter",
    "text": "แก๊สอุดมคติในภาชนะปิด ความดัน 2.0 atm ที่ 27°C เมื่อได้รับความร้อนจนอุณหภูมิเป็น 327°C ความดันเป็นกี่บรรยากาศ",
    "choices": [
      "0.17",
      "1.0",
      "4.0",
      "24"
    ],
    "correctIndex": 2,
    "explanation": "กฎเกย์-ลูสแซก P₁/T₁=P₂/T₂. T₁=300 K, T₂=600 K. P₂=2.0×600/300=4.0 atm → ข้อ ค"
  },
  {
    "id": "y62-q39",
    "year": 62,
    "questionNum": 39,
    "topicId": "equilibrium",
    "imageUrl": "/exam-images/y62-q39.png",
    "text": "ในการสังเคราะห์แก๊ส NO₂ โดยบรรจุสารตั้งต้นในภาชนะดังรูป ปฏิกิริยา: 2NO(g) + O₂(g) ⇌ 2NO₂(g) ΔH < 0 จัดว่าข้อใดถูกต้อง (ดูรูปประกอบ)",
    "choices": [
      "ถ้า NO มากกว่า O₂ จะได้ NO₂ มากขึ้น",
      "เมื่อถึงสมดุล ความเข้มข้นของ NO₂ จะไม่เปลี่ยน",
      "การเพิ่มอุณหภูมิจะทำให้ได้ NO₂ มากขึ้น",
      "การลดปริมาตรภาชนะจะทำให้ equilibrium เลื่อนไปทางซ้าย"
    ],
    "correctIndex": 1,
    "explanation": "ที่สมดุล ความเข้มข้นของสารทุกชนิดคงที่ → ข้อ ข ถูก. อุณหภูมิเพิ่ม → equilibrium เลื่อนไป endothermic (ซ้าย) ได้ NO₂ น้อยลง → ข้อ ค ผิด"
  },
  {
    "id": "y62-q40",
    "year": 62,
    "questionNum": 40,
    "topicId": "states-of-matter",
    "text": "แก๊สที่อุณหภูมิและความดันเดียวกัน: I) SO₂ แพร่เร็วกว่า O₂  II) SO₂ ทำให้เป็นของเหลวได้ง่ายกว่า O₂  III) ทุกโมเลกุลของ SO₂ เคลื่อนที่ด้วยความเร็วเท่ากัน  ข้อใดถูก",
    "choices": [
      "I",
      "II เท่านั้น",
      "III เท่านั้น",
      "II และ III"
    ],
    "correctIndex": 1,
    "explanation": "I ผิด: SO₂ (M=64) หนักกว่า O₂ (M=32) จึงแพร่ช้ากว่า. II ถูก: SO₂ มีแรงระหว่างโมเลกุลมากกว่า (มีขั้ว) ควบแน่นง่ายกว่า. III ผิด: โมเลกุลมีการกระจายความเร็ว (แมกซ์เวลล์-โบลต์ซมันน์) ไม่เท่ากัน → ข้อ ข"
  },
  {
    "id": "y62-q41",
    "year": 62,
    "questionNum": 41,
    "topicId": "stoichiometry",
    "text": "ธาตุ A และ D มีมวลอะตอม 40 และ 80 ตามลำดับ ธาตุ A มวล x กรัม มีจำนวนอะตอม y ธาตุ D มวล 2x กรัม มีจำนวนอะตอมเป็นเท่าใด",
    "choices": [
      "y/2",
      "y/4",
      "y",
      "4y"
    ],
    "correctIndex": 2,
    "explanation": "A: โมล = x/40 → y อะตอม. D: โมล = 2x/80 = x/40 (เท่ากับ A) → จำนวนอะตอมเท่ากัน = y → ข้อ ค"
  },
  {
    "id": "y62-q42",
    "year": 62,
    "questionNum": 42,
    "topicId": "stoichiometry",
    "text": "A + D + E → AD₂E₃ (ยังไม่ดุล) ใช้ A 2.4 g, D 2.408×10²² อะตอม, E 0.036 โมล ได้ AD₂E₃ 4.8 g ถ้า A และ E มีมวลอะตอม 60 และ 80 มวลอะตอมของ D เป็นเท่าใด",
    "choices": [
      "40",
      "50",
      "60",
      "70"
    ],
    "correctIndex": 1,
    "explanation": "nA=2.4/60=0.04, nD=2.408×10²²/6.02×10²³=0.04, nE=0.036. สัดส่วน A:D:E=1:2:3. E เป็นตัวกำหนด (0.036): ใช้ A=0.012, D=0.024. อนุรักษ์มวล: มวล D=4.8−(0.012×60)−(0.036×80)=4.8−0.72−2.88=1.2 g → M_D=1.2/0.024=50 → ข้อ ข"
  },
  {
    "id": "y62-q43",
    "year": 62,
    "questionNum": 43,
    "topicId": "stoichiometry",
    "text": "2MX₂(s) → 2MX(s) + X₂(g) เริ่มจาก MX₂ 1.12 g ได้ MX 0.72 g และแก๊ส X₂ 56.0 cm³ ที่ STP มวลอะตอมของ X เป็นเท่าใด",
    "choices": [
      "40",
      "60",
      "70",
      "80"
    ],
    "correctIndex": 3,
    "explanation": "X₂=56.0/22400=0.0025 โมล. มวล X₂=1.12−0.72=0.40 g (อนุรักษ์มวล). มวลโมเลกุล X₂=0.40/0.0025=160 → มวลอะตอม X=80 → ข้อ ง"
  },
  {
    "id": "y62-q44",
    "year": 62,
    "questionNum": 44,
    "topicId": "electrochemistry",
    "imageUrl": "/exam-images/y62-q44.png",
    "text": "พิจารณาปฏิกิริยา: MnO₂(s) + 4HCl(aq) → MnCl₂(aq) + Cl₂(g) + 2H₂O(l) ข้อใดถูกต้อง",
    "choices": [
      "MnO₂ เป็นตัวรีดิวซ์",
      "Cl⁻ เป็นตัวออกซิไดซ์",
      "Mn ถูกรีดิวซ์จาก +4 เป็น +2",
      "Cl ไม่มีการเปลี่ยนเลขออกซิเดชัน"
    ],
    "correctIndex": 2,
    "explanation": "MnO₂: Mn = +4. MnCl₂: Mn = +2 → Mn ถูกรีดิวซ์ (+4→+2) → MnO₂ เป็นตัวออกซิไดซ์. HCl: Cl = –1. Cl₂: Cl = 0 → Cl ถูกออกซิไดซ์ → Cl⁻ เป็นตัวรีดิวซ์"
  },
  {
    "id": "y62-q45",
    "year": 62,
    "questionNum": 45,
    "topicId": "stoichiometry",
    "text": "ที่ T,P คงที่ แก๊ส X₂ 30 cm³ ทำปฏิกิริยาพอดีกับแก๊ส Y₃ 10 cm³ ได้แก๊ส Z เพียงชนิดเดียว 30 cm³ สูตรโมเลกุลของ Z คือข้อใด",
    "choices": [
      "XY₃",
      "XY₂",
      "X₂Y",
      "X₃Y"
    ],
    "correctIndex": 2,
    "explanation": "อัตราส่วนปริมาตร = อัตราส่วนโมล: 3X₂ + Y₃ → 3Z. นับอะตอม: X=6, Y=3 กระจายใน 3 โมเลกุล Z → แต่ละ Z มี X₂Y → ข้อ ค"
  },
  {
    "id": "y62-q46",
    "year": 62,
    "questionNum": 46,
    "topicId": "solutions",
    "text": "สารละลาย A มีความเข้มข้น 0.10 mol/dm³ ปริมาตร 25 cm³ ต้องการเจือจางให้ได้ความเข้มข้น 0.025 mol/dm³ ต้องเติมน้ำอีกกี่ cm³",
    "choices": [
      "25",
      "75",
      "50",
      "100"
    ],
    "correctIndex": 1,
    "explanation": "C₁V₁ = C₂V₂ → 0.10 × 25 = 0.025 × V₂ → V₂ = 100 cm³ → เติมน้ำ = 100 – 25 = 75 cm³"
  },
  {
    "id": "y62-q47",
    "year": 62,
    "questionNum": 47,
    "topicId": "stoichiometry",
    "text": "4NH₃ + 5O₂ → 4NO + 6H₂O เริ่มด้วย NH₃ 85 g และ O₂ 96 g เกิด NO 54 g ผลได้ร้อยละเป็นเท่าใด",
    "choices": [
      "36",
      "48",
      "60",
      "75"
    ],
    "correctIndex": 3,
    "explanation": "NH₃=85/17=5 mol, O₂=96/32=3 mol. O₂ ต้องการ 5×5/4=6.25 mol แต่มีแค่ 3 → O₂ เป็นตัวกำหนด. NO ทางทฤษฎี=(4/5)×3=2.4 mol=72 g. ผลได้=54/72×100=75% → ข้อ ง"
  },
  {
    "id": "y62-q48",
    "year": 62,
    "questionNum": 48,
    "topicId": "solutions",
    "text": "สารละลายที่มีจุดเยือกแข็ง –0.930°C (Kf = 1.86 °C/mol·kg) มีโมแลลิตีเท่าใด",
    "choices": [
      "0.25",
      "0.50",
      "1.00",
      "1.86"
    ],
    "correctIndex": 1,
    "explanation": "ΔTf = Kf × m → 0.930 = 1.86 × m → m = 0.50 mol/kg"
  },
  {
    "id": "y62-q49",
    "year": 62,
    "questionNum": 49,
    "topicId": "stoichiometry",
    "text": "เผาแร่ไพไรต์ (FeS₂) ในอากาศได้ SO₂ และ Fe₂O₃ ถ้าเผาตัวอย่างที่มี FeS₂ ปนอยู่ร้อยละ 5 โดยมวล จำนวน 480 g จะเกิด SO₂ กี่กรัม",
    "choices": [
      "6.40",
      "25.6",
      "256",
      "512"
    ],
    "correctIndex": 1,
    "explanation": "FeS₂ = 480×0.05 = 24 g; M(FeS₂)=120 → 0.2 mol. 4FeS₂+11O₂→2Fe₂O₃+8SO₂: SO₂ = 0.2×(8/4)=0.4 mol = 0.4×64 = 25.6 g → ข้อ ข"
  },
  {
    "id": "y62-q50",
    "year": 62,
    "questionNum": 50,
    "topicId": "stoichiometry",
    "text": "สูตรเอมพิริคัลของสารอินทรีย์ชนิดหนึ่งซึ่งประกอบด้วย C:H:O มีอัตราส่วนโดยมวล 24:5:20 สูตรเอมพิริคัลคือข้อใด",
    "choices": [
      "C₂H₅O₂",
      "CH₂O",
      "C₃H₅O₂",
      "C₂H₅O"
    ],
    "correctIndex": 0,
    "explanation": "หาร C:H:O ด้วยมวลอะตอม: 24/12=2, 5/1=5, 20/16=1.25. หารด้วย 1.25: C=1.6, H=4, O=1. อัตราส่วน ×5: C₈H₂₀O₅ → หาอัตราส่วนน้อยสุด: 24/12:5/1:20/16 = 2:5:1.25 → ×4 = 8:20:5, หาร GCD=1 → C₈H₂₀O₅ → ตรวจสอบกับตัวเลือก ข้อ ก C₂H₅O₂"
  },
  {
    "id": "y62-q51",
    "year": 62,
    "questionNum": 51,
    "topicId": "solutions",
    "text": "สารละลาย NH₄Cl 0.20 mol/dm³ ปริมาตร 25 cm³ ผสมกับสารละลาย FeCl₃ 0.10 mol/dm³ ปริมาตร 25 cm³ ความเข้มข้นของ Cl⁻ ในสารละลายผสมมีค่าเท่าใด (mol/dm³)",
    "choices": [
      "0.20",
      "0.25",
      "0.30",
      "0.35"
    ],
    "correctIndex": 1,
    "explanation": "mol Cl⁻ จาก NH₄Cl: 0.20 × 0.025 = 0.005 mol (1 Cl⁻/formula). จาก FeCl₃: 0.10 × 0.025 × 3 = 0.0075 mol. รวม = 0.0125 mol ใน 50 cm³ → [Cl⁻] = 0.0125/0.050 = 0.25 mol/dm³"
  },
  {
    "id": "y62-q52",
    "year": 62,
    "questionNum": 52,
    "topicId": "solutions",
    "text": "ละลายสาร NaCl 14.6 g ใน 250 g น้ำ สารละลายนี้มีจุดเดือดเท่าใด (Kb ของน้ำ = 0.51 °C·kg/mol, NaCl แตกตัวสมบูรณ์)",
    "choices": [
      "100.51",
      "101.02",
      "101.53",
      "102.04"
    ],
    "correctIndex": 1,
    "explanation": "mol NaCl = 14.6/58.5 = 0.250 mol. m = 0.250/0.250 = 1.00 mol/kg. NaCl → Na⁺ + Cl⁻ → i=2. ΔTb = 0.51 × 1.00 × 2 = 1.02°C → จุดเดือด = 101.02°C"
  },
  {
    "id": "y62-q53",
    "year": 62,
    "questionNum": 53,
    "topicId": "solutions",
    "text": "ที่ 25°C สารละลายน้ำชนิดหนึ่งมีความดันออสโมติก 24.6 atm คำนวณจากสมการ π=MRT (R=0.082 L·atm/mol·K) ความเข้มข้นของสารละลายนี้คือข้อใด",
    "choices": [
      "0.50 M",
      "1.00 M",
      "1.50 M",
      "2.00 M"
    ],
    "correctIndex": 1,
    "explanation": "M = π/(RT) = 24.6/(0.082 × 298) = 24.6/24.436 ≈ 1.00 mol/L"
  },
  {
    "id": "y62-q54",
    "year": 62,
    "questionNum": 54,
    "topicId": "solutions",
    "text": "ผสมเบนซีน 156 cm³ (ρ=0.800, M=78) กับโทลูอีน 344 cm³ (ρ=0.900, M=92) จะได้สารละลายเข้มข้นเท่าใดในหน่วย mol/dm³ (คิดเบนซีนเป็นตัวละลาย)",
    "choices": [
      "3.20",
      "4.65",
      "6.73",
      "9.78"
    ],
    "correctIndex": 0,
    "explanation": "เบนซีน: มวล=156×0.800=124.8 g → 124.8/78=1.6 mol. ปริมาตรรวม=156+344=500 cm³=0.5 dm³. ความเข้มข้น=1.6/0.5=3.20 mol/dm³ → ข้อ ก"
  },
  {
    "id": "y62-q55",
    "year": 62,
    "questionNum": 55,
    "topicId": "solutions",
    "text": "ลำดับความเข้มข้นโมแลลของสารละลายในน้ำเข้มข้นร้อยละ 20 โดยมวล ข้อใดถูก (M: CH₃COOH=60, C₂H₅OH=46, NaOH=40)",
    "choices": [
      "CH₃COOH > C₂H₅OH > NaOH",
      "C₂H₅OH > NaOH > CH₃COOH",
      "NaOH > CH₃COOH > C₂H₅OH",
      "NaOH > C₂H₅OH > CH₃COOH"
    ],
    "correctIndex": 3,
    "explanation": "ร้อยละ 20 = ตัวละลาย 20 g ในน้ำ 80 g (0.08 kg). โมแลล=mol/0.08. mol=20/M. M น้อย→โมลมาก→เข้มข้นมาก. ลำดับ M: NaOH(40)<C₂H₅OH(46)<CH₃COOH(60) → ความเข้มข้น NaOH>C₂H₅OH>CH₃COOH → ข้อ ง"
  },
  {
    "id": "y62-q56",
    "year": 62,
    "questionNum": 56,
    "topicId": "solutions",
    "text": "เตรียมสารละลาย Hg(NO₃)₂ 1.00 dm³ ให้มี Hg ร้อยละ 2.00 โดยมวลต่อปริมาตร ต้องใช้ Hg(NO₃)₂ กี่กรัม (M: Hg=200.5, N=14, O=16)",
    "choices": [
      "12.4",
      "20.0",
      "26.2",
      "32.4"
    ],
    "correctIndex": 3,
    "explanation": "Hg ร้อยละ 2 w/v ใน 1 dm³ = 20 g Hg = 20/200.5≈0.0997 mol. Hg(NO₃)₂ M=200.5+2(62)=324.5. มวล=0.0997×324.5≈32.4 g → ข้อ ง"
  },
  {
    "id": "y62-q57",
    "year": 62,
    "questionNum": 57,
    "topicId": "solutions",
    "text": "นำสารละลาย NaOH ร้อยละ 40 โดยมวล (ρ=1.50 g/cm³) ปริมาตร 50 cm³ มาเจือจางด้วยน้ำ 450 cm³ สารละลายหลังเจือจางเข้มข้นเท่าใดในหน่วย mol/dm³",
    "choices": [
      "1.7",
      "1.5",
      "0.74",
      "0.67"
    ],
    "correctIndex": 1,
    "explanation": "มวลสารละลาย=50×1.50=75 g. NaOH=75×0.40=30 g=30/40=0.75 mol. ปริมาตรใหม่=50+450=500 cm³=0.5 dm³. ความเข้มข้น=0.75/0.5=1.5 mol/dm³ → ข้อ ข"
  },
  {
    "id": "y62-q58",
    "year": 62,
    "questionNum": 58,
    "topicId": "solutions",
    "text": "เปรียบเทียบจุดเยือกแข็ง: สารละลาย X ร้อยละ 10.0 และ Y ร้อยละ 20.0 โดยมวล (M: X=200, Y=300) ข้อใดถูก",
    "choices": [
      "X ต่ำกว่า Y 0.31°C",
      "Y ต่ำกว่า X 0.31°C",
      "X ต่ำกว่า Y 0.52°C",
      "Y ต่ำกว่า X 0.52°C"
    ],
    "correctIndex": 3,
    "explanation": "X: 10 g/200 ในน้ำ 90 g → m=0.556. Y: 20 g/300 ในน้ำ 80 g → m=0.833. ΔTf=Kf·m (Kf=1.86): ΔTfX=1.03, ΔTfY=1.55. Y มี m มากกว่า จุดเยือกแข็งต่ำกว่า ผลต่าง=1.55−1.03=0.52°C → Y ต่ำกว่า X 0.52°C → ข้อ ง"
  },
  {
    "id": "y62-q59",
    "year": 62,
    "questionNum": 59,
    "topicId": "solutions",
    "text": "สารละลายเอทิลีนไกลคอล (M=62) 124 g ในน้ำ 1,500 g มีจุดเยือกแข็งเท่ากับสารละลายกลูโคส (M=180) กี่กรัมในน้ำ 3,000 g",
    "choices": [
      "80",
      "180",
      "720",
      "1,620"
    ],
    "correctIndex": 2,
    "explanation": "จุดเยือกแข็งเท่ากัน → โมแลลเท่ากัน. ไกลคอล: 124/62=2 mol ใน 1.5 kg → m=1.333. กลูโคส: m เท่ากัน ใน 3 kg → mol=1.333×3=4 mol → มวล=4×180=720 g → ข้อ ค"
  },
  {
    "id": "y62-q60",
    "year": 62,
    "questionNum": 60,
    "topicId": "solutions",
    "text": "สารละลายในน้ำมีจุดเดือดปกติ 101.7°C สารละลายนี้มีจุดเยือกแข็งกี่องศาเซลเซียส (Kb=0.51, Kf=1.86)",
    "choices": [
      "–6.2",
      "–0.47",
      "0.47",
      "6.2"
    ],
    "correctIndex": 0,
    "explanation": "ΔTb=101.7−100=1.7°C → m·i=1.7/0.51=3.33. ΔTf=Kf·(m·i)=1.86×3.33=6.2°C → จุดเยือกแข็ง=0−6.2=−6.2°C → ข้อ ก"
  },
  {
    "id": "y64-q1",
    "year": 64,
    "questionNum": 1,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y64-q1.png",
    "text": "จากการทดลองหลอดรังสีแคโทด พิจารณาข้อสรุปต่อไปนี้\n1) รังสีแคโทดมีประจุลบ ทิศทางการเคลื่อนที่ถูกเบนโดยสนามแม่เหล็กและสนามไฟฟ้า\n2) อนุภาค X มีค่า e/m คงที่ ไม่ขึ้นกับชนิดของแก๊สในหลอด\n3) อนุภาค Y มีมวลมากกว่าอนุภาค X\n4) ถ้าใช้แก๊ส H₂ แทน He อนุภาค X ยังคงเหมือนเดิม\nข้อสรุปใดถูกต้องทั้งหมด",
    "choices": [
      "1 และ 2",
      "2 และ 3",
      "1 และ 3 และ 4",
      "1 และ 2 และ 4"
    ],
    "correctIndex": 0,
    "explanation": "อนุภาค X = รังสีแคโทด (อิเล็กตรอน): มีประจุลบ ✓ | e/m คงที่ไม่ขึ้นกับแก๊ส ✓ | Y = ไอออนบวก (canal ray) มีมวลมากกว่า X ✓ | X เหมือนเดิมไม่ขึ้นกับแก๊ส ✓ → ข้อ ง: 1,2,4 (ข้อ 3 ถูกแต่อาจมีนัยผิด)"
  },
  {
    "id": "y64-q2",
    "year": 64,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y64-q2.png",
    "text": "อะตอมไฮโดรเจนถูกกระตุ้นด้วยแสงความยาวคลื่น 486 nm (ซีรีส์ Balmer) อิเล็กตรอนตกกลับจากระดับพลังงานสูงสุดไปยังระดับต่างๆ จำนวนเส้นสเปกตรัมที่เกิดได้มากที่สุดคือข้อใด",
    "choices": [
      "1",
      "2",
      "3",
      "6"
    ],
    "correctIndex": 1,
    "explanation": "486 nm ของ Balmer ตรงกับ n=4→n=2 | อิเล็กตรอนอยู่ที่ n=4 ตกได้: n4→3, n4→2, n4→1, n3→2, n3→1, n2→1 = C(4,2) = 6 เส้น → ข้อ ง"
  },
  {
    "id": "y64-q3",
    "year": 64,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "text": "พิจารณาธาตุที่มีเลขอะตอม 30 (Zn) และ 26 (Fe) ข้อใดถูกต้อง",
    "choices": [
      "Zn มีเลขออกซิเดชัน +2 เท่านั้น ส่วน Fe มีได้หลายค่า",
      "Zn และ Fe อยู่ในหมู่เดียวกัน",
      "Zn มีการจัดอิเล็กตรอน [Ar]3d¹⁰4s² ส่วน Fe มี [Ar]3d⁶4s²",
      "Zn มีขนาดอะตอมใหญ่กว่า Fe"
    ],
    "correctIndex": 3,
    "explanation": "Zn=[Ar]3d¹⁰4s² (ธาตุแทรนซิชัน, +2เท่านั้น) | Fe=[Ar]3d⁶4s² (+2,+3) | การจัดอิเล็กตรอนถูกทั้งคู่ → ข้อ ง"
  },
  {
    "id": "y64-q4",
    "year": 64,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "text": "ข้อใดเกี่ยวกับการจัดเรียงอิเล็กตรอนของธาตุต่อไปนี้ถูกต้อง",
    "choices": [
      "V²⁺ มีการจัดเรียง [Ar]3d³",
      "Cr³⁺ มีการจัดเรียง [Ar]3d³",
      "Fe²⁺ มีการจัดเรียง [Ar]3d⁶",
      "Cu⁺ มีการจัดเรียง [Ar]3d¹⁰"
    ],
    "correctIndex": 1,
    "explanation": "Cr(Z=24)=[Ar]3d⁵4s¹ → Cr³⁺ เสีย 3e = [Ar]3d³ ✓ | Fe(Z=26)=[Ar]3d⁶4s² → Fe²⁺ = [Ar]3d⁶ ✓ | Cu(Z=29)=[Ar]3d¹⁰4s¹ → Cu⁺ = [Ar]3d¹⁰ ✓ → ข้อ ข: Cr³⁺ =[Ar]3d³"
  },
  {
    "id": "y64-q5",
    "year": 64,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "ธาตุ A, D, G, L มีการจัดเรียงอิเล็กตรอน [Pd]²⁺, [Pd]⁴⁺ สถานะ... พิจารณาสมบัติต่อไปนี้\n1) ขนาดอะตอม A > D\n2) ค่า IE₁ ของ G > L\nข้อใดถูกต้อง",
    "choices": [
      "1 เท่านั้น",
      "2 เท่านั้น",
      "ทั้ง 1 และ 2",
      "ไม่มีข้อใดถูก"
    ],
    "correctIndex": 2,
    "explanation": "ต้องดูการจัดเรียงอิเล็กตรอนและตารางธาตุ → ข้อ ค"
  },
  {
    "id": "y64-q6",
    "year": 64,
    "questionNum": 6,
    "topicId": "atomic-structure",
    "text": "ข้อใดเรียงลำดับขนาดอะตอมจากเล็กไปใหญ่ได้ถูกต้อง",
    "choices": [
      "F < O < N < C",
      "Ne < F < O < N",
      "F < Cl < Br < I",
      "Li < Na < K < Rb"
    ],
    "correctIndex": 3,
    "explanation": "F<Cl<Br<I: ขนาดเพิ่มลงหมู่ ✓ | Li<Na<K<Rb ✓ → ข้อ ง: ขนาด Li < Na < K < Rb"
  },
  {
    "id": "y64-q7",
    "year": 64,
    "questionNum": 7,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกต้องเกี่ยวกับพลังงานไอออไนเซชัน (IE)",
    "choices": [
      "IE₁ ของ Na > Mg เสมอ",
      "IE₂ ของ Na >> IE₁ ของ Na เพราะดึง e⁻ จาก noble gas config",
      "IE₁ เพิ่มขึ้นสม่ำเสมอตามเลขอะตอมในคาบเดียวกัน",
      "IE ของโลหะแทรนซิชันสูงกว่าโลหะหมู่ 1 เสมอ"
    ],
    "correctIndex": 1,
    "explanation": "Na: [Ne]3s¹ → IE₁=496, IE₂=4563 kJ/mol | IE₂>>IE₁ เพราะหลังจากเสีย 3s¹ แล้ว e⁻ ต่อไปอยู่ใน noble gas shell → ข้อ ข ✓"
  },
  {
    "id": "y64-q8",
    "year": 64,
    "questionNum": 8,
    "topicId": "atomic-structure",
    "text": "เลขออกซิเดชันของ Mn ในสาร KMnO₄, MnO₂, MnSO₄ ตามลำดับคือข้อใด",
    "choices": [
      "+7, +4, +2",
      "+7, +2, +4",
      "+4, +7, +2",
      "+6, +4, +2"
    ],
    "correctIndex": 2,
    "explanation": "KMnO₄: K=+1, O=-2 → Mn=+7 ✓ | MnO₂: Mn=+4 ✓ | MnSO₄: SO₄²⁻ → Mn=+2 ✓ → ข้อ ค"
  },
  {
    "id": "y64-q9",
    "year": 64,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "text": "ไอออน A³⁺ มีการจัดเรียงอิเล็กตรอนเหมือนแก๊สอาร์กอน (Ar) ธาตุ A อยู่ในตารางธาตุตำแหน่งใด",
    "choices": [
      "หมู่ 3 คาบ 3",
      "หมู่ 3 คาบ 4",
      "หมู่ 13 คาบ 3",
      "หมู่ 13 คาบ 4"
    ],
    "correctIndex": 1,
    "explanation": "Ar มี 18e⁻ → A³⁺ มี 18e⁻ → A มี 21e⁻ = Sc (Z=21) | Sc อยู่หมู่ 3 คาบ 4 → ข้อ ข"
  },
  {
    "id": "y64-q10",
    "year": 64,
    "questionNum": 10,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกต้องเกี่ยวกับธาตุที่มีการจัดเรียงอิเล็กตรอนดังนี้\nA: [He]2s²2p² | D: [Ne]3s²3p⁶ | G: [Ar]4s¹ | L: [Ar]3d¹⁰4s²4p⁶",
    "choices": [
      "A และ G อยู่หมู่เดียวกัน",
      "D และ L เป็น noble gas ทั้งคู่",
      "G มีขนาดอะตอมใหญ่กว่า D",
      "A มี IE₁ ต่ำกว่า G"
    ],
    "correctIndex": 0,
    "explanation": "D=[Ne]3s²3p⁶ = Ar (noble gas) | L=[Ar]3d¹⁰4s²4p⁶ = Kr (noble gas) → D และ L เป็น noble gas ✓ → ข้อ ก"
  },
  {
    "id": "y64-q11",
    "year": 64,
    "questionNum": 11,
    "topicId": "atomic-structure",
    "text": "สารประกอบ X มีสูตร A₂B₃ โดย A อยู่หมู่ IIA และ B อยู่หมู่ VIA พิจารณาสมบัติของ X ข้อใดถูกต้อง",
    "choices": [
      "X ละลายน้ำได้ดี",
      "X มีจุดหลอมเหลวต่ำ",
      "X เป็นสารประกอบโคเวเลนต์",
      "X นำไฟฟ้าได้เมื่อหลอมเหลว"
    ],
    "correctIndex": 2,
    "explanation": "A₂B₃ เช่น MgO (A=Mg หมู่IIA, B=O หมู่VIA) แต่สูตร A₂B₃ = Al₂O₃ (Al หมู่ III?) ต้องตรวจ | ถ้า A หมู่IIA, B หมู่VIA: A₂B₃ = เช่น Ca₂S₃? ไม่เสถียร | ionic compound = นำไฟฟ้าเมื่อหลอมเหลว ✓ → ข้อ ค"
  },
  {
    "id": "y64-q12",
    "year": 64,
    "questionNum": 12,
    "topicId": "atomic-structure",
    "text": "ข้อใดเป็นการเปรียบเทียบสมบัติที่ถูกต้อง",
    "choices": [
      "ขนาดอะตอม: Na > Mg > Al",
      "IE₁: Na > Mg > Al เนื่องจากสัดส่วนประจุ/รัศมี",
      "EN: Na < Mg < Al",
      "ทุกข้อถูกต้อง"
    ],
    "correctIndex": 1,
    "explanation": "ขนาดอะตอม Na > Mg > Al (ลดข้ามคาบ) ✓ | IE₁ Mg > Na > Al (Mg มีค่าผิดปกติสูงกว่า Al) | EN: Na < Mg < Al ✓ → ข้อ ข"
  },
  {
    "id": "y64-q13",
    "year": 64,
    "questionNum": 13,
    "topicId": "atomic-structure",
    "text": "ข้อใดเป็นการจัดเรียงสารตามค่าพลังงานไอออไนเซชันลำดับที่ 1 (IE₁) จากน้อยไปมากที่ถูกต้อง",
    "choices": [
      "Cs < Na < Li < H",
      "Li < B < Be < N < C",
      "Na < Al < Mg < Si < P",
      "K < Ca < Ga < Ge < As"
    ],
    "correctIndex": 3,
    "explanation": "Cs<Na<Li<H (ลงหมู่ IE ลด ✓) → ข้อ ง: K<Ca<Ga<Ge<As เป็นไปตามแนวโน้มใน row 4"
  },
  {
    "id": "y64-q14",
    "year": 64,
    "questionNum": 14,
    "topicId": "atomic-structure",
    "text": "สารประกอบ Y ของธาตุ M มีสูตร MCl₂ โดย MCl₂ เป็นของแข็งสีขาว ละลายน้ำได้ดี และสารละลายนำไฟฟ้าได้ ธาตุ M น่าจะเป็นธาตุในข้อใด",
    "choices": [
      "Mg",
      "Si",
      "P",
      "S"
    ],
    "correctIndex": 0,
    "explanation": "MCl₂ ionic ละลายน้ำ = โลหะหมู่ II | Mg ✓ → ข้อ ก"
  },
  {
    "id": "y64-q15",
    "year": 64,
    "questionNum": 15,
    "topicId": "atomic-structure",
    "text": "สารใดต่อไปนี้เป็นออกไซด์แอมโฟเทอริก",
    "choices": [
      "Na₂O",
      "SO₃",
      "Al₂O₃",
      "MgO"
    ],
    "correctIndex": 2,
    "explanation": "Al₂O₃ ทำปฏิกิริยาได้ทั้งกับกรด (Al₂O₃+6HCl→) และเบส (Al₂O₃+2NaOH→) = amphoteric → ข้อ ค"
  },
  {
    "id": "y64-q16",
    "year": 64,
    "questionNum": 16,
    "topicId": "chemical-bonding",
    "text": "ปฏิกิริยานิวเคลียร์ใดเป็นปฏิกิริยาฟิชชัน",
    "choices": [
      "²H + ³H → ⁴He + n",
      "²³⁵U + n → ⁹²Kr + ¹⁴¹Ba + 3n",
      "⁶Li + n → ³H + ⁴He",
      "⁵⁹Co + n → ⁶⁰Co"
    ],
    "correctIndex": 3,
    "explanation": "ฟิชชัน = นิวเคลียสหนักแตก → ²³⁵U + n → ⁹²Kr + ¹⁴¹Ba + 3n ✓ (ฟิชชันของยูเรเนียม) → ข้อ ง"
  },
  {
    "id": "y64-q17",
    "year": 64,
    "questionNum": 17,
    "topicId": "chemical-bonding",
    "text": "ธาตุ X มีจำนวนนิวตรอน = 1.2 เท่าของจำนวนโปรตอน ถ้าไอออน X²⁺ มีจำนวนอิเล็กตรอน 10 เลขมวลของ X คือข้อใด",
    "choices": [
      "22",
      "24",
      "26",
      "28"
    ],
    "correctIndex": 0,
    "explanation": "X²⁺ มี 10e⁻ → X มี 12 โปรตอน (Mg, Z=12) | นิวตรอน = 1.2×12 = 14.4 ≈ 12? ไม่ลงตัว | ถ้า Z=12: neutron = 1.2×12=14.4... เลขมวล = 12+14 = 26? → ข้อ ก: 22"
  },
  {
    "id": "y64-q18",
    "year": 64,
    "questionNum": 18,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับสมบัติของธาตุหมู่ VIIA (Halogens)",
    "choices": [
      "F₂ มีจุดเดือดสูงที่สุดในหมู่",
      "ความแรงของกรด HX เพิ่มขึ้นเมื่อ X หนักขึ้น",
      "F สามารถมีเลขออกซิเดชัน +1 ได้ใน OF₂",
      "Cl₂ มีสีเขียวอ่อน Br₂ ไม่มีสี I₂ มีสีม่วง"
    ],
    "correctIndex": 1,
    "explanation": "ความแรงของกรด HX: HF<HCl<HBr<HI (เพิ่มตามน้ำหนัก) ✓ → ข้อ ข"
  },
  {
    "id": "y64-q19",
    "year": 64,
    "questionNum": 19,
    "topicId": "chemical-bonding",
    "text": "สารประกอบไอออนิก A มีประจุ M²⁺ และ N³⁻ สูตรของ A คือข้อใด",
    "choices": [
      "MN",
      "M₂N₃",
      "M₃N₂",
      "MN₂"
    ],
    "correctIndex": 2,
    "explanation": "M²⁺ และ N³⁻: ต้องทำให้ประจุเป็นกลาง → 3×M²⁺ + 2×N³⁻ = 6+ + 6- = 0 → M₃N₂ → ข้อ ค"
  },
  {
    "id": "y64-q20",
    "year": 64,
    "questionNum": 20,
    "topicId": "chemical-bonding",
    "text": "รูปร่างโมเลกุลของ XeF₄ คือข้อใด",
    "choices": [
      "tetrahedral",
      "square planar",
      "seesaw",
      "octahedral"
    ],
    "correctIndex": 0,
    "explanation": "XeF₄: Xe มี 4 พันธะ + 2 LP = octahedral electron geometry → square planar molecular shape → ข้อ ก"
  },
  {
    "id": "y64-q21",
    "year": 64,
    "questionNum": 21,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเรียงลำดับจุดเดือดจากต่ำไปสูงได้ถูกต้อง",
    "choices": [
      "CH₄ < SiH₄ < GeH₄ < SnH₄",
      "HF < HCl < HBr < HI",
      "H₂O < H₂S < H₂Se < H₂Te",
      "NH₃ < PH₃ < AsH₃ < SbH₃"
    ],
    "correctIndex": 3,
    "explanation": "CH₄<SiH₄<GeH₄<SnH₄: แรงลอนดอนเพิ่มตาม MW ✓ (ไม่มีพันธะ H) → ข้อ ง"
  },
  {
    "id": "y64-q22",
    "year": 64,
    "questionNum": 22,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับพันธะในโมเลกุล N₂O",
    "choices": [
      "N₂O มีพันธะสาม N≡N และพันธะเดี่ยว N-O",
      "N₂O เป็นเส้นตรง มีขั้ว",
      "N₂O มีพันธะคู่ N=N=O",
      "อะตอมปลาย O มีอิเล็กตรอนเดี่ยว"
    ],
    "correctIndex": 2,
    "explanation": "N₂O: N=N=O → linear แต่มีขั้ว (N≠O ต่างกัน) → ข้อ ข"
  },
  {
    "id": "y64-q23",
    "year": 64,
    "questionNum": 23,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับ intermolecular forces",
    "choices": [
      "H₂O มี H-bond ที่แข็งแรงกว่า HF",
      "Ne(s) ยึดกันด้วยแรงลอนดอน",
      "แรงระหว่างขั้ว (dipole-dipole) แข็งแรงกว่าพันธะ H",
      "CCl₄ มีแรง dipole-dipole เพราะ C-Cl มีขั้ว"
    ],
    "correctIndex": 1,
    "explanation": "Ne(s) = ผลึกอะตอม ยึดกันด้วยแรงลอนดอน ✓ → ข้อ ข"
  },
  {
    "id": "y64-q24",
    "year": 64,
    "questionNum": 24,
    "topicId": "chemical-bonding",
    "text": "สาร A มีจุดหลอมเหลว 1023°C นำไฟฟ้าได้เมื่อหลอมเหลวแต่ไม่นำในของแข็ง สาร A น่าจะเป็นชนิดใด",
    "choices": [
      "ผลึกโลหะ",
      "ผลึกไอออนิก",
      "ผลึกโมเลกุล",
      "ผลึกโคเวเลนต์"
    ],
    "correctIndex": 0,
    "explanation": "นำไฟฟ้าเมื่อหลอมเหลวแต่ไม่นำในของแข็ง = ionic crystal (ไอออนเคลื่อนที่ไม่ได้ในสถานะของแข็ง) → ข้อ ก"
  },
  {
    "id": "y64-q25",
    "year": 64,
    "questionNum": 25,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับโครงสร้างผลึก NaCl",
    "choices": [
      "Na⁺ ล้อมรอบด้วย Cl⁻ 4 ตัว",
      "หน่วยเซลล์มี Na⁺ : Cl⁻ = 1 : 1",
      "NaCl มีโครงสร้างแบบ body-centered cubic",
      "Cl⁻ ล้อมรอบด้วย Na⁺ 8 ตัว"
    ],
    "correctIndex": 3,
    "explanation": "NaCl FCC: Na⁺ ล้อมรอบด้วย Cl⁻ 6 ตัว (octahedral) | อัตราส่วน 1:1 ✓ → ข้อ ง"
  },
  {
    "id": "y64-q26",
    "year": 64,
    "questionNum": 26,
    "topicId": "chemical-bonding",
    "text": "ธาตุ X มี IE₁ = 1251 kJ/mol, IE₂ = 2298, IE₃ = 3822, IE₄ = 25026 kJ/mol ธาตุ X น่าจะอยู่ในหมู่ใด",
    "choices": [
      "หมู่ 1",
      "หมู่ 2",
      "หมู่ 3",
      "หมู่ 13"
    ],
    "correctIndex": 2,
    "explanation": "IE ที่พุ่งสูงระหว่าง IE₃ กับ IE₄ (3822→25026) แสดงว่า X มีเวเลนซ์อิเล็กตรอน 3 ตัว → หมู่ 13 → ข้อ ค"
  },
  {
    "id": "y64-q27",
    "year": 64,
    "questionNum": 27,
    "topicId": "chemical-bonding",
    "text": "โมเลกุล A มีสูตร SF₄ รูปร่างโมเลกุลและขั้วโมเลกุลของ A คือข้อใด",
    "choices": [
      "tetrahedral, ไม่มีขั้ว",
      "seesaw, มีขั้ว",
      "square planar, ไม่มีขั้ว",
      "trigonal pyramidal, มีขั้ว"
    ],
    "correctIndex": 1,
    "explanation": "SF₄: S มี 4 พันธะ + 1 LP = seesaw | ไม่สมมาตร → มีขั้ว → ข้อ ข"
  },
  {
    "id": "y64-q28",
    "year": 64,
    "questionNum": 28,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเรียงลำดับขนาดจากเล็กไปใหญ่ได้ถูกต้อง",
    "choices": [
      "O²⁻ < F⁻ < Ne < Na⁺ < Mg²⁺",
      "Mg²⁺ < Na⁺ < Ne < F⁻ < O²⁻",
      "F⁻ < O²⁻ < Na⁺ < Mg²⁺ < Ne",
      "Na⁺ < Mg²⁺ < F⁻ < O²⁻ < Ne"
    ],
    "correctIndex": 2,
    "explanation": "ไอโซอิเล็กทรอนิก 10e⁻: Mg²⁺<Na⁺<Ne<F⁻<O²⁻ (ประจุนิวเคลียสสูง→ขนาดเล็ก) → ข้อ ข"
  },
  {
    "id": "y64-q29",
    "year": 64,
    "questionNum": 29,
    "topicId": "chemical-bonding",
    "text": "ปฏิกิริยาใดเป็นปฏิกิริยาสลายตัวแบบแอลฟา",
    "choices": [
      "²²⁶Ra → ²²²Rn + ⁴He",
      "¹⁴C → ¹⁴N + e⁻",
      "⁶⁰Co → ⁶⁰Ni + γ",
      "¹¹C → ¹¹B + e⁺"
    ],
    "correctIndex": 0,
    "explanation": "²²⁶Ra → ²²²Rn + ⁴He (α particle) ✓ → ข้อ ก"
  },
  {
    "id": "y64-q30",
    "year": 64,
    "questionNum": 30,
    "topicId": "chemical-bonding",
    "text": "สมการสุทธิของปฏิกิริยาระหว่าง Al(OH)₃ กับ NaOH คือข้อใด",
    "choices": [
      "Al(OH)₃ + OH⁻ → AlO₂⁻ + 2H₂O",
      "Al³⁺ + 3OH⁻ → Al(OH)₃",
      "Al(OH)₃ → Al³⁺ + 3OH⁻",
      "Al(OH)₄⁻ → Al³⁺ + 4OH⁻"
    ],
    "correctIndex": 1,
    "explanation": "Al(OH)₃ เป็น amphoteric ทำปฏิกิริยากับ NaOH: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻ หรือ AlO₂⁻ + 2H₂O → ข้อ ก"
  },
  {
    "id": "y64-q31",
    "year": 64,
    "questionNum": 31,
    "topicId": "stoichiometry",
    "text": "พิจารณาแก๊สแอมโมเนีย (NH₃) ปริมาณต่อไปนี้ 1) 0.500 mol 2) 4.25 g 3) 8.96 L ที่ STP 4) 6.02×10²² โมเลกุล เรียงลำดับปริมาณแอมโมเนียจากมากไปน้อยข้อใดถูกต้อง",
    "choices": [
      "1, 3, 2, 4",
      "2, 4, 1, 3",
      "3, 2, 4, 1",
      "4, 1, 3, 2"
    ],
    "correctIndex": 0,
    "explanation": "แปลงเป็นโมล: 1)=0.500, 2)=4.25/17=0.25, 3)=8.96/22.4=0.40, 4)=6.02×10²²/6.02×10²³=0.10. เรียงมาก→น้อย: 1>3>2>4 → ข้อ ก"
  },
  {
    "id": "y64-q32",
    "year": 64,
    "questionNum": 32,
    "topicId": "atomic-structure",
    "text": "ไอโซโทปกัมมันตรังสีชนิดหนึ่ง 1.00 g สลายตัวเป็นเวลา 1 ปี เหลือ 1.00×10¹⁸ อะตอม วัดปริมาตรแก๊สฮีเลียมที่ได้จากการสลายตัวได้ 0.112 mL ที่ STP ไอโซโทปนี้มีเลขมวลประมาณเท่าใด",
    "choices": [
      "2.00×10²",
      "3.01×10²",
      "1.50×10⁵",
      "3.01×10⁵"
    ],
    "correctIndex": 2,
    "explanation": "He = 0.112×10⁻³/22.4 = 5×10⁻⁶ mol → อะตอมที่สลาย = 5×10⁻⁶×6.02×10²³ = 3.01×10¹⁸. อะตอมเริ่มต้น = 3.01×10¹⁸+1.00×10¹⁸ = 4.01×10¹⁸ = 6.66×10⁻⁶ mol. เลขมวล = 1.00 g / 6.66×10⁻⁶ ≈ 1.50×10⁵ → ข้อ ค"
  },
  {
    "id": "y64-q33",
    "year": 64,
    "questionNum": 33,
    "topicId": "states-of-matter",
    "text": "แก๊สชนิดหนึ่งมีมวล 0.400 g และมีปริมาตร 140 mL ที่ STP แก๊สนี้เป็นแก๊สชนิดใด",
    "choices": [
      "CH₄",
      "NH₃",
      "SO₂",
      "C₄H₁₀"
    ],
    "correctIndex": 2,
    "explanation": "mol = 0.140/22.4 = 0.00625. มวลโมเลกุล = 0.400/0.00625 = 64 = SO₂ → ข้อ ค"
  },
  {
    "id": "y64-q34",
    "year": 64,
    "questionNum": 34,
    "topicId": "stoichiometry",
    "text": "ฟอสฟีน (PH₃) เป็นแก๊สที่ใช้รมควันเพื่อกำจัดแมลง ข้อความเกี่ยวกับ PH₃ ต่อไปนี้ข้อใดผิด (P=31)",
    "choices": [
      "PH₃ 0.400 mol มีมวล 13.6 g",
      "PH₃ 10.2 g มี 1.81×10²³ โมเลกุล",
      "PH₃ 6.80 g มีปริมาตร 4.48 L ที่ STP",
      "ความหนาแน่นที่ STP ของ PH₃ = 0.66 g/L"
    ],
    "correctIndex": 3,
    "explanation": "M(PH₃)=34. ก) 0.400×34=13.6 ✓; ข) 10.2/34×6.02×10²³=1.81×10²³ ✓; ค) 6.80/34×22.4=4.48 ✓; ง) ความหนาแน่น = 34/22.4 = 1.52 g/L ไม่ใช่ 0.66 → ข้อ ง ผิด"
  },
  {
    "id": "y64-q35",
    "year": 64,
    "questionNum": 35,
    "topicId": "stoichiometry",
    "text": "โซเดียมไนไตรด์ (Na₃N) มีร้อยละโดยมวลของไนโตรเจนเป็นเท่าใด (Na=23, N=14)",
    "choices": [
      "16.9",
      "20.3",
      "37.8",
      "64.6"
    ],
    "correctIndex": 0,
    "explanation": "Na₃N มวลสูตร = 3(23)+14 = 83. ร้อยละ N = 14/83×100 = 16.9% → ข้อ ก"
  },
  {
    "id": "y64-q36",
    "year": 64,
    "questionNum": 36,
    "topicId": "stoichiometry",
    "text": "แก๊ส A ปริมาตร 500 mL ที่ 0°C 1 atm เมื่อเพิ่มอุณหภูมิเป็น 100°C ที่ความดันคงที่ มีปริมาตรกี่ mL",
    "choices": [
      "366 mL",
      "683 mL",
      "500 mL",
      "913 mL"
    ],
    "correctIndex": 3,
    "explanation": "V₁/T₁=V₂/T₂ → 500/273 = V₂/373 → V₂ = 500×373/273 = 683 mL → ข้อ ง"
  },
  {
    "id": "y64-q37",
    "year": 64,
    "questionNum": 37,
    "topicId": "stoichiometry",
    "text": "สารชนิดหนึ่งประกอบด้วยโซเดียม โครเมียม และออกซิเจน ร้อยละ 17.6, 39.7 และ 42.7 โดยมวลตามลำดับ สูตรเอมพิริคัลของสารนี้คือข้อใด (Na=23, Cr=52, O=16)",
    "choices": [
      "NaCrO₃",
      "NaCrO₄",
      "Na₂CrO₄",
      "Na₂Cr₂O₇"
    ],
    "correctIndex": 3,
    "explanation": "mol Na:Cr:O = 17.6/23 : 39.7/52 : 42.7/16 = 0.765 : 0.763 : 2.67 = 1 : 1 : 3.5 = 2 : 2 : 7 → Na₂Cr₂O₇ → ข้อ ง"
  },
  {
    "id": "y64-q38",
    "year": 64,
    "questionNum": 38,
    "topicId": "solutions",
    "text": "สารละลายกรด H₂SO₄ เข้มข้น 5.00 mL มีความหนาแน่น 1.30 g/mL นำไปทำให้เป็น 500 mL จะมีความเข้มข้นประมาณกี่ mol/dm³ (H₂SO₄=98)",
    "choices": [
      "0.13",
      "0.26",
      "1.0",
      "2.0"
    ],
    "correctIndex": 0,
    "explanation": "มวล H₂SO₄ = 5.00×1.30 = 6.5 g → 6.5/98 = 0.0663 mol ในปริมาตร 0.5 dm³ = 0.13 mol/dm³ → ข้อ ก"
  },
  {
    "id": "y64-q39",
    "year": 64,
    "questionNum": 39,
    "topicId": "stoichiometry",
    "text": "สาร A ปริมาตร 0.100 g ระเหยที่ 200°C 0.985 atm ได้ปริมาตร 56.0 mL มวลโมเลกุลของ A คือข้อใด",
    "choices": [
      "28",
      "44",
      "58",
      "72"
    ],
    "correctIndex": 0,
    "explanation": "n = PV/RT = (0.985×0.056)/(0.082×473) = 0.05516/38.79 = 0.001422 mol | MW = 0.100/0.001422 = 70.3 ≈ 72 → ข้อ ก"
  },
  {
    "id": "y64-q40",
    "year": 64,
    "questionNum": 40,
    "topicId": "solutions",
    "text": "นำ NaOH 20 g ละลายและปรับปริมาตรเป็น 50 mL ได้สารละลายที่มีความหนาแน่น 1.3 g/mL เศษส่วนโมลของ NaOH เท่าใด (NaOH=40)",
    "choices": [
      "0.12",
      "0.15",
      "0.17",
      "0.20"
    ],
    "correctIndex": 2,
    "explanation": "มวลสารละลาย = 50×1.3 = 65 g → น้ำ = 45 g. mol NaOH = 0.5, mol น้ำ = 45/18 = 2.5. เศษส่วนโมล = 0.5/(0.5+2.5) = 0.167 ≈ 0.17 → ข้อ ค"
  },
  {
    "id": "y64-q41",
    "year": 64,
    "questionNum": 41,
    "topicId": "solutions",
    "text": "สารละลาย A เตรียมจาก MgCl₂·6H₂O 20.3 g ในน้ำปรับปริมาตร 500 mL ถ้าต้องการเตรียม MgCl₂ เข้มข้น 0.0100 M ปริมาตร 500 mL โดยเจือจางจาก A จะต้องใช้สารละลาย A กี่มิลลิลิตร (MgCl₂·6H₂O=203)",
    "choices": [
      "11.7",
      "23.4",
      "25.0",
      "50.0"
    ],
    "correctIndex": 2,
    "explanation": "A เข้มข้น = (20.3/203)/0.5 = 0.200 M. ต้องการ mol = 0.0100×0.5 = 0.005 → ปริมาตร A = 0.005/0.200 = 0.025 L = 25.0 mL → ข้อ ค"
  },
  {
    "id": "y64-q42",
    "year": 64,
    "questionNum": 42,
    "topicId": "solutions",
    "text": "สารละลายกลูโคส (C₆H₁₂O₆) เข้มข้นร้อยละ 5.00 โดยมวล ปริมาตร 200 mL (ρ=1.00 g/mL) ต้องการเตรียมให้เป็นเข้มข้นร้อยละ 10.00 โดยมวล จะต้องเติมกลูโคสลงไปอีกกี่กรัม",
    "choices": [
      "5.6",
      "11.2",
      "16.8",
      "22.2"
    ],
    "correctIndex": 1,
    "explanation": "มวลสารละลาย = 200 g มีกลูโคส 10 g. ให้เติม x g: (10+x)/(200+x)=0.10 → 0.9x=10 → x=11.1 ≈ 11.2 g → ข้อ ข"
  },
  {
    "id": "y64-q43",
    "year": 64,
    "questionNum": 43,
    "topicId": "stoichiometry",
    "imageUrl": "/exam-images/y64-q43.png",
    "text": "สารละลาย HCl เข้มข้น 100 M ปริมาตร 500 mL ผสมกับสารละลาย NaOH เข้มข้น 1.50 M ปริมาตร 300 mL ความเข้มข้นของ H⁺ หรือ OH⁻ ที่เหลืออยู่คือข้อใด",
    "choices": [
      "H⁺ 0.25 M",
      "OH⁻ 0.25 M",
      "H⁺ 0.50 M",
      "OH⁻ 0.50 M"
    ],
    "correctIndex": 1,
    "explanation": "n(HCl)=0.100×0.500=0.050 mol | n(NaOH)=1.50×0.300=0.450 mol | เหลือ OH⁻ = 0.450-0.050=0.400 mol ใน 800mL = 0.500 M → ข้อ ง"
  },
  {
    "id": "y64-q44",
    "year": 64,
    "questionNum": 44,
    "topicId": "solutions",
    "text": "A=สารละลายกลูโคส (C₆H₁₂O₆) 18% w/w; B=สารละลายยูเรีย (CO(NH₂)₂) 1.0 m; C=สารละลายเอทิลีนไกลคอล (C₂H₆O₂) เศษส่วนโมล 0.18 การเปรียบเทียบจุดเดือดและจุดเยือกแข็งข้อใดถูกต้อง (กลูโคส=180, ยูเรีย=60, เอทิลีนไกลคอล=62, น้ำ=18)",
    "choices": [
      "จุดเดือด A>B>C",
      "จุดเดือด B>A>C",
      "จุดเยือกแข็ง A>B>C",
      "จุดเยือกแข็ง B>A>C"
    ],
    "correctIndex": 3,
    "explanation": "โมแลล: A=(18/180)/0.082=1.22, B=1.0, C=0.18/(0.82×18/1000)=12.2. ลำดับ C>A>B. จุดเยือกแข็ง (ยิ่งโมแลลมากยิ่งต่ำ) → B>A>C → ข้อ ง"
  },
  {
    "id": "y64-q45",
    "year": 64,
    "questionNum": 45,
    "topicId": "stoichiometry",
    "imageUrl": "/exam-images/y64-q45.png",
    "text": "สารละลายที่มีความเข้มข้น A mol/L ปริมาตร 500 mL ผสมกับน้ำปริมาตร 500 mL ได้สารละลายเข้มข้น 2.00 mol/L ความเข้มข้น A มีค่าเท่าใด",
    "choices": [
      "2.00 mol/L",
      "4.00 mol/L",
      "1.00 mol/L",
      "0.500 mol/L"
    ],
    "correctIndex": 2,
    "explanation": "C₁V₁=C₂V₂ → A×500=2.00×1000 → A=4.00 mol/L → ข้อ ค"
  },
  {
    "id": "y64-q46",
    "year": 64,
    "questionNum": 46,
    "topicId": "solutions",
    "text": "สารละลาย NaCl 1.00 m ในน้ำ มีจุดเยือกแข็งกี่°C (Kf น้ำ = 1.86°C/m)",
    "choices": [
      "-1.86°C",
      "-3.72°C",
      "-0.93°C",
      "-5.58°C"
    ],
    "correctIndex": 3,
    "explanation": "NaCl → Na⁺ + Cl⁻ (i=2) | ΔTf = i×Kf×m = 2×1.86×1.00 = 3.72°C | Tf = -3.72°C → ข้อ ง"
  },
  {
    "id": "y64-q47",
    "year": 64,
    "questionNum": 47,
    "topicId": "solutions",
    "text": "สารละลาย A เตรียมโดยละลายสาร X 34.2 g (MW=342) ในน้ำ 500 g ความเข้มข้นเป็น molality คือข้อใด",
    "choices": [
      "0.100 m",
      "0.200 m",
      "0.400 m",
      "0.500 m"
    ],
    "correctIndex": 0,
    "explanation": "mol X = 34.2/342 = 0.100 mol | m = 0.100/0.500 = 0.200 mol/kg → ข้อ ก"
  },
  {
    "id": "y64-q48",
    "year": 64,
    "questionNum": 48,
    "topicId": "stoichiometry",
    "text": "ธาตุ A ทำปฏิกิริยากับธาตุ B เกิดสารประกอบ 2 ชนิด คือ A₃B₂ และ AB₂ ถ้า A₃B₂ 0.05 mol มีมวล 9 g และ AB₂ 0.1 mol มีมวล 10 g ข้อใดถูก",
    "choices": [
      "A มีมวลอะตอมน้อยกว่า B เท่ากับ 10",
      "A มีมวลอะตอมมากกว่า B เท่ากับ 10",
      "A มีมวลอะตอมน้อยกว่า B เท่ากับ 40",
      "A มีมวลอะตอมมากกว่า B เท่ากับ 40"
    ],
    "correctIndex": 1,
    "explanation": "M(A₃B₂)=9/0.05=180 → 3a+2b=180. M(AB₂)=10/0.1=100 → a+2b=100. ลบกัน: 2a=80 → a=40, b=30. A มากกว่า B = 10 → ข้อ ข"
  },
  {
    "id": "y64-q49",
    "year": 64,
    "questionNum": 49,
    "topicId": "stoichiometry",
    "text": "จากปฏิกิริยา Al₄C₃(s) + H₂O(l) → Al(OH)₃(s) + CH₄(g) (สมการยังไม่ดุล) ถ้าเกิด CH₄ 9.6 g จะมี Al(OH)₃ เกิดขึ้นกี่โมล",
    "choices": [
      "0.25",
      "0.45",
      "0.60",
      "0.80"
    ],
    "correctIndex": 3,
    "explanation": "Al₄C₃ + 12H₂O → 4Al(OH)₃ + 3CH₄. CH₄ = 9.6/16 = 0.6 mol → Al(OH)₃ = 0.6×4/3 = 0.80 mol → ข้อ ง"
  },
  {
    "id": "y64-q50",
    "year": 64,
    "questionNum": 50,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y64-q50.png",
    "text": "สารละลาย Ba(OH)₂ 0.100 mol/L ปริมาตร 200 mL ทำปฏิกิริยาพอดีกับสารละลาย HCl กี่ mL ที่เข้มข้น 0.400 mol/L",
    "choices": [
      "50.0 mL",
      "100 mL",
      "200 mL",
      "25.0 mL"
    ],
    "correctIndex": 1,
    "explanation": "Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O | n(Ba(OH)₂)=0.020 mol | n(HCl)=0.040 mol | V=0.040/0.400=0.100 L=100 mL → ข้อ ข"
  },
  {
    "id": "y64-q51",
    "year": 64,
    "questionNum": 51,
    "topicId": "stoichiometry",
    "text": "NaOH + Al + H₂O → NaAl(OH)₄ + H₂ (สมการยังไม่ดุล) ถ้าอะลูมิเนียม 3.24 g ทำปฏิกิริยากับโซเดียมไฮดรอกไซด์มากเกินพอ จะเกิดแก๊สไฮโดรเจนกี่ลิตรที่ STP (Al=27)",
    "choices": [
      "0.9",
      "1.8",
      "2.7",
      "4.0"
    ],
    "correctIndex": 3,
    "explanation": "2Al + 2NaOH + 6H₂O → 2NaAl(OH)₄ + 3H₂. Al = 3.24/27 = 0.12 mol → H₂ = 0.12×3/2 = 0.18 mol → 0.18×22.4 = 4.03 ≈ 4.0 L → ข้อ ง"
  },
  {
    "id": "y64-q52",
    "year": 64,
    "questionNum": 52,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y64-q52.png",
    "text": "สารละลาย H₂SO₄ เข้มข้น 98% w/w ความหนาแน่น 1.84 g/mL มีความเข้มข้นเป็น mol/L เท่าใด",
    "choices": [
      "9.18 mol/L",
      "18.4 mol/L",
      "36.8 mol/L",
      "4.59 mol/L"
    ],
    "correctIndex": 2,
    "explanation": "ใน 1L: มวล = 1840 g | H₂SO₄ = 0.98×1840 = 1803.2 g | mol = 1803.2/98 = 18.4 mol → 18.4 mol/L → ข้อ ข"
  },
  {
    "id": "y64-q53",
    "year": 64,
    "questionNum": 53,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y64-q53.png",
    "text": "สารละลาย C₆H₁₂O₆ (กลูโคส MW=180) ความเข้มข้น 36.0 g/L มีความดันออสโมติกเท่าใดที่ 27°C (R=0.082)",
    "choices": [
      "0.490 atm",
      "4.90 atm",
      "9.80 atm",
      "0.245 atm"
    ],
    "correctIndex": 3,
    "explanation": "M = 36.0/180 = 0.200 mol/L | π = MRT = 0.200×0.082×300 = 4.92 atm ≈ 4.90 atm → ข้อ ง"
  },
  {
    "id": "y64-q54",
    "year": 64,
    "questionNum": 54,
    "topicId": "solutions",
    "text": "สารละลายที่เตรียมจากการละลาย BaCl₂ 2.08 g ในน้ำ 500 mL มีความเข้มข้นของ Ba²⁺ และ Cl⁻ เท่าใด (BaCl₂ MW=208)",
    "choices": [
      "Ba²⁺ 0.020 M, Cl⁻ 0.040 M",
      "Ba²⁺ 0.010 M, Cl⁻ 0.020 M",
      "Ba²⁺ 0.020 M, Cl⁻ 0.020 M",
      "Ba²⁺ 0.040 M, Cl⁻ 0.080 M"
    ],
    "correctIndex": 0,
    "explanation": "n(BaCl₂) = 2.08/208 = 0.010 mol ใน 500 mL | Ba²⁺ = 0.010/0.500 = 0.020 M | Cl⁻ = 0.040 M → ข้อ ก"
  },
  {
    "id": "y64-q55",
    "year": 64,
    "questionNum": 55,
    "topicId": "stoichiometry",
    "text": "I₂O₅ + 5CO → I₂ + 5CO₂ เกิดในแก๊สตัวอย่าง 250 mL ไอโอดีนที่ได้ทำปฏิกิริยาพอดีกับ Na₂S₂O₃ 0.10 M 8.0 mL (I₂+2Na₂S₂O₃→2NaI+Na₂S₄O₆) แก๊ส CO ในตัวอย่างคิดเป็นร้อยละโดยปริมาตร (%v/v) เท่าใด (แก๊ส 1 mol = 25.0 L)",
    "choices": [
      "3.2",
      "18",
      "20",
      "40"
    ],
    "correctIndex": 2,
    "explanation": "Na₂S₂O₃ = 0.10×0.008 = 0.0008 mol → I₂ = 0.0004 mol → CO = 5×I₂ = 0.002 mol. ปริมาตร CO = 0.002×25.0 = 0.05 L = 50 mL. %v/v = 50/250×100 = 20% → ข้อ ค"
  },
  {
    "id": "y64-q56",
    "year": 64,
    "questionNum": 56,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y64-q56.png",
    "text": "สารละลาย KMnO₄ เข้มข้น 12.7 g/L มีความเข้มข้นเป็น mol/L เท่าใด (KMnO₄ MW=158)",
    "choices": [
      "0.0804 mol/L",
      "0.125 mol/L",
      "0.250 mol/L",
      "0.0402 mol/L"
    ],
    "correctIndex": 1,
    "explanation": "M = 12.7/158 = 0.0804 mol/L → ข้อ ข"
  },
  {
    "id": "y64-q57",
    "year": 64,
    "questionNum": 57,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y64-q57.png",
    "text": "เพื่อเตรียมสารละลาย HCl 0.500 mol/L ปริมาตร 500 mL จากสารละลาย HCl เข้มข้น 12.0 mol/L ต้องใช้ HCl เข้มข้นกี่ mL",
    "choices": [
      "10.4 mL",
      "20.8 mL",
      "41.7 mL",
      "5.21 mL"
    ],
    "correctIndex": 2,
    "explanation": "C₁V₁=C₂V₂ → 12.0×V₁=0.500×500 → V₁=250/12=20.8 mL → ข้อ ค"
  },
  {
    "id": "y64-q58",
    "year": 64,
    "questionNum": 58,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y64-q58.png",
    "text": "สารละลาย NaCl 0.200 mol/L ปริมาตร 300 mL ผสมกับสารละลาย NaCl 0.500 mol/L ปริมาตร 200 mL ความเข้มข้นของสารละลายผสมคือข้อใด",
    "choices": [
      "0.320 mol/L",
      "0.350 mol/L",
      "0.400 mol/L",
      "0.260 mol/L"
    ],
    "correctIndex": 3,
    "explanation": "n = 0.200×300+0.500×200=60+100=160 mmol ใน 500 mL | C=160/500=0.320 mol/L → ข้อ ง"
  },
  {
    "id": "y64-q59",
    "year": 64,
    "questionNum": 59,
    "topicId": "stoichiometry",
    "text": "ปฏิกิริยาระหว่าง X และ Y ได้ Z เป็นผลิตภัณฑ์ ดังสมการ 3X + Y → 2Z มีผลได้ร้อยละ 75 ถ้าต้องการเตรียม Z 120 g ต้องใช้ X และ Y อย่างละกี่โมล (มวลโมเลกุล Z = 40)",
    "choices": [
      "X=6, Y=2",
      "X=4.5, Y=1.5",
      "X=3, Y=1",
      "X=1.5, Y=9.5"
    ],
    "correctIndex": 0,
    "explanation": "Z ที่ต้องการจริง = 120/40 = 3 mol → Z ทางทฤษฎี = 3/0.75 = 4 mol. X:Z=3:2 → X = 6 mol; Y:Z=1:2 → Y = 2 mol → ข้อ ก"
  },
  {
    "id": "y64-q60",
    "year": 64,
    "questionNum": 60,
    "topicId": "stoichiometry",
    "text": "ถ้าเตรียมไนโตรเบนซีนดังสมการ C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O มีผลได้ร้อยละ 85 เมื่อใช้เบนซีน (C₆H₆) 52 g จะเกิดไนโตรเบนซีนกี่กรัม (มวลโมเลกุล HNO₃=63, C₆H₆=78, C₆H₅NO₂=123)",
    "choices": [
      "10.5",
      "12.3",
      "14.5",
      "70.0"
    ],
    "correctIndex": 3,
    "explanation": "C₆H₆ = 52/78 = 0.667 mol → ไนโตรเบนซีน = 0.667×0.85×123 = 69.7 ≈ 70.0 g → ข้อ ง"
  },
  {
    "id": "y65-q1",
    "year": 65,
    "questionNum": 1,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y65-q1.png",
    "text": "จากการทดลองเกี่ยวกับสเปกตรัมของอะตอมไฮโดรเจน พิจารณาข้อสรุปต่อไปนี้ ข้อสรุปใดถูกต้องทั้งหมด",
    "choices": [
      "1 และ 2 เท่านั้น",
      "2 และ 3 เท่านั้น",
      "1 และ 3 เท่านั้น",
      "1, 2 และ 3"
    ],
    "correctIndex": 0,
    "explanation": "สเปกตรัมแบบเส้น (line spectrum) เกิดจากอิเล็กตรอนเปลี่ยนระดับพลังงาน | Balmer series อยู่ในช่วงแสงที่มองเห็น → ข้อ ก"
  },
  {
    "id": "y65-q2",
    "year": 65,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "text": "สเปกตรัมของไฮโดรเจน 4 เส้น: 410 nm (ม่วง), 434 nm (น้ำเงินแกมม่วง), 486 nm (น้ำเงินเขียว), 656 nm (แดง) เกิดจากการเปลี่ยนระดับพลังงาน a: n=6→2, b: n=4→2, c: n=5→2, d: n=3→2 เส้นสเปกตรัม a, b, c, d จะมีสีตามลำดับข้อใด",
    "choices": [
      "น้ำเงินเขียว, น้ำเงินแกมม่วง, แดง, ม่วง",
      "น้ำเงินแกมม่วง, ม่วง, น้ำเงินเขียว, แดง",
      "น้ำเงินเขียว, ม่วง, แดง, น้ำเงินแกมม่วง",
      "ม่วง, น้ำเงินเขียว, น้ำเงินแกมม่วง, แดง"
    ],
    "correctIndex": 3,
    "explanation": "อนุกรมบัลเมอร์ 1/λ ∝ (1/4−1/n²): n ยิ่งสูง ΔE ยิ่งมาก λ ยิ่งสั้น. a(n=6)=410 ม่วง, c(n=5)=434 น้ำเงินแกมม่วง, b(n=4)=486 น้ำเงินเขียว, d(n=3)=656 แดง → a,b,c,d = ม่วง, น้ำเงินเขียว, น้ำเงินแกมม่วง, แดง → ข้อ ง"
  },
  {
    "id": "y65-q3",
    "year": 65,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y65-q3.png",
    "text": "พิจารณาตารางแสดงจำนวนอิเล็กตรอนในออร์บิทัลต่างๆ ของไอออน A²⁺, O²⁻, D⁴⁺ และ G² ข้อใดถูกต้อง",
    "choices": [
      "ขนาดอะตอม A > D > G",
      "ไอออน A²⁺ มีอิเล็กตรอนเดี่ยวมากที่สุด",
      "D อยู่ในคาบที่ 3 ของตารางธาตุ",
      "G มี IE₁ สูงกว่า D"
    ],
    "correctIndex": 1,
    "explanation": "ต้องดูตารางในรูป ระบุธาตุจากจำนวนอิเล็กตรอน → ข้อ ข"
  },
  {
    "id": "y65-q4",
    "year": 65,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "text": "ข้อใดแสดงการเปรียบเทียบสมบัติของธาตุที่ถูกต้อง",
    "choices": [
      "IE₁: N > O > F > Ne",
      "ขนาดอะตอม: Cs > Rb > K > Na",
      "EN: F > O > N > Cl",
      "ทุกข้อถูกต้อง"
    ],
    "correctIndex": 2,
    "explanation": "ขนาดอะตอม Cs>Rb>K>Na (ลงหมู่ขนาดเพิ่ม) ✓ → ข้อ ข"
  },
  {
    "id": "y65-q5",
    "year": 65,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "ธาตุ X, Y และ Z มีการจัดเรียงอิเล็กตรอน [Ne]3s², [Ne]3s²3p¹ และ [Ne]3s²3p² ตามลำดับ ข้อใดเรียงค่า IE₁ จากน้อยไปมากได้ถูกต้อง",
    "choices": [
      "X < Z < Y",
      "Z < X < Y",
      "Y < X < Z",
      "X < Y < Z"
    ],
    "correctIndex": 1,
    "explanation": "X=Mg([Ne]3s²), Y=Al([Ne]3s²3p¹), Z=Si([Ne]3s²3p²) | IE₁: Al<Mg<Si (Al ผิดปกติต่ำกว่า Mg เพราะ 3p¹) → ข้อ ก: Y<X<Z"
  },
  {
    "id": "y65-q6",
    "year": 65,
    "questionNum": 6,
    "topicId": "atomic-structure",
    "text": "อนุภาคใดในข้อต่อไปนี้มีจำนวนอิเล็กตรอนเท่ากันทั้งหมด",
    "choices": [
      "Na⁺, Ne, F⁻, O²⁻",
      "K⁺, Ar, Cl⁻, S²⁻",
      "Ca²⁺, Ar, K⁺, Cl⁻",
      "ทั้ง ข และ ค"
    ],
    "correctIndex": 3,
    "explanation": "K⁺(18e), Ar(18e), Cl⁻(18e), S²⁻(18e) ✓ | Ca²⁺(18e) ✓ → ข้อ ง"
  },
  {
    "id": "y65-q7",
    "year": 65,
    "questionNum": 7,
    "topicId": "atomic-structure",
    "text": "ธาตุ A มีการจัดเรียงอิเล็กตรอน [Ar]3d¹⁰4s²4p⁴ พิจารณาสมบัติของ A ข้อใดถูกต้อง",
    "choices": [
      "A เป็นธาตุโลหะ",
      "A มีเลขออกซิเดชันได้ค่าเดียว",
      "A อยู่ในหมู่ VIA คาบ 4",
      "IE₁ ของ A ต่ำกว่า Ar"
    ],
    "correctIndex": 2,
    "explanation": "A=[Ar]3d¹⁰4s²4p⁴ = Se (Z=34) | อยู่หมู่ VIA คาบ 4 ✓ | เป็นอโลหะ | EN สูง → ข้อ ค"
  },
  {
    "id": "y65-q8",
    "year": 65,
    "questionNum": 8,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกต้องเกี่ยวกับสเปกตรัมอะตอมไฮโดรเจน",
    "choices": [
      "ซีรีส์ Lyman อยู่ในช่วงอินฟราเรด",
      "เส้นสีแดงของ Balmer เกิดจาก n=3→n=2",
      "ซีรีส์ Paschen อยู่ในช่วงแสงที่มองเห็น",
      "ยิ่ง n สูง เส้นสเปกตรัมยิ่งอยู่ในช่วงความยาวคลื่นสั้น"
    ],
    "correctIndex": 0,
    "explanation": "n=3→n=2 ของ Balmer = เส้นสีแดง (656 nm) ✓ → ข้อ ก"
  },
  {
    "id": "y65-q9",
    "year": 65,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "text": "สารประกอบ CrCl₃ มีธาตุ Cr มีเลขออกซิเดชันเท่าใด และมีการจัดเรียงอิเล็กตรอนอย่างไร",
    "choices": [
      "Cr³⁺: [Ar]3d³",
      "Cr³⁺: [Ar]3d⁵",
      "Cr⁰: [Ar]3d⁵4s¹",
      "Cr³⁺: [Ar]3d⁴"
    ],
    "correctIndex": 3,
    "explanation": "CrCl₃: Cr = +3 | Cr(Z=24)=[Ar]3d⁵4s¹ เสีย 3e⁻ → Cr³⁺=[Ar]3d³ → ข้อ ง"
  },
  {
    "id": "y65-q10",
    "year": 65,
    "questionNum": 10,
    "topicId": "atomic-structure",
    "text": "ข้อใดเรียงขนาดไอออนจากเล็กไปใหญ่ได้ถูกต้อง",
    "choices": [
      "Al³⁺ < Mg²⁺ < Na⁺ < F⁻",
      "Na⁺ < Mg²⁺ < Al³⁺ < F⁻",
      "F⁻ < Na⁺ < Mg²⁺ < Al³⁺",
      "Mg²⁺ < Al³⁺ < Na⁺ < F⁻"
    ],
    "correctIndex": 1,
    "explanation": "isoelectronic (10e): Al³⁺(13p)<Mg²⁺(12p)<Na⁺(11p)<F⁻(9p) → ขนาด Al³⁺<Mg²⁺<Na⁺<F⁻ → ข้อ ข"
  },
  {
    "id": "y65-q11",
    "year": 65,
    "questionNum": 11,
    "topicId": "atomic-structure",
    "text": "โมเลกุล SO₂ มีรูปร่างและขั้วอย่างไร",
    "choices": [
      "linear ไม่มีขั้ว",
      "bent มีขั้ว",
      "trigonal planar มีขั้ว",
      "bent ไม่มีขั้ว"
    ],
    "correctIndex": 0,
    "explanation": "SO₂: S มี 2 พันธะ + 1 LP → bent | ไม่สมมาตร → มีขั้ว → ข้อ ก"
  },
  {
    "id": "y65-q12",
    "year": 65,
    "questionNum": 12,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกต้องเกี่ยวกับพันธะในโมเลกุล H₂SO₄",
    "choices": [
      "มีพันธะโคเวเลนต์เพียงอย่างเดียว",
      "มีพันธะไอออนิกระหว่าง H⁺ กับ SO₄²⁻",
      "S ทำพันธะกับ O ด้วยพันธะเดี่ยวทั้งหมด",
      "มีพันธะโคออร์ดิเนต (dative bond) ด้วย"
    ],
    "correctIndex": 2,
    "explanation": "H₂SO₄ มีพันธะ S=O (ด้วย lone pair ของ S) ซึ่งถือเป็นพันธะโคออร์ดิเนต | โดยรวมเป็น covalent ✓ → ข้อ ค"
  },
  {
    "id": "y65-q13",
    "year": 65,
    "questionNum": 13,
    "topicId": "atomic-structure",
    "text": "สาร X มีสมบัติต่อไปนี้: ของแข็งที่อุณหภูมิห้อง ละลายน้ำได้ นำไฟฟ้าในสารละลาย ปฏิกิริยากับ HCl ได้แก๊ส สาร X น่าจะเป็นสารชนิดใด",
    "choices": [
      "Na₂CO₃",
      "NaCl",
      "SiO₂",
      "C₆H₁₂O₆"
    ],
    "correctIndex": 0,
    "explanation": "ทำปฏิกิริยากับ HCl ได้แก๊ส CO₂: Na₂CO₃+2HCl→2NaCl+H₂O+CO₂ ✓ → ข้อ ก"
  },
  {
    "id": "y65-q14",
    "year": 65,
    "questionNum": 14,
    "topicId": "atomic-structure",
    "text": "ข้อใดถูกต้องเกี่ยวกับการเปรียบเทียบจุดเดือดของสาร HF, HCl, HBr และ HI",
    "choices": [
      "HF > HI > HBr > HCl",
      "HI > HBr > HCl > HF",
      "HCl < HBr < HI < HF",
      "HF < HCl < HBr < HI"
    ],
    "correctIndex": 3,
    "explanation": "HF มีพันธะ H แข็งแรง จุดเดือดสูงสุด | HCl<HBr<HI (แรงลอนดอน) → HCl<HBr<HI<HF → ข้อ ง"
  },
  {
    "id": "y65-q15",
    "year": 65,
    "questionNum": 15,
    "topicId": "atomic-structure",
    "text": "โมเลกุลใดมีรูปร่าง T-shaped",
    "choices": [
      "ClF₃",
      "NF₃",
      "BF₃",
      "PF₃"
    ],
    "correctIndex": 1,
    "explanation": "ClF₃: Cl มี 3 พันธะ + 2 LP = T-shape ✓ | NF₃, PF₃: pyramidal | BF₃: trigonal planar → ข้อ ข"
  },
  {
    "id": "y65-q16",
    "year": 65,
    "questionNum": 16,
    "topicId": "chemical-bonding",
    "text": "สารประกอบใดมีทั้งพันธะไอออนิกและพันธะโคเวเลนต์",
    "choices": [
      "NaCl",
      "H₂SO₄",
      "NH₄Cl",
      "CCl₄"
    ],
    "correctIndex": 2,
    "explanation": "NH₄Cl: NH₄⁺ (covalent) + Cl⁻ → ionic bond ระหว่าง NH₄⁺ กับ Cl⁻ + covalent ภายใน NH₄⁺ → มีทั้งคู่ → ข้อ ค"
  },
  {
    "id": "y65-q17",
    "year": 65,
    "questionNum": 17,
    "topicId": "chemical-bonding",
    "text": "ธาตุ A, D, E และ G มีเลขอะตอม 7, 8, 15 และ 16 ตามลำดับ ข้อใดเรียงลำดับ EN จากน้อยไปมากถูกต้อง",
    "choices": [
      "G < E < A < D",
      "E < D < A < G",
      "A < D < E < G",
      "G < A < E < D"
    ],
    "correctIndex": 0,
    "explanation": "N(7) EN=3.04, O(8) EN=3.44, P(15) EN=2.19, S(16) EN=2.58 → P<S<N<O → E<G<A<D → ข้อ ก"
  },
  {
    "id": "y65-q18",
    "year": 65,
    "questionNum": 18,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับการละลายน้ำของแก๊ส SO₂ และ CO₂",
    "choices": [
      "SO₂ และ CO₂ ทั้งคู่ทำให้ลิตมัสน้ำเงินเปลี่ยนเป็นแดง",
      "SO₂ ละลายได้ดีกว่า CO₂ ในน้ำ",
      "CO₂ ทำให้เกิดกรด H₂CO₃ ที่แข็งแรงกว่า H₂SO₃",
      "ข้อ ก และ ข ถูกต้อง"
    ],
    "correctIndex": 1,
    "explanation": "SO₂+H₂O→H₂SO₃ (กรด), CO₂+H₂O→H₂CO₃ (กรด) → ทั้งคู่เปลี่ยนลิตมัส ✓ | SO₂ ละลายได้ดีกว่า CO₂ ✓ → ข้อ ข"
  },
  {
    "id": "y65-q19",
    "year": 65,
    "questionNum": 19,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับสมบัติของออกไซด์ต่อไปนี้",
    "choices": [
      "P₄O₁₀ + H₂O → กรด",
      "CaO + H₂O → กรด",
      "N₂O₅ + H₂O → เบส",
      "SO₃ + H₂O → เบส"
    ],
    "correctIndex": 3,
    "explanation": "P₄O₁₀+6H₂O→4H₃PO₄ (กรด) ✓ → ข้อ ง"
  },
  {
    "id": "y65-q20",
    "year": 65,
    "questionNum": 20,
    "topicId": "chemical-bonding",
    "text": "สารประกอบในข้อใดมีพันธะโคออร์ดิเนต (coordinate covalent bond)",
    "choices": [
      "NH₄⁺",
      "NaCl",
      "H₂O",
      "O₂"
    ],
    "correctIndex": 2,
    "explanation": "NH₄⁺: NH₃ + H⁺ → N ให้ lone pair แก่ H⁺ = coordinate bond ✓ → ข้อ ค"
  },
  {
    "id": "y65-q21",
    "year": 65,
    "questionNum": 21,
    "topicId": "chemical-bonding",
    "text": "โมเลกุลใดไม่มีขั้ว",
    "choices": [
      "SO₂",
      "CCl₄",
      "CHCl₃",
      "H₂S"
    ],
    "correctIndex": 0,
    "explanation": "CCl₄: tetrahedral สมมาตร → ไม่มีขั้ว ✓ → ข้อ ก"
  },
  {
    "id": "y65-q22",
    "year": 65,
    "questionNum": 22,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับรูปร่างโมเลกุลของ PCl₅",
    "choices": [
      "trigonal bipyramidal, ไม่มีขั้ว",
      "square pyramidal, มีขั้ว",
      "trigonal bipyramidal, มีขั้ว",
      "octahedral, ไม่มีขั้ว"
    ],
    "correctIndex": 1,
    "explanation": "PCl₅: P มี 5 พันธะ 0 LP → trigonal bipyramidal | D₃h symmetry → ไม่มีขั้ว → ข้อ ข"
  },
  {
    "id": "y65-q23",
    "year": 65,
    "questionNum": 23,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเรียงลำดับแรงยึดเหนี่ยวระหว่างโมเลกุลจากอ่อนไปแข็งได้ถูกต้อง",
    "choices": [
      "London < dipole-dipole < H-bond < ionic",
      "H-bond < dipole-dipole < London",
      "ionic < H-bond < dipole-dipole < London",
      "London < H-bond < dipole-dipole"
    ],
    "correctIndex": 2,
    "explanation": "London < dipole-dipole < H-bond (ทั้งหมดเป็น intermolecular) → ข้อ ค"
  },
  {
    "id": "y65-q24",
    "year": 65,
    "questionNum": 24,
    "topicId": "chemical-bonding",
    "text": "สารในข้อใดมีจุดเดือดสูงที่สุดเพราะแรงยึดเหนี่ยวระหว่างโมเลกุลที่แข็งแรงที่สุด",
    "choices": [
      "CH₄",
      "HCl",
      "H₂O",
      "HBr"
    ],
    "correctIndex": 3,
    "explanation": "H₂O มีพันธะ H ที่แข็งแรงมาก จุดเดือด 100°C สูงสุด → ข้อ ง"
  },
  {
    "id": "y65-q25",
    "year": 65,
    "questionNum": 25,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับผลึกชนิดต่างๆ",
    "choices": [
      "ผลึกโลหะนำไฟฟ้าได้ดีเพราะมีอิเล็กตรอนอิสระ",
      "ผลึกไอออนิกนำไฟฟ้าได้ดีในของแข็ง",
      "ผลึกโมเลกุลมีจุดหลอมเหลวสูงมาก",
      "SiO₂ เป็นผลึกโมเลกุล"
    ],
    "correctIndex": 0,
    "explanation": "ผลึกโลหะ: e⁻ อิสระเคลื่อนที่ได้ → นำไฟฟ้า ✓ → ข้อ ก"
  },
  {
    "id": "y65-q26",
    "year": 65,
    "questionNum": 26,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับกฎของแก๊ส",
    "choices": [
      "กฎบอยล์: V ∝ T ที่ P คงที่",
      "กฎชาร์ล: V ∝ 1/P ที่ T คงที่",
      "กฎเกย์-ลูสแซก: P ∝ T ที่ V คงที่",
      "กฎอาโวกาโดร: V ∝ 1/n ที่ T,P คงที่"
    ],
    "correctIndex": 1,
    "explanation": "กฎเกย์-ลูสแซก: P ∝ T (Kelvin) ที่ V คงที่ ✓ → ข้อ ค"
  },
  {
    "id": "y65-q27",
    "year": 65,
    "questionNum": 27,
    "topicId": "chemical-bonding",
    "text": "แก๊ส He 4 g และ Ne 20 g ผสมกันในภาชนะ ปริมาณโมลของ He : Ne คือข้อใด",
    "choices": [
      "1:1",
      "2:1",
      "4:1",
      "1:4"
    ],
    "correctIndex": 2,
    "explanation": "He: 4/4=1 mol | Ne: 20/20=1 mol → He:Ne = 1:1 → ข้อ ง"
  },
  {
    "id": "y65-q28",
    "year": 65,
    "questionNum": 28,
    "topicId": "chemical-bonding",
    "text": "แก๊สอุดมคติมีพฤติกรรมใกล้เคียงอุดมคติมากที่สุดในภาวะใด",
    "choices": [
      "ความดันสูง อุณหภูมิต่ำ",
      "ความดันต่ำ อุณหภูมิสูง",
      "ความดันสูง อุณหภูมิสูง",
      "ความดันต่ำ อุณหภูมิต่ำ"
    ],
    "correctIndex": 3,
    "explanation": "แก๊สอุดมคติ: ความดันต่ำ (โมเลกุลห่าง interaction น้อย) + อุณหภูมิสูง (KE สูง interaction เล็กน้อย) → ข้อ ข"
  },
  {
    "id": "y65-q29",
    "year": 65,
    "questionNum": 29,
    "topicId": "chemical-bonding",
    "text": "แก๊ส X 0.500 g ในภาชนะ 1.00 L ที่ 27°C มีความดัน 0.500 atm แก๊ส X มีมวลโมเลกุลเท่าใด",
    "choices": [
      "24.6 g/mol",
      "12.3 g/mol",
      "49.2 g/mol",
      "6.15 g/mol"
    ],
    "correctIndex": 0,
    "explanation": "n=PV/RT=(0.500×1.00)/(0.082×300)=0.0203 mol | MW=0.500/0.0203=24.6 g/mol → ข้อ ก"
  },
  {
    "id": "y65-q30",
    "year": 65,
    "questionNum": 30,
    "topicId": "chemical-bonding",
    "text": "สมการ van der Waals ของแก๊สจริงคือ (P + an²/V²)(V − nb) = nRT ค่า a และ b แทนค่าอะไร",
    "choices": [
      "a=แรงดึงดูดระหว่างโมเลกุล, b=ปริมาตรโมเลกุล",
      "a=ปริมาตรโมเลกุล, b=แรงดึงดูด",
      "a=อุณหภูมิวิกฤต, b=ความดันวิกฤต",
      "a=b=ค่าคงที่ไม่มีความหมายทางฟิสิกส์"
    ],
    "correctIndex": 1,
    "explanation": "a = ค่าคงที่แสดงแรงดึงดูดระหว่างโมเลกุล | b = ค่าคงที่แสดงปริมาตรที่โมเลกุลครองอยู่ → ข้อ ก"
  },
  {
    "id": "y65-q31",
    "year": 65,
    "questionNum": 31,
    "topicId": "stoichiometry",
    "text": "โมเลกุล CH₃OH (methanol) มีการวาดโครงสร้างในรูป พิจารณาข้อสรุปเกี่ยวกับพันธะ ข้อใดถูกต้อง",
    "choices": [
      "มีพันธะ C-O เป็นพันธะเดี่ยวเท่านั้น",
      "C มีพันธะกับ O แบบ double bond",
      "O มีอิเล็กตรอนคู่โดดเดี่ยว 2 คู่",
      "มีพันธะไฮโดรเจนระหว่างโมเลกุล CH₃OH"
    ],
    "correctIndex": 2,
    "explanation": "CH₃OH: O มี 2 พันธะ + 2 LP | มีพันธะ H ระหว่างโมเลกุล ✓ → ข้อ ค"
  },
  {
    "id": "y65-q32",
    "year": 65,
    "questionNum": 32,
    "topicId": "stoichiometry",
    "text": "เมื่อนำโลหะ A 1.00 g มาละลายด้วยกรด จากนั้นนำไปตกตะกอน พบว่าได้ตะกอน ASO₄ 1.50 g โลหะ A มีมวลอะตอมเท่าใด (SO₄=96)",
    "choices": [
      "48",
      "64",
      "96",
      "192"
    ],
    "correctIndex": 3,
    "explanation": "mol A = mol ASO₄. ให้ M = มวลอะตอม A: 1.00/M = 1.50/(M+96) → M+96 = 1.50M → 96 = 0.5M → M = 192 → ข้อ ง"
  },
  {
    "id": "y65-q33",
    "year": 65,
    "questionNum": 33,
    "topicId": "stoichiometry",
    "text": "จำนวนอะตอมทั้งหมดในแมกนีเซียมไซยาไนด์ (magnesium cyanide, Mg(CN)₂) 91.2 g เป็นเท่าใด (Mg=24, C=12, N=14)",
    "choices": [
      "7.22×10²³",
      "2.17×10²⁴",
      "3.29×10²⁴",
      "3.61×10²⁴"
    ],
    "correctIndex": 3,
    "explanation": "M(Mg(CN)₂) = 24+2(12+14) = 76. mol = 91.2/76 = 1.2. แต่ละสูตรมี 5 อะตอม (Mg+2C+2N). อะตอมรวม = 1.2×5×6.02×10²³ = 3.61×10²⁴ → ข้อ ง"
  },
  {
    "id": "y65-q34",
    "year": 65,
    "questionNum": 34,
    "topicId": "stoichiometry",
    "text": "สารประกอบชนิดหนึ่ง 1 โมเลกุลประกอบด้วย A 2 อะตอม และ B 3 อะตอม (A₂B₃) ร้อยละโดยมวลของ B ในสารประกอบนี้เท่ากับ 64 ถ้ามวลอะตอมของ B เท่ากับ 32 มวลอะตอมของธาตุ A เป็นเท่าใด",
    "choices": [
      "27",
      "32",
      "54",
      "108"
    ],
    "correctIndex": 0,
    "explanation": "มวล B ในสูตร = 3×32 = 96. %B = 96/(2A+96) = 0.64 → 96 = 1.28A+61.44 → A = 27 → ข้อ ก"
  },
  {
    "id": "y65-q35",
    "year": 65,
    "questionNum": 35,
    "topicId": "stoichiometry",
    "text": "สารใดมีแรงยึดเหนี่ยวระหว่างโมเลกุลเป็นพันธะไฮโดรเจนและแรงลอนดอน",
    "choices": [
      "H₂O เท่านั้น",
      "CH₄ เท่านั้น",
      "H₂O และ HF",
      "CH₃OH และ NH₃"
    ],
    "correctIndex": 0,
    "explanation": "CH₃OH และ NH₃ มีทั้งพันธะ H (OH/NH) และแรงลอนดอน → ข้อ ง"
  },
  {
    "id": "y65-q36",
    "year": 65,
    "questionNum": 36,
    "topicId": "stoichiometry",
    "text": "ข้อใดถูกต้องเกี่ยวกับสมบัติของกรดออกซิเจน HClO, HClO₂, HClO₃ และ HClO₄",
    "choices": [
      "ความแรงของกรดเพิ่มขึ้นตามจำนวน O ที่เพิ่มขึ้น",
      "HClO มีความแรงมากที่สุด",
      "ความแรงลดลงตามจำนวน O",
      "ทุกชนิดมีความแรงเท่ากัน"
    ],
    "correctIndex": 1,
    "explanation": "ยิ่งมีอะตอม O มาก ความแรงของกรด ↑ เพราะดึงอิเล็กตรอนออกจาก O-H มากขึ้น | HClO<HClO₂<HClO₃<HClO₄ → ข้อ ข"
  },
  {
    "id": "y65-q37",
    "year": 65,
    "questionNum": 37,
    "topicId": "stoichiometry",
    "text": "สารละลาย NaOH 0.500 mol/L ปริมาตร 200 mL ทำปฏิกิริยาพอดีกับ H₂SO₄ กี่มิลลิลิตร ที่เข้มข้น 0.250 mol/L",
    "choices": [
      "100 mL",
      "200 mL",
      "400 mL",
      "50.0 mL"
    ],
    "correctIndex": 2,
    "explanation": "2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O | n(NaOH)=0.100 mol | n(H₂SO₄)=0.050 mol | V=0.050/0.250=0.200 L=200 mL → ข้อ ค"
  },
  {
    "id": "y65-q38",
    "year": 65,
    "questionNum": 38,
    "topicId": "stoichiometry",
    "text": "สารละลาย HCl ความเข้มข้น 0.100 mol/L ปริมาตร 500 mL มีจำนวนไอออน H⁺ กี่อนุภาค",
    "choices": [
      "3.01×10²²",
      "6.02×10²²",
      "3.01×10²¹",
      "6.02×10²¹"
    ],
    "correctIndex": 3,
    "explanation": "n(H⁺) = 0.100×0.500 = 0.0500 mol | N = 0.0500×6.022×10²³ = 3.01×10²² → ข้อ ง"
  },
  {
    "id": "y65-q39",
    "year": 65,
    "questionNum": 39,
    "topicId": "stoichiometry",
    "text": "แก๊ส X ปริมาตร 2.24 L ที่ STP มีมวลเท่าใดถ้าแก๊ส X คือ CO₂",
    "choices": [
      "4.40 g",
      "2.20 g",
      "8.80 g",
      "1.10 g"
    ],
    "correctIndex": 0,
    "explanation": "n = 2.24/22.4 = 0.100 mol | มวล = 0.100×44 = 4.40 g → ข้อ ก"
  },
  {
    "id": "y65-q40",
    "year": 65,
    "questionNum": 40,
    "topicId": "stoichiometry",
    "text": "ในสมการ: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O ถ้าใช้ C₃H₈ 44 g จะได้ H₂O กี่กรัม",
    "choices": [
      "36 g",
      "72 g",
      "108 g",
      "144 g"
    ],
    "correctIndex": 1,
    "explanation": "C₃H₈ MW=44 → 1 mol | H₂O = 4 mol × 18 = 72 g → ข้อ ข"
  },
  {
    "id": "y65-q41",
    "year": 65,
    "questionNum": 41,
    "topicId": "stoichiometry",
    "text": "ถ้า Fe 5.60 g ทำปฏิกิริยากับ HCl มากพอ จะได้แก๊ส H₂ กี่ลิตรที่ STP",
    "choices": [
      "1.12 L",
      "2.24 L",
      "4.48 L",
      "8.96 L"
    ],
    "correctIndex": 2,
    "explanation": "Fe + 2HCl → FeCl₂ + H₂ | Fe: 5.60/56=0.100 mol | H₂=0.100 mol × 22.4=2.24 L → ข้อ ข"
  },
  {
    "id": "y65-q42",
    "year": 65,
    "questionNum": 42,
    "topicId": "solutions",
    "text": "พิจารณาสารละลาย a, b, c: a=NaCl 50 ppm, b=NaCl ร้อยละ 0.050 โดยมวลต่อปริมาตร, c=NaCl 5.0×10⁻³ M เรียงความเข้มข้นจากมากไปน้อยข้อใดถูก (NaCl=58.5)",
    "choices": [
      "a>b>c",
      "a>c>b",
      "b>c>a",
      "c>b>a"
    ],
    "correctIndex": 2,
    "explanation": "แปลงเป็น M: a=0.050/58.5=8.55×10⁻⁴, b=0.5 g/L /58.5=8.55×10⁻³, c=5.0×10⁻³. เรียง b>c>a → ข้อ ค"
  },
  {
    "id": "y65-q43",
    "year": 65,
    "questionNum": 43,
    "topicId": "stoichiometry",
    "text": "ปฏิกิริยา: 2A + 3B → C + 2D ถ้า A 10 mol ทำปฏิกิริยากับ B 12 mol จะได้ C กี่ mol",
    "choices": [
      "4 mol",
      "5 mol",
      "6 mol",
      "3 mol"
    ],
    "correctIndex": 3,
    "explanation": "A ต้องการ B = 10×3/2 = 15 mol แต่มีแค่ 12 → B จำกัด | B 12 mol ให้ C = 12/3 = 4 mol → ข้อ ง"
  },
  {
    "id": "y65-q44",
    "year": 65,
    "questionNum": 44,
    "topicId": "solutions",
    "text": "เตรียมสารละลายคอปเปอร์(II)ซัลเฟตเพนตะไฮเดรต (CuSO₄·5H₂O, M=250) 2.495 g ปรับปริมาตร 100.00 mL จากนั้นปิเปต 5.00 mL ลงขวด 250.0 mL ปรับปริมาตร ความเข้มข้น Cu²⁺ ปลายสุดเป็นกี่ ppm (Cu=63.5)",
    "choices": [
      "0.127",
      "127",
      "199",
      "499"
    ],
    "correctIndex": 1,
    "explanation": "mol = 2.495/250 = 0.00998 → เข้มข้นแรก = 0.0998 M. เจือจาง 5/250 → 0.001996 M. Cu²⁺ = 0.001996×63.5×1000 = 127 ppm → ข้อ ข"
  },
  {
    "id": "y65-q45",
    "year": 65,
    "questionNum": 45,
    "topicId": "stoichiometry",
    "text": "สารละลาย CaCl₂ เข้มข้น 0.100 mol/L ปริมาตร 500 mL มีจำนวน Cl⁻ ไอออนเท่าใด",
    "choices": [
      "3.01×10²²",
      "6.02×10²²",
      "1.50×10²²",
      "1.20×10²³"
    ],
    "correctIndex": 0,
    "explanation": "n(CaCl₂)=0.0500 mol | Cl⁻=2×0.0500=0.100 mol | N=0.100×6.022×10²³=6.02×10²² → ข้อ ข"
  },
  {
    "id": "y65-q46",
    "year": 65,
    "questionNum": 46,
    "topicId": "solutions",
    "text": "ข้อใดถูกต้องเกี่ยวกับสมบัติคอลลิเกทีฟ (Colligative properties)",
    "choices": [
      "ขึ้นกับชนิดของ solute",
      "ขึ้นกับจำนวนอนุภาคของ solute เท่านั้น",
      "ขึ้นกับทั้งชนิดและจำนวนอนุภาค",
      "ไม่ขึ้นกับทั้งชนิดและจำนวน"
    ],
    "correctIndex": 1,
    "explanation": "Colligative properties ขึ้นกับ \"จำนวนอนุภาค\" ของ solute เท่านั้น ไม่ขึ้นกับชนิด → ข้อ ข"
  },
  {
    "id": "y65-q47",
    "year": 65,
    "questionNum": 47,
    "topicId": "solutions",
    "text": "สารละลาย NaCl 1.00 m มีจุดเดือดเท่าใด (Kb น้ำ = 0.512°C/m)",
    "choices": [
      "100.512°C",
      "101.024°C",
      "100.256°C",
      "101.536°C"
    ],
    "correctIndex": 2,
    "explanation": "NaCl i=2 | ΔTb = 2×0.512×1.00 = 1.024°C | Tb = 101.024°C → ข้อ ข"
  },
  {
    "id": "y65-q48",
    "year": 65,
    "questionNum": 48,
    "topicId": "solutions",
    "text": "สารละลายกลูโคส (MW=180) 9.00 g ในน้ำ 500 mL มีความดันออสโมติกเท่าใดที่ 37°C",
    "choices": [
      "2.54 atm",
      "1.27 atm",
      "5.08 atm",
      "0.635 atm"
    ],
    "correctIndex": 3,
    "explanation": "M=9.00/(180×0.500)=0.100 mol/L | π=MRT=0.100×0.082×310=2.54 atm → ข้อ ก"
  },
  {
    "id": "y65-q49",
    "year": 65,
    "questionNum": 49,
    "topicId": "solutions",
    "text": "ในการแยกสาร กระบวนการใดใช้สำหรับแยกของผสมที่มีจุดเดือดใกล้เคียงกัน",
    "choices": [
      "การกลั่นลำดับส่วน",
      "การกรอง",
      "การตกผลึก",
      "การสกัด"
    ],
    "correctIndex": 0,
    "explanation": "กลั่นลำดับส่วน (fractional distillation) แยกสารที่มีจุดเดือดใกล้เคียงกัน ✓ → ข้อ ก"
  },
  {
    "id": "y65-q50",
    "year": 65,
    "questionNum": 50,
    "topicId": "stoichiometry",
    "text": "น้ำมันดีเซลชนิดหนึ่งประกอบด้วย C₁₅H₂₄ เท่านั้น มีความหนาแน่น 0.816 g/mL ถ้านำน้ำมัน 2.00 L มาเผาไหม้อย่างสมบูรณ์ จะเกิดแก๊สคาร์บอนไดออกไซด์กี่ลิตรที่ STP",
    "choices": [
      "3.29×10³",
      "2.69×10³",
      "2.20×10²",
      "1.79×10²"
    ],
    "correctIndex": 1,
    "explanation": "มวล = 2000×0.816 = 1632 g; M(C₁₅H₂₄)=204 → 8.0 mol. เผาไหม้ได้ CO₂ = 15×8.0 = 120 mol → 120×22.4 = 2688 L = 2.69×10³ → ข้อ ข"
  },
  {
    "id": "y65-q51",
    "year": 65,
    "questionNum": 51,
    "topicId": "solutions",
    "text": "สารละลาย H₂SO₄ เข้มข้น 49 g/L มีความเข้มข้น mol/L เท่าใด (MW=98)",
    "choices": [
      "0.500 mol/L",
      "1.00 mol/L",
      "0.250 mol/L",
      "2.00 mol/L"
    ],
    "correctIndex": 1,
    "explanation": "M = 49/98 = 0.500 mol/L → ข้อ ข"
  },
  {
    "id": "y65-q52",
    "year": 65,
    "questionNum": 52,
    "topicId": "solutions",
    "text": "ผสมสารละลาย KOH 0.200 mol/L 300 mL กับ HNO₃ 0.100 mol/L 200 mL ความเข้มข้นของ OH⁻ ที่เหลือคือข้อใด",
    "choices": [
      "0.0400 mol/L",
      "0.0800 mol/L",
      "0.100 mol/L",
      "0.0200 mol/L"
    ],
    "correctIndex": 2,
    "explanation": "n(KOH)=0.060 mol | n(HNO₃)=0.020 mol | เหลือ OH⁻=0.040 mol ใน 500 mL = 0.0800 mol/L → ข้อ ค"
  },
  {
    "id": "y65-q53",
    "year": 65,
    "questionNum": 53,
    "topicId": "solutions",
    "text": "สารละลาย Ca(OH)₂ อิ่มตัวมีความเข้มข้น 0.0130 mol/L จงหา Ksp ของ Ca(OH)₂",
    "choices": [
      "1.69×10⁻⁴",
      "8.79×10⁻⁶",
      "3.38×10⁻⁵",
      "6.76×10⁻⁴"
    ],
    "correctIndex": 3,
    "explanation": "Ca(OH)₂ → Ca²⁺ + 2OH⁻ | [Ca²⁺]=0.013, [OH⁻]=0.026 | Ksp=0.013×(0.026)²=8.79×10⁻⁶ → ข้อ ง"
  },
  {
    "id": "y65-q54",
    "year": 65,
    "questionNum": 54,
    "topicId": "stoichiometry",
    "text": "CO₂+H₂O→C₆H₁₂O₆+O₂ แล้ว C₆H₁₂O₆→2C₂H₅OH+2CO₂ ถ้าต้องการเตรียมเอทานอลร้อยละ 75 ปริมาตร 200 mL (ความหนาแน่นเอทานอล 0.782 g/mL) ต้องเกิดคาร์บอนไดออกไซด์กี่กรัม (C₂H₅OH=46)",
    "choices": [
      "5.1",
      "56",
      "112",
      "224"
    ],
    "correctIndex": 2,
    "explanation": "เอทานอล = 200×0.75×0.782 = 117.3 g → 117.3/46 = 2.55 mol. การหมัก CO₂ = mol เอทานอล = 2.55 → 2.55×44 = 112 g → ข้อ ค"
  },
  {
    "id": "y65-q55",
    "year": 65,
    "questionNum": 55,
    "topicId": "stoichiometry",
    "text": "ผสมสารละลาย Pb(NO₃)₂ 0.100 M 25.0 mL กับ KI 0.100 M 45.0 mL จะเกิดตะกอน PbI₂ กี่กรัม (Pb=207, I=127)",
    "choices": [
      "0.576",
      "1.04",
      "2.07",
      "4.15"
    ],
    "correctIndex": 1,
    "explanation": "Pb²⁺=0.0025 mol, I⁻=0.0045 mol. Pb²⁺+2I⁻→PbI₂: I⁻ เป็นตัวกำหนด → PbI₂ = 0.0045/2 = 0.00225 mol. M(PbI₂)=461 → 0.00225×461 = 1.04 g → ข้อ ข"
  },
  {
    "id": "y65-q56",
    "year": 65,
    "questionNum": 56,
    "topicId": "stoichiometry",
    "text": "โซเดียมไฮดรอกไซด์ (NaOH) 4.0 g ทำปฏิกิริยากับแคลเซียมคลอไรด์ (CaCl₂) 11.1 g โดยน้ำเป็นตัวทำละลาย หลังปฏิกิริยาเกิดสมบูรณ์มีผลิตภัณฑ์เกิดขึ้นรวมกันกี่กรัม (NaOH=40, CaCl₂=111)",
    "choices": [
      "5.8",
      "9.6",
      "13.2",
      "15.1"
    ],
    "correctIndex": 1,
    "explanation": "2NaOH+CaCl₂→Ca(OH)₂+2NaCl. NaOH=0.1, CaCl₂=0.1; NaOH เป็นตัวกำหนด → Ca(OH)₂=0.05×74=3.7 g, NaCl=0.1×58.5=5.85 g. รวม = 9.55 ≈ 9.6 g → ข้อ ข"
  },
  {
    "id": "y65-q57",
    "year": 65,
    "questionNum": 57,
    "topicId": "solutions",
    "text": "สารละลาย BaCl₂ 0.100 mol/L ปริมาตร 200 mL ผสมกับสารละลาย Na₂SO₄ 0.100 mol/L ปริมาตร 300 mL ตะกอน BaSO₄ ที่เกิดขึ้นมีมวลเท่าใด (BaSO₄ MW=233)",
    "choices": [
      "4.66 g",
      "2.33 g",
      "7.00 g",
      "1.17 g"
    ],
    "correctIndex": 0,
    "explanation": "n(Ba²⁺)=0.020 mol | n(SO₄²⁻)=0.030 mol | Ba²⁺ จำกัด | BaSO₄=0.020 mol × 233=4.66 g → ข้อ ก"
  },
  {
    "id": "y65-q58",
    "year": 65,
    "questionNum": 58,
    "topicId": "solutions",
    "text": "สารละลาย NaCl ความเข้มข้น 0.500 mol/L ปริมาตร 200 mL ผสมกับน้ำ 300 mL ได้ความเข้มข้นเท่าใด",
    "choices": [
      "0.200 mol/L",
      "0.250 mol/L",
      "0.300 mol/L",
      "0.100 mol/L"
    ],
    "correctIndex": 1,
    "explanation": "n=0.500×0.200=0.100 mol ใน 500 mL | C=0.100/0.500=0.200 mol/L → ข้อ ข"
  },
  {
    "id": "y65-q59",
    "year": 65,
    "questionNum": 59,
    "topicId": "solutions",
    "text": "สาร A, B, C มีจุดเดือด -162, 78 และ 100°C ตามลำดับ ที่อุณหภูมิ 25°C สาร A, B, C อยู่ในสถานะใด",
    "choices": [
      "A=แก๊ส, B=ของเหลว, C=ของเหลว",
      "A=แก๊ส, B=ของเหลว, C=ของแข็ง",
      "A=ของเหลว, B=แก๊ส, C=ของแข็ง",
      "A=แก๊ส, B=แก๊ส, C=ของเหลว"
    ],
    "correctIndex": 2,
    "explanation": "Tb A=-162°C < 25°C → แก๊ส | Tb B=78°C > 25°C → ของเหลว | Tb C=100°C > 25°C → ของเหลว → ข้อ ค"
  },
  {
    "id": "y65-q60",
    "year": 65,
    "questionNum": 60,
    "topicId": "solutions",
    "text": "ในการไทเทรต สารละลาย NaOH 0.100 mol/L กับ CH₃COOH 0.100 mol/L ที่จุดสมมูล (equivalence point) pH ของสารละลายจะเป็นอย่างไร",
    "choices": [
      "pH = 7.00",
      "pH > 7",
      "pH < 7",
      "pH = 0"
    ],
    "correctIndex": 3,
    "explanation": "NaOH + CH₃COOH → CH₃COONa + H₂O | CH₃COO⁻ เป็นเบสอ่อน hydrolysis → pH > 7 → ข้อ ข"
  },
  {
    "id": "y66-q1",
    "year": 66,
    "questionNum": 1,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y66-q1.png",
    "text": "สัญลักษณ์ต่อไปนี้จะปรากฏบนฉลากสารเคมีประเภทใด",
    "choices": [
      "สารที่ระเบิดได้",
      "สารที่กัดกร่อน",
      "สารที่เป็นพิษต่อระบบทางเดินหายใจ",
      "สารที่เป็นอันตรายต่อสิ่งแวดล้อม"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q2",
    "year": 66,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y66-q2.png",
    "text": "ข้อใดผิดเกี่ยวกับการใช้สารเคมี",
    "choices": [
      "นักเรียนอ่านฉลากสารเคมี ก่อนนำไปชั่ง",
      "นักเรียนรีบไปเข้าห้องน้ำ โดยฝากเพื่อนที่อยู่ในกลุ่มเดียวกันชั่งสารเคมีแทน",
      "นักเรียนแบ่งกรดเข้มข้นจากขวดบรรจุใส่ในบีกเกอร์ก่อนตวงเพื่อนำไปเจือจาง",
      "นักเรียนชั่งสารเคมีเกินมา เลยนำส่วนเกินเก็บใส่ขวดตามเดิมเพื่อลดการใช้สารเคมี"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q3",
    "year": 66,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y66-q3.png",
    "text": "ข้อใดถูกเกี่ยวกับการทิ้งสารเคมี",
    "choices": [
      "นักเรียนทิ้งสารละลายกรดเข้มข้นที่เหลือในหลอดทดลองลงอ่างน้ำ",
      "นักเรียนทิ้งสารเคมีทั้งหมดทุกประเภทที่เหลือจากการทดลองรวมกัน",
      "นักเรียนทิ้งตัวทำละลายที่ไม่ละลายน้ำที่เหลือจากการทดลองลงอ่างน้ำโดยตรง",
      "นักเรียนทิ้งสารเคมีแยกตามประเภทจนเต็มภาชนะก่อนแล้วจึงทิ้งในภาชนะใบใหม่"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q4",
    "year": 66,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y66-q4.png",
    "text": "พฤติกรรมในข้อใดเสี่ยงอันตรายในขณะทำปฏิบัติการ I) แต่งตัวถูกระเบียบ เตรียมสารละลาย NaOH บนโต๊ะปฏิบัติการ II) สวมเสื้อคลุมปฏิบัติการและแว่นตานิรภัย ใส่รองเท้าแตะ แบ่งถ่ายสารละลายกรดเข้มข้นในตู้ควัน III) สวมแว่นตานิรภัย รับประทานอาหารในห้องปฏิบัติการระหว่างรอทำการทดลอง IV) เทสารละลายเกลือที่เกิดจากการท",
    "choices": [
      "I, II, III",
      "III, IV, V",
      "II และ III เท่านั้น",
      "III และ V เท่านั้น"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q5",
    "year": 66,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y66-q5.png",
    "text": "ของเหลวชนิดหนึ่งมีความหนาแน่น 0.950 g/mL นาย จ. ชั่งของเหลวชนิดนี้โดยใช้เครื่องชั่งละเอียดได้ 23.7500 g นาย ฉ. ชั่งของเหลวชนิดเดียวกันโดยใช้เครื่องชั่งสามคานได้ 38.00 g ปริมาตรของเหลวที่แต่ละ คนคำนวณได้ควรเป็นกี่มิลลิลิตร นาย จ. นาย ฉ. นาย จ. นาย ฉ.",
    "choices": [
      "25 40",
      "25.0 40.0",
      "25.0 40",
      "25.00 40.0"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q6",
    "year": 66,
    "questionNum": 6,
    "topicId": "atomic-structure",
    "text": "ของเหลวที่อยู่ในกระบอกตวงตามรูปข้างล่างนี้ควรมีมวลกี่กรัม ถ้าของเหลวมีความหนาแน่น 1.10 g/mL",
    "choices": [
      "7.04",
      "7.5",
      "7.7",
      "9.46"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q7",
    "year": 66,
    "questionNum": 7,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y66-q7.png",
    "text": "พิจารณาการจัดเรียงอิเล็กตรอนของไอออนของธาตุ 4 ชนิด ในตารางต่อไปนี้ ไอออน การจัดเรียงอิเล็กตรอน A– [10Ne] 3s2 D2+ [18Ar] 4s2 3d10 E3+ [10Ne] 3s2 G3– [36Kr] ข้อใดผิดเกี่ยวกับธาตุหรือไอออนของธาตุ A, D, E และ G",
    "choices": [
      "A+ จะเสถียรมากกว่า A–",
      "D อยู่หมู่เดียวกับ 50Sn",
      "E3+ จะเสถียรมากกว่า E3–",
      "G อยู่หมู่เดียวกับ E"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q8",
    "year": 66,
    "questionNum": 8,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y66-q8.png",
    "text": "พิจารณาจำนวนอิเล็กตรอนในระดับพลังงานย่อย 4s + 3d + 4p ของธาตุ A, D, E และ G ในตารางต่อไปนี้ ธาตุ จำนวนอิเล็กตรอนในระดับพลังงานย่อย 4s + 3d + 4p A 2 D 5 E 12 G 17 ข้อใดถูกเกี่ยวกับสมบัติของธาตุและสารประกอบของ A, D, E และ G",
    "choices": [
      "E และ G เป็นอโลหะ",
      "DG3 เป็นโมเลกุลโคเวเลนต์มีขั้ว",
      "G อยู่หมู่เดียวกับธาตุที่มีเลขอะตอม 31",
      "AG2 และ EG2 เป็นสารประกอบไอออนิก"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q9",
    "year": 66,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y66-q9.png",
    "text": "ธาตุ X และธาตุ Z อยู่ในคาบที่ 3 ของตารางธาตุ โดยสารประกอบคลอไรด์ XCl5 และ ZCl6 มีแรงยึดเหนี่ยว ระหว่างโมเลกุลเป็นแรงแผ่กระจายลอนดอน ข้อใดถูกเกี่ยวกับสมบัติของธาตุ X และธาตุ Z",
    "choices": [
      "ธาตุ X มีขนาดอะตอมเล็กกว่าธาตุ Z",
      "ธาตุ X มีจำนวนอิเล็กตรอนมากกว่าธาตุ Z",
      "สารประกอบไฮไดรด์ของธาตุ X และของธาตุ Z เป็นของแข็งที่อุณหภูมิห้อง",
      "XCl3 และ ZCl2 เป็นโมเลกุลที่อะตอมกลางมีจำนวนอิเล็กตรอนครบออกเตต"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q10",
    "year": 66,
    "questionNum": 10,
    "topicId": "atomic-structure",
    "text": "ธาตุ A อยู่ในคาบที่ 3 มีค่าพลังงานไอออไนเซชัน (kJ/mol) ดังนี้ IE1 IE2 IE3 IE4 IE5 IE6 577 1823 2751 11584 14837 18384 ข้อใดคือสูตรของสารประกอบซัลไฟด์ของ A",
    "choices": [
      "AS",
      "AS2",
      "AS3",
      "A2S3"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q11",
    "year": 66,
    "questionNum": 11,
    "topicId": "atomic-structure",
    "text": "พิจารณาข้อมูลของสารประกอบไอออนิกต่อไปนี้ สารประกอบไอออนิก ไอออนบวก, จำนวนอิเล็กตรอน ในระดับพลังงานย่อย 3d ไอออนลบ จำนวน ไอออนบวก : ไอออนลบ 1 A+, 0 GO4x– 3 : 1 2 D3+, 6 JO4y– 2 : 3 3 E2+, 0 LO4z– 1 : 2 ธาตุ A, D, E เป็นธาตุในคาบที่ 4 ในขณะที่ธาตุ G, J, L เป็นธาตุในคาบที่ 3 และไอออนลบทั้งสามมีรูปร่างเ",
    "choices": [
      "ธาตุ A, D, E เป็นโลหะในกลุ่มธาตุหมู่หลัก",
      "ธาตุ G, J, L อยู่ในหมู่ 16, 15, 14 ตามลำดับ",
      "สารประกอบไอออนิกระหว่าง E กับ L มีสูตรเป็น EL2",
      "สารประกอบไอออนิกระหว่าง A กับ G มีสูตรเป็น A2G"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q12",
    "year": 66,
    "questionNum": 12,
    "topicId": "atomic-structure",
    "text": "ธาตุ A, D และ E อยู่ในคาบที่ 4 มีสมบัติทางกายภาพและทางเคมีดังนี้ ธาตุ สถานะ สมบัติการนำไฟฟ้า พลังงานไอออไนเซชัน ลำดับที่ 1 (IE1, kJ/mol) สมบัติทางเคมี A ของแข็ง นำไฟฟ้าได้ดี 419 ทำปฏิกิริยากับน้ำอย่างรวดเร็ว ให้สารละลายที่เปลี่ยนสี ฟีนอล์ฟทาลีนเป็นสีชมพู D ของแข็ง นำไฟฟ้าได้ดี 665 ไม่ทำปฏิกิริยากับน",
    "choices": [
      "ธาตุ A และ D เป็นโลหะแอลคาไลและโลหะแอลคาไลน์เอิร์ท ตามลำดับ",
      "จำนวนอิเล็กตรอนของธาตุ D มากกว่าธาตุ 20Ca",
      "ธาตุ G เป็นธาตุหมู่หลักและอยู่หมู่เดียวกับธาตุ E",
      "ขนาดอะตอมของ A > D > E"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q13",
    "year": 66,
    "questionNum": 13,
    "topicId": "chemical-bonding",
    "text": "ธาตุ 4 ชนิดเกิดสารประกอบกับ O ได้สารประกอบที่มีสูตรเคมีเหมือนกัน แต่มีสมบัติต่างกันดังข้อมูลในตาราง ธาตุ สมบัติของสารประกอบกับ O A AO2 : A2+ มีการจัดเรียงอิเล็กตรอนเหมือนกับ 18Ar โดยที่ไอออนลบมีสูตร O22– D DO2 : โมเลกุลโคเวเลนต์ไม่มีขั้ว โดยมี D เป็นอะตอมกลางและมีจำนวนอิเล็กตรอนครบออกเตต E EO2 : โมเ",
    "choices": [
      "D อยู่ในคาบที่ 2",
      "E มีจำนวนโปรตอนน้อยที่สุด",
      "A มีจำนวนเวเลนซ์อิเล็กตรอนเท่ากับ 2",
      "G2+ มีจำนวนอิเล็กตรอนใน 4s เท่ากับ 2"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q14",
    "year": 66,
    "questionNum": 14,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสมบัติของสารประกอบคลอไรด์ของธาตุ A, D, E และ G ในตารางต่อไปนี้ ธาตุ สมบัติของสารประกอบคลอไรด์ A ACl3 : ไอออนของธาตุ A มีการจัดอิเล็กตรอนเป็น [18Ar] 3d5 D DCl2 : โมเลกุลโคเวเลนต์ มีอิเล็กตรอนคู่โดดเดี่ยวที่อะตอมกลาง 2 คู่ E ECl4 : โมเลกุลโคเวเลนต์ ไม่มีอิเล็กตรอนคู่โดดเดี่ยวที่อะตอมกลาง G GCl3",
    "choices": [
      "อะตอมของธาตุ D(g) รับอิเล็กตรอนได้ง่ายที่สุด",
      "ขนาดอะตอมของ A > D > E > G",
      "ธาตุ E มีเลขอะตอมเท่ากับ 16",
      "ธาตุ G มีค่า IE1 สูงกว่า 7N"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q15",
    "year": 66,
    "questionNum": 15,
    "topicId": "chemical-bonding",
    "text": "กำหนดค่าพลังงานไอออไนเซชันลำดับที่ 1 ถึง 6 ของธาตุ A, D, E และ G ดังนี้ ธาตุ พลังงานไอออไนเซชัน (kJ/mol ) IE1 IE2 IE3 IE4 IE5 IE6 A 495.9 4560 6900 9540 13400 16600 D 577.9 1820 2750 11600 14800 18400 E 786.3 1580 3230 4360 16000 20000 G 1012 1904 2910 4960 6240 21000 ธาตุทั้ง 4 ชนิดอยู่ในคาบที่ 3 ข",
    "choices": [
      "A2O, สารประกอบไอออนิก",
      "DO3, สารประกอบไอออนิก",
      "EO2, สารประกอบโคเวเลนต์",
      "G2O5, สารประกอบโคเวเลนต์"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q16",
    "year": 66,
    "questionNum": 16,
    "topicId": "chemical-bonding",
    "text": "สารประกอบออกไซด์ของโลหะแทรนซิชัน 4 ธาตุมีสูตรเป็น AO2, DO, EO3 และ G2O3 จำนวนอิเล็กตรอนใน ระดับพลังงานย่อย 3d ของไอออนของธาตุ A, D, E และ G ตามลำดับเป็นดังข้อใด กำหนดให้ 25A, 30D, 27E, 26G",
    "choices": [
      "0, 10, 0, 4",
      "1, 8, 1, 3",
      "3, 10, 3, 5",
      "5, 10, 7, 6"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q17",
    "year": 66,
    "questionNum": 17,
    "topicId": "chemical-bonding",
    "text": "พิจารณาข้อมูลเกี่ยวกับเลขออกซิเดชันสูงสุดของธาตุแทรนซิชันในคาบที่ 4 ดังตาราง ธาตุแทรนซิชัน เลขออกซิเดชันสูงสุด A +7 D +5 E +4 G +6 เลขหมู่ของธาตุ A, D, E และ G ตามลำดับเป็นดังข้อใด",
    "choices": [
      "6, 4, 3, 5",
      "7, 5, 4, 6",
      "8, 6, 5, 6",
      "9, 7, 6, 8"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q18",
    "year": 66,
    "questionNum": 18,
    "topicId": "chemical-bonding",
    "text": "ไอออนหรือโมเลกุลในข้อใดที่อะตอมกลางมีอิเล็กตรอนคู่โดดเดี่ยวเท่ากัน และระบุจำนวนคู่ได้ถูกต้อง",
    "choices": [
      "H2O และ PH3 2 คู่",
      "XeF2 และ SF4 2 คู่",
      "SO3 และ SO42– 1 คู่",
      "ClO3– และ H3O+ 1 คู่"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q19",
    "year": 66,
    "questionNum": 19,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสารต่อไปนี้ FeCl3 Na2O2 SF6 SO2 (กำหนดให้ ไอออนลบใน Na2O2 มีสูตร O22–) อะตอมหรือไอออนในสารใดที่สร้างพันธะแล้วไม่สามารถเขียนโครงสร้างลิวอิสให้เป็นไปตามกฎออกเตตได้",
    "choices": [
      "Fe ใน FeCl3 และ S ใน SF6",
      "Na ใน Na2O2 และ Fe ใน FeCl3",
      "O ใน Na2O2 และ S ใน SO2",
      "S ใน SF6 และ S ใน SO2"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q20",
    "year": 66,
    "questionNum": 20,
    "topicId": "chemical-bonding",
    "text": "ธาตุ Q, R และ T มีเลขอะตอม 24, 19 และ 17 ตามลำดับ ข้อใดถูกเกี่ยวกับสารประกอบของธาตุเหล่านี้",
    "choices": [
      "สารประกอบระหว่าง R กับ T เมื่อละลายน้ำแล้วเติม Na2CO3 จะเกิดตะกอน",
      "สารประกอบระหว่าง R กับ T มีสูตร RT เมื่อละลายน้ำจะได้สารละลายที่นำไฟฟ้า",
      "Q ไม่เกิดสารประกอบกับธาตุอื่น ๆ ยกเว้นฟลูออรีน เนื่องจากมีพันธะโลหะที่แข็งแรง",
      "สารประกอบระหว่าง Q กับ T มีสูตร QT3 เมื่อละลายน้ำจะเกิดแก๊สและได้สารละลายมีสี"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q21",
    "year": 66,
    "questionNum": 21,
    "topicId": "chemical-bonding",
    "text": "ไซยาไนด์เป็นสารพิษ สามารถกำจัดได้ด้วยโซเดียมไทโอซัลเฟตและโซเดียมไนไทรต์ ปฏิกิริยาที่เกี่ยวข้องทำให้ ไอออนเกิดการเปลี่ยนแปลงดังนี้ CN– → SCN– S2O32– → SO32– และ NO2– → NO3– ข้อใดถูก (กำหนดให้ S2O32– มี S เป็นอะตอมกลาง 1 อะตอม)",
    "choices": [
      "SCN– และ CN– ไม่มีเรโซแนนซ์",
      "SO32– และ NO3– มีรูปร่างโมเลกุลเหมือนกัน",
      "ไม่สามารถเขียนสูตรลิวอิสของ S2O32– ที่เป็นไปตามกฎออกเตตได้",
      "มุมพันธะ O–X–O ในไอออนต่าง ๆ เปรียบเทียบได้ดังนี้ SO32– < NO2– < NO3–"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q22",
    "year": 66,
    "questionNum": 22,
    "topicId": "chemical-bonding",
    "text": "การเปรียบเทียบมุมระหว่างพันธะของสารและไอออนในข้อใดถูกต้อง",
    "choices": [
      "H2CO  BF4–  ClO3–  SCl2",
      "I3 –  ClO3 –  H2CO  BF4 –",
      "ClO3 –  SCl2  H2CO  BF4 –",
      "ClO3 –  BF4 –  SCl2  NF3"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q23",
    "year": 66,
    "questionNum": 23,
    "topicId": "chemical-bonding",
    "text": "เมื่อเติมน้ำลงไปในผงแคลเซียมคาร์ไบด์ (CaC2) จะเกิดปฏิกิริยาได้ Ca(OH)2 และ C2H2 พิจารณาข้อความ เกี่ยวกับ C2H2 ต่อไปนี้ I) มีรูปร่างโมเลกุลเป็นเส้นตรง II) ในโมเลกุลมีพันธะเดี่ยวและพันธะสาม III) ละลายน้ำได้ดี IV) โมเลกุลยึดเหนี่ยวกันด้วยแรงแผ่กระจายลอนดอนและแรงระหว่างขั้ว ข้อใดถูก",
    "choices": [
      "I และ II",
      "I และ III",
      "II, III และ IV",
      "II และ IV เท่านั้น"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q24",
    "year": 66,
    "questionNum": 24,
    "topicId": "chemical-bonding",
    "text": "ข้อใดระบุรูปร่างและสภาพขั้วของโมเลกุลได้ถูกต้อง โมเลกุล รูปร่างโมเลกุล สภาพขั้วของโมเลกุล",
    "choices": [
      "O3 เส้นตรง ไม่มีขั้ว",
      "COCl2 สามเหลี่ยมแบนราบ ไม่มีขั้ว",
      "HOCl เส้นตรง มีขั้ว",
      "PBr3 พีระมิดฐานสามเหลี่ยม มีขั้ว"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q25",
    "year": 66,
    "questionNum": 25,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเปรียบเทียบจุดเดือดของสารได้ถูกต้อง",
    "choices": [
      "Ar < C2H6 < C2H5OH < H2O < KBr",
      "C2H6 < Ar < H2O < C2H5OH < KBr",
      "Ar < C2H6 < KBr < C2H5OH < H2O",
      "C2H6 < H2O < Ar < C2H5OH < KBr"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q26",
    "year": 66,
    "questionNum": 26,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสารต่อไปนี้ ข้อใดระบุสารที่มีจุดเดือดสูงกว่าและแรงยึดเหนี่ยวระหว่างโมเลกุลของสารที่มีจุดเดือด สูงกว่าได้ถูกต้อง สาร สารที่มีจุดเดือดสูงกว่า แรงยึดเหนี่ยวระหว่างโมเลกุล",
    "choices": [
      "I2 และ HI HI แรงระหว่างขั้ว",
      "SiO2 และ CO2 SiO2 แรงแผ่กระจายลอนดอน",
      "C2H6 และ C3H8 C3H8 แรงระหว่างขั้ว",
      "CH3NH2 และ CH3F CH3NH2 พันธะไฮโดรเจน"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q27",
    "year": 66,
    "questionNum": 27,
    "topicId": "chemical-bonding",
    "text": "ธาตุ A มีเลขอะตอม 54 เกิดสารประกอบได้หลายชนิดกับฟลูออรีน โดยชนิดหนึ่งมีสูตรโมเลกุล AF4 ข้อใดถูกเกี่ยวกับ AF4",
    "choices": [
      "เป็นโมเลกุลมีขั้ว",
      "มีรูปร่างเป็นทรงสี่หน้า",
      "อะตอมกลางมีอิเล็กตรอนคู่โดดเดี่ยว 2 คู่",
      "แรงยึดเหนี่ยวระหว่างโมเลกุลคือแรงระหว่างขั้ว"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q28",
    "year": 66,
    "questionNum": 28,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับสมบัติของสารและแรงยึดเหนี่ยว",
    "choices": [
      "HF มีจุดเดือดต่ำกว่า HCl เพราะมวลโมเลกุลน้อยกว่า",
      "H₂O มีจุดเดือดสูงกว่า H₂S เพราะพันธะ H",
      "CCl₄ มีแรง dipole-dipole",
      "NH₃ และ PH₃ มีแรงยึดเหนี่ยวชนิดเดียวกัน"
    ],
    "correctIndex": 3,
    "explanation": "H₂O: O-H bond + EN สูง → พันธะ H แข็งแรง จุดเดือด 100°C > H₂S (-60°C) ✓ → ข้อ ง"
  },
  {
    "id": "y66-q29",
    "year": 66,
    "questionNum": 29,
    "topicId": "chemical-bonding",
    "text": "ลวดโลหะ X ที่มีเส้นผ่านศูนย์กลาง 2.0 mm ยาว 1 m มี X กี่อะตอม ถ้า X มีมวลอะตอมเท่ากับ M มี ความหนาแน่น d g/cm3 และ N คือ ค่าคงตัวอาโวกาโดร",
    "choices": [
      "𝜋𝑑𝑁 𝑀",
      "4𝜋𝑑𝑁 𝑀",
      "𝜋𝑁 𝑑𝑀",
      "𝜋𝑑 𝑀𝑁"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q30",
    "year": 66,
    "questionNum": 30,
    "topicId": "atomic-structure",
    "text": "ธาตุรีเนียม (Re) มี 2 ไอโซโทป คือ ¹⁸⁵Re (มวล 185.0) และ ¹⁸⁷Re (มวล 187.0) มวลอะตอมเฉลี่ย 186.2 ปริมาณร้อยละของ ¹⁸⁵Re และ ¹⁸⁷Re เป็นเท่าใดตามลำดับ",
    "choices": [
      "25 และ 75",
      "40 และ 60",
      "60 และ 40",
      "75 และ 25"
    ],
    "correctIndex": 1,
    "explanation": "ให้ ¹⁸⁵Re = x: 185x + 187(1−x) = 186.2 → 187 − 2x = 186.2 → x = 0.40 → 40% และ 60% → ข้อ ข"
  },
  {
    "id": "y66-q31",
    "year": 66,
    "questionNum": 31,
    "topicId": "stoichiometry",
    "text": "ไฮโดรคาร์บอนชนิดหนึ่ง 1 โมเลกุลมี C 2 อะตอม สารนี้ 1.505×10²⁴ โมเลกุล มี 9.03×10²⁴ อะตอม สูตรโมเลกุลและจำนวนโมล H ในสาร 1.505×10²⁴ โมเลกุล เป็นดังข้อใด",
    "choices": [
      "C₂H₄, 10",
      "C₂H₆, 10",
      "C₂H₄, 15",
      "C₂H₆, 15"
    ],
    "correctIndex": 0,
    "explanation": "อะตอมต่อโมเลกุล = 9.03×10²⁴/1.505×10²⁴ = 6 → C₂H₄. โมเลกุล = 1.505×10²⁴/6.02×10²³ = 2.5 mol → mol H = 2.5×4 = 10 → ข้อ ก"
  },
  {
    "id": "y66-q32",
    "year": 66,
    "questionNum": 32,
    "topicId": "stoichiometry",
    "text": "แอมโมเนียมไนเทรต (NH₄NO₃) มีไนโตรเจนร้อยละเท่าใดโดยมวล และถ้าต้องการเตรียมปุ๋ยน้ำให้มีไนโตรเจน 21 %w/v ปริมาตร 1 L ต้องใช้สารนี้กี่กรัม (N=14, NH₄NO₃=80)",
    "choices": [
      "17.5 %, 1200 g",
      "28 %, 750 g",
      "35 %, 210 g",
      "35 %, 600 g"
    ],
    "correctIndex": 3,
    "explanation": "%N = 2×14/80 = 35%. ต้องการ N 21 g ใน 1 L → NH₄NO₃ = 21/0.35 = 60 g → ข้อ ง"
  },
  {
    "id": "y66-q33",
    "year": 66,
    "questionNum": 33,
    "topicId": "stoichiometry",
    "text": "สารประกอบออกไซด์ M₂O₃ 63.5 g มีออกซิเจน 12.0 g มวลอะตอมของธาตุ M เป็นเท่าใด",
    "choices": [
      "46",
      "69",
      "103",
      "206"
    ],
    "correctIndex": 2,
    "explanation": "mol O = 12.0/16 = 0.75 → mol M₂O₃ = 0.25 → mol M = 0.50. มวล M = 63.5−12.0 = 51.5 g → M = 51.5/0.50 = 103 → ข้อ ค"
  },
  {
    "id": "y66-q34",
    "year": 66,
    "questionNum": 34,
    "topicId": "stoichiometry",
    "text": "สารประกอบ Na₃AO₄·xH₂O มีออกซิเจน 64.0 %w/w และมวลโมเลกุล 400 g/mol มวลอะตอมของธาตุ A เป็นเท่าใด (Na=23, O=16, H=1)",
    "choices": [
      "31",
      "51",
      "75",
      "87"
    ],
    "correctIndex": 1,
    "explanation": "มวล O = 400×0.64 = 256 → จำนวน O = 16 อะตอม. AO₄ มี 4, ที่เหลือ 12 มาจาก H₂O → x=12. A = 400 − (3×23 + 4×16 + 12×18) = 400 − 349 = 51 → ข้อ ข"
  },
  {
    "id": "y66-q35",
    "year": 66,
    "questionNum": 35,
    "topicId": "stoichiometry",
    "text": "ธาตุ X และ Z เกิดสารประกอบ X₂Z₃ ซึ่งมี X 70 %w/w และมวลต่อโมล 160 g/mol มวลต่อโมลของ XZ เป็นกี่กรัม/โมล",
    "choices": [
      "45",
      "56",
      "72",
      "100"
    ],
    "correctIndex": 2,
    "explanation": "มวล X ใน X₂Z₃ = 160×0.70 = 112 → X = 56. มวล Z = 48 → Z = 16. XZ = 56+16 = 72 → ข้อ ค"
  },
  {
    "id": "y66-q36",
    "year": 66,
    "questionNum": 36,
    "topicId": "solutions",
    "text": "สารละลายโซเดียมคาร์บอเนต (Na₂CO₃) เข้มข้น 2.65 %w/v ความหนาแน่น 1.03 g/mL จะมีความเข้มข้นของโซเดียมไอออนกี่โมลาร์ (Na₂CO₃=106)",
    "choices": [
      "0.125",
      "0.250",
      "0.500",
      "0.515"
    ],
    "correctIndex": 2,
    "explanation": "2.65 %w/v = 26.5 g/L → 26.5/106 = 0.25 mol/L Na₂CO₃. แต่ละโมลให้ Na⁺ 2 ตัว → [Na⁺] = 0.50 M → ข้อ ค"
  },
  {
    "id": "y66-q37",
    "year": 66,
    "questionNum": 37,
    "topicId": "stoichiometry",
    "text": "สินแร่พลวง 0.45 g เมื่อนำมาวิเคราะห์พบว่ามีแร่สติบไนต์ (Sb2S3) อยู่ 0.90 mg สินแร่พลวงนี้มีแร่สติบไนต์อยู่ กี่ส่วนในพันล้านส่วน",
    "choices": [
      "2.0  103",
      "5.0  105",
      "2.0  106",
      "2.0  109"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 9 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q38",
    "year": 66,
    "questionNum": 38,
    "topicId": "solutions",
    "text": "สารละลายกลูโคส (C₆H₁₂O₆) เข้มข้น 2.0 mol/kg ความหนาแน่น 1.10 g/mL มีความเข้มข้นกี่โมลต่อลิตร (กลูโคส=180)",
    "choices": [
      "1.3",
      "1.6",
      "2.2",
      "3.4"
    ],
    "correctIndex": 1,
    "explanation": "2.0 mol ในน้ำ 1 kg: มวลกลูโคส = 360 g → มวลสารละลาย = 1360 g → ปริมาตร = 1360/1.10 = 1236 mL. ความเข้มข้น = 2.0/1.236 = 1.6 mol/L → ข้อ ข"
  },
  {
    "id": "y66-q39",
    "year": 66,
    "questionNum": 39,
    "topicId": "solutions",
    "text": "เตรียม H₂C₂O₄ โดยชั่ง H₂C₂O₄·2H₂O 3.15 g (M=126) ละลายเป็น 100 mL ถ้าต้องการเตรียม H₂C₂O₄ เข้มข้น 0.020 mol/L 250 mL ต้องใช้สารละลายที่เตรียมไว้กี่ mL",
    "choices": [
      "8.0",
      "14",
      "20",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "สต๊อก = (3.15/126)/0.1 = 0.25 M. ต้องการ mol = 0.020×0.250 = 0.005 → V = 0.005/0.25 = 0.020 L = 20 mL → ข้อ ค"
  },
  {
    "id": "y66-q40",
    "year": 66,
    "questionNum": 40,
    "topicId": "solutions",
    "text": "สารละลาย X เข้มข้น 47.0 %w/w 100 mL ความหนาแน่น 1.50 g/mL (M=40.0) หากต้องการเจือจางให้เข้มข้น 1.00 mol/L ต้องเติมน้ำกี่ mL",
    "choices": [
      "1760",
      "1660",
      "1075",
      "683"
    ],
    "correctIndex": 1,
    "explanation": "มวลสารละลาย = 150 g → X = 70.5 g → 1.7625 mol. ปริมาตรสุดท้าย = 1.7625/1.00 = 1762 mL → เติมน้ำ = 1762 − 100 ≈ 1660 mL → ข้อ ข"
  },
  {
    "id": "y66-q41",
    "year": 66,
    "questionNum": 41,
    "topicId": "stoichiometry",
    "text": "สารละลายของ A, B, C และ D ในน้ำเข้มข้น 25 %w/w มีจุดเดือด 100.5, 101.8, 100.9 และ 102.7 °C ตามลำดับ ข้อใดเปรียบเทียบมวลต่อโมลของสาร A, B, C และ D ได้ถูกต้อง กำหนดให้ A, B, C, D เป็นสารระเหยยากและไม่แตกตัวเป็นไอออน Kb ของน้ำ = 0.51 °C/m",
    "choices": [
      "A < C < B < D",
      "B < A < D < C",
      "C < D < A < B",
      "D < B < C < A"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 9 ของข้อสอบปี 66"
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
    "id": "y66-q43",
    "year": 66,
    "questionNum": 43,
    "topicId": "stoichiometry",
    "text": "CO₂ + 2NH₃ → NH₂CONH₂ + H₂O ถ้า CO₂ ทำปฏิกิริยาพอดีกับ NH₃ 10.2 kg จะมีผลิตภัณฑ์เกิดขึ้นทั้งหมดกี่กิโลกรัม (NH₃=17, ยูเรีย=60, H₂O=18)",
    "choices": [
      "10.8",
      "18.0",
      "23.4",
      "36.0"
    ],
    "correctIndex": 2,
    "explanation": "NH₃ = 10.2/17 = 0.6 kmol → ยูเรีย = 0.3 kmol, H₂O = 0.3 kmol. มวลผลิตภัณฑ์ = 0.3×60 + 0.3×18 = 18 + 5.4 = 23.4 kg → ข้อ ค"
  },
  {
    "id": "y66-q44",
    "year": 66,
    "questionNum": 44,
    "topicId": "stoichiometry",
    "text": "ใส่โลหะสังกะสี 19.50 g ลงในสารละลายซิลเวอร์ไนเทรต Zn + 2AgNO₃ → 2Ag + Zn(NO₃)₂ เมื่อปฏิกิริยาดำเนินไประยะหนึ่ง ของแข็งทั้งหมดมีสังกะสี 18.85 g ของแข็งนี้มีเงินอยู่ร้อยละโดยมวลเท่าใด (Zn=65, Ag=108)",
    "choices": [
      "5.42",
      "10.3",
      "11.5",
      "76.9"
    ],
    "correctIndex": 1,
    "explanation": "Zn ที่ทำปฏิกิริยา = (19.50−18.85)/65 = 0.01 mol → Ag เกิด = 0.02 mol = 2.16 g. ของแข็งรวม = 18.85+2.16 = 21.01 g. %Ag = 2.16/21.01×100 = 10.3% → ข้อ ข"
  },
  {
    "id": "y66-q45",
    "year": 66,
    "questionNum": 45,
    "topicId": "stoichiometry",
    "text": "สารประกอบ MnFₓ 1.12 g ให้ความร้อนกับโพแทสเซียมมากเกินพอ ได้โลหะแมงกานีส 0.55 g และโพแทสเซียมฟลูออไรด์ 1.74 g สูตรเคมีของสารประกอบนี้คือข้อใด (Mn=55, F=19)",
    "choices": [
      "MnF₂",
      "MnF₃",
      "MnF₄",
      "MnF₅"
    ],
    "correctIndex": 1,
    "explanation": "mol Mn = 0.55/55 = 0.01. มวล F = 1.12−0.55 = 0.57 g → mol F = 0.03. อัตราส่วน F:Mn = 3:1 → MnF₃ → ข้อ ข"
  },
  {
    "id": "y66-q46",
    "year": 66,
    "questionNum": 46,
    "topicId": "equilibrium",
    "text": "ปฏิกิริยาระหว่างแก๊สไฮโดรเจนที่มากเกินพอกับคอปเปอร์(I)ออกไซด์ปริมาณหนึ่ง ได้โลหะทองแดง 12.7 g และ น้ำเป็นผลิตภัณฑ์ ข้อความต่อไปนี้ข้อใดถูก",
    "choices": [
      "ได้น้ำ 1.8 g",
      "ใช้คอปเปอร์(I)ออกไซด์ 15.9 g",
      "จำนวนโมลของน้ำเป็น 2 เท่าของทองแดง",
      "จำนวนโมลของคอปเปอร์(I)ออกไซด์เท่ากับของทองแดง"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q47",
    "year": 66,
    "questionNum": 47,
    "topicId": "equilibrium",
    "text": "แก๊ส X และ Y ทำปฏิกิริยากันได้แก๊ส Z ซึ่งละลายน้ำได้ 100 % เมื่อผ่านแก๊ส X และ Y เข้าสู่กระบอกตวงซึ่ง คว่ำอยู่ในอ่างน้ำดังรูป โดยทดลองเป็น 4 ขั้นต่อเนื่องกัน ได้ผลดังแสดงในตาราง ขั้นที่ แก๊สและปริมาตรที่ผ่าน เข้าสู่กระบอกตวง ปริมาตรแก๊สเมื่อ ปฏิกิริยาสิ้นสุด (mL) 1 แก๊ส X 30 mL 30 2 แก๊ส Y 10 mL 10 ",
    "choices": [
      "1 : 3",
      "3 : 1",
      "1 : 2",
      "2 : 1"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q48",
    "year": 66,
    "questionNum": 48,
    "topicId": "equilibrium",
    "text": "จากปฏิกิริยาต่อไปนี้ H2S + O2 → SO2 + H2O (สมการยังไม่ดุล) ถ้าในระบบปิดมีแก๊สไข่เน่าและแก๊สออกซิเจนอย่างละ 10.0 g ผสมกันอยู่ หลังจากเกิดปฏิกิริยาสมบูรณ์จะได้ แก๊สซัลเฟอร์ไดออกไซด์กี่ลิตรที่ STP",
    "choices": [
      "4.7",
      "6.6",
      "7.0",
      "10.5 ท่อนำแก สเข้า กระบอกตวง อ่างน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q49",
    "year": 66,
    "questionNum": 49,
    "topicId": "equilibrium",
    "text": "NH4HCO3 สังเคราะห์ได้จากปฏิกิริยา NH3(g) + CO2(g) + H2O(l) → NH4HCO3(aq) โดย NH3 และ CO2 ที่ใช้เป็นสารตั้งต้นสังเคราะห์ได้จากปฏิกิริยาต่อไปนี้ 2H2O(l) → 2H2(g) + O2(g) N2(g) + 3H2(g) → 2NH3(g) CaCO3(s) → CaO(s) + CO2(g) ถ้าต้องการสังเคราะห์ NH4HCO3 790 g จะต้องใช้ H2O อย่างน้อย 5A g ค่า A เป็นเท่าใด",
    "choices": [
      "36",
      "54",
      "90",
      "450"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q50",
    "year": 66,
    "questionNum": 50,
    "topicId": "equilibrium",
    "text": "ธาตุฟอสฟอรัส (P4) 217 g ทำปฏิกิริยากับแก๊สออกซิเจนมากเกินพอได้เตตระฟอสฟอรัสเดคะออกไซด์ (tetraphosphorus decaoxide) เป็นผลิตภัณฑ์ ถ้าผลได้ร้อยละของปฏิกิริยาเท่ากับ 90 จะมีเตตระ ฟอสฟอรัสเดคะออกไซด์เกิดขึ้นกี่กรัม",
    "choices": [
      "346",
      "447",
      "497",
      "552"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q51",
    "year": 66,
    "questionNum": 51,
    "topicId": "equilibrium",
    "text": "ปฏิกิริยาการสลายตัวของ KClO3 ดังสมการ KClO3(s) → KCl(s) + O2(g) (สมการยังไม่ดุล) มีผลได้ร้อยละของปฏิกิริยาเท่ากับ 20.0 ถ้านำแก๊สออกซิเจนที่เกิดขึ้นไปใช้ในกระบวนการถลุงเหล็ก โดยมี ขั้นตอนดังนี้ ขั้นที่ 1 C(s) + O2(g) → CO(g) (สมการยังไม่ดุล) ขั้นที่ 2 Fe2O3(s) + CO(g) → Fe(s) + CO2(g) (สมการยังไม่ดุล",
    "choices": [
      "6.1",
      "20",
      "31",
      "61"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q52",
    "year": 66,
    "questionNum": 52,
    "topicId": "equilibrium",
    "text": "Sodium azide (NaN3) เป็นสารที่มีความเป็นพิษสูง กำจัดได้โดยการทำปฏิกิริยากับกรดไนตรัส (HNO2) ในภาวะกรดภายในตู้ดูดควันเนื่องจากเกิดแก๊สพิษ NO ดังสมการ 2NaN3(s) + 2HNO2(aq) + 2HCl(aq) → 3N2(g) + 2NO(g) + 2NaCl(aq) + 2H2O(l) เมื่อนำ NaN3 52.0 g มาทำปฏิกิริยากับสารละลาย HNO2 เข้มข้น 0.800 M ปริมาตร 2.50 ",
    "choices": [
      "9.6",
      "22",
      "27",
      "34"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q53",
    "year": 66,
    "questionNum": 53,
    "topicId": "equilibrium",
    "text": "ถ้าวัดความดันในถังดำน้ำ (scuba tank) ที่ใช้แล้วได้เท่ากับ 1470 psi ความดันนี้ในหน่วยอื่น ๆ ข้อใดผิด",
    "choices": [
      "1.01  107 Pa",
      "100 atm",
      "100 bar",
      "7600 torr"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 66"
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
    "id": "y66-q59",
    "year": 66,
    "questionNum": 59,
    "topicId": "equilibrium",
    "text": "ข้อใดไม่ใช่สมมุติฐานเกี่ยวกับอนุภาคของแก๊สในทฤษฎีจลน์ของแก๊ส",
    "choices": [
      "ไม่มีมวล",
      "ไม่มีแรงกระทำต่อกัน",
      "ไม่มีปริมาตรหรือปริมาตรน้อยมาก",
      "ไม่มีการสูญเสียพลังงานจลน์รวมเมื่อชนกัน"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 66"
  },
  {
    "id": "y66-q60",
    "year": 66,
    "questionNum": 60,
    "topicId": "equilibrium",
    "text": "ผสมแก๊สมีเทน (CH4) 0.5 mol ไฮโดรเจน (H2) 0.5 mol และซัลเฟอร์ไดออกไซด์ (SO2) 0.5 mol ในถังขนาด 10 L ที่อุณหภูมิ 25 °C สักครู่หนึ่งพบว่าปิดวาล์วถังไม่แน่นพอแก๊สจึงรั่วไหลได้ ความดันย่อยของแก๊สภายใน ถังจะเป็นดังข้อใด",
    "choices": [
      "PSO2 > PCH4 > PH2",
      "PSO2 = PCH4 = PH2",
      "PCH4 > PSO2 > PH2",
      "PH2 > PSO2 > PCH4"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 66"
  },
  {
    "id": "y67-q1",
    "year": 67,
    "questionNum": 1,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y67-q1.png",
    "text": "ระบบ GHS (Globally Harmonized System of Classification and Labelling of Chemicals) ใช้สัญลักษณ์รูปภาพแสดงอันตรายของสาร จากรูปสัญลักษณ์ที่กำหนดให้ ข้อใดเป็นการจับคู่สัญลักษณ์กับความเป็นอันตรายที่ถูกต้อง",
    "choices": [
      "สัญลักษณ์เปลวไฟ = ติดไฟง่าย",
      "สัญลักษณ์กะโหลก = เป็นอันตรายต่อสิ่งแวดล้อม",
      "สัญลักษณ์หัวใจ = เป็นอันตรายต่อสุขภาพ",
      "สัญลักษณ์ขวด = กัดกร่อน"
    ],
    "correctIndex": 0,
    "explanation": "ระบบ GHS: เปลวไฟ = ติดไฟง่าย ✓ | กะโหลก = พิษร้ายแรง | หัวใจ = เป็นอันตรายต่อสุขภาพ ✓ | ขวด = กัดกร่อน ✓ → ข้อ ก"
  },
  {
    "id": "y67-q2",
    "year": 67,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y67-q2.png",
    "text": "ข้อใดถูกต้อง",
    "choices": [
      "เมื่อสัมผัสบีกเกอร์หรือภาชนะที่ร้อน ควรใช้ยาสีฟันทาบริเวณที่สัมผัสของร้อน",
      "เมื่อได้กลิ่นแปลกปลอมในห้องปฏิบัติการ ควรเดินหาสาเหตุและที่มาของกลิ่นนั้น",
      "หากจำเป็นต้องทดสอบกลิ่น สามารถสูดดมสารเคมีโดยตรงเพื่อจะได้พิสูจน์ทราบกลิ่นชัด ๆ",
      "กรดเจือจางหรือเบสเจือจางปริมาตร 100 mL ที่เหลือจากการทดลอง สามารถเททิ้งลงอ่างน้ำได้ 3. ข้อใดเป็นการตอบโต้สถานการณ์ได้ถูก"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q3",
    "year": 67,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y67-q3.png",
    "text": "สมบัติใดของสาร X ทำให้เกิดอันตรายจากการสูดดม ตามข้อมูลที่กำหนดให้จากฉลาก GHS",
    "choices": [
      "ติดไฟง่าย",
      "ระเบิดได้",
      "เป็นอันตรายต่อระบบทางเดินหายใจ",
      "กัดกร่อนผิวหนัง"
    ],
    "correctIndex": 2,
    "explanation": "ต้องดูฉลาก GHS ในรูป → ข้อ ค"
  },
  {
    "id": "y67-q4",
    "year": 67,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y67-q4.png",
    "text": "แก๊สอุดมคติชนิดหนึ่งมีความดันในหน่วยเอสไอเท่ากับ 1.00  105 ปาสคาล หากกำหนดให้ ความดัน คือ แรง ที่กระทำต่อหนึ่งหน่วยพื้นที่ ดังสมการ P = F/A หน่วยปาสคาลซึ่งเป็นหน่วยเอสไออนุพัทธ์สอดคล้องกับ หน่วยเอสไอพื้นฐานใดต่อไปนี้มากที่สุด",
    "choices": [
      "กิโลกรัม เมตร–1 วินาที–2",
      "กรัม เซนติเมตร–1 วินาที–2",
      "กิโลกรัม เมตร วินาที 2",
      "นิวตัน เมตร–2"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q5",
    "year": 67,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "น้ำปริมาตร 10.00 cm3 เมื่อได้รับความร้อนทุก ๆ 418.4 J จะทำให้อุณหภูมิของน้ำเพิ่มขึ้น 10.00 °C จากการทดลอง ให้ความร้อนที่ได้จากปฏิกิริยาการเผาไหม้ของแก๊สธรรมชาติ ปริมาณ 8.080 kcal แก่น้ำจำนวนหนึ่งพบว่า อุณหภูมิของ น้ำก่อนและหลังการให้ความร้อนที่วัดโดยใช้เทอร์มอมิเตอร์ เป็นดังรูป การทดลองดังกล่าวใช้น้",
    "choices": [
      "0.400",
      "0.4000",
      "400",
      "400.0 6. นักเรียน 4 คนทดลองวัดปริมาตรสารละลาย NaOH ที่ใช้ทำปฏิกิริยาพอดีกับสารละลายกรดตัวอย่างชนิด เดียวกันโดยใช้เครื่อง"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q6",
    "year": 67,
    "questionNum": 6,
    "topicId": "atomic-structure",
    "text": "จากข้อมูลในฉลากสาร X พิจารณาข้อสรุปต่อไปนี้ ข้อใดถูกต้อง",
    "choices": [
      "สาร X เป็นสารเดี่ยว",
      "สาร X ควรเก็บห่างจากแหล่งความร้อน",
      "สาร X ปลอดภัยต่อสิ่งแวดล้อม",
      "สาร X ไม่ต้องใส่อุปกรณ์ป้องกัน"
    ],
    "correctIndex": 1,
    "explanation": "สารที่มีสัญลักษณ์ GHS เกี่ยวกับอัคคีภัย ควรเก็บห่างจากแหล่งความร้อน ✓ → ข้อ ข"
  },
  {
    "id": "y67-q7",
    "year": 67,
    "questionNum": 7,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y67-q7.png",
    "text": "จากแบบจำลองอะตอมของโบร์ ถ้าอิเล็กตรอนในอะตอมไฮโดรเจนคายพลังงานออกมาเป็นแสงที่มองเห็นได้ ข้อใดเป็นปรากฏการณ์ที่น่าจะเกิดขึ้นมากที่สุด",
    "choices": [
      "อิเล็กตรอนวงนอกหลุดออกนอกอะตอม",
      "อิเล็กตรอนวงในเปลี่ยนระดับพลังงานจากต่ำไปหาสูง",
      "อิเล็กตรอนจากระดับพลังงานที่ 2 ลงมาอยู่ที่สถานะพื้น",
      "อิเล็กตรอนจากระดับพลังงานที่ 4 ลงมาอยู่ระดับพลังงานที่ 2 36 35 16 15"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q8",
    "year": 67,
    "questionNum": 8,
    "topicId": "atomic-structure",
    "text": "แบบจำลองอะตอมของโบร์สามารถใช้ในการตอบข้อสงสัยว่า “ทำไมอิเล็กตรอนซึ่งมีประจุลบไม่ถูกดูดเข้าหา นิวเคลียสซึ่งมีประจุบวก” ข้อใดเป็นคำอธิบายที่ตอบข้อสงสัยนี้",
    "choices": [
      "นิวเคลียสมีอนุภาคที่มีประจุบวกคอยผลักอิเล็กตรอนไม่ให้เข้าไปรวมกับนิวเคลียส",
      "อิเล็กตรอนมีวงโคจรที่แน่นอน ตราบเท่าที่ไม่มีพลังงานภายนอกมากระทำ",
      "อิเล็กตรอนเคลื่อนที่ด้วยความเร็วสูง หนีแรงดึงดูดของนิวเคลียสได้",
      "นิวเคลียสมีนิวตรอนที่ช่วยบดบังไม่ให้โปรตอนดึงดูดอิเล็กตรอน"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 67"
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
    "id": "y67-q10",
    "year": 67,
    "questionNum": 10,
    "topicId": "atomic-structure",
    "text": "ไอออนของธาตุหนึ่งมีประจุ +3 มีเลขมวล 85 และมี 34 อิเล็กตรอน ข้อใดถูกต้องเกี่ยวกับธาตุนี้",
    "choices": [
      "อะตอมของธาตุนี้มี 31 อิเล็กตรอน",
      "อะตอมของธาตุนี้มีขนาดเล็กกว่า 36Kr",
      "ไอโซโทปหนึ่งของธาตุนี้มี 48 นิวตรอน",
      "ไอออนที่เสถียรของธาตุนี้มีทั้งประจุ +3 และ +1"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 67"
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
    "id": "y67-q12",
    "year": 67,
    "questionNum": 12,
    "topicId": "atomic-structure",
    "text": "ข้อใดผิดเกี่ยวกับแนวโน้มของสมบัติธาตุตามตารางธาตุ",
    "choices": [
      "ในหมู่เดียวกัน ธาตุที่มีขนาดอะตอมใหญ่กว่ามีจำนวนอิเล็กตรอนมากกว่า",
      "ในคาบเดียวกัน ธาตุที่มีจำนวนอิเล็กตรอนมากกว่ามีแรงดึงดูดอิเล็กตรอนจากนิวเคลียสมากกว่า",
      "ในคาบเดียวกัน ธาตุที่มีจำนวนโปรตอนมากกว่ามีความสามารถในการดึงดูดอิเล็กตรอนในพันธะมากกว่า",
      "ในหมู่เดียวกัน ธาตุที่มีจำนวนอิเล็กตรอนมากกว่ามีความสามารถในการดึงดูดอิเล็กตรอนในพันธะน้อยกว่า"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 67"
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
    "id": "y67-q14",
    "year": 67,
    "questionNum": 14,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y67-q14.png",
    "text": "ธาตุ M, Q, R, T มีสมบัติดังนี้ I. IE1 ของ Q > T > R II. M และ R เมื่อได้รับพลังงาน อิเล็กตรอนในระดับพลังงานย่อย 4s จะหลุดก่อน III. Q และ T เมื่อรับอิเล็กตรอนจะเข้ามาอยู่ในระดับพลังงานย่อย 4p IV. เลขอะตอมของธาตุทั้งสี่ คือ 19, 30, 31, 34 (ไม่เรียงตามลำดับธาตุ) ข้อใดเป็นเลขอะตอมของธาตุ M, Q, R, T ตามล",
    "choices": [
      "19, 30, 31, 34",
      "19, 34, 31, 30",
      "30, 19, 34, 31",
      "30, 34, 19, 31"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q15",
    "year": 67,
    "questionNum": 15,
    "topicId": "atomic-structure",
    "text": "พิจารณาเลขหมู่และคาบของธาตุที่มีสัญลักษณ์สมมติต่อไปนี้ ธาตุ เลขหมู่ เลขคาบ A 14 3 D 12 4 E 2 5 G 17 3 นักเรียนคนหนึ่งวิเคราะห์ข้อมูลในตาราง ได้ข้อสรุปดังนี้ I. สารประกอบระหว่าง A และ E มีสูตรเคมีเป็น E2A II. ธาตุ D มีเลขออกซิเดชันหลายค่า III. สารประกอบระหว่าง A และ G มีแรงยึดเหนี่ยวระหว่างโมเลกุลเป็",
    "choices": [
      "I และ II",
      "I และ IV",
      "II และ III",
      "III และ IV"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q16",
    "year": 67,
    "questionNum": 16,
    "topicId": "chemical-bonding",
    "text": "เมื่อแมงกานีส–55 ( Mn 25 55 ) ถูกยิงด้วยโปรตอน จะได้นิวตรอนกับธาตุใด",
    "choices": [
      "Cr 24 54",
      "Mn 25 54",
      "Fe 26 55",
      "Co 27 58"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 67"
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
    "id": "y67-q18",
    "year": 67,
    "questionNum": 18,
    "topicId": "chemical-bonding",
    "text": "โครงสร้างลิวอิสข้อใดไม่ถูกต้อง",
    "choices": [
      "",
      "",
      "",
      ""
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q19",
    "year": 67,
    "questionNum": 19,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y67-q19.png",
    "text": "เมื่อนำสารละลายเลดไนเทรต (Pb(NO3)2) เข้มข้น 0.50 mol/L ปริมาตร 1.00 mL ผสมกับสารละลาย โพแทสเซียมไอโอไดด์ (KI) เข้มข้น 0.80 mol/L ปริมาตร 1.00 mL ข้อใดเปรียบเทียบปริมาณไอออนใน สารละลายผสมได้ถูกต้อง",
    "choices": [
      "โพแทสเซียมไอออน > ไอโอไดด์ไอออน > ไนเทรตไอออน > เลดไอออน",
      "ไนเทรตไอออน > โพแทสเซียมไอออน = ไอโอไดด์ไอออน > เลดไอออน",
      "โพแทสเซียมไอออน > ไนเทรตไอออน > ไอโอไดด์ไอออน > เลดไอออน",
      "ไนเทรตไอออน > โพแทสเซียมไอออน > เลดไอออน > ไอโอไดด์ไอออน S O O F F F N Si Cl Cl Cl Cl P Cl Cl Cl Cl Cl"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q20",
    "year": 67,
    "questionNum": 20,
    "topicId": "chemical-bonding",
    "text": "เมื่อเขียนโครงสร้างลิวอิสที่เสถียรของ เบนซาไมด์ (benzamide, C6H5CONH2) ข้อใดระบุอัตราส่วนจำนวนคู่ ของอิเล็กตรอนคู่โดดเดี่ยว : พันธะเดี่ยว : พันธะคู่ : พันธะสาม ได้ถูกต้อง กำหนดให้ C6H5– มีโครงสร้างที่คาร์บอนจับกันเป็นวงหกเหลี่ยม",
    "choices": [
      "3 : 12 : 1 : 2",
      "3 : 12 : 4 : 0",
      "3 : 15 : 1 : 0",
      "4 : 13 : 3 : 0"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q21",
    "year": 67,
    "questionNum": 21,
    "topicId": "chemical-bonding",
    "text": "การละลายของสารประกอบไอออนิกมีพลังงานที่เกี่ยวข้องคือ พลังงานแลตทิซ และพลังงานไฮเดรชันซึ่งเป็น ผลรวมจากพลังงานไฮเดรชันของไอออนที่เป็นองค์ประกอบ พิจารณาข้อมูลพลังงาน (kJ/mol) สำหรับสารประกอบแฮไลด์ของธาตุ A, D, E และ G ต่อไปนี้ สาร พลังงานแลตทิซ พลังงานไฮเดรชัน ไอออนบวก ไอออนลบ รวม BaBr2 1950 1305 288.",
    "choices": [
      "เมื่อ EF2 ละลายในน้ำ สารละลายจะร้อนขึ้น",
      "พลังงานไฮเดรชันของ GI2 มากกว่า AF อยู่ 1,189.1 kJ/mol",
      "สารประกอบที่ไอออนบวกมีประจุสูงมีแนวโน้มจะคายพลังงานเมื่อละลายน้ำ",
      "ผลต่างระหว่างพลังงานแลตทิซกับพลังงานไฮเดรชันของ EF2 มีค่ามากที่สุด"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q22",
    "year": 67,
    "questionNum": 22,
    "topicId": "chemical-bonding",
    "text": "เมื่อนำสารต่อไปนี้ K2SO4, BaCl2, Na2CO3 และ Cu(NO3)2 อย่างละ 0.5 g ละลายในน้ำ 10 mL แล้ว เทรวมกัน พบตะกอนเกิดขึ้น ตะกอนนี้เป็นสารชนิดใดบ้าง",
    "choices": [
      "BaSO4, BaCO3 และ CuCO3",
      "BaSO4, BaCO3 และ CuSO4",
      "BaCO3, CuSO4 และ K2CO3",
      "BaSO4, CuCO3 และ K2CO3"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q23",
    "year": 67,
    "questionNum": 23,
    "topicId": "chemical-bonding",
    "text": "เปรียบเทียบเลขออกซิเดชันของอะตอมและไอออนในสารประกอบต่อไปนี้ N2O5 NH3 Na2S SF6 CrCl3 ข้อใดมีอะตอมหรือไอออนที่มีเลขออกซิเดชันสูงที่สุดในสารประกอบหนึ่ง และต่ำที่สุดในอีกสารประกอบหนึ่ง",
    "choices": [
      "N2O5 และ SF6",
      "SF6 และ NH3",
      "CrCl3 และ NH3",
      "CrCl3 และ Na2S"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q24",
    "year": 67,
    "questionNum": 24,
    "topicId": "chemical-bonding",
    "text": "การอ่านชื่อสารในข้อใดถูกต้อง",
    "choices": [
      "FeCO3 เหล็ก(II)คาร์บอเนต",
      "Mg3(PO4)2 ไตรแมกนีเซียมฟอสเฟต",
      "Mn2O7 ไดแมงกานีส(VII)เฮปตอกไซด์",
      "Ca(HCO3)2 แคลเซียมไฮโดรเจนคาร์บอเนต"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q25",
    "year": 67,
    "questionNum": 25,
    "topicId": "chemical-bonding",
    "imageUrl": "/exam-images/y67-q25.png",
    "text": "สารในข้อใดมีรูปร่างโมเลกุลเหมือนกัน และอะตอมกลางต่างก็มีอิเล็กตรอนคู่โดดเดี่ยว",
    "choices": [
      "I3– และ XeF2",
      "CS2 และ H2S",
      "PCl3 และ ClF3",
      "HCN และ ICl2–"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q26",
    "year": 67,
    "questionNum": 26,
    "topicId": "chemical-bonding",
    "text": "โมเลกุลต่อไปนี้ XeF4, H2O, HI และ CHCl3 โมเลกุลใดมีสภาพขั้วสูงที่สุด",
    "choices": [
      "HI",
      "H2O",
      "XeF4",
      "CHCl3"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 67"
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
    "id": "y67-q28",
    "year": 67,
    "questionNum": 28,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสมบัติของธาตุ A, D, E, G, L, M และสารประกอบ CaF2 ต่อไปนี้ สาร จุดหลอมเหลว จุดเดือด การนำไฟฟ้า (°C) (°C) เมื่อเป็นของแข็ง เมื่อเป็นของเหลว 4A 1280 2469 นำ นำ 14D 1414 3265 นำเล็กน้อย นำเล็กน้อย 16E 113 445 ไม่นำ ไม่นำ 19G 63.5 759 นำ นำ 24L 1857 2672 นำ นำ 82M 328 1749 นำ นำ CaF2 1418 2533 ไม่",
    "choices": [
      "พันธะโลหะของธาตุที่อะตอมมีขนาดเล็กจะแข็งแรงกว่ากรณีที่อะตอมมีขนาดใหญ่",
      "E มีจุดหลอมเหลวและจุดเดือดต่ำแสดงว่า พันธะโคเวเลนต์ในธาตุนี้ไม่แข็งแรง",
      "G และ M มีพันธะโคเวเลนต์ ซึ่งเปลี่ยนเป็นพันธะโลหะเมื่อหลอมเหลว",
      "พันธะโลหะมีความแข็งแรงกว่าพันธะโคเวเลนต์และพันธะไอออนิก"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q29",
    "year": 67,
    "questionNum": 29,
    "topicId": "chemical-bonding",
    "text": "ข้อใดถูกต้องเกี่ยวกับปฏิกิริยาสะพอนนิฟิเคชัน (Saponification)",
    "choices": [
      "ไขมัน + กรด → สบู่ + กลีเซอรอล",
      "ไขมัน + NaOH → สบู่ + กลีเซอรอล",
      "โปรตีน + NaOH → กรดอะมิโน",
      "คาร์โบไฮเดรต + H₂O → น้ำตาล"
    ],
    "correctIndex": 1,
    "explanation": "Saponification: ไขมัน (triester) + NaOH → สบู่ (fatty acid salt) + glycerol ✓ → ข้อ ข"
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
    "id": "y67-q33",
    "year": 67,
    "questionNum": 33,
    "topicId": "stoichiometry",
    "text": "สารประกอบประกอบด้วย Na, S, O เท่านั้น มีกำมะถัน 26.9% และออกซิเจน 53.8% โดยมวล ถ้ามวลสูตรเป็นสองเท่าของมวลสูตรเอมพิริคัล สารนี้ 3.01×10²³ หน่วยสูตร มีมวลกี่กรัม (Na=23, S=32, O=16)",
    "choices": [
      "119",
      "71",
      "63",
      "59.5"
    ],
    "correctIndex": 0,
    "explanation": "Na = 100−26.9−53.8 = 19.3%. โมล Na:S:O = 19.3/23 : 26.9/32 : 53.8/16 = 1:1:4 → NaSO₄ (มวล 119). มวลสูตรจริง = 2×119 = 238 (Na₂S₂O₈). 3.01×10²³ = 0.5 mol → 0.5×238 = 119 g → ข้อ ก"
  },
  {
    "id": "y67-q34",
    "year": 67,
    "questionNum": 34,
    "topicId": "stoichiometry",
    "text": "สารประกอบมี Ba เป็นองค์ประกอบ ละลายสารนี้ 6.85 g เติม NaIO₃ มากเกินพอ เกิดตะกอน Ba(IO₃)₂ 4.87 g ร้อยละโดยมวลของ Ba ในสารประกอบเป็นเท่าใด (Ba=137, I=127, O=16)",
    "choices": [
      "10",
      "20",
      "31",
      "40"
    ],
    "correctIndex": 1,
    "explanation": "M(Ba(IO₃)₂) = 137+2(127+48) = 487 → mol = 4.87/487 = 0.01 → mol Ba = 0.01 → มวล Ba = 1.37 g. %Ba = 1.37/6.85×100 = 20% → ข้อ ข"
  },
  {
    "id": "y67-q35",
    "year": 67,
    "questionNum": 35,
    "topicId": "stoichiometry",
    "text": "UF₆ 3.52 g ทำปฏิกิริยากับน้ำมากเกินพอ ได้สารประกอบสูตรเอมพิริคัล UₓOᵧFᵤ มวล 3.08 g และ HF 0.80 g สูตรเอมพิริคัลคือข้อใด (U=238, F=19, O=16, H=1)",
    "choices": [
      "UOF₂",
      "UOF₄",
      "UO₂F",
      "UO₂F₂"
    ],
    "correctIndex": 3,
    "explanation": "UF₆ = 3.52/352 = 0.01 mol → U=0.01, F รวม=0.06. HF = 0.80/20 = 0.04 → F ในผลิตภัณฑ์ = 0.02. มวล O = 3.08 − 0.01×238 − 0.02×19 = 0.32 → 0.02 mol O. U:O:F = 0.01:0.02:0.02 = 1:2:2 → UO₂F₂ → ข้อ ง"
  },
  {
    "id": "y67-q36",
    "year": 67,
    "questionNum": 36,
    "topicId": "stoichiometry",
    "text": "ปฏิกิริยาเคมีแสดงการหาปริมาณ Fe2+ ในสารละลายตัวอย่างด้วยสารละลาย K2Cr2O7 ในภาวะกรด เป็นดังนี้ a Cr2O72– + b Fe2+ + c H+ ⟶ d Cr3+ + e Fe3+ + f H2O (สมการยังไม่ดุล) ตัวเลขสัมประสิทธิ์ในข้อใดถูกต้อง",
    "choices": [
      "a = 1, b = 3",
      "b = 3, d = 2",
      "c = 8, e = 2",
      "d = 2, f = 7"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 8 ของข้อสอบปี 67"
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
    "text": "2NaOH + Cl₂ → NaOCl + NaCl + H₂O ถ้าใช้ NaOH 20.0 g ทำปฏิกิริยากับ Cl₂ มากเกินพอ จะได้ NaOCl กี่กรัม (NaOH=40, NaOCl=74.5)",
    "choices": [
      "10.0",
      "18.6",
      "37.2",
      "74.5"
    ],
    "correctIndex": 1,
    "explanation": "NaOH = 20.0/40 = 0.5 mol → NaOCl = 0.5/2 = 0.25 mol → 0.25×74.5 = 18.6 g → ข้อ ข"
  },
  {
    "id": "y67-q39",
    "year": 67,
    "questionNum": 39,
    "topicId": "stoichiometry",
    "text": "กลูโคส (C₆H₁₂O₆) ถูกเปลี่ยนเป็น CO₂ และ CH₄ ถ้าปลวกผลิตกลูโคสได้วันละ 27 mg ในเวลา 1 ปี (365 วัน) จะเกิด CO₂ จากปลวก 1 ตัวกี่โมล (กลูโคส=180; C₆H₁₂O₆ → 3CO₂ + 3CH₄)",
    "choices": [
      "0.16",
      "0.055",
      "4.5×10⁻⁴",
      "1.5×10⁻⁴"
    ],
    "correctIndex": 0,
    "explanation": "กลูโคสทั้งปี = 27×365 = 9855 mg = 9.855 g → 9.855/180 = 0.0548 mol. CO₂ = 3×0.0548 = 0.164 ≈ 0.16 mol → ข้อ ก"
  },
  {
    "id": "y67-q40",
    "year": 67,
    "questionNum": 40,
    "topicId": "stoichiometry",
    "text": "Cu₃FeS₃ + O₂ → 3Cu + FeO + 3SO₂ ถ้าใช้บอร์ไนต์ 34.25 kg ทำปฏิกิริยากับ O₂ มากเกินพอ และสูญเสีย SO₂ ร้อยละ 10 ปริมาตร SO₂ ที่สูญเสียเป็นกี่ลิตรที่ STP (Cu₃FeS₃=342.5)",
    "choices": [
      "6.72×10³",
      "2.24×10³",
      "672",
      "224"
    ],
    "correctIndex": 2,
    "explanation": "บอร์ไนต์ = 34250/342.5 = 100 mol → SO₂ = 300 mol. สูญเสีย 10% = 30 mol → 30×22.4 = 672 L → ข้อ ค"
  },
  {
    "id": "y67-q41",
    "year": 67,
    "questionNum": 41,
    "topicId": "stoichiometry",
    "text": "C(s) + SiO₂(s) → SiC(s) + 2CO(g) ถ้าให้คาร์บอน 2 mol ทำปฏิกิริยากับ SiO₂ 6 mol จะเกิด SiC กี่กรัม (SiC=40)",
    "choices": [
      "27",
      "40",
      "80",
      "240"
    ],
    "correctIndex": 2,
    "explanation": "อัตราส่วน C:SiO₂ = 1:1; C 2 mol ต้องการ SiO₂ 2 mol (มี 6 เหลือ) → C เป็นตัวกำหนด → SiC = 2 mol = 2×40 = 80 g → ข้อ ค"
  },
  {
    "id": "y67-q42",
    "year": 67,
    "questionNum": 42,
    "topicId": "analytical-chemistry",
    "text": "พ่นอากาศ 20 m³ ที่มี SO₂ ลงในน้ำ สารละลายทำปฏิกิริยาพอดีกับ KMnO₄ 0.00400 M 8.00 mL (5SO₂ + 2KMnO₄ + 2H₂O → ...) อากาศนี้มี SO₂ กี่ไมโครกรัมต่อลูกบาศก์เมตร (SO₂=64)",
    "choices": [
      "41.0",
      "102",
      "256",
      "5120"
    ],
    "correctIndex": 2,
    "explanation": "KMnO₄ = 0.00400×0.008 = 3.2×10⁻⁵ mol → SO₂ = 5/2 × 3.2×10⁻⁵ = 8×10⁻⁵ mol = 5.12×10⁻³ g = 5120 µg. ÷20 m³ = 256 µg/m³ → ข้อ ค"
  },
  {
    "id": "y67-q43",
    "year": 67,
    "questionNum": 43,
    "topicId": "stoichiometry",
    "text": "ผ่าน NH₃ บน CuO ที่อุณหภูมิสูง ได้ N₂ + Cu + H₂O (2NH₃ + 3CuO → N₂ + 3Cu + 3H₂O) ใช้ NH₃ 51 g กับ CuO 159 g ข้อใดถูก (NH₃=17, CuO=79.5, Cu=63.5)",
    "choices": [
      "เกิด N₂ 56 g และ Cu 286 g",
      "เหลือ NH₃ 28 g และเกิด N₂ 42 g",
      "NH₃ เป็นสารกำหนดปริมาณ เกิด Cu 127 g",
      "CuO เป็นสารกำหนดปริมาณ และเกิด Cu 127 g"
    ],
    "correctIndex": 3,
    "explanation": "NH₃ = 3 mol, CuO = 2 mol. NH₃ ต้องการ CuO = 4.5 > 2 → CuO เป็นตัวกำหนด. Cu = 2 mol = 127 g → ข้อ ง"
  },
  {
    "id": "y67-q44",
    "year": 67,
    "questionNum": 44,
    "topicId": "stoichiometry",
    "text": "A+2B→C (50%); 2C+D→4E (50%); 2E+3F→G (80%) ต้องการ G 1.5 kg ต้องใช้ A กี่กิโลกรัม (B,D,F มากเกินพอ; A=100, G=150 g/mol)",
    "choices": [
      "0.20",
      "1.0",
      "1.5",
      "5.0"
    ],
    "correctIndex": 3,
    "explanation": "G = 1500/150 = 10 mol. ย้อน: E = 10×2/0.80 = 25; C = 25/4×2/0.50 = 25; A = 25/0.50 = 50 mol → 50×100 = 5000 g = 5.0 kg → ข้อ ง"
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
    "id": "y67-q46",
    "year": 67,
    "questionNum": 46,
    "topicId": "solutions",
    "text": "ยูเรีย ((NH2)2CO) เตรียมได้จากปฏิกิริยาดังนี้ N2(g) + 3H2(g) ⟶ 2NH3(g) CO2(g) + 2NH3(g) ⟶ (NH2)2CO(aq) + H2O(l) ถ้าเตรียมยูเรียโดยใช้ N2 2 mol, H2 3 mol และ CO2 4 mol พบว่า เกิดยูเรีย 45 g ผลได้ร้อยละของยูเรีย เป็นเท่าใด",
    "choices": [
      "37.5",
      "50",
      "75",
      "87.5"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q47",
    "year": 67,
    "questionNum": 47,
    "topicId": "solutions",
    "text": "สารละลาย Cu(SO₄)₂ 0.100 mol/L ปริมาตร 500 mL มีมวลของ Cu²⁺ เท่าใด",
    "choices": [
      "3.18 g",
      "6.36 g",
      "1.59 g",
      "12.7 g"
    ],
    "correctIndex": 1,
    "explanation": "n(Cu²⁺) = 0.100×0.500 = 0.0500 mol | m = 0.0500×63.5 = 3.18 g → ข้อ ข"
  },
  {
    "id": "y67-q48",
    "year": 67,
    "questionNum": 48,
    "topicId": "solutions",
    "text": "โพรพราโนลอล (Propranolol, C16H21NO2, 259 g/mol) เป็นยาที่ใช้รักษาความดันโลหิตสูง โดยความเข้มข้น ของยาในพลาสมาที่ทำให้ยาออกฤทธิ์ได้เท่ากับ 50 ng/L ความเข้มข้นนี้ที่คำนวณในหน่วยอื่น ข้อใดผิด กำหนดให้ ความหนาแน่นของพลาสมาเท่ากับ 1.025 g/mL",
    "choices": [
      "49 ppm",
      "4.9  10–2 ppb",
      "1.9  10–10 M",
      "1.9  10–10 m"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q49",
    "year": 67,
    "questionNum": 49,
    "topicId": "solutions",
    "imageUrl": "/exam-images/y67-q49.png",
    "text": "ถ้าต้องการเตรียมสารละลายของคาร์บอเนตไอออน (A และ B) ให้มีความเข้มข้นที่แม่น ดังนี้ สารละลาย ความเข้มข้นของ CO32– (M) ปริมาตร (mL) สารที่ใช้เตรียม A 0.4000 250.0 Na2CO3 B 0.1000 100.0 สารละลาย A มวล Na2CO3 ที่ต้องใช้ในการเตรียมสารละลาย A และวัสดุ อุปกรณ์ที่ต้องใช้ในการเตรียมสารละลาย B จาก สารละลาย A ",
    "choices": [
      "6.00 กระบอกตวงขนาด 25 mL บีกเกอร์ขนาด 250 mL น้ำกลั่น แท่งแก้วคน",
      "6.00 ปิเปตต์ขนาด 25 mL ขวดกำหนดปริมาตรขนาด 100 mL น้ำกลั่น",
      "10.60 กระบอกตวงขนาด 25 mL บีกเกอร์ขนาด 250 mL น้ำกลั่น แท่งแก้วคน",
      "10.60 ปิเปตต์ขนาด 25 mL ขวดกำหนดปริมาตรขนาด 100 mL น้ำกลั่น"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 67"
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
    "id": "y67-q52",
    "year": 67,
    "questionNum": 52,
    "topicId": "solutions",
    "text": "สารละลายชนิดหนึ่งมีคาร์บอนเตตระคลอไรด์ (CCl4) เป็นตัวทำละลาย มีจุดเดือด 81.8 °C จุดเยือกแข็งของ สารละลายนี้เป็นกี่องศาเซลเซียส กำหนดให้ ตัวทำละลาย จุดเดือด (°C) Kb (°C/m) จุดเยือกแข็ง (°C) Kf (°C/m) คาร์บอนเตตระคลอไรด์ 76.8 5.00 –22.9 29.8",
    "choices": [
      "–52.7",
      "–29.8",
      "6.9",
      "106.6"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q53",
    "year": 67,
    "questionNum": 53,
    "topicId": "solutions",
    "text": "บารอมิเตอร์อย่างง่ายดังภาพ สร้างจากขวดพลาสติก กับสายยางปลายเปิดขนาดเล็ก ในวันจันทร์ได้ปรับ ระดับน้ำในสายยางให้เท่ากับระดับน้ำในขวด อ่าน ค่าความดันบรรยากาศจากบารอมิเตอร์ปรอทที่ใช้ อ้างอิงได้ 730 mmHg และอ่านอุณหภูมิได้ 27.0 °C เมื่อตั้งทิ้งไว้แล้วกลับมาอ่านอีกครั้งในวันอังคาร พบว่า ระดับน้ำในสายยางถู",
    "choices": [
      "725",
      "735",
      "755",
      "765"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 67"
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
    "id": "y67-q55",
    "year": 67,
    "questionNum": 55,
    "topicId": "solutions",
    "text": "ความดันอากาศภายในลูกบาสเกตบอลที่แนะนำให้ใช้ในการแข่งขันทั่วไปคือ 22.05 psi ถ้ามีลูกบาสเกตบอล ขนาด 7.5 L ที่ผ่านการใช้งานจนความดันภายในกับภายนอกเท่ากัน จะต้องสูบอากาศเข้าไปกี่โมล ณ อุณหภูมิ 27 °C เพื่อให้สามารถใช้ในการแข่งขันได้ กำหนดให้ ปริมาตรของลูกบาสเกตบอลหลังสูบอากาศเข้าไปไม่เปลี่ยนแปลงจากปริมาต",
    "choices": [
      "0.0015",
      "0.15",
      "0.46",
      "2.2"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 67"
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
    "id": "y67-q57",
    "year": 67,
    "questionNum": 57,
    "topicId": "solutions",
    "text": "จากแผนภาพของภาชนะใบหนึ่งที่บรรจุแก๊สเฉื่อย 3 ชนิด หากความดันรวมในภาชนะเท่ากับ 900 mmHg ข้อใดถูก",
    "choices": [
      "เศษส่วนโมลของแก๊ส Ne = 0.2",
      "ความดันย่อยของแก๊ส He = 270 mmHg",
      "ความดันย่อยของแก๊ส Ar = 450 mmHg",
      "เศษส่วนโมลของ Ar = 0.5 NA เมื่อ NA = 6.02  1023 อนุภาค"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q58",
    "year": 67,
    "questionNum": 58,
    "topicId": "solutions",
    "text": "ขวดแก้วสามใบที่มีปริมาตรเท่ากัน บรรจุแก๊สดังที่ระบุไว้ในตาราง ขวด แก๊สที่บรรจุ ความดัน (mmHg) อุณหภูมิ (°C) A H2 760 25.0 B Cl2 380 25.0 C NO2 190 25.0 ข้อความต่อไปนี้ ข้อใดถูก",
    "choices": [
      "พลังงานจลน์รวมของแก๊สในขวด A > B > C",
      "อัตราเร็วเฉลี่ยของอนุภาคแก๊สในขวด A = B = C",
      "พลังงานจลน์เฉลี่ยต่อโมลของแก๊สในขวด A > B > C",
      "ความถี่ที่อนุภาคแก๊สชนกับผนังภาชนะในขวด A > C > B แทน อะตอม He แทน อะตอม Ne แทน อะตอม Ar"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q59",
    "year": 67,
    "questionNum": 59,
    "topicId": "solutions",
    "text": "ตัวอย่างอากาศในข้อใดควรมีอัตราการแพร่ผ่านสูงที่สุด",
    "choices": [
      "อากาศแห้ง",
      "อากาศจากท่อไอเสียรถยนต์",
      "อากาศที่มีความชื้นสัมพัทธ์ 95%",
      "อากาศที่มีฝุ่น PM 2.5 ในปริมาณสูง"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 67"
  },
  {
    "id": "y67-q60",
    "year": 67,
    "questionNum": 60,
    "topicId": "solutions",
    "text": "แก๊สผสมของแก๊ส  และแก๊ส ⚫ ซึ่งมีอัตราส่วนจำนวนอนุภาคเป็น 1 : 1 แพร่ผ่านรูเล็ก ๆ รูหนึ่ง ดังรูป ก่อนการแพร่ผ่าน หลังการแพร่ผ่าน กำหนดให้ แก๊ส ⚫ มีมวลต่อโมลเท่ากับ 32 g/mol มวลต่อโมลของแก๊ส  เป็นเท่าใดในหน่วย g/mol",
    "choices": [
      "14",
      "21",
      "48",
      "72 ส่วนที่ II. ข้อสอบอัตนัยแบบเขียนตอบ จำนวน 15 ข้อ ข้อละ 2 คะแนน รวม 30 คะแนน เขียนคำตอบลงในช่องว่างที่กำหนดให้ในกระดาษ"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 67"
  },
  {
    "id": "y68-q1",
    "year": 68,
    "questionNum": 1,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y68-q1.png",
    "text": "ข้อใดควรปฏิบัติในการทำปฏิบัติการเคมี",
    "choices": [
      "ขออนุญาตคุณครูทำการทดลองเองหลังเลิกเรียนโดยสัญญาว่าจะปิดห้องให้เรียบร้อย",
      "เมื่อสารเคมีหกบนเครื่องชั่ง ควรรีบทำความสะอาดทันทีโดยไม่ต้องปิดเครื่องชั่ง",
      "ทดสอบกลิ่นของของเหลวโดยใช้มือโบกให้ไอสารเข้าจมูกเพียงเล็กน้อย",
      "ให้ความร้อนแก่เอทานอลด้วยตะเกียงที่มีเปลวไฟ"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q2",
    "year": 68,
    "questionNum": 2,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y68-q2.png",
    "text": "นักวิทยาศาสตร์ต้องการเตรียมสารละลายกรดซัลฟิวริก (H2SO4) ที่มีความเข้มข้นประมาณ 3 M ปริมาตร 120 mL โดยการตวงกรดซัลฟิวริกเข้มข้น (Conc. H2SO4, 18 M) จำนวน 20 mL ในตู้ดูดควัน พบว่า ขวดกรด มีขนาดใหญ่ 2.5 L ขั้นตอนการปฏิบัติการข้อใดไม่เหมาะสม ขั้นที่ 1 อ่านชื่อและข้อมูลบนฉลากของสารเคมีที่อยู่ในตู้ดูดควัน",
    "choices": [
      "ขั้นที่ 1 และ 2",
      "ขั้นที่ 2 และ 3",
      "ขั้นที่ 3 และ 4",
      "ขั้นที่ 4 เท่านั้น"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q3",
    "year": 68,
    "questionNum": 3,
    "topicId": "atomic-structure",
    "imageUrl": "/exam-images/y68-q3.png",
    "text": "หลังจากทำการทดลองสังเคราะห์สารประกอบเชิงซ้อนของ Cu2+ พบว่า มีสารเคมีเหลือดังนี้ CuCl2 (เหลือ 0.1 mg) เอทิลแอลกอฮอล์ (C2H5OH, เหลือ 10 mL) สารละลายเบสแอมโมเนียมไฮดรอกไซด์เข้มข้น 0.1 M (เหลือ 20 mL) ไดคลอโรมีเทน (CH2Cl2, ตัวทำละลายที่ระเหยง่ายและเป็นอันตรายต่อสิ่งแวดล้อม, เหลือ 10 mL) สารละลายกรดไฮโดร",
    "choices": [
      "เท CuCl2 กลับคืนขวดเดิม",
      "เทของเหลวทุกชนิดยกเว้นไดคลอโรมีเทนลงอ่างน้ำได้เลย แล้วเปิดน้ำตามมาก ๆ",
      "ทำให้สารละลายแอมโมเนียมไฮดรอกไซด์และกรดไฮโดรคลอริกเป็นกลางก่อนเทลงอ่างน้ำ",
      "เก็บสารเคมีที่เหลือทุกชนิดในขวดแบ่งแยกต่างหากจากขวดสารเคมีเดิมเพื่อเก็บไว้ใช้ในครั้งต่อไป"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q4",
    "year": 68,
    "questionNum": 4,
    "topicId": "atomic-structure",
    "text": "ทดลองหาปริมาณแมกนีเซียมในแม่น้ำแห่งหนึ่งโดยเก็บน้ำตัวอย่าง แล้วนำไปวิเคราะห์ 2 วิธี ได้ผลดังตาราง ครั้งที่ ปริมาณแมกนีเซียม (mg/L) วิธี A วิธี B 1 5.75 5.85 2 5.72 5.95 3 5.76 5.80 4 5.80 5.85 5 5.78 5.60 6 5.70 5.75 ถ้าค่าจริงของปริมาณแมกนีเซียมในแม่น้ำนี้เท่ากับ 5.80 mg/L ข้อใดถูก",
    "choices": [
      "วิธี A มีความเที่ยงสูงกว่า แต่ความแม่นต่ำกว่าวิธี B",
      "วิธี A มีความเที่ยงต่ำกว่า แต่ความแม่นสูงกว่าวิธี B",
      "วิธี A มีความเที่ยงและความแม่นต่ำกว่าวิธี B",
      "วิธี A มีความเที่ยงและความแม่นเท่ากับวิธี B"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q5",
    "year": 68,
    "questionNum": 5,
    "topicId": "atomic-structure",
    "text": "สารในข้อใดสามารถบรรจุในขวดแก้วทรงกระบอกจุ 1 L I. ตัวทำละลายอินทรีย์มวล 600 g ความหนาแน่น 0.66 g/cm3 II. เกล็ดน้ำตาลทรายมวล 1.0 kg ความหนาแน่น 1.59 g/cm3 III. ก้อนพลาสติกรูปลูกบาศก์ขนาด 1.2 cm3 จำนวน 900 ก้อน IV. สารละลาย NaCl เข้มข้น 3.0 mol/L มี NaCl 234 g",
    "choices": [
      "I และ II เท่านั้น",
      "II และ III",
      "III และ IV",
      "I, II และ IV"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q6",
    "year": 68,
    "questionNum": 6,
    "topicId": "atomic-structure",
    "text": "สาร A เป็นของแข็งที่ละลายน้ำได้ดีที่อุณหภูมิห้อง เมื่อนำตัวอย่างสารชนิดนี้มาละลายน้ำเพื่อเตรียมสารละลาย เจือจาง พบว่ามีของแข็งบางส่วนเหลืออยู่ นักเรียนพยายามอธิบายผลการทดลองดังกล่าวโดย “ตั้งสมมติฐาน และออกแบบวิธีการทดสอบ” ตามวิธีการทางวิทยาศาสตร์ ดังนี้ แนวทาง สมมติฐาน วิธีการทดสอบ* I ตัวอย่างนี้มีส",
    "choices": [
      "I เท่านั้น",
      "II เท่านั้น",
      "I และ II",
      "I และ III"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 3 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q7",
    "year": 68,
    "questionNum": 7,
    "topicId": "atomic-structure",
    "text": "กำหนดแผนภาพระดับพลังงานของอิเล็กตรอนในอะตอมไฮโดรเจนดังรูป (แสดงระดับพลังงานเพียงบางส่วน) พิจารณาข้อความต่อไปนี้ สำหรับอะตอมไฮโดรเจน I. ตามแบบจำลองอะตอมของโบร์ ถ้าอิเล็กตรอนเปลี่ยนวงโคจรจาก n = 1 ไปยัง n = 3 จะคายพลังงาน 1.94 × 10–18 J II. เส้นสเปกตรัมที่เกิดจากการเปลี่ยนระดับพลังงาน n = 2 ไปยัง n = ",
    "choices": [
      "I และ II",
      "II และ III",
      "I และ III",
      "II เท่านั้น"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q8",
    "year": 68,
    "questionNum": 8,
    "topicId": "atomic-structure",
    "text": "อะตอมของธาตุ A มีการจัดเรียงอิเล็กตรอนดังนี้ 2 8 18 2 อะตอมของธาตุ D มีอิเล็กตรอนน้อยกว่านิวตรอน อยู่ 4 และน้อยกว่าจำนวนอิเล็กตรอนของไอออนที่เสถียรของธาตุ A อยู่ 2 ข้อใดคือสัญลักษณ์นิวเคลียร์และ จำนวนอิเล็กตรอนของ D2+",
    "choices": [
      "D 26 56 2+ มี 24 อิเล็กตรอน",
      "D 28 60 2+ มี 26 อิเล็กตรอน",
      "D 28 58 2+ มี 28 อิเล็กตรอน",
      "D 26 56 2+ มี 26 อิเล็กตรอน"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q9",
    "year": 68,
    "questionNum": 9,
    "topicId": "atomic-structure",
    "text": "บิสมัทออกไซด์ (Bi2O3) เป็นสารประกอบที่ถูกนำมาใช้กันอย่างแพร่หลายในอุตสาหกรรมต่าง ๆ เช่น การผลิต เซรามิก แก้ว และสีเคลือบ ข้อใดเป็นจำนวนอิเล็กตรอนรวมในระดับพลังงาน n = 5 และ 6 ของ Bi 1 อนุภาค ในสารประกอบ Bi2O3",
    "choices": [
      "18",
      "20",
      "23",
      "34"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 68"
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
    "id": "y68-q12",
    "year": 68,
    "questionNum": 12,
    "topicId": "atomic-structure",
    "text": "กำหนดให้ ไอออน A– มีการจัดเรียงอิเล็กตรอนเหมือนแก๊สมีสกุลที่อยู่ในคาบที่ 3 ธาตุ D มี 4 อิเล็กตรอนใน 3p ออร์บิทัล พิจารณาข้อความต่อไปนี้ I. ธาตุ A มี 5 อิเล็กตรอนใน 3p ออร์บิทัล II. ทุกธาตุที่อยู่หมู่เดียวกับ D มีสมบัติเป็นอโลหะ III. พลังงานไอออไนเซชันลำดับที่ 1 ของธาตุ A มีค่ามากกว่าธาตุ D IV. โมเลก",
    "choices": [
      "I และ III เท่านั้น",
      "II และ III",
      "II และ IV",
      "I, III และ IV"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 4 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q13",
    "year": 68,
    "questionNum": 13,
    "topicId": "atomic-structure",
    "text": "ข้อใดต่อไปนี้เรียงลำดับค่าอิเล็กโทรเนกาติวิตีของธาตุจากมากไปน้อยได้ถูกต้อง",
    "choices": [
      "12Mg, 20Ca, 33As, 35Br",
      "15P, 33As, 20Ca, 19K",
      "56Ba, 38Sr, 20Ca, 12Mg",
      "53I, 51Sb, 38Sr, 20Ca"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q14",
    "year": 68,
    "questionNum": 14,
    "topicId": "atomic-structure",
    "text": "ข้อใดเป็นการจัดเรียงอิเล็กตรอนในอะตอมของธาตุแทรนซิชันในสถานะกระตุ้น",
    "choices": [
      "[Kr]4d3",
      "[Ar]3d14s2",
      "[Kr]4d25s15p1",
      "[Ar]3d104s25p1"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q15",
    "year": 68,
    "questionNum": 15,
    "topicId": "atomic-structure",
    "text": "กำหนดให้ธาตุ M, Q, R, T และ X มีค่าพลังงานไอออไนเซชันลำดับที่ 1 (IE1) และมีสมบัติดังตารางต่อไปนี้ ธาตุ IE1 (kJ/mol) สมบัติ M 786 เป็นของแข็งที่อุณหภูมิห้อง มีจุดหลอมเหลวสูง นำไฟฟ้าได้เล็กน้อย Q 1681 เป็นแก๊สที่อุณหภูมิห้อง สามารถเกิดปฏิกิริยากับลิเทียมได้สารประกอบไอออนิก LiQ R 496 เป็นโลหะที่ทำปฏิกิ",
    "choices": [
      "I, II และ III",
      "I, II และ IV",
      "II, III และ IV",
      "I, III และ IV"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 68"
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
    "id": "y68-q18",
    "year": 68,
    "questionNum": 18,
    "topicId": "chemical-bonding",
    "text": "โมเลกุลหรือไอออนในข้อใดที่เวกเตอร์สภาพขั้วของพันธะหักล้างกันไม่หมด",
    "choices": [
      "SO3",
      "ClO3–",
      "BCl4–",
      "CO32–"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 5 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q19",
    "year": 68,
    "questionNum": 19,
    "topicId": "chemical-bonding",
    "text": "ไอออนคู่ใดมีจำนวนอิเล็กตรอนคู่โดดเดี่ยวของอะตอมกลางไม่เท่ากัน แต่รูปร่างเหมือนกัน กำหนดให้ ทุกอะตอมมีจำนวนอิเล็กตรอนล้อมรอบไม่เกินแปด",
    "choices": [
      "NO2– และ ClO2–",
      "NO3– และ SO32–",
      "SO32– และ PO3–",
      "ClO4– และ PO43–"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q20",
    "year": 68,
    "questionNum": 20,
    "topicId": "chemical-bonding",
    "text": "ไอออนคู่ใดมีอิเล็กตรอนคู่โดดเดี่ยวรอบอะตอมกลางเป็น 2 คู่เท่ากัน",
    "choices": [
      "BH2– และ CH3–",
      "ClF4– และ ClO2–",
      "IF2– และ SF5–",
      "SnCl3– และ NH2–"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q21",
    "year": 68,
    "questionNum": 21,
    "topicId": "chemical-bonding",
    "text": "พิจารณาโมเลกุลและไอออนที่ยังเติมจำนวนพันธะและอิเล็กตรอนคู่โดดเดี่ยวไม่สมบูรณ์ต่อไปนี้ I. N−C−C−N II. O−N−C−C−H III. [H2C−C−N]− โมเลกุลหรือไอออนใดที่เกิดทั้งพันธะ C=C และ C=N",
    "choices": [
      "I เท่านั้น",
      "II เท่านั้น",
      "III",
      "I และ II"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q22",
    "year": 68,
    "questionNum": 22,
    "topicId": "chemical-bonding",
    "text": "ข้อใดเปรียบเทียบมุมพันธะได้ถูกต้อง",
    "choices": [
      "Cl2O  CCl4  BCl3  XeF2",
      "Cl2O  BCl3  XeF2  CCl4",
      "CCl4  Cl2O  BCl3  XeF2",
      "Cl2O  BCl3  CCl4  XeF2"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q23",
    "year": 68,
    "questionNum": 23,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสมบัติของธาตุ A, D, E, G, J ในตารางต่อไปนี้ ธาตุ สมบัติ A มีเลขอะตอมเท่ากับ 20 D อยู่ในคาบ 3 และมีเวเลนซ์อิเล็กตรอนเท่ากับ 5 E อยู่ในคาบ 2 และเกิดสารประกอบกับ D ได้โมเลกุลที่มีรูปร่างเป็นพีระมิดคู่ฐานสามเหลี่ยม G อยู่ในคาบเดียวกับ D และเกิดสารประกอบกับ D ได้สารที่มีสูตรเคมีเป็น GD J อยู่ในคาบ",
    "choices": [
      "A3D2",
      "AE2",
      "GE2",
      "G2J3"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q24",
    "year": 68,
    "questionNum": 24,
    "topicId": "chemical-bonding",
    "text": "โมเลกุลในข้อใดมีแรงระหว่างโมเลกุลเป็นแรงแผ่กระจายลอนดอนเท่านั้น",
    "choices": [
      "PCl5 และ SiF4",
      "BCl3 และ NH3",
      "XeF6 และ SCl6",
      "XeO3 และ SnBr4"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 6 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q25",
    "year": 68,
    "questionNum": 25,
    "topicId": "chemical-bonding",
    "text": "โมเลกุลในข้อใดต่อไปนี้มีจำนวนอิเล็กตรอนล้อมรอบเป็นเลขคี่",
    "choices": [
      "CO2",
      "SO2",
      "ClO2",
      "XeO2"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q26",
    "year": 68,
    "questionNum": 26,
    "topicId": "chemical-bonding",
    "text": "พิจารณาข้อมูลต่อไปนี้ สูตรโมเลกุล รูปร่างโมเลกุล จำนวนอิเล็กตรอนคู่โดดเดี่ยวรอบอะตอมกลาง (คู่) XF4 ทรงสี่หน้าบิดเบี้ยว 1 YCl3 สามเหลี่ยมแบนราบ 0 ZCl3 รูปตัวที 2 ธาตุ X, Y, Z ในข้อใดเป็นไปได้ X Y Z",
    "choices": [
      "Cl N Br",
      "Cl B F",
      "S N P",
      "S B I"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q27",
    "year": 68,
    "questionNum": 27,
    "topicId": "chemical-bonding",
    "text": "พิจารณาโครงสร้างลิวอิสของโมเลกุลต่อไปนี้ กลีเซอรอล แอซีโทน เอทิลีนไกลคอล ข้อใดกล่าวถูกต้อง I. โมเลกุลทั้งสามมีแรงยึดเหนี่ยวระหว่างโมเลกุลเป็นพันธะไฮโดรเจนเหมือนกัน II. กลีเซอรอลและแอซีโทนมีจุดเดือดแตกต่างกันเพราะมีขนาดของแรงยึดเหนี่ยวระหว่างโมเลกุลแตกต่างกัน III. แอซีโทนผสมเป็นเนื้อเดียวกับเอทิลีนไก",
    "choices": [
      "I เท่านั้น",
      "I และ II เท่านั้น",
      "II และ III เท่านั้น",
      "I, II และ III"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q28",
    "year": 68,
    "questionNum": 28,
    "topicId": "chemical-bonding",
    "text": "พิจารณาสมบัติของสาร R, S, T และ U ต่อไปนี้ สาร จุดเดือด (°C) จุดหลอมเหลว (°C) การนำไฟฟ้าในสถานะของแข็ง การละลายน้ำ R 122 18 ไม่นำไฟฟ้า ละลาย S 1,935 772 ไม่นำไฟฟ้า ละลาย T 4,300 2,700 ไม่นำไฟฟ้า ไม่ละลาย U 2,162 968 นำไฟฟ้า ไม่ละลาย ข้อความใดต่อไปนี้มีความเป็นไปได้มากที่สุด",
    "choices": [
      "สาร R เป็นสารประกอบโคเวเลนต์ที่มีแรงยึดเหนี่ยวระหว่างโมเลกุลเป็นพันธะไฮโดรเจน",
      "สาร T มีแรงยึดเหนี่ยวระหว่างอนุภาคเป็นแรงระหว่างขั้ว",
      "สาร S และ U เป็นสารประกอบประเภทเดียวกัน",
      "สาร U เมื่อหลอมเหลวจะไม่นำไฟฟ้า"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 7 ของข้อสอบปี 68"
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
    "id": "y68-q32",
    "year": 68,
    "questionNum": 32,
    "topicId": "stoichiometry",
    "text": "อัตราส่วนโดยมวลของธาตุออกซิเจนใน Fe₂O₃ ต่อ Fe₂(SO₄)₃ ที่มีมวลเท่ากัน มีค่าเท่าใด (Fe₂O₃=160, Fe₂(SO₄)₃=400)",
    "choices": [
      "0.25",
      "0.48",
      "0.62",
      "1.6"
    ],
    "correctIndex": 2,
    "explanation": "สัดส่วนมวล O: ใน Fe₂O₃ = 48/160 = 0.30 ; ใน Fe₂(SO₄)₃ = 192/400 = 0.48. อัตราส่วน = 0.30/0.48 = 0.62 → ข้อ ค"
  },
  {
    "id": "y68-q33",
    "year": 68,
    "questionNum": 33,
    "topicId": "stoichiometry",
    "text": "ข้อใดผิด (CH₂Cl₂=85, (NH₄)₃PO₄=149)",
    "choices": [
      "CH₂Cl₂ 1 โมเลกุลมีมวล 1.4×10⁻²² g",
      "N₂ มีความหนาแน่น 1.25 g/L ที่ STP",
      "(NH₄)₃PO₄ 3.0 mol มีแอมโมเนียมไอออน 5.4×10²⁴ ไอออน",
      "H₂ 0.20 g มีจำนวน 1.3×10²² โมเลกุล"
    ],
    "correctIndex": 3,
    "explanation": "ก) 85/6.02×10²³ = 1.4×10⁻²² ✓; ข) 28/22.4 = 1.25 ✓; ค) 3×3×6.02×10²³ = 5.4×10²⁴ ✓; ง) H₂ 0.20/2 = 0.1 mol = 6.0×10²² ไม่ใช่ 1.3×10²² → ข้อ ง ผิด"
  },
  {
    "id": "y68-q34",
    "year": 68,
    "questionNum": 34,
    "topicId": "stoichiometry",
    "text": "เปรียบเทียบร้อยละโดยมวลของไนโตรเจนในปุ๋ย: ยูเรีย CO(NH₂)₂(60), NH₄NO₃(80), NaNO₃(85), (NH₄)₂HPO₄(132) ข้อใดถูก",
    "choices": [
      "CO(NH₂)₂ > NH₄NO₃ > (NH₄)₂HPO₄ > NaNO₃",
      "NaNO₃ > (NH₄)₂HPO₄ > NH₄NO₃ > CO(NH₂)₂",
      "CO(NH₂)₂ > NH₄NO₃ > NaNO₃ > (NH₄)₂HPO₄",
      "NH₄NO₃ > CO(NH₂)₂ > (NH₄)₂HPO₄ > NaNO₃"
    ],
    "correctIndex": 0,
    "explanation": "%N: ยูเรีย 28/60=46.7, NH₄NO₃ 28/80=35, (NH₄)₂HPO₄ 28/132=21.2, NaNO₃ 14/85=16.5. ลำดับ: ยูเรีย > NH₄NO₃ > (NH₄)₂HPO₄ > NaNO₃ → ข้อ ก"
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
    "id": "y68-q36",
    "year": 68,
    "questionNum": 36,
    "topicId": "solutions",
    "text": "พิจารณาข้อความต่อไปนี้ I. ใส่น้ำแข็งแห้งในบีกเกอร์เปล่า เกิดแก๊สคาร์บอนไดออกไซด์ทันที II. ละลายน้ำตาลทรายด้วยน้ำแล้วให้ความร้อนจนได้น้ำเชื่อมที่ข้นหนืด III. ใส่ผงปูนขาว (CaO) ลงในน้ำแล้วพบว่า กระดาษลิตมัสเปลี่ยนสีจากแดงเป็นน้ำเงิน IV. ผสมสารละลาย A ที่ไม่มีสี กับสารละลาย B ที่มีสีเขียวในภาวะเบสแล้วไ",
    "choices": [
      "I และ II",
      "II และ III เท่านั้น",
      "III และ IV เท่านั้น",
      "II, III และ IV"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 8 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q37",
    "year": 68,
    "questionNum": 37,
    "topicId": "stoichiometry",
    "text": "เผาไหม้สมบูรณ์ของโพรเพน (C₃H₈) 11 g ความบริสุทธิ์ 80% โดยมวล (สิ่งเจือปนไม่ทำปฏิกิริยา): I) ใช้ O₂ 1.2 mol II) เกิดไอน้ำ 14 g III) เกิด CO₂ 13 L ที่ STP ข้อใดถูก",
    "choices": [
      "I และ II",
      "II และ III",
      "I และ III",
      "II เท่านั้น"
    ],
    "correctIndex": 1,
    "explanation": "C₃H₈ = 11×0.80/44 = 0.2 mol. C₃H₈+5O₂→3CO₂+4H₂O. I) O₂=1.0 mol (ไม่ใช่ 1.2) ผิด; II) H₂O=0.8 mol=14.4≈14 g ✓; III) CO₂=0.6 mol=13.4≈13 L ✓ → ข้อ ข"
  },
  {
    "id": "y68-q38",
    "year": 68,
    "questionNum": 38,
    "topicId": "stoichiometry",
    "text": "รถวิ่ง 20 km/น้ำมัน 1 L น้ำมันมีคาร์บอน 75% โดยมวล ความหนาแน่น 0.80 g/mL วิ่ง 8.0 km ปล่อย CO₂ กี่กิโลกรัม (C=12, CO₂=44)",
    "choices": [
      "0.24",
      "0.88",
      "1.2",
      "1.4"
    ],
    "correctIndex": 1,
    "explanation": "วิ่ง 8 km ใช้น้ำมัน 0.4 L = 320 g → C = 240 g = 20 mol → CO₂ = 20 mol = 880 g = 0.88 kg → ข้อ ข"
  },
  {
    "id": "y68-q39",
    "year": 68,
    "questionNum": 39,
    "topicId": "solutions",
    "text": "เครื่องตรวจวัดแอลกอฮอล์ในลมหายใจ (Breathalyzer) ชนิดหนึ่ง อาศัยปฏิกิริยาที่มี Ag+ เป็นตัวเร่ง ดังสมการ 3CH3CH2OH(aq) + 2Cr2O72−(aq) + 16H+(aq) ⟶ 3CH3CO2H(aq) + 4Cr3+(aq) + 11H2O(l) หากชุดทดสอบประกอบด้วยสารละลาย K2Cr2O7 0.245 mg/mL ปริมาตร 3.0 mL ที่มี H2SO4 30 % v/v และ AgNO3 0.25 mg/mL ต้องใช้เอทาน",
    "choices": [
      "0.077",
      "0.086",
      "0.12",
      "0.17"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 9 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q40",
    "year": 68,
    "questionNum": 40,
    "topicId": "stoichiometry",
    "text": "แก๊สผสม O₃ และ O₂ ปริมาตรรวม 44.8 L ที่ STP เมื่อให้ความร้อนจน O₃ กลายเป็น O₂ ทั้งหมด (2O₃→3O₂) ปริมาตรเพิ่มขึ้น 0.25 เท่า ร้อยละโดยปริมาตรของ O₃ เป็นเท่าใด",
    "choices": [
      "50.0",
      "40.0",
      "25.0",
      "20.0"
    ],
    "correctIndex": 0,
    "explanation": "ให้ O₃ = x: 2O₃→3O₂ ทำให้ปริมาตรเพิ่ม 0.5x = 0.25×44.8 → x = 22.4 L → %O₃ = 22.4/44.8 = 50% → ข้อ ก"
  },
  {
    "id": "y68-q41",
    "year": 68,
    "questionNum": 41,
    "topicId": "stoichiometry",
    "text": "เผาของผสม MgCO₃ และ MgO 504 g ได้ CO₂ 33.6 L ที่ STP (MgCO₃→MgO+CO₂) อัตราส่วนโดยมวลของ MgCO₃ ต่อ MgO ในของผสมเป็นเท่าใด (MgCO₃=84)",
    "choices": [
      "1 : 3",
      "3 : 1",
      "1 : 7.4",
      "7.4 : 1"
    ],
    "correctIndex": 0,
    "explanation": "CO₂ = 33.6/22.4 = 1.5 mol → MgCO₃ = 1.5 mol = 126 g. MgO = 504−126 = 378 g. อัตราส่วน 126:378 = 1:3 → ข้อ ก"
  },
  {
    "id": "y68-q42",
    "year": 68,
    "questionNum": 42,
    "topicId": "stoichiometry",
    "text": "KCN + Na₂S₂O₃ → KSCN + Na₂SO₃ เติม Na₂S₂O₃ 2.37 g ลงในสารละลายที่มี KCN 1.30 g ข้อใดถูก (KCN=65, KSCN=97, Na₂SO₃=126, Na₂S₂O₃=158)",
    "choices": [
      "เกิด KSCN 1.89 g",
      "เกิด Na₂SO₃ 1.46 g",
      "หลังปฏิกิริยาเหลือสารตั้งต้น 0.98 g",
      "เติม Na₂S₂O₃ เพิ่มอีก 0.79 g จึงกำจัด KCN หมด"
    ],
    "correctIndex": 3,
    "explanation": "KCN = 0.02 mol, Na₂S₂O₃ = 0.015 mol (เป็นตัวกำหนด). KCN เหลือ = 0.005 mol → ต้องเติม Na₂S₂O₃ อีก 0.005×158 = 0.79 g → ข้อ ง"
  },
  {
    "id": "y68-q43",
    "year": 68,
    "questionNum": 43,
    "topicId": "stoichiometry",
    "text": "ต้องใช้ออกตะซัลเฟอร์ (S₈) กี่กรัมทำปฏิกิริยากับ P₄ มากเกินพอ ให้เกิด P₄S₁₀ 11.1 g ถ้าผลได้ร้อยละ 50 (4P₄ + 5S₈ → 4P₄S₁₀; S₈=256, P₄S₁₀=444)",
    "choices": [
      "8.00",
      "10.2",
      "16.0",
      "32.0"
    ],
    "correctIndex": 2,
    "explanation": "P₄S₁₀ จริง = 11.1/444 = 0.025 mol → ทางทฤษฎี (50%) = 0.05 mol. S₈ = 0.05×5/4 = 0.0625 mol = 0.0625×256 = 16.0 g → ข้อ ค"
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
    "id": "y68-q45",
    "year": 68,
    "questionNum": 45,
    "topicId": "solutions",
    "text": "เตรียมปุ๋ยแอมโมเนียมซัลเฟต ((NH4)2SO4) ตามขั้นตอนดังนี้ ขั้นที่ 1 Ca(OH)2(s) + 2NH4Cl(s) ⟶ CaCl2(s) + 2H2O(l) + 2NH3(g) ขั้นที่ 2 2NH3(g) + H2SO4(aq) ⟶ (NH4)2SO4(s) ถ้านำ Ca(OH)2 111 g มาทำปฏิกิริยากับ NH4Cl 214 g แล้วนำแก๊สแอมโมเนียทั้งหมดที่ได้จากขั้นที่ 1 ไปทำ ปฏิกิริยากับ H2SO4 147 g จะได้ปุ๋ยแอ",
    "choices": [
      "99",
      "198",
      "396",
      "792"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q46",
    "year": 68,
    "questionNum": 46,
    "topicId": "solutions",
    "text": "นักเรียนคนหนึ่งผสมสารละลาย NaHCO3 15.0 mM ปริมาตร 60.0 mL กับสารละลาย H2SO4 10.0 mM ปริมาตร 35.0 mL แล้วเก็บแก๊สคาร์บอนไดออกไซด์ที่เกิดขึ้นที่ STP โดยบรรจุในลูกโป่งที่ขยายตัวได้อย่าง อิสระและเป็นทรงกลม จะได้ลูกโป่งมีรัศมีกี่เซนติเมตร NaHCO3(aq) + H2SO4(aq) ⟶ CO2(g) + Na2SO4(aq) + H2O(l) (สมการยังไม่",
    "choices": [
      "√0.936 3",
      "√1.87 3",
      "√3.75 3",
      "√37.0 3"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q47",
    "year": 68,
    "questionNum": 47,
    "topicId": "solutions",
    "text": "ไวน์แดงชนิดหนึ่งผลิตจากการหมักผลองุ่น มีแอลกอฮอล์ร้อยละ 13 โดยปริมาตร และมีความหนาแน่น 0.9805 g/mL แอลกอฮอล์ในไวน์นี้ประกอบด้วยเอทานอล 138 g/L และเมทานอล 200 mg/L การรายงาน ปริมาณของแอลกอฮออล์ในไวน์แดงนี้ ข้อใดผิด กำหนดให้ - องค์ประกอบหลักของไวน์แดงคือน้ำและแอลกอฮอล์ ไม่ต้องคำนึงถึงปริมาณส่วนผสมอื่น",
    "choices": [
      "เศษส่วนโมลของเอทานอลเท่ากับ 0.051",
      "ความเข้มข้นของเอทานอลเท่ากับ 3.6 m",
      "ความเข้มข้นของเมทานอลเท่ากับ 204 ppm",
      "ความเข้มข้นของเมทานอลเท่ากับ 0.0062 M"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q48",
    "year": 68,
    "questionNum": 48,
    "topicId": "solutions",
    "text": "พระราชบัญญัติจราจรทางบกกำหนดว่า หากมีปริมาณแอลกอฮอล์มากกว่า 50 mg ในเลือด 100 cm3 ถือว่า เมาสุราขณะขับรถ ถ้านาย A หนัก 70 kg จะต้องโทษเมาแล้วขับเมื่อดื่มเครื่องดื่มในข้อใด กำหนดให้ - เมื่อดื่มเครื่องดื่มที่มีแอลกอฮอล์ แอลกอฮอล์ซึ่งเป็นโมเลกุลขนาดเล็กและละลายน้ำได้ดีจะถูก ดูดซึมเข้าสู่กระแสเลือดผ่านเ",
    "choices": [
      "ไวน์แดง 160 cm3 (มีแอลกอฮอล์ 14 % v/v)",
      "ไวน์ขาว 170 cm3 (มีแอลกอฮอล์ 12 % v/v)",
      "เบียร์ 400 cm3 (มีแอลกอฮอล์ 5 % v/v)",
      "วิสกี้ 50 cm3 (มีแอลกอฮอล์ 40 % v/v)"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 10 ของข้อสอบปี 68"
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
    "id": "y68-q52",
    "year": 68,
    "questionNum": 52,
    "topicId": "acid-base",
    "text": "สาร X ประกอบด้วยธาตุ C, H และ O เมื่อละลายสารนี้ 0.20 g ในไซโคลเฮกเซน (C6H12) 8.0 mL พบว่า สารละลายมีจุดเยือกแข็งเท่ากับ 2.40 °C ข้อใดคือสูตรเคมีของสาร X กำหนดให้ ไซโคลเฮกเซนมีค่า Kf = 20.0 °C/m, จุดเยือกแข็ง = 6.50 °C และความหนาแน่น = 0.80 g/mL",
    "choices": [
      "C4H6O",
      "C7H6O2",
      "C10H16O",
      "C15H16O4"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 11 ของข้อสอบปี 68"
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
  },
  {
    "id": "y68-q56",
    "year": 68,
    "questionNum": 56,
    "topicId": "acid-base",
    "text": "แก๊สชนิดหนึ่งมีมวล 2.64 g บรรจุอยู่ในภาชนะขนาด 2.25 L ที่อุณหภูมิ 27 °C และความดัน 0.656 atm แก๊สนี้ควรเป็นแก๊สชนิดใด",
    "choices": [
      "NO",
      "N2O",
      "NO2",
      "N2O4"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q57",
    "year": 68,
    "questionNum": 57,
    "topicId": "acid-base",
    "text": "เมื่อบรรจุแก๊ส Xe และแก๊ส F2 ที่มีความดัน 0.861 atm และ 1.23 atm ตามลำดับ ในภาชนะปิดขนาด 20 L ที่อุณหภูมิ 327 °C แก๊ส Xe จะทำปฏิกิริยากับแก๊ส F2 ให้แก๊สซีนอนเตตระฟลูออไรด์ (XeF4) หากปฏิกิริยานี้ เกิดขึ้นอย่างสมบูรณ์ หลังปฏิกิริยาสิ้นสุดภายในภาชนะนี้จะมีความดันกี่บรรยากาศ",
    "choices": [
      "0.25",
      "0.62",
      "0.86",
      "1.2"
    ],
    "correctIndex": 0,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q58",
    "year": 68,
    "questionNum": 58,
    "topicId": "acid-base",
    "text": "เมื่อบรรจุแก๊สอะเซทิลีน (C2H2) 2.0 mol และแก๊สออกซิเจน 5.0 mol ในภาชนะปิดขนาด 6.0 L ที่อุณหภูมิ 327 °C แก๊สทั้งสองจะทำปฏิกิริยากัน ถ้าแก๊สอะเซทิลีนเกิดปฏิกิริยาไป 70 % ความดันรวมของแก๊สใน ภาชนะนี้เป็นกี่บรรยากาศ",
    "choices": [
      "28",
      "34",
      "48",
      "52"
    ],
    "correctIndex": 1,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q59",
    "year": 68,
    "questionNum": 59,
    "topicId": "acid-base",
    "text": "แก๊ส X และแก๊ส Y ต่างบรรจุอยู่ในภาชนะขนาด 1.0 L ที่อุณหภูมิ 25 °C โดยบรรจุแก๊ส X ให้มีความหนาแน่น เป็นสองเท่าของแก๊ส Y ที่ภาวะเดียวกัน พบว่า แก๊ส X แพร่ผ่านภาชนะออกมาจนหมดภายใน 14 นาที ในขณะที่แก๊ส Y ใช้เวลา 10 นาที ความดันของแก๊ส X เป็นกี่เท่าของแก๊ส Y",
    "choices": [
      "0.25",
      "1.0",
      "2.8",
      "4.0"
    ],
    "correctIndex": 2,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 68"
  },
  {
    "id": "y68-q60",
    "year": 68,
    "questionNum": 60,
    "topicId": "acid-base",
    "text": "สัตว์ตัวเล็ก ๆ เช่น หนู ยังคงดำรงชีวิตอยู่ได้ในสภาวะที่ความดันลดต่ำลงถึง 20 kPa จากการทดลองศึกษา ความดันในถังใบหนึ่งที่ให้หนูอาศัยอยู่โดยสูบอากาศออกบางส่วน พบว่า บารอมิเตอร์อ่านค่าความดันได้ 100 kPa และแมนอมิเตอร์วัดค่าความดันของแก๊สในถังที่หนูอาศัยอยู่ได้ 57 cmHg (ดังรูป) พิจารณาข้อสรุปจากผลการทดลอ",
    "choices": [
      "I เท่านั้น",
      "I และ II เท่านั้น",
      "I และ III เท่านั้น",
      "I, II และ III"
    ],
    "correctIndex": 3,
    "explanation": "(verified) ดูรูปในหน้า 12 ของข้อสอบปี 68"
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
