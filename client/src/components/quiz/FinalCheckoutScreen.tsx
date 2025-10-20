import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FinalCheckoutScreenProps {
  onCheckout: () => void;
  onBack?: () => void;
}

export function FinalCheckoutScreen({ onCheckout, onBack }: FinalCheckoutScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-yellow-300 text-center py-3 px-6">
        <p className="text-sm font-semibold text-foreground" data-testid="text-timer">
          00:07:38 ⏱️ Oferta por tempo limitado!
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
          <div className="w-full grid grid-cols-2 gap-4">
            <Card className="bg-card" data-testid="card-before">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-center font-bold text-foreground" data-testid="text-before-title">
                  ANTES
                </h3>
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-muted to-muted-foreground/20 flex items-center justify-center">
                    <span className="text-6xl">😔</span>
                  </div>
                </div>
                <p className="text-center text-sm text-foreground" data-testid="text-before-desc">
                  Você deixando passar mais uma oportunidade de renda extra
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm justify-center">
                  <div className="flex-1 h-2 bg-muted rounded-full">
                    <div className="h-full w-1/4 bg-muted-foreground rounded-full"></div>
                  </div>
                  <span>☹️</span>
                </div>
                <p className="text-center text-xs text-muted-foreground" data-testid="text-before-footer">
                  Vai ver em mais uma atitude...
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
                    <span className="text-6xl">👨‍🍳</span>
                  </div>
                </div>
                <p className="text-center text-sm text-foreground" data-testid="text-after-desc">
                  Você pronta o faturando alto com panetones gourmet
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm justify-center">
                  <div className="flex-1 h-2 bg-muted rounded-full">
                    <div className="h-full w-full bg-green-500 rounded-full"></div>
                  </div>
                  <span>😊</span>
                </div>
                <p className="text-center text-xs text-green-600 font-medium" data-testid="text-after-footer">
                  Depois que diz essa certa!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground" data-testid="text-offer-title">
              Oferta exclusiva válida só hoje
            </h2>
          </div>

          <Card className="w-full max-w-md bg-card border-2" data-testid="card-offer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                    <span className="text-xl">⏱️</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground line-through" data-testid="text-price-old">
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
            </CardContent>
          </Card>

          <Button
            onClick={onCheckout}
            size="lg"
            className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white"
            data-testid="button-checkout"
          >
            COMPRAR AGORA
          </Button>
        </div>
      </div>
    </div>
  );
}
