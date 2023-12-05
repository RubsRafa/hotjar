import './styles/reset.css'
import './globals.css'
import './styles/typography.css'
import './styles/colors.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Script from 'next/script'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id='HotjarAnalytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html:
              `
         (function(h,o,t,j,a,r){
           h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
         h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HJID},hjsv:${process.env.NEXT_PUBLIC_HJSV}};
         a=o.getElementsByTagName('head')[0];
         r=o.createElement('script');r.async=1;
         r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
         a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
       `
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
