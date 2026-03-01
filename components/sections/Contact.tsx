'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MessageSquare, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionTitle, GradientText } from '@/components/ui/AnimatedText'
import { useInView } from '@/lib/hooks/useInView'
import { CONTACT_INFO, PROJECT_TYPES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Selecciona un tipo de proyecto'),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

function InputField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-steel-300">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  )
}

const inputClasses = cn(
  'w-full px-4 py-3 rounded-xl',
  'bg-white/5 border border-white/10 text-white placeholder-steel-500',
  'focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:shadow-glow-sm',
  'transition-all duration-200 text-sm'
)

export function Contact() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-24 lg:py-32"
      aria-label="Formulario de contacto"
    >
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/20 to-transparent pointer-events-none" aria-hidden />
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-400/3 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Contacto"
          title={
            <>
              ¿Listo para construir
              <br />
              <GradientText>algo grande?</GradientText>
            </>
          }
          description="Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas con una propuesta personalizada."
          className={cn(
            'mb-16 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div
            className={cn(
              'lg:col-span-3 transition-all duration-700',
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl">¡Mensaje enviado!</h3>
                  <p className="text-steel-400 text-sm max-w-sm">
                    Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField label="Nombre *" error={errors.name?.message}>
                      <input
                        {...register('name')}
                        placeholder="Tu nombre"
                        className={cn(inputClasses, errors.name && 'border-red-500/50')}
                      />
                    </InputField>
                    <InputField label="Email *" error={errors.email?.message}>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="tu@email.com"
                        className={cn(inputClasses, errors.email && 'border-red-500/50')}
                      />
                    </InputField>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField label="Empresa" error={errors.company?.message}>
                      <input
                        {...register('company')}
                        placeholder="Tu empresa (opcional)"
                        className={inputClasses}
                      />
                    </InputField>
                    <InputField label="Tipo de proyecto *" error={errors.projectType?.message}>
                      <select
                        {...register('projectType')}
                        className={cn(
                          inputClasses,
                          'appearance-none cursor-pointer',
                          errors.projectType && 'border-red-500/50'
                        )}
                      >
                        <option value="" className="bg-navy-900">Seleccionar...</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-navy-900">
                            {type}
                          </option>
                        ))}
                      </select>
                    </InputField>
                  </div>

                  <InputField label="Mensaje *" error={errors.message?.message}>
                    <textarea
                      {...register('message')}
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y timeline estimado..."
                      rows={5}
                      className={cn(inputClasses, 'resize-none', errors.message && 'border-red-500/50')}
                    />
                  </InputField>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Info sidebar */}
          <div
            className={cn(
              'lg:col-span-2 space-y-6 transition-all duration-700',
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
            style={{ transitionDelay: '400ms' }}
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: CONTACT_INFO.email,
                href: `mailto:${CONTACT_INFO.email}`,
              },
              {
                icon: MessageSquare,
                label: 'WhatsApp',
                value: CONTACT_INFO.whatsapp,
                href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`,
              },
              {
                icon: MapPin,
                label: 'Ubicación',
                value: CONTACT_INFO.location,
                href: undefined,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/20 hover:bg-white/8 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-steel-500 text-xs font-medium uppercase tracking-wider mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="text-white text-sm hover:text-cyan-400 transition-colors font-medium">
                      {value}
                    </a>
                  ) : (
                    <span className="text-white text-sm font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Response time card */}
            <div className="p-5 rounded-xl border border-cyan-400/20 bg-cyan-400/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-glow-pulse" />
                <span className="text-cyan-400 text-sm font-semibold">Respuesta rápida</span>
              </div>
              <p className="text-steel-400 text-sm leading-relaxed">
                Respondemos todos los mensajes en{' '}
                <span className="text-white font-medium">menos de 24 horas</span>. Para proyectos
                urgentes, contáctanos por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
