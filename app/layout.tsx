import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://devagency.com'),
  title: {
    default: 'DevAgency — Desarrollo Web Premium',
    template: '%s | DevAgency',
  },
  description:
    'Agencia de desarrollo web especializada en Next.js, React y TypeScript. Construimos landing pages, aplicaciones full stack y sistemas de usuarios que hacen crecer tu negocio.',
  keywords: [
    'desarrollo web',
    'Next.js',
    'React',
    'TypeScript',
    'landing page',
    'app full stack',
    'agencia web',
    'Buenos Aires',
  ],
  authors: [{ name: 'DevAgency' }],
  creator: 'DevAgency',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://devagency.com',
    siteName: 'DevAgency',
    title: 'DevAgency — Desarrollo Web Premium',
    description:
      'Construimos el software que tu negocio necesita. Del concepto al deploy, con código limpio y diseño premium.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevAgency — Agencia de Desarrollo Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevAgency — Desarrollo Web Premium',
    description: 'Construimos el software que tu negocio necesita.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#050d1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen font-body">{children}</body>
    </html>
  )
}
