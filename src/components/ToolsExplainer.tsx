import { useState } from "react";
import { Info, ExternalLink, ChevronRight } from "lucide-react";

interface Tool {
  name: string;
  category: string;
  description: string;
  whyItMatters: string;
  examples: string[];
  link: string;
  color: "cyan" | "green" | "purple" | "orange";
}

const tools: Tool[] = [
  {
    name: "ESLint",
    category: "Linting",
    description: "Analizzatore statico che trova problemi nel codice JavaScript/TypeScript.",
    whyItMatters: "Cattura bug, anti-pattern e violazioni delle convenzioni prima che il codice venga eseguito. Può auto-correggere molti problemi.",
    examples: [
      "Variabili dichiarate ma mai usate",
      "Import non utilizzati",
      "Funzioni async senza await",
      "Uso di == invece di ===",
    ],
    link: "https://eslint.org",
    color: "green",
  },
  {
    name: "Prettier",
    category: "Formatting",
    description: "Formattatore di codice opinionato che supporta molti linguaggi.",
    whyItMatters: "Elimina completamente le discussioni sullo stile del codice. Tutti scrivono codice che sembra uguale.",
    examples: [
      "Indentazione consistente (2 o 4 spazi)",
      "Spaziatura uniforme",
      "Line length massima",
      "Trailing commas standardizzate",
    ],
    link: "https://prettier.io",
    color: "purple",
  },
  {
    name: "Vite",
    category: "Build & Dev Server",
    description: "Build tool ultra-veloce con Hot Module Replacement istantaneo.",
    whyItMatters: "Il server di sviluppo parte in millisecondi. Le modifiche appaiono nel browser quasi istantaneamente.",
    examples: [
      "HMR in <50ms tipicamente",
      "Server start in <300ms",
      "Build ottimizzate per produzione",
      "Supporto TypeScript nativo",
    ],
    link: "https://vitejs.dev",
    color: "orange",
  },
  {
    name: "TypeScript",
    category: "Type Checking",
    description: "Superset di JavaScript che aggiunge tipizzazione statica.",
    whyItMatters: "Gli errori di tipo vengono catturati durante la scrittura del codice, non a runtime. Migliora l'autocompletamento e la documentazione.",
    examples: [
      "Errori di tipo prima dell'esecuzione",
      "IntelliSense avanzato",
      "Refactoring sicuro",
      "Documentazione inline",
    ],
    link: "https://www.typescriptlang.org",
    color: "cyan",
  },
];

const colorClasses = {
  cyan: {
    bg: "bg-glow-cyan/10",
    border: "border-glow-cyan/50",
    text: "text-glow-cyan",
    hover: "hover:bg-glow-cyan/20 hover:glow-cyan",
  },
  green: {
    bg: "bg-glow-green/10",
    border: "border-glow-green/50",
    text: "text-glow-green",
    hover: "hover:bg-glow-green/20 hover:glow-green",
  },
  purple: {
    bg: "bg-glow-purple/10",
    border: "border-glow-purple/50",
    text: "text-glow-purple",
    hover: "hover:bg-glow-purple/20 hover:glow-purple",
  },
  orange: {
    bg: "bg-glow-orange/10",
    border: "border-glow-orange/50",
    text: "text-glow-orange",
    hover: "hover:bg-glow-orange/20 hover:glow-orange",
  },
};

export const ToolsExplainer = () => {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glow-green/10 border border-glow-green/30 mb-6">
            <Info className="w-4 h-4 text-glow-green" />
            <span className="text-sm text-glow-green">Strumenti Essenziali</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Gli </span>
            <span className="text-glow-green glow-text-green">Strumenti</span>
            <span className="text-foreground"> della DX Moderna</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Questi sono gli strumenti fondamentali che ogni progetto moderno dovrebbe avere. 
            Clicca su ciascuno per scoprire perché è importante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => {
            const colors = colorClasses[tool.color];
            const isExpanded = expandedTool === tool.name;

            return (
              <div
                key={tool.name}
                onClick={() => setExpandedTool(isExpanded ? null : tool.name)}
                className={`
                  p-6 rounded-xl border cursor-pointer transition-all duration-500
                  ${colors.bg} ${colors.border} ${colors.hover}
                  ${isExpanded ? "ring-2 ring-offset-2 ring-offset-background" : ""}
                  animate-fade-in-up
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>
                      {tool.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1">{tool.name}</h3>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 ${colors.text} transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} 
                  />
                </div>

                <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>

                {/* Expanded content */}
                <div className={`
                  overflow-hidden transition-all duration-500
                  ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}>
                  <div className="pt-4 border-t border-border/50 space-y-4">
                    {/* Why it matters */}
                    <div>
                      <h4 className={`text-sm font-semibold ${colors.text} mb-2`}>
                        Perché è importante
                      </h4>
                      <p className="text-sm text-muted-foreground">{tool.whyItMatters}</p>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className={`text-sm font-semibold ${colors.text} mb-2`}>
                        Cosa fa in pratica
                      </h4>
                      <ul className="space-y-1">
                        {tool.examples.map((example, i) => (
                          <li 
                            key={i} 
                            className="text-sm text-muted-foreground flex items-center gap-2 animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.text}`} />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Link */}
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`
                        inline-flex items-center gap-2 text-sm ${colors.text} 
                        hover:underline transition-all duration-300
                      `}
                    >
                      Documentazione ufficiale
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
