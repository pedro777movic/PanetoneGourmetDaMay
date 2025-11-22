import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Timer } from "lucide-react";

export function ScarcitySection() {
  return (
    <section id="scarcity" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="flex justify-center items-center gap-4">
            <Timer className="h-12 w-12 text-primary" />
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Acesso Limitado — Liberado Apenas Durante o Natal
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-bold">Por quê?</p>
          <p className="text-muted-foreground md:text-xl">
            Porque este é o período onde a demanda explode, as técnicas são mais procuradas, os alunos têm resultado mais rápido e a May libera suporte extra.
          </p>
          <p className="text-xl font-bold">Quando fechar, acabou. Sem segunda chamada.</p>
          <Alert variant="destructive" className="max-w-md mx-auto text-left shadow-lg">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="font-bold">Atenção!</AlertTitle>
            <AlertDescription>
              Ano passado, o grupo esgotou em menos de 48h.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
