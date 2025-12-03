import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNav } from "@/components/layout/BottomNav";
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { MenuCard } from "@/components/MenuCard";
import { ActivityCard } from "@/components/ActivityCard";
import { CertificateCard } from "@/components/CertificateCard";
import { PixSection } from "@/components/PixSection";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, ShoppingBag, Trophy, Diamond, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { getProgressPercentage } from "@/utils/courseProgress";

const Home = () => {
  const [courseProgress, setCourseProgress] = useState(getProgressPercentage());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCourseProgress(getProgressPercentage());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />
      
      <WelcomeBanner />
      {/* Removido bloco de progresso do curso e certificado */}
      {/* Main Menu */}
      <div className="px-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Menu principal</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <MenuCard 
            title="Fornecedores"
            icon={<ShoppingBag />}
            color="yellow"
            to="/fornecedores"
          />
          <MenuCard 
            title="Aulas"
            icon={<Lightbulb />}
            color="blue"
            to="/aulas"
          />
        </div>
      </div>
      
      {/* Daily Activities */}
      <div className="px-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Atividades Diárias</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <ActivityCard 
            title="Super Quiz"
            icon={<Trophy />}
            color="pink"
            locked={false}
            to="/quiz"
          />
          <ActivityCard 
            title="Missão Especial"
            icon={<Diamond />}
            color="blue"
            locked={courseProgress < 100}
            to="/missao"
          />
          <ActivityCard 
            title="Aventura"
            icon={<Rocket />}
            color="green"
            locked={courseProgress < 100}
            to="/aventura"
          />
        </div>
        {courseProgress < 100 && (
          <p className="text-xs text-center text-muted-foreground mt-3">
            ⚡ Complete as aulas para desbloquear mais atividades!
          </p>
        )}
      </div>

      {/* Botão do grupo de WhatsApp removido conforme solicitado */}
      
      {/* PIX Section */}
      <PixSection />

      <BottomNav />
    </div>
  );
};

export default Home;
