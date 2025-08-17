import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import galeria4 from "@/assets/galeria-4.jpg";
import galeria5 from "@/assets/galeria-5.jpg";
import galeria6 from "@/assets/galeria-6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, src: galeria1, alt: "Trincheras - Defensa del pasadizo", title: "Campo Castillo" },
    { id: 2, src: galeria2, alt: "Jugadores camuflados en el bosque", title: "Defensas del Castillo" },
    { id: 3, src: galeria3, alt: "Campo de neumáticos bajo la nieve", title: "Campo de Trincheras" },
    { id: 4, src: galeria4, alt: "Trincheras y bandera en día despejado", title: "Combate Trincheras" },
    { id: 5, src: galeria5, alt: "Campo con parapetos de madera", title: "Campo Bosque" },
    { id: 6, src: galeria6, alt: "Estructura elevada de madera", title: "Torre Castillo" }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Galería de Acción
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestros campos, instalaciones y vive la emoción a través de imágenes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group relative overflow-hidden cursor-pointer hover:shadow-tactical transition-all duration-300 animate-fade-in"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for image preview */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Vista ampliada"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-secondary"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;