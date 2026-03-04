import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-navy-950" role="contentinfo">
      {/* Cyan top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3 w-fit">
              <Image
                src="/assets/g2logo.jpeg"
                alt="G2Studio logo"
                width={52}
                height={52}
                className="h-13 w-auto object-contain"
              />
              <span className="font-heading font-bold text-white text-xl">
                G2<span className="text-cyan-400">Studio</span>
              </span>
            </a>
            <p className="text-steel-400 text-sm leading-relaxed max-w-xs">
              Construimos el software que tu negocio necesita. Del concepto al
              deploy, con código limpio y diseño premium.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((social) => {
                const Icon = ICON_MAP[social.icon];
                return Icon ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      "w-9 h-9 rounded-lg border border-white/10 bg-white/5",
                      "flex items-center justify-center text-steel-400",
                      "hover:text-cyan-400 hover:border-cyan-400/30 hover:shadow-glow-sm",
                      "transition-all duration-200",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-steel-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-sm">
            © {currentYear} DevAgency. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-steel-500 hover:text-white text-xs transition-colors"
            >
              Política de Privacidad
            </a>
            <span className="text-white/10">·</span>
            <a
              href="#"
              className="text-steel-500 hover:text-white text-xs transition-colors"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
