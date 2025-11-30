import { VturbVideoCard } from "@/components/VturbVideoCard";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const VideoLessonsSection = () => {
  const lessons = [
    {
      number: 1,
      title: "Materiais Básicos para Começar",
      description: "Nesta primeira aula, você conhecerá todos os materiais essenciais para trabalhar com resina. Aprenderá sobre tipos de resina, moldes, pigmentos e ferramentas indispensáveis para criar suas peças com segurança e qualidade.",
      vturbId: "vid-690402ced7ac47da567763ff",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/690402ced7ac47da567763ff/v4/player.js"
    },
    {
      number: 2,
      title: "Preparação do Ambiente e Segurança",
      description: "Descubra como preparar seu espaço de trabalho de forma segura e eficiente. Você aprenderá sobre ventilação, equipamentos de proteção e como organizar seus materiais para ter o máximo de produtividade em suas criações.",
      vturbId: "vid-6904030f8687c6f8d6f45d4d",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/6904030f8687c6f8d6f45d4d/v4/player.js"
    },
    {
      number: 3,
      title: "Primeira Peça: Porta-joias Simples",
      description: "Sua primeira criação prática! Nesta aula, você criará um lindo porta-joias seguindo o passo a passo detalhado. Aprenderá sobre medidas, mistura da resina e técnicas básicas de moldagem que serão fundamentais para todos os seus projetos.",
      vturbId: "vid-69040367f8f0e3d6e75517be",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/69040367f8f0e3d6e75517be/v4/player.js"
    },
    {
      number: 4,
      title: "Criando Efeitos Especiais: Marmorizado",
      description: "Eleve suas criações com técnicas avançadas! Nesta aula, você aprenderá a criar o famoso efeito marmorizado, que transforma qualquer peça em uma obra de arte única. Técnicas profissionais aplicadas de forma simples e didática.",
      vturbId: "vid-690402767674356e8b0e6196",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/690402767674356e8b0e6196/v4/player.js"
    },
    {
      number: 5,
      title: "Trabalhando com Inclusões e Objetos",
      description: "Adicione elementos especiais às suas peças! Aprenda como incluir flores secas, purpurinas, conchas e outros objetos decorativos em suas criações. Descubra os segredos para que tudo fique perfeitamente encapsulado e bonito.",
      vturbId: "vid-69040287bf9ab80e003e344a",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/69040287bf9ab80e003e344a/v4/player.js"
    },
    {
      number: 6,
      title: "Projeto Intermediário: Bandeja Decorativa",
      description: "Coloque em prática tudo que aprendeu criando uma elegante bandeja decorativa. Este projeto combina diferentes técnicas em uma peça mais elaborada profissionais, lixamento e polimento para um resultado impecável.",
      vturbId: "vid-690402bb71c90509ab78411d",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/690402bb71c90509ab78411d/v4/player.js"
    },
    {
      number: 7,
      title: "Técnicas de Acabamento e Polimento",
      description: "O segredo do acabamento profissional! Aprenda técnicas avançadas de lixamento, polimento e aplicação de vernizes. Você descobrirá como corrigir imperfeições e dar o brilho perfeito às suas criações.",
      vturbId: "vid-690402fcb6b436ae570ea110",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/690402fcb6b436ae570ea110/v4/player.js"
    },
    {
      number: 8,
      title: "Criando Moldes Personalizados",
      description: "Libere sua criatividade! Nesta aula avançada, você aprenderá a criar seus próprios moldes usando silicone. Poderá reproduzir objetos existentes ou criar formas totalmente originais para suas peças exclusivas.",
      vturbId: "vid-69040386b6b436ae570ea1b4",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/69040386b6b436ae570ea1b4/v4/player.js"
    },
    {
      number: 9,
      title: "Projeto Final: Peça Decorativa Complexa",
      description: "O grande final! Neste projeto final, você criará uma peça decorativa complexa que combina todas as técnicas aprendidas. Um verdadeiro desafio que mostrará como você evoluiu e está pronto para criar suas próprias obras de arte.",
      vturbId: "vid-690403347674356e8b0e624f",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/690403347674356e8b0e624f/v4/player.js"
    },
    {
      number: 10,
      title: "Dicas Avançadas e Troubleshooting",
      description: "Resolva qualquer problema! Nesta aula final, você aprenderá dicas avançadas para solucionar os problemas mais comuns, técnicas de reparo e como aprimorar ainda mais suas habilidades para se tornar uma verdadeira expert em resina.",
      vturbId: "vid-690402dff8f0e3d6e755171d",
      scriptSrc: "https://scripts.converteai.net/574be7f8-d9bf-450a-9bfb-e024758a6c13/players/690402dff8f0e3d6e755171d/v4/player.js"
    }
  ];

  return (
    <section id="video-lessons" className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Todas as Aulas do Curso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mergulhe no mundo encantador da resina com estas aulas completas e detalhadas. 
            Cada vídeo foi cuidadosamente preparado para que você aprenda no seu ritmo e com 
            total segurança.
          </p>
        </div>

        {/* Video Lessons */}
        <div className="space-y-6">
          {lessons.map((lesson) => (
            <VturbVideoCard
              key={lesson.number}
              lessonNumber={lesson.number}
              title={lesson.title}
              description={lesson.description}
              vturbId={lesson.vturbId}
              scriptSrc={lesson.scriptSrc}
              available={true}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-primary rounded-2xl text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronta para Começar sua Jornada?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Tem alguma dúvida sobre o curso? Fale comigo diretamente no WhatsApp!
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => window.open('https://api.whatsapp.com/', '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Conversar com a Maria
          </Button>
        </div>
      </div>
    </section>
  );
};