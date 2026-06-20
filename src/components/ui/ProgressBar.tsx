interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  color?: 'blue' | 'green' | 'orange'
  size?: 'sm' | 'md'
}

const colorClass = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
}

export default function ProgressBar({
  value,
  max = 100,
  className = '',
  color = 'blue',
  size = 'md',
}: ProgressBarProps) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  const h = size === 'sm' ? 'h-1.5' : 'h-2.5'

  return (
    <div className={`w-full bg-slate-100 rounded-full ${h} overflow-hidden ${className}`}>
      <div
        className={`${h} rounded-full transition-all duration-500 ${colorClass[color]}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
