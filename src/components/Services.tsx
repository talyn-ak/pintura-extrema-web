import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, Trophy, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Partidas de Equipo",
      description: "Forma tu equipo y vive la estrategia militar más emocionante.",
      features: ["5v5 o 10v10", "Múltiples escenarios", "Duración: 15-30 min"],
      price: "Desde 25€"
    },
    {
      icon: Zap,
      title: "Speedball",
      description: "Acción rápida e intensa en campos simétricos con obstáculos inflables.",
      features: ["3v3 rápido", "Torneos semanales", "Duración: 10 min"],
      price: "Desde 20€"
    },
    {
      icon: Trophy,
      title: "Torneos",
      description: "Compite en nuestros torneos oficiales y demuestra tu habilidad.",
      features: ["Premios garantizados", "Ranking oficial", "Equipos mixtos"],
      price: "Desde 50€"
    },
    {
      icon: Target,
      title: "Entrenamiento",
      description: "Mejora tu precisión y táctica con nuestros cursos especializados.",
      features: ["Instructor personal", "Técnicas avanzadas", "Certificado"],
      price: "Desde 40€"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Modalidades de Juego
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elige tu estilo de combate y vive una experiencia única. 
            Desde partidas casuales hasta torneos profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-tactical transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-tactical rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Target className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="text-2xl font-bold text-primary mb-3">{service.price}</div>
                  <Button variant="tactical" className="w-full">
                    Reservar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;