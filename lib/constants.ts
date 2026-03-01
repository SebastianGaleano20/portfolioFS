import type { NavLink, Service, Project, Stat, SocialLink, FooterColumn } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export const SERVICES: Service[] = [
  {
    id: 'landing',
    icon: 'Layout',
    title: 'Landing Pages',
    description:
      'Páginas de aterrizaje de alto impacto diseñadas para convertir visitantes en clientes. Velocidad, estética y persuasión en cada pixel.',
    features: [
      'Diseño 100% personalizado',
      'Optimización de conversión (CRO)',
      'Animaciones y micro-interacciones',
      'SEO técnico incluido',
    ],
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion'],
  },
  {
    id: 'fullstack',
    icon: 'Layers',
    title: 'Apps Full Stack',
    description:
      'Aplicaciones web completas con frontend moderno y backend robusto. Desde MVPs hasta productos escalables en producción.',
    features: [
      'Arquitectura escalable',
      'API REST o GraphQL',
      'Base de datos optimizada',
      'Deploy en la nube',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'auth',
    icon: 'Shield',
    title: 'Sistemas de Usuarios',
    description:
      'Autenticación segura, dashboards interactivos y paneles de administración. Control total sobre tu plataforma.',
    features: [
      'Auth JWT / OAuth2',
      'Roles y permisos granulares',
      'Dashboard analytics',
      'Panel admin completo',
    ],
    technologies: ['NextAuth', 'Prisma', 'Redis', 'TypeScript'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce',
    description:
      'Tiendas online optimizadas para ventas. Integración con pasarelas de pago, gestión de inventario y experiencia de compra fluida.',
    features: [
      'Carrito y checkout',
      'Pasarelas de pago',
      'Gestión de inventario',
      'Panel de pedidos',
    ],
    technologies: ['Stripe', 'PayPal', 'Sanity', 'Vercel'],
  },
  {
    id: 'api',
    icon: 'Zap',
    title: 'APIs REST',
    description:
      'Diseño e implementación de APIs robustas y bien documentadas. Integraciones con servicios de terceros y microservicios.',
    features: [
      'Documentación OpenAPI',
      'Rate limiting y seguridad',
      'Webhooks y WebSockets',
      'Tests automatizados',
    ],
    technologies: ['Express', 'Fastify', 'Swagger', 'Jest'],
  },
  {
    id: 'consulting',
    icon: 'MessageSquare',
    title: 'Consultoría Tech',
    description:
      'Asesoría técnica para tomar las decisiones correctas. Stack review, arquitectura, performance audit y roadmap tecnológico.',
    features: [
      'Tech stack review',
      'Auditoría de performance',
      'Planificación de arquitectura',
      'Code review profesional',
    ],
    technologies: ['Análisis', 'Auditoría', 'Estrategia'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description:
      'Plataforma de analytics en tiempo real para equipos de marketing con visualizaciones interactivas y reportes automatizados.',
    technologies: ['Next.js', 'TypeScript', 'Recharts', 'PostgreSQL'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    category: 'App Full Stack',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Premium',
    description:
      'Tienda online de moda con experiencia de compra de lujo, integración Stripe y gestión de inventario en tiempo real.',
    technologies: ['Next.js', 'Stripe', 'Sanity', 'Vercel'],
    gradient: 'from-violet-500/20 to-purple-600/20',
    category: 'E-commerce',
  },
  {
    id: 'booking-system',
    title: 'Sistema de Reservas',
    description:
      'App de reservas para cadena hotelera con calendario dinámico, pagos integrados y panel de administración.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    category: 'Sistema de Usuarios',
  },
  {
    id: 'fintech-app',
    title: 'FinTech Dashboard',
    description:
      'Panel de gestión financiera personal con seguimiento de gastos, metas de ahorro y gráficos de evolución patrimonial.',
    technologies: ['Next.js', 'Prisma', 'Redis', 'TailwindCSS'],
    gradient: 'from-orange-500/20 to-amber-600/20',
    category: 'App Full Stack',
  },
  {
    id: 'landing-agency',
    title: 'Landing Agencia Creativa',
    description:
      'Landing page de alto impacto para agencia de diseño con animaciones avanzadas, portfolio interactivo y formulario de contacto.',
    technologies: ['Next.js', 'Framer Motion', 'Three.js', 'GSAP'],
    gradient: 'from-pink-500/20 to-rose-600/20',
    category: 'Landing Page',
  },
  {
    id: 'crm-system',
    title: 'CRM B2B Personalizado',
    description:
      'Sistema CRM a medida para empresa de servicios B2B con pipeline de ventas, seguimiento de clientes y reportes.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Docker'],
    gradient: 'from-indigo-500/20 to-blue-700/20',
    category: 'Desarrollo a Medida',
  },
]

export const STATS: Stat[] = [
  { value: 3, suffix: '+', label: 'años de experiencia' },
  { value: 50, suffix: '+', label: 'proyectos entregados' },
  { value: 30, suffix: '+', label: 'clientes satisfechos' },
  { value: 98, suffix: '%', label: 'tasa de satisfacción' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Landing Pages', href: '#servicios' },
      { label: 'Apps Full Stack', href: '#servicios' },
      { label: 'Sistemas de Usuarios', href: '#servicios' },
      { label: 'E-commerce', href: '#servicios' },
      { label: 'APIs REST', href: '#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Blog', href: '#' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]

export const PROJECT_TYPES = [
  'Landing Page',
  'App Full Stack',
  'E-commerce',
  'Sistema de Usuarios',
  'API REST',
  'Consultoría',
  'Otro',
] as const

export const CONTACT_INFO = {
  email: 'hola@devagency.com',
  whatsapp: '+54 9 11 0000 0000',
  location: 'Buenos Aires, Argentina',
} as const
