"use client";

import { useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle, GradientText } from "@/components/ui/AnimatedText";
import { useInView } from "@/lib/hooks/useInView";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[0];
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.modalImages ?? (project.image ? [project.image] : []);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-navy-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-lg leading-tight pr-4">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="text-steel-400 hover:text-white transition-colors flex-shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image carousel */}
        {images.length > 0 && (
          <div className="relative aspect-video bg-navy-900">
            <Image
              src={images[currentIndex]}
              alt={`${project.title} - imagen ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        i === currentIndex ? "bg-cyan-400" : "bg-white/30 hover:bg-white/60",
                      )}
                      aria-label={`Ir a imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors whitespace-nowrap"
            >
              Ver proyecto <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
  onOpenModal,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  isVisible: boolean;
  onOpenModal: () => void;
}) {
  const hasModal = project.modalImages && project.modalImages.length > 0;

  return (
    <article
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden",
        "hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]",
        "transition-all duration-500",
        hasModal ? "cursor-pointer" : "cursor-default",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 120}ms` } as React.CSSProperties}
      onClick={hasModal ? onOpenModal : undefined}
    >
      {/* Image / gradient placeholder */}
      <div
        className={cn(
          "relative h-48 overflow-hidden bg-gradient-to-br",
          project.gradient,
        )}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
        {/* Grid pattern overlay */}
        {!project.image && (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        )}
        {/* Hover reveal overlay */}
        <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {hasModal ? (
            <span className="flex items-center gap-2 text-white font-medium text-sm bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
              Ver imágenes
            </span>
          ) : (
            <span
              className="flex items-center gap-2 text-white font-medium text-sm bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          )}
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

        {/* Link / action */}
        <div className="pt-2">
          {hasModal ? (
            <span className="inline-flex items-center gap-1 text-sm text-cyan-400 group-hover:text-cyan-300 font-medium transition-colors">
              Ver galería <ChevronRight className="w-4 h-4" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Ver más <ArrowUpRight className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });
  const [activeProject, setActiveProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);

  return (
    <>
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
                onOpenModal={() => setActiveProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
