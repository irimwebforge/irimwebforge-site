'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { ConversationForm } from '@/components/molecules/ConversationForm';
import { Typography } from '@/components/atoms/Typography';
import { Icon, IconName } from '@/components/atoms/Icon';
import { Container } from '@/components/atoms/Container';
import { Alert } from '@/components/molecules/Alert';
import { useState } from 'react';
import { NavLink } from '@/components/atoms/NavLink';

export default function ContactClient() {
  // États pour le formulaire
  const [formComplete, setFormComplete] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Étapes de conversation pour le formulaire
  const conversationSteps = [
    {
      title: 'Faisons connaissance',
      description: 'Quelques infos pour mieux comprendre votre contexte',
      fields: [
        {
          id: 'prenom',
          label: 'Votre prénom',
          type: 'text' as const,
          required: true,
          placeholder: 'Comment puis-je vous appeler ?',
        },
        {
          id: 'email',
          label: 'Votre email',
          type: 'email' as const,
          required: true,
          placeholder: 'Pour que je puisse vous recontacter',
        },
        {
          id: 'activite',
          label: 'Votre activité',
          type: 'text' as const,
          required: true,
          placeholder: 'Thérapeute, artisan, consultant...',
        },
        {
          id: 'experience',
          label: 'Depuis combien de temps ?',
          type: 'select' as const,
          required: true,
          options: [
            { value: 'debut', label: 'Je démarre (moins de 2 ans)' },
            { value: 'etabli', label: 'Activité établie (2-10 ans)' },
            { value: 'experimente', label: 'Expérimenté (plus de 10 ans)' },
          ],
        },
      ],
    },
    {
      title: 'Votre quotidien',
      description: 'Parlons de votre organisation actuelle',
      fields: [
        {
          id: 'timeWasted',
          label: "Temps hebdomadaire sur l'administratif ?",
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
          label: 'Quelle tâche vous prend le plus de temps ?',
          type: 'select' as const,
          options: [
            { value: 'website', label: 'Gestion de mon site web' },
            { value: 'scheduling', label: 'Planning et rendez-vous' },
            { value: 'communication', label: 'Communication clients' },
            { value: 'billing', label: 'Facturation et suivi' },
            { value: 'content', label: 'Création de contenus' },
            { value: 'multiple', label: 'Un peu de tout' },
          ],
          required: true,
        },
        {
          id: 'currentSolution',
          label: 'Comment vous organisez-vous actuellement ?',
          type: 'textarea' as const,
          placeholder: 'Outils, méthodes, ce qui marche ou pas...',
          required: false,
          rows: 3,
        },
      ],
    },
    {
      title: 'Votre projet',
      description: 'Parlons de ce que vous avez en tête',
      fields: [
        {
          id: 'projectType',
          label: 'Quel type de projet vous intéresse ?',
          type: 'select' as const,
          options: [
            { value: 'site-vitrine', label: 'Site pour présenter mon activité' },
            { value: 'site-admin', label: 'Site avec interface de gestion' },
            { value: 'amelioration', label: "Améliorer ce que j'ai déjà" },
            { value: 'application', label: 'Application spécifique' },
            { value: 'conseil', label: 'Conseil et orientation' },
            { value: 'autre', label: 'Je ne sais pas encore' },
          ],
          required: true,
        },
        {
          id: 'projectTimeline',
          label: 'Votre calendrier ?',
          type: 'select' as const,
          options: [
            { value: 'urgent', label: "Urgent (moins d'un mois)" },
            { value: 'soon', label: 'Dans les 2-3 mois' },
            { value: 'later', label: "Plus tard dans l'année" },
            { value: 'no-rush', label: 'Pas pressé' },
          ],
          required: true,
        },
        {
          id: 'projectDescription',
          label: 'Décrivez votre projet',
          type: 'textarea' as const,
          placeholder: 'Vos idées, besoins, inspirations...',
          required: false,
          rows: 4,
        },
        {
          id: 'additionalInfo',
          label: 'Autre chose à ajouter ?',
          type: 'textarea' as const,
          placeholder: 'Questions, précisions...',
          required: false,
          rows: 2,
        },
      ],
    },
  ];

  // Informations de contact
  const contactInfo = [
    {
      id: 'email',
      title: 'Email',
      value: 'eric.zuber@irimwebforge.com',
      description: 'Réponse garantie sous 24h',
      icon: 'Mail' as IconName,
      color: 'primary' as const,
      href: 'mailto:eric.zuber@irimwebforge.com',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'Eric Zuber',
      description: 'Mon parcours professionnel',
      icon: 'Linkedin' as IconName,
      color: 'secondary' as const,
      href: 'https://www.linkedin.com/in/eric-zuber-b93bb7162/',
    },
    {
      id: 'location',
      title: 'Localisation',
      value: 'Strasbourg, France',
      description: 'Télétravail partout en France',
      icon: 'MapPin' as IconName,
      color: 'tertiary' as const,
    },
  ];

  // Fonction pour soumettre le formulaire complet
  const handleFormSubmit = async (completeData: Record<string, unknown>) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      console.log('Envoi des données:', completeData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(completeData),
      });

      const responseData = await response.json();
      console.log('Réponse API:', responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Erreur lors de l'envoi du formulaire");
      }

      // Si tout se passe bien, marquer le formulaire comme complet
      setFormComplete(true);
    } catch (error) {
      // Message d'erreur plus sympathique
      if (error instanceof Error) {
        if (error.message.includes('fetch')) {
          setSubmitError('Problème de connexion. Vérifiez votre réseau et réessayez.');
        } else {
          setSubmitError(error.message);
        }
      } else {
        setSubmitError(
          "Une erreur inattendue s'est produite. Vous pouvez me contacter directement par email !"
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Discutons de votre projet"
        description="Que ce soit pour un projet sur mesure, un diagnostic numérique gratuit de 30 minutes, ou simplement une question, je vous répondrai dans les 24h."
        align="center"
        size="medium"
        pattern={true}
      />

      {/* <Container>
        <QuickVisionBanner 
          page="contact" 
          dismissible={true}
        />
      </Container> */}

      {!formComplete && (
        <>
          {submitError && (
            <section className="py-8">
              <Container>
                <Alert variant="error" className="max-w-3xl mx-auto">
                  {submitError}
                </Alert>
              </Container>
            </section>
          )}

          <section className="bg-section-primary py-16">
            <Container>
              <div className="max-w-3xl mx-auto">
                <ConversationForm
                  fields={[
                    ...conversationSteps[0].fields,
                    ...conversationSteps[1].fields,
                    ...conversationSteps[2].fields,
                  ]}
                  steps={[
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
                  ]}
                  onSubmit={handleFormSubmit}
                  loading={isSubmitting}
                  title="Préparons notre conversation"
                  subtitle="3 étapes rapides pour mieux vous connaître et préparer un échange efficace."
                  submitButtonText="Planifier notre échange"
                />
              </div>
            </Container>
          </section>
        </>
      )}

      {formComplete && (
        <section className="bg-section-primary py-16">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <Typography as="h2" variant="h2" className="mb-4 font-bold">
                  Merci !
                </Typography>
                <Typography variant="lead" className="mb-6">
                  Je vous recontacte sous 24h pour planifier notre échange.
                </Typography>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <Typography as="h3" variant="h3" className="mb-3 text-blue-800 dark:text-blue-200">
                  Prochaines étapes
                </Typography>
                <div className="text-left space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Clock"
                      className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5"
                    />
                    <Typography variant="p" className="text-blue-800 dark:text-blue-200">
                      <strong>Sous 24h :</strong> Email avec des créneaux pour notre échange
                    </Typography>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Users"
                      className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5"
                    />
                    <Typography variant="p" className="text-blue-800 dark:text-blue-200">
                      <strong>45 minutes :</strong> Discussion libre sur vos besoins
                    </Typography>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="MessageSquare"
                      className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5"
                    />
                    <Typography variant="p" className="text-blue-800 dark:text-blue-200">
                      <strong>Si ça matche :</strong> Proposition de projet adaptée
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Section informations de contact alternatives */}
      <section className="bg-section-accent py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Contact direct
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Vous préférez un contact direct ? Voici mes coordonnées
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-[var(--color-${info.color}-100)] dark:bg-[var(--color-${info.color}-900)] flex items-center justify-center transition-transform duration-150 group-hover:scale-110`}
                  >
                    <Icon
                      name={info.icon}
                      className={`w-8 h-8 text-[var(--color-${info.color}-600)] dark:text-[var(--color-${info.color}-400)]`}
                    />
                  </div>
                </div>

                <Typography as="h3" variant="h3" className="mb-2 text-center">
                  {info.title}
                </Typography>

                {info.href ? (
                  <NavLink
                    href={info.href}
                    className="block text-center font-medium mb-2 hover:text-[var(--color-primary)]"
                    target={info.href.includes('mailto') ? undefined : '_blank'}
                  >
                    {info.value}
                  </NavLink>
                ) : (
                  <Typography variant="p" className="text-center font-medium mb-2">
                    {info.value}
                  </Typography>
                )}

                <Typography
                  variant="p"
                  className="text-gray-600 dark:text-gray-300 text-center text-sm"
                >
                  {info.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section réassurance */}
      <section className="bg-section-secondary py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <Icon
                  name="Shield"
                  className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4"
                />
                <Typography as="h3" variant="h2" className="mb-4 font-bold italic">
                  Mon engagement
                </Typography>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Icon
                    name="Clock"
                    className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0"
                  />
                  <div>
                    <Typography variant="h4" className="font-medium mb-1">
                      45 minutes maximum
                    </Typography>
                    <Typography variant="p" className="text-gray-600 dark:text-gray-300 text-sm">
                      Discussion ciblée sur vos vrais besoins
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Icon
                    name="Heart"
                    className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0"
                  />
                  <div>
                    <Typography variant="h4" className="font-medium mb-1">
                      Zéro pression
                    </Typography>
                    <Typography variant="p" className="text-gray-600 dark:text-gray-300 text-sm">
                      Échange libre sans obligation
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Icon
                    name="UserCheck"
                    className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0"
                  />
                  <div>
                    <Typography variant="h4" className="font-medium mb-1">
                      À l'écoute
                    </Typography>
                    <Typography variant="p" className="text-gray-600 dark:text-gray-300 text-sm">
                      Je comprends votre quotidien avant tout
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Icon
                    name="Star"
                    className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0"
                  />
                  <div>
                    <Typography variant="h4" className="font-medium mb-1">
                      Transparence
                    </Typography>
                    <Typography variant="p" className="text-gray-600 dark:text-gray-300 text-sm">
                      Honnête sur mes capacités et votre projet
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
