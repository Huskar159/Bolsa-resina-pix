import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNav } from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Trophy, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTodayQuiz, submitQuiz, canTakeQuizToday } from "@/utils/courseProgress";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quiz, setQuiz] = useState(getTodayQuiz());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ score: 0, total: 0 });
  const [canTakeQuiz, setCanTakeQuiz] = useState(canTakeQuizToday());

  useEffect(() => {
    if (!canTakeQuiz) {
      setShowResult(true);
    }
  }, [canTakeQuiz]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestion] === undefined) {
      toast({
        title: "Selecione uma resposta",
        description: "Por favor, escolha uma opção antes de continuar.",
        variant: "destructive"
      });
      return;
    }

    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const quizResult = submitQuiz(selectedAnswers);
      setResult(quizResult);
      setShowResult(true);
      
      if (quizResult.score === quizResult.total) {
        toast({
          title: "Parabéns! 🎉",
          description: "Você acertou todas as questões!",
        });
      }
    }
  };

  if (!canTakeQuiz && showResult) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <AppHeader />
        
        <div className="px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </Link>
          
          <div className="text-center py-20">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Quiz Completo!</h1>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Você já completou o quiz de hoje! Volte amanhã para um novo desafio.
            </p>
            <Button onClick={() => navigate('/')}>
              Voltar ao Início
            </Button>
          </div>
        </div>
        
        <BottomNav />
      </div>
    );
  }

  if (showResult) {
    const percentage = (result.score / result.total) * 100;
    
    return (
      <div className="min-h-screen bg-background pb-20">
        <AppHeader />
        
        <div className="px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </Link>
          
          <div className="text-center py-10">
            <Trophy className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Quiz Completo!</h1>
            
            <Card className="p-8 max-w-md mx-auto mb-6">
              <div className="text-6xl font-bold text-primary mb-2">
                {result.score}/{result.total}
              </div>
              <p className="text-xl text-muted-foreground mb-4">
                {percentage}% de acertos
              </p>
              
              <div className="text-left space-y-2 mt-6">
                <p className="font-semibold text-foreground">
                  {percentage === 100 && "Perfeito! Você domina o conteúdo! 🌟"}
                  {percentage >= 70 && percentage < 100 && "Muito bem! Continue estudando! 👏"}
                  {percentage < 70 && "Revise as aulas para melhorar! 📚"}
                </p>
              </div>
            </Card>
            
            <Button onClick={() => navigate('/')} size="lg">
              Voltar ao Início
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Novo quiz disponível amanhã!
            </p>
          </div>
        </div>
        
        <BottomNav />
      </div>
    );
  }

  if (quiz.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <AppHeader />
        
        <div className="px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </Link>
          
          <div className="text-center py-20">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Quiz Completo!</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Você já completou o quiz de hoje! Volte amanhã para um novo desafio.
            </p>
          </div>
        </div>
        
        <BottomNav />
      </div>
    );
  }

  const question = quiz[currentQuestion];

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />
      
      <div className="px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold">Voltar</span>
        </Link>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-foreground">Quiz Diário</h1>
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {currentQuestion + 1}/{quiz.length}
            </span>
          </div>
          
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold text-foreground mb-6">
              {question.question}
            </h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all border-2 ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary bg-primary/10 font-semibold'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-foreground">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>
          
          <Button 
            onClick={handleNext}
            size="lg"
            className="w-full"
          >
            {currentQuestion < quiz.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
          </Button>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Quiz;
