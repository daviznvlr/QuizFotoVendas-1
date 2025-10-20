import { ArrowLeft, Heart, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

interface FinalOfferScreenProps {
  onAccept: () => void;
  onLearnMore: () => void;
  onBack?: () => void;
}

export function FinalOfferScreen({ onAccept, onLearnMore, onBack }: FinalOfferScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col px-6 py-8">
        <div className="w-full max-w-md mx-auto flex-1 flex flex-col">
          {onBack && (
            <button
              onClick={onBack}
              className="self-start mb-4 p-2 hover-elevate active-elevate-2 rounded-md transition-all"
              data-testid="button-back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div className="mb-8">
            <Logo />
          </div>

          <div className="space-y-6 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold leading-tight">
              Se eu te entregar um{" "}
              <span className="text-destructive">plano passo a passo</span>, com tudo pronto,
              desde receitas fáceis até estratégias de divulgação eficazes para{" "}
              <span className="text-destructive">faturar R$6000</span> vendendo Panetones Gourmet...{" "}
              <span className="text-destructive font-bold">Você aceitaria?</span>
            </h2>

            <div className="space-y-4 pt-4">
              <button
                onClick={onAccept}
                className="w-full p-6 rounded-lg border-2 border-primary bg-primary/5 hover-elevate active-elevate-2 transition-all text-left"
                data-testid="button-accept-offer"
              >
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Sim aceitaria!</p>
                    <p className="text-sm text-muted-foreground">É tudo o que preciso</p>
                  </div>
                </div>
              </button>

              <button
                onClick={onLearnMore}
                className="w-full p-6 rounded-lg border-2 border-border bg-card hover-elevate active-elevate-2 transition-all text-left"
                data-testid="button-learn-more"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-8 h-8 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Não tinha pensado nisso.</p>
                    <p className="text-sm text-muted-foreground">Mas quero saber mais</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
