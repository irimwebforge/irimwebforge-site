'use client';

import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/organisms/PageHeader';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { getServiceByIdSync } from '@/data/services';
import type { ServiceId } from '@/data/services';
import { getAllServiceIds } from '@/data/services';

export default function ServicePage() {
  const params = useParams();
  const service = getServiceByIdSync(params.id as ServiceId);

  if (!service) {
    return (
      <Container>
        <div className="py-20 text-center">
          <Typography variant="h2">Service non trouvé</Typography>
          <Typography variant="lead" className="mt-4 mb-8 text-gray-600 dark:text-gray-300">
            Cette page n'existe pas ou a été déplacée.
          </Typography>
          <Button href="/services" variant="secondary">
            Voir tous les services
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title={service.title}
        description={service.fullDescription}
        align="center"
        size="large"
        pattern
        badge={{ text: 'En savoir plus', variant: service.color }}
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* En-tête avec prix et support */}
            <Card className="mb-12" padding="large">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg bg-[var(--color-${service.color}-100)] dark:bg-[var(--color-${service.color}-900)]`}
                  >
                    <Icon
                      name={service.icon}
                      className={`w-8 h-8 text-[var(--color-${service.color})]`}
                    />
                  </div>
                  <div>
                    <Typography variant="h3" className="mb-2">
                      {service.title}
                    </Typography>
                    <Typography variant="p" className="text-gray-600 dark:text-gray-300">
                      {service.shortDescription}
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Badge variant={service.color} size="large">
                    {service.price}
                  </Badge>
                  <Badge variant="default" size="large">
                    {service.support}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Redirection */}
            <div className="text-center">
              <Typography variant="lead" className="mb-8">
                Pour découvrir en détail cette offre et voir comment elle peut vous aider, consultez
                la page dédiée :
              </Typography>
              <Button
                href={`/services/${service.id}`}
                variant="gradient"
                size="large"
                className="shine-effect mb-4"
              >
                Découvrir {service.title}
              </Button>
              <div className="mt-4">
                <Button href="/contact" variant="secondary">
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }));
}
