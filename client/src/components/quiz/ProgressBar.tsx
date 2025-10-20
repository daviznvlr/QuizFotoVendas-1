interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full space-y-2">
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-success transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-center text-sm font-semibold text-foreground">
        {progress}%
      </p>
    </div>
  );
}
