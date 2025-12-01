'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getFlavorSuggestions } from '@/ai/flows/ai-powered-flavor-suggestions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

// Define the action function that will be used in useActionState
async function formAction(prevState: any, formData: FormData) {
  const preferences = formData.get('preferences') as string;
  const ingredients = formData.get('ingredients') as string;

  if (!preferences && !ingredients) {
    return { suggestions: '', error: 'Por favor, preencha pelo menos um campo para receber sugestões.' };
  }
  
  try {
    const result = await getFlavorSuggestions({ preferences, ingredients });
    return { suggestions: result.suggestions, error: null };
  } catch (e) {
    return { suggestions: '', error: 'Ocorreu um erro ao gerar sugestões. Tente novamente mais tarde.' };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-md font-bold">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Gerando Sabores...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Gerar Sabores Mágicos
        </>
      )}
    </Button>
  );
}

export function AiFlavorSuggester() {
  const { toast } = useToast();
  const initialState = { suggestions: '', error: null };
  const [state, dispatch] = useActionState(formAction, initialState);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: state.error,
      });
    }
  }, [state, toast]);

  // Split suggestions into an array of strings
  const suggestionList = state.suggestions
    ? state.suggestions.split('\n').map(s => s.trim().replace(/^-/, '').trim()).filter(s => s)
    : [];

  return (
    <div className="container px-4 md:px-6">
        <Card className="w-full max-w-3xl mx-auto shadow-2xl border-primary/20">
            <CardHeader className="text-center">
                <Wand2 className="mx-auto h-12 w-12 text-accent" />
                <CardTitle className="text-2xl md:text-3xl font-headline text-primary">BÔNUS: Crie Seu Sabor Único</CardTitle>
                <CardDescription className="text-base md:text-lg">Use nossa IA para criar combinações de panetone com base nos seus gostos e ingredientes disponíveis.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={dispatch} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                    <Label htmlFor="preferences" className="font-semibold text-left">Suas preferências de sabor</Label>
                    <Textarea
                        id="preferences"
                        name="preferences"
                        placeholder="Ex: Adoro sobremesas com frutas vermelhas e um toque de amargor como chocolate meio amargo."
                        className="min-h-[120px]"
                    />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="ingredients" className="font-semibold text-left">Ingredientes que você tem</Label>
                    <Textarea
                        id="ingredients"
                        name="ingredients"
                        placeholder="Ex: Tenho em casa framboesas congeladas, chocolate branco e pistache."
                        className="min-h-[120px]"
                    />
                    </div>
                </div>
                <SubmitButton />
                </form>
                
                {suggestionList.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-lg md:text-xl font-headline text-center mb-4 text-primary">Sugestões para você:</h3>
                    <div className="rounded-lg border bg-card p-4 md:p-6 text-left">
                        <ul className="list-disc list-inside space-y-2">
                        {suggestionList.map((suggestion, index) => (
                            <li key={index} className="text-sm md:text-md">{suggestion}</li>
                        ))}
                        </ul>
                    </div>
                </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
