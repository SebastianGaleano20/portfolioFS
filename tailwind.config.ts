import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1a',
          900: '#0a1628',
          800: '#0d1f3c',
          700: '#112a52',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        steel: {
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Syne', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'IBM Plex Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient':
          'radial-gradient(at 40% 20%, hsla(199,100%,45%,0.05) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.04) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.02) 0px, transparent 50%)',
        'gradient-navy': 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(34,211,238,0.3)', opacity: '1' },
          '50%': { boxShadow: '0 0 30px rgba(34,211,238,0.6)', opacity: '0.8' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'counter-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(34,211,238,0.2)',
        'glow-md': '0 0 20px rgba(34,211,238,0.3)',
        'glow-lg': '0 0 40px rgba(34,211,238,0.4)',
        'inner-glow': 'inset 0 0 20px rgba(34,211,238,0.05)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
      },
      fontSize: {
        'display-xl': 'clamp(2.5rem, 5vw + 1rem, 5.5rem)',
        'display-lg': 'clamp(2rem, 4vw + 0.5rem, 4rem)',
        'section': 'clamp(1.75rem, 3vw + 0.5rem, 3rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
