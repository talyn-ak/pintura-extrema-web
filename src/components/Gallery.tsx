import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images for gallery - in real app, these would be actual paintball photos
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      alt: "Campo de paintball en bosque",
      title: "Campo Forestal"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Jugadores en acción",
      title: "Acción Intensa"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      alt: "Equipo de paintball",
      title: "Equipo Profesional"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      alt: "Obstáculos de speedball",
      title: "Campo Speedball"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Celebración del equipo",
      title: "Victoria del Equipo"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      alt: "Instalaciones del centro",
      title: "Nuestras Instalaciones"
    }
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