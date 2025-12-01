import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { quote: "Parece impossível que eu fiz isso em casa." },
  { quote: "O APP é uma obra-prima, tudo explicado no detalhe." },
  { quote: "Vendi 14 panetones em 48h depois de aprender as receitas." },
];

export function VisualProofSection() {
  const proofImage1 = PlaceHolderImages.find(p => p.id === 'proof-1');
  const proofImage2 = PlaceHolderImages.find(p => p.id === 'proof-2');

  return (
    <section id="visual-proof" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {proofImage1 && (
              <Image
                src={proofImage1.imageUrl}
                alt={proofImage1.description}
                data-ai-hint={proofImage1.imageHint}
                width={600}
                height={800}
                className="rounded-xl object-cover w-full h-full aspect-[3/4] shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            )}
             {proofImage2 && (
              <Image
                src={proofImage2.imageUrl}
                alt={proofImage2.description}
                data-ai-hint={proofImage2.imageHint}
                width={600}
                height={800}
                className="rounded-xl object-cover w-full h-full aspect-[3/4] shadow-2xl transform hover:scale-105 transition-transform duration-300 sm:mt-12"
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-secondary/50 border-l-4 border-accent">
                  <CardContent className="p-4">
                    <p className="text-lg font-semibold italic text-center">⭐ "{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
