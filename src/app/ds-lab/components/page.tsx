"use client";

import { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { NavLink } from '@/components/atoms/NavLink';
import { Divider } from '@/components/atoms/Divider';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { Tabs } from '@/components/molecules/Tabs';
import { Logo } from '@/components/atoms/Logo';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { HeroSection } from '@/components/organisms/HeroSection';
import { PageHeader } from '@/components/organisms/PageHeader';
import { FeatureSection } from '@/components/organisms/FeatureSection';
import { EnhancedContactForm } from '@/components/organisms/EnhancedContactForm';
import { Input } from '@/components/atoms/Input'; 
import { Select } from '@/components/atoms/Select';
import { Textarea } from '@/components/atoms/Textarea';
import Link from 'next/link';
import { Icon } from '@/components/atoms/Icon';
// Import des composants moléculaires pour les exemples
import { BlogPostCard } from '@/components/molecules/BlogPostCard';
import { ComparativeTable } from '@/components/molecules/ComparativeTable';
import { Modal } from '@/components/molecules/Modal';
import { PricingPlan } from '@/components/molecules/PricingPlan';
import { StatCard } from '@/components/molecules/StatCard';
import { Testimonial } from '@/components/molecules/Testimonial';
import { ServiceHighlight } from '@/components/molecules/ServiceHighlight';
import { FeatureGrid } from '@/components/molecules/FeatureGrid';
import { FAQ } from '@/components/molecules/FAQ';
import { FormField } from '@/components/molecules/FormField';
import { ProjectPreview } from '@/components/molecules/ProjectPreview';
import { ConversationForm } from '@/components/molecules/ConversationForm';
// Import des données de démonstration
import { 
  BLOG_POSTS, 
  COMPARISON_COLUMNS, 
  COMPARISON_ROWS, 
  FAQ_ITEMS, 
  FEATURES, 
  PRICING_FEATURES, 
  PROJECTS, 
  TAB_ITEMS 
} from '../mocks/mockData.molecules';
// Import des adaptateurs
import { adaptProjects } from '@/utils/adapters';
// Import des templates
import { ValueProposition } from '@/templates/ValueProposition';
import { ProjectShowcase } from '@/templates/ProjectShowcase';
import { ServiceOverview } from '@/templates/ServiceOverview';
import { CTASection } from '@/templates/CTASection';
import { TestimonialSection } from '@/templates/TestimonialSection';
import { StatsShowcase } from '@/templates/StatsShowcase';
// Import des données mock
import { mockProjects, mockServices, mockValues, mockStats, mockTestimonials, mockCTAVariants } from '../mocks/mockData.templates';
// Import des adaptateurs
import { 
  adaptValues, 
  adaptServices, 
  adaptActions, 
  adaptStats, 
  adaptTestimonials 
} from '@/utils/adapters';

// Types de composants pour l'organisation
type ComponentCategory = {
  id: string;
  title: string;
  components: ComponentType[];
};

type ComponentType = {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
};

export default function DesignSystemPage() {
  // État pour suivre l'onglet actif
  const [activeCategory, setActiveCategory] = useState('atoms');
  
  // Icônes pour les exemples
  const SampleIcon = () => <Icon name="Info" />;

  // Données des composants atomiques
  const atomComponents: ComponentType[] = [
    {
      id: 'typography',
      title: 'Typography',
      description: 'Système de typographie avec titres en italique gras (h1, h2) et variantes de contenu',
      component: (
        <div className="space-y-4">
          <Typography as="h1" variant="h1">Titre h1 (italique gras)</Typography>
          <Typography as="h2" variant="h2">Titre h2 (italique gras)</Typography>
          <Typography as="h3" variant="h3">Titre h3</Typography>
          <Typography as="h4" variant="h4">Titre h4</Typography>
          <Typography variant="lead">Texte lead pour introduction</Typography>
          <Typography variant="p">Texte paragraphe standard</Typography>
          <Typography variant="small">Texte petit (small)</Typography>
          <Typography variant="subtle">Texte subtil (subtle)</Typography>
          <div className="p-4 border border-color rounded-md">
            <Typography variant="p" withAccentedWords>
              Notre approche valorise l'authenticité, l'innovation et la créativité pour offrir une expérience digitale sur-mesure et unique. Nous privilégions un processus artisanal qui permet une immersion profonde dans l'univers de chaque client.
            </Typography>
            <Typography variant="small" className="mt-2 text-tertiary">Les mots clés sont automatiquement accentués avec la couleur tertiaire</Typography>
          </div>
          <Typography variant="accent">Texte accentué (orange)</Typography>
          <Typography variant="highlight">Texte mis en évidence</Typography>
        </div>
      )
    },
    {
      id: 'buttons',
      title: 'Button',
      description: 'Boutons selon la hiérarchie visuelle validée : CTA dégradé, primaire turquoise, alternatives',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30 rounded-md">
            <Typography variant="p" className="font-medium mb-3">Hiérarchie visuelle des boutons</Typography>
            <div className="space-y-3">
              <div>
                <Button variant="gradient" className="w-full shine-effect">
                  Bouton CTA principal (dégradé + brillance)
                </Button>
                <Typography variant="small" className="text-tertiary mt-1">Pour les actions principales, appels à l'action</Typography>
              </div>
              <div>
                <Button variant="primary" className="w-full">
                  Bouton primaire (turquoise)
                </Button>
                <Typography variant="small" className="text-tertiary mt-1">Pour les actions secondaires importantes</Typography>
              </div>
              <div>
                <Button variant="outline" className="w-full">
                  Bouton outline
                </Button>
                <Typography variant="small" className="text-tertiary mt-1">Pour les actions alternatives</Typography>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div>
              <Typography variant="small" className="font-medium mb-2">Variantes de taille</Typography>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" size="sm">Petit</Button>
                <Button variant="primary" size="md">Moyen</Button>
                <Button variant="primary" size="lg">Grand</Button>
              </div>
            </div>
            
            <div>
              <Typography variant="small" className="font-medium mb-2">Variantes de couleur</Typography>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary">Primaire</Button>
                <Button variant="secondary">Secondaire</Button>
                <Button variant="tertiary">Tertiaire</Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Typography variant="small" className="font-medium mb-2">Avec icônes</Typography>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" icon={<SampleIcon />}>Icône gauche</Button>
                <Button variant="primary" icon={<SampleIcon />} iconPosition="right">Icône droite</Button>
                <Button variant="primary" icon={<SampleIcon />} iconOnly aria-label="Info" />
              </div>
            </div>
            
            <div>
              <Typography variant="small" className="font-medium mb-2">États</Typography>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" disabled>Désactivé</Button>
                <Button variant="primary" loading>Chargement</Button>
                <Button variant="ghost">Lien textuel →</Button>
              </div>
            </div>
            
            <div>
              <Typography variant="small" className="font-medium mb-2">Boutons lien</Typography>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" href="/ds-lab">Lien interne</Button>
                <Button variant="outline" href="https://example.com" target="_blank">Lien externe</Button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'badge',
      title: 'Badge',
      description: 'Étiquettes visuelles pour statuts, avec accentuation orange pour "Nouveau"',
      component: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="tertiary">Nouveau</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
          </div>
          
          <div className="p-4 border border-color rounded-md">
            <Typography variant="small" className="font-medium mb-2">Variantes de style</Typography>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary" isSolid>Solid</Badge>
              <Badge variant="primary" isOutlined>Outlined</Badge>
              <Badge variant="primary" count={5}>Compteur</Badge>
              <Badge variant="tertiary" dot>Avec point</Badge>
              <Badge variant="primary" size="small">Small</Badge>
              <Badge variant="tertiary" size="large" shape="pill">Large pill</Badge>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'input',
      title: 'Input',
      description: 'Champs de saisie avec différentes variantes et états',
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              label="Champ standard" 
              placeholder="Saisissez une valeur" 
              helpText="Texte d'aide pour guider l'utilisateur"
            />
            <Input 
              label="Variante primaire" 
              variant="primary" 
              placeholder="Bordure turquoise" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              label="Variante tertiaire (orange)" 
              variant="tertiary" 
              placeholder="Bordure orange" 
            />
            <Input 
              label="Avec erreur" 
              error="Ce champ est requis" 
              placeholder="Valeur invalide" 
            />
          </div>
        </div>
      )
    },
    {
      id: 'select',
      title: 'Select',
      description: 'Menus déroulants avec différentes variantes et états',
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select 
              label="Menu déroulant standard" 
              defaultValue=""
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" }
              ]}
              helpText="Texte d'aide pour guider l'utilisateur"
            />
            <Select 
              label="Variante primaire" 
              variant="primary"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" }
              ]}
              defaultValue=""
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select 
              label="Variante tertiaire (orange)" 
              variant="tertiary"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" }
              ]}
              defaultValue=""
            />
            <Select 
              label="Avec erreur" 
              error="Ce champ est requis"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" }
              ]}
            />
          </div>
        </div>
      )
    },
    {
      id: 'textarea',
      title: 'Textarea',
      description: 'Zones de texte multi-lignes avec différentes variantes et états',
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Textarea 
              label="Zone de texte standard" 
              placeholder="Saisissez votre message ici" 
              helpText="Texte d'aide pour guider l'utilisateur"
            />
            <Textarea 
              label="Variante primaire" 
              variant="primary" 
              placeholder="Bordure turquoise"
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Textarea 
              label="Variante tertiaire (orange)" 
              variant="tertiary" 
              placeholder="Bordure orange"
              rows={3}
            />
            <Textarea 
              label="Avec erreur" 
              error="Ce champ est requis" 
              placeholder="Message invalide"
              rows={3}
            />
          </div>
        </div>
      )
    },
    {
      id: 'divider',
      title: 'Divider',
      description: 'Séparateurs visuels avec styles et options d\'accentuation',
      component: (
        <div className="space-y-6">
          <div className="space-y-4">
            <Typography variant="small" className="font-medium">Styles de ligne</Typography>
            <Divider />
            <Divider variant="dashed" />
            <Divider variant="dotted" />
          </div>
          
          <div className="space-y-4">
            <Typography variant="small" className="font-medium">Avec labels</Typography>
            <Divider label="Centré par défaut" />
            <Divider label="Aligné à gauche" labelPosition="start" />
            <Divider label="Aligné à droite" labelPosition="end" />
          </div>
          
          <div className="space-y-4">
            <Typography variant="small" className="font-medium">Couleurs et épaisseurs</Typography>
            <Divider color="primary" />
            <Divider color="secondary" thickness="medium" />
            <Divider color="tertiary" thickness="thick" />
          </div>
          
          <div>
            <Typography variant="small" className="font-medium mb-2">Mise en évidence</Typography>
            <Divider color="tertiary" highlight label="Section importante" />
          </div>
        </div>
      )
    },
    {
      id: 'navlink',
      title: 'NavLink',
      description: 'Liens de navigation avec états actifs, support pour dégradé et soulignement',
      component: (
        <div className="space-y-6">
          {/* Note explicative sur les effets de survol */}
          <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-md mb-4">
            <Typography variant="small" className="font-medium text-yellow-800">
              Note : Les liens de navigation ci-dessous démontrent plusieurs caractéristiques :
            </Typography>
            <ul className="ml-5 mt-2 list-disc text-yellow-800">
              <li className="text-sm">Changement de couleur au survol selon le type (primaire, secondaire, tertiaire)</li>
              <li className="text-sm">Animation de soulignement au survol (ajoutée pour rendre l'effet plus visible)</li>
              <li className="text-sm">Effet de texte en dégradé pour les liens actifs avec useGradient</li>
            </ul>
          </div>
          
          <div className="p-4 border border-color rounded-md mb-4">
            <Typography variant="small" className="font-medium mb-2">Styles de base</Typography>
            <div className="flex gap-6 flex-wrap">
              <NavLink 
                href="#" 
                color="primary"
                className="relative group px-3 py-1 hover:bg-blue-50"
              >
                <span>Lien standard</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full bg-[repeating-linear-gradient(45deg,var(--color-primary),var(--color-primary)_5px,transparent_5px,transparent_10px)]"></span>
              </NavLink>
              
              <NavLink 
                href="/ds-lab/components" 
                exact 
                color="primary"
                className="relative group px-3 py-1 hover:bg-blue-50"
              >
                <span>Lien actif</span>
              </NavLink>
              
              <NavLink 
                href="#" 
                underline 
                color="primary"
                className="relative group px-3 py-1 hover:bg-blue-50"
              >
                <span>Avec soulignement</span>
              </NavLink>
              
              <NavLink 
                href="#" 
                icon={<SampleIcon />} 
                color="primary"
                className="relative group px-3 py-1 hover:bg-blue-50"
              >
                <span>Avec icône</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full bg-[repeating-linear-gradient(45deg,var(--color-primary),var(--color-primary)_5px,transparent_5px,transparent_10px)]"></span>
              </NavLink>
            </div>
          </div>
          
          <div className="p-4 border border-color rounded-md">
            <Typography variant="small" className="font-medium mb-2">Variations de couleur</Typography>
            <div className="flex gap-6 flex-wrap">
              <div className="flex flex-col items-center">
                <NavLink 
                  href="#" 
                  color="primary" 
                  className="text-lg relative group"
                >
                  <span>Primaire</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <Typography variant="small" className="mt-1">
                  <span className="text-xs bg-[var(--color-primary)] text-white px-1 rounded">#00B3B3</span>
                </Typography>
              </div>
              
              <div className="flex flex-col items-center">
                <NavLink 
                  href="#" 
                  color="secondary" 
                  className="text-lg relative group"
                >
                  <span>Secondaire</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-secondary)] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <Typography variant="small" className="mt-1">
                  <span className="text-xs bg-[var(--color-secondary)] text-white px-1 rounded">#004466</span>
                </Typography>
              </div>
              
              <div className="flex flex-col items-center">
                <NavLink 
                  href="#" 
                  color="tertiary" 
                  className="text-lg relative group"
                >
                  <span>Tertiaire</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-tertiary)] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <Typography variant="small" className="mt-1">
                  <span className="text-xs bg-[var(--color-tertiary)] text-white px-1 rounded">#F06424</span>
                </Typography>
              </div>
              
              <div className="flex flex-col items-center">
                <NavLink 
                  href="/ds-lab/components" 
                  exact 
                  useGradient 
                  className="text-lg relative group"
                >
                  <span>Dégradé</span>
                </NavLink>
                <Typography variant="small" className="mt-1">
                  <span className="text-xs bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-1 rounded">Actif</span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'logo',
      title: 'Logo',
      description: 'Différentes versions du logo IrimWebForge',
      component: (
        <div className="space-y-6">
          <div>
            <Typography variant="small" className="mb-2 font-semibold">Format SVG</Typography>
            <div className="flex flex-wrap gap-6 items-center">
              <div>
                <Typography variant="small" className="mb-1 text-secondary">Light</Typography>
                <Logo width={150} mode="light" format="svg" />
              </div>
              <div>
                <Typography variant="small" className="mb-1 text-secondary">Dark</Typography>
                <Logo width={150} mode="dark" format="svg" />
              </div>
              <div>
                <Typography variant="small" className="mb-1 text-secondary">Default</Typography>
                <Logo width={150} mode="default" format="svg" />
              </div>
            </div>
          </div>
          <div>
            <Typography variant="small" className="mb-2 font-semibold">Format PNG</Typography>
            <div className="flex flex-wrap gap-6 items-center">
              <div>
                <Typography variant="small" className="mb-1 text-secondary">Light</Typography>
                <Logo width={150} mode="light" format="png" />
              </div>
              <div>
                <Typography variant="small" className="mb-1 text-secondary">Dark</Typography>
                <Logo width={150} mode="dark" format="png" />
              </div>
            </div>
          </div>
          <div>
            <Typography variant="small" className="mb-2 font-semibold">Variante Banner</Typography>
            <div className="flex flex-wrap gap-6 items-center">
              <div>
                <Typography variant="small" className="mb-1 text-secondary">Light</Typography>
                <Logo width={200} mode="light" variant="banner" />
              </div>
              <div>
                <Typography variant="small" className="mb-1 text-secondary">Dark</Typography>
                <Logo width={200} mode="dark" variant="banner" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Données des composants moléculaires
  const moleculeComponents: ComponentType[] = [
    {
      id: 'card',
      title: 'Card',
      description: 'Conteneurs de contenu avec différentes variantes et options de personnalisation',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card 
            title="Carte standard" 
            subtitle="Avec sous-titre"
          >
            <p>Contenu de la carte</p>
          </Card>
          <Card 
            title="Carte avec bordure" 
            variant="outline"
          >
            <p>Variante avec bordure</p>
          </Card>
          <Card 
            title="Carte élevée" 
            variant="elevated"
          >
            <p>Avec ombre portée</p>
          </Card>
          <Card 
            title="Carte accent" 
            variant="accent"
            color="primary"
          >
            <p>Avec accent coloré</p>
          </Card>
        </div>
      )
    },
    {
      id: 'tabs',
      title: 'Tabs',
      description: 'Onglets pour organiser le contenu en sections avec différentes variantes visuelles',
      component: (
        <Tabs
          tabs={TAB_ITEMS}
          variant="underlined"
        />
      )
    },
    {
      id: 'blog-post-card',
      title: 'BlogPostCard',
      description: 'Carte pour afficher des articles de blog avec image, titre, résumé et métadonnées',
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <BlogPostCard {...BLOG_POSTS[0]} />
          <BlogPostCard {...BLOG_POSTS[1]} variant="compact" />
          <BlogPostCard {...BLOG_POSTS[2]} />
        </div>
      )
    },
    {
      id: 'comparative-table',
      title: 'ComparativeTable',
      description: 'Tableau comparatif pour présenter différentes options ou forfaits',
      component: (
        <ComparativeTable
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          highlightRecommended={true}
          groupByCategory={true}
        />
      )
    },
    {
      id: 'modal',
      title: 'Modal',
      description: 'Fenêtre modale pour afficher du contenu en superposition sur la page principale',
      component: (
        <ModalExample />
      )
    },
    {
      id: 'pricing-plan',
      title: 'PricingPlan',
      description: 'Carte de tarification pour présenter différents forfaits et leurs caractéristiques',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PricingPlan
            title="Basique"
            description="Pour les petits projets"
            price={{ amount: 29, period: "mois" }}
            features={PRICING_FEATURES.basic}
            ctaText="Commencer"
            ctaLink="#"
            color="primary"
          />
          <PricingPlan
            title="Pro"
            description="Pour les professionnels"
            price={{ amount: 79, period: "mois" }}
            features={PRICING_FEATURES.pro}
            ctaText="Essayer gratuitement"
            ctaLink="#"
            variant="featured"
            badge="Populaire"
            color="secondary"
          />
          <PricingPlan
            title="Entreprise"
            description="Pour les grandes équipes"
            price={{ amount: 149, period: "mois" }}
            features={PRICING_FEATURES.enterprise}
            ctaText="Contacter l'équipe"
            ctaLink="#"
            color="tertiary"
          />
        </div>
      )
    },
    {
      id: 'stat-card',
      title: 'StatCard',
      description: 'Carte de statistique pour mettre en avant des chiffres clés avec icône et description',
      component: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Projets terminés"
            value={342}
            icon={<Icon name="BarChart" />}
            color="primary"
            trend={{ value: "+12%", direction: "up", label: "vs mois dernier" }}
          />
          <StatCard
            title="Clients satisfaits"
            value={98}
            valueSuffix="%"
            icon={<Icon name="ThumbsUp" />}
            variant="accent"
            color="tertiary"
          />
          <StatCard
            title="Temps de réponse"
            value="2h"
            subtitle="Temps moyen de réponse support"
            icon={<Icon name="Clock" />}
            variant="outline"
            color="secondary"
          />
          <StatCard
            title="Revenus mensuels"
            value="28K"
            valuePrefix="€"
            trend={{ value: "+8%", direction: "up", label: "vs mois dernier" }}
            icon={<Icon name="TrendingUp" />}
            color="primary"
          />
        </div>
      )
    },
    {
      id: 'testimonial',
      title: 'Testimonial',
      description: 'Témoignage client avec avatar, nom, titre et contenu personnalisable',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Testimonial
            quote="L'équipe d'IrimWebForge a transformé notre présence en ligne. Notre site est non seulement beau mais aussi performant et facile à utiliser."
            author="Pierre Leroy"
            company="CEO, LeadVision"
            avatarSrc="https://i.pravatar.cc/150?img=11"
            variant="default"
          />
          <Testimonial
            quote="Le développement de notre application a été mené de main de maître. La communication était claire et le résultat dépasse nos attentes."
            author="Sophie Moreau"
            company="Directrice Marketing, InnoTech"
            avatarSrc="https://i.pravatar.cc/150?img=12"
            variant="featured"
            projectName="App InnoTech"
          />
        </div>
      )
    },
    {
      id: 'service-highlight',
      title: 'ServiceHighlight',
      description: 'Mise en avant de service avec icône, titre, description et lien',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceHighlight
            title="Design d'interface"
            description="Création d'interfaces utilisateur intuitives et attrayantes, adaptées à votre marque et à vos utilisateurs."
            icon={<Icon name="Palette" />}
            color="primary"
            ctaLink="#"
            bulletPoints={[
              "Design responsive pour tous appareils",
              "Identité visuelle cohérente",
              "Expérience utilisateur optimisée"
            ]}
          />
          <ServiceHighlight
            title="Développement web"
            description="Développement de sites et applications web modernes, performants et sécurisés."
            icon={<Icon name="Code" />}
            color="secondary"
            variant="featured"
            ctaLink="#"
            bulletPoints={[
              "Technologies front-end modernes",
              "Architecture évolutive",
              "Optimisation des performances"
            ]}
          />
          <ServiceHighlight
            title="Optimisation SEO"
            description="Amélioration de votre visibilité sur les moteurs de recherche pour attirer plus de visiteurs qualifiés."
            icon={<Icon name="Search" />}
            color="tertiary"
            ctaLink="#"
            bulletPoints={[
              "Audit SEO complet",
              "Optimisation du contenu",
              "Suivi des performances"
            ]}
          />
        </div>
      )
    },
    {
      id: 'feature-grid',
      title: 'FeatureGrid',
      description: 'Grille de fonctionnalités avec icônes et descriptions personnalisables',
      component: (
        <FeatureGrid
          features={FEATURES.map(feature => ({
            ...feature,
            icon: <Icon name={feature.id === 'feature1' ? 'Palette' : feature.id === 'feature2' ? 'Code' : feature.id === 'feature3' ? 'Search' : 'Headphones'} />
          }))}
          columns={2}
          variant="outline"
          gap="medium"
        />
      )
    },
    {
      id: 'faq',
      title: 'FAQ',
      description: 'Questions fréquemment posées avec accordéon pour afficher/masquer les réponses',
      component: (
        <FAQ
          items={FAQ_ITEMS}
          color="tertiary"
          variant="separated"
          icon="chevron"
          allowMultiple={true}
        />
      )
    },
    {
      id: 'form-field',
      title: 'FormField',
      description: 'Champ de formulaire avec label, validation et messages d\'erreur',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            id="name"
            label="Nom complet"
            type="text"
            placeholder="Entrez votre nom"
            required={true}
          />
          <FormField
            id="email"
            label="Adresse e-mail"
            type="email"
            placeholder="exemple@domain.com"
            required={true}
            error="Veuillez saisir une adresse email valide."
          />
          <FormField
            id="service"
            label="Service requis"
            type="select"
            options={[
              { value: "design", label: "Design d'interface" },
              { value: "development", label: "Développement web" },
              { value: "seo", label: "Optimisation SEO" },
              { value: "maintenance", label: "Maintenance" }
            ]}
            placeholder="Sélectionnez un service"
          />
          <FormField
            id="message"
            label="Message"
            type="textarea"
            placeholder="Décrivez votre projet..."
            helperText="Partagez autant de détails que possible"
          />
        </div>
      )
    },
    {
      id: 'project-preview',
      title: 'ProjectPreview',
      description: 'Aperçu de projet avec image, titre, description et tags',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((project, index) => (
            <ProjectPreview
              key={project.id}
              {...project}
              variant={index === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>
      )
    },
    {
      id: 'conversation-form',
      title: 'ConversationForm',
      description: 'Formulaire de conversation avec champs conditionnels et étapes',
      component: (
        <div className="space-y-4">
          <ConversationForm 
            title="Parlons de votre projet"
            subtitle="Quelques informations pour démarrer"
            fields={[
              {
                id: "name",
                type: "text",
                label: "Votre nom",
                placeholder: "Prénom et nom",
                required: true
              },
              {
                id: "email",
                type: "email",
                label: "Adresse e-mail",
                placeholder: "votre@email.com",
                required: true
              },
              {
                id: "service",
                type: "select",
                label: "Service requis",
                options: [
                  { value: "web", label: "Site web" },
                  { value: "app", label: "Application" },
                  { value: "design", label: "Design UI/UX" }
                ],
                required: true
              },
              {
                id: "budget",
                type: "select",
                label: "Budget estimé",
                options: [
                  { value: "small", label: "< 5 000 €" },
                  { value: "medium", label: "5 000 € - 15 000 €" },
                  { value: "large", label: "> 15 000 €" }
                ],
                dependsOn: { field: "service", value: "web" }
              },
              {
                id: "message",
                type: "textarea",
                label: "Votre message",
                placeholder: "Décrivez votre projet...",
                required: true
              }
            ]}
            submitButtonText="Envoyer ma demande"
            successMessage="Merci pour votre message ! Nous vous répondrons très rapidement."
            variant="card"
          />
        </div>
      )
    }
  ];

  // Données des composants organismes
  const organismComponents: ComponentType[] = [
    {
      id: 'header',
      title: 'Header',
      description: 'En-tête du site avec navigation et logo, utilisant le dégradé pour les liens actifs',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30 rounded-md mb-4">
            <Typography variant="p" className="font-medium mb-2">Points clés du Header</Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>NavLinks avec effet de dégradé pour les liens actifs (useGradient)</li>
              <li>Bouton de contact en CTA principal (gradient + effet brillance)</li>
              <li>Menu responsive avec maintien des styles visuels</li>
            </ul>
          </div>
          
          <div className="border border-color rounded-lg overflow-hidden">
            <Header />
          </div>
        </div>
      )
    },
    {
      id: 'footer',
      title: 'Footer',
      description: 'Pied de page avec liens et informations organisés par sections',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-primary)] bg-blue-50/30 rounded-md mb-4">
            <Typography variant="p" className="font-medium mb-2">Éléments du Footer</Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Utilisation du composant NavLink pour tous les liens</li>
              <li>Typographie hiérarchisée avec composant Typography</li>
              <li>Organisation claire des sections de navigation</li>
            </ul>
          </div>
          
          <div className="border border-color rounded-lg overflow-hidden scale-90 origin-top">
            <Footer />
          </div>
        </div>
      )
    },
    {
      id: 'hero-section',
      title: 'HeroSection',
      description: 'Section d\'en-tête principale avec titre en italique gras et CTA principal brillant',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-secondary)] bg-cyan-50/30 rounded-md mb-4">
            <Typography variant="p" className="font-medium mb-2">Caractéristiques de la HeroSection</Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Titre principal (h1) en italique gras selon la hiérarchie visuelle</li>
              <li>CTA principal avec dégradé et effet brillance</li>
              <li>CTA secondaire en variante outline pour la hiérarchie d'actions</li>
            </ul>
          </div>
          
          <div className="border border-color rounded-lg overflow-hidden">
            <HeroSection 
              title="Créez des interfaces exceptionnelles"
              subtitle="Design system complet pour des expériences utilisateur cohérentes et professionnelles"
              ctaText="Explorer nos services"
              ctaHref="#"
              secondaryCtaText="En savoir plus"
              secondaryCtaHref="#"
              className="py-12"
            />
          </div>
        </div>
      )
    },
    {
      id: 'page-header',
      title: 'PageHeader',
      description: 'En-tête de page configurable avec titre, actions et styles variés',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-primary)] bg-blue-50/30 rounded-md mb-4">
            <Typography variant="p" className="font-medium mb-2">Options du PageHeader</Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Titre h1 en italique gras pour respecter la hiérarchie visuelle</li>
              <li>CTA avec effet brillance pour les actions principales</li>
              <li>Système flexible de breadcrumbs avec NavLink</li>
              <li>Plusieurs variantes de taille et d'apparence</li>
            </ul>
          </div>
          
          <div className="border border-color rounded-lg overflow-hidden">
            <PageHeader 
              title="Votre projet mérite le meilleur"
              subtitle="Découvrez notre approche"
              badge={{ text: "Nouveau", variant: "tertiary" }}
              breadcrumbs={[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Développement web", href: "#" }
              ]}
              actions={[
                { label: "Demander un devis", href: "#", variant: "gradient", isMainCta: true },
                { label: "Nos références", href: "#", variant: "outline" }
              ]}
              size="medium"
              align="left"
            />
          </div>
        </div>
      )
    },
    {
      id: 'feature-section',
      title: 'FeatureSection',
      description: 'Section pour présenter les fonctionnalités ou avantages avec différents layouts',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30 rounded-md mb-4">
            <Typography variant="p" className="font-medium mb-2">Caractéristiques du FeatureSection</Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Titre h2 en italique gras conforme à la hiérarchie typographique</li>
              <li>CTA principal avec effet brillance si marqué comme tel</li>
              <li>Multiples layouts pour différentes présentations (grid, cards, list, etc.)</li>
              <li>Styles d'icônes et numérotation personnalisables</li>
            </ul>
          </div>
          
          <div className="border border-color rounded-lg overflow-hidden">
            <FeatureSection 
              title="Nos services"
              subtitle="Solutions sur mesure pour vos besoins digitaux"
              features={[
                {
                  id: "feature1",
                  title: "Design d'interface",
                  description: "Interfaces utilisateur intuitives et attrayantes",
                  icon: "Palette"
                },
                {
                  id: "feature2",
                  title: "Développement web",
                  description: "Sites et applications web performants",
                  icon: "Code"
                },
                {
                  id: "feature3",
                  title: "Optimisation SEO",
                  description: "Améliorez votre visibilité en ligne",
                  icon: "Search"
                }
              ]}
              columns={3}
              layout="grid"
              backgroundColor="light"
              cta={{
                text: "Tous nos services",
                href: "#",
                variant: "gradient",
                isMainCta: true
              }}
              textAlign="center"
              className="py-8"
            />
          </div>
        </div>
      )
    },
    {
      id: 'enhanced-contact-form',
      title: 'EnhancedContactForm',
      description: 'Formulaire de contact enrichi avec sections complémentaires',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-secondary)] bg-cyan-50/30 rounded-md mb-4">
            <Typography variant="p" className="font-medium mb-2">Éléments du formulaire de contact</Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Titre h2 en italique gras pour la cohérence typographique</li>
              <li>Utilisation mesurée des accents de couleur</li>
              <li>Mise en valeur des services proposés</li>
              <li>Adaptation responsive du formulaire</li>
            </ul>
          </div>
          
          <div className="border border-color rounded-lg overflow-hidden">
            <EnhancedContactForm 
              title="Discutons de votre projet"
              subtitle="Nous vous répondrons sous 24h"
              accentColor="primary"
              style="card"
              showImage={true}
              testimonial={{
                quote: "IrimWebForge a transformé notre vision en une interface utilisateur exceptionnelle. Leur équipe a été à l'écoute et proactive tout au long du projet.",
                author: "Marie Dumas",
                company: "DirecteurTech",
                avatar: "/images/testimonials/avatar-1.svg"
              }}
              services={[
                {
                  icon: '/icons/website.svg',
                  title: 'Site web sur mesure',
                  description: 'Des sites web personnalisés et performants.'
                },
                {
                  icon: '/icons/admin.svg',
                  title: 'Interfaces d\'administration',
                  description: 'Des tableaux de bord efficaces pour gérer vos données.'
                },
                {
                  icon: '/icons/support.svg',
                  title: 'Support réactif',
                  description: 'Une assistance continue pour tous vos besoins.'
                }
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
      )
    }
  ];

  // Organisation des catégories
  const categories: ComponentCategory[] = [
    {
      id: 'atoms',
      title: 'Composants atomiques',
      components: atomComponents
    },
    {
      id: 'molecules',
      title: 'Composants moléculaires',
      components: moleculeComponents
    },
    {
      id: 'organisms',
      title: 'Composants organismes',
      components: organismComponents
    }
  ];

  // Fonction pour afficher une catégorie de composants
  const renderCategory = (category: ComponentCategory) => {
    return (
      <div key={category.id} className="mb-12">
        <Typography as="h2" variant="h2" className="mb-6 pb-2 border-b border-color">
          {category.title}
        </Typography>
        
        <div className="grid grid-cols-1 gap-8">
          {category.components.map(comp => (
            <div key={comp.id} className="p-6 surface-secondary rounded-lg">
              <Typography as="h3" variant="h3" className="mb-2">
                {comp.title}
              </Typography>
              <Typography variant="p" className="mb-4 text-secondary">
                {comp.description}
              </Typography>
              
              <div className="p-4 surface-primary rounded-lg">
                {comp.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Filtrer les catégories selon l'onglet actif
  const activeCategories = categories.filter(
    cat => activeCategory === 'all' || cat.id === activeCategory
  );

  // Créer les onglets pour la navigation
  const categoryTabs = [
    { id: 'all', label: 'Tous' },
    ...categories.map(cat => ({ id: cat.id, label: cat.title }))
  ];
  
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <Typography as="h1" variant="h1" className="mb-4 text-center">
        Design System IrimWebForge
      </Typography>
      
      <Typography as="p" variant="lead" className="mb-8 text-center max-w-2xl mx-auto">
        Bibliothèque de composants et système de design pour les projets IrimWebForge
      </Typography>

      {/* Navigation par onglets */}
      <div className="mb-8">
        <div className="flex justify-center overflow-x-auto pb-2 gap-2">
          {categoryTabs.map(tab => (
            <Button 
              key={tab.id}
              variant={activeCategory === tab.id ? "primary" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Affichage des catégories de composants */}
      {activeCategories.map(renderCategory)}


      {/* Lien retour */}
      <div className="text-center mt-12">
        <Link href="/ds-lab" className="inline-flex items-center text-primary hover:text-primary/80 border-b-2 border-[var(--color-tertiary)]">
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Retour au DS Lab
        </Link>
      </div>
    </div>
  );
}

// Composant exemple pour la Modal qui doit être défini en dehors du tableau
function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button 
        variant="primary" 
        onClick={() => setIsOpen(true)}
      >
        Ouvrir la modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Exemple de modal"
        size="medium"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Annuler
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Confirmer
            </Button>
          </div>
        }
      >
        <div className="py-4">
          <Typography variant="p">
            Ceci est un exemple de contenu dans une modal. Les modals sont utiles pour afficher des informations supplémentaires sans quitter la page actuelle.
          </Typography>
          <div className="mt-4">
            <Input
              label="Exemple de champ"
              placeholder="Saisissez une valeur"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}