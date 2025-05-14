import { Stat } from '@/templates/StatsShowcase';
import { BaseAdapterConfig } from './index';
import { IconName } from '@/components/atoms/Icon';

type MockStat = {
  id?: string;
  value: string;
  label: string;
  description: string;
  icon?: string;
};

export interface StatsAdapterConfig extends BaseAdapterConfig {
  withIcons?: boolean;
  withCta?: boolean;
  ctaText?: string;
  ctaUrl?: string;
  colorScheme?: 'primary' | 'secondary' | 'tertiary' | 'mixed';
}

export const adaptStat = (stat: MockStat, index: number, config?: StatsAdapterConfig): Stat => {
  // Attribuer des couleurs en fonction de la configuration
  let color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  if (config?.colorScheme) {
    if (config.colorScheme === 'mixed') {
      // Alterner les couleurs pour chaque statistique
      color = index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary';
    } else {
      color = config.colorScheme;
    }
  }

  // Ajouter une icône par défaut si demandé et que la stat n'en a pas
  let icon = stat.icon;
  if (config?.withIcons && !icon) {
    const defaultIcons: IconName[] = ['BarChart', 'PieChart', 'TrendingUp', 'Users'];
    icon = defaultIcons[index % defaultIcons.length];
  }

  return {
    id: stat.id,
    value: stat.value,
    label: stat.label,
    description: stat.description,
    icon: icon as IconName | undefined,
    color,
  };
};

export const adaptStats = (mockStats: MockStat[], config?: StatsAdapterConfig) => {
  const stats = mockStats.map((stat, index) => adaptStat(stat, index, config));
  const result: {
    stats: Stat[];
    cta?: { text: string; url: string };
  } = { stats };

  // Ajouter un CTA si demandé
  if (config?.withCta && config.ctaText && config.ctaUrl) {
    result.cta = {
      text: config.ctaText,
      url: config.ctaUrl,
    };
  }

  return result;
};
