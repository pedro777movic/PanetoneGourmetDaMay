import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const microSeals = [
  "Acesso imediato",
  "Vídeos em alta qualidade",
  "Técnicas profissionais",
  "Receita base + recheios premium",
  "Perfeito para aprender ou lucrar no Natal",
];

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full pt-24 pb-20 md:pt-32 lg:pt-40 bg-cover bg-center bg-[url('https://i.postimg.cc/BbRRGFSQ/3.png')]">
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <span className="text-2xl md:text-4xl font-headline font-bold text-white">Panetone Gourmet da May</span>
      </div>
      <div className="relative text-white">
        <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                    <Image src="https://i.postimg.cc/sgNVh4WZ/Generated-Image-November-22-2025-10-06PM.png" alt="Panetone Gourmet" width={400} height={400} className="rounded-lg shadow-2xl w-[300px] h-[300px] md:w-[400px] md:h-[400px]" />
                </div>
                <div className="max-w-3xl space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl font-headline font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-shadow-lg">
                    🎄 Aprenda a Criar O Panetone Gourmet Que Virou Obsessão Neste Natal
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                    Com recheios tão cremosos que parecem proibidos. Agora, pela primeira vez, a May revela o passo a passo completo dentro de um APP exclusivo.
                    </p>
                    
                    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <h2 className="text-xl font-bold">Não é só um curso.</h2>
                    <p className="text-base">É um aplicativo premium com vídeos, receitas, técnicas e segredos completos para você criar panetones absurdamente cremosos — e até vender se quiser.</p>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-transform"
                    >
                      <a href="#checkout-button">
                        👉 Quero Acessar o APP Agora
                      </a>
                    </Button>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 pt-6">
                    {microSeals.map((seal) => (
                        <div key={seal} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        <span>{seal}</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
