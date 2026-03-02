import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  glowOnHover?: boolean
  gradient?: string
}

export function Card({ children, className, glowOnHover = true, gradient, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={cn(
        'relative rounded-2xl border border-white/10',
        'bg-white/5 backdrop-blur-md',
        'transition-all duration-300',
        glowOnHover && [
          'hover:border-cyan-400/30',
          'hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
          'hover:bg-white/8',
          'group',
        ],
        className
      )}
    >
      {gradient && (
        <div
          className={cn(
            'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
            'transition-opacity duration-300 pointer-events-none',
            `bg-gradient-to-br ${gradient}`
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
