'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { ConversationForm } from '@/components/molecules/ConversationForm';
import { Typography } from '@/components/atoms/Typography';
import { Icon, IconName } from '@/components/atoms/Icon';
import { Container } from '@/components/atoms/Container';
import { Alert } from '@/components/molecules/Alert';
import { useState, useEffect } from 'react';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import { CTASection } from '@/templates/CTASection';

export default function Page() {
  // États pour le formulaire
  const [formData, setFormData] = useState({});
  const [formComplete, setFormComplete] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Bannière de vision
  const VisionBanner = () => (
    <Alert variant="info" title="" className="mb-8 mx-auto max-w-5xl">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Cette page vous propose un échange sans engagement pour explorer vos défis quotidiens. Ma
        démarche est transparente: je débute mon aventure freelance avec une expérience fondatrice
        et une vision claire.
      </p>
    </Alert>
  );

  // Fonction pour soumettre le formulaire complet
  const handleFormSubmit = async (completeData: Record<string, any>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(completeData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      // Si tout se passe bien, marquer le formulaire comme complet
      setFormComplete(true);
      console.log('Form data sent successfully:', completeData);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer ou me contacter directement par email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Définition des étapes de conversation
  const conversationSteps = [
    {
      title: 'Faisons connaissance',
      description:
        "Pour préparer notre échange, j'aimerais en savoir un peu plus sur vous et votre activité.",
      fields: [
        {
          id: 'fullName',
          label: 'Comment vous appelez-vous ?',
          type: 'text' as const,
          placeholder: 'Votre nom complet',
          required: true,
        },
        {
          id: 'profession',
          label: 'Dans quel domaine exercez-vous ?',
          type: 'select' as const,
          options: [
            { value: 'therapist', label: 'Thérapeute / Praticien bien-être' },
            { value: 'artisan', label: 'Artisan / Créateur' },
            { value: 'freelance', label: 'Indépendant / Freelance' },
            { value: 'smallbusiness', label: 'Petite entreprise (1-5 personnes)' },
            { value: 'other', label: 'Autre' },
          ],
          required: true,
        },
        {
          id: 'email',
          label: 'Votre email pour vous recontacter',
          type: 'email' as const,
          placeholder: 'email@exemple.com',
          required: true,
        },
        {
          id: 'phone',
          label: 'Votre téléphone (facultatif)',
          type: 'tel' as const,
          placeholder: 'Numéro de téléphone',
          required: false,
        },
      ],
    },
    {
      title: 'Vos défis quotidiens',
      description:
        "Parlons de ce qui vous prend du temps et de l'énergie dans la gestion de votre activité.",
      fields: [
        {
          id: 'timeWasted',
          label:
            'Combien de temps estimez-vous passer par semaine sur des tâches administratives ?',
          type: 'select' as const,
          options: [
            { value: 'less-3', label: 'Moins de 3 heures' },
            { value: '3-5', label: 'Entre 3 et 5 heures' },
            { value: '5-10', label: 'Entre 5 et 10 heures' },
            { value: 'more-10', label: 'Plus de 10 heures' },
          ],
          required: true,
        },
        {
          id: 'mainChallenges',
          label: 'Quelles tâches vous frustrent ou vous prennent le plus de temps actuellement ?',
          type: 'select' as const,
          options: [
            { value: 'website', label: 'Gestion de mon site web ou présence en ligne' },
            { value: 'scheduling', label: 'Gestion de mon agenda et des rendez-vous' },
            { value: 'communication', label: 'Communication avec les clients (emails, suivi)' },
            { value: 'billing', label: 'Facturation et suivi des paiements' },
            { value: 'content', label: 'Création de contenus (site/réseaux sociaux)' },
            { value: 'multiple', label: 'Plusieurs de ces tâches à la fois' },
          ],
          required: true,
        },
        {
          id: 'frustration',
          label:
            'Quelle est votre plus grande source de frustration dans votre quotidien professionnel ?',
          type: 'textarea' as const,
          placeholder: 'Ce qui vous empêche de vous concentrer sur votre cœur de métier...',
          required: true,
        },
      ],
    },
    {
      title: 'Votre projet en détail',
      description:
        'Décrivez-moi votre projet, vos idées ou vos besoins. Plus vous serez précis, mieux je pourrai préparer notre échange.',
      fields: [
        {
          id: 'projectType',
          label: 'Quel type de projet envisagez-vous ?',
          type: 'select' as const,
          options: [
            { value: 'site-vitrine', label: 'Site vitrine pour présenter mon activité' },
            { value: 'site-admin', label: "Site avec interface d'administration sur mesure" },
            { value: 'amelioration', label: "Amélioration d'un site existant" },
            { value: 'application', label: 'Application web/mobile spécifique' },
            { value: 'conseil', label: 'Conseil sur ma présence numérique' },
            { value: 'autre', label: 'Autre / Je ne sais pas encore précisément' },
          ],
          required: true,
        },
        {
          id: 'projectTimeline',
          label: 'Quel est votre calendrier pour ce projet ?',
          type: 'select' as const,
          options: [
            { value: 'urgent', label: "Urgent (moins d'un mois)" },
            { value: 'soon', label: 'Dans les 1 à 3 mois' },
            { value: 'later', label: "Plus tard dans l'année" },
            { value: 'no-rush', label: 'Pas de contrainte de temps particulière' },
          ],
          required: true,
        },
        {
          id: 'projectDescription',
          label: 'Décrivez librement votre projet et vos attentes',
          type: 'textarea' as const,
          placeholder:
            'Partagez ici tous les détails qui vous semblent pertinents pour notre discussion. Vos besoins spécifiques, vos inspirations, des exemples que vous aimez...',
          required: true,
          rows: 6,
        },
        {
          id: 'additionalInfo',
          label: 'Y a-t-il autre chose que vous souhaitez partager avant notre échange ?',
          type: 'textarea' as const,
          placeholder: 'Questions, précisions, préférences pour le rendez-vous...',
          required: false,
        },
      ],
    },
  ];

  // Les champs organisés par étapes
  const allFields = [
    ...conversationSteps[0].fields,
    ...conversationSteps[1].fields,
    ...conversationSteps[2].fields,
  ];

  // Les étapes pour le formulaire
  const steps = [
    {
      title: conversationSteps[0].title,
      description: conversationSteps[0].description,
    },
    {
      title: conversationSteps[1].title,
      description: conversationSteps[1].description,
    },
    {
      title: conversationSteps[2].title,
      description: conversationSteps[2].description,
    },
  ];

  const conversationTopics = [
    {
      title: 'Comprendre votre quotidien',
      description:
        "J'explorerai avec vous les aspects de votre activité qui vous demandent du temps et de l'énergie",
      icon: 'Search' as IconName,
    },
    {
      title: 'Identifier les opportunités',
      description:
        "Ensemble, nous découvrirons où se trouvent les leviers d'amélioration les plus impactants",
      icon: 'Lightbulb' as IconName,
    },
    {
      title: 'Esquisser des pistes',
      description: 'Je vous proposerai quelques idées adaptées à votre situation spécifique',
      icon: 'Pen' as IconName,
    },
    {
      title: 'Explorer les possibilités',
      description:
        'Sans engagement, nous verrons si une collaboration pourrait vous être bénéfique',
      icon: 'Compass' as IconName,
    },
  ];

  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <PageHeader
        title="Échange sans obligation"
        description="45 minutes pour échanger sur votre projet. Sans pression commerciale, sans jargon technique."
        align="center"
        size="medium"
        pattern={true}
        badge={{ text: 'Conversation sans engagement', variant: 'primary' }}
      />

      {/* <Container>
        <VisionBanner />
      </Container> */}

      <section id="conversation" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
              Un échange constructif en 4 étapes
            </Typography>
            <Typography variant="lead" className="mb-12">
              Une discussion de 45 minutes pour explorer vos défis et voir comment libérer du temps
              pour votre cœur de métier.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {conversationTopics.map((topic, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-t-4 border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-primary-100)] mb-4 mx-auto transition-transform duration-150 group-hover:scale-110">
                    <Icon name={topic.icon} className="text-[var(--color-primary)]" />
                  </div>
                  <Typography as="h3" variant="h4" className="mb-2 text-center">
                    {topic.title}
                  </Typography>
                  <Typography variant="p" className="text-center text-sm">
                    {topic.description}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Icon name="Info" size={20} className="text-[var(--color-primary)]" />
                <Typography variant="p" className="font-semibold text-[var(--color-primary)]">
                  Une conversation authentique
                </Typography>
              </div>
              <Typography variant="p" className="text-center mb-4">
                Cet échange est avant tout une opportunité de mieux nous connaître. Vous repartirez
                avec des pistes de réflexion concrètes, que nous décidions de collaborer ou non.
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      <section id="form-section" className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
              Préparons notre conversation
            </Typography>
            <Typography variant="p" className="mb-8">
              Pour que notre échange soit le plus productif possible, partagez quelques informations
              sur vous et votre activité.
            </Typography>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="lg:w-1/3 order-2 lg:order-1">
              <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                <Typography as="h3" variant="h3" className="mb-6 font-bold">
                  Quelques précisions
                </Typography>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 mt-0.5">
                      <Icon name="Check" className="text-green-600" size={18} />
                    </div>
                    <div>
                      <Typography variant="p" className="font-semibold">
                        Sans engagement
                      </Typography>
                      <Typography variant="small" className="text-gray-600 dark:text-gray-400">
                        Une conversation pour mieux nous connaître et voir si je peux vous aider
                      </Typography>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 mt-0.5">
                      <Icon name="Check" className="text-green-600" size={18} />
                    </div>
                    <div>
                      <Typography variant="p" className="font-semibold">
                        Confidentialité assurée
                      </Typography>
                      <Typography variant="small" className="text-gray-600 dark:text-gray-400">
                        Vos informations restent strictement privées
                      </Typography>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 mt-0.5">
                      <Icon name="Check" className="text-green-600" size={18} />
                    </div>
                    <div>
                      <Typography variant="p" className="font-semibold">
                        Conversation humaine
                      </Typography>
                      <Typography variant="small" className="text-gray-600 dark:text-gray-400">
                        Pas de jargon technique, juste une vraie discussion sur vos besoins
                      </Typography>
                    </div>
                  </li>
                </ul>

                <div className="bg-[var(--color-primary-100)] p-4 rounded-lg">
                  <Typography as="h4" variant="h4" className="mb-3 text-[var(--color-primary)]">
                    Contact direct
                  </Typography>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" className="text-[var(--color-primary)]" />
                      <Typography variant="p">contact@irimwebforge.com</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" className="text-[var(--color-primary)]" />
                      <Typography variant="p">06 78 76 45 59</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="text-[var(--color-primary)]" />
                      <Typography variant="p">11 route de Paris, 67117 Ittenheim</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                {!formComplete ? (
                  <>
                    {/* Indicateur visuel de progression */}
                    <div className="flex justify-between mb-8">
                      {conversationSteps.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-[30%] h-1.5 rounded-full transition-all duration-500 ease-out bg-gray-200 dark:bg-gray-700`}
                        />
                      ))}
                    </div>

                    {/* Nouveau formulaire avec étapes */}
                    <ConversationForm
                      fields={allFields}
                      steps={steps}
                      onSubmit={handleFormSubmit}
                      submitButtonText="Planifier notre conversation"
                      className="space-y-6"
                      loading={isSubmitting}
                    />
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto bg-[var(--color-primary-100)] rounded-full flex items-center justify-center mb-8 animate-scale-in">
                      <Icon name="Check" size={40} className="text-[var(--color-primary)]" />
                    </div>
                    <Typography
                      as="h3"
                      variant="h2"
                      className="font-bold mb-4 animate-fade-in"
                      style={{ animationDelay: '150ms' }}
                    >
                      C'est noté !
                    </Typography>
                    <Typography
                      variant="lead"
                      className="mb-6 max-w-md mx-auto animate-fade-in"
                      style={{ animationDelay: '300ms' }}
                    >
                      Merci d'avoir pris le temps de partager ces informations avec moi.
                    </Typography>
                    <Typography
                      variant="p"
                      className="mb-4 text-gray-600 dark:text-gray-300 animate-fade-in"
                      style={{ animationDelay: '450ms' }}
                    >
                      Je vous contacterai personnellement dans les 24h pour convenir ensemble d'un
                      moment d'échange. J'ai hâte de discuter avec vous et de comprendre plus en
                      détail votre activité et vos défis.
                    </Typography>
                    <Typography
                      variant="p"
                      className="mb-8 text-gray-600 dark:text-gray-300 animate-fade-in"
                      style={{ animationDelay: '600ms' }}
                    >
                      En attendant, vous pouvez consulter ma{' '}
                      <Link
                        href="/processus"
                        className="text-[var(--color-primary)] underline font-medium hover:text-[var(--color-primary-600)]"
                      >
                        vision du processus
                      </Link>{' '}
                      pour mieux comprendre mon approche.
                    </Typography>
                    {submitError && (
                      <div
                        className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md mb-6 animate-fade-in"
                        style={{ animationDelay: '300ms' }}
                      >
                        <Typography variant="p" className="text-red-600 dark:text-red-400">
                          {submitError}
                        </Typography>
                      </div>
                    )}
                    <Button
                      variant="outline"
                      onClick={() => {
                        setFormComplete(false);
                        setFormData({});
                        setSubmitError('');
                      }}
                      className="animate-fade-in"
                      style={{ animationDelay: '750ms' }}
                    >
                      Remplir un nouveau formulaire
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
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
