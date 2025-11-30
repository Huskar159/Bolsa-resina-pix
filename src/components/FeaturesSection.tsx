import { FeatureCard } from "@/components/FeatureCard";
import { Heart, Star, Gift } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que você vai aprender
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Um curso completo para transformar sua criatividade em lindas peças de resina
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Materiais Básicos"
            description="Conheça todos os materiais necessários e como escolher os melhores produtos para suas criações"
            iconColor="pink"
          />
          
          <FeatureCard
            icon={<Star className="w-8 h-8" />}
            title="Técnicas Fundamentais"
            description="Domine as técnicas essenciais de mistura, moldagem e acabamento para resultados profissionais"
            iconColor="purple"
          />
          
          <FeatureCard
            icon={<Gift className="w-8 h-8" />}
            title="Projetos Práticos"
            description="Crie peças incríveis seguindo projetos passo a passo, desde porta-joias até objetos decorativos"
            iconColor="yellow"
          />
        </div>
      </div>
    </section>
  );
};