import { Card, CardContent } from "@/components/ui/card";
import { Gift } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="bg-primary text-primary-foreground p-8 md:p-12 text-center space-y-6 shadow-xl">
            <div className="flex justify-center items-center gap-4">
              <Gift className="h-12 w-12 text-accent" />
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                Garantia May de Satisfação Total
              </h2>
            </div>
            <p className="text-lg md:text-xl">
              Se você entrar no APP, assistir as aulas e sentir que não aprendeu a fazer panetones gourmet de verdade…
            </p>
            <p className="text-2xl font-bold text-accent">
              Eu devolvo 100% do seu dinheiro.
            </p>
            <p className="text-muted-foreground">Simples. Direto. Sem burocracia.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
