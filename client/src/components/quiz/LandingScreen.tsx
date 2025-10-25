import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import panetoneImage from "@assets/image_1760983922799.png";

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md mx-auto space-y-8">
        <Logo />
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            <span className="text-destructive">Fature de R$ 2.000 a R$8.000</span>{" "}
            <span className="text-foreground">neste fim de ano vendendo</span>{" "}
            <span className="text-foreground">Panetones Gourmet, seguindo um método simples e comprovado!</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <img 
            src={panetoneImage} 
            alt="O melhor Panetone Gourmet"
            className="w-full max-w-sm rounded-lg"
          />
        </div>

        <div className="text-center space-y-6">
          <p className="text-base text-foreground">
            Quem sabe vender do jeito certo,{" "}
            <span className="font-semibold">fatura alto.</span>{" "}
            <span className="text-destructive font-semibold">
              Descubra se você tem o perfil.
            </span>
          </p>

          <Button
            onClick={onStart}
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-success hover:bg-success/90 text-success-foreground animate-pulse-cta"
            data-testid="button-start-quiz"
          >
            QUERO DESCOBRIR
          </Button>
        </div>
      </div>
    </div>
  );
}
