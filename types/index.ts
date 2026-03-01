export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  gradient: string
  category: string
  link?: string
}

export interface TeamMember {
  name: string
  role: string
  initials: string
  color: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface FooterColumn {
  title: string
  links: Array<{ label: string; href: string }>
}
