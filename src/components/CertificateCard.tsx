import { Lock, ExternalLink, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificateCardProps {
  isUnlocked: boolean;
}

export const CertificateCard = ({ isUnlocked }: CertificateCardProps) => {
  const handleRequestCertificate = () => {
    // Replace with your WhatsApp group/contact link
    window.open("https://wa.me/YOUR_PHONE_NUMBER?text=Olá!%20Gostaria%20de%20solicitar%20meu%20certificado%20do%20curso.", "_blank");
  };

  return (
    <div className="bg-card p-4 rounded-3xl shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="border-2 border-dashed border-border rounded-xl p-4 flex items-center justify-center w-20 h-20">
            {!isUnlocked ? (
              <Lock className="w-8 h-8 text-muted-foreground" />
            ) : (
              <Trophy className="w-8 h-8 text-primary" />
            )}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-base font-bold text-card-foreground mb-1">Seu Certificado</h3>
          {!isUnlocked ? (
            <p className="text-xs text-muted-foreground">
              Complete todas as aulas para desbloquear
            </p>
          ) : (
            <p className="text-xs text-muted-foreground mb-2">
              Parabéns! Você completou o curso
            </p>
          )}
        </div>
        
        {isUnlocked && (
          <Button
            onClick={handleRequestCertificate}
            size="sm"
            className="bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold whitespace-nowrap"
          >
            Solicitar
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
};
