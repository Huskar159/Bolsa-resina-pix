import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface MenuCardProps {
  title: string;
  icon: ReactNode;
  color: "yellow" | "blue";
  to: string;
}

export const MenuCard = ({ title, icon, color, to }: MenuCardProps) => {
  const bgColor = color === "yellow" ? "bg-primary" : "bg-secondary";
  const textColor = color === "yellow" ? "text-primary-foreground" : "text-secondary-foreground";
  
  return (
    <Link 
      to={to}
      className={`${bgColor} ${textColor} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4 min-h-[180px] hover:scale-105`}
    >
      <div className="text-6xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </Link>
  );
};
