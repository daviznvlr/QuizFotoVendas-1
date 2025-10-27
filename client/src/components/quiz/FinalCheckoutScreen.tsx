import { useState, useEffect } from "react";
import { Clock, Frown, Smile, CheckCircle, Users, ShieldCheck, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import beforeImage from "@assets/image_1760984396828.png";
import afterImage from "@assets/image_1761362670399.png";

interface FinalCheckoutScreenProps {
  onCheckout: () => void;
}

export function FinalCheckoutScreen({ onCheckout }: FinalCheckoutScreenProps) {
  const [timeLeft, setTimeLeft] = useState(480);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-yellow-300 text-center py-3 px-6">
        <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-2" data-testid="text-timer">
          <Clock className="w-4 h-4" />
          Oferta exclusiva e válida só hoje ({getCurrentDate()})
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto px-6 py-8 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md grid grid-cols-2 gap-3">
            <Card className="bg-card" data-testid="card-before">
              <CardContent className="p-3 space-y-2">
                <h3 className="text-center text-xs font-bold text-foreground" data-testid="text-before-title">
                  ANTES
                </h3>
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden">
                  <img 
                    src={beforeImage} 
                    alt="Antes" 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <p className="text-center text-xs text-foreground" data-testid="text-before-desc">
                  Você deixando passar mais uma oportunidade de renda extra
                </p>
                <div className="flex items-center gap-1 text-muted-foreground text-xs justify-center">
                  <div className="flex-1 h-1.5 bg-muted rounded-full">
                    <div className="h-full w-1/4 bg-muted-foreground rounded-full"></div>
                  </div>
                  <Frown className="w-3 h-3" />
                </div>
                <p className="text-center text-xs text-muted-foreground" data-testid="text-before-footer">
                  Vai ficar na mesma situação...
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-green-500 border-2" data-testid="card-after">
              <CardContent className="p-3 space-y-2">
                <h3 className="text-center text-xs font-bold text-foreground" data-testid="text-after-title">
                  DEPOIS
                </h3>
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden">
                  <img 
                    src={afterImage} 
                    alt="Depois" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-xs text-foreground" data-testid="text-after-desc">
                  Você estará preparada e faturando alto com panetones gourmet
                </p>
                <div className="flex items-center gap-1 text-green-600 text-xs justify-center">
                  <div className="flex-1 h-1.5 bg-muted rounded-full">
                    <div className="h-full w-full bg-green-500 rounded-full"></div>
                  </div>
                  <Smile className="w-3 h-3" />
                </div>
                <p className="text-center text-xs text-green-600 font-medium" data-testid="text-after-footer">
                  Depois que você disser sim a essa oportunidade!
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full max-w-md bg-card border-[3px] border-yellow-600/80 rounded-2xl" data-testid="card-offer">
            <CardContent className="p-5 space-y-3">
              <div className="text-center space-y-1">
                <h2 className="text-xl font-bold text-foreground" data-testid="text-offer-title">
                  Método Panetone Gourmet Lucrativo 🍫
                </h2>
                <p className="text-sm text-foreground leading-relaxed" data-testid="text-offer-subtitle">
                  Você vai ter em mãos o mesmo método que transformou o Natal de centenas de mulheres — receitas irresistíveis, precificação certeira e estratégias simples pra vender sem depender de sorte.
                </p>
              </div>

              <div className="text-center space-y-0.5">
                <p className="text-xs text-muted-foreground line-through" data-testid="text-price-old">
                  de R$ 97,00
                </p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-base font-semibold text-foreground">R$</span>
                  <span className="text-4xl font-bold text-foreground" data-testid="text-price-new">
                    27
                  </span>
                  <span className="text-xl font-bold text-foreground">,00</span>
                </div>
              </div>

              <div className="bg-yellow-400 rounded-lg py-1.5 px-3 text-center">
                <p className="text-xs font-semibold text-foreground" data-testid="text-savings">
                  Economize R$ 70,00
                </p>
              </div>

              <div className="space-y-2 py-1">
                <div className="flex items-start gap-2" data-testid="item-receitas-basicas">
                  <div className="w-4 h-4 rounded-full border-2 border-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                  </div>
                  <p className="text-xs text-foreground">
                    Todas as Receitas Básicas
                  </p>
                </div>

                <div className="flex items-start gap-2" data-testid="item-bonus-recheios">
                  <div className="w-4 h-4 rounded-full border-2 border-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                  </div>
                  <p className="text-xs text-foreground">
                    Bônus: Recheios Gourmet Exclusivos
                  </p>
                </div>

                <div className="flex items-start gap-2" data-testid="item-bonus-coberturas">
                  <div className="w-4 h-4 rounded-full border-2 border-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                  </div>
                  <p className="text-xs text-foreground">
                    Bônus: Coberturas Irresistíveis
                  </p>
                </div>

                <div className="flex items-start gap-2" data-testid="item-bonus-precificacao">
                  <div className="w-4 h-4 rounded-full border-2 border-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                  </div>
                  <p className="text-xs text-foreground">
                    Bônus: Guia de Precificação
                  </p>
                </div>

                <div className="flex items-start gap-2" data-testid="item-bonus-marketing">
                  <div className="w-4 h-4 rounded-full border-2 border-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                  </div>
                  <p className="text-xs text-foreground">
                    Bônus: Estratégias de Marketing
                  </p>
                </div>
              </div>

              <Button
                onClick={() => window.open('https://pay.kiwify.com.br/gDLcgEB', '_blank')}
                className="w-full font-bold text-sm py-5 rounded-lg transition-all hover:scale-105 whitespace-normal leading-tight"
                style={{ backgroundColor: '#2E7D32', color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#388E3C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2E7D32'}
                data-testid="button-checkout"
              >
                Quero Começar a Lucrar com Panetones 🎯
              </Button>

              <div className="flex items-center justify-center gap-1.5 pt-1" data-testid="text-social-proof">
                <Users className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                  1.347 pessoas já compraram!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full max-w-md border-2" style={{ borderColor: '#E53935', backgroundColor: '#FFEBEE' }}>
            <CardContent className="p-4 space-y-2">
              <h3 className="text-center font-bold text-base" style={{ color: '#E53935' }} data-testid="text-urgency-title">
                Atenção! Oferta especial de Natal disponível por tempo limitado 🎅
              </h3>
              <p className="text-center text-sm text-foreground" data-testid="text-urgency-desc">
                Aproveite enquanto o valor promocional de <span className="font-bold">R$27</span> está ativo — depois o preço volta para R$97.
              </p>
              <div className="text-center pt-2">
                <div className="inline-block bg-white rounded-lg px-4 py-2 shadow-sm">
                  <p className="text-2xl font-bold" style={{ color: '#E53935' }} data-testid="text-countdown">
                    {formatTime(timeLeft)}
                  </p>
                  <p className="text-xs text-muted-foreground">tempo restante</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full max-w-md bg-card" data-testid="card-authority">
            <CardContent className="p-5 space-y-4">
              <h3 className="text-center font-bold text-lg text-foreground">
                Por que este método funciona?
              </h3>
              <p className="text-center text-sm text-foreground leading-relaxed">
                Desenvolvido com base nas receitas e estratégias de confeiteiras reais que lucraram no último Natal.
                Mais de 1.200 alunas já transformaram seu amor por doces em fonte de renda.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="text-center space-y-1">
                  <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-foreground">Compra 100% Segura</p>
                </div>
                <div className="text-center space-y-1">
                  <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-foreground">Acesso Imediato</p>
                </div>
                <div className="text-center space-y-1">
                  <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-foreground">Satisfação Garantida</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full max-w-md mx-auto px-6 pb-8">
          <div className="border-t pt-4">
            <p className="text-center text-xs text-muted-foreground mb-3" data-testid="text-payment-info">
              Pague seu investimento com apenas 01 panetone
            </p>

            <div className="bg-accent/30 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <h3 className="text-center font-bold text-sm text-foreground" data-testid="text-guarantee-title">
                Seu risco é zero!
              </h3>
              <p className="text-center text-xs text-foreground" data-testid="text-guarantee-desc">
                Se dentro de 7 dias você não estiver satisfeito com o material oferecido, garantimos 100% do seu dinheiro de volta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
