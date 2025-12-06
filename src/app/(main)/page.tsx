import { HubHeader } from '@/components/organisms/HubHeader';
import { HubHero } from '@/components/organisms/HubHero';
import { HubProofs } from '@/components/organisms/HubProofs';
import { HubTestimonials } from '@/components/organisms/HubTestimonials';
import { HubFooter } from '@/components/organisms/HubFooter';

export default function HubPage() {
  return (
    <>
      <HubHeader />
      <main className="pt-16">
        <HubHero />
        <HubProofs />
        <HubTestimonials />
        <HubFooter />
      </main>
    </>
  );
}
