import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import type { IconName } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

export interface BeforeAfterItem {
  before: string;
  after: string;
  icon: IconName;
}

interface BeforeAfterCardProps {
  item: BeforeAfterItem;
  index?: number;
  color: 'primary' | 'secondary' | 'tertiary';
  showIndex?: boolean;
}

export function BeforeAfterCard({ item, index, color, showIndex = true }: BeforeAfterCardProps) {
  return (
    <div
      className={cn(
        'surface-primary rounded-xl p-6 shadow-lg',
        'transform transition-all duration-300 hover:scale-[1.02]',
        'border border-color'
      )}
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className={cn(
            `p-3 bg-[var(--color-${color}-100)] dark:bg-[var(--color-${color}-900)]`,
            'rounded-xl shadow-sm',
            'transform transition-all duration-300 group-hover:scale-110'
          )}
        >
          <Icon name={item.icon} className={`w-6 h-6 text-[var(--color-${color})]`} />
        </div>
        {showIndex && (
          <div>
            <Typography variant="small" className={`text-[var(--color-${color})] mb-1`}>
              Transformation {index! + 1}
            </Typography>
            <Typography variant="h4" className="font-bold">
              {item.icon === 'Clock'
                ? 'Gain de temps'
                : item.icon === 'Users'
                  ? 'Expérience client'
                  : item.icon === 'Shield'
                    ? 'Sécurité'
                    : 'Amélioration'}
            </Typography>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div
          className={cn(
            'p-4 surface-secondary rounded-xl',
            'transform transition-all duration-300',
            'border border-color'
          )}
        >
          <div className="flex items-center gap-2 mb-3">
            <Icon name="X" className="w-4 h-4 text-[var(--text-secondary)]" />
            <Typography variant="small" className="font-medium text-[var(--text-secondary)]">
              Avant
            </Typography>
          </div>
          <Typography variant="p" className="text-[var(--text-secondary)]">
            {item.before}
          </Typography>
        </div>

        <div
          className={cn(
            `p-4 bg-[var(--color-${color})]/10 dark:bg-[var(--color-${color})]/20`,
            'rounded-xl transform transition-all duration-300',
            `border border-[var(--color-${color})]/30 dark:border-[var(--color-${color})]/50`
          )}
        >
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Check" className={`w-4 h-4 text-[var(--color-${color})]`} />
            <Typography variant="small" className={`font-medium text-[var(--color-${color})]`}>
              Après
            </Typography>
          </div>
          <Typography
            variant="p"
            className={`text-[var(--color-${color}-700)] dark:text-[var(--color-${color}-300)]`}
          >
            {item.after}
          </Typography>
        </div>
      </div>
    </div>
  );
}
