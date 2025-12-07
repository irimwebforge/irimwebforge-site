'use client';

import { useState } from 'react';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Logo } from '@/components/atoms/Logo';
import { NavLink } from '@/components/atoms/NavLink';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { Testimonial } from '@/components/molecules/Testimonial';
import { ProjectPreview } from '@/components/molecules/ProjectPreview';
import { Modal } from '@/components/molecules/Modal';
import { Footer } from '@/components/organisms/Footer';
import { BlogPostCard } from '@/components/molecules/BlogPostCard';
import { Carousel } from '@/components/molecules/Carousel';
import { proofs, testimonials, articles } from '@/data/hub';

const CAL_URL = 'https://cal.com/eric-zuber-nxxypt/30min';

export default function HubPage() {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-color">
        <Container>
          <div className="flex items-center justify-between h-16">
            <NavLink href="/" className="flex items-center" underlineActiveOnly={false}>
              <Logo variant="logo" mode="default" className="h-8 w-auto" />
            </NavLink>

            <div className="flex items-center gap-2 sm:gap-4">
              <NavLink href="https://portfolio.irimwebforge.com" color="tertiary" className="text-sm hidden md:block" target="_blank">
                Portfolio
              </NavLink>
              <NavLink href="/ds-lab" color="tertiary" className="text-sm hidden md:block">
                DS-Lab
              </NavLink>
              <ThemeToggle />
              <Button variant="gradient" size="small" onClick={() => setIsCalModalOpen(true)}>
                Réserver 30min
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <main className="pt-16">
        {/* HERO */}
        <section className="min-h-[70vh] flex items-center bg-section-primary relative overflow-hidden">
          <Container className="py-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="tertiary" className="mb-6">
                Strasbourg, Alsace
              </Badge>

              <Typography as="h1" variant="h1" className="mb-6">
                Innovation · Réseaux · Interfaces · Maintenance
              </Typography>

              <Typography variant="lead" className="mb-8">
                Sites web et applications pour thérapeutes, commerçants et artisans en Alsace
              </Typography>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="large" onClick={() => setIsCalModalOpen(true)}>
                  Réserver 30min
                </Button>
                <Button variant="outline" size="large" href="#preuves">
                  Voir mes réalisations
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* PROOFS */}
        <section id="preuves" className="py-24 bg-section-secondary">
          <Container>
            <div className="text-center mb-16">
              <Typography as="h2" variant="h2" className="mb-4">
                Ce que j'ai construit
              </Typography>
              <Typography variant="subtle">Apps, Plateformes, Vitrines</Typography>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {proofs.map((proof) => (
                <a key={proof.id} href={proof.onlineUrl} target="_blank" rel="noopener noreferrer">
                  <ProjectPreview project={proof} />
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="secondary" size="large" href="/portfolio">
                Voir tous mes projets
              </Button>
            </div>
          </Container>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-section-primary">
          <Container>
            <div className="text-center mb-16">
              <Typography as="h2" variant="h2" className="mb-4">
                Témoignages
              </Typography>
              <Typography variant="subtle">
                Des thérapeutes qui ont retrouvé du temps pour l'essentiel.
              </Typography>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, index) => (
                <Testimonial
                  key={index}
                  quote={t.quote}
                  author={t.author}
                  company={t.company}
                  projectName={t.projectName}
                  variant="default"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* ARTICLES CAROUSEL */}
        <section className="py-20 bg-section-accent">
          <Container>
            <div className="text-center mb-12">
              <Typography as="h2" variant="h2" className="mb-4">
                En savoir plus
              </Typography>
              <Typography variant="subtle">Mon histoire, ma methode et mes realisations</Typography>
            </div>

            <div className="max-w-4xl mx-auto">
              <Carousel
                slidesPerView={2}
                responsive={false}
                autoPlay={true}
                interval={4000}
                controls={true}
                indicators={true}
                loop={true}
                spacing="medium"
              >
                {articles.map((article) => (
                  <BlogPostCard
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    slug={article.slug}
                    excerpt={article.excerpt}
                    coverImage={article.coverImage}
                    publishedAt={article.publishedAt}
                    readTime={article.readTime}
                    tags={article.tags}
                    variant="compact"
                  />
                ))}
              </Carousel>
            </div>
          </Container>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL Cal.com */}
      <Modal
        isOpen={isCalModalOpen}
        onClose={() => setIsCalModalOpen(false)}
        title="Réserver un créneau"
        size="large"
        animation="zoom"
        className="!max-w-4xl !h-[80vh]"
      >
        <div className="relative w-full" style={{ height: 'calc(80vh - 100px)' }}>
          <iframe
            src={CAL_URL}
            className="absolute inset-0 w-full h-full border-0 rounded-lg"
            title="Réserver un créneau avec Cal.com"
            loading="lazy"
          />
        </div>
      </Modal>
    </>
  );
}
