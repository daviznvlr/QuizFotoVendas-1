import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import marketImage from "@assets/image_1760983973269.png";

interface InfoScreenProps {
  onContinue: () => void;
}

export function InfoScreen({ onContinue }: InfoScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col px-6 py-8">
        <div className="w-full max-w-md mx-auto flex-1 flex flex-col">
          <div className="mb-8">
            <Logo />
          </div>

          <div className="text-center mb-6">
            <p className="text-lg">
              <span className="text-foreground">Milhares de mulheres faturaram alto em 2024 e </span>
              <span className="text-destructive font-semibold">2025 vai ser muito melhor!</span>
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <img 
              src={marketImage} 
              alt="Expectativa de crescimento de 72% nas vendas de panetones caseiros em 2025"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-success hover:bg-success/90 text-success-foreground animate-pulse-cta"
            data-testid="button-continue"
          >
            CONTINUAR
          </Button>
        </div>
      </div>
    </div>
  );
}
