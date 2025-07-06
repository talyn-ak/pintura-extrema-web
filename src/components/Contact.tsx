import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para la acción? Reserva tu partida o contáctanos para más información.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="hover:shadow-tactical transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-6 w-6 text-primary" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Carrer de Castellar, 08223 Terrassa, Barcelona<br />
                  España
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://maps.google.com/maps?q=Terrassa+Barcelona+Paintball', '_blank')}
                >
                  Ver en Google Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-tactical transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Atención telefónica:</span>
                  <span className="font-semibold">10:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">WhatsApp:</span>
                  <span className="font-semibold">10:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Partidas:</span>
                  <span className="font-semibold">Consultar disponibilidad</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="hover:shadow-tactical transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg mb-2">Teléfono</CardTitle>
                  <p className="text-muted-foreground">620 386 828</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-tactical transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg mb-2">Email</CardTitle>
                  <p className="text-muted-foreground">info@paintballterrassa.com</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reservation Form */}
          <Card className="animate-slide-in-right hover:shadow-tactical transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Reserva tu Partida</CardTitle>
              <CardDescription>
                Completa el formulario y te contactaremos para confirmar tu reserva.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Fecha
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Modalidad
                  </label>
                  <select className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Partida Básica (17€)</option>
                    <option>Partida Estándar (22€)</option>
                    <option>Partida Premium (32€)</option>
                  </select>
                </div>
              </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Número de Jugadores (mín. 10, máx. 30)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="30"
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ej: 16"
                  />
                </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Comentarios
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Detalles adicionales o preguntas..."
                ></textarea>
              </div>

              <Button variant="action" className="w-full" size="lg">
                <Calendar className="h-5 w-5 mr-2" />
                Enviar Reserva
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;