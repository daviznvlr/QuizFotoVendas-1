import { Heart, Smile, DollarSign, Zap, TrendingUp, HelpCircle, BookOpen, Coffee, Award, Clock, AlertCircle, Wallet, Home, Scale, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ProgressBar } from "./ProgressBar";
import { cn } from "@/lib/utils";

export interface QuestionOption {
  id: string;
  label: string;
  icon?: string;
}

const iconMap: Record<string, any> = {
  Heart,
  Smile,
  DollarSign,
  Zap,
  TrendingUp,
  HelpCircle,
  BookOpen,
  Coffee,
  Award,
  Clock,
  AlertCircle,
  Wallet,
  Home,
  Scale,
  Users,
  AlertTriangle,
};

interface QuestionScreenProps {
  question: string;
  options: QuestionOption[];
  onSelect: (optionId: string) => void;
  progress?: number;
  selectedValue?: string;
}

export function QuestionScreen({
  question,
  options,
  onSelect,
  progress,
  selectedValue,
}: QuestionScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col px-6 py-8">
        <div className="w-full max-w-md mx-auto flex-1 flex flex-col">
          <div className="mb-8">
            <Logo />
          </div>

          {progress !== undefined && (
            <div className="mb-8">
              <ProgressBar progress={progress} />
            </div>
          )}

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 leading-tight">
            {question}
          </h2>

          <p className="text-xs text-center mb-8" style={{ color: '#777' }}>
            Sua resposta ajuda a personalizar o plano ideal de lucros para você 🎯
          </p>

          <div className="space-y-4 flex-1">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => onSelect(option.id)}
                className={cn(
                  "w-full p-4 rounded-lg border-2 transition-all text-left",
                  "hover-elevate active-elevate-2",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  selectedValue === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                )}
                data-testid={`option-${option.id}`}
              >
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
