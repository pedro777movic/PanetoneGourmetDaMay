'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl py-12">
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {socialProofImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                  <div className="p-1">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105 aspect-square"
                      />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}