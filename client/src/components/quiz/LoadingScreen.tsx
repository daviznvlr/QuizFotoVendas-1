import { Logo } from "./Logo";
import { ProgressBar } from "./ProgressBar";

interface LoadingScreenProps {
  progress: number;
  message?: string;
}

export function LoadingScreen({ progress, message = "Analisando suas respostas" }: LoadingScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md mx-auto space-y-8">
        <Logo />
        
        <div className="space-y-4">
          <ProgressBar progress={progress} />
          <p className="text-center text-lg font-medium text-foreground">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
