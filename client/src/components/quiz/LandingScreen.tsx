import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="flex justify-center mb-2">
          <Logo />
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-[26px] font-bold leading-tight" style={{ color: '#1a1a1a' }}>
            ✨ Será que você também consegue faturar com Panetones Gourmet neste Natal?
          </h1>
          
          <p className="text-base md:text-lg" style={{ color: '#555' }}>
            Responda ao quiz e descubra seu potencial de lucro com um método simples e testado 
            que já ajudou centenas de mulheres a começarem do zero e lucrar direto da cozinha!
          </p>
          
          <p className="text-base font-medium" style={{ color: '#e67e22' }}>
            🎁 Leva menos de 1 minuto!
          </p>
        </div>

        <div className="text-center pt-2">
          <Button
            onClick={onStart}
            size="lg"
            className="w-full h-14 text-lg font-bold animate-pulse-cta shadow-lg hover:shadow-xl transition-all"
            style={{ backgroundColor: '#f7c948', color: '#1a1a1a' }}
            data-testid="button-start-quiz"
          >
            Começar o teste →
          </Button>
        </div>
      </div>
    </div>
  );
}
