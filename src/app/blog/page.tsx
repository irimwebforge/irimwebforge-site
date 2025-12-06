import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | IRIM Webforge',
  description: 'Articles, études de cas et ressources pour indépendants et thérapeutes',
};

const articles = [
  {
    slug: 'mon-parcours',
    title: 'Mon parcours au service de votre autonomie',
    description:
      'De formateur à développeur web, comment une expérience personnelle transformatrice guide ma démarche.',
    date: '6 décembre 2025',
    tags: ['parcours', 'histoire', 'valeurs'],
  },
  {
    slug: 'mes-services',
    title: 'Mes services et tarifs',
    description:
      'Des solutions numériques pour libérer votre temps. 3 formules adaptées à vos besoins.',
    date: '6 décembre 2025',
    tags: ['services', 'tarifs', 'offres'],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-section-primary py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Typography as="h1" variant="h1" className="mb-4">
            Blog
          </Typography>
          <Typography variant="lead" className="mb-12 text-secondary">
            Mon histoire, mes offres et mes réflexions sur le numérique au service des indépendants.
          </Typography>

          <div className="space-y-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                <Card
                  variant="default"
                  padding="large"
                  className="transition-all duration-300 hover:shadow-lg hover:border-primary-300"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Typography as="h2" variant="h3" className="mb-2 group-hover:text-primary-600">
                    {article.title}
                  </Typography>
                  <Typography variant="p" className="text-secondary mb-3">
                    {article.description}
                  </Typography>
                  <Typography variant="small" className="text-tertiary">
                    {article.date}
                  </Typography>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" href="/">
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
