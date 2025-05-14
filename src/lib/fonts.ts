import { Questrial, Noto_Sans } from 'next/font/google';

// Police principale pour texte
export const questrial = Questrial({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-questrial',
});

// Police de titre (Noto Sans)
export const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});
