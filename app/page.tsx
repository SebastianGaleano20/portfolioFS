import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'

// Lazy-load below-the-fold sections for better initial load performance
const Services = dynamic(() => import('@/components/sections/Services').then((m) => m.Services), {
  loading: () => <div className="py-32 flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" /></div>,
})

const Projects = dynamic(() => import('@/components/sections/Projects').then((m) => m.Projects), {
  loading: () => <div className="py-32" />,
})

const About = dynamic(() => import('@/components/sections/About').then((m) => m.About), {
  loading: () => <div className="py-32" />,
})

const Contact = dynamic(() => import('@/components/sections/Contact').then((m) => m.Contact), {
  loading: () => <div className="py-32" />,
})

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
