import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const valueProps = [
  "Impressionar sua família",
  "Transformar sua ceia",
  "Dar presentes incríveis",
  "Gerar renda extra no Natal",
  "Criar produtos de qualidade profissional",
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary text-center">
            Muito Mais Barato Que Comprar 1 Panetone Gourmet
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-xl/relaxed text-center">
            E você aprende a fazer quantos quiser.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto py-12">
            <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold">Você não está comprando um panetone.</h3>
                <p className="text-muted-foreground">Você está comprando o domínio de uma técnica premium que pode:</p>
                <ul className="space-y-2 mx-auto lg:mx-0 inline-block text-left">
                    {valueProps.map(prop => (
                        <li key={prop} className="flex items-center gap-2 text-sm md:text-base">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>{prop}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-xs md:text-sm text-muted-foreground pt-4">Enquanto um panetone gourmet custa R$ 80 a R$ 150, aqui você aprende a fazer panetones ilimitados por uma fração do preço.</p>
            </div>
            <div className="lg:col-span-3 flex justify-center">
                 <Card className="shadow-2xl border-2 border-accent lg:transform lg:scale-105 w-full">
                    <CardHeader className="text-center bg-primary/5 rounded-t-lg">
                        <CardTitle className="text-xl md:text-2xl font-headline">Acesso Completo ao APP</CardTitle>
                        <CardDescription>Receitas. Técnicas. Segredos.</CardDescription>
                    </CardHeader>
                    <CardContent className="py-8 text-center">
                        <div className="space-y-2">
                            <p className="text-base md:text-lg line-through text-muted-foreground">De R$100,00</p>
                            <p className="text-4xl md:text-5xl font-bold text-primary">R$43,90</p>
                            <p className="text-sm md:text-base text-muted-foreground">ou 10x de R$4,39 no cartão</p>
                        </div>
                    </CardContent>
                    <CardFooter id="checkout-button">
                        <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-md md:text-lg font-bold py-7 shadow-lg">
                           <a href="https://pay.cakto.com.br/9wv9juh_665967">
                            👉 Quero Acessar o APP Agora e Aprender as Receitas Premium
                           </a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
