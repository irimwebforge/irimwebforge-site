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

export default function Page() {
  // États pour le formulaire
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [formComplete, setFormComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [motivationalMessage, setMotivationalMessage] = useState('');

  // Bannière de vision
  const VisionBanner = () => (
    <Alert 
      variant="info" 
      title="" 
      className="mb-8 mx-auto max-w-5xl"
    >
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Ce formulaire est conçu pour nous aider à mieux nous connaître. 
        Je souhaite comprendre vos défis quotidiens avant d'évoquer toute solution technique.
      </p>
    </Alert>
  );

  const handleStepComplete = (stepData: Record<string, any>) => {
    setFormData(prev => ({...prev, ...stepData}));
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentStep < conversationSteps.length - 1) {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      } else {
        setFormComplete(true);
        console.log('Form completed:', {...formData, ...stepData});
      }
    }, 800);
  };

  useEffect(() => {
    const messages = [
      "Merci pour ces informations. J'aimerais maintenant mieux comprendre votre activité...",
      "Parfait. Explorons ensemble vos défis administratifs quotidiens...",
      "Très bien. Précisons vos besoins spécifiques...",
      "Dernière étape pour préparer notre conversation..."
    ];
    
    if (isTransitioning && currentStep < messages.length) {
      setMotivationalMessage(messages[currentStep]);
    }
  }, [isTransitioning, currentStep]);

  const conversationSteps = [
    {
      title: "Faisons connaissance",
      description: "Pour préparer notre conversation, j'aimerais en savoir un peu plus sur vous et votre activité.",
      fields: [
        {
          id: 'fullName',
          label: "Comment vous appelez-vous ?",
          type: 'text' as const,
          placeholder: "Votre nom complet",
          required: true
        },
        {
          id: 'profession',
          label: "Dans quel domaine exercez-vous ?",
          type: 'select' as const,
          options: [
            { value: 'therapist', label: "Thérapeute / Praticien bien-être" },
            { value: 'artisan', label: "Artisan / Créateur" },
            { value: 'freelance', label: "Indépendant / Freelance" },
            { value: 'smallbusiness', label: "Petite entreprise (1-5 personnes)" },
            { value: 'other', label: "Autre" }
          ],
          required: true
        },
        {
          id: 'email',
          label: "Votre email pour vous recontacter",
          type: 'email' as const,
          placeholder: "email@exemple.com",
          required: true
        },
        {
          id: 'phone',
          label: "Votre téléphone (si vous préférez échanger par ce biais)",
          type: 'tel' as const,
          placeholder: "Votre numéro mobile de préférence",
          required: false
        }
      ]
    },
    {
      title: "Votre activité",
      description: "Aidez-moi à comprendre votre contexte professionnel pour mieux saisir vos défis quotidiens.",
      fields: [
        {
          id: 'experience',
          label: "Depuis combien de temps exercez-vous cette activité ?",
          type: 'select' as const,
          options: [
            { value: 'starting', label: "Je me lance tout juste" },
            { value: 'less-1y', label: "Moins d'un an" },
            { value: '1-3y', label: "Entre 1 et 3 ans" },
            { value: '3-5y', label: "Entre 3 et 5 ans" },
            { value: 'more-5y', label: "Plus de 5 ans" }
          ],
          required: true
        },
        {
          id: 'clients',
          label: "Environ combien de clients accompagnez-vous chaque mois ?",
          type: 'select' as const,
          options: [
            { value: 'less-10', label: "Moins de 10" },
            { value: '10-30', label: "Entre 10 et 30" },
            { value: '30-50', label: "Entre 30 et 50" },
            { value: 'more-50', label: "Plus de 50" }
          ],
          required: true
        },
        {
          id: 'activityDescription',
          label: "Parlez-moi un peu de votre activité et de ce qui vous passionne",
          type: 'textarea' as const,
          placeholder: "Votre métier, vos services, votre clientèle, ce qui vous anime...",
          required: true
        }
      ]
    },
    {
      title: "Vos défis administratifs",
      description: "Comprenons ensemble ce qui vous prend du temps et de l'énergie dans la gestion de votre activité.",
      fields: [
        {
          id: 'timeWasted',
          label: "Combien de temps estimez-vous passer par semaine sur des tâches administratives ?",
          type: 'select' as const,
          options: [
            { value: 'less-3', label: "Moins de 3 heures" },
            { value: '3-5', label: "Entre 3 et 5 heures" },
            { value: '5-10', label: "Entre 5 et 10 heures" },
            { value: 'more-10', label: "Plus de 10 heures" }
          ],
          required: true
        },
        {
          id: 'mainChallenges',
          label: "Quelles tâches vous frustrent ou vous prennent le plus de temps actuellement ?",
          type: 'select' as const,
          options: [
            { value: 'website', label: "Gestion de mon site web ou présence en ligne" },
            { value: 'scheduling', label: "Gestion de mon agenda et des rendez-vous" },
            { value: 'communication', label: "Communication avec les clients (emails, suivi)" },
            { value: 'billing', label: "Facturation et suivi des paiements" },
            { value: 'content', label: "Création de contenus (site/réseaux sociaux)" },
            { value: 'multiple', label: "Plusieurs de ces tâches à la fois" }
          ],
          required: true
        },
        {
          id: 'frustration',
          label: "Quelle est votre plus grande source de frustration ou perte de temps dans votre quotidien professionnel ?",
          type: 'textarea' as const,
          placeholder: "Ce qui vous empêche de vous concentrer sur votre cœur de métier...",
          required: true
        }
      ]
    },
    {
      title: "Vos outils actuels",
      description: "Parlez-moi de votre situation numérique actuelle pour identifier ensemble des pistes d'amélioration.",
      fields: [
        {
          id: 'currentTools',
          label: "Comment gérez-vous actuellement votre activité en ligne ?",
          type: 'select' as const,
          options: [
            { value: 'none', label: "Je n'ai pas de présence en ligne / tout est manuel" },
            { value: 'basic', label: "J'ai un site simple mais sans fonctionnalités spéciales" },
            { value: 'multiple', label: "J'utilise plusieurs outils séparés (site, agenda, facturation...)" },
            { value: 'integrated', label: "J'ai une solution tout-en-un, mais pas idéale pour moi" }
          ],
          required: true
        },
        {
          id: 'techComfort',
          label: "Quel est votre rapport avec la technologie ?",
          type: 'select' as const,
          options: [
            { value: 'low', label: "Je l'évite autant que possible" },
            { value: 'medium', label: "Je me débrouille mais c'est parfois compliqué" },
            { value: 'good', label: "À l'aise avec des interfaces simples et intuitives" },
            { value: 'excellent', label: "Très à l'aise, j'apprends facilement" }
          ],
          required: true
        },
        {
          id: 'additionalInfo',
          label: "Y a-t-il autre chose que vous aimeriez me partager avant notre conversation ?",
          type: 'textarea' as const,
          placeholder: "Besoins spécifiques, contraintes, questions...",
          required: false
        }
      ]
    }
  ];

  const conversationTopics = [
    {
      title: "Comprendre votre quotidien",
      description: "J'explorerai avec vous les aspects de votre activité qui vous demandent du temps et de l'énergie",
      icon: "Search" as IconName
    },
    {
      title: "Identifier les opportunités",
      description: "Ensemble, nous découvrirons où se trouvent les leviers d'amélioration les plus impactants",
      icon: "Lightbulb" as IconName
    },
    {
      title: "Esquisser des pistes",
      description: "Je vous proposerai quelques idées adaptées à votre situation spécifique",
      icon: "Pen" as IconName
    },
    {
      title: "Explorer les possibilités",
      description: "Sans engagement, nous verrons si une collaboration pourrait vous être bénéfique",
      icon: "Compass" as IconName
    }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <PageHeader 
        title="Parlons de votre activité"
        description="Cet échange nous permettra de mieux nous connaître, de comprendre vos défis quotidiens et d'explorer ensemble des pistes d'amélioration sans engagement."
        theme="primary"
        align="center"
        size="medium"
        badge={{ text: "Conversation sans engagement", variant: "primary" }}
      />
      
      <Container>
        <VisionBanner />
      </Container>
      
      <section id="conversation" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <Typography as="h2" variant="h2" className="mb-6 font-bold">
              Comment se déroule notre conversation
            </Typography>
            <Typography variant="lead" className="mb-12">
              Une discussion de 45 minutes pour explorer vos défis quotidiens et voir si je pourrais vous aider à libérer du temps pour votre cœur de métier.
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {conversationTopics.map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-t-4 border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-primary-100)] mb-4 mx-auto">
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
                  Un échange sans pression commerciale
                </Typography>
              </div>
              <Typography variant="p" className="text-center mb-4">
                Cette conversation est avant tout une opportunité de mieux nous connaître. Vous repartirez avec quelques pistes de réflexion, que nous décidions de travailler ensemble ou non.
              </Typography>
            </div>
          </div>
        </Container>
      </section>
      
      <section id="form-section" className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
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
                      <Typography variant="p" className="font-semibold">Sans engagement</Typography>
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
                      <Typography variant="p" className="font-semibold">Confidentialité assurée</Typography>
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
                      <Typography variant="p" className="font-semibold">Conversation humaine</Typography>
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
                {isTransitioning ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mb-6"></div>
                    <Typography variant="h3" className="mb-4 font-bold text-[var(--color-primary)]">
                      Merci !
                    </Typography>
                    <Typography variant="lead" className="mb-2">
                      {motivationalMessage}
                    </Typography>
                  </div>
                ) : !formComplete ? (
                  <>
                    <div className="mb-8">
                      <div className="flex justify-between mb-6">
                        {conversationSteps.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`w-[18%] h-1.5 rounded-full transition-all duration-500 ease-out ${currentStep >= idx ? 'bg-[var(--color-primary)]' : 'bg-gray-200 dark:bg-gray-700'}`}
                          />
                        ))}
                      </div>
                      <Typography as="h3" variant="h3" className="font-bold mb-2 text-[var(--color-primary)]">
                        {conversationSteps[currentStep].title}
                      </Typography>
                      <Typography variant="p" className="text-gray-600 dark:text-gray-300 mb-8">
                        {conversationSteps[currentStep].description}
                      </Typography>
                    </div>
                    
                    <ConversationForm
                      fields={conversationSteps[currentStep].fields}
                      onSubmit={handleStepComplete}
                      submitButtonText={currentStep < conversationSteps.length - 1 ? "Continuer" : "Planifier notre conversation"}
                      className="space-y-6"
                    />
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto bg-[var(--color-primary-100)] rounded-full flex items-center justify-center mb-8 animate-scale-in">
                      <Icon name="Check" size={40} className="text-[var(--color-primary)]" />
                    </div>
                    <Typography as="h3" variant="h2" className="font-bold mb-4 animate-fade-in" style={{ animationDelay: '150ms' }}>
                      C'est noté !
                    </Typography>
                    <Typography variant="lead" className="mb-6 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
                      Merci d'avoir pris le temps de partager ces informations avec moi.
                    </Typography>
                    <Typography variant="p" className="mb-4 text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '450ms' }}>
                      Je vous contacterai personnellement dans les 24h pour convenir ensemble d'un moment d'échange. 
                      J'ai hâte de discuter avec vous et de comprendre plus en détail votre activité et vos défis.
                    </Typography>
                    <Typography variant="p" className="mb-8 text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '600ms' }}>
                      En attendant, vous pouvez consulter ma <Link href="/processus" className="text-[var(--color-primary)] underline font-medium hover:text-[var(--color-primary-600)]">vision du processus</Link> pour mieux comprendre mon approche.
                    </Typography>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setFormComplete(false);
                        setCurrentStep(0);
                        setFormData({});
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