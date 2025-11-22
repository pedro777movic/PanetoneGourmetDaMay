'use server';

/**
 * @fileOverview Provides AI-powered suggestions for innovative panetone flavor combinations based on user preferences and available ingredients.
 *
 * - getFlavorSuggestions - A function that returns AI-powered flavor suggestions.
 * - FlavorSuggestionsInput - The input type for the getFlavorSuggestions function.
 * - FlavorSuggestionsOutput - The return type for the getFlavorSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FlavorSuggestionsInputSchema = z.object({
  preferences: z
    .string()
    .describe('User preferences for panetone flavors, e.g., chocolate, fruit, nuts.'),
  ingredients: z
    .string()
    .describe('Available ingredients, e.g., Nutella, brigadeiro, Oreo.'),
});

export type FlavorSuggestionsInput = z.infer<typeof FlavorSuggestionsInputSchema>;

const FlavorSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggested panetone flavor combinations based on user preferences and available ingredients.'
    ),
});

export type FlavorSuggestionsOutput = z.infer<typeof FlavorSuggestionsOutputSchema>;

export async function getFlavorSuggestions(
  input: FlavorSuggestionsInput
): Promise<FlavorSuggestionsOutput> {
  return flavorSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'flavorSuggestionsPrompt',
  input: {schema: FlavorSuggestionsInputSchema},
  output: {schema: FlavorSuggestionsOutputSchema},
  prompt: `You are an expert pastry chef specializing in creating unique and delicious panetone flavor combinations.

  Based on the user's preferences and available ingredients, suggest innovative and gourmet panetone flavor combinations.

  Preferences: {{{preferences}}}
  Ingredients: {{{ingredients}}}

  Provide a list of suggested flavor combinations that are creative, complementary, and likely to be well-received by customers. The response should be easily readable.
  Example:
  - Brigadeiro with Hazelnut
  - Lemon with White Chocolate and Almonds
  - Pistachio and Raspberry
  `,
});

const flavorSuggestionsFlow = ai.defineFlow(
  {
    name: 'flavorSuggestionsFlow',
    inputSchema: FlavorSuggestionsInputSchema,
    outputSchema: FlavorSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
