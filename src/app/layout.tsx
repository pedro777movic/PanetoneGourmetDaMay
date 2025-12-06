import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

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
        
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1384592276603123');
            fbq('track', 'PageView');
          `}
        </Script>
        
        {/* UTMIfy Pixel Code */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6934820755bc1e1f0a2c4951";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* UTMIfy UTM Capture Code */}
        <Script
          id="utmify-capture"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
            <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1384592276603123&ev=PageView&noscript=1"
            />
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
