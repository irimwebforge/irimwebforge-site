import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ServiceId } from '@/data/services';

const MOBILE_BREAKPOINT = 768;

export const useServiceDisplay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Détecte si on est sur mobile
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Check initial
    checkMobile();

    // Écoute les changements de taille
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openService = (serviceId: ServiceId) => {
    setSelectedServiceId(serviceId);
    
    if (isMobile) {
      // Sur mobile, on redirige vers la page dédiée
      router.push(`/services/${serviceId}`);
    } else {
      // Sur desktop, on ouvre la modale
      setIsModalOpen(true);
    }
  };

  const closeService = () => {
    setIsModalOpen(false);
    setSelectedServiceId(null);
  };

  return {
    isModalOpen,
    selectedServiceId,
    isMobile,
    openService,
    closeService
  };
}; 