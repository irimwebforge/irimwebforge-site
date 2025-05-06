"use client";

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { CallToAction } from '@/components/molecules/CallToAction';
import { CompactCallToAction } from '@/components/molecules/CompactCallToAction';
import { ProcessTimeline } from '@/components/molecules/ProcessTimeline';
import { Card } from '@/components/molecules/Card';
import { FeatureGrid } from '@/components/molecules/FeatureGrid';
import { NavLink } from '@/components/atoms/NavLink';
import { Divider } from '@/components/atoms/Divider';
import { ButtonExamples } from './button-examples';

// Création des données d'exemple
const timelineSteps = [
  {
    id: '1',
    title: 'Découverte',
    description: 'Nous prenons le temps de comprendre vos besoins et vos objectifs.',
    icon: <Icon name="Search" />,
    completed: true
  },
  {
    id: '2',
    title: 'Conception',
    description: 'Nous créons des maquettes et des prototypes pour visualiser le projet.',
    icon: <Icon name="Palette" />,
    completed: true
  },
  {
    id: '3',
    title: 'Développement',
    description: 'Nous développons votre solution sur mesure avec les dernières technologies.',
    icon: <Icon name="Code" />,
    current: true
  },
  {
    id: '4',
    title: 'Déploiement',
    description: 'Nous mettons en ligne votre projet et assurons sa stabilité.',
    icon: <Icon name="Rocket" />
  }
];

const features = [
  {
    id: '1',
    title: 'Design sur mesure',
    description: 'Des interfaces uniques qui reflètent votre identité visuelle et vos valeurs.',
    icon: <Icon name="Palette" />
  },
  {
    id: '2',
    title: 'Performances optimales',
    description: 'Des solutions rapides, fluides et optimisées pour tous les appareils.',
    icon: <Icon name="Zap" />
  },
  {
    id: '3',
    title: 'Solutions évolutives',
    description: 'Des architectures pensées pour accompagner la croissance de votre activité.',
    icon: <Icon name="TrendingUp" />
  }
];

export default function TertiaryColorPage() {
  return (
    <Container className="py-12">
      <div className="mb-12 border-b border-b-[var(--color-tertiary)] pb-6">
        <Typography as="h1" variant="h1" className="mb-4 font-bold italic">
          Utilisation de la couleur tertiaire
        </Typography>
        <Typography variant="lead" className="mb-6">
          Guide d&apos;utilisation de l&apos;orange <span className="font-mono bg-gray-100 px-2 py-1 rounded">#F06424</span> comme élément d&apos;accentuation dans le design system.
        </Typography>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link href="/ds-lab">
            <Button variant="secondary" size="sm" icon={<Icon name="ArrowLeft" size={16} />}>
              Retour au DS Lab
            </Button>
          </Link>
          <Link href="/ds-lab/fundamentals">
            <Button variant="gradient" size="sm" className="shine-effect">
              Voir les fondamentaux
            </Button>
          </Link>
        </div>
      </div>

      {/* Section 1: Éléments de bordure et d'accent */}
      <section className="mb-16">
        <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
          Lignes et bordures
        </Typography>
        
        <Card className="p-6 mb-8 border-l-4 border-l-[var(--color-tertiary)]">
          <Typography as="h3" variant="h3" className="mb-4">
            Bordures d'accent
          </Typography>
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-3">
              <div className="p-4 border border-[var(--color-tertiary)] rounded">Bordure complète</div>
              <div className="p-4 border-l-4 border-l-[var(--color-tertiary)]">Bordure gauche</div>
              <div className="p-4 border-b-2 border-b-[var(--color-tertiary)]">Bordure inférieure</div>
            </div>
            <Typography variant="p" className="mt-2">
              Les bordures orange attirent l'attention sur des éléments spécifiques sans dominer visuellement.
            </Typography>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Séparateurs
          </Typography>
          <div className="grid gap-4">
            <div className="space-y-4">
              <Divider color="tertiary" />
              <Divider label="Avec label" color="tertiary" />
              <div className="p-4 border-t border-t-[var(--color-tertiary)]">Section avec bordure supérieure</div>
            </div>
            <Typography variant="p" className="mt-2">
              Les séparateurs orange peuvent structurer le contenu et guider le regard.
            </Typography>
          </div>
        </Card>
      </section>

      {/* Section 2: Badges et notifications */}
      <section className="mb-16">
        <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
          Badges et notifications
        </Typography>
        
        <Card className="p-6">
          <Typography as="h3" variant="h3" className="mb-4">
            Badges
          </Typography>
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="tertiary">Nouveau</Badge>
              <Badge variant="tertiary" isSolid={true}>Promo</Badge>
              <Badge variant="tertiary" isOutlined={true}>À la une</Badge>
              <Badge variant="tertiary" shape="pill">Featured</Badge>
              <Badge variant="tertiary" dot={true}>Important</Badge>
            </div>
            <Typography variant="p" className="mt-2">
              Les badges utilisent la couleur orange pour les notifications importantes comme "Nouveau", "Promo", etc.
            </Typography>
          </div>
        </Card>
      </section>

      {/* Section 3: Typographie et mise en valeur */}
      <section className="mb-16">
        <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
          Mise en valeur textuelle
        </Typography>
        
        <Card className="p-6">
          <Typography as="h3" variant="h3" className="mb-4">
            Accents textuels
          </Typography>
          <div className="grid gap-4">
            <Typography variant="p" withAccentedWords className="mb-2">
              Ce texte met automatiquement en valeur certains mots comme innovation, excellence, créativité, sur-mesure et qualité.
            </Typography>
            <div className="p-4 border-l-4 border-l-[var(--color-tertiary)] bg-[var(--color-tertiary)]/5">
              <Typography variant="p" className="font-medium">
                Les blocs de citation ou d'information importante peuvent utiliser un fond légèrement teinté et une bordure orange.
              </Typography>
            </div>
          </div>
        </Card>
      </section>

      {/* Section 4: Composants avec accents */}
      <section className="mb-16">
        <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
          Composants avec accents orange
        </Typography>
        
        <div className="mb-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Appels à l'action (CTA)
          </Typography>
          <CallToAction
            title="Besoin d'un projet web sur mesure ?"
            description="Nous créons des sites et applications qui correspondent parfaitement à votre vision et à vos besoins."
            primaryAction={{
              text: "Demander un devis",
              url: "#",
              variant: "gradient"
            }}
            secondaryAction={{
              text: "En savoir plus",
              url: "#",
              variant: "secondary"
            }}
            variant="default"
            borderLeft="var(--color-tertiary)"
            className="mb-6"
          />
          
          <CompactCallToAction
            text="Découvrez notre processus de création"
            ctaText="Voir plus"
            ctaUrl="#"
            icon={<Icon name="Info" color="var(--color-tertiary)" />}
            color="primary"
            className="border-l-4 border-l-[var(--color-tertiary)]"
          />
        </div>
        
        <div className="mb-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Cartes et conteneurs
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card key={feature.id} className="p-4 border-t-4 border-t-[var(--color-tertiary)]">
                <div className="flex items-center mb-3">
                  <div className="mr-3 text-[var(--color-tertiary)]">
                    {feature.icon}
                  </div>
                  <Typography variant="h4">{feature.title}</Typography>
                </div>
                <Typography variant="p">{feature.description}</Typography>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <Typography as="h3" variant="h3" className="mb-4">
            Timeline de processus
          </Typography>
          <ProcessTimeline
            steps={timelineSteps}
            accentColor="tertiary"
            withNumbers={true}
          />
          <Typography variant="p" className="mt-4">
            Les étapes actives et complétées utilisent la couleur orange pour guider l'utilisateur visuellement à travers un processus.
          </Typography>
        </div>
      </section>

      {/* Section 5: Boutons avec l'utilisation correcte */}
      <section className="mb-16">
        <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
          Boutons et CTA
        </Typography>
        
        <ButtonExamples />
      </section>

      {/* Section 6: Bonnes pratiques */}
      <section className="mb-12">
        <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
          Bonnes pratiques d'utilisation
        </Typography>
        
        <Card className="p-6 border-l-4 border-l-[var(--color-tertiary)]">
          <Typography as="h3" variant="h3" className="mb-4">
            Quand utiliser la couleur tertiaire
          </Typography>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <Typography variant="p">
                <Typography as="span" variant="accent">Bordures et lignes</Typography> - Pour mettre en évidence des sections ou éléments spécifiques
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                <Typography as="span" variant="accent">Badges et notifications</Typography> - Pour signaler des nouveautés ou des éléments importants
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                <Typography as="span" variant="accent">Mots-clés</Typography> - Pour mettre en valeur certains termes dans un texte
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                <Typography as="span" variant="accent">Icônes d'accent</Typography> - Pour ajouter des points focaux visuels sans surcharger l'interface
              </Typography>
            </li>
          </ul>
        </Card>
      </section>

      <div className="p-6 border border-dashed border-[var(--color-tertiary)] rounded-md mb-12">
        <Typography as="h3" variant="h3" className="mb-4 text-center">
          Principes d'utilisation
        </Typography>
        <Typography variant="p" className="text-center mb-6">
          La couleur orange doit être utilisée avec parcimonie, comme une touche d&apos;accent et non comme couleur principale.
        </Typography>
        <div className="flex justify-center">
          <Button variant="gradient" className="shine-effect">
            Les actions principales utilisent le dégradé signature
          </Button>
        </div>
      </div>

      {/* Section de résumé */}
      <Card className="p-6 mb-12 bg-[var(--color-tertiary)]/5">
        <div className="flex items-start">
          <div className="mr-4 text-[var(--color-tertiary)]">
            <Icon name="AlertCircle" size={24} />
          </div>
          <div>
            <Typography as="h3" variant="h3" className="mb-2">
              Résumé des principes
            </Typography>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Typography variant="p">
                  <strong>Utilisez l'orange</strong> pour les bordures, séparateurs, badges et accents visuels
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  <strong>Préférez le dégradé</strong> turquoise-bleu foncé pour les boutons CTA principaux
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  <strong>Appliquez avec parcimonie</strong> pour maintenir un équilibre visuel dans l'interface
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Lien retour */}
      <div className="mt-12 text-center">
        <Link href="/ds-lab" className="text-primary hover:text-primary/80 border-b-2 border-[var(--color-tertiary)] inline-flex items-center gap-2">
          <Icon name="ArrowLeft" size={16} />
          Retour au DS Lab
        </Link>
      </div>
    </Container>
  );
} 