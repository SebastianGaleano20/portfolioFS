import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'tech' | 'category' | 'accent'
  className?: string
}

const variantClasses = {
  tech: 'bg-navy-800/80 border border-white/10 text-steel-300 text-xs',
  category: 'bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs',
  accent: 'bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 text-sm font-medium',
}

export function Badge({ children, variant = 'tech', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full font-medium',
        'whitespace-nowrap',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
