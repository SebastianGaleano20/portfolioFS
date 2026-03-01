# DevAgency — Landing Page

Landing page premium para agencia de desarrollo web construida con Next.js 14, TypeScript y TailwindCSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: TailwindCSS v3 con design system personalizado
- **Formularios**: React Hook Form + Zod
- **Iconos**: Lucide React
- **Linting**: ESLint (next/core-web-vitals)

## Estructura del proyecto

```
/
├── app/
│   ├── globals.css          # Estilos globales + Tailwind
│   ├── layout.tsx           # Root layout con metadata SEO
│   └── page.tsx             # Página principal (lazy-loaded sections)
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navegación sticky con blur backdrop
│   │   └── Footer.tsx       # Footer con columnas y redes sociales
│   ├── sections/
│   │   ├── Hero.tsx         # Hero con code snippet animado
│   │   ├── Services.tsx     # Grid de servicios con glassmorphism
│   │   ├── Projects.tsx     # Portfolio grid con hover effects
│   │   ├── About.tsx        # Stats animados + equipo
│   │   └── Contact.tsx      # Formulario validado con Zod
│   └── ui/
│       ├── Button.tsx       # Variantes: primary / secondary / ghost
│       ├── Card.tsx         # Glassmorphism + glow hover
│       ├── Badge.tsx        # Etiquetas tech / category / accent
│       └── AnimatedText.tsx # GradientText, AnimatedText, SectionTitle
├── lib/
│   ├── constants.ts         # Todo el contenido de la app
│   ├── utils.ts             # cn() helper
│   └── hooks/
│       ├── useInView.ts     # Intersection Observer para animaciones
│       ├── useCountUp.ts    # Contador animado para stats
│       └── useScrolled.ts   # Detecta scroll para header sticky
├── types/
│   └── index.ts             # Tipos TypeScript globales
├── tailwind.config.ts       # Design system completo
└── next.config.mjs          # Config Next.js
```

## Setup

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Iniciar en producción
npm start

# Lint
npm run lint
```

## Secciones

| Sección   | Descripción                                                          |
|-----------|----------------------------------------------------------------------|
| Hero      | Headline principal, CTA doble, code snippet flotante animado         |
| Servicios | 6 cards glassmorphism (Landing Pages, Full Stack, Auth, E-com, API) |
| Proyectos | 6 project cards con gradient placeholder y tech stack badges         |
| Nosotros  | Stats animados con countUp + equipo + valores                        |
| Contacto  | Formulario Zod/RHF + info de contacto lateral                        |

## Design System

- **Colores base**: `navy-950` (#050d1a) → `navy-800` (#0d1f3c)
- **Acento**: `cyan-400` (#22d3ee) con efectos glow
- **Animaciones**: float, glow-pulse, slide-up, fade-in, shimmer
- **Glassmorphism**: `bg-white/5 backdrop-blur-md border border-white/10`
- **Responsive**: mobile 375px · tablet 768px · desktop 1280px+