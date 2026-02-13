import { useNavigate } from "react-router-dom";
import { ArrowRight, Target, TreePine } from "lucide-react";
import campoCastillo from "@/assets/campo-castillo-1.jpg";
import campoBosque from "@/assets/campo-bosque-1.jpg";

const CenterSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-foreground flex flex-col items-center justify-center px-4 py-12 gap-8">
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight text-center mb-4">
        Elige tu aventura
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Paintball Terrassa */}
        <div
          onClick={() => navigate("/terrassa")}
          className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer min-h-[340px] md:min-h-[480px] shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <img
            src={campoCastillo}
            alt="Paintball Terrassa"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

          <div className="relative z-10 flex flex-col items-center justify-end h-full p-8 pb-10 text-center">
            <div className="w-14 h-14 bg-gradient-tactical rounded-full flex items-center justify-center mb-4 shadow-tactical">
              <Target className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground mb-2 tracking-tight">
              Paintball Terrassa
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-5">
              6 campos · Equipamiento profesional
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-lg group-hover:gap-4 transition-all duration-300">
              Entrar <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>

        {/* Aventurcat */}
        <a
          href="https://aventurcat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer min-h-[340px] md:min-h-[480px] shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <img
            src={campoBosque}
            alt="Aventurcat"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

          <div className="relative z-10 flex flex-col items-center justify-end h-full p-8 pb-10 text-center">
            <div className="w-14 h-14 bg-gradient-action rounded-full flex items-center justify-center mb-4 shadow-glow">
              <TreePine className="h-7 w-7 text-accent-foreground" />
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground mb-2 tracking-tight">
              Aventurcat
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-5">
              Aventuras al aire libre · Naturaleza
            </p>
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-lg group-hover:gap-4 transition-all duration-300">
              Visitar web <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CenterSelection;
