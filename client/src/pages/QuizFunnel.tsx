import { useState } from "react";
import { LandingScreen } from "@/components/quiz/LandingScreen";
import { QuestionScreen, QuestionOption } from "@/components/quiz/QuestionScreen";
import { InfoScreen } from "@/components/quiz/InfoScreen";
import { ResultsScreen } from "@/components/quiz/ResultsScreen";
import { FinalOfferScreen } from "@/components/quiz/FinalOfferScreen";
import { LoadingScreen } from "@/components/quiz/LoadingScreen";
import { TestimonialsScreen } from "@/components/quiz/TestimonialsScreen";
import { PlanReadyScreen } from "@/components/quiz/PlanReadyScreen";
import { FinalCheckoutScreen } from "@/components/quiz/FinalCheckoutScreen";
import type { QuizState, ProfileResult } from "@shared/schema";

export default function QuizFunnel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 0,
  });
  const [calculatedProfile, setCalculatedProfile] = useState<ProfileResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const updateQuizState = (updates: Partial<QuizState>) => {
    setQuizState((prev) => ({ ...prev, ...updates }));
  };

  const simulateLoading = (callback: () => void, duration = 2000) => {
    setIsLoading(true);
    setLoadingProgress(0);
    
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            callback();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, duration / 20);
  };

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPrevStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleStart = () => {
    goToNextStep();
  };

  const handleExperienceSelect = (experience: string) => {
    updateQuizState({ experience });
    goToNextStep();
  };

  const handleRevenueSelect = (revenueGoal: string) => {
    updateQuizState({ revenueGoal });
    goToNextStep();
  };

  const handleObstacleSelect = (obstacle: string) => {
    updateQuizState({ obstacle });
    
    // Calculate profile based on responses
    const profile: ProfileResult = {
      potential: "Alto",
      score: 85,
      insights: [
        "Você tem grande potencial para faturar com panetones gourmet!",
        "Com as receitas certas, você pode alcançar seus objetivos financeiros.",
        "Seu perfil é ideal para começar neste mercado."
      ],
    };
    setCalculatedProfile(profile);
    
    simulateLoading(() => {
      goToNextStep();
    }, 1500);
  };

  const handlePotentialSelect = (potential: string) => {
    updateQuizState({ potential });
    goToNextStep();
  };

  const handleFinalAnswer = (finalAnswer: string) => {
    updateQuizState({ finalAnswer });
    goToNextStep();
  };

  const handleTestimonialsContinue = () => {
    simulateLoading(() => {
      // Skip step 7 (loading screen) and go directly to step 8
      setCurrentStep(8);
    }, 2000);
  };

  const handlePlanReadyContinue = () => {
    goToNextStep();
  };

  const handleCheckout = () => {
    console.log("Quiz completo - Checkout:", quizState);
  };

  const experienceOptions: QuestionOption[] = [
    { id: "nenhum", label: "🙂 Nenhum, mas adoro aprender coisas novas.", icon: "BookOpen" },
    { id: "vez-quando", label: "😐 Já faço doces de vez em quando", icon: "Coffee" },
    { id: "experiencia", label: "😍 Tenho experiência e quero dominar os panetones gourmet", icon: "Award" },
  ];

  const revenueOptions: QuestionOption[] = [
    { id: "ate-2000", label: "💰 Até R$2.000,00", icon: "TrendingUp" },
    { id: "2000-5000", label: "💵 Entre R$2.000,00 e R$ 5.000,00", icon: "TrendingUp" },
    { id: "mais-5000", label: "🤑 Mais de R$5.000,00", icon: "TrendingUp" },
    { id: "nao-pensei", label: "🤔 Ainda não pensei nisso, mas adoraria ter um lucro extra", icon: "HelpCircle" },
  ];

  const obstacleOptions: QuestionOption[] = [
    { id: "tempo", label: "⏰ Falta de tempo", icon: "Clock" },
    { id: "medo", label: "😰 Medo de não dar certo", icon: "AlertCircle" },
    { id: "dinheiro", label: "💸 Falta de dinheiro para investir", icon: "Wallet" },
    { id: "nao-sei", label: "🤷 Não sei por onde começar", icon: "HelpCircle" },
  ];

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <>
      {currentStep === 0 && <LandingScreen onStart={handleStart} />}
      
      {currentStep === 1 && (
        <QuestionScreen
          question="Qual é o seu nível de experiência na cozinha?"
          options={experienceOptions}
          onSelect={handleExperienceSelect}
          selectedValue={quizState.experience}
        />
      )}

      {currentStep === 2 && (
        <QuestionScreen
          question="Quanto você gostaria de faturar com panetones neste Natal?"
          options={revenueOptions}
          onSelect={handleRevenueSelect}
          selectedValue={quizState.revenueGoal}
        />
      )}

      {currentStep === 3 && (
        <QuestionScreen
          question="O que mais te impede de começar algo novo para ganhar uma renda extra?"
          options={obstacleOptions}
          onSelect={handleObstacleSelect}
          selectedValue={quizState.obstacle}
        />
      )}

      {currentStep === 4 && calculatedProfile && (
        <ResultsScreen
          profile={calculatedProfile}
          onContinue={handlePotentialSelect}
        />
      )}

      {currentStep === 5 && (
        <FinalOfferScreen
          onAccept={() => handleFinalAnswer("sim")}
          onLearnMore={() => handleFinalAnswer("saber-mais")}
        />
      )}

      {currentStep === 6 && (
        <TestimonialsScreen
          onContinue={handleTestimonialsContinue}
        />
      )}

      {currentStep === 7 && (
        <LoadingScreen 
          progress={loadingProgress} 
          message="Saindo um plano do forno para você"
        />
      )}

      {currentStep === 8 && (
        <PlanReadyScreen
          onContinue={handlePlanReadyContinue}
        />
      )}

      {currentStep === 9 && (
        <FinalCheckoutScreen
          onCheckout={handleCheckout}
        />
      )}
    </>
  );
}
