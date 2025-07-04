import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Star } from "lucide-react";
import heroImage from "@/assets/paintball-hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            PAINTBALL
            <span className="block text-secondary">TERRASSA</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Vive la emoción del paintball en nuestros 3 campos únicos: 
            Trincheras, Castillo y Bosque. Adrenalina garantizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button variant="action" size="hero" className="group">
              Reservar Ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="hero" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Ver Modalidades
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-white/80">Jugadores Activos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-white/80">Campos Únicos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-sm text-white/80">Valoración Media</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;