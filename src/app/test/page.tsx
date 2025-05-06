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
import Link from 'next/link';

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
  const SampleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="8"></line>
    </svg>
  );

  // Données des composants atomiques
  const atomComponents: ComponentType[] = [
    {
      id: 'typography',
      title: 'Typography',
      description: 'Système de typographie pour la hiérarchie textuelle',
      component: (
        <div className="space-y-4">
          <Typography as="h1" variant="h1">Titre h1</Typography>
          <Typography as="h2" variant="h2">Titre h2</Typography>
          <Typography as="h3" variant="h3">Titre h3</Typography>
          <Typography as="h4" variant="h4">Titre h4</Typography>
          <Typography variant="lead">Texte lead</Typography>
          <Typography variant="p">Texte paragraphe standard</Typography>
          <Typography variant="small">Texte petit (small)</Typography>
          <Typography variant="subtle">Texte subtil (subtle)</Typography>
        </div>
      )
    },
    {
      id: 'buttons',
      title: 'Button',
      description: 'Boutons d\'action pour l\'interface utilisateur',
      component: (
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primaire</Button>
          <Button variant="secondary">Secondaire</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" size="sm">Petit</Button>
          <Button variant="primary" size="lg">Grand</Button>
          <Button variant="primary" icon={<SampleIcon />}>Avec icône</Button>
          <Button variant="primary" disabled>Désactivé</Button>
          <Button variant="primary" loading>Chargement</Button>
        </div>
      )
    },
    {
      id: 'badge',
      title: 'Badge',
      description: 'Étiquettes visuelles pour statuts et notifications',
      component: (
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="tertiary">Tertiary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="primary" isSolid>Solid</Badge>
          <Badge variant="primary" isOutlined>Outlined</Badge>
          <Badge variant="primary" count={5}>Compteur</Badge>
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
    },
    {
      id: 'divider',
      title: 'Divider',
      description: 'Séparateurs visuels pour structurer le contenu',
      component: (
        <div className="space-y-4">
          <Divider />
          <Divider variant="dashed" />
          <Divider variant="dotted" />
          <Divider label="Avec label" />
          <Divider label="Gauche" labelPosition="start" />
          <Divider color="primary" />
        </div>
      )
    },
    {
      id: 'navlink',
      title: 'NavLink',
      description: 'Liens de navigation avec états et styles',
      component: (
        <div className="flex gap-6 flex-wrap">
          <NavLink href="#">Lien standard</NavLink>
          <NavLink href="/test" exact>Lien actif</NavLink>
          <NavLink href="#" underline>Avec soulignement</NavLink>
          <NavLink href="#" icon={<SampleIcon />}>Avec icône</NavLink>
        </div>
      )
    }
  ];

  // Données des composants moléculaires
  const moleculeComponents: ComponentType[] = [
    {
      id: 'card',
      title: 'Card',
      description: 'Conteneurs de contenu avec différentes variantes',
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
            variant="outlined"
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
            accentColor="primary"
          >
            <p>Avec accent coloré</p>
          </Card>
        </div>
      )
    },
    {
      id: 'tabs',
      title: 'Tabs',
      description: 'Onglets pour organiser le contenu en sections',
      component: (
        <Tabs
          tabs={[
            {
              id: "tab1",
              label: "Premier onglet",
              content: <div className="p-4">Contenu du premier onglet</div>,
            },
            {
              id: "tab2",
              label: "Deuxième onglet",
              content: <div className="p-4">Contenu du deuxième onglet</div>,
            },
            {
              id: "tab3",
              label: "Troisième onglet",
              content: <div className="p-4">Contenu du troisième onglet</div>,
            },
          ]}
          variant="underlined"
        />
      )
    }
  ];

  // Données des composants organismes
  const organismComponents: ComponentType[] = [
    {
      id: 'header',
      title: 'Header',
      description: 'En-tête du site avec navigation et logo',
      component: (
        <div className="border border-color rounded-lg overflow-hidden">
          <Header />
        </div>
      )
    },
    {
      id: 'footer',
      title: 'Footer',
      description: 'Pied de page avec liens et informations',
      component: (
        <div className="border border-color rounded-lg overflow-hidden scale-90 origin-top">
          <Footer />
        </div>
      )
    }
  ];

  // Données des templates 
  const templateComponents: ComponentType[] = [
    {
      id: 'project-showcase',
      title: 'ProjectShowcase',
      description: 'Template pour présenter les projets réalisés',
      component: (
        <Card>
          <Typography variant="p">
            Le template ProjectShowcase permet d'afficher une grille de projets avec filtrage par catégories et pagination.
          </Typography>
          <div className="mt-3">
            <Link href="/templates">
              <Button variant="outline" size="sm">Voir le template</Button>
            </Link>
          </div>
        </Card>
      )
    },
    {
      id: 'service-overview',
      title: 'ServiceOverview',
      description: 'Template pour présenter les services offerts',
      component: (
        <Card>
          <Typography variant="p">
            Le template ServiceOverview permet d'afficher les services avec différentes mises en page et options.
          </Typography>
          <div className="mt-3">
            <Link href="/templates">
              <Button variant="outline" size="sm">Voir le template</Button>
            </Link>
          </div>
        </Card>
      )
    },
    {
      id: 'cta-section',
      title: 'CTASection',
      description: 'Template pour les appels à l\'action',
      component: (
        <Card>
          <Typography variant="p">
            Le template CTASection permet de créer des sections d'appel à l'action avec différentes variantes.
          </Typography>
          <div className="mt-3">
            <Link href="/templates">
              <Button variant="outline" size="sm">Voir le template</Button>
            </Link>
          </div>
        </Card>
      )
    },
    {
      id: 'value-proposition',
      title: 'ValueProposition',
      description: 'Template pour présenter les valeurs et avantages',
      component: (
        <Card>
          <Typography variant="p">
            Le template ValueProposition permet d'afficher les valeurs, statistiques et témoignages.
          </Typography>
          <div className="mt-3">
            <Link href="/templates">
              <Button variant="outline" size="sm">Voir le template</Button>
            </Link>
          </div>
        </Card>
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
    },
    {
      id: 'templates',
      title: 'Templates',
      components: templateComponents
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
        <div className="flex overflow-x-auto pb-2 gap-2">
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