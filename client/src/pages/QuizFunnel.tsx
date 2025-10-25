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

  const handleAgeSelect = (age: string) => {
    updateQuizState({ age });
    goToNextStep();
  };

  const handleInfoContinue = () => {
    goToNextStep();
  };

  const handleFeelingSelect = (feeling: string) => {
    updateQuizState({ feeling });
    goToNextStep();
  };

  const handleRevenueSelect = (revenueGoal: string) => {
    updateQuizState({ revenueGoal });
    goToNextStep();
  };

  const handleExperienceSelect = (experience: string) => {
    updateQuizState({ experience });
    
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
    
    // Go directly to results (step 7)
    setCurrentStep(7);
  };

  const handlePotentialSelect = (potential: string) => {
    updateQuizState({ potential });
    goToNextStep();
  };

  const handleObstacleSelect = (obstacle: string) => {
    updateQuizState({ obstacle });
    goToNextStep();
  };

  const handleFinancialConcernSelect = (financialConcern: string) => {
    updateQuizState({ financialConcern });
    
    simulateLoading(() => {
      goToNextStep();
    }, 1500);
  };

  const handleFinalAnswer = (finalAnswer: string) => {
    updateQuizState({ finalAnswer });
    goToNextStep();
  };

  const handleTestimonialsContinue = () => {
    simulateLoading(() => {
      // Skip step 12 (loading screen) and go directly to step 13
      setCurrentStep(13);
    }, 2000);
  };

  const handlePlanReadyContinue = () => {
    goToNextStep();
  };

  const handleCheckout = () => {
    console.log("Quiz completo - Checkout:", quizState);
  };

  const ageOptions: QuestionOption[] = [
    { id: "18-29", label: "18-29" },
    { id: "30-40", label: "30-40" },
    { id: "41-50", label: "41-50" },
    { id: "+50", label: "+50" },
  ];

  const feelingOptions: QuestionOption[] = [
    { id: "realizada", label: "😍 Realizada por transformar algo que gosto em renda", icon: "Heart" },
    { id: "orgulhosa", label: "😊 Orgulhosa de mostrar que consigo empreender", icon: "Smile" },
    { id: "feliz", label: "🤑 Feliz por ter um dinheiro a mais no fim do ano", icon: "DollarSign" },
    { id: "motivada", label: "😉 Motivada a continuar vendendo o ano todo", icon: "Zap" },
  ];

  const revenueOptions: QuestionOption[] = [
    { id: "ate-2000", label: "💰 Até R$2.000,00", icon: "TrendingUp" },
    { id: "2000-5000", label: "💵 Entre R$2.000,00 e R$ 5.000,00", icon: "TrendingUp" },
    { id: "mais-5000", label: "🤑 Mais de R$5.000,00", icon: "TrendingUp" },
    { id: "nao-pensei", label: "🤔 Ainda não pensei nisso, mas adoraria ter um lucro extra", icon: "HelpCircle" },
  ];

  const experienceOptions: QuestionOption[] = [
    { id: "nenhum", label: "🙂 Nenhum, mas adoro aprender coisas novas.", icon: "BookOpen" },
    { id: "vez-quando", label: "😐 Já faço doces de vez em quando", icon: "Coffee" },
    { id: "experiencia", label: "😍 Tenho experiência e quero dominar os panetones gourmet", icon: "Award" },
  ];

  const obstacleOptions: QuestionOption[] = [
    { id: "tempo", label: "⏰ Falta de tempo", icon: "Clock" },
    { id: "medo", label: "😰 Medo de não dar certo", icon: "AlertCircle" },
    { id: "dinheiro", label: "💸 Falta de dinheiro para investir", icon: "Wallet" },
    { id: "nao-sei", label: "🤷 Não sei por onde começar", icon: "HelpCircle" },
  ];

  const financialOptions: QuestionOption[] = [
    { id: "vida-melhor", label: "😔 Não conseguir dar uma vida melhor para a minha família", icon: "Home" },
    { id: "escolher", label: "😞 Ter que escolher entre pagar contas ou realizar sonhos", icon: "Scale" },
    { id: "tempo-filhos", label: "😢 Não ter tempo para os filhos, pois tenho que trabalhar fora", icon: "Users" },
    { id: "estressada", label: "😰 Viver estressada sem segurança financeira", icon: "AlertTriangle" },
  ];

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <>
      {currentStep === 0 && <LandingScreen onStart={handleStart} />}
      
      {currentStep === 1 && (
        <QuestionScreen
          question="Qual a sua idade?"
          options={ageOptions}
          onSelect={handleAgeSelect}
          selectedValue={quizState.age}
        />
      )}

      {currentStep === 2 && (
        <InfoScreen onContinue={handleInfoContinue} />
      )}

      {currentStep === 3 && (
        <QuestionScreen
          question="Como se sentiria se conseguisse fazer e vender panetones neste fim de ano?"
          options={feelingOptions}
          onSelect={handleFeelingSelect}
          selectedValue={quizState.feeling}
        />
      )}

      {currentStep === 4 && (
        <QuestionScreen
          question="Quanto você gostaria de faturar com panetones neste Natal?"
          options={revenueOptions}
          onSelect={handleRevenueSelect}
          selectedValue={quizState.revenueGoal}
        />
      )}

      {currentStep === 5 && (
        <QuestionScreen
          question="Qual é o seu nível de experiência na cozinha?"
          options={experienceOptions}
          onSelect={handleExperienceSelect}
          selectedValue={quizState.experience}
        />
      )}

      {currentStep === 7 && calculatedProfile && (
        <ResultsScreen
          profile={calculatedProfile}
          onContinue={handlePotentialSelect}
        />
      )}

      {currentStep === 8 && (
        <QuestionScreen
          question="O que mais te impede de começar algo novo para ganhar uma renda extra?"
          options={obstacleOptions}
          onSelect={handleObstacleSelect}
          selectedValue={quizState.obstacle}
        />
      )}

      {currentStep === 9 && (
        <QuestionScreen
          question="O que mais te preocupa na sua situação financeira atual?"
          options={financialOptions}
          onSelect={handleFinancialConcernSelect}
          selectedValue={quizState.financialConcern}
        />
      )}

      {currentStep === 10 && (
        <FinalOfferScreen
          onAccept={() => handleFinalAnswer("sim")}
          onLearnMore={() => handleFinalAnswer("saber-mais")}
        />
      )}

      {currentStep === 11 && (
        <TestimonialsScreen
          onContinue={handleTestimonialsContinue}
        />
      )}

      {currentStep === 12 && (
        <LoadingScreen 
          progress={loadingProgress} 
          message="Saindo um plano do forno para você"
        />
      )}

      {currentStep === 13 && (
        <PlanReadyScreen
          onContinue={handlePlanReadyContinue}
        />
      )}

      {currentStep === 14 && (
        <FinalCheckoutScreen
          onCheckout={handleCheckout}
        />
      )}
    </>
  );
}
