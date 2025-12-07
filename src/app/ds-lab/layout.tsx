'use client';

import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { Icon } from '@/components/atoms/Icon';

export default function DSLabLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      {/* Navigation flottante sur toutes les pages DS-Lab */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--color-primary)] hover:!text-[#d85014] transition-colors"
        aria-label="Retour"
      >
        <Icon name="ArrowLeft" size={20} />
      </button>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {children}
    </>
  );
}
