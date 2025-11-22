import { Flame } from "lucide-react";

const learnings = [
    "A massa macia perfeita",
    "Recheios absurdamente cremosos",
    "Combinações premium",
    "Temperatura, textura e ponto certo",
    "Como montar, rechear, finalizar e embalar",
    "Como transformar isso em renda extra no Natal"
]

export function ImpactSection() {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl text-accent">
            ⚡ Isso Não É Um Curso — É O MAPA DEFINITIVO Dos Panetones Gourmet
          </h2>
          <p className="text-lg md:text-xl">
            O APP Panetone Gourmet da May te ensina a fazer panetones tão cremosos, tão carregados e tão premium que humilham qualquer panetone industrial.
          </p>
          <div className="text-left bg-black/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Você vai aprender:</h3>
              <ul className="space-y-3">
                  {learnings.map(item => (
                    <li key={item} className="flex items-start gap-3">
                        <Flame className="h-6 w-6 text-accent mt-1 shrink-0"/>
                        <span className="text-lg">{item}</span>
                    </li>
                  ))}
              </ul>
          </div>
          <p className="text-lg md:text-xl font-bold">
            Não é só receita. É técnica, processo, execução, segredo profissional. Se você quer criar panetones gourmet de verdade — está no único lugar onde isso é possível.
          </p>
        </div>
      </div>
    </section>
  );
}
