import { ReactNode } from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

interface ActivityCardProps {
  title: string;
  icon: ReactNode;
  color: "pink" | "blue" | "green";
  locked?: boolean;
  to: string;
}

export const ActivityCard = ({ title, icon, color, locked = false, to }: ActivityCardProps) => {
  const colorMap = {
    pink: "bg-app-pink text-destructive",
    blue: "bg-app-blue-light text-white",
    green: "bg-app-green text-green-800"
  };
  
  const CardContent = (
    <div className={`${colorMap[color]} p-6 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[140px] relative ${locked ? 'opacity-60' : 'hover:scale-105'}`}>
      {locked && (
        <div className="absolute top-2 right-2">
          <Lock className="w-5 h-5" />
        </div>
      )}
      <div className="text-4xl">
        {icon}
      </div>
      <h4 className="text-base font-bold text-center">{title}</h4>
    </div>
  );
  
  if (locked) {
    return CardContent;
  }
  
  return <Link to={to}>{CardContent}</Link>;
};
