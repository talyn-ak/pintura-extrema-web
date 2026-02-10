import { useNavigate } from "react-router-dom";
import { Target, TreePine, ArrowRight } from "lucide-react";
import paintballHero from "@/assets/paintball-hero.jpg";

const CenterSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Paintball Terrassa */}
      <div
        className="group relative flex-1 flex items-center justify-center cursor-pointer overflow-hidden min-h-[50vh] md:min-h-screen transition-all duration-500 hover:flex-[1.2]"
        onClick={() => navigate("/terrassa")}
      >
        <img
          src={paintballHero}
          alt="Paintball Terrassa"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80 group-hover:from-primary/80 group-hover:via-primary/60 group-hover:to-primary/90 transition-all duration-500" />

        <div className="relative z-10 text-center px-8 py-12 max-w-md">
          <Target className="h-16 w-16 text-primary-foreground mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4 tracking-tight">
            Paintball Terrassa
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            6 campos de juego · Equipamiento profesional · La mejor experiencia de paintball
          </p>
          <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-lg group-hover:gap-4 transition-all duration-300 shadow-tactical">
            Entrar <ArrowRight className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Aventurcat */}
      <a
        href="https://aventurcat.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex-1 flex items-center justify-center cursor-pointer overflow-hidden min-h-[50vh] md:min-h-screen transition-all duration-500 hover:flex-[1.2]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-accent/70 to-secondary/95 group-hover:from-secondary/95 group-hover:via-accent/80 group-hover:to-secondary transition-all duration-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent-foreground/30 rounded-full" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-accent-foreground/20 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-accent-foreground/20 rounded-full" />
        </div>

        <div className="relative z-10 text-center px-8 py-12 max-w-md">
          <TreePine className="h-16 w-16 text-accent-foreground mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-accent-foreground mb-4 tracking-tight">
            Aventurcat
          </h2>
          <p className="text-accent-foreground/80 text-lg mb-8">
            Aventuras al aire libre · Actividades de naturaleza · Experiencias únicas
          </p>
          <span className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-semibold text-lg group-hover:gap-4 transition-all duration-300">
            Visitar web <ArrowRight className="h-5 w-5" />
          </span>
        </div>
      </a>
    </div>
  );
};

export default CenterSelection;
