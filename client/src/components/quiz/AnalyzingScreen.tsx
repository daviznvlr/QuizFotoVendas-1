import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Logo } from "./Logo";
import { ProgressBar } from "./ProgressBar";
import { Button } from "@/components/ui/button";
import type { ProfileResult } from "@shared/schema";

interface AnalyzingScreenProps {
  sessionId: string;
  onComplete: (profile: ProfileResult) => void;
  onBack?: () => void;
}

export function AnalyzingScreen({ sessionId, onComplete, onBack }: AnalyzingScreenProps) {
  const { data: profile, error, refetch } = useQuery<ProfileResult>({
    queryKey: [`/api/profile/${sessionId}`],
    enabled: !!sessionId,
    retry: 10,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000),
    staleTime: 0,
  });

  useEffect(() => {
    if (profile) {
      // Profile loaded successfully, navigate to results
      onComplete(profile);
    }
  }, [profile, onComplete]);

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          <Logo />
          <div className="text-center space-y-4">
            <p className="text-lg font-medium text-destructive">
              Erro ao calcular seu perfil. Por favor, tente novamente.
            </p>
            <Button
              onClick={() => refetch()}
              size="lg"
              className="w-full h-14 text-lg font-semibold"
              data-testid="button-retry-analyzing"
            >
              Tentar Novamente
            </Button>
            {onBack && (
              <Button
                onClick={onBack}
                variant="outline"
                size="lg"
                className="w-full"
                data-testid="button-back-from-analyzing"
              >
                Voltar
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <Logo />
        <div className="text-center space-y-4">
          <ProgressBar progress={77} />
          <p className="text-lg font-semibold">Analisando suas respostas...</p>
          <p className="text-sm text-muted-foreground">Calculando seu perfil de vendas</p>
        </div>
      </div>
    </div>
  );
}
