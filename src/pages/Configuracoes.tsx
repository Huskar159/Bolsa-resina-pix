import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNav } from "@/components/layout/BottomNav";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Configuracoes = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />
      
      <div className="px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold">Voltar</span>
        </Link>
        
        <h1 className="text-3xl font-bold text-foreground mb-6">Configurações</h1>
        
        <div className="space-y-4">
          <div className="bg-card p-5 rounded-2xl shadow-md">
            <h3 className="font-bold text-card-foreground mb-2">Sobre o Curso</h3>
            <p className="text-sm text-muted-foreground">
              Curso completo de Resina do Zero com Maria Artes. Aprenda todas as técnicas necessárias para criar peças incríveis!
            </p>
          </div>
          {/* Bloco de suporte removido conforme solicitado */}
          <div className="bg-card p-5 rounded-2xl shadow-md">
            <h3 className="font-bold text-card-foreground mb-2">Versão</h3>
            <p className="text-sm text-muted-foreground">v1.0.0</p>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Configuracoes;
