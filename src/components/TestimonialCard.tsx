import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  testimonial: string;
}

export const TestimonialCard = ({ name, testimonial }: TestimonialCardProps) => {
  return (
    <Card className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1">
      <div className="mb-6">
        <div className="text-primary text-4xl mb-4">"</div>
        <p className="text-muted-foreground leading-relaxed italic">{testimonial}</p>
      </div>
      <div className="border-t border-border pt-4">
        <h4 className="font-bold text-foreground">{name}</h4>
      </div>
    </Card>
  );
};