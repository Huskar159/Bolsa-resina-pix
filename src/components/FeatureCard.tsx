import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconColor: "pink" | "purple" | "yellow";
}

export const FeatureCard = ({ icon, title, description, iconColor }: FeatureCardProps) => {
  const iconColorClasses = {
    pink: "bg-pink-medium text-white",
    purple: "bg-purple-medium text-white", 
    yellow: "bg-yellow-accent text-foreground"
  };

  return (
    <Card className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1">
      <div className={`w-16 h-16 rounded-full ${iconColorClasses[iconColor]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};