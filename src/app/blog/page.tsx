import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import Link from 'next/link';
import { getAllArticles, formatDate, getReadingTime, getArticleBySlug } from '@/lib/mdx';

export const metadata = {
  title: 'Blog | IRIM Webforge',
  description: 'Articles, etudes de cas et ressources pour independants et therapeutes',
};

export default function BlogPage() {
  const articles = getAllArticles();

  // Get reading time for each article
  const articlesWithReadingTime = articles.map((article) => {
    const fullArticle = getArticleBySlug(article.slug);
    return {
      ...article,
      readingTime: fullArticle ? getReadingTime(fullArticle.content) : '',
    };
  });

  return (
    <main className="min-h-screen bg-section-primary py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Typography as="h1" variant="h1" className="mb-4">
            Blog
          </Typography>
          <Typography variant="lead" className="mb-12 text-secondary">
            Mon histoire, mes offres et mes reflexions sur le numerique au service des independants.
          </Typography>

          {articles.length === 0 ? (
            <div className="text-center py-12">
              <Typography variant="p" className="text-tertiary">
                Aucun article pour le moment. Revenez bientot !
              </Typography>
            </div>
          ) : (
            <div className="space-y-6">
              {articlesWithReadingTime.map((article) => (
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
                    <div className="flex items-center gap-4">
                      <Typography variant="small" className="text-tertiary">
                        {formatDate(article.date)}
                      </Typography>
                      {article.readingTime && (
                        <>
                          <span className="text-tertiary">•</span>
                          <Typography variant="small" className="text-tertiary">
                            {article.readingTime}
                          </Typography>
                        </>
                      )}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Button variant="outline" href="/">
              Retour a l'accueil
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
