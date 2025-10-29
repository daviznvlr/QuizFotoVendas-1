import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md mx-auto space-y-5">
        <div className="flex justify-center mb-2">
          <Logo />
        </div>
        
        <div className="text-center space-y-3">
          <h1 className="text-[27px] font-extrabold leading-[1.3]" style={{ color: '#1a1a1a' }}>
            🎄 Descubra se você tem o perfil certo para faturar com Panetones Gourmet neste Natal!
          </h1>
          
          <p className="text-base md:text-lg" style={{ color: '#555', marginTop: '10px' }}>
            Responda ao quiz e descubra seu potencial de lucro com um método simples e testado que já transformou o Natal de mais de 1.200 mulheres — mesmo sem experiência!
          </p>
          
          <p className="text-base font-semibold" style={{ color: '#e67e22', marginTop: '8px' }}>
            ⏰ Leva menos de 1 minuto e pode mudar o seu Natal!
          </p>
        </div>

        <div className="text-center" style={{ marginTop: '25px' }}>
          <Button
            onClick={onStart}
            size="lg"
            className="w-full text-lg font-bold animate-pulse-cta transition-all hover:scale-[1.03]"
            style={{ 
              backgroundColor: '#f7c948', 
              color: '#1a1a1a',
              padding: '18px 35px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              height: 'auto'
            }}
            data-testid="button-start-quiz"
          >
            🍫 Começar o teste agora →
          </Button>
        </div>

        <p className="text-sm text-center" style={{ color: '#666', marginTop: '18px' }}>
          👩‍🍳 Mais de <strong>1.200 mulheres</strong> já descobriram seu perfil e começaram a lucrar de casa!
        </p>
      </div>
    </div>
  );
}
