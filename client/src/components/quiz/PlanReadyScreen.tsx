import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import panettone1 from "@assets/image_1761361627623.png";
import panettone2 from "@assets/image_1761361640511.png";
import panettone3 from "@assets/image_1761361662929.png";
import panettone4 from "@assets/image_1761361693596.png";

interface PlanReadyScreenProps {
  onContinue: () => void;
}

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "35 receitas exclusivas de panetones gourmet",
    description: ""
  },
  {
    title: "Guia de precificação para lucro imediato",
    description: ""
  },
  {
    title: "Estratégias simples de divulgação e vendas",
    description: ""
  },
  {
    title: "Baixo investimento inicial (menos que o preço de um panetone!)",
    description: ""
  }
];

const panettoneImages = [panettone1, panettone2, panettone3, panettone4];

export function PlanReadyScreen({ onContinue }: PlanReadyScreenProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="w-full max-w-2xl mx-auto px-6 py-8 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-xs relative">
            <div className="overflow-hidden rounded-lg" ref={emblaRef}>
              <div className="flex">
                {panettoneImages.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <img
                      src={image}
                      alt={`Panetone Gourmet ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                      data-testid={`img-carousel-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover-elevate active-elevate-2"
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover-elevate active-elevate-2"
              data-testid="button-carousel-next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center space-y-2">
            <div className="inline-block bg-accent/50 px-4 py-1 rounded-full mb-2">
              <p className="text-xs font-semibold text-foreground">
                ✅ Plano gerado com base nas suas respostas
              </p>
            </div>
            <h1 className="text-2xl font-bold text-foreground" data-testid="text-title">
              🧾 Seu plano está pronto!
            </h1>
            <p className="text-base text-foreground font-semibold" data-testid="text-subtitle">
              Veja o que você vai receber no seu plano completo de Panetones Gourmet:
            </p>
          </div>

          <div className="w-full space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3" data-testid={`benefit-${index}`}>
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-foreground font-semibold">
                    {benefit.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className="w-full max-w-md bg-success hover:bg-success/90 text-success-foreground animate-pulse-cta"
            data-testid="button-continue"
          >
            💚 Ver plano completo →
          </Button>
        </div>
      </div>
    </div>
  );
}
