'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { ValueProposition } from '@/templates/ValueProposition';
import { TestimonialSection } from '@/templates/TestimonialSection';
import { CTASection } from '@/templates/CTASection';
import { StatsShowcase } from '@/templates/StatsShowcase';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Icon, IconName } from '@/components/atoms/Icon';

export default function Page() {
  const values = [
    {
      id: 'autonomie',
      title: 'Autonomie sereine',
      description:
        'Reprenez le contrôle de votre présence en ligne sans dépendance technique. Mettez à jour votre site vous-même, sans crainte de "tout casser".',
      icon: <Icon name="Unlock" size={32} />,
      color: 'primary' as const,
    },
    {
      id: 'temps',
      title: 'Gain de temps mesurable',
      description:
        "Passez de 7h à 45min d'administration hebdomadaire comme l'a fait mon épouse thérapeute. Récupérez un temps précieux pour votre cœur de métier.",
      icon: <Icon name="Clock" size={32} />,
      color: 'secondary' as const,
    },
    {
      id: 'authenticite',
      title: 'Authenticité digitale',
      description:
        'Une présence en ligne qui reflète véritablement qui vous êtes, pas un template standardisé. Vos valeurs et votre identité transpirent dans chaque aspect de votre site.',
      icon: <Icon name="Heart" size={32} />,
      color: 'tertiary' as const,
    },
    {
      id: 'evolution',
      title: 'Évolution sans friction',
      description:
        "Des solutions qui grandissent avec vous, sans tout reconstruire. Votre présence digitale s'adapte à l'évolution de votre activité, sans recommencer à zéro.",
      icon: <Icon name="TrendingUp" size={32} />,
      color: 'primary' as const,
    },
  ];

  const stats = [
    {
      value: '85%',
      label: 'Réduction du temps administratif',
      description: 'En moyenne pour mes clients',
    },
    {
      value: '100%',
      label: 'Autonomie technique',
      description: 'Pour gérer votre présence en ligne',
    },
    {
      value: '24h',
      label: 'Temps de réponse',
      description: 'Support personnalisé',
    },
    {
      value: '97%',
      label: 'Satisfaction client',
      description: 'Basée sur les retours après 3 mois',
    },
  ];

  const testimonials = [
    {
      quote:
        "Eric a fait plus que créer un site web, il a véritablement compris mon métier et mes contraintes. Je ne perds plus mon dimanche à mettre à jour mon site. J'ai maintenant une interface simple qui me correspond et me fait gagner un temps précieux.",
      author: 'Marie',
      company: 'Thérapeute énergétique',
    },
    {
      quote:
        "Ce qui me frappe chez Eric, c'est sa capacité à comprendre mes besoins même quand je ne sais pas les exprimer clairement. Il traduit mes idées floues en solutions concrètes et intuitives.",
      author: 'Thomas',
      company: 'Consultant indépendant',
    },
  ];

  return (
    <main>
      <PageHeader
        title="Le pont entre votre vision et sa concrétisation digitale"
        description="Mon parcours atypique de formateur et gestionnaire de conflit au développement web m'a donné une perspective unique que les développeurs traditionnels n'ont pas. Cette double compétence me permet de voir ce que d'autres manquent."
        theme="primary"
        align="center"
        size="medium"
      />

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
                Double compréhension métier et technique
              </Typography>

              <Typography variant="p" className="mb-4">
                Je comprends à la fois votre réalité métier et les solutions techniques. Je pose des
                questions que d'autres développeurs ne penseraient pas à poser pour comprendre votre
                métier au-delà de vos besoins techniques.
              </Typography>

              <Typography variant="p" className="mb-4">
                Mon expérience en tant que formateur m'a appris à vulgariser les concepts complexes
                et à écouter véritablement les besoins exprimés comme implicites.
              </Typography>

              <div className="flex items-center mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Icon
                  name="Quote"
                  size={48}
                  className="text-[var(--color-primary)] opacity-30 mr-4"
                />
                <Typography variant="lead" className="italic">
                  "Je traduis vos aspirations professionnelles en réalités digitales concrètes et
                  autonomes"
                </Typography>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-inner">
              <Typography as="h3" variant="h3" className="mb-4">
                Mon approche en 3 étapes
              </Typography>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <Typography as="h4" variant="h4" className="mb-1">
                      Immersion dans votre métier
                    </Typography>
                    <Typography variant="p">
                      Je commence par comprendre en profondeur votre activité, vos contraintes et
                      vos aspirations avant de parler technique.
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <Typography as="h4" variant="h4" className="mb-1">
                      Co-création adaptée
                    </Typography>
                    <Typography variant="p">
                      Nous construisons ensemble une solution parfaitement adaptée à vos processus
                      de travail, pas l'inverse.
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-tertiary)] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <Typography as="h4" variant="h4" className="mb-1">
                      Transfert progressif d'autonomie
                    </Typography>
                    <Typography variant="p">
                      Je vous accompagne jusqu'à ce que vous soyez parfaitement à l'aise pour gérer
                      votre présence digitale en toute indépendance.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ValueProposition
        title="Une approche qui transforme concrètement votre quotidien"
        values={values}
        valueLayout="grid"
        backgroundColor="light"
      />

      <StatsShowcase
        title="L'impact concret de mon accompagnement"
        description="Des résultats mesurables, pas des promesses vagues"
        stats={stats}
        layout="cards"
        columns={4}
        backgroundColor="light"
      />

      <TestimonialSection
        title="Ce qu'en disent mes clients"
        testimonials={testimonials}
        variant="featured"
        backgroundColor="primary"
      />

      <CTASection
        title="Prêt à libérer votre temps et votre énergie créative?"
        description="Discutons de vos aspirations digitales et voyons comment je peux vous aider à les concrétiser."
        primaryAction={{
          text: 'Réserver ma conversation découverte',
          url: '/contact',
          variant: 'gradient',
        }}
        secondaryAction={{
          text: 'Découvrir mes services',
          url: '/services',
          variant: 'secondary',
        }}
        variant="split"
        backgroundColor="transparent"
        textColor="auto"
      />
    </main>
  );
}
