import { Lesson } from '../lessonTypes'

// หัวข้อ 9: กรด-เบส — ระดับ สอวน ค่าย 1
export const acidBase: Lesson = {
  topicId: 'acid-base',
  sections: [
    {
      title: '1. ทฤษฎีกรด-เบส',
      blocks: [
        {
          type: 'list',
          content: 'ทฤษฎีหลัก 3 ทฤษฎี:',
          items: [
            'อาร์เรเนียส: กรดให้ H⁺, เบสให้ OH⁻ ในน้ำ',
            'เบรินสเตด-เลารี: กรดให้โปรตอน (H⁺), เบสรับโปรตอน',
            'ลิวอิส: กรดรับคู่อิเล็กตรอน, เบสให้คู่อิเล็กตรอน (กว้างที่สุด)',
          ],
        },
        {
          type: 'note',
          label: 'คู่กรด-เบส (Conjugate pair)',
          content:
            'กรดเมื่อให้โปรตอนกลายเป็นเบสคู่ของมัน เช่น HA/A⁻ และ H₂O/OH⁻\nกรดยิ่งแรง เบสคู่ยิ่งอ่อน (Ka × Kb = Kw)',
        },
      ],
    },
    {
      title: '2. pH, pOH และ Kw',
      blocks: [
        {
          type: 'formula-box',
          label: 'ความสัมพันธ์พื้นฐาน',
          content:
            'Kw = [H⁺][OH⁻] = 1.0×10⁻¹⁴ (25°C)\npH = −log[H⁺] ; pOH = −log[OH⁻]\npH + pOH = 14 (25°C)\nสารละลายกลาง: [H⁺]=[OH⁻]=10⁻⁷, pH=7',
        },
        {
          type: 'example',
          label: 'ตัวอย่าง (กรดแก่)',
          content:
            'HCl 0.010 M (กรดแก่ แตกตัวสมบูรณ์)\n[H⁺] = 0.010 M → pH = −log(0.010) = 2.00',
        },
      ],
    },
    {
      title: '3. กรด-เบสอ่อนและการแตกตัว',
      blocks: [
        {
          type: 'math-block',
          content: 'K_a = \\frac{[H^+][A^-]}{[HA]}, \\quad K_b = \\frac{[BH^+][OH^-]}{[B]}',
        },
        {
          type: 'formula-box',
          label: 'การประมาณ pH ของกรดอ่อน',
          content:
            'ถ้า Ka << C: [H⁺] ≈ √(Ka·C)\npH = ½(pKa − log C)\nร้อยละการแตกตัว = ([H⁺]/C) × 100',
        },
        {
          type: 'example',
          label: 'ตัวอย่าง',
          content:
            'CH₃COOH 0.10 M, Ka=1.8×10⁻⁵, หา pH\n[H⁺] = √(1.8×10⁻⁵ × 0.10) = 1.34×10⁻³\npH = −log(1.34×10⁻³) = 2.87',
        },
      ],
    },
    {
      title: '4. สารละลายบัฟเฟอร์',
      blocks: [
        {
          type: 'text',
          content:
            'บัฟเฟอร์ = กรดอ่อน + เกลือเบสคู่ (หรือเบสอ่อน + เกลือกรดคู่) ต้านการเปลี่ยน pH เมื่อเติมกรด/เบสปริมาณน้อย',
        },
        {
          type: 'math-block',
          content: 'pH = pK_a + \\log\\frac{[A^-]}{[HA]} \\quad (\\text{Henderson-Hasselbalch})',
        },
        {
          type: 'example',
          label: 'ตัวอย่าง',
          content:
            'บัฟเฟอร์ CH₃COOH 0.20 M + CH₃COONa 0.30 M (pKa=4.74)\npH = 4.74 + log(0.30/0.20) = 4.74 + 0.18 = 4.92',
        },
        {
          type: 'note',
          label: 'ความสามารถบัฟเฟอร์',
          content: 'บัฟเฟอร์ทำงานดีที่สุดเมื่อ [A⁻]≈[HA] (pH ≈ pKa) เลือกกรดที่มี pKa ใกล้ pH ที่ต้องการ',
        },
      ],
    },
    {
      title: '5. การไทเทรตและอินดิเคเตอร์',
      blocks: [
        {
          type: 'text',
          content:
            'ที่จุดสมมูล (equivalence point) mol กรด = mol เบส (ตามสัดส่วนสมการ) จุดยุติ (end point) คือจุดที่อินดิเคเตอร์เปลี่ยนสี ควรใกล้จุดสมมูลที่สุด',
        },
        {
          type: 'list',
          content: 'pH ที่จุดสมมูลของการไทเทรต:',
          items: [
            'กรดแก่ + เบสแก่ → pH = 7',
            'กรดอ่อน + เบสแก่ → pH > 7 (เกลือเบส)',
            'กรดแก่ + เบสอ่อน → pH < 7 (เกลือกรด)',
            'ครึ่งทางสมมูล (กรดอ่อน): pH = pKa',
          ],
        },
        {
          type: 'example',
          label: 'ตัวอย่าง',
          content:
            'ไทเทรต HCl 0.10 M 25.0 mL ด้วย NaOH 0.10 M ต้องใช้กี่ mL ถึงจุดสมมูล?\nmol HCl = 0.10×0.025 = 0.0025 = mol NaOH\nV(NaOH) = 0.0025/0.10 = 0.025 L = 25.0 mL',
        },
      ],
    },
  ],
}
