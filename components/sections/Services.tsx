'use client'

import {
  Layout,
  Layers,
  Shield,
  ShoppingCart,
  Zap,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SectionTitle, GradientText } from '@/components/ui/AnimatedText'
import { useInView } from '@/lib/hooks/useInView'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Layers,
  Shield,
  ShoppingCart,
  Zap,
  MessageSquare,
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof SERVICES)[0]
  index: number
  isVisible: boolean
}) {
  const Icon = ICON_MAP[service.icon] ?? Zap

  return (
    <Card
      glowOnHover
      className={cn(
        'p-6 h-full transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` } as React.CSSProperties}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-300 rounded-t-2xl" />

      <div className="space-y-5">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/15 group-hover:border-cyan-400/40 group-hover:shadow-glow-sm transition-all duration-300">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>

        {/* Title + description */}
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-white text-lg">{service.title}</h3>
          <p className="text-steel-400 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-sm text-steel-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {service.technologies.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}

export function Services() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative py-24 lg:py-32"
      aria-label="Nuestros servicios"
    >
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-cyan-400/3 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Lo que hacemos"
          title={
            <>
              Soluciones digitales que{' '}
              <GradientText>impulsan resultados</GradientText>
            </>
          }
          description="Desde landing pages que convierten hasta sistemas complejos a medida. Entregamos código de calidad producción con diseño excepcional."
          className={cn(
            'mb-16 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
