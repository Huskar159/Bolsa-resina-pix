import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export const PixSection = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "45248866000154";

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-4 mb-8">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            🎁 POR FAVOR, FAÇA O PIX E GANHE UM PRESENTE!
          </h3>
          <p className="text-sm text-muted-foreground">
            Faça o PIX simbólico de <span className="font-semibold">R$19,90 / R$24,90</span>
          </p>
        </div>

        {/* PIX Amount Card */}
        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4 border border-purple-200 dark:border-purple-800">
          <div className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400">
            R$19,90
          </div>
        </div>

        {/* PIX Key Section */}
        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4 border border-purple-200 dark:border-purple-800">
          <p className="text-xs text-muted-foreground mb-2">Chave PIX:</p>
          <p className="font-mono text-sm font-semibold text-foreground break-all">
            {pixKey}
          </p>
        </div>

        {/* Copy Button */}
        <Button
          onClick={copyPixKey}
          variant="default"
          className="w-full mb-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Toque aqui pra copiar
            </>
          )}
        </Button>

        {/* Name Section */}
        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800 text-center">
          <p className="text-xs text-muted-foreground mb-1">Nome:</p>
          <p className="font-semibold text-foreground">Victor Alves de Almeida</p>
        </div>
      </div>
    </div>
  );
};
