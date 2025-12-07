'use client';

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import Link from 'next/link';

export default function IconAssistantPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <div className="flex flex-col items-center justify-center text-center bg-[var(--surface-secondary)] rounded-xl p-8">
        <Icon name="Construction" size={64} className="mb-4 text-[var(--color-tertiary)]" />
        <Typography as="h1" variant="h2" className="mb-2">
          Page en construction
        </Typography>
        <Typography variant="lead" className="text-[var(--text-secondary)]">
          Cette section du Design System Lab est en cours de développement.
        </Typography>
      </div>

      {/* Lien retour */}
      <div className="text-center mt-12">
        <Link
          href="/ds-lab"
          className="inline-flex items-center text-[var(--color-primary)] hover:!text-[#d85014] border-b-2 border-[var(--color-tertiary)] transition-colors"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Retour au DS Lab
        </Link>
      </div>
    </div>
  );
}
