import { useNavigate } from "react-router-dom";
import { MapPin, ArrowRight, Target, TreePine } from "lucide-react";

const CenterSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-foreground relative overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Decorative map grid lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full border-t border-primary-foreground"
            style={{ top: `${i * 5}%` }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full border-l border-primary-foreground"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div>

      {/* Decorative circles (topographic feel) */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full border border-primary/10 opacity-30" />
      <div className="absolute top-[20%] left-[12%] w-48 h-48 rounded-full border border-primary/10 opacity-20" />
      <div className="absolute bottom-[10%] right-[15%] w-72 h-72 rounded-full border border-accent/10 opacity-20" />
      <div className="absolute bottom-[15%] right-[18%] w-52 h-52 rounded-full border border-accent/10 opacity-15" />

      {/* Dotted path connecting the two pins */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 30 45 Q 50 35 70 55"
          fill="none"
          stroke="hsl(85 40% 25% / 0.15)"
          strokeWidth="0.3"
          strokeDasharray="1 1"
        />
      </svg>

      {/* Title */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground tracking-tight mb-3">
          Elige tu destino
        </h1>
        <p className="text-primary-foreground/40 text-lg">
          Selecciona un centro para continuar
        </p>
      </div>

      {/* Map pins container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full max-w-4xl">
        {/* Pin: Paintball Terrassa */}
        <div
          onClick={() => navigate("/terrassa")}
          className="group cursor-pointer flex flex-col items-center"
        >
          {/* Pin marker */}
          <div className="relative mb-4">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-20 h-20 bg-gradient-tactical rounded-full flex items-center justify-center shadow-tactical group-hover:scale-110 transition-transform duration-300 ring-4 ring-primary/30 group-hover:ring-primary/60">
              <Target className="h-9 w-9 text-primary-foreground" />
            </div>
            {/* Pin tail */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-primary" />
          </div>

          {/* Card */}
          <div className="mt-4 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl px-8 py-6 text-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300 max-w-xs">
            <h2 className="text-2xl font-bold text-primary-foreground mb-2">
              Paintball Terrassa
            </h2>
            <p className="text-primary-foreground/50 text-sm mb-4">
              6 campos · Equipamiento profesional
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              Entrar <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          {/* Location label */}
          <span className="mt-3 text-primary-foreground/30 text-xs tracking-widest uppercase">
            Terrassa
          </span>
        </div>

        {/* Pin: Aventurcat */}
        <a
          href="https://aventurcat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer flex flex-col items-center"
        >
          {/* Pin marker */}
          <div className="relative mb-4">
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-20 h-20 bg-gradient-action rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 ring-4 ring-accent/30 group-hover:ring-accent/60">
              <TreePine className="h-9 w-9 text-accent-foreground" />
            </div>
            {/* Pin tail */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-accent" />
          </div>

          {/* Card */}
          <div className="mt-4 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl px-8 py-6 text-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 max-w-xs">
            <h2 className="text-2xl font-bold text-primary-foreground mb-2">
              Aventurcat
            </h2>
            <p className="text-primary-foreground/50 text-sm mb-4">
              Aventuras al aire libre · Naturaleza
            </p>
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              Visitar web <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          {/* Location label */}
          <span className="mt-3 text-primary-foreground/30 text-xs tracking-widest uppercase">
            Catalunya
          </span>
        </a>
      </div>

      {/* Footer hint */}
      <p className="relative z-10 mt-16 text-primary-foreground/20 text-xs">
        Haz clic en un pin para continuar
      </p>
    </div>
  );
};

export default CenterSelection;
