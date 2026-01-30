import { AnimatedCounter } from "./AnimatedCounter";
import { ArrowRight, Check, X, Lightbulb, AlertTriangle, Smile } from "lucide-react";

const comparisons = [
  {
    bad: "Configurazione manuale per ogni progetto",
    good: "Template preconfigurati con best practices",
  },
  {
    bad: "Errori scoperti in produzione",
    good: "Errori catturati durante lo sviluppo",
  },
  {
    bad: "Code review focalizzate sullo stile",
    good: "Code review focalizzate sulla logica",
  },
  {
    bad: "Build che richiedono minuti",
    good: "Hot reload in millisecondi",
  },
];

const stats = [
  { value: 40, suffix: "%", label: "Tempo risparmiato in debugging" },
  { value: 70, suffix: "%", label: "Bug catturati prima della produzione" },
  { value: 2, suffix: "x", label: "Velocità di onboarding" },
  { value: 90, suffix: "%", label: "Riduzione discussioni code style" },
];

export const WhatIsDX = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glow-purple/10 border border-glow-purple/30 mb-6 animate-bounce-slow">
            <Lightbulb className="w-5 h-5 text-glow-purple" />
            <span className="text-sm text-glow-purple">Approfondimento</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Cos'è la </span>
            <span className="text-glow-cyan glow-text-cyan animate-pulse-glow">Developer Experience</span>
            <span className="text-foreground">?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La <strong className="text-foreground">Developer Experience (DX)</strong> è l'insieme di tutti gli aspetti 
            che influenzano come uno sviluppatore percepisce e interagisce con strumenti, processi e ambienti di sviluppo. 
            Una DX eccellente rende lo sviluppo <span className="text-glow-green">fluido</span>, 
            <span className="text-glow-purple"> produttivo</span> e <span className="text-glow-orange">piacevole</span>.
          </p>
        </div>

        {/* Stats grid with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:glow-cyan group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-glow-cyan glow-text-cyan mb-2 group-hover:animate-number-pop">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Before/After comparison with slide animations */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="text-destructive">Senza DX</span>
            <ArrowRight className="inline-block mx-4 text-muted-foreground" />
            <span className="text-glow-green">Con DX</span>
          </h3>

          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-4 animate-slide-in-stagger"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Bad */}
                <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 group hover:bg-destructive/20 transition-all duration-300">
                  <X className="w-5 h-5 text-destructive shrink-0 group-hover:animate-shake" />
                  <span className="text-sm text-muted-foreground">{item.bad}</span>
                </div>
                
                {/* Good */}
                <div className="flex items-center gap-3 p-4 rounded-lg bg-glow-green/10 border border-glow-green/30 group hover:bg-glow-green/20 hover:glow-green transition-all duration-300">
                  <Check className="w-5 h-5 text-glow-green shrink-0 group-hover:animate-bounce" />
                  <span className="text-sm text-muted-foreground">{item.good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key insight with typewriter effect */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border max-w-3xl mx-auto relative overflow-hidden group hover:border-glow-cyan/50 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-orange animate-gradient-x" />
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-glow-cyan/10 shrink-0 group-hover:animate-pulse">
              <Smile className="w-8 h-8 text-glow-cyan" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Il principio fondamentale
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                La DX non riguarda solo la <em>velocità</em>. Riguarda la{" "}
                <span className="text-glow-cyan font-medium">qualità della vita lavorativa</span>.
                Quando gli strumenti funzionano bene, i developer sono più felici, fanno meno errori, 
                e producono codice migliore. È un investimento che si ripaga in{" "}
                <span className="text-glow-green font-medium">retention</span>,{" "}
                <span className="text-glow-purple font-medium">qualità</span> e{" "}
                <span className="text-glow-orange font-medium">velocità di delivery</span>.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-glow-cyan/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
};
