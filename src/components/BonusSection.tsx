import { FeatureCard } from "@/components/FeatureCard";
import { Users, MapPin } from "lucide-react";

export const BonusSection = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bônus Exclusivos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Além do curso completo, você recebe materiais extras para acelerar seu aprendizado
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon={<MapPin className="w-8 h-8" />}
            title="Lista de Fornecedores"
            description="Receba uma lista completa dos melhores fornecedores de materiais com preços especiais para alunas do curso"
            iconColor="purple"
          />
          
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Grupo VIP no WhatsApp"
            description="Participe do grupo exclusivo para tirar dúvidas, compartilhar criações e receber dicas extras da Maria"
            iconColor="pink"
          />
        </div>
      </div>
    </section>
  );
};