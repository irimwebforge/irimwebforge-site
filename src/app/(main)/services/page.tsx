'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { ServiceOverview } from '@/templates/ServiceOverview';
import { CTASection } from '@/templates/CTASection';
import { Icon } from '@/components/atoms/Icon';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Divider } from '@/components/atoms/Divider';
import { IconName } from '@/components/atoms/Icon';
import { Alert } from '@/components/molecules/Alert';

export default function Page() {
  // Bannière de vision
  const VisionBanner = () => (
    <Alert 
      variant="info" 
      title="" 
      className="mb-8 mx-auto max-w-5xl"
    >
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Cette page présente ma vision de service et les résultats que j'aspire à créer pour mes clients.
        Certains éléments représentent des projections basées sur mon expérience personnelle avec mon épouse thérapeute.
      </p>
    </Alert>
  );

  const services = [
    {
      id: 'presence',
      title: 'Solution Présence',
      description: 'Autonomie Numérique Simplifiée pour les indépendants qui souhaitent gérer facilement leur site sans dépendre d\'un technicien.',
      icon: 'Laptop' as IconName,
      color: 'primary' as const,
      bulletPoints: [
        'Site web professionnel responsive adapté à votre métier spécifique',
        'Interface d\'administration simplifiée avec uniquement les fonctions dont vous avez besoin',
        'Formation pratique individuelle (2h) avec supports visuels'
      ],
      featured: true,
      ctaText: 'En savoir plus',
      slug: 'presence'
    },
    {
      id: 'integree',
      title: 'Solution Intégrée',
      description: 'Unification & Fluidité pour les professionnels qui jonglent entre plusieurs outils et cherchent un système unifié.',
      icon: 'Zap' as IconName,
      color: 'secondary' as const,
      bulletPoints: [
        'Écosystème numérique unifié remplaçant vos outils fragmentés',
        'Intégration avec vos outils existants essentiels',
        'Formation progressive adaptée à votre niveau technique'
      ],
      ctaText: 'Explorer cette solution',
      slug: 'integree'
    },
    {
      id: 'evolutive',
      title: 'Solution Évolutive',
      description: 'Croissance Sans Contrainte pour les entrepreneurs établis souhaitant faire évoluer leur infrastructure numérique.',
      icon: 'TrendingUp' as IconName,
      color: 'tertiary' as const,
      bulletPoints: [
        'Architecture numérique évolutive pour soutenir votre croissance',
        'Revue stratégique trimestrielle avec recommandations',
        'Support prioritaire pendant la phase de transition'
      ],
      ctaText: 'Découvrir cette solution',
      slug: 'evolutive'
    }
  ];

  const features = [
    {
      id: 'comprehension',
      title: 'Compréhension métier approfondie',
      description: 'Je cherche à comprendre les défis spécifiques de votre quotidien avant toute considération technique. Mon expérience personnelle avec mon épouse thérapeute m\'a montré l\'importance de cette approche.',
      icon: 'Brain' as IconName,
      color: 'primary' as const
    },
    {
      id: 'interfaces',
      title: 'Interfaces pensées pour des humains',
      description: 'Mon objectif est de créer des espaces d\'administration aussi soignés que la partie visible par vos clients. L\'interface doit s\'adapter à vous, pas l\'inverse.',
      icon: 'UserCheck' as IconName,
      color: 'secondary' as const
    },
    {
      id: 'autonomie',
      title: 'Autonomie progressive',
      description: 'Je souhaite vous accompagner vers une véritable indépendance technique, avec un plan d\'apprentissage adapté à votre niveau et vos besoins spécifiques.',
      icon: 'Key' as IconName,
      color: 'tertiary' as const
    },
    {
      id: 'resultats',
      title: 'Objectif de résultats concrets',
      description: 'Je vise des améliorations mesurables : temps gagné, diminution de stress administratif, cohérence professionnelle renforcée. Le projet personnel avec mon épouse a montré qu\'un gain de temps significatif est possible.',
      icon: 'BarChart' as IconName,
      color: 'primary' as const
    }
  ];
  
  // Transformés en projections basées sur l'expérience personnelle
  const projections = [
    {
      quote: "Pour un thérapeute holistique, l'objectif serait de passer d'une mise à jour bimensuelle anxiogène à une gestion hebdomadaire rapide (5 minutes) et sereine du planning, améliorant ainsi la fiabilité des informations pour les clients.",
      author: "Projection pour thérapeutes",
      company: "Basée sur mon expérience personnelle"
    },
    {
      quote: "Un artisan ou commerçant local pourrait économiser plusieurs heures par semaine en éliminant la synchronisation manuelle entre agenda, site web et facturation, réduisant significativement les erreurs de mise à jour.",
      author: "Projection pour artisans",
      company: "Basée sur l'analyse des besoins"
    },
    {
      quote: "Pour un collectif ou une entreprise en expansion, une solution évolutive permettrait d'intégrer facilement de nouveaux membres sans friction administrative, supportant une croissance sans charge supplémentaire.",
      author: "Projection pour structures en croissance",
      company: "Vision d'accompagnement futur"
    }
  ];

  return (
    <main className="transition-all duration-300">
      <PageHeader 
        title="Ma vision de service pour vous"
        description="Je vous présente avec transparence ce que je souhaite créer pour mes clients, inspiré par mon expérience personnelle avec mon épouse thérapeute et sa transformation digitale."
        theme="primary"
        align="center"
        size="large"
      />
      
      <Container>
        <VisionBanner />
      </Container>
      
      <ServiceOverview 
        title="Solutions envisagées" 
        description="Des approches que j'aimerais développer pour répondre à vos besoins spécifiques"
        services={services}
        features={features}
        showFeatures={true}
      />
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-8">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Transformations que j'aspire à créer
            </Typography>
            <Typography variant="lead" className="mb-6 max-w-3xl mx-auto">
              Basé sur mon expérience personnelle avec mon épouse thérapeute et ma compréhension des défis des indépendants, voici les résultats que j'aimerais pouvoir offrir à mes futurs clients.
            </Typography>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {projections.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <div className="mb-4 text-[var(--color-primary)] opacity-70">
                  <Icon name="Quote" size={24} />
                </div>
                <Typography variant="p" className="italic mb-4">
                  "{item.quote}"
                </Typography>
                <Divider className="my-4" />
                <div>
                  <Typography variant="p" className="font-semibold text-[var(--color-primary)]">
                    {item.author}
                  </Typography>
                  <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                    {item.company}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Section comparaison de prix et modèles */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Approche financière envisagée
            </Typography>
            <Typography variant="lead" className="mb-6 max-w-3xl mx-auto">
              Transparence sur les modèles économiques que je souhaite proposer, basés sur une juste valorisation du temps libéré pour vous.
            </Typography>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="p-4 text-left border-b border-gray-200 dark:border-gray-700"></th>
                  <th className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
                    <Typography variant="h4" className="text-[var(--color-primary)]">Solution Présence</Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">Autonomie numérique</Typography>
                  </th>
                  <th className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
                    <Typography variant="h4" className="text-[var(--color-secondary)]">Solution Intégrée</Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">Unification des outils</Typography>
                  </th>
                  <th className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
                    <Typography variant="h4" className="text-[var(--color-tertiary)]">Solution Évolutive</Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">Croissance optimisée</Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <Typography variant="p" className="font-semibold">Fourchette d'investissement envisagée</Typography>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">1500-2200€</td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">2800-3800€</td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">5200-7500€</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <Typography variant="p" className="font-semibold">Support envisagé</Typography>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">70€/mois</td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">140€/mois</td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">280€/mois</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <Typography variant="p" className="font-semibold">Temps d'administration économisé (objectif)</Typography>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">60%</td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">70%</td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">75%+</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <Typography variant="p" className="font-semibold">Adapté particulièrement pour</Typography>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">Indépendants, thérapeutes, artisans en solo</td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">Professionnels avec gestion multi-outils</td>
                  <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">Structures en croissance, collectifs</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-8 max-w-3xl mx-auto">
            <Typography variant="p" className="italic text-center">
              "Toute transformation numérique nécessite un investissement adapté à ses ambitions. Mon objectif est de créer des solutions où le temps récupéré représente rapidement un retour sur investissement concret - comme j'ai pu le constater avec le projet pour mon épouse."
            </Typography>
          </div>
        </Container>
      </section>
      
      <CTASection
        title="Discutons de vos besoins et de ce que je pourrais créer pour vous"
        description="Explorons ensemble comment une solution adaptée pourrait transformer votre quotidien administratif"
        primaryAction={{
          text: "Réserver un temps d'échange",
          url: "/contact",
          variant: "gradient"
        }}
        secondaryAction={{
          text: "Découvrir mon approche",
          url: "/processus",
          variant: "secondary"
        }}
        variant="card"
        backgroundColor="gradient"
        textColor="light"
      />
      
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 300ms ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 500ms ease-out forwards;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in, 
          .animate-scale-in, 
          .transition-all, 
          .transition-transform, 
          .transition-colors {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}