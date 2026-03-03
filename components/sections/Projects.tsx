"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle, GradientText } from "@/components/ui/AnimatedText";
import { useInView } from "@/lib/hooks/useInView";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden",
        "hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]",
        "transition-all duration-500 cursor-pointer",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 120}ms` } as React.CSSProperties}
    >
      {/* Image / gradient placeholder */}
      <div
        className={cn(
          "relative h-48 overflow-hidden bg-gradient-to-br",
          project.gradient,
        )}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        {/* Hover reveal overlay */}
        <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 text-white font-medium text-sm bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="category">{project.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="font-heading font-bold text-white text-lg group-hover:text-cyan-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-steel-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Link */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
            Ver más <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      id="proyectos"
      ref={ref}
      className="relative py-24 lg:py-32"
      aria-label="Proyectos destacados"
    >
      {/* BG accent */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/3 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Proyectos"
          title={
            <>
              Trabajo que habla
              <br />
              <GradientText>por sí mismo</GradientText>
            </>
          }
          description="Cada proyecto es una solución única construida con atención al detalle, performance y experiencia de usuario excepcional."
          className={cn(
            "mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
