import { Card } from "@/components/ui/card";
import { Play, CheckCircle } from "lucide-react";

interface VideoCardProps {
  lessonNumber: number;
  title: string;
  description: string;
  youtubeUrl: string;
  available?: boolean;
}

export const VideoCard = ({ lessonNumber, title, description, youtubeUrl, available = true }: VideoCardProps) => {
  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 mb-6">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              {lessonNumber}
            </div>
            <div className="text-sm text-primary font-semibold">AULA {lessonNumber}</div>
          </div>
          
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          
          {available && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Aula disponível para assistir</span>
            </div>
          )}
        </div>

        {/* Right Video */}
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Card>
  );
};