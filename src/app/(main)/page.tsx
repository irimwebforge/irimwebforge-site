import { HubHero } from '@/components/organisms/HubHero';

export default function HubPage() {
  return (
    <main>
      <HubHero />

      {/* Placeholder sections */}
      <section id="preuves" className="min-h-screen bg-section-secondary flex items-center justify-center">
        <p className="text-2xl text-tertiary">Section Preuves — à venir</p>
      </section>

      <section id="positionnement" className="min-h-screen bg-section-accent flex items-center justify-center">
        <p className="text-2xl text-tertiary">Section Positionnement — à venir</p>
      </section>

    </main>
  );
}
