import { useState } from "react";
import { Code, Search, Paintbrush, Zap, Check, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Scrivi Codice",
    description: "Inizi a scrivere codice nel tuo editor preferito. L'autocompletamento e i type hints ti guidano.",
    color: "cyan" as const,
    details: [
      "IntelliSense suggerisce metodi e proprietà",
      "TypeScript segnala errori di tipo in tempo reale",
      "Snippets accelerano pattern comuni",
    ],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Linting Automatico",
    description: "Il linter analizza il codice mentre scrivi, evidenziando problemi potenziali.",
    color: "green" as const,
    details: [
      "Variabili inutilizzate vengono segnalate",
      "Pattern pericolosi vengono identificati",
      "Best practices vengono suggerite",
    ],
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: "Formatting al Salvataggio",
    description: "Quando salvi, Prettier formatta automaticamente il codice secondo le convenzioni del team.",
    color: "purple" as const,
    details: [
      "Indentazione uniforme",
      "Spaziatura consistente",
      "Stile di quote standardizzato",
    ],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Hot Reload Istantaneo",
    description: "Le modifiche appaiono nel browser in millisecondi, senza perdere lo stato dell'app.",
    color: "orange" as const,
    details: [
      "Nessun refresh manuale necessario",
      "Stato dell'applicazione preservato",
      "Feedback visivo immediato",
    ],
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: "Codice Pronto",
    description: "Il codice è pulito, consistente e pronto per il commit. Zero tempo perso in formattazione manuale.",
    color: "cyan" as const,
    details: [
      "Git hooks verificano la qualità",
      "CI/CD automatizza i test",
      "Deploy sicuro e veloce",
    ],
  },
];

const colorClasses = {
  cyan: {
    bg: "bg-glow-cyan/10",
    border: "border-glow-cyan/50",
    text: "text-glow-cyan",
    glow: "glow-cyan",
    line: "bg-glow-cyan",
  },
  green: {
    bg: "bg-glow-green/10",
    border: "border-glow-green/50",
    text: "text-glow-green",
    glow: "glow-green",
    line: "bg-glow-green",
  },
  purple: {
    bg: "bg-glow-purple/10",
    border: "border-glow-purple/50",
    text: "text-glow-purple",
    glow: "glow-purple",
    line: "bg-glow-purple",
  },
  orange: {
    bg: "bg-glow-orange/10",
    border: "border-glow-orange/50",
    text: "text-glow-orange",
    glow: "glow-orange",
    line: "bg-glow-orange",
  },
};

export const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Animated line in background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Il </span>
            <span className="text-glow-orange glow-text-orange">Flusso</span>
            <span className="text-foreground"> di Lavoro Ideale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ecco come appare un ciclo di sviluppo con una DX ben configurata. 
            Clicca su ogni step per esplorare i dettagli.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color];
            const isActive = activeStep === index;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.title} className="relative">
                {/* Connector line */}
                {!isLast && (
                  <div className="absolute left-8 top-full w-0.5 h-6 flex items-center justify-center z-0">
                    <div className={`w-full h-full ${colors.line}/30`} />
                    <ArrowDown className={`absolute w-4 h-4 ${colors.text} animate-bounce`} />
                  </div>
                )}

                {/* Step card */}
                <div
                  onClick={() => setActiveStep(isActive ? null : index)}
                  className={`
                    relative flex items-start gap-4 p-6 rounded-xl cursor-pointer
                    border transition-all duration-500 transform
                    ${isActive ? `${colors.bg} ${colors.border} ${colors.glow} scale-102` : "bg-card/50 border-border hover:border-muted-foreground"}
                    ${isActive ? "" : "hover:translate-x-2"}
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step number */}
                  <div className={`
                    absolute -left-3 top-6 w-6 h-6 rounded-full flex items-center justify-center
                    text-xs font-bold ${colors.bg} ${colors.text} border ${colors.border}
                    ${isActive ? "animate-ping-once" : ""}
                  `}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`
                    p-3 rounded-lg ${colors.bg} ${colors.text} shrink-0
                    transition-transform duration-300
                    ${isActive ? "scale-110 animate-pulse" : ""}
                  `}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-1 ${isActive ? colors.text : "text-foreground"}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>

                    {/* Expandable details */}
                    <div className={`
                      overflow-hidden transition-all duration-500
                      ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                    `}>
                      <ul className="space-y-2 pt-2 border-t border-border/50">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <Check className={`w-4 h-4 ${colors.text} shrink-0`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className={`
                    text-xs text-muted-foreground transition-transform duration-300
                    ${isActive ? "rotate-180" : ""}
                  `}>
                    ▼
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
