import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticleBySlug, getArticleSlugs, formatDate, getReadingTime } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx/MDXComponents';

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article non trouve' };
  }

  return {
    title: `${article.title} | IRIM Webforge`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const readingTime = getReadingTime(article.content);

  return (
    <main className="min-h-screen bg-section-primary py-16">
      <Container>
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Typography as="h1" variant="h1" className="mb-4">
              {article.title}
            </Typography>
            <Typography variant="lead" className="text-secondary mb-4">
              {article.description}
            </Typography>
            <div className="flex items-center gap-4">
              <Typography variant="small" className="text-tertiary">
                {formatDate(article.date)}
              </Typography>
              <span className="text-tertiary">•</span>
              <Typography variant="small" className="text-tertiary">
                {readingTime}
              </Typography>
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom">
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-section-secondary rounded-lg text-center">
            <Typography as="h3" variant="h3" className="mb-4">
              Echangeons sur vos defis
            </Typography>
            <Typography variant="p" className="text-secondary mb-6">
              45 minutes pour discuter de votre projet. Sans pression commerciale.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="large" href="tel:+33678764559">
                06 78 76 45 59
              </Button>
              <Button
                variant="outline"
                size="large"
                href="https://cal.com/eric-zuber-nxxypt/30min"
                target="_blank"
              >
                Reserver une visio
              </Button>
            </div>
          </div>

          {/* Back */}
          <div className="mt-12 text-center">
            <Button variant="ghost" href="/blog">
              ← Retour au blog
            </Button>
          </div>
        </article>
      </Container>
    </main>
  );
}
