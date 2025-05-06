"use client";

// app/test/page.tsx
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/molecules/Card';
import { Typography } from '@/components/atoms/Typography';
import { Input } from '@/components/atoms/Input';
import { Logo } from '@/components/atoms/Logo';
import { Container } from '@/components/atoms/Container';
import Link from 'next/link';
import { Testimonial } from '@/components/molecules/Testimonial';
import { FormField } from '@/components/molecules/FormField';
import { Step, StepList } from '@/components/molecules/Step';
import { ProjectPreview } from '@/components/molecules/ProjectPreview';
import { ServiceHighlight } from '@/components/molecules/ServiceHighlight';
import { ContactForm } from '@/components/molecules/ContactForm';
import { FeatureGrid, FeatureSection } from '@/components/molecules/FeatureGrid';
import { CallToAction, CompactCallToAction } from '@/components/molecules/CallToAction';

export default function TestPage() {
  // Icônes pour les tests
  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  );

  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="8"></line>
    </svg>
  );

  // Icônes pour les services
  const WebIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  );

  const AppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12" y2="18"></line>
    </svg>
  );

  const AdminIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.74"></path>
    </svg>
  );

  // Icônes pour les fonctionnalités
  const SpeedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11 3.134-7 7-7 7 3.024 7 7z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const CustomizationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  );

  const SupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3Z"></path>
      <path d="M9 21h6"></path>
      <path d="M12 17v4"></path>
    </svg>
  );

  // Données pour les fonctionnalités de démonstration
  const demoFeatures = [
    {
      id: 'speed',
      title: 'Performance optimisée',
      description: 'Sites web rapides et réactifs sur tous les appareils, pour une expérience utilisateur optimale.',
      icon: <SpeedIcon />,
      color: 'primary',
      link: {
        text: 'En savoir plus',
        url: '#speed',
      },
    },
    {
      id: 'customization',
      title: 'Personnalisation totale',
      description: 'Chaque élément est conçu sur mesure pour s\'adapter parfaitement à votre identité et vos besoins.',
      icon: <CustomizationIcon />,
      color: 'secondary',
    },
    {
      id: 'support',
      title: 'Support réactif',
      description: 'Assistance technique et maintenance continue pour assurer la pérennité de votre projet.',
      icon: <SupportIcon />,
      color: 'tertiary',
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <Typography as="h1" variant="h1" className="mb-4 text-center">
        Laboratoire de composants IrimWebForge
      </Typography>
      
      <Typography as="p" variant="lead" className="mb-8 text-center max-w-2xl mx-auto">
        Cette page présente tous les composants atomiques et moléculaires utilisés dans le site IrimWebForge, permettant de les tester et les modifier facilement.
      </Typography>

      {/* Table des matières */}
      <div className="mb-12 p-4 surface-secondary rounded-lg">
        <Typography as="h2" variant="h3" className="mb-4">
          Table des matières
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="#atoms" className="text-primary hover:underline">1. Composants atomiques</Link>
          <Link href="#molecules" className="text-primary hover:underline">2. Composants moléculaires</Link>
          <Link href="#theming" className="text-primary hover:underline">3. Thèmes et couleurs</Link>
        </div>
      </div>

      {/* Composants atomiques */}
      <section id="atoms" className="mb-16">
        <Typography as="h2" variant="h2" className="mb-6 pb-2 border-b border-color">
          1. Composants atomiques
        </Typography>

        {/* Logo */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Logo
          </Typography>
          <div className="flex flex-col gap-8">
            <div className="p-6 surface-secondary rounded-lg">
              <div className="mb-6">
                <Typography as="h4" variant="h4" className="mb-2">Logo par défaut (auto adapt.)</Typography>
                <div className="flex justify-center p-6 surface-primary rounded-lg mb-4">
                  <Logo width={200} height={60} />
                </div>
                <Typography as="p" variant="small" className="text-center">
                  Le logo s'adapte au thème clair/sombre automatiquement
                </Typography>
              </div>
              
              <div className="mb-6">
                <Typography as="h4" variant="h4" className="mb-2">Modes spécifiques</Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="p-4 surface-primary rounded-lg flex justify-center">
                      <Logo width={120} height={40} mode="light" />
                    </div>
                    <Typography as="p" variant="small" className="mt-2">Mode clair (light)</Typography>
                  </div>
                  <div className="text-center">
                    <div className="p-4 surface-primary rounded-lg flex justify-center">
                      <Logo width={120} height={40} mode="dark" />
                    </div>
                    <Typography as="p" variant="small" className="mt-2">Mode sombre (dark)</Typography>
                  </div>
                  <div className="text-center">
                    <div className="p-4 surface-primary rounded-lg flex justify-center">
                      <Logo width={120} height={40} mode="default" />
                    </div>
                    <Typography as="p" variant="small" className="mt-2">Logo standard (default)</Typography>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <Typography as="h4" variant="h4" className="mb-2">Formats disponibles</Typography>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="text-center">
                    <div className="p-4 surface-primary rounded-lg">
                      <Logo width={100} height={30} format="svg" />
                    </div>
                    <Typography as="p" variant="small" className="mt-2">SVG (par défaut)</Typography>
                  </div>
                  <div className="text-center">
                    <div className="p-4 surface-primary rounded-lg">
                      <Logo width={100} height={30} format="png" />
                    </div>
                    <Typography as="p" variant="small" className="mt-2">PNG</Typography>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <Typography as="h4" variant="h4" className="mb-2">Bannières</Typography>
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center">
                    <div className="p-4 surface-primary rounded-lg flex justify-center">
                      <Logo width={320} height={80} variant="banner" mode="default" />
                    </div>
                    <Typography as="p" variant="small" className="mt-2">Bannière standard</Typography>
                  </div>
                  <div className="text-center">
                    <div className="p-4 surface-primary rounded-lg flex justify-center">
                      <Logo width={320} height={80} variant="banner" mode="light" />
                    </div>
                    <Typography as="p" variant="small" className="mt-2">Bannière mode clair</Typography>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-gray-800 rounded-lg flex justify-center">
                      <Logo width={320} height={80} variant="banner" mode="dark" />
                    </div>
                    <Typography as="p" variant="small" className="mt-2">Bannière mode sombre</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Typography
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Typography as="h4" variant="h4" className="mb-4">Variantes de titres</Typography>
                <div className="space-y-4">
                  <div className="p-3 surface-primary rounded-md">
                    <Typography as="h1" variant="h1">Titre h1</Typography>
                    <Typography as="p" variant="small" className="mt-2 text-secondary">Font: Noto Sans Bold Italic</Typography>
                  </div>
                  <div className="p-3 surface-primary rounded-md">
                    <Typography as="h2" variant="h2">Titre h2</Typography>
                    <Typography as="p" variant="small" className="mt-2 text-secondary">Font: Noto Sans Bold Italic</Typography>
                  </div>
                  <div className="p-3 surface-primary rounded-md">
                    <Typography as="h3" variant="h3">Titre h3</Typography>
                    <Typography as="p" variant="small" className="mt-2 text-secondary">Font: Noto Sans Bold</Typography>
                  </div>
                  <div className="p-3 surface-primary rounded-md">
                    <Typography as="h4" variant="h4">Titre h4</Typography>
                    <Typography as="p" variant="small" className="mt-2 text-secondary">Font: Noto Sans SemiBold</Typography>
                  </div>
                </div>
              </div>
              <div>
                <Typography as="h4" variant="h4" className="mb-4">Variantes de texte</Typography>
                <div className="space-y-4">
                  <div className="p-3 surface-primary rounded-md">
                    <Typography variant="p">Texte paragraphe standard</Typography>
                    <Typography as="p" variant="small" className="mt-2 text-secondary">Font: Questrial Regular</Typography>
                  </div>
                  <div className="p-3 surface-primary rounded-md">
                    <Typography variant="lead">Texte mis en avant (lead)</Typography>
                    <Typography as="p" variant="small" className="mt-2 text-secondary">Font: Questrial Medium</Typography>
                  </div>
                  <div className="p-3 surface-primary rounded-md">
                    <Typography variant="small">Texte petit (small)</Typography>
                    <Typography as="p" variant="small" className="mt-2 text-secondary">Font: Questrial Regular, taille réduite</Typography>
                  </div>
                  <div className="p-3 surface-primary rounded-md">
                    <Typography variant="subtle">Texte subtil (subtle)</Typography>
                    <Typography as="p" variant="small" className="mt-2 text-secondary">Font: Questrial Italic</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Boutons
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            {/* Variantes de base */}
            <div className="mb-6">
              <Typography as="h4" variant="h4" className="mb-3">
                Variantes de base
              </Typography>
              <div className="flex flex-wrap gap-4 p-4 surface-primary rounded-md">
                <Button variant="primary">Bouton Primaire</Button>
                <Button variant="secondary">Bouton Secondaire</Button>
                <Button variant="outline">Bouton Outline</Button>
              </div>
            </div>

            {/* Tailles */}
            <div className="mb-6">
              <Typography as="h4" variant="h4" className="mb-3">
                Tailles
              </Typography>
              <div className="flex flex-wrap gap-4 items-center p-4 surface-primary rounded-md">
                <Button variant="primary" size="sm">Petit</Button>
                <Button variant="primary" size="md">Moyen</Button>
                <Button variant="primary" size="lg">Grand</Button>
              </div>
            </div>

            {/* Avec icônes */}
            <div className="mb-6">
              <Typography as="h4" variant="h4" className="mb-3">
                Avec icônes
              </Typography>
              <div className="flex flex-wrap gap-4 p-4 surface-primary rounded-md">
                <Button variant="primary" icon={<ArrowIcon />} iconPosition="left">Icône gauche</Button>
                <Button variant="primary" icon={<ArrowIcon />} iconPosition="right">Icône droite</Button>
                <Button variant="secondary" icon={<ArrowIcon />}>Icône secondaire</Button>
              </div>
            </div>

            {/* Icône seule (iconOnly) */}
            <div className="mb-6">
              <Typography as="h4" variant="h4" className="mb-3">
                Icône seule (accessibilité)
              </Typography>
              <div className="flex flex-wrap gap-4 p-4 surface-primary rounded-md">
                <Button variant="primary" icon={<ArrowIcon />} iconOnly aria-label="Aller à droite" />
                <Button variant="secondary" icon={<ArrowIcon />} iconOnly aria-label="Aller à droite" />
                <Button variant="outline" icon={<ArrowIcon />} iconOnly aria-label="Aller à droite" />
              </div>
            </div>

            {/* États spéciaux */}
            <div className="mb-6">
              <Typography as="h4" variant="h4" className="mb-3">
                États spéciaux
              </Typography>
              <div className="flex flex-wrap gap-4 p-4 surface-primary rounded-md">
                <Button variant="primary" disabled>Désactivé</Button>
                <Button variant="primary" className="shadow-lg">Avec ombre</Button>
                <Button variant="primary" loading>Chargement…</Button>
                <Button variant="primary" fullWidth>Pleine largeur</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Champs de formulaire
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input text standard */}
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Champ texte
                </Typography>
                <div className="p-4 surface-primary rounded-md">
                  <Input
                    label="Nom complet"
                    placeholder="Saisissez votre nom"
                  />
                </div>
              </div>

              {/* Input avec erreur */}
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Champ avec erreur
                </Typography>
                <div className="p-4 surface-primary rounded-md">
                  <Input
                    label="Adresse email"
                    placeholder="email@exemple.com"
                    error="L'adresse email est invalide"
                  />
                </div>
              </div>

              {/* Input avec type spécifique */}
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Types spéciaux
                </Typography>
                <div className="p-4 surface-primary rounded-md space-y-4">
                  <Input
                    type="password"
                    label="Mot de passe"
                    placeholder="••••••••"
                  />
                  <Input
                    type="number"
                    label="Âge"
                    placeholder="25"
                  />
                </div>
              </div>

              {/* Textarea */}
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Champ multiligne
                </Typography>
                <div className="p-4 surface-primary rounded-md">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Votre message ici..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Composants moléculaires */}
      <section id="molecules" className="mb-16">
        <Typography as="h2" variant="h2" className="mb-6 pb-2 border-b border-color">
          2. Composants moléculaires
        </Typography>

        {/* Cards */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Cartes (Cards)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <Typography as="h4" variant="h4" className="mb-4">
              Variantes de cartes
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <Card
                title={<Typography variant="h4">Carte Standard</Typography>}
                footer={<Typography variant="small">Version par défaut</Typography>}
              >
                <Typography variant="p">
                  Contenu de la carte standard avec des informations sur IrimWebForge.
                </Typography>
              </Card>

              <Card
                title={<Typography variant="h4">Carte avec Bordure</Typography>}
                variant="outlined"
              >
                <Typography variant="p">
                  Cette carte utilise une bordure fine pour délimiter son contenu.
                </Typography>
              </Card>

              <Card
                title={<Typography variant="h4">Carte Élevée</Typography>}
                variant="elevated"
              >
                <Typography variant="p">
                  La carte élevée utilise une ombre portée pour créer un effet de profondeur.
                </Typography>
              </Card>

              <Card
                title={<Typography variant="h4">Carte Accent</Typography>}
                variant="accent"
                accentColor="primary"
                accentPosition="left"
              >
                <Typography variant="p">
                  Cette carte utilise un accent coloré sur le côté gauche.
                </Typography>
              </Card>
            </div>

            <Typography as="h4" variant="h4" className="mt-8 mb-4">
              Utilisation avancée
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                media={
                  <div className="h-40 bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Typography as="span" className="text-white font-bold">Image/Média</Typography>
                  </div>
                }
                title={<Typography variant="h4">Carte avec média</Typography>}
                subtitle={<Typography variant="subtle">Sous-titre informatif</Typography>}
              >
                <Typography variant="p">
                  Cette carte montre comment intégrer du contenu média en haut de la carte.
                </Typography>
              </Card>

              <Card
                variant="elevated"
                padding="large"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-100">
                    <InfoIcon />
                  </div>
                  <div>
                    <Typography as="h4" variant="h4" className="mb-2">Carte personnalisée</Typography>
                    <Typography variant="p">
                      Cette carte montre comment créer une mise en page personnalisée avec des icônes et un contenu structuré différemment.
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Témoignages (Testimonials)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <Typography as="h4" variant="h4" className="mb-4">
              Variantes de témoignages
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Témoignage par défaut
                </Typography>
                <Testimonial
                  quote="Enfin un site qui nous ressemble vraiment, sans nous ruiner chaque mois. L'interface d'administration est si intuitive que même notre stagiaire peut l'utiliser!"
                  author="Thomas B."
                  company="Mister & Misses CBD"
                  projectName="CBD-Shop"
                />
              </div>
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Témoignage compact
                </Typography>
                <Testimonial
                  quote="Un travail d'une grande précision, une écoute attentive de nos besoins. Je recommande vivement!"
                  author="Marie L."
                  company="Echo des Rêves"
                  variant="compact"
                />
              </div>
              <div className="md:col-span-2">
                <Typography as="h4" variant="h4" className="mb-3">
                  Témoignage mis en avant
                </Typography>
                <Testimonial
                  quote="Après avoir essayé plusieurs développeurs, j'ai enfin trouvé quelqu'un qui a su comprendre notre identité. La qualité du travail et le suivi sont exceptionnels. Notre site est non seulement beau mais aussi parfaitement fonctionnel et facile à gérer."
                  author="Alexandre K."
                  company="MoodCycle"
                  projectName="Application de suivi émotionnel"
                  projectUrl="#project-link"
                  variant="featured"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FormField */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Champs de formulaire (FormField)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <Typography as="h4" variant="h4" className="mb-4">
              Types de champs avec validation
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Champ texte simple
                </Typography>
                <FormField
                  id="name"
                  label="Nom complet"
                  placeholder="Votre nom et prénom"
                  required
                  helperText="Tel qu'il apparaîtra sur les documents"
                />
              </div>

              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Champ email avec erreur
                </Typography>
                <FormField
                  id="email"
                  label="Adresse email"
                  type="email"
                  placeholder="exemple@domaine.com"
                  required
                  error="Veuillez saisir une adresse email valide"
                />
              </div>

              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Menu déroulant (select)
                </Typography>
                <FormField
                  id="project-type"
                  label="Type de projet"
                  type="select"
                  placeholder="Sélectionnez une option"
                  options={[
                    { value: 'site-web', label: 'Site web personnalisé' },
                    { value: 'application', label: 'Application sur mesure' },
                    { value: 'interface-admin', label: 'Interface administration' },
                    { value: 'maintenance', label: 'Maintenance/évolution' },
                  ]}
                  required
                />
              </div>

              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Zone de texte (textarea)
                </Typography>
                <FormField
                  id="message"
                  label="Message"
                  type="textarea"
                  placeholder="Parlez-moi de votre projet et de votre univers"
                  helperText="Soyez aussi précis que possible pour une meilleure compréhension"
                  rows={4}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Étapes (Steps)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <Typography as="h4" variant="h4" className="mb-4">
              Étapes du processus
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Étape simple
                </Typography>
                <Step
                  number={1}
                  title="Exploration"
                  description="Définition de vos besoins, objectifs et attentes pour le projet."
                />
              </div>
              
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Étape active
                </Typography>
                <Step
                  number={2}
                  title="Immersion"
                  description="Exploration profonde de votre identité, valeurs et univers visuel."
                  isActive
                />
              </div>
              
              <div className="md:col-span-2">
                <Typography as="h4" variant="h4" className="mb-3">
                  Liste d'étapes
                </Typography>
                <StepList
                  steps={[
                    {
                      number: 1,
                      title: "Exploration",
                      description: "Définition de vos besoins, objectifs et attentes pour le projet."
                    },
                    {
                      number: 2,
                      title: "Immersion",
                      description: "Exploration profonde de votre identité, valeurs et univers visuel."
                    },
                    {
                      number: 3,
                      title: "Développement",
                      description: "Création de votre site ou interface selon les spécifications définies."
                    },
                    {
                      number: 4,
                      title: "Validation",
                      description: "Tests, vérifications et ajustements avant la mise en ligne."
                    },
                    {
                      number: 5,
                      title: "Livraison",
                      description: "Mise en ligne, formation à l'utilisation et transfert des ressources."
                    }
                  ]}
                  activeStep={3}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ProjectPreview */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Aperçus de projets (ProjectPreview)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <Typography as="h4" variant="h4" className="mb-4">
              Variantes d'aperçus de projets
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Projet standard
                </Typography>
                <ProjectPreview
                  id="cbd-shop"
                  title="Boutique en ligne CBD"
                  slug="cbd-shop"
                  imageSrc="/images/projects/project-placeholder.jpg"
                  tags={[
                    { id: "ecommerce", label: "E-commerce", color: "primary" },
                    { id: "site-web", label: "Site web", color: "secondary" }
                  ]}
                  description="Site e-commerce personnalisé pour une boutique de produits CBD premium."
                  clientName="Mister & Misses CBD"
                  year="2023"
                />
              </div>
              
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Projet compact
                </Typography>
                <ProjectPreview
                  id="echo-des-reves"
                  title="Echo des Rêves"
                  slug="echo-des-reves"
                  imageSrc="/images/projects/project-placeholder-2.jpg"
                  tags={[
                    { id: "vitrine", label: "Vitrine", color: "tertiary" }
                  ]}
                  variant="compact"
                  clientName="Marie L."
                  year="2023"
                />
              </div>
              
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Projet mis en avant
                </Typography>
                <ProjectPreview
                  id="moodcycle"
                  title="MoodCycle - Suivi émotionnel"
                  slug="moodcycle"
                  imageSrc="/images/projects/project-placeholder-3.jpg"
                  tags={[
                    { id: "application", label: "Application", color: "primary" },
                    { id: "ui-ux", label: "UI/UX", color: "secondary" },
                    { id: "dashboard", label: "Dashboard", color: "tertiary" }
                  ]}
                  description="Application de suivi émotionnel avec tableaux de bord personnalisés et rapports hebdomadaires."
                  variant="featured"
                  clientName="Alexandre K."
                  year="2023"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ServiceHighlight */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Services (ServiceHighlight)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <Typography as="h4" variant="h4" className="mb-4">
              Mise en avant des services
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Service standard
                </Typography>
                <ServiceHighlight
                  title="Sites web personnalisés"
                  description="Des sites web sur mesure qui vous ressemblent vraiment, avec une attention particulière aux détails."
                  icon={<WebIcon />}
                  color="primary"
                  ctaLink="/services/sites-web"
                  bulletPoints={[
                    "Design unique adapté à votre identité",
                    "Interface d'administration intuitive",
                    "Optimisé pour tous les appareils"
                  ]}
                />
              </div>
              
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Service compact
                </Typography>
                <ServiceHighlight
                  title="Applications sur mesure"
                  description="Développement d'applications personnalisées pour répondre à vos besoins spécifiques."
                  icon={<AppIcon />}
                  color="secondary"
                  variant="compact"
                  ctaLink="/services/applications"
                />
              </div>
              
              <div>
                <Typography as="h4" variant="h4" className="mb-3">
                  Service mis en avant
                </Typography>
                <ServiceHighlight
                  title="Interfaces admin"
                  description="Des interfaces d'administration sur mesure pour gérer votre contenu facilement."
                  icon={<AdminIcon />}
                  color="tertiary"
                  variant="featured"
                  ctaText="Découvrir"
                  ctaLink="/services/interfaces-admin"
                  bulletPoints={[
                    "Personnalisées selon vos processus",
                    "Formation incluse pour votre équipe",
                    "Autonomie et contrôle total"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ContactForm */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Formulaire de contact (ContactForm)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <div className="max-w-2xl mx-auto">
              <ContactForm 
                onSubmit={(data) => console.log('Form submitted:', data)}
              />
            </div>
          </div>
        </div>

        {/* FeatureGrid */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Grille de fonctionnalités (FeatureGrid)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <Typography as="h4" variant="h4" className="mb-4">
              Style Carte
            </Typography>
            <FeatureGrid 
              features={demoFeatures.map(feature => ({
                ...feature,
                color: feature.color as "primary" | "secondary" | "tertiary"
              }))}
              variant="card"
              columns={3}
            />

            <Typography as="h4" variant="h4" className="mt-8 mb-4">
              Style Bordure
            </Typography>
            <FeatureGrid 
              features={demoFeatures.map(feature => ({
                ...feature,
                color: feature.color as "primary" | "secondary" | "tertiary"
              }))}
              variant="bordered"
              columns={3}
            />

            <Typography as="h4" variant="h4" className="mt-8 mb-4">
              Style Minimal
            </Typography>
            <FeatureGrid 
              features={demoFeatures.map(feature => ({
                ...feature,
                color: feature.color as "primary" | "secondary" | "tertiary"
              }))}
              variant="minimal"
              columns={3}
            />
          </div>
        </div>

        {/* CallToAction */}
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Appels à l'action (CallToAction)
          </Typography>
          <div className="p-6 surface-secondary rounded-lg space-y-8">
            <div>
              <Typography as="h4" variant="h4" className="mb-4">
                Style par défaut
              </Typography>
              <CallToAction 
                title="Prêt à concrétiser votre projet ?"
                description="Discutons ensemble de votre projet et de comment je peux vous aider à le réaliser selon vos attentes."
                primaryAction={{
                  text: "Me contacter",
                  url: "/contact",
                }}
                secondaryAction={{
                  text: "Voir mes réalisations",
                  url: "/projets",
                  variant: "outline",
                }}
              />
            </div>

            <div>
              <Typography as="h4" variant="h4" className="mb-4">
                Style Carte
              </Typography>
              <CallToAction 
                title="Un projet à réaliser ?"
                description="N'hésitez pas à me contacter pour discuter de votre projet et obtenir un devis personnalisé."
                primaryAction={{
                  text: "Demander un devis",
                  url: "/contact",
                }}
                variant="card"
              />
            </div>

            <div>
              <Typography as="h4" variant="h4" className="mb-4">
                Style Accent
              </Typography>
              <CallToAction 
                title="Besoin d'une interface admin sur mesure ?"
                description="Spécialiste des interfaces administratives personnalisées, je conçois des outils adaptés à vos processus métier."
                primaryAction={{
                  text: "En savoir plus",
                  url: "/services/interfaces-admin",
                }}
                variant="accent"
                accentColor="tertiary"
                align="left"
              />
            </div>

            <div>
              <Typography as="h4" variant="h4" className="mb-4">
                Compact CTA
              </Typography>
              <CompactCallToAction 
                text="Vous avez des questions sur mes services ?"
                ctaText="Me contacter"
                ctaUrl="/contact"
                icon={<InfoIcon />}
                color="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Thèmes et couleurs */}
      <section id="theming" className="mb-16">
        <Typography as="h2" variant="h2" className="mb-6 pb-2 border-b border-color">
          3. Thèmes et couleurs
        </Typography>
        
        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Palette de couleurs
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Couleur primaire */}
              <div>
                <div className="h-24 rounded-t-md flex items-end justify-end" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <div className="p-2 bg-white bg-opacity-90 text-xs rounded-tl-md">#00A0A0</div>
                </div>
                <div className="p-3 surface-primary border border-color rounded-b-md">
                  <Typography as="h4" variant="h4" className="mb-1">Primaire</Typography>
                  <Typography variant="small">
                    Élément principal de la marque, utilisé pour les appels à l'action principaux et les accents importants.
                  </Typography>
                </div>
              </div>

              {/* Couleur secondaire */}
              <div>
                <div className="h-24 rounded-t-md flex items-end justify-end" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <div className="p-2 bg-white bg-opacity-90 text-xs rounded-tl-md">#004466</div>
                </div>
                <div className="p-3 surface-primary border border-color rounded-b-md">
                  <Typography as="h4" variant="h4" className="mb-1">Secondaire</Typography>
                  <Typography variant="small">
                    Complément à la couleur primaire, utilisé pour les boutons secondaires et accents subtils.
                  </Typography>
                </div>
              </div>

              {/* Couleur tertiaire */}
              <div>
                <div className="h-24 rounded-t-md flex items-end justify-end" style={{ backgroundColor: 'var(--color-tertiary)' }}>
                  <div className="p-2 bg-white bg-opacity-90 text-xs rounded-tl-md">#F06424</div>
                </div>
                <div className="p-3 surface-primary border border-color rounded-b-md">
                  <Typography as="h4" variant="h4" className="mb-1">Tertiaire</Typography>
                  <Typography variant="small">
                    Accent chaleureux pour attirer l'attention sur des éléments spécifiques ou créer du contraste.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <Typography as="h3" variant="h3" className="mb-4">
            Modes clair/sombre
          </Typography>
          <div className="p-6 surface-secondary rounded-lg">
            <Typography as="p" className="mb-4">
              Le site dispose d'un mode clair et d'un mode sombre qui s'adaptent automatiquement aux préférences de l'utilisateur.
              Essayez de changer les préférences de votre système pour voir les changements.
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 surface-primary rounded-md border border-color">
                <Typography as="h4" variant="h4" className="mb-2">Mode clair</Typography>
                <Typography variant="p">
                  Fond clair avec texte foncé, idéal pour la lecture prolongée.
                </Typography>
              </div>
              <div className="p-4 bg-gray-900 text-white rounded-md">
                <Typography as="h4" variant="h4" className="mb-2 text-white">Mode sombre</Typography>
                <Typography variant="p" className="text-gray-300">
                  Fond sombre avec texte clair, réduit la fatigue oculaire en conditions de faible luminosité.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lien retour */}
      <div className="mt-16 text-center">
        <Link href="/" className="text-primary hover:underline inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Retour à la page d'accueil
        </Link>
      </div>
    </div>
  );
}