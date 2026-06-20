interface RadarTopic {
  id: string
  label: string
  score: number | null  // 0-100, null = not attempted
}

interface RadarChartProps {
  topics: RadarTopic[]
}

const SIZE = 340
const CX = SIZE / 2
const CY = SIZE / 2
const MAX_R = 110
const LABEL_R = MAX_R * 1.38
const GRID = [25, 50, 75, 100]

function polar(idx: number, n: number, r: number): { x: number; y: number } {
  const angle = (2 * Math.PI * idx) / n - Math.PI / 2
  return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) }
}

function textAnchor(idx: number, n: number): 'start' | 'end' | 'middle' {
  const angle = (2 * Math.PI * idx) / n - Math.PI / 2
  const cos = Math.cos(angle)
  if (cos > 0.15) return 'start'
  if (cos < -0.15) return 'end'
  return 'middle'
}

function polyPoints(n: number, r: number): string {
  return Array.from({ length: n }, (_, i) => {
    const { x, y } = polar(i, n, r)
    return `${x},${y}`
  }).join(' ')
}

export default function RadarChart({ topics }: RadarChartProps) {
  const n = topics.length
  const scorePolygon = topics
    .map((t, i) => {
      const r = MAX_R * (t.score ?? 0) / 100
      const { x, y } = polar(i, n, r)
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full max-w-xs mx-auto"
      aria-label="แผนภูมิประสิทธิภาพรายหัวข้อ"
    >
      {/* Grid polygons */}
      {GRID.map((level) => (
        <polygon
          key={level}
          points={polyPoints(n, MAX_R * level / 100)}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={level === 100 ? 1.5 : 1}
        />
      ))}

      {/* Axis lines */}
      {topics.map((_, i) => {
        const outer = polar(i, n, MAX_R)
        return (
          <line
            key={i}
            x1={CX} y1={CY}
            x2={outer.x} y2={outer.y}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        )
      })}

      {/* Grid level labels */}
      {GRID.slice(0, 3).map((level) => (
        <text
          key={level}
          x={CX + 3}
          y={CY - MAX_R * level / 100 + 3}
          fontSize="8"
          fill="#94a3b8"
          textAnchor="start"
        >
          {level}
        </text>
      ))}

      {/* Score polygon */}
      <polygon
        points={scorePolygon}
        fill="rgba(59,130,246,0.18)"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Score dots */}
      {topics.map((t, i) => {
        if (t.score === null || t.score === 0) return null
        const { x, y } = polar(i, n, MAX_R * t.score / 100)
        return (
          <circle
            key={i}
            cx={x} cy={y} r="4"
            fill="#3b82f6"
            stroke="white"
            strokeWidth="2"
          />
        )
      })}

      {/* Topic labels */}
      {topics.map((t, i) => {
        const { x, y } = polar(i, n, LABEL_R)
        const anchor = textAnchor(i, n)
        const hasScore = t.score !== null && t.score > 0
        const s = t.score ?? 0
        const scoreColor = !hasScore
          ? '#94a3b8'
          : s >= 80 ? '#16a34a'
          : s >= 65 ? '#2563eb'
          : s >= 45 ? '#d97706'
          : '#dc2626'

        return (
          <g key={i}>
            <text
              x={x} y={y - 6}
              fontSize="9.5"
              fill="#475569"
              textAnchor={anchor}
              fontWeight="500"
            >
              {t.label}
            </text>
            <text
              x={x} y={y + 7}
              fontSize="9"
              fill={scoreColor}
              textAnchor={anchor}
              fontWeight="600"
            >
              {hasScore ? `${t.score}%` : '—'}
            </text>
          </g>
        )
      })}

      {/* Center dot */}
      <circle cx={CX} cy={CY} r="3" fill="#94a3b8" />
    </svg>
  )
}
