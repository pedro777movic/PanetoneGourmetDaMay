import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const socialProofImages = [
  PlaceHolderImages.find((p) => p.id === 'social-proof-1'),
  PlaceHolderImages.find((p) => p.id === 'social-proof-2'),
  PlaceHolderImages.find((p) => p.id === 'social-proof-3'),
].filter(Boolean) as (typeof PlaceHolderImages)[0][];

export function SocialProofImages() {
  return (
    <section id="social-proof-images" className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl font-headline font-bold tracking-tighter sm:text-3xl text-primary">
            +1.247 Alunas Satisfeitas
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Veja o que nossas alunas estão dizendo sobre o curso.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 py-12 sm:grid-cols-3 sm:gap-6">
          {socialProofImages.map((image) => (
            <div key={image.id} className="flex justify-center">
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                width={250}
                height={250}
                className="rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
