import { Button } from "@/components/ui/button";
import { MessageCircle, Clock } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Comece sua jornada na arte com resina
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Para realizar o pagamento do curso, basta falar comigo no WhatsApp clicando no botão abaixo e enviar o PIX de R$ 25,00
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://chat.whatsapp.com/IFoQyeRW5ad7JknFIoNBv0?mode=hqrt2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500 text-white font-bold text-lg shadow-md hover:bg-green-600 transition-colors"
          >
            <img src="/src/assets/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
            Junte-se ao Grupo de Alunas
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
          </a>
          
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-5 h-5 mr-2" />
            <span>Pagamento via PIX - R$ 25,00</span>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          ✅ Acesso imediato • ✅ Suporte exclusivo • ✅ Acesso vitalício
        </div>
      </div>
    </section>
  );
};