import React from 'react';
import { Typography } from '../components/atoms/Typography';
import { StatCard } from '../components/molecules/StatCard';
import { Icon, IconName } from '../components/atoms/Icon';
import { Button } from '../components/atoms/Button';

export interface Stat {
  id?: string;
  value: string;
  label: string;
  description: string;
  icon?: string | IconName;
  color?: 'primary' | 'secondary' | 'tertiary';
}

export interface StatsShowcaseProps {
  title?: string;
  description?: string;
  stats: Stat[];
  cta?: {
    text: string;
    url: string;
  };
  className?: string;
  backgroundColor?: 'light' | 'dark' | 'primary' | 'secondary';
  layout?: 'grid' | 'horizontal' | 'cards';
  columns?: 2 | 3 | 4;
}

export function StatsShowcase({
  title,
  description,
  stats,
  cta,
  className = '',
  backgroundColor = 'light',
  layout = 'grid',
  columns = 4,
}: StatsShowcaseProps) {
  // Déterminer la classe de fond en fonction de backgroundColor
  const bgClass =
    backgroundColor === 'dark'
      ? 'bg-[var(--color-secondary)] text-white'
      : backgroundColor === 'primary'
        ? 'bg-[var(--color-primary)]/10'
        : backgroundColor === 'secondary'
          ? 'bg-[var(--color-secondary)]/10'
          : 'bg-white';

  // Nombre de colonnes dans la grille
  const gridColsClass =
    columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';

  // Fonction pour générer les icônes
  const getIcon = (stat: Stat) => {
    if (!stat.icon) return <Icon name="BarChart" />;
    return typeof stat.icon === 'string' ? <Icon name={stat.icon as IconName} /> : null;
  };

  // Layout horizontal (pour les bannières de statistiques)
  if (layout === 'horizontal') {
    return (
      <section className={`py-8 ${bgClass} ${className}`}>
        <div className="container mx-auto px-4">
          {(title || description) && (
            <div className="text-center mb-8">
              {title && (
                <Typography as="h2" variant="h2" className="mb-3">
                  {title}
                </Typography>
              )}
              {description && (
                <Typography variant="lead" className="max-w-2xl mx-auto">
                  {description}
                </Typography>
              )}
            </div>
          )}

          <div className="flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {stats.map((stat, index) => (
              <div
                key={stat.id || `stat-${index}`}
                className="py-6 md:py-0 md:px-6 text-center flex-1"
              >
                <Typography
                  variant="h3"
                  className="text-3xl font-bold text-[var(--color-primary)] mb-2"
                >
                  {stat.value}
                </Typography>
                <Typography variant="p" className="font-medium text-[var(--text-secondary)] mb-1">
                  {stat.label}
                </Typography>
                <Typography variant="subtle" className="text-sm">
                  {stat.description}
                </Typography>
              </div>
            ))}
          </div>

          {cta && (
            <div className="mt-8 text-center">
              <Button variant="primary" href={cta.url}>
                {cta.text}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Layout cards (utilisant le composant StatCard)
  if (layout === 'cards') {
    return (
      <section className={`py-12 ${bgClass} ${className}`}>
        <div className="container mx-auto px-4">
          {(title || description) && (
            <div className="text-center mb-10">
              {title && (
                <Typography as="h2" variant="h2" className="mb-3">
                  {title}
                </Typography>
              )}
              {description && (
                <Typography variant="lead" className="max-w-2xl mx-auto">
                  {description}
                </Typography>
              )}
            </div>
          )}

          <div className={`grid grid-cols-1 ${gridColsClass} gap-6`}>
            {stats.map((stat, index) => (
              <StatCard
                key={stat.id || `stat-${index}`}
                title={stat.label}
                value={stat.value}
                icon={getIcon(stat)}
                color={stat.color || 'primary'}
                subtitle={stat.description}
                variant={index === 0 ? 'accent' : 'default'}
              />
            ))}
          </div>

          {cta && (
            <div className="mt-10 text-center">
              <Button
                variant="primary"
                href={cta.url}
                icon={<Icon name="ArrowRight" />}
                iconPosition="right"
              >
                {cta.text}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Layout grid (par défaut)
  return (
    <section className={`py-12 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-10">
            {title && (
              <Typography as="h2" variant="h2" className="mb-3">
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="lead" className="max-w-2xl mx-auto">
                {description}
              </Typography>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridColsClass} gap-6 max-w-5xl mx-auto`}>
          {stats.map((stat, index) => (
            <div
              key={stat.id || `stat-${index}`}
              className={`p-6 rounded-lg text-center border ${
                index === 0
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                  : 'border-gray-200'
              }`}
            >
              {stat.icon && (
                <div className="flex justify-center mb-3">
                  <div className={`text-${stat.color || 'primary'} text-2xl`}>{getIcon(stat)}</div>
                </div>
              )}
              <Typography
                variant="h3"
                className={`text-3xl font-bold mb-2 text-${stat.color || 'primary'}`}
              >
                {stat.value}
              </Typography>
              <Typography variant="p" className="font-medium text-[var(--text-secondary)] mb-1">
                {stat.label}
              </Typography>
              <Typography variant="subtle">{stat.description}</Typography>
            </div>
          ))}
        </div>

        {cta && (
          <div className="mt-10 text-center">
            <Button variant="primary" href={cta.url}>
              {cta.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
