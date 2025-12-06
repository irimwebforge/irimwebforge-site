import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

const articles = [
  {
    id: 'parcours',
    title: 'Mon parcours',
    description: 'De formateur à développeur. La révélation avec mon épouse thérapeute.',
    href: '/blog/mon-parcours',
    icon: 'User',
  },
  {
    id: 'services',
    title: 'Mes services et tarifs',
    description: '3 formules adaptées : Présence, Intégrée, Évolutive. À partir de 500€.',
    href: '/blog/mes-services',
    icon: 'Package',
  },
];

export function HubArticles() {
  return (
    <section className="py-16 bg-section-primary">
      <Container>
        <div className="text-center mb-12">
          <Typography as="h2" variant="h2" className="mb-4">
            En savoir plus
          </Typography>
          <Typography variant="lead" className="text-secondary">
            Mon histoire et mes offres en détail
          </Typography>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {articles.map((article) => (
            <Card
              key={article.id}
              variant="default"
              padding="large"
              className="group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={article.icon as any}
                    className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div className="flex-1">
                  <Typography as="h3" variant="h4" className="mb-2">
                    {article.title}
                  </Typography>
                  <Typography variant="p" className="text-secondary mb-4">
                    {article.description}
                  </Typography>
                  <Button variant="ghost" size="small" href={article.href}>
                    Lire l'article
                    <Icon name="ArrowRight" className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
