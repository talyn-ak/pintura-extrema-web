import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/paintball-hero.jpg";
import campoBosque from "@/assets/campo-bosque-1.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Paintball Terrassa */}
      <div
        className="relative flex-1 min-h-[50vh] md:min-h-screen flex items-center justify-center cursor-pointer group overflow-hidden"
        onClick={() => navigate("/terrassa")}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            PAINTBALL
            <span className="block text-secondary">TERRASSA</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-md mx-auto mb-6">
            6 campos únicos · Adrenalina garantizada
          </p>
          <span className="inline-block border-2 border-secondary text-secondary px-6 py-3 rounded-md font-semibold text-lg group-hover:bg-secondary group-hover:text-white transition-all duration-300">
            Entrar
          </span>
        </div>
      </div>

      {/* Aventurcat */}
      <div
        className="relative flex-1 min-h-[50vh] md:min-h-screen flex items-center justify-center cursor-pointer group overflow-hidden"
        onClick={() => window.open("https://aventurcat.com", "_blank")}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${campoBosque})` }}
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            AVENTURCAT
            <span className="block text-secondary">PAINTBALL & GAMES</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-md mx-auto mb-6">
            Paintball · Aventura · Diversión
          </p>
          <span className="inline-block border-2 border-secondary text-secondary px-6 py-3 rounded-md font-semibold text-lg group-hover:bg-secondary group-hover:text-white transition-all duration-300">
            Visitar Web
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
