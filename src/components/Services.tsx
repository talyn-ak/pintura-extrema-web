import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Plus, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Partida Básica",
      description: "Para jugadores con buena puntería y que saben que gastan poco. Aproximadamente unas 2 partidas. Aproximadamente entre 1,30 y 2 horas.",
      features: ["100 bolas incluidas", "Equipos de 5 vs 5 o más", "6 campos: banderas, trincheras, asalto a la colina, Battle royale, Columnas y CQB poblado"],
      price: "17€",
      whatsappText: "Hola! Me interesa la Partida Básica por 17€ con 100 bolas"
    },
    {
      icon: Target,
      title: "Partida Estándar", 
      description: "La opción más popular. Duración aproximada: 2-3h (explicación, equipación y partidas). Unas 4 partidas aprox.",
      features: ["200 bolas incluidas", "Equipos de 5 vs 5 o más", "6 campos: banderas, trincheras, asalto a la colina, Battle royale, Columnas y CQB poblado"],
      price: "22€",
      whatsappText: "Hola! Me interesa la Partida Estándar por 22€ con 200 bolas"
    },
    {
      icon: Plus,
      title: "Partida Premium",
      description: "Para los más guerreros. Alrededor de las 3 horas. Unas 5-6 partidas aprox. ",
      features: ["400 bolas incluidas", "Equipos de 5 vs 5 o más", "6 campos: banderas, trincheras, asalto a la colina, Battle royale, Columnas y CQB poblado"],
      price: "30€",
      originalPrice: "32€",
      whatsappText: "Hola! Me interesa la Partida Premium por 32€ con 400 bolas"
    }
  ];

  const extras = [
    { name: "Recarga 100 bolas", price: "7€" },
    { name: "Recarga 2000 bolas", price: "100€" },
    { name: "Estrena máscara nueva", price: "5€" }
  ];

  const materialIncluido = [
    "Mono de camuflaje con protector de cuello",
    "Chaleco protector",
    "Máscara thermal antivaho",
    "Marcadora de paintball aire comprimido",
    "Aire comprimido ilimitado",
    "Guantes",
    "Seguro RC y Médico",
    "Bolas de paintball contratadas"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-tactical transition-all duration-300 animate-fade-in flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-tactical rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <ul className="space-y-2 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Target className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t mt-auto">
                  <div className="mb-3">
                    {service.originalPrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-muted-foreground line-through">{service.originalPrice}</span>
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    )}
                  </div>
                  <Button 
                    variant="tactical" 
                    className="w-full mb-2"
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Reservar Partida
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extras Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Extras Disponibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {extras.map((extra, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-tactical transition-all duration-300">
                <CardContent className="p-0 flex flex-col justify-between h-full">
                  <div className="text-lg font-semibold text-foreground mb-4">{extra.name}</div>
                  <div className="text-xl font-bold text-primary">{extra.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Material Incluido */}
        <Card className="max-w-4xl mx-auto hover:shadow-tactical transition-all duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-tactical rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl text-foreground">Material Incluido</CardTitle>
            <CardDescription>
              Todo lo necesario para disfrutar de una experiencia completa y segura
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {materialIncluido.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;