import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    { 
        question: "O acesso é imediato?",
        answer: "Sim. Assim que o pagamento for confirmado, o acesso ao APP é liberado automaticamente no seu e-mail."
    },
    { 
        question: "Funciona no celular?",
        answer: "Sim. É um aplicativo web progressivo (PWA), otimizado para funcionar perfeitamente em qualquer smartphone, tablet ou computador."
    },
    { 
        question: "É para iniciantes?",
        answer: "Sim. As técnicas são explicadas do absoluto zero, passo a passo, sem complicação. Perfeito para quem nunca fez um panetone na vida."
    },
    { 
        question: "Vou precisar de equipamentos caros?",
        answer: "Não. Todas as receitas e técnicas podem ser executadas com utensílios normais de cozinha que você provavelmente já tem em casa."
    },
    { 
        question: "Posso vender os panetones depois?",
        answer: "Sim! O curso ensina a técnica profissional e ainda inclui um módulo bônus sobre como precificar, embalar e vender seus panetones no Natal."
    },
    { 
        question: "O conteúdo some depois do Natal?",
        answer: "Não. O acesso é vitalício. Você compra uma vez e pode acessar o conteúdo para sempre, incluindo todas as futuras atualizações."
    }
]

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                    Perguntas Frequentes
                </h2>
                <p className="text-muted-foreground md:text-xl">Respostas diretas para suas dúvidas.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-md md:text-lg font-bold text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-sm md:text-base text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
