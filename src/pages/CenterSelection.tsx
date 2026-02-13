import { useNavigate } from "react-router-dom";
import { ArrowRight, Target, TreePine } from "lucide-react";
import { useState } from "react";
import campoBosque from "@/assets/campo-bosque-1.jpg";
import aventurcatAerial from "@/assets/aventurcat-aerial.jpg";

const CenterSelection = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Left: Paintball Terrassa */}
      <div
        onClick={() => navigate("/terrassa")}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        className={`relative cursor-pointer flex items-center justify-center transition-all duration-700 ease-in-out ${
          hovered === "left"
            ? "md:w-[65%] h-[65%] md:h-full"
            : hovered === "right"
            ? "md:w-[35%] h-[35%] md:h-full"
            : "md:w-1/2 h-1/2 md:h-full"
        }`}
      >
        <img
          src={campoBosque}
          alt="Paintball Terrassa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60 transition-colors duration-500" />
        <div
          className={`absolute inset-0 bg-primary/30 transition-opacity duration-500 ${
            hovered === "left" ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative z-10 text-center px-6">
          <div className="w-16 h-16 bg-gradient-tactical rounded-full flex items-center justify-center mx-auto mb-6 shadow-tactical">
            <Target className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-3 tracking-tight">
            Paintball Terrassa
          </h2>
          <p className="text-primary-foreground/60 text-sm md:text-base mb-6">
            3 campos · Equipamiento profesional
          </p>
          <span
            className={`inline-flex items-center gap-2 text-primary font-semibold text-lg transition-all duration-300 ${
              hovered === "left" ? "gap-4" : ""
            }`}
          >
            Entrar <ArrowRight className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Right: Aventurcat */}
      <a
        href="https://aventurcat.com"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        className={`relative cursor-pointer flex items-center justify-center transition-all duration-700 ease-in-out ${
          hovered === "right"
            ? "md:w-[65%] h-[65%] md:h-full"
            : hovered === "left"
            ? "md:w-[35%] h-[35%] md:h-full"
            : "md:w-1/2 h-1/2 md:h-full"
        }`}
      >
        <img
          src={aventurcatAerial}
          alt="Aventurcat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60 transition-colors duration-500" />
        <div
          className={`absolute inset-0 bg-accent/30 transition-opacity duration-500 ${
            hovered === "right" ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative z-10 text-center px-6">
          <div className="w-16 h-16 bg-gradient-action rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
            <TreePine className="h-8 w-8 text-accent-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-3 tracking-tight">
            Aventurcat
          </h2>
          <p className="text-primary-foreground/60 text-sm md:text-base mb-6">
            Aventuras al aire libre · Naturaleza
          </p>
          <span
            className={`inline-flex items-center gap-2 text-accent font-semibold text-lg transition-all duration-300 ${
              hovered === "right" ? "gap-4" : ""
            }`}
          >
            Visitar web <ArrowRight className="h-5 w-5" />
          </span>
        </div>
      </a>
    </div>
  );
};

export default CenterSelection;
