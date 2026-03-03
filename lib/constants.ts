import type {
  NavLink,
  Service,
  Project,
  Stat,
  SocialLink,
  FooterColumn,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICES: Service[] = [
  {
    id: "landing",
    icon: "Layout",
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje de alto impacto diseñadas para convertir visitantes en clientes. Velocidad, estética y persuasión en cada pixel.",
    features: [
      "Diseño 100% personalizado",
      "Optimización de conversión (CRO)",
      "Animaciones y micro-interacciones",
      "SEO técnico incluido",
    ],
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Animations",
      "SEO",
    ],
  },
  {
    id: "fullstack",
    icon: "Layers",
    title: "Apps Full Stack",
    description:
      "Aplicaciones web completas con frontend moderno y backend robusto. Desde MVPs hasta productos escalables en producción.",
    features: [
      "Arquitectura escalable",
      "API REST o GraphQL",
      "Base de datos optimizada",
      "Deploy en la nube",
    ],
    technologies: [
      "php",
      "Next.js",
      "WordPress",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Vercel",
    ],
  },
  {
    id: "auth",
    icon: "Shield",
    title: "Sistemas de Usuarios",
    description:
      "Autenticación segura, dashboards interactivos y paneles de administración. Control total sobre tu plataforma.",
    features: [
      "Auth JWT / OAuth2",
      "Roles y permisos granulares",
      "Dashboard analytics",
      "Panel admin completo",
    ],
    technologies: ["NextAuth", "Prisma", "Redis", "TypeScript"],
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-commerce",
    description:
      "Tiendas online optimizadas para ventas. Integración con pasarelas de pago, gestión de inventario y experiencia de compra fluida.",
    features: [
      "Carrito y checkout",
      "Pasarelas de pago",
      "Gestión de inventario",
      "Panel de pedidos",
    ],
    technologies: ["MercadoPago", "PayPal", "TiendaNube", "Vercel"],
  },
  {
    id: "api",
    icon: "Zap",
    title: "APIs REST",
    description:
      "Diseño e implementación de APIs robustas y bien documentadas. Integraciones con servicios de terceros y microservicios.",
    features: [
      "Documentación OpenAPI",
      "Rate limiting y seguridad",
      "Webhooks y WebSockets",
      "Tests automatizados",
    ],
    technologies: ["Express", "NestJs", "Swagger", "Jest"],
  },
  {
    id: "consulting",
    icon: "MessageSquare",
    title: "Consultoría Tech",
    description:
      "Asesoría técnica para tomar las decisiones correctas. Stack review, arquitectura, performance audit y roadmap tecnológico.",
    features: [
      "Tech stack review",
      "Auditoría de performance",
      "Planificación de arquitectura",
      "Code review profesional",
      "Roadmap tecnológico",
      "Mentoría personalizada",
    ],
    technologies: [
      "Análisis",
      "Auditoría",
      "Estrategia",
      "Mentoría",
      "Roadmap",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "barberweb",
    title: "Barrio Fino Barbería",
    description:
      "Plataforma de gestión para barbería con reservas online, panel de administración y dashboard de métricas. Código limpio y diseño moderno.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    category: "App Full Stack",
    link: "https://barriofino-barber.vercel.app/",
    image: "/projects/barber.png",
  },
  {
    id: "portfolio web",
    title: "Portfolio web - Landing Page",
    description:
      "Landing page de portfolio personal con diseño minimalista, animaciones sutiles y optimización SEO. Muestra proyectos, servicios y contacto de forma clara y atractiva.",
    technologies: ["Next.js", "TailwindCSS", "React", "Vercel"],
    gradient: "from-violet-500/20 to-purple-600/20",
    category: "Landing Page",
    image: "/projects/portfolio.png",
    link: "https://sebastiang.netlify.app/",
  },
];

export const STATS: Stat[] = [
  { value: 4, suffix: "+", label: "años de experiencia" },
  { value: 5, suffix: "+", label: "proyectos entregados" },
  { value: 4, suffix: "+", label: "clientes satisfechos" },
  { value: 98, suffix: "%", label: "tasa de satisfacción" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Servicios",
    links: [
      { label: "Landing Pages", href: "#servicios" },
      { label: "Apps Full Stack", href: "#servicios" },
      { label: "Sistemas de Usuarios", href: "#servicios" },
      { label: "E-commerce", href: "#servicios" },
      { label: "APIs REST", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  // {
  //   title: "Legal",
  //   links: [
  //     { label: "Política de Privacidad", href: "#" },
  //     { label: "Términos y Condiciones", href: "#" },
  //     { label: "Cookies", href: "#" },
  //   ],
  // },
];

export const PROJECT_TYPES = [
  "Landing Page",
  "App Full Stack",
  "E-commerce",
  "Sistema de Usuarios",
  "API REST",
  "Consultoría",
  "Otro",
] as const;

export const CONTACT_INFO = {
  email: "sebastiangaleano.dev@gmail.com",
  whatsapp: "+54 9 11 73653340",
  location: "Buenos Aires, Argentina",
} as const;
