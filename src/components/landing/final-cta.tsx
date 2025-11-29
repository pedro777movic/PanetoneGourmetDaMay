import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="final-cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
          🎄 Se Você Deixar Para Depois… Vai Ficar de Fora.
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg text-primary-foreground/80">
          Acesso limitado. Alta demanda. Natal chegando.
        </p>
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-md md:text-lg font-bold py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-transform"
        >
          <a href="#checkout-button">
            👉 Quero Acessar o APP Agora
          </a>
        </Button>
      </div>
    </section>
  );
}
