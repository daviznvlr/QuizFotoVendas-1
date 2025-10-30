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
    { id: "sim", label: "Sim, amo confeitar e sonho com isso!", icon: "Heart" },
    { id: "talvez", label: "Tenho vontade, mas ainda não decidi", icon: "Smile" },
    { id: "nao", label: "Não, só quero aprender receitas", icon: "BookOpen" },
  ];

  const revenueOptions: QuestionOption[] = [
    { id: "sim", label: "Sim, acredito que posso!", icon: "TrendingUp" },
    { id: "duvida", label: "Tenho dúvidas, mas quero tentar", icon: "HelpCircle" },
    { id: "nao-sei", label: "Não sei se é possível", icon: "AlertCircle" },
  ];

  const obstacleOptions: QuestionOption[] = [
    { id: "sim", label: "Sim, adoraria ter acesso!", icon: "Award" },
    { id: "talvez", label: "Talvez, depende do preço", icon: "DollarSign" },
    { id: "nao", label: "Não, prefiro aprender sozinha", icon: "BookOpen" },
  ];

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <>
      {currentStep === 0 && <LandingScreen onStart={handleStart} />}
      
      {currentStep === 1 && (
        <QuestionScreen
          question="Você ama confeitar e sonha em transformar isso em uma renda real?"
          options={experienceOptions}
          onSelect={handleExperienceSelect}
          selectedValue={quizState.experience}
        />
      )}

      {currentStep === 2 && (
        <QuestionScreen
          question="Você acredita que pode começar do zero e ainda faturar neste Natal?"
          options={revenueOptions}
          onSelect={handleRevenueSelect}
          selectedValue={quizState.revenueGoal}
        />
      )}

      {currentStep === 3 && (
        <QuestionScreen
          question="Você gostaria de ter acesso a receitas gourmet testadas e aprovadas?"
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
