import { Home, BookOpen, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        <Link 
          to="/fornecedores" 
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            isActive('/fornecedores') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <BookOpen className="w-6 h-6" />
          <span className="text-xs font-medium">Fornecedores</span>
        </Link>
        
        <Link 
          to="/" 
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            isActive('/') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Início</span>
        </Link>
        
        <Link 
          to="/configuracoes" 
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            isActive('/configuracoes') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs font-medium">Config</span>
        </Link>
      </div>
    </nav>
  );
};
