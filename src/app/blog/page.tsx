import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';

export const metadata = {
  title: 'Blog | IRIM Webforge',
  description: 'Articles, études de cas et ressources',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-section-primary py-16">
      <Container>
        <Typography as="h1" variant="h1" className="mb-8">
          Blog
        </Typography>
        <Typography variant="lead" className="mb-12">
          Articles en cours de migration. Revenez bientôt.
        </Typography>
      </Container>
    </main>
  );
}
