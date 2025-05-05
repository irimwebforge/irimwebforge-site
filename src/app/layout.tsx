import { questrial, notoSans } from '@/lib/fonts';
import './globals.css';

export const metadata = {
  title: 'IrimWebForge | Interfaces admin sur mesure',
  description: 'Développement d\'interfaces admin personnalisées qui reflètent authentiquement l\'identité de chaque client.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${questrial.variable} ${notoSans.variable}`}>
      <body className="font-sans bg-light text-dark">
        {children}
      </body>
    </html>
  );
}