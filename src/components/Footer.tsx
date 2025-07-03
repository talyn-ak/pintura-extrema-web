import { Target, Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">TacticalZone</span>
            </div>
            <p className="text-primary-foreground/80">
              El mejor centro de paintball de Madrid. Vive la emoción, 
              siente la adrenalina y disfruta con amigos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-primary-foreground/60 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-primary-foreground/60 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-primary-foreground/60 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Partidas de Equipo</li>
              <li className="text-primary-foreground/80">Speedball</li>
              <li className="text-primary-foreground/80">Torneos</li>
              <li className="text-primary-foreground/80">Entrenamiento</li>
              <li className="text-primary-foreground/80">Eventos Corporativos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  Carretera de Colmenar Km 15<br />
                  28049 Madrid
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">+34 600 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">info@tacticalzone.es</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 TacticalZone. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;