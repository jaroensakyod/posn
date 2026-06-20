import { useEffect, useRef } from 'react'
import katex from 'katex'

interface MathProps {
  math: string
  block?: boolean
}

export default function MathRenderer({ math, block = false }: MathProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(math, ref.current, {
          displayMode: block,
          throwOnError: false,
          errorColor: '#ef4444',
        })
      } catch {
        if (ref.current) ref.current.textContent = math
      }
    }
  }, [math, block])

  return block ? (
    <div className="math-block overflow-x-auto py-3">
      <span ref={ref} />
    </div>
  ) : (
    <span ref={ref} className="math-inline" />
  )
}
