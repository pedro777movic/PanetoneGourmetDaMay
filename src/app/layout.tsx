import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Panetone Gourmet da May - O Curso Definitivo',
  description: 'Aprenda a criar o panetone gourmet que virou obsessão neste Natal. Aulas passo a passo, receitas exclusivas e técnicas profissionais para panetones ultra cremosos.',
  keywords: ['panetone gourmet', 'curso de panetone', 'receita de panetone', 'panetone trufado', 'panetone recheado', 'renda extra natal', 'confeitaria', 'receitas de natal'],
  authors: [{ name: 'May' }],
  creator: 'May',
  publisher: 'May',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
