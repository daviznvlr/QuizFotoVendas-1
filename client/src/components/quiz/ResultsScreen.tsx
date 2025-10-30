import { TrendingUp, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ProgressBar } from "./ProgressBar";
import type { ProfileResult } from "@shared/schema";

interface ResultsScreenProps {
  profile: ProfileResult;
  onContinue: (potential: string) => void;
  progress?: number;
}

export function ResultsScreen({ profile, onContinue, progress }: ResultsScreenProps) {
  const handleContinue = () => {
    onContinue(profile.potential);
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case "Alto":
        return "text-success";
      case "Médio":
        return "text-primary";
      default:
        return "text-muted-foreground";
    }
  };

  const getPotentialIcon = (potential: string) => {
    switch (potential) {
      case "Alto":
        return <Award className="w-12 h-12 text-success" />;
      case "Médio":
        return <Target className="w-12 h-12 text-primary" />;
      default:
        return <TrendingUp className="w-12 h-12 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col px-6 py-8">
        <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">
          <div className="mb-8">
            <Logo />
          </div>

          {progress !== undefined && (
            <div className="mb-8">
              <ProgressBar progress={progress} />
            </div>
          )}

          <div className="text-center space-y-6">
            <h2 className="text-[26px] font-extrabold leading-tight" style={{ color: '#1a1a1a' }}>
              🎉 Parabéns! Seu perfil mostra que você tem alto potencial para lucrar com Panetones Gourmet neste Natal!
            </h2>

            <p className="text-[17px] leading-relaxed" style={{ color: '#444', marginTop: '10px' }} data-testid="text-transition">
              Você já tem tudo o que precisa pra começar — falta apenas o método certo. 
              E é exatamente isso que o <strong>Método Panetone Gourmet Lucrativo</strong> entrega:
              receitas testadas, guia de precificação e estratégias simples pra vender rápido.
            </p>

            <div style={{ margin: '20px auto' }}>
              <p className="text-[17px] font-semibold" style={{ color: '#e67e22' }}>
                💡 Promoção exclusiva: de <s>R$97,00</s> por apenas <strong>R$27,00</strong> — só hoje!
              </p>
            </div>

            <Button
              onClick={() => window.location.href = 'https://ivory-horse-718246.hostingersite.com/'}
              size="lg"
              className="w-full text-lg font-bold animate-pulse-cta transition-all hover:scale-[1.03]"
              style={{ 
                backgroundColor: '#f7c948', 
                color: '#1a1a1a',
                padding: '18px 35px',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                height: 'auto',
                marginTop: '25px'
              }}
              data-testid="button-continue"
            >
              Quero Começar Agora 🎄
            </Button>

            <p className="text-[15px]" style={{ color: '#666', marginTop: '15px' }}>
              ⚠️ Atenção: essa condição é válida apenas para novos alunos e expira hoje à meia-noite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
