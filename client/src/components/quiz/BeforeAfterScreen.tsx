import { ArrowLeft, Clock, Frown, Smile, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import panettonePlate from "@assets/image_1760983266669.png";

interface BeforeAfterScreenProps {
  onContinue: () => void;
  onBack?: () => void;
}

export function BeforeAfterScreen({ onContinue, onBack }: BeforeAfterScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-yellow-300 text-center py-3 px-6">
        <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-2" data-testid="text-timer">
          <Clock className="w-4 h-4" />
          00:07:48 Oferta por tempo limitado!
        </p>
      </div>

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
          <div className="w-full max-w-md">
            <img
              src={panettonePlate}
              alt="Panetone Gourmet"
              className="w-full h-auto rounded-lg"
              data-testid="img-panettone"
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-4">
            <Card className="bg-card" data-testid="card-before">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-center font-bold text-foreground" data-testid="text-before-title">
                  ANTES
                </h3>
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-muted to-muted-foreground/20 flex items-center justify-center">
                    <Frown className="w-20 h-20 text-muted-foreground" />
                  </div>
                </div>
                <p className="text-center text-sm text-foreground" data-testid="text-before-desc">
                  Você deixando passar mais uma oportunidade de renda extra
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm justify-center">
                  <div className="flex-1 h-2 bg-muted rounded-full">
                    <div className="h-full w-1/4 bg-muted-foreground rounded-full"></div>
                  </div>
                  <Frown className="w-4 h-4" />
                </div>
                <p className="text-center text-xs text-muted-foreground" data-testid="text-before-footer">
                  Vai ficar na mesma situação...
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-green-500 border-2" data-testid="card-after">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-center font-bold text-foreground" data-testid="text-after-title">
                  DEPOIS
                </h3>
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center">
                    <ChefHat className="w-20 h-20 text-green-700" />
                  </div>
                </div>
                <p className="text-center text-sm text-foreground" data-testid="text-after-desc">
                  Você estará preparada e faturando alto com panetones gourmet
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm justify-center">
                  <div className="flex-1 h-2 bg-muted rounded-full">
                    <div className="h-full w-full bg-green-500 rounded-full"></div>
                  </div>
                  <Smile className="w-4 h-4" />
                </div>
                <p className="text-center text-xs text-green-600 font-medium" data-testid="text-after-footer">
                  Depois que você disser sim a essa oportunidade!
                </p>
              </CardContent>
            </Card>
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className="w-full max-w-md"
            data-testid="button-continue"
          >
            CONTINUAR
          </Button>
        </div>
      </div>
    </div>
  );
}
