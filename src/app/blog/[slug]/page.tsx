import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Articles data - in a real app, this would come from MDX processing
const articles: Record<
  string,
  {
    title: string;
    description: string;
    date: string;
    tags: string[];
    content: React.ReactNode;
  }
> = {
  'mon-parcours': {
    title: 'Mon parcours au service de votre autonomie',
    description:
      'De formateur à développeur web, comment une expérience personnelle transformatrice guide ma démarche.',
    date: '6 décembre 2025',
    tags: ['parcours', 'histoire', 'valeurs'],
    content: (
      <>
        <p className="text-lg mb-6">
          Créateur de solutions digitales, mon parcours atypique me permet d'apporter une
          perspective différente à vos défis numériques.
        </p>

        <h2>Ma conviction</h2>
        <blockquote className="border-l-4 border-primary-500 pl-6 my-6 italic text-lg">
          "Les outils numériques devraient libérer du temps pour l'humain, pas en consommer."
        </blockquote>
        <p>
          Cette conviction s'est renforcée en créant une interface pour mon épouse thérapeute,
          transformant <strong>7h d'administration en 45 minutes</strong>. Cette expérience a
          déclenché ma démarche actuelle.
        </p>
        <blockquote className="border-l-4 border-primary-500 pl-6 my-6 italic text-lg">
          "Je crée des ponts entre votre expertise métier et les possibilités du numérique, pour que
          vous puissiez vous concentrer sur l'essentiel."
        </blockquote>

        <h2>Les étapes clés de mon parcours</h2>

        <h3>Avant 2023 — Formation et accompagnement</h3>
        <p>
          Formation d'animateurs et directeurs de centres de loisirs. Accompagnement dans la prise
          de fonction, l'identification des valeurs et la maîtrise d'outils concrets. Formation en
          gestion de conflit et médiation.
        </p>

        <h3>Janvier 2024 — Révélation personnelle</h3>
        <p>
          En créant une solution pour mon épouse thérapeute, je redécouvre ma passion pour la
          programmation, endormie depuis 20 ans. L'évidence : j'adore concevoir des interfaces qui
          simplifient le quotidien.
        </p>

        <h3>2024-2025 — Formation aux outils modernes</h3>
        <p>
          OpenClassrooms me forme aux technologies actuelles et au design. Projets concrets et
          mentorat pour maîtriser React, Next.js et l'art de créer des interfaces intuitives.
        </p>

        <h3>Mars 2025 — Lancement IRIM Webforge</h3>
        <p>
          Création officielle de mon activité pour accompagner les indépendants, en combinant mes
          compétences d'accompagnement et ma passion retrouvée pour le code.
        </p>

        <h3>Décembre 2025 — ResetPulse déployé dans 177 pays</h3>
        <p>
          Application mobile Time Timer pour cerveaux neuroatypiques. Disponible sur App Store et
          Google Play. 15 palettes, 16 activités, multilingue.
        </p>

        <h3>Décembre 2025 — DemoForge plateforme live</h3>
        <p>
          Plateforme démo interactive multi-univers pour commerçants. Architecture fullstack
          complète avec modification en temps réel.
        </p>

        <h2>Comment je vous fais gagner du temps</h2>

        <h3>Je comprends votre quotidien</h3>
        <p>
          Mon expérience en formation m'a appris à vraiment écouter. Je cherche à comprendre vos
          défis réels avant de proposer des solutions.
        </p>

        <h3>Autonomie progressive</h3>
        <p>
          Je vous rends autonome sans créer de dépendance. Vous maîtrisez votre outil à votre
          rythme.
        </p>

        <h3>Artisanat digital</h3>
        <p>Chaque interface est conçue sur mesure, comme un artisan façonne une pièce unique.</p>

        <h3>Transparence</h3>
        <p>Je suis honnête sur mes capacités actuelles et mes ambitions futures.</p>

        <h2>Formation et compétences</h2>
        <p>
          <strong>Développeur Web Full-Stack</strong> — OpenClassrooms | 2023-2024
        </p>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>React Native (Apps mobiles)</li>
          <li>IA et Automatisation</li>
          <li>Design UI/UX</li>
        </ul>
      </>
    ),
  },
  'mes-services': {
    title: 'Mes services et tarifs',
    description:
      'Des solutions numériques pour libérer votre temps. 3 formules adaptées à vos besoins.',
    date: '6 décembre 2025',
    tags: ['services', 'tarifs', 'offres'],
    content: (
      <>
        <p className="text-lg mb-6">
          Des solutions concrètes, pensées pour les thérapeutes, commerçants, artisans et tous les
          indépendants qui veulent se concentrer sur leur métier, pas sur la technique.
        </p>

        <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4 my-8">
          <p className="text-primary-700 dark:text-primary-300 font-medium">
            <strong>Offre Starter</strong> — À partir de 500€ pour démarrer simplement.
          </p>
        </div>

        <h2>Formule Présence — 1 500 à 2 200€</h2>
        <p className="font-medium text-lg mb-4">
          Vous gérez votre site en toute sérénité. Plus besoin d'attendre quelqu'un.
        </p>
        <p>
          Une solution complète pour gérer votre présence en ligne de manière autonome. Idéale pour
          les indépendants et thérapeutes qui veulent se concentrer sur leur métier.
        </p>

        <h3>Ce qui est inclus :</h3>
        <ul>
          <li>Site responsive qui s'adapte à tous les appareils</li>
          <li>Interface intuitive, simple comme votre téléphone</li>
          <li>Formation 2h avec aide-mémoire personnalisé</li>
          <li>Migration de vos contenus existants</li>
          <li>Support réactif (réponse sous 24h)</li>
        </ul>
        <p>
          <strong>Support mensuel :</strong> 70€/mois
        </p>

        <h2>Formule Intégrée — 3 500 à 5 000€</h2>
        <p className="font-medium text-lg mb-4">
          Tout est connecté. Agenda, factures, site web. Vous mettez à jour une fois.
        </p>
        <p>
          Une solution intégrée qui connecte tous vos outils numériques. Parfaite pour les
          professionnels qui veulent automatiser leurs tâches administratives.
        </p>

        <h3>Ce qui est inclus :</h3>
        <ul>
          <li>Audit complet de vos processus actuels</li>
          <li>Développement sur mesure (intégrations, automatisations)</li>
          <li>Formation équipe (4h)</li>
          <li>Support premium avec hotline dédiée</li>
          <li>Monitoring 24/7 de vos systèmes</li>
        </ul>
        <p>
          <strong>Support mensuel :</strong> 150€/mois
        </p>

        <h2>Formule Évolutive — 2 500 à 4 000€</h2>
        <p className="font-medium text-lg mb-4">
          Votre outil grandit avec vous. Ajoutez des fonctionnalités au fur et à mesure.
        </p>
        <p>
          Une solution flexible qui évolue avec votre entreprise. Idéale pour les entrepreneurs qui
          veulent démarrer simplement.
        </p>

        <h3>Ce qui est inclus :</h3>
        <ul>
          <li>Architecture modulaire</li>
          <li>Roadmap personnalisée adaptée à vos objectifs</li>
          <li>Tests utilisateurs avant chaque évolution</li>
          <li>Support évolutif selon votre croissance</li>
          <li>Formation continue</li>
        </ul>
        <p>
          <strong>Support mensuel :</strong> 100€/mois
        </p>

        <h2>Mes différenciateurs</h2>

        <h3>Je connais votre quotidien</h3>
        <p>
          J'ai aidé mon épouse thérapeute. Je sais ce que c'est de jongler entre clients et
          administratif.
        </p>

        <h3>Résultats mesurables</h3>
        <p>
          Exemple réel : mon épouse thérapeute a retrouvé <strong>6h par semaine</strong> grâce à
          une interface adaptée.
        </p>

        <h3>L'IA au service de votre métier</h3>
        <p>
          J'intègre des automatisations intelligentes pour réduire vos tâches répétitives. Pas de
          gadget, du concret.
        </p>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: 'Article non trouvé' };
  return {
    title: `${article.title} | IRIM Webforge`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-section-primary py-16">
      <Container>
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Typography as="h1" variant="h1" className="mb-4">
              {article.title}
            </Typography>
            <Typography variant="lead" className="text-secondary mb-4">
              {article.description}
            </Typography>
            <Typography variant="small" className="text-tertiary">
              {article.date}
            </Typography>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">{article.content}</div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-section-secondary rounded-lg text-center">
            <Typography as="h3" variant="h3" className="mb-4">
              Échangeons sur vos défis
            </Typography>
            <Typography variant="p" className="text-secondary mb-6">
              45 minutes pour discuter de votre projet. Sans pression commerciale.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="large" href="tel:+33678764559">
                06 78 76 45 59
              </Button>
              <Button
                variant="outline"
                size="large"
                href="https://cal.com/eric-zuber-nxxypt/30min"
                target="_blank"
              >
                Réserver une visio
              </Button>
            </div>
          </div>

          {/* Back */}
          <div className="mt-12 text-center">
            <Button variant="ghost" href="/blog">
              ← Retour au blog
            </Button>
          </div>
        </article>
      </Container>
    </main>
  );
}
