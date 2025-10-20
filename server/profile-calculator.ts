import type { QuizResponse } from "@shared/schema";

export interface ProfileResult {
  potential: "Baixo" | "Médio" | "Alto";
  score: number;
  insights: string[];
}

export function calculateProfile(response: QuizResponse): ProfileResult {
  let score = 0;
  const insights: string[] = [];

  // Age analysis - younger entrepreneurs tend to have more energy and time
  if (response.age === "18-29") {
    score += 25;
    insights.push("Sua faixa etária é ideal para começar um negócio");
  } else if (response.age === "30-40") {
    score += 30;
    insights.push("Você tem experiência de vida e energia para empreender");
  } else if (response.age === "41-50") {
    score += 20;
    insights.push("Sua maturidade é uma vantagem no mundo dos negócios");
  } else {
    score += 15;
    insights.push("Sua experiência de vida é um diferencial importante");
  }

  // Feeling analysis - motivation is key
  if (response.feeling === "realizada") {
    score += 30;
    insights.push("Você tem forte motivação interna");
  } else if (response.feeling === "orgulhosa") {
    score += 25;
    insights.push("Seu orgulho pessoal vai te impulsionar");
  } else if (response.feeling === "feliz") {
    score += 20;
    insights.push("O dinheiro extra é um bom motivador");
  } else if (response.feeling === "motivada") {
    score += 35;
    insights.push("Você pensa no longo prazo - ótimo sinal!");
  }

  // Revenue goal - ambition matters
  if (response.revenueGoal === "ate-2000") {
    score += 15;
    insights.push("Meta conservadora, mas alcançável");
  } else if (response.revenueGoal === "2000-5000") {
    score += 25;
    insights.push("Meta ambiciosa e realista");
  } else if (response.revenueGoal === "mais-5000") {
    score += 30;
    insights.push("Grande ambição - você pensa grande!");
  } else {
    score += 10;
    insights.push("Você ainda está descobrindo seu potencial");
  }

  // Experience - knowledge helps but isn't everything
  if (response.experience === "nenhum") {
    score += 10;
    insights.push("Disposição para aprender é fundamental");
  } else if (response.experience === "vez-quando") {
    score += 20;
    insights.push("Você já tem prática na cozinha");
  } else if (response.experience === "experiencia") {
    score += 30;
    insights.push("Sua experiência é uma grande vantagem");
  }

  // Fixed score and potential for consistent conversion optimization
  const normalizedScore = 83;
  const potential: "Baixo" | "Médio" | "Alto" = "Alto";

  return {
    potential,
    score: normalizedScore,
    insights,
  };
}
