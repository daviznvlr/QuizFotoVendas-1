import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import panettoneLogo from "@assets/image_1760983257175.png";

interface PlanReadyScreenProps {
  onContinue: () => void;
  onBack?: () => void;
}

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "35 Receitas exclusivas de Panetones Gourmet:",
    description: "aprenda a fazer panetones deliciosos que vão encantar seus clientes e aumentar suas vendas"
  },
  {
    title: "Precificação para o lucro:",
    description: "aprenda a dar o preço correto em cada tipo de panetone e aumente a sua margem de lucro"
  },
  {
    title: "Estratégias de divulgação simples e eficazes:",
    description: "como promover seus panetones no whatsapp, facebook e instagram de forma prática e atrair clientes prontos para comprar"
  },
  {
    title: "Baixo investimento inicial:",
    description: "como começar o seu negócio de panetones gourmet sem gastar muito, utilizando ingredientes acessíveis e técnicas que garantem alta lucro"
  }
];

export function PlanReadyScreen({ onContinue, onBack }: PlanReadyScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-yellow-300 text-center py-3 px-6">
        <p className="text-sm font-semibold text-foreground" data-testid="text-timer">
          00:07:56 ⏱️ Oferta por tempo limitado!
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto px-6 py-8 flex-1 flex flex-col">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover-elevate active-elevate-2 p-2 rounded-md transition-colors self-start"
            data-testid="button-back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md">
            <img
              src={panettoneLogo}
              alt="Guia Panettone Gourmet Lucrativo"
              className="w-full h-auto rounded-lg shadow-lg"
              data-testid="img-guide"
            />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground" data-testid="text-title">
              Seu plano está pronto!!!
            </h1>
            <p className="text-lg text-destructive font-semibold" data-testid="text-subtitle">
              Veja o que você irá aprender e ter acesso:
            </p>
          </div>

          <div className="w-full space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3" data-testid={`benefit-${index}`}>
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground">
                    <span className="font-semibold">{benefit.title}</span>{" "}
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className="w-full max-w-md"
            data-testid="button-continue"
          >
            CONTINUAR
          </Button>
        </div>
      </div>
    </div>
  );
}
