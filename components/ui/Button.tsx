import { cn } from '@/lib/utils'
import type { ButtonVariant, ButtonSize } from '@/types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  href?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-r from-cyan-400 to-blue-500',
    'text-navy-950 font-semibold',
    'shadow-glow-sm hover:shadow-glow-md',
    'hover:from-cyan-300 hover:to-blue-400',
    'transition-all duration-300',
  ].join(' '),
  secondary: [
    'border border-cyan-400/50 text-cyan-400',
    'bg-cyan-400/5 hover:bg-cyan-400/10',
    'hover:border-cyan-400 hover:shadow-glow-sm',
    'transition-all duration-300',
  ].join(' '),
  ghost: [
    'border border-white/10 text-steel-300',
    'bg-white/5 hover:bg-white/10',
    'hover:border-white/20 hover:text-white',
    'transition-all duration-300',
  ].join(' '),
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'cursor-pointer select-none',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
