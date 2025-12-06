import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Card } from '@/components/molecules/Card';
import { Icon } from '@/components/atoms/Icon';

const testimonials = [
  {
    id: 'jezabel',
    quote: "Mon site m'a apporté de nouveaux clients grâce au référencement et à la réservation en ligne. La synchronisation agenda me simplifie la vie et me libère du temps pour mes patients.",
    author: 'Jezabel',
    role: 'Thérapeute',
    project: 'Corps & Sens',
  },
  {
    id: 'severine',
    quote: "Ce site me ressemble. Un gros poids est parti avec sa création. Merci pour tout.",
    author: 'Séverine',
    role: 'Thérapeute',
    project: 'Libera Luminosa',
  },
];

export function HubTestimonials() {
  return (
    <section className="py-24 bg-section-primary">
      <Container>
        <div className="text-center mb-16">
          <Typography as="h2" variant="h2" className="mb-4">
            Ce qu'ils en disent
          </Typography>
          <Typography variant="lead" className="text-secondary max-w-2xl mx-auto">
            Des thérapeutes qui ont retrouvé du temps pour l'essentiel.
          </Typography>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.id} variant="outline" padding="large" className="relative">
              {/* Quote icon */}
              <Icon
                name="Quote"
                className="w-10 h-10 text-primary/20 absolute top-6 right-6"
              />

              {/* Quote */}
              <Typography variant="p" className="text-lg italic mb-6 pr-12">
                &ldquo;{t.quote}&rdquo;
              </Typography>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Typography variant="h4" className="text-primary">
                    {t.author[0]}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h4" className="font-semibold">
                    {t.author}
                  </Typography>
                  <Typography variant="small" className="text-secondary">
                    {t.role} — {t.project}
                  </Typography>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
