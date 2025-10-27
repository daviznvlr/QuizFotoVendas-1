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
          <h1 className="text-xl md:text-2xl font-bold leading-tight text-foreground">
            Transforme sua paixão por confeitaria em uma renda doce e real neste Natal
          </h1>
          <p className="text-base text-muted-foreground">
            Com receitas simples e estratégias práticas, você vai criar panetones que encantam e vendem.
          </p>
        </div>

        <div className="flex justify-center">
          <img 
            src={panetoneImage} 
            alt="O melhor Panetone Gourmet"
            className="w-full max-w-[240px] rounded-lg"
          />
        </div>

        <div className="text-center space-y-6">
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
