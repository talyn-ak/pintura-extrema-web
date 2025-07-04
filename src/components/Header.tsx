import { Button } from "@/components/ui/button";
import { Target, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Target className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">Paintball Terrassa</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
            Galería
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>620 386 828</span>
          </div>
          <Button variant="tactical" size="sm">
            Reservar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;