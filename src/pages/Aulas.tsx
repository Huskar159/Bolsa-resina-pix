import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNav } from "@/components/layout/BottomNav";
import { Progress } from "@/components/ui/progress";
import { VturbVideoCard } from "@/components/VturbVideoCard";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProgressPercentage, isLessonUnlocked } from "@/utils/courseProgress";

const Aulas = () => {
  const [courseProgress, setCourseProgress] = useState(getProgressPercentage());
  
  const updateProgress = () => {
    setCourseProgress(getProgressPercentage());
  };
  
  const lessons = [
    {
      number: 1,
      title: "Como Começar Vendendo Bolsas de Resina",
      description: "",
      level: "Iniciante"
    },
    {
      number: 2,
      title: "Materiais que Precisa para Começar",
      description: "",
      level: "Iniciante"
    },
    {
      number: 3,
      title: "Fazendo uma Bolsa de Resina Básica",
      description: "",
      level: "Iniciante"
    },
    {
      number: 4,
      title: "Bolsa Brilhante de Resina",
      description: "",
      level: "Iniciante"
    }
  ];
  
  const getLevelColor = (level: string) => {
    switch(level) {
      case "Iniciante": return "bg-app-green text-green-800";
      case "Intermediário": return "bg-primary text-primary-foreground";
      case "Avançado": return "bg-destructive text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };
  
  // Group lessons by level
  const lessonsByLevel = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.level]) {
      acc[lesson.level] = [];
    }
    acc[lesson.level].push(lesson);
    return acc;
  }, {} as Record<string, typeof lessons>);

  // Filtra apenas o nível Iniciante
  const onlyBeginnerLessons = lessons.filter(lesson => lesson.level === "Iniciante");

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />
      <div className="px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold">Voltar</span>
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-2">Todas as Aulas</h1>
        <p className="text-muted-foreground mb-6">
          Aprenda no seu ritmo e domine a arte da resina
        </p>
        {/* Progress */}
        <div className="bg-card p-4 rounded-2xl shadow-md mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-card-foreground">Seu Progresso</span>
            <span className="text-sm font-bold text-primary">{courseProgress}%</span>
          </div>
          <Progress value={courseProgress} className="h-2" />
        </div>
        {/* Apenas as aulas iniciais */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${getLevelColor("Iniciante")}`}>Iniciante</span>
            <span className="text-sm text-muted-foreground">
              {onlyBeginnerLessons.length} {onlyBeginnerLessons.length === 1 ? 'aula' : 'aulas'}
            </span>
          </div>
          <div className="space-y-4">
            {onlyBeginnerLessons.map((lesson) => (
              <VturbVideoCard
                key={lesson.number}
                lessonNumber={lesson.number}
                title={lesson.title}
                description={lesson.description}
                available={true}
                locked={!isLessonUnlocked(lesson.number)}
                onComplete={updateProgress}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Aulas;
