import bemVindaBanner from "@/assets/bem-vinda-banner.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { ExternalLink } from "lucide-react";

export const WelcomeBanner = () => {
  return (
    <div className="mx-4 my-6 space-y-4">
      {/* Banner Image */}
      <img 
        src={bemVindaBanner} 
        alt="Bem-vinda! Maria Artes" 
        className="w-full h-auto rounded-3xl shadow-xl"
      />
      
      {/* WhatsApp Group Button */}
      <a 
        href="https://chat.whatsapp.com/IFoQyeRW5ad7JknFIoNBv0?mode=hqrt2" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between bg-[#25D366] hover:bg-[#1fb855] text-white py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        {/* WhatsApp Icon */}
        <div className="flex items-center gap-3">
          <img 
            src={whatsappIcon} 
            alt="WhatsApp" 
            className="w-8 h-8"
          />
          <span className="font-medium text-base">
            Junte-se ao Grupo de Alunas
          </span>
        </div>
        
        {/* External Link Icon */}
        <ExternalLink className="w-5 h-5 opacity-80" />
      </a>
    </div>
  );
};
