"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon, IconGallery, IconName } from '@/components/atoms/Icon';
import { Input } from '@/components/atoms/Input';
import { Divider } from '@/components/atoms/Divider';

// Définition des catégories d'icônes recommandées
const iconCategories = [
  {
    id: 'navigation',
    title: 'Navigation et UI',
    icons: ['Menu', 'ChevronDown', 'Search', 'User']
  },
  {
    id: 'services',
    title: 'Services',
    icons: ['Layout', 'Smartphone', 'Settings', 'Shield']
  },
  {
    id: 'processus',
    title: 'Processus',
    icons: ['Lightbulb', 'Pencil', 'Code', 'CheckCircle', 'Zap', 'Repeat']
  },
  {
    id: 'communication',
    title: 'Communication',
    icons: ['Mail', 'Phone', 'MapPin', 'Calendar', 'MessageCircle']
  },
  {
    id: 'social',
    title: 'Social',
    icons: ['Linkedin', 'Instagram', 'Github']
  }
];

export default function IconsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'categories' | 'all'>('categories');
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-8 text-center">
        <Typography as="h1" variant="h1" className="mb-3">
          Lucide Icons
        </Typography>
        <Typography variant="lead" className="max-w-3xl mx-auto">
          Bibliothèque d'icônes Lucide intégrée au design system
        </Typography>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex-1 max-w-md w-full">
            <Input
              type="text"
              placeholder="Rechercher une icône..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button 
              variant={viewMode === 'categories' ? 'primary' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('categories')}
            >
              <Icon name="FolderTree" size={16} className="mr-2" /> Catégories
            </Button>
            <Button 
              variant={viewMode === 'all' ? 'primary' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('all')}
            >
              <Icon name="Grid" size={16} className="mr-2" /> Toutes les icônes
            </Button>
          </div>
        </div>
        
        <div className="mb-6 surface-primary p-6 rounded-lg border border-color">
          <Typography variant="h3" className="mb-4">Comment utiliser</Typography>
          <div className="space-y-3">
            <div>
              <Typography variant="small" className="font-semibold mb-1">Import</Typography>
              <pre className="p-3 surface-secondary rounded-md text-sm overflow-x-auto">
                {`import { Icon } from '@/components/atoms/Icon';`}
              </pre>
            </div>
            <div>
              <Typography variant="small" className="font-semibold mb-1">Utilisation</Typography>
              <pre className="p-3 surface-secondary rounded-md text-sm overflow-x-auto">
                {`<Icon name="Heart" />`}
              </pre>
            </div>
            <div>
              <Typography variant="small" className="font-semibold mb-1">Avec props</Typography>
              <pre className="p-3 surface-secondary rounded-md text-sm overflow-x-auto">
                {`<Icon name="Heart" size={32} color="red" className="custom-class" />`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <Typography variant="h3" className="mb-4">Exemples</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="surface-primary p-6 rounded-lg border border-color flex flex-col items-center">
              <Icon name="Heart" size={48} className="mb-2 text-primary" />
              <Typography variant="p" className="text-center">Standard</Typography>
            </div>
            <div className="surface-primary p-6 rounded-lg border border-color flex flex-col items-center">
              <Icon name="Heart" size={48} className="mb-2 text-tertiary" strokeWidth={1} />
              <Typography variant="p" className="text-center">Fin (strokeWidth=1)</Typography>
            </div>
            <div className="surface-primary p-6 rounded-lg border border-color flex flex-col items-center">
              <Icon name="Heart" size={48} className="mb-2 text-secondary" strokeWidth={3} />
              <Typography variant="p" className="text-center">Épais (strokeWidth=3)</Typography>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        {searchTerm ? (
          <>
            <Typography variant="h2" className="mb-6">Résultats de recherche: "{searchTerm}"</Typography>
            <IconGalleryFiltered searchTerm={searchTerm} />
          </>
        ) : viewMode === 'all' ? (
          <>
            <Typography variant="h2" className="mb-6">Toutes les icônes</Typography>
            <IconGallery />
          </>
        ) : (
          <>
            <Typography variant="h2" className="mb-6">Icônes par catégorie</Typography>
            <div className="space-y-10">
              {iconCategories.map(category => (
                <div key={category.id} className="mb-10">
                  <div className="flex items-center mb-4">
                    <Typography variant="h3" className="mr-4">{category.title}</Typography>
                    <Divider className="flex-grow" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {category.icons.map(iconName => (
                      <div 
                        key={iconName} 
                        className="flex flex-col items-center p-4 border border-color rounded-md hover:shadow-md transition-shadow"
                      >
                        <Icon name={iconName as IconName} size={36} className="mb-3" />
                        <Typography variant="small" className="text-center font-medium">
                          {iconName}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="mt-16 text-center">
        <Link href="/ds-lab" className="text-primary hover:underline inline-flex items-center gap-2">
          <Icon name="ArrowLeft" size={16} />
          Retour au Design System Lab
        </Link>
      </div>
    </div>
  );
}

// Composant pour filtrer les icônes selon le terme de recherche
const IconGalleryFiltered = ({ searchTerm }: { searchTerm: string }) => {
  const allIcons = Object.keys(require('lucide-react')).filter(
    key => key !== 'createLucideIcon'
  ) as IconName[];
  
  const filteredIcons = allIcons.filter(name => 
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (filteredIcons.length === 0) {
    return (
      <div className="text-center py-8">
        <Typography variant="p">Aucune icône ne correspond à votre recherche.</Typography>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {filteredIcons.map((iconName) => (
        <div 
          key={iconName} 
          className="flex flex-col items-center p-3 border border-color rounded-md hover:shadow-sm"
        >
          <Icon name={iconName} className="mb-2" />
          <span className="text-xs text-tertiary text-center truncate w-full">
            {iconName}
          </span>
        </div>
      ))}
    </div>
  );
}; 