import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Card } from '@/components/molecules/Card';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import Image from 'next/image';

const proofs = [
  {
    id: 'resetpulse',
    title: 'ResetPulse',
    description:
      'App Time Timer pour cerveaux neuroatypiques. 15 palettes, 16 activités, multilingue.',
    badge: '177 pays',
    image: '/images/projects/resetpulse.webp',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/app/resetpulse/id6737482441',
        icon: 'Apple',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.music4music.resetpulse',
        icon: 'Play',
      },
    ],
  },
  {
    id: 'demoforge',
    title: 'DemoForge',
    description:
      'Plateforme démo interactive multi-univers. Testez la modification des produits en temps réel.',
    badge: 'Live',
    image: '/images/projects/demoforge.webp',
    links: [{ label: 'Tester', url: 'https://demoforge.irimwebforge.com', icon: 'ExternalLink' }],
  },
  {
    id: 'libera-luminosa',
    title: 'Libera Luminosa',
    description:
      'Site yoga avec gestion des cours et ateliers. Séverine gère tout en autonomie.',
    badge: 'Client actif',
    image: '/images/projects/libera-luminosa.webp',
    links: [
      { label: 'Voir le site', url: 'https://liberaluminosa.fr', icon: 'ExternalLink' },
    ],
  },
];

export function HubProofs() {
  return (
    <section id="preuves" className="py-24 bg-section-secondary">
      <Container>
        <div className="text-center mb-16">
          <Typography as="h2" variant="h2" className="mb-4">
            Ce que j'ai construit
          </Typography>
          <Typography variant="lead" className="text-secondary max-w-2xl mx-auto">
            Pas de promesses. Des réalisations.
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {proofs.map((proof) => (
            <Card
              key={proof.id}
              variant="elevated"
              padding="none"
              className="overflow-hidden group"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={proof.image}
                  alt={proof.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="primary">{proof.badge}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Typography as="h3" variant="h3" className="mb-2">
                  {proof.title}
                </Typography>
                <Typography variant="p" className="text-secondary mb-4">
                  {proof.description}
                </Typography>

                {/* Links */}
                <div className="flex flex-wrap gap-2">
                  {proof.links.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="small"
                      href={link.url}
                      target="_blank"
                    >
                      <Icon name={link.icon as any} className="w-4 h-4 mr-1" />
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
