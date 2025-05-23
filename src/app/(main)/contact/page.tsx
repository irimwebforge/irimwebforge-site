// Métadonnées SEO pour la page contact
export const metadata = {
  title: 'Contact | IrimWebForge - Parlons de votre projet numérique',
  description:
    'Contactez-moi pour discuter de votre projet. Échange gratuit de 30 minutes pour comprendre vos besoins et vous proposer la solution adaptée.',
};

import ContactClient from './client';

export default function ContactPage() {
  return <ContactClient />;
}
