// Course Progress Management with LocalStorage

const PROGRESS_KEY = 'resin_course_progress';
const QUIZ_KEY = 'resin_daily_quiz';

export interface CourseProgress {
  completedLessons: number[];
  totalLessons: number;
  lastQuizDate: string;
  quizCompleted: boolean;
}

export const initializeCourseProgress = (): CourseProgress => {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  
  const initial: CourseProgress = {
    completedLessons: [],
    totalLessons: 10,
    lastQuizDate: '',
    quizCompleted: false
  };
  
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(initial));
  return initial;
};

export const getCourseProgress = (): CourseProgress => {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return initializeCourseProgress();
};

export const completeLesson = (lessonNumber: number): CourseProgress => {
  const progress = getCourseProgress();
  
  if (!progress.completedLessons.includes(lessonNumber)) {
    progress.completedLessons.push(lessonNumber);
    progress.completedLessons.sort((a, b) => a - b);
  }
  
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  return progress;
};

export const isLessonUnlocked = (lessonNumber: number): boolean => {
  // First 3 beginner lessons are always unlocked
  if (lessonNumber <= 3) return true;
  
  const progress = getCourseProgress();
  return progress.completedLessons.includes(lessonNumber - 1);
};

export const isLessonCompleted = (lessonNumber: number): boolean => {
  const progress = getCourseProgress();
  return progress.completedLessons.includes(lessonNumber);
};

export const getProgressPercentage = (): number => {
  const progress = getCourseProgress();
  return Math.round((progress.completedLessons.length / progress.totalLessons) * 100);
};

// Daily Quiz Management
export interface QuizAnswer {
  question: string;
  options: string[];
  correctAnswer: number;
  userAnswer?: number;
}

export const getTodayQuiz = (): QuizAnswer[] => {
  const today = new Date().toDateString();
  const progress = getCourseProgress();
  
  // Check if quiz was already completed today
  if (progress.lastQuizDate === today && progress.quizCompleted) {
    return [];
  }
  
  // Generate quiz based on the day of the year to have different quizzes
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  
  const allQuizzes: QuizAnswer[][] = [
    [
      {
        question: "Qual é o tempo médio de cura da resina epóxi?",
        options: ["12 horas", "24 horas", "48 horas", "72 horas"],
        correctAnswer: 2
      },
      {
        question: "Qual equipamento de proteção é essencial ao trabalhar com resina?",
        options: ["Luvas", "Máscara", "Óculos de proteção", "Todos os anteriores"],
        correctAnswer: 3
      },
      {
        question: "Qual a proporção correta de mistura da resina epóxi?",
        options: ["1:1", "2:1", "3:1", "Varia conforme o fabricante"],
        correctAnswer: 3
      }
    ],
    [
      {
        question: "O que causa bolhas na resina?",
        options: ["Mistura muito rápida", "Temperatura baixa", "Umidade", "Todas as anteriores"],
        correctAnswer: 3
      },
      {
        question: "Para que serve o maçarico na técnica de resina?",
        options: ["Aquecer a resina", "Remover bolhas", "Acelerar a cura", "Misturar pigmentos"],
        correctAnswer: 1
      },
      {
        question: "Qual o melhor momento para desmoldar uma peça?",
        options: ["Após 12 horas", "Quando estiver completamente curada", "Logo após despejar", "Após 6 horas"],
        correctAnswer: 1
      }
    ],
    [
      {
        question: "O que é o efeito 'marmorizado' na resina?",
        options: ["Técnica de pintura", "Mistura parcial de cores", "Tipo de molde", "Acabamento final"],
        correctAnswer: 1
      },
      {
        question: "Qual tipo de pigmento é mais adequado para resina?",
        options: ["Tinta acrílica", "Pigmento específico para resina", "Aquarela", "Guache"],
        correctAnswer: 1
      },
      {
        question: "Como prevenir que flores secas escureçam na resina?",
        options: ["Usar flores artificiais", "Selar flores antes", "Adicionar conservante", "Não é possível prevenir"],
        correctAnswer: 1
      }
    ]
  ];
  
  const quizIndex = dayOfYear % allQuizzes.length;
  return allQuizzes[quizIndex];
};

export const submitQuiz = (answers: number[]): { score: number; total: number } => {
  const quiz = getTodayQuiz();
  let correct = 0;
  
  quiz.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correct++;
    }
  });
  
  const progress = getCourseProgress();
  progress.lastQuizDate = new Date().toDateString();
  progress.quizCompleted = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  
  return { score: correct, total: quiz.length };
};

export const canTakeQuizToday = (): boolean => {
  const today = new Date().toDateString();
  const progress = getCourseProgress();
  return progress.lastQuizDate !== today || !progress.quizCompleted;
};
