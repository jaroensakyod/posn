import { Lesson } from '../lessonTypes'

// หัวข้อ 4: สมบัติของธาตุหมู่หลัก — ระดับ สอวน ค่าย 1
export const representativeElements: Lesson = {
  topicId: 'representative-elements',
  sections: [
    {
      title: '1. ธาตุหมู่ 1 (โลหะอัลคาไล)',
      blocks: [
        {
          type: 'text',
          content: 'ธาตุหมู่ 1: Li, Na, K, Rb, Cs, Fr — มีเวเลนซ์อิเล็กตรอน 1 ตัว (ns¹) เป็นโลหะทั้งหมด',
        },
        {
          type: 'list',
          content: 'แนวโน้มตามหมู่ (Li → Cs):',
          items: [
            'ขนาดอะตอม: เพิ่มขึ้น (เพิ่มจำนวนชั้น e⁻)',
            'IE₁: ลดลง (ยิ่งห่างจากนิวเคลียส ดึง e⁻ ออกง่ายขึ้น)',
            'EN: ลดลง',
            'ความเป็นโลหะ: เพิ่มขึ้น (K > Na > Li)',
            'ความว่องไวต่อน้ำ: เพิ่มขึ้นอย่างชัดเจน',
          ],
        },
        {
          type: 'formula-box',
          label: 'ปฏิกิริยากับน้ำ',
          content: '2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g)\nM = Li, Na, K, Rb, Cs\nผลิตภัณฑ์: ด่างแก่ + ไฮโดรเจน',
        },
        {
          type: 'formula-box',
          label: 'ปฏิกิริยากับออกซิเจน',
          content: '4Li + O₂ → 2Li₂O (lithium oxide)\n2Na + O₂ → Na₂O₂ (sodium peroxide)\nK + O₂ → KO₂ (potassium superoxide)',
        },
        {
          type: 'note',
          label: 'จุดสำคัญ',
          content: 'Li เป็นโลหะที่เบาที่สุด | Na เป็นธาตุหมู่ 1 ที่พบมากที่สุดในธรรมชาติ | Cs มีความว่องไวสูงสุด',
        },
      ],
    },
    {
      title: '2. ธาตุหมู่ 2 (โลหะอัลคาไลน์เอิร์ท)',
      blocks: [
        {
          type: 'text',
          content: 'ธาตุหมู่ 2: Be, Mg, Ca, Sr, Ba, Ra — มีเวเลนซ์อิเล็กตรอน 2 ตัว (ns²) เป็นโลหะทั้งหมด IE₁ สูงกว่าหมู่ 1',
        },
        {
          type: 'list',
          content: 'สมบัติสำคัญ:',
          items: [
            'Be: คุณสมบัติ amphoteric (ทำปฏิกิริยากับทั้งกรดและเบส), ไม่ทำปฏิกิริยากับน้ำที่ T ห้อง',
            'Mg: ทำปฏิกิริยากับน้ำร้อน/ไอน้ำเท่านั้น; MgO ใช้เป็น refractory',
            'Ca: Ca + 2H₂O → Ca(OH)₂ + H₂ (ทำปฏิกิริยากับน้ำช้ากว่า Na)',
            'Ba: ทำปฏิกิริยากับน้ำรุนแรงกว่า Ca',
            'BaSO₄ ไม่ละลาย → ใช้วินิจฉัย Ba²⁺; CaSO₄ ละลายน้อย (ยิปซัม)',
          ],
        },
        {
          type: 'formula-box',
          label: 'ปฏิกิริยาสำคัญของหมู่ 2',
          content: 'M + 2H₂O → M(OH)₂ + H₂  (M = Ca, Sr, Ba)\nMO + H₂O → M(OH)₂  (เบส)\nMCO₃ + 2HCl → MCl₂ + H₂O + CO₂\nCaCO₃ ⇌ CaO + CO₂  (Kp = 1 atm ที่ ~840°C)',
        },
        {
          type: 'note',
          label: 'Be vs หมู่ 2 อื่น',
          content: 'BeO และ Be(OH)₂ เป็น amphoteric: Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻ | Be(OH)₂ + 2HCl → BeCl₂ + 2H₂O | สาเหตุ: Be²⁺ มีขนาดเล็กมาก ประจุต่อรัศมีสูง',
        },
      ],
    },
    {
      title: '3. ธาตุหมู่ 13 (Boron Group)',
      blocks: [
        {
          type: 'text',
          content: 'ธาตุหมู่ 13: B, Al, Ga, In, Tl — เวเลนซ์อิเล็กตรอน 3 ตัว (ns²np¹)',
        },
        {
          type: 'list',
          content: 'สมบัติสำคัญ:',
          items: [
            'B: อโลหะ (ผลึกโคเวเลนต์), ไม่ทำปฏิกิริยากับ HCl/H₂SO₄เจือจาง',
            'Al: โลหะ amphoteric — Al₂O₃ เป็น amphoteric oxide',
            'Al: 2Al + 6HCl → 2AlCl₃ + 3H₂ (ทำปฏิกิริยากับกรด)',
            'Al: 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂ (ทำปฏิกิริยากับเบส)',
            'Ga, In, Tl: ความเป็นโลหะเพิ่มขึ้น',
          ],
        },
        {
          type: 'note',
          label: 'Boron — Lewis acid',
          content: 'BF₃ มีแค่ 6e⁻ รอบ B (electron deficient) จึงเป็น Lewis acid รับ lone pair ได้ดี | BF₃ + NH₃ → F₃B←NH₃ (เกิด adduct)',
        },
      ],
    },
    {
      title: '4. ธาตุหมู่ 14-16 (p-block)',
      blocks: [
        {
          type: 'list',
          content: 'หมู่ 14 (C, Si, Ge, Sn, Pb) — เวเลนซ์ e⁻ 4 ตัว:',
          items: [
            'C: อยู่รูปอัญรูป (graphite, diamond, fullerene)',
            'Si: network covalent solid, สารกึ่งตัวนำ',
            'Sn/Pb: โลหะ แอมโฟเทอริก (Pb²⁺ พบบ่อยกว่า Pb⁴⁺)',
            'ในหมู่ลงมา: โลหะเพิ่มขึ้น (C อโลหะ → Pb โลหะ)',
          ],
        },
        {
          type: 'list',
          content: 'หมู่ 15 (N, P, As, Sb, Bi) — เวเลนซ์ e⁻ 5 ตัว (half-filled p → IE₁ สูงผิดปกติ):',
          items: [
            'N: N₂ เสถียรมาก (พันธะสาม N≡N), ไม่ทำปฏิกิริยา',
            'P: อัญรูป white (ไวไฟ) และ red; P₄O₁₀ เป็น dehydrating agent',
            'เลขออกซิเดชัน N: −3 ถึง +5 | P: −3 ถึง +5',
          ],
        },
        {
          type: 'list',
          content: 'หมู่ 16 (O, S, Se, Te) — เวเลนซ์ e⁻ 6 ตัว:',
          items: [
            'O: EN สูงสุดรองจาก F, มักมีเลขออกซิเดชัน −2 (ยกเว้น OF₂ = +2, H₂O₂ = −1)',
            'S: อัญรูปหลายชนิด (rhombic, monoclinic); SO₂ + H₂O → H₂SO₃; SO₃ + H₂O → H₂SO₄',
            'ลงมาในหมู่: ขนาดอะตอมเพิ่ม, IE ลด, EN ลด',
          ],
        },
      ],
    },
    {
      title: '5. ธาตุหมู่ 17 (ฮาโลเจน)',
      blocks: [
        {
          type: 'text',
          content: 'ธาตุหมู่ 17: F, Cl, Br, I, At — เวเลนซ์ e⁻ 7 ตัว (ns²np⁵) ต้องการ e⁻ อีก 1 ตัวเป็น X⁻',
        },
        {
          type: 'list',
          content: 'แนวโน้มตามหมู่ (F → I):',
          items: [
            'สี: F₂ เหลืองอ่อน → Cl₂ เขียวอ่อน → Br₂ แดงน้ำตาล → I₂ ม่วงเข้ม/ดำ',
            'สถานะ 25°C: F₂, Cl₂ แก๊ส | Br₂ ของเหลว | I₂ ของแข็ง',
            'ความแรงในการ oxidize: F₂ > Cl₂ > Br₂ > I₂ (F แรงที่สุด)',
            'ความแรง HX ในน้ำ: HF อ่อน (H-bond) < HCl < HBr < HI แก่',
            'F ไม่มีเลขออกซิเดชัน +; Cl,Br,I มี −1, +1, +3, +5, +7',
          ],
        },
        {
          type: 'formula-box',
          label: 'ปฏิกิริยาการแทนที่ฮาโลเจน (Halogen Displacement)',
          content: 'Cl₂ + 2KBr → 2KCl + Br₂  (Cl₂ แทน Br⁻ ได้)\nBr₂ + 2KI → 2KBr + I₂   (Br₂ แทน I⁻ ได้)\nF₂ > Cl₂ > Br₂ > I₂ ในความสามารถ oxidize halide',
        },
        {
          type: 'formula-box',
          label: 'ออกซิเดชันของ Cl ในกรด (Oxyacids of Chlorine)',
          content: 'HClO (hypochlorous): Cl = +1\nHClO₂ (chlorous): Cl = +3\nHClO₃ (chloric): Cl = +5\nHClO₄ (perchloric): Cl = +7\nความแรงของกรด: HClO₄ > HClO₃ > HClO₂ > HClO',
        },
      ],
    },
    {
      title: '6. ธาตุหมู่ 18 (แก๊สมีตระกูล)',
      blocks: [
        {
          type: 'text',
          content: 'He, Ne, Ar, Kr, Xe, Rn — มีเวเลนซ์อิเล็กตรอนครบ 8 (He = 2) ไม่ทำปฏิกิริยาเคมีปกติ IE₁ สูงมาก',
        },
        {
          type: 'list',
          content: 'สมบัติสำคัญ:',
          items: [
            'He: แก๊สเบาที่สุดเป็นอันดับ 2 (เบาสุดคือ H₂), Tb = −269°C ต่ำสุด',
            'Ar: ใช้ในหลอดไฟ, บรรยากาศ ~1%',
            'Xe: ทำสารประกอบได้ เช่น XeF₂, XeF₄, XeO₃ (EN ของ F สูง บังคับให้ Xe เสีย e⁻)',
            'Kr: KrF₂ เป็นสารประกอบที่เสถียรน้อย',
          ],
        },
        {
          type: 'note',
          label: 'จุดเดือดแก๊สมีตระกูล',
          content: 'He < Ne < Ar < Kr < Xe < Rn (เพิ่มตามมวลโมเลกุล — แรงลอนดอนล้วน)\nHe มีจุดเดือดต่ำสุดในบรรดาธาตุทั้งหมด (−269°C)',
        },
      ],
    },
    {
      title: '7. ออกไซด์และไฮดรอกไซด์: กรด-เบส-แอมโฟเทอริก',
      blocks: [
        {
          type: 'list',
          content: 'แนวโน้มตามตารางธาตุ:',
          items: [
            'โลหะหมู่ 1, 2: เกิด basic oxide (Na₂O, CaO) + H₂O → ด่าง',
            'อโลหะ: เกิด acidic oxide (SO₃, P₄O₁₀, Cl₂O₇) + H₂O → กรด',
            'แอมโฟเทอริก: Al₂O₃, ZnO, PbO, SnO — ทำปฏิกิริยาได้ทั้งกรดและเบส',
          ],
        },
        {
          type: 'formula-box',
          label: 'ตัวอย่างออกไซด์สำคัญ',
          content: 'Na₂O + H₂O → 2NaOH  (basic)\nSO₃ + H₂O → H₂SO₄  (acidic)\nCl₂O₇ + H₂O → 2HClO₄ (acidic)\nAl₂O₃ + 6HCl → 2AlCl₃ + 3H₂O  (amphoteric with acid)\nAl₂O₃ + 2NaOH → 2NaAlO₂ + H₂O  (amphoteric with base)',
        },
        {
          type: 'example',
          label: 'ตัวอย่าง: ข้อสอบ สอวน',
          content: 'P₄O₁₀ + 6H₂O → 4H₃PO₄ (กรดฟอสฟอริก)\nCl₂O₇ + H₂O → 2HClO₄ (กรดเปอร์คลอริก แรงที่สุด)\nCrO₃ + H₂O → H₂CrO₄ (กรดโครมิก)\nCr₂O₃: amphoteric',
        },
      ],
    },
  ],
}
