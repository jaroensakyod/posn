interface BadgeProps {
  label: string
  variant?: 'easy' | 'medium' | 'hard' | 'default' | 'success'
}

const variantClass = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  hard: 'bg-red-100 text-red-700',
  default: 'bg-slate-100 text-slate-600',
  success: 'bg-green-100 text-green-700',
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variantClass[variant]}`}>
      {label}
    </span>
  )
}
