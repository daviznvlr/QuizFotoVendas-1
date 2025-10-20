import { Logo } from "./Logo";
import { ProgressBar } from "./ProgressBar";

interface LoadingScreenProps {
  progress: number;
  message?: string;
}

export function LoadingScreen({ progress, message = "Analisando suas respostas" }: LoadingScreenProps) {
  const isCustomMessage = message.includes("Aguarde...");
  
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md mx-auto space-y-8">
        <Logo />
        
        <div className="space-y-4">
          <ProgressBar progress={progress} />
          {isCustomMessage ? (
            <div className="text-center text-lg text-foreground">
              <p className="font-bold">Aguarde...</p>
              <p className="mt-2">Saindo um plano especial do forno para você</p>
            </div>
          ) : (
            <p className="text-center text-lg font-medium text-foreground whitespace-pre-line">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
