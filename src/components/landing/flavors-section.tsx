import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const flavors = [
  {
    id: "flavor-brigadeiro",
    title: "🍫 Brigadeiro e Kitkat",
    description: "O clássico que extermina qualquer panetone de mercado. Recheio triplo. Brilho intenso. Textura absurda.",
  },
  {
    id: "flavor-ninho",
    title: "🍫 Brownietone",
    description: "O casamento mais viciante do Natal. Cremosidade no nível máximo. Na primeira colher, você entende o porquê.",
  },
  {
    id: "flavor-oreo",
    title: "💚 Brigadeiro de Pistache",
    description: "Crocante, cremoso e totalmente viciante. A combinação perfeita de textura + intensidade.",
  },
];

export function FlavorsSection() {
  return (
    <section id="flavors" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Os Sabores Que Você Vai Aprender
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cada receita foi desenhada para criar uma experiência inesquecível. Além destes, você também aprende a receita base, a técnica universal de recheio e a finalização perfeita.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
          {flavors.map((flavor) => {
            const image = PlaceHolderImages.find((p) => p.id === flavor.id);
            return (
              <Card key={flavor.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={500}
                      height={500}
                      className="rounded-t-lg object-cover aspect-square"
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl font-bold mb-2">{flavor.title}</CardTitle>
                  <p className="text-sm">{flavor.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
