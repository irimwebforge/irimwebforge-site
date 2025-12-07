import { Metadata } from 'next';
import PortfolioClient from './client';

export const metadata: Metadata = {
  title: 'Portfolio | IRIM Webforge - Mes réalisations',
  description:
    'Découvrez mes réalisations concrètes : applications mobiles, sites web et interfaces admin pour thérapeutes et artisans.',
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
