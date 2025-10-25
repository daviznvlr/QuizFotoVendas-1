import { useState, useEffect } from "react";
import { Clock, Frown, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import beforeImage from "@assets/image_1760984396828.png";
import afterImage from "@assets/image_1761362670399.png";

interface FinalCheckoutScreenProps {
  onCheckout: () => void;
}

export function FinalCheckoutScreen({ onCheckout }: FinalCheckoutScreenProps) {
  const [timeLeft, setTimeLeft] = useState(480);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-yellow-300 text-center py-3 px-6">
        <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-2" data-testid="text-timer">
          <Clock className="w-4 h-4" />
          {formatTime(timeLeft)} Oferta por tempo limitado!
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto px-6 py-8 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md grid grid-cols-2 gap-3">
            <Card className="bg-card" data-testid="card-before">
              <CardContent className="p-3 space-y-2">
                <h3 className="text-center text-xs font-bold text-foreground" data-testid="text-before-title">
                  ANTES
                </h3>
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden">
                  <img 
                    src={beforeImage} 
                    alt="Antes" 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <p className="text-center text-xs text-foreground" data-testid="text-before-desc">
                  Você deixando passar mais uma oportunidade de renda extra
                </p>
                <div className="flex items-center gap-1 text-muted-foreground text-xs justify-center">
                  <div className="flex-1 h-1.5 bg-muted rounded-full">
                    <div className="h-full w-1/4 bg-muted-foreground rounded-full"></div>
                  </div>
                  <Frown className="w-3 h-3" />
                </div>
                <p className="text-center text-xs text-muted-foreground" data-testid="text-before-footer">
                  Vai ficar na mesma situação...
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-green-500 border-2" data-testid="card-after">
              <CardContent className="p-3 space-y-2">
                <h3 className="text-center text-xs font-bold text-foreground" data-testid="text-after-title">
                  DEPOIS
                </h3>
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden">
                  <img 
                    src={afterImage} 
                    alt="Depois" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-xs text-foreground" data-testid="text-after-desc">
                  Você estará preparada e faturando alto com panetones gourmet
                </p>
                <div className="flex items-center gap-1 text-green-600 text-xs justify-center">
                  <div className="flex-1 h-1.5 bg-muted rounded-full">
                    <div className="h-full w-full bg-green-500 rounded-full"></div>
                  </div>
                  <Smile className="w-3 h-3" />
                </div>
                <p className="text-center text-xs text-green-600 font-medium" data-testid="text-after-footer">
                  Depois que você disser sim a essa oportunidade!
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full max-w-md bg-card border-2" data-testid="card-offer">
            <CardContent className="p-6 space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-foreground mb-4" data-testid="text-offer-title">
                  Oferta exclusiva válida só hoje ({getCurrentDate()})
                </h2>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground line-through" data-testid="text-price-old">
                      De R$97,00
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-300 px-6 py-3 rounded-md">
                  <p className="text-xs text-foreground">Por apenas</p>
                  <p className="text-3xl font-bold text-green-600" data-testid="text-price-new">
                    R$ 39,90
                  </p>
                </div>
              </div>

              <Button
                onClick={onCheckout}
                size="lg"
                className="w-full bg-success hover:bg-success/90 text-success-foreground animate-pulse-cta"
                data-testid="button-checkout"
              >
                COMPRAR AGORA
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
