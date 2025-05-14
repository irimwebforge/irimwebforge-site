'use client';

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import Link from 'next/link';

export default function IconAssistantPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <div className="flex flex-col items-center justify-center text-center bg-neutral-100 dark:bg-neutral-800 rounded-xl p-8">
        <Icon name="Construction" size={64} className="mb-4 text-orange-500" />
        <Typography as="h1" variant="h2" className="mb-2">
          Page en construction
        </Typography>
        <Typography variant="lead" className="text-tertiary">
          Cette section du Design System Lab est en cours de développement.
        </Typography>
      </div>

      {/* Lien retour */}
      <div className="text-center mt-12">
        <Link
          href="/ds-lab"
          className="inline-flex items-center text-primary hover:text-primary/80 border-b-2 border-[var(--color-tertiary)]"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Retour au DS Lab
        </Link>
      </div>
    </div>
  );
}
