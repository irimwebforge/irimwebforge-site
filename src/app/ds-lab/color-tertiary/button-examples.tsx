import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Card } from '@/components/molecules/Card';

interface ComparisonProps {
  title: string;
  description: string;
  rightExample: React.ReactNode;
  wrongExample: React.ReactNode;
  className?: string;
}

const ComparisonExample: React.FC<ComparisonProps> = ({
  title,
  description,
  rightExample,
  wrongExample,
  className = ''
}) => {
  return (
    <Card className={`p-6 mb-6 ${className}`}>
      <Typography as="h3" variant="h3" className="mb-4">
        {title}
      </Typography>
      <Typography variant="p" className="mb-6">
        {description}
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-green-500 rounded">
          <div className="flex items-center mb-2">
            <Icon name="Check" className="text-green-500 mr-2" />
            <Typography variant="h4">À faire</Typography>
          </div>
          <div className="mb-4">
            {rightExample}
          </div>
        </div>
        
        <div className="p-4 border border-red-500 rounded">
          <div className="flex items-center mb-2">
            <Icon name="X" className="text-red-500 mr-2" />
            <Typography variant="h4">À éviter</Typography>
          </div>
          <div className="mb-4 opacity-60">
            {wrongExample}
          </div>
        </div>
      </div>
    </Card>
  );
};

export const ButtonExamples: React.FC = () => {
  return (
    <div className="my-12">
      <Typography as="h2" variant="h2" className="mb-6">
        Guide d'utilisation des boutons
      </Typography>
      
      <ComparisonExample
        title="Boutons d'appel à l'action (CTA)"
        description="Les CTA principaux doivent utiliser le dégradé turquoise-bleu foncé pour renforcer l'identité visuelle de la marque."
        rightExample={
          <div className="space-y-4">
            <div>
              <Button variant="gradient" size="lg">Demander un devis</Button>
              <Typography variant="p" className="mt-2 text-sm">
                Le dégradé signature donne un aspect premium et cohérent.
              </Typography>
            </div>
          </div>
        }
        wrongExample={
          <div className="space-y-4">
            <div>
              <Button variant="tertiary" size="lg">Demander un devis</Button>
              <Typography variant="p" className="mt-2 text-sm">
                L'orange attire trop l'attention et ne reflète pas l'identité principale.
              </Typography>
            </div>
          </div>
        }
      />
      
      <ComparisonExample
        title="Utilisation de l'orange comme accent"
        description="L'orange doit être utilisé comme élément d'accentuation pour guider le regard et mettre en valeur certains éléments."
        rightExample={
          <div className="space-y-4">
            <div className="p-4 border border-[var(--color-tertiary)] rounded">
              <Typography variant="p" className="mb-3">Découvrez nos dernières innovations</Typography>
              <Button variant="gradient">En savoir plus</Button>
            </div>
            <Typography variant="p" className="text-sm">
              La bordure orange attire l'attention sur le conteneur sans dominer le CTA.
            </Typography>
          </div>
        }
        wrongExample={
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-tertiary)] bg-opacity-20 rounded">
              <Typography variant="p" className="mb-3 text-gray-800">Découvrez nos dernières innovations</Typography>
              <Button variant="tertiary">En savoir plus</Button>
            </div>
            <Typography variant="p" className="text-sm">
              Trop d'orange crée une surcharge visuelle et diminue l'impact des éléments importants.
            </Typography>
          </div>
        }
      />
      
      <ComparisonExample
        title="Boutons secondaires et tertiaires"
        description="Pour les actions secondaires, préférez les variantes outline ou ghost plutôt que tertiary."
        rightExample={
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="gradient">Action principale</Button>
              <Button variant="outline">Action secondaire</Button>
              <Button variant="ghost">Plus d'infos</Button>
            </div>
            <Typography variant="p" className="text-sm">
              Cette hiérarchie visuelle claire guide l'utilisateur vers l'action principale.
            </Typography>
          </div>
        }
        wrongExample={
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="gradient">Action principale</Button>
              <Button variant="tertiary">Action secondaire</Button>
              <Button variant="ghost">Plus d'infos</Button>
            </div>
            <Typography variant="p" className="text-sm">
              L'orange concurrence visuellement l'action principale au lieu de la soutenir.
            </Typography>
          </div>
        }
      />
      
      <Card className="p-6 mb-6 border-l-4 border-l-[var(--color-tertiary)]">
        <div className="flex">
          <div className="text-[var(--color-tertiary)] mr-4">
            <Icon name="Lightbulb" size={24} />
          </div>
          <div>
            <Typography as="h3" variant="h3" className="mb-2">
              Principe général
            </Typography>
            <Typography variant="p">
              <strong>L'orange est une couleur d'accentuation</strong> qui doit être utilisée pour attirer l'attention sur des éléments spécifiques comme des bordures, des badges ou des icônes. Pour les actions principales, utilisez toujours le dégradé turquoise-bleu foncé qui renforce l'identité visuelle de la marque.
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
}; 