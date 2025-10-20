import { ArrowLeft, TrendingUp, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ProgressBar } from "./ProgressBar";
import type { ProfileResult } from "@shared/schema";

interface ResultsScreenProps {
  profile: ProfileResult;
  onContinue: (potential: string) => void;
  onBack?: () => void;
  progress?: number;
}

export function ResultsScreen({ profile, onContinue, onBack, progress }: ResultsScreenProps) {
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

          {progress !== undefined && (
            <div className="mb-8">
              <ProgressBar progress={progress} />
            </div>
          )}

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 leading-tight">
            Parabéns!!! Você tem o perfil ideal para lucrar com panetones gourmet
          </h2>

          <div className="space-y-8 flex-1">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8">
              <div className="flex flex-col items-center justify-center space-y-6 text-white">
                {getPotentialIcon(profile.potential)}
                
                <div className="text-center">
                  <p className="text-lg mb-2">Seu potencial de vendas:</p>
                  <p className={`text-4xl font-bold ${getPotentialColor(profile.potential)} bg-white px-6 py-2 rounded-lg`} data-testid="text-potential-label">
                    {profile.potential}
                  </p>
                  <div className="mt-4">
                    <p className="text-sm mb-1 opacity-90">Rank Score:</p>
                    <p className="text-2xl font-bold" data-testid="text-rank-score">
                      82/100
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {profile.insights && profile.insights.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Por que este é seu perfil:</h3>
                {profile.insights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-accent rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{insight}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            onClick={handleContinue}
            size="lg"
            className="w-full h-14 text-lg font-semibold mt-8 bg-success hover:bg-success/90 text-success-foreground animate-pulse-cta"
            data-testid="button-continue"
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
}
