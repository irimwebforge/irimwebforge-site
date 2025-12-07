import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Divider } from '@/components/atoms/Divider';
import { Container } from '@/components/atoms/Container';
import { Card } from '@/components/molecules/Card';
import { Timeline } from '@/components/molecules/Timeline';
import { ProcessTimeline } from '@/components/molecules/ProcessTimeline';
import { FAQ } from '@/components/molecules/FAQ';
import { Alert } from '@/components/molecules/Alert';
import { Testimonial } from '@/components/molecules/Testimonial';
import { PricingPlan } from '@/components/molecules/PricingPlan';
import { FeatureGrid } from '@/components/molecules/FeatureGrid';
import { StatCard } from '@/components/molecules/StatCard';
import { BeforeAfterCard } from '@/components/molecules/BeforeAfterCard';
import { CTASection } from '@/templates/CTASection';
import { StatsShowcase } from '@/templates/StatsShowcase';
import Image from 'next/image';
import type { MDXComponents as MDXComponentsType } from 'mdx/types';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';

// Custom components for MDX
function Quote({ children, author }: { children: ReactNode; author?: string }) {
  return (
    <blockquote className="border-l-4 border-primary-500 pl-6 my-8 italic">
      <Typography variant="lead" className="text-primary-700 dark:text-primary-300">
        {children}
      </Typography>
      {author && (
        <Typography variant="small" className="mt-2 text-tertiary not-italic">
          — {author}
        </Typography>
      )}
    </blockquote>
  );
}

function Highlight({
  children,
  variant = 'info',
}: {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'primary';
}) {
  const colors = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200',
    success:
      'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
    warning:
      'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200',
    primary:
      'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-800 dark:text-primary-200',
  };

  return (
    <div className={`rounded-lg border p-6 my-8 ${colors[variant]}`}>
      {children}
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  url,
  year,
  featured,
}: {
  title: string;
  description: string;
  image?: string;
  tags?: { label: string; color: string }[];
  url?: string;
  year?: string;
  featured?: boolean;
}) {
  return (
    <Card
      variant={featured ? 'highlight' : 'default'}
      padding="large"
      className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${
        featured ? 'border-primary border-2' : 'hover:scale-[1.02]'
      }`}
    >
      <div className="grid gap-6 md:grid-cols-3 items-center">
        {image && (
          <div className="md:col-span-1 relative">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        )}
        <div className={image ? 'md:col-span-2' : 'md:col-span-3'}>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tag.label}
                </Badge>
              ))}
            </div>
          )}
          <Typography as="h3" variant="h3" className={`mb-2 ${featured ? 'text-primary' : ''}`}>
            {title}
          </Typography>
          {year && (
            <Typography variant="small" className="text-tertiary mb-2">
              {year}
            </Typography>
          )}
          <Typography variant="p" className="text-secondary mb-4">
            {description}
          </Typography>
          {url && (
            <Button variant="outline" size="small" href={url} target="_blank">
              Voir le projet
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

function ValueCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="group surface-primary rounded-lg p-6 shadow-md border border-color transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center transition-transform duration-150 group-hover:scale-110">
          <Icon
            name={icon as any}
            className="w-8 h-8 text-primary-600 dark:text-primary-400"
          />
        </div>
      </div>
      <Typography as="h4" variant="h4" className="mb-3 text-center">
        {title}
      </Typography>
      <Typography variant="p" className="text-tertiary text-center text-sm">
        {description}
      </Typography>
    </div>
  );
}

function ValuesGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {children}
    </div>
  );
}

function ProjectsGrid({ children }: { children: ReactNode }) {
  return <div className="space-y-6 my-8">{children}</div>;
}

// MDX Components mapping
export const mdxComponents: MDXComponentsType = {
  // Native HTML elements with Typography
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <Typography as="h1" variant="h1" className="mt-12 mb-6 first:mt-0" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <Typography as="h2" variant="h2" className="mt-10 mb-4" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <Typography as="h3" variant="h3" className="mt-8 mb-3" {...props} />
  ),
  h4: (props: ComponentPropsWithoutRef<'h4'>) => (
    <Typography as="h4" variant="h4" className="mt-6 mb-2" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <Typography as="p" variant="p" className="mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc list-inside mb-6 space-y-2 text-secondary" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-inside mb-6 space-y-2 text-secondary" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => <li className="ml-4" {...props} />,
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="text-primary-600 hover:text-primary-700 underline underline-offset-2"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-primary" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => <em className="italic" {...props} />,
  hr: () => <Divider className="my-8" />,
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="border-l-4 border-primary-500 pl-6 my-6 italic text-secondary"
      {...props}
    />
  ),
  img: (props: ComponentPropsWithoutRef<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg shadow-lg my-6 max-w-full" alt={props.alt || ''} {...props} />
  ),

  // DS-Lab Components
  Badge,
  Button,
  Icon,
  Divider,
  Container,
  Card,
  Timeline,
  ProcessTimeline,
  FAQ,
  Alert,
  Testimonial,
  PricingPlan,
  FeatureGrid,
  StatCard,
  BeforeAfterCard,
  CTASection,
  StatsShowcase,

  // Custom Blog Components
  Quote,
  Highlight,
  ProjectCard,
  ValueCard,
  ValuesGrid,
  ProjectsGrid,
};

export default mdxComponents;
