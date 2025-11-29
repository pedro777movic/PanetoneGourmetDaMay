import { BadgePercent, BookText, ChefHat, InfinityIcon, ListChecks, Sparkles, Video } from "lucide-react";

const features = [
  { icon: Video, text: "Aulas em vídeo ensinando passo a passo" },
  { icon: BookText, text: "Receitas detalhadas da massa e dos recheios" },
  { icon: Sparkles, text: "Segredos de textura e cremosidade" },
  { icon: ChefHat, text: "Técnicas de confeitaria premium" },
  { icon: BadgePercent, text: "Módulo bônus: como vender e lucrar no Natal" },
  { icon: ListChecks, text: "Lista de utensílios + ingredientes recomendados" },
  { icon: InfinityIcon, text: "Acesso vitalício ao APP" },
];

export function AppFeatures() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">O que você encontra no APP</h2>
            <p className="max-w-[900px] text-muted-foreground text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tudo que você precisa para dominar a arte do panetone gourmet, do zero ao profissional.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 py-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-4 p-4 rounded-lg hover:bg-card transition-colors">
                    <div className="bg-primary text-primary-foreground p-3 md:p-4 rounded-full">
                        <feature.icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <p className="text-sm md:text-lg font-semibold">{feature.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
