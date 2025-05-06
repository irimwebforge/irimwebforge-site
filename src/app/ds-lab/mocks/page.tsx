"use client";

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Divider } from '@/components/atoms/Divider';
import Link from 'next/link';
import { Icon, IconName } from '@/components/atoms/Icon';

// Import des données mock
import { 
  mockProjects, 
  mockServices, 
  mockValues, 
  mockStats, 
  mockTestimonials,
  mockCTAVariants
} from './data';

export default function MocksPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-10 text-center">
        <Typography as="h1" variant="h1" className="mb-3 font-bold italic">
          Données Mock
        </Typography>
        <Typography variant="lead" className="max-w-2xl mx-auto">
          Données factices utilisées pour les démonstrations et les tests
        </Typography>
      </div>
      
      <div className="mb-16">
        <div className="flex justify-between items-center mb-4">
          <Typography as="h2" variant="h2" className="font-bold italic">Projets</Typography>
          <Typography variant="small" className="text-secondary">{mockProjects.length} projets</Typography>
        </div>
        <Divider className="mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockProjects.map(project => (
            <div key={project.id} className="border border-color surface-primary p-4 rounded-md">
              <Typography as="h3" variant="h4" className="mb-2">{project.title}</Typography>
              <Typography variant="p" className="mb-3 text-secondary">{project.description}</Typography>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag.id} className="inline-block py-1 px-2 bg-gray-100 dark:bg-gray-800 text-secondary text-xs rounded-md">
                    {tag.label}
                  </span>
                ))}
              </div>
              
              <div className="text-xs text-tertiary">
                <span className="inline-block mr-3">ID: {project.id}</span>
                <span className="inline-block mr-3">Featured: {project.featured ? 'Oui' : 'Non'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <div className="flex justify-between items-center mb-4">
          <Typography as="h2" variant="h2" className="font-bold italic">Services</Typography>
          <Typography variant="small" className="text-secondary">{mockServices.length} services</Typography>
        </div>
        <Divider className="mb-6" />
        
        <div className="grid grid-cols-1 gap-6">
          {mockServices.map(service => (
            <div key={service.id} className="border border-color surface-primary p-4 rounded-md">
              <div className="flex items-start">
                <div className="mr-4">
                  <Icon name={service.icon as IconName} size={32} className="text-primary" />
                </div>
                <div>
                  <Typography as="h3" variant="h4" className="mb-1">{service.title}</Typography>
                  <Typography variant="p" className="mb-4 text-secondary">{service.description}</Typography>
                  
                  <div className="mb-4">
                    <Typography variant="small" className="font-semibold mb-2">Fonctionnalités:</Typography>
                    <ul className="list-disc pl-5 text-sm text-secondary">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-semibold">Prix:</span> {service.price.amount}
                    <Typography variant="small" className="text-tertiary block">{service.price.details}</Typography>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <div className="flex justify-between items-center mb-4">
          <Typography as="h2" variant="h2" className="font-bold italic">Valeurs et statistiques</Typography>
        </div>
        <Divider className="mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <Typography as="h3" variant="h3" className="mb-4">Valeurs</Typography>
            <div className="grid grid-cols-1 gap-4">
              {mockValues.map(value => (
                <div key={value.id} className="border border-color surface-primary p-4 rounded-md">
                  <div className="flex items-start">
                    <div className="mr-3">
                      <Icon 
                        name={value.icon as IconName} 
                        size={24} 
                        className={`text-${value.color || 'primary'}`} 
                      />
                    </div>
                    <div>
                      <Typography as="h4" variant="h4" className="mb-1">{value.title}</Typography>
                      <Typography variant="p" className="text-secondary">{value.description}</Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Typography as="h3" variant="h3" className="mb-4">Statistiques</Typography>
            <div className="grid grid-cols-1 gap-4">
              {mockStats.map((stat, index) => (
                <div key={index} className="border border-color surface-primary p-4 rounded-md">
                  <Typography as="h4" variant="h3" className="mb-1 text-primary">{stat.value}</Typography>
                  <Typography variant="p" className="font-medium">{stat.label}</Typography>
                  <Typography variant="small" className="text-secondary">{stat.description}</Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Typography as="h3" variant="h3" className="mb-4">Témoignages</Typography>
        <div className="grid grid-cols-1 gap-4">
          {mockTestimonials.map((testimonial, index) => (
            <div key={index} className="border border-color surface-primary p-4 rounded-md">
              <div className="mb-3">
                <Typography variant="p" className="italic">&quot;{testimonial.quote}&quot;</Typography>
              </div>
              <div>
                <Typography variant="p" className="font-medium">{testimonial.author}</Typography>
                {testimonial.company && (
                  <Typography variant="small" className="text-secondary">{testimonial.company}</Typography>
                )}
                {testimonial.projectName && (
                  <Typography variant="small" className="text-tertiary">Projet: {testimonial.projectName}</Typography>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <Typography as="h2" variant="h2" className="font-bold italic">Variantes de CTA</Typography>
        </div>
        <Divider className="mb-6" />
        
        <div className="grid grid-cols-1 gap-6">
          <div className="border border-color surface-primary p-4 rounded-md">
            <Typography as="h3" variant="h3" className="mb-3">Simple</Typography>
            <pre className="whitespace-pre-wrap text-sm p-4 surface-secondary rounded-md overflow-auto">
              {JSON.stringify(mockCTAVariants.simple, null, 2)}
            </pre>
          </div>
          
          <div className="border border-color surface-primary p-4 rounded-md">
            <Typography as="h3" variant="h3" className="mb-3">Avec image</Typography>
            <pre className="whitespace-pre-wrap text-sm p-4 surface-secondary rounded-md overflow-auto">
              {JSON.stringify(mockCTAVariants.withImage, null, 2)}
            </pre>
          </div>
          
          <div className="border border-color surface-primary p-4 rounded-md">
            <Typography as="h3" variant="h3" className="mb-3">Newsletter</Typography>
            <pre className="whitespace-pre-wrap text-sm p-4 surface-secondary rounded-md overflow-auto">
              {JSON.stringify(mockCTAVariants.newsletter, null, 2)}
            </pre>
          </div>
        </div>
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