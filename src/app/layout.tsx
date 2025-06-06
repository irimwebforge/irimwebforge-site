import { Metadata, Viewport } from 'next';
import { questrial, notoSans } from '@/lib/fonts';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata = {
  title: 'IRIM Webforge | Sites web qui vous ressemblent',
  description:
    "Développeur freelance spécialisé en interfaces admin sur mesure pour thérapeutes et artisans. Passez de 7h à 45min d'administration.",
  keywords: 'développeur freelance, interface admin, site sur mesure, thérapeute, artisan',
  openGraph: {
    title: 'IRIM Webforge | Sites web qui libèrent votre temps',
    description: 'Interfaces admin sur mesure pour indépendants',
    type: 'website',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  themeColor: 'var(--color-primary)',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${questrial.variable} ${notoSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'IRIM Webforge',
              url: 'https://irimwebforge.com',
              telephone: '06 78 76 45 59',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '11 route de Paris',
                addressLocality: 'Ittenheim',
                postalCode: '67117',
                addressCountry: 'FR',
              },
              service: {
                '@type': 'Service',
                name: 'Développement interfaces administratives sur mesure',
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <GoogleAnalytics gaId="G-QJ7G6HJPDM" />
      </body>
    </html>
  );
}
