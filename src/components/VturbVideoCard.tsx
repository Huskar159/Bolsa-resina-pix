import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Lock, CheckCircle2 } from "lucide-react";
import { completeLesson, isLessonCompleted } from "@/utils/courseProgress";
import { useToast } from "@/hooks/use-toast";

interface VturbVideoCardProps {
  lessonNumber: number;
  title: string;
  description: string;
  vturbId: string;
  scriptSrc: string;
  available?: boolean;
  locked?: boolean;
  onComplete?: () => void;
}

export const VturbVideoCard = ({ 
  lessonNumber, 
  title, 
  description, 
  vturbId, 
  scriptSrc,
  available = true,
  locked = false,
  onComplete
}: VturbVideoCardProps) => {
  const { toast } = useToast();
  const [completed, setCompleted] = useState(isLessonCompleted(lessonNumber));
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (locked) return;
    
    const scriptId = `vturb-script-${vturbId}`;
    
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = scriptSrc;
      script.async = true;
      script.type = "text/javascript";
      
      script.onload = () => {
        setScriptLoaded(true);
      };
      
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, [scriptSrc, vturbId, locked]);

  const handleComplete = () => {
    completeLesson(lessonNumber);
    setCompleted(true);
    
    toast({
      title: "Aula concluída! 🎉",
      description: "Continue para a próxima aula!",
    });
    
    if (onComplete) {
      onComplete();
    }
  };

  if (locked) {
    return (
      <Card className="overflow-hidden shadow-md relative">
        <div className="absolute inset-0 bg-muted/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-xl">
          <div className="text-center p-6">
            <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm font-semibold text-muted-foreground">
              Complete a aula anterior para desbloquear
            </p>
          </div>
        </div>
        
        <div className="p-6 opacity-50">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-muted text-muted-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {lessonNumber}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-card-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden bg-muted h-48"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
            completed ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground'
          }`}>
            {completed ? <CheckCircle2 className="w-6 h-6" /> : lessonNumber}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-card-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        
        <div 
          ref={videoContainerRef}
          className="rounded-xl overflow-hidden bg-muted mb-4 min-h-[200px] flex items-center justify-center"
          dangerouslySetInnerHTML={{
            __html:
              lessonNumber === 1
                ? `<iframe width="100%" height="315" style="max-width:560px; display:block; margin:0 auto;" src="https://www.youtube.com/embed/NMpDNHFet18?si=L6h6_3NhXYc8xVrh" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`
                : lessonNumber === 2
                ? `<iframe width="100%" height="315" style="max-width:560px; display:block; margin:0 auto;" src="https://www.youtube.com/embed/fNsdfj3uAk4?si=w8ZVlyFDMMBIJ9uD" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`
                : lessonNumber === 3
                ? `<iframe width="100%" height="315" style="max-width:560px; display:block; margin:0 auto;" src="https://www.youtube.com/embed/4tVa8d3sQHY?si=ccX-yOCV4L0D2qmS" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`
                : lessonNumber === 4
                ? `<iframe width="100%" height="315" style="max-width:560px; display:block; margin:0 auto;" src="https://www.youtube.com/embed/z1nYtLcM6L8?si=eBQYsoW_tkTQzXVH" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`
                : `<vturb-smartplayer id="${vturbId}" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`
          }}
        />
        
        {!completed && (
          <Button 
            onClick={handleComplete}
            className="w-full"
            size="lg"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Concluir Aula
          </Button>
        )}
        
        {completed && (
          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 text-center">
            <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold text-green-700">Aula Concluída!</p>
          </div>
        )}
      </div>
    </Card>
  );
};
