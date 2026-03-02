'use client'

import { CheckCircle2 } from 'lucide-react'
import { GradientText, SectionTitle } from '@/components/ui/AnimatedText'
import { useInView } from '@/lib/hooks/useInView'
import { useCountUp } from '@/lib/hooks/useCountUp'
import { STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface StatCounterProps {
  value: number
  suffix: string
  label: string
  enabled: boolean
  delay: number
}

function StatCounter({ value, suffix, label, enabled, delay }: StatCounterProps) {
  const count = useCountUp({ end: value, duration: 1800, enabled })

  return (
    <div
      className={cn(
        'text-center space-y-1 transition-all duration-500',
        enabled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-heading font-bold text-3xl lg:text-4xl text-white">
        {count}
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <div className="text-steel-400 text-sm">{label}</div>
    </div>
  )
}

const VALUES = [
  'Código limpio y mantenible desde el día 1',
  'Diseño centrado en la experiencia de usuario',
  'Comunicación clara y plazos reales',
  'Tecnología moderna sin over-engineering',
  'Soporte y mantenimiento post-entrega',
  'Documentación completa de cada proyecto',
]

const TEAM = [
  { initials: 'SG', name: 'Sebastián G.', role: 'Full Stack Lead', color: 'from-cyan-500 to-blue-600' },
  { initials: 'AM', name: 'Ana M.', role: 'UI/UX Designer', color: 'from-violet-500 to-purple-600' },
  { initials: 'LR', name: 'Lucas R.', role: 'Backend Dev', color: 'from-emerald-500 to-teal-600' },
  { initials: 'CP', name: 'Carla P.', role: 'Frontend Dev', color: 'from-orange-500 to-amber-600' },
]

export function About() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative py-24 lg:py-32"
      aria-label="Sobre nosotros"
    >
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-violet-500/3 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div
          className={cn(
            'grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl border border-white/10 bg-white/3',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {STATS.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              enabled={isInView}
              delay={i * 150}
            />
          ))}
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div
            className={cn(
              'space-y-8 transition-all duration-700',
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <SectionTitle
              badge="Nosotros"
              title={
                <>
                  Un equipo que{' '}
                  <GradientText>construye con propósito</GradientText>
                </>
              }
              centered={false}
            />

            <div className="space-y-4 text-steel-400 leading-relaxed">
              <p>
                Somos un equipo de desarrolladores y diseñadores apasionados por crear
                productos digitales que hacen la diferencia. Combinamos experiencia técnica
                con sensibilidad de diseño para entregar soluciones que no solo funcionan,
                sino que deleitan.
              </p>
              <p>
                Trabajamos con startups, pymes y empresas establecidas que entienden que
                la tecnología bien aplicada es una ventaja competitiva real. Cada proyecto
                es una oportunidad de crear algo excepcional.
              </p>
            </div>

            {/* Values */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VALUES.map((val) => (
                <li key={val} className="flex items-start gap-2 text-sm text-steel-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  {val}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: team grid */}
          <div
            className={cn(
              'transition-all duration-700',
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="grid grid-cols-2 gap-4">
              {TEAM.map((member, i) => (
                <div
                  key={member.name}
                  className={cn(
                    'group relative rounded-2xl border border-white/10 bg-white/5 p-6',
                    'hover:border-cyan-400/30 hover:bg-white/8 transition-all duration-300',
                    i === 0 && 'lg:row-span-1'
                  )}
                >
                  {/* Avatar */}
                  <div className={cn('w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-glow-sm', member.color)}>
                    <span className="font-heading font-bold text-white text-lg">{member.initials}</span>
                  </div>
                  <div className="font-heading font-semibold text-white text-sm">{member.name}</div>
                  <div className="text-steel-500 text-xs mt-1">{member.role}</div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-400/5 to-transparent" />
                </div>
              ))}

              {/* Decorative card */}
              <div className="col-span-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/20 flex items-center justify-center shrink-0">
                  <span className="text-cyan-400 text-xl font-heading font-bold">+</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">¿Quieres unirte?</div>
                  <div className="text-steel-400 text-xs mt-0.5">Siempre buscamos talento excepcional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
