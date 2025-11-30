import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import mariaArtes from "@/assets/maria-artes.jpeg";

export const HeroSection = () => {
  const scrollToVideoLessons = () => {
    const element = document.getElementById('video-lessons');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-card">
            <img 
              src={mariaArtes} 
              alt="Maria Artes - Especialista em Resina" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
            ❤️
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Curso de Resina do Zero
        </h1>
        <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
          com Maria Artes
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Aprenda passo a passo como criar peças encantadoras com resina, mesmo começando do zero!
        </p>

        {/* CTA Button */}
        <Button variant="hero" size="lg" onClick={scrollToVideoLessons}>
          <PlayCircle className="w-6 h-6 mr-2" />
          Ver Todas as Aulas
        </Button>
      </div>
    </section>
  );
};