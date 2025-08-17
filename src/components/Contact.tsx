import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MapPin, Phone, Clock, Mail, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    modalidad: '',
    jugadores: '',
    comentarios: ''
  });

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [dateOption, setDateOption] = useState('especifica');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.modalidad) {
      alert('Por favor, selecciona una modalidad antes de enviar la reserva.');
      return;
    }

    const message = `🎯 *RESERVA PAINTBALL TERRASSA*

📋 *Datos del Cliente:*
• Nombre: ${formData.nombre}
• Teléfono: ${formData.telefono}
• Email: ${formData.email}

🎮 *Detalles de la Reserva:*
• Fecha: ${formData.fecha}
• Modalidad: ${formData.modalidad}
• Número de jugadores: ${formData.jugadores}

💬 *Comentarios:*
${formData.comentarios || 'Sin comentarios adicionales'}

¡Hola! Me gustaría reservar una partida con estos datos. ¿Podrían confirmarme la disponibilidad?`;

    const whatsappUrl = `https://wa.me/34620386828?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
          {/* Reservation Form - First on mobile */}
          <Card className="order-1 lg:order-2 animate-slide-in-right hover:shadow-tactical transition-all duration-300">
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
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
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
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Fecha
                  </label>
                  <select 
                    value={dateOption}
                    onChange={(e) => {
                      setDateOption(e.target.value);
                      if (e.target.value === 'concretar') {
                        setFormData(prev => ({ ...prev, fecha: 'Fecha a concretar' }));
                        setSelectedDate(undefined);
                      }
                    }}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent mb-2"
                  >
                    <option value="especifica">Seleccionar fecha específica</option>
                    <option value="concretar">Fecha a concretar</option>
                  </select>
                  
                  {dateOption === 'especifica' && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "dd/MM/yyyy") : <span>Seleccionar fecha</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            setFormData(prev => ({ 
                              ...prev, 
                              fecha: date ? format(date, "dd/MM/yyyy") : ''
                            }));
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Modalidad
                  </label>
                  <select 
                    name="modalidad"
                    value={formData.modalidad}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecciona una modalidad</option>
                    <option value="Partida Básica (17€)">Partida Básica (17€)</option>
                    <option value="Partida Estándar (22€)">Partida Estándar (22€)</option>
                    <option value="Partida Premium (32€)">Partida Premium (32€)</option>
                  </select>
                </div>
              </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Número de Jugadores (mín. 10, máx. 30) - Otra cantidad preguntar
                  </label>
                  <input
                    type="number"
                    name="jugadores"
                    value={formData.jugadores}
                    onChange={handleInputChange}
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
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Detalles adicionales o preguntas..."
                ></textarea>
              </div>

              <Button 
                variant="action" 
                className="w-full" 
                size="lg"
                onClick={handleSubmit}
              >
                <CalendarIcon className="h-5 w-5 mr-2" />
                Enviar Reserva
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information - Second on mobile */}
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;