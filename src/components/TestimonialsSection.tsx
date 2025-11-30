import { TestimonialCard } from "@/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que as alunas falam
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Histórias reais de transformação e sucesso
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Maria Silva"
            testimonial="Nunca pensei que conseguiria fazer peças tão bonitas! O curso da Maria me ensinou desde o básico até técnicas avançadas. Agora tenho até uma renda extra!"
          />
          
          <TestimonialCard
            name="Ana Costa"
            testimonial="As explicações são super claras e didáticas. Comecei do zero absoluto e hoje faço encomendas para toda a família e amigos. Recomendo muito!"
          />
          
          <TestimonialCard
            name="Carla Mendes"
            testimonial="O curso superou minhas expectativas! Além de aprender técnicas incríveis, consegui desenvolver meu próprio estilo. O grupo do WhatsApp é um diferencial incrível!"
          />
        </div>
      </div>
    </section>
  );
};