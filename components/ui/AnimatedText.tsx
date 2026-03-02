'use client'

import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
  highlight?: boolean
  delay?: number
}

export function GradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}

export function AnimatedText({ children, className, delay = 0 }: AnimatedTextProps) {
  return (
    <span
      className={cn('inline-block animate-slide-up opacity-0', className)}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </span>
  )
}

interface SectionTitleProps {
  badge?: string
  title: React.ReactNode
  description?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ badge, title, description, centered = true, className }: SectionTitleProps) {
  return (
    <div className={cn('space-y-4', centered && 'text-center', className)}>
      {badge && (
        <div className={cn('flex', centered && 'justify-center')}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-400/10 border border-cyan-400/30 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-glow-pulse" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="font-heading text-section font-bold text-white leading-tight">{title}</h2>
      {description && (
        <p className="text-steel-400 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  )
}
