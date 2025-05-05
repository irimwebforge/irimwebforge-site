// app/test/page.tsx
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/molecules/Card';
import { Typography } from '@/components/atoms/Typography';

export default function TestPage() {
  // Icône simple pour les tests
  const TestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  );

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Typography as="h1" variant="h1" className="mb-8">
        Test de composants IrimWebForge
      </Typography>

      <section className="mb-12">
        <Typography as="h2" variant="h2" className="mb-4">
          Boutons
        </Typography>

        {/* Variantes de base */}
        <div className="mb-6">
          <Typography as="h3" variant="h3" className="mb-2">
            Variantes de base
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Bouton Primaire</Button>
            <Button variant="secondary">Bouton Secondaire</Button>
            <Button variant="outline">Bouton Outline</Button>
          </div>
        </div>

        {/* Tailles */}
        <div className="mb-6">
          <Typography as="h3" variant="h3" className="mb-2">
            Tailles
          </Typography>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="sm">Petit</Button>
            <Button variant="primary" size="md">Moyen</Button>
            <Button variant="primary" size="lg">Grand</Button>
          </div>
        </div>

        {/* Avec icônes */}
        <div className="mb-6">
          <Typography as="h3" variant="h3" className="mb-2">
            Avec icônes
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" icon={<TestIcon />} iconPosition="left">Icône gauche</Button>
            <Button variant="primary" icon={<TestIcon />} iconPosition="right">Icône droite</Button>
            <Button variant="secondary" icon={<TestIcon />}>Icône secondaire</Button>
          </div>
        </div>

        {/* Icône seule (iconOnly) */}
        <div className="mb-6">
          <Typography as="h3" variant="h3" className="mb-2">
            Icône seule (accessibilité)
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" icon={<TestIcon />} iconOnly aria-label="Aller à droite" />
            <Button variant="secondary" icon={<TestIcon />} iconOnly aria-label="Aller à droite" />
            <Button variant="outline" icon={<TestIcon />} iconOnly aria-label="Aller à droite" />
          </div>
        </div>

        {/* Pleine largeur */}
        <div className="mb-6">
          <Typography as="h3" variant="h3" className="mb-2">
            Pleine largeur
          </Typography>
          <div className="max-w-md">
            <Button variant="primary" fullWidth>Bouton pleine largeur</Button>
          </div>
        </div>

        {/* États spéciaux */}
        <div className="mb-6">
          <Typography as="h3" variant="h3" className="mb-2">
            États spéciaux
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>Désactivé</Button>
            <Button variant="primary" className="shadow-lg">Avec ombre</Button>
            <Button variant="primary" loading>Chargement…</Button>
          </div>
        </div>
      </section>

      <section>
        <Typography as="h2" variant="h2" className="mb-4">
          Cartes
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title={<Typography variant="h3">Carte Standard</Typography>}
            footer={<Typography variant="small">Version par défaut</Typography>}
          >
            <Typography variant="p">
              Contenu de la carte standard avec des informations sur IrimWebForge.
            </Typography>
          </Card>

          <Card
            title={<Typography variant="h3">Carte avec Bordure</Typography>}
            variant="outlined"
          >
            <Typography variant="p">
              Cette carte utilise une bordure fine pour délimiter son contenu.
            </Typography>
          </Card>

          <Card
            title={<Typography variant="h3">Carte Élevée</Typography>}
            variant="elevated"
          >
            <Typography variant="p">
              La carte élevée utilise une ombre portée pour créer un effet de profondeur.
            </Typography>
          </Card>

          <Card
            title={<Typography variant="h3">Carte Accent</Typography>}
            variant="accent"
            accentColor="primary"
            accentPosition="left"
          >
            <Typography variant="p">
              Cette carte utilise un accent coloré sur le côté gauche.
            </Typography>
          </Card>
        </div>
      </section>
    </div>
  );
}