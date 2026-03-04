"use client";

import { ArrowRight, ChevronDown, Code2, Terminal, Braces } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText, AnimatedText } from "@/components/ui/AnimatedText";

function CodeSnippet() {
  return (
    <div className="relative animate-float">
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 blur-xl" />
      <div className="relative rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-md p-6 shadow-card min-w-[320px]">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-steel-500 text-xs font-mono ml-2">
            app/page.tsx
          </span>
        </div>
        <pre className="text-xs font-mono leading-relaxed">
          <code>
            <span className="text-violet-400">export default</span>
            <span className="text-white"> function </span>
            <span className="text-cyan-400">YourProduct</span>
            <span className="text-white">{"() {"}</span>
            {"\n"}
            <span className="text-white">{"  "}</span>
            <span className="text-violet-400">return</span>
            <span className="text-white"> (</span>
            {"\n"}
            <span className="text-white">{"    <"}</span>
            <span className="text-cyan-300">Solution</span>
            {"\n"}
            <span className="text-white">{"      "}</span>
            <span className="text-green-400">quality</span>
            <span className="text-white">={"{100}"}</span>
            {"\n"}
            <span className="text-white">{"      "}</span>
            <span className="text-green-400">scalable</span>
            <span className="text-white">={"{true}"}</span>
            {"\n"}
            <span className="text-white">{"      "}</span>
            <span className="text-green-400">onTime</span>
            <span className="text-white">={"{true}"}</span>
            {"\n"}
            <span className="text-white">{"    />"}</span>
            {"\n"}
            <span className="text-white">{"  )"}</span>
            {"\n"}
            <span className="text-white">{"}"}</span>
          </code>
        </pre>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-3 -right-3 bg-navy-800 border border-cyan-400/30 rounded-full px-3 py-1 text-xs text-cyan-400 font-mono animate-glow-pulse">
        ✓ deployed
      </div>
      <div className="absolute -bottom-3 -left-3 bg-navy-800 border border-green-500/30 rounded-full px-3 py-1 text-xs text-green-400 font-mono">
        {">"} tests passing
      </div>
    </div>
  );
}

function GridBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-navy-950/50 to-navy-950" />
      {/* Cyan glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-400/5 blur-[100px] rounded-full" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-4"
      aria-label="Sección principal"
    >
      <GridBackground />

      {/* Floating tech icons */}
      <div
        className="absolute left-8 top-1/3 hidden xl:block opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Code2 className="w-8 h-8 text-cyan-400" />
      </div>
      <div
        className="absolute right-12 top-1/4 hidden xl:block opacity-15 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Terminal className="w-6 h-6 text-blue-400" />
      </div>
      <div
        className="absolute left-16 bottom-1/3 hidden xl:block opacity-15 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <Braces className="w-7 h-7 text-violet-400" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28">
          {/* Left: copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-glow-pulse" />
              Agencia de Desarrollo Web Premium
            </div>

            {/* Headline */}
            <h1 className="font-heading text-display-xl font-bold text-white leading-[1.05]">
              <AnimatedText delay={200}>Construimos el </AnimatedText>
              <br />
              <AnimatedText delay={350}>
                <GradientText>software</GradientText>
              </AnimatedText>
              <AnimatedText delay={350}> que tu</AnimatedText>
              <br />
              <AnimatedText delay={500}>negocio </AnimatedText>
              <GradientText>
                <AnimatedText delay={650}>necesita</AnimatedText>
              </GradientText>
            </h1>

            {/* Sub */}
            <p
              className="text-steel-400 text-lg lg:text-xl leading-relaxed max-w-lg opacity-0 animate-slide-up"
              style={{ animationDelay: "750ms", animationFillMode: "forwards" }}
            >
              Del diseño al deploy. Creamos aplicaciones web modernas, landing
              pages de alto impacto y sistemas a medida con tecnología de
              vanguardia.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
            >
              <Button
                variant="primary"
                size="lg"
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#servicios")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Servicios
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="#proyectos"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#proyectos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Proyectos
              </Button>
            </div>

            {/* Trust indicators */}
            <div
              className="flex items-center gap-6 pt-2 opacity-0 animate-fade-in"
              style={{
                animationDelay: "1100ms",
                animationFillMode: "forwards",
              }}
            >
              {[
                ["50+", "Proyectos"],
                ["3+", "Años"],
                ["30+", "Clientes"],
              ].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <div className="font-heading font-bold text-white text-xl">
                    {val}
                  </div>
                  <div className="text-steel-500 text-xs">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: code snippet */}
          <div
            className="flex justify-center lg:justify-end opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            <CodeSnippet />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel-500 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
