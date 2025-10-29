import { Star } from "lucide-react";
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
}

const testimonials: TestimonialData[] = [
  {
    name: "Roberta",
    location: "São Paulo - SP",
    text: "Com as estratégias de precificação e divulgação, **vendi** mais de 100 panetones e **faturei** mais de R$ 900,00 em 2 semanas",
    avatar: "R",
    image: robertaImg
  },
  {
    name: "Cláudia",
    location: "Vitória - ES",
    text: "As **receitas incríveis** são fáceis e de custo baixo. As dicas de vendas me ajudaram muito. Já tenho clientes fiéis para o próximo ano.",
    avatar: "C",
    image: claudiaImg
  },
  {
    name: "Helena",
    location: "Uberlândia, MG",
    text: "Nunca tinha vendido nada antes. Com esse método **vendi** 87 panetones e **lucrei** R$4.300,00",
    avatar: "H",
    image: helenaImg
  }
];

const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export function TestimonialsScreen({ onContinue }: TestimonialsScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="w-full max-w-2xl mx-auto px-6 py-8 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold" style={{ color: '#e67e22' }}>
              🔥 Essas mulheres começaram do zero e estão lucrando com Panetones Gourmet:
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground" data-testid="text-title">
              Veja o que outras alunas estão dizendo 👇
            </h1>
          </div>

          <div className="w-full space-y-4">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="shadow-md hover-elevate" 
                style={{ backgroundColor: '#FFF8E1', borderRadius: '12px' }}
                data-testid={`card-testimonial-${index}`}
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                      <AvatarImage 
                        src={testimonial.image} 
                        className="object-cover object-top"
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-foreground" data-testid={`text-name-${index}`}>
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-muted-foreground" data-testid={`text-location-${index}`}>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-0.5 mb-2 justify-center" data-testid={`stars-${index}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-sm text-foreground/90 leading-relaxed text-center" data-testid={`text-testimonial-${index}`}>
                    "{renderTextWithBold(testimonial.text)}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-base font-semibold text-foreground">
            Você pode ser a próxima história de sucesso 👇
          </p>

          <Button
            onClick={onContinue}
            size="lg"
            className="w-full max-w-md bg-success hover:bg-success/90 text-success-foreground animate-pulse-cta"
            data-testid="button-continue"
          >
            💚 Quero ter resultados como elas →
          </Button>
        </div>
      </div>
    </div>
  );
}
