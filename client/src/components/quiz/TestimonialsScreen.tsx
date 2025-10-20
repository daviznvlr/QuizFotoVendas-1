import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import robertaImg from "@assets/roberta_1760985169436.jpg";
import claudiaImg from "@assets/25399800_1760985173803.jpg";
import helenaImg from "@assets/helena_1760985175662.jpg";

interface TestimonialData {
  name: string;
  location: string;
  text: string;
  avatar: string;
  image: string;
}

interface TestimonialsScreenProps {
  onContinue: () => void;
  onBack?: () => void;
}

const testimonials: TestimonialData[] = [
  {
    name: "Roberta",
    location: "São Paulo - SP",
    text: "Com as estratégias de precificação e divulgação, vendi mais de 100 panetones e faturei mais de R$ 900,00 em 2 semanas",
    avatar: "R",
    image: robertaImg
  },
  {
    name: "Cláudia",
    location: "Vitória - ES",
    text: "As receitas são fáceis e de custo baixo. As dicas de vendas me ajudaram muito. Já tenho clientes fiéis para o próximo ano.",
    avatar: "C",
    image: claudiaImg
  },
  {
    name: "Helena",
    location: "Uberlândia, MG",
    text: "Nunca tinha vendido nada antes. Com esse método vendi 87 panetones e faturei R$4.300,00",
    avatar: "H",
    image: helenaImg
  }
];

export function TestimonialsScreen({ onContinue, onBack }: TestimonialsScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="w-full max-w-2xl mx-auto px-6 py-8 flex-1 flex flex-col">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover-elevate active-elevate-2 p-2 rounded-md transition-colors self-start"
            data-testid="button-back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground" data-testid="text-title">
              Depoimentos
            </h1>
            <p className="text-muted-foreground" data-testid="text-subtitle">
              Veja o que nossos alunos que aplicaram o plano estão dizendo
            </p>
          </div>

          <div className="w-full space-y-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage 
                        src={testimonial.image} 
                        className="object-cover object-top"
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground" data-testid={`text-name-${index}`}>
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-location-${index}`}>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-foreground leading-relaxed" data-testid={`text-testimonial-${index}`}>
                    {testimonial.text}
                  </p>
                  
                  <div className="flex gap-1" data-testid={`stars-${index}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className="w-full max-w-md bg-success hover:bg-success/90 text-success-foreground animate-pulse-cta"
            data-testid="button-continue"
          >
            CONTINUAR
          </Button>
        </div>
      </div>
    </div>
  );
}
