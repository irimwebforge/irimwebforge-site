"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Typography } from '@/components/atoms/Typography';

export interface LightBoxImage {
  id: string;
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface LightBoxProps {
  images: LightBoxImage[];
  initialIndex?: number;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  showThumbnails?: boolean;
  showCaption?: boolean;
  showCounter?: boolean;
  enableKeyboard?: boolean;
  enableSwipe?: boolean;
  enableZoom?: boolean;
  backdropColor?: string;
  animation?: 'fade' | 'slide' | 'zoom' | 'none';
}

export const LightBox: React.FC<LightBoxProps> = ({
  images,
  initialIndex = 0,
  isOpen = false,
  onClose,
  className = '',
  showThumbnails = true,
  showCaption = true,
  showCounter = true,
  enableKeyboard = true,
  enableSwipe = true,
  enableZoom = false,
  backdropColor = 'rgba(0, 0, 0, 0.9)',
  animation = 'fade',
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isVisible, setIsVisible] = useState(isOpen);
  const [loading, setLoading] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  
  // Synchroniser l'état isVisible avec la prop isOpen
  useEffect(() => {
    setIsVisible(isOpen);
    if (isOpen) {
      // Désactiver le défilement du body lorsque la lightbox est ouverte
      document.body.style.overflow = 'hidden';
    } else {
      // Réactiver le défilement lorsqu'elle est fermée
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Synchroniser l'index initial
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);
  
  // Effet pour les raccourcis clavier
  useEffect(() => {
    if (!isVisible || !enableKeyboard) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          navigateToPrevious();
          break;
        case 'ArrowRight':
          navigateToNext();
          break;
        case 'Escape':
          handleClose();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, currentIndex, enableKeyboard]);
  
  // Gérer la fermeture
  const handleClose = useCallback(() => {
    setIsVisible(false);
    if (onClose) onClose();
    document.body.style.overflow = '';
  }, [onClose]);
  
  // Naviguer à l'image précédente
  const navigateToPrevious = useCallback(() => {
    if (images.length <= 1) return;
    setLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  }, [images.length]);
  
  // Naviguer à l'image suivante
  const navigateToNext = useCallback(() => {
    if (images.length <= 1) return;
    setLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  }, [images.length]);
  
  // Naviguer à une image spécifique (pour les vignettes)
  const navigateToIndex = useCallback((index: number) => {
    if (index === currentIndex) return;
    setLoading(true);
    setCurrentIndex(index);
  }, [currentIndex]);
  
  // Gérer le swipe sur mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableSwipe) return;
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!enableSwipe) return;
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!enableSwipe) return;
    if (touchStartX - touchEndX > 100) { // Swipe vers la gauche
      navigateToNext();
    } else if (touchEndX - touchStartX > 100) { // Swipe vers la droite
      navigateToPrevious();
    }
  };
  
  // Gérer le zoom
  const toggleZoom = () => {
    if (!enableZoom) return;
    setZoomed(!zoomed);
  };
  
  // Ne rien rendre si la lightbox est fermée
  if (!isVisible || images.length === 0) return null;
  
  // Image actuelle
  const currentImage = images[currentIndex];
  
  // Classes pour les animations
  const animationClasses = {
    fade: 'animate-fade',
    slide: 'animate-slide',
    zoom: 'animate-zoom',
    none: '',
  };
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center ${className}`}
      style={{ backgroundColor: backdropColor }}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Bouton de fermeture */}
      <button 
        className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 focus:outline-none"
        onClick={handleClose}
        aria-label="Fermer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Navigation - Précédent */}
      {images.length > 1 && (
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            navigateToPrevious();
          }}
          aria-label="Image précédente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {/* Navigation - Suivant */}
      {images.length > 1 && (
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            navigateToNext();
          }}
          aria-label="Image suivante"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      
      {/* Contenu principal */}
      <div 
        className="relative max-w-4xl w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div 
          className={`relative ${animationClasses[animation]} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${zoomed ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in'} transition-transform`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={toggleZoom}
        >
          <Image 
            src={currentImage.src}
            alt={currentImage.alt || `Image ${currentIndex + 1}`}
            width={currentImage.width || 900}
            height={currentImage.height || 600}
            className="max-h-[80vh] w-auto object-contain"
            onLoad={() => setLoading(false)}
            priority
          />
          
          {/* Indicateur de chargement */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer : légende et compteur */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <div className="flex justify-between items-center">
          {/* Légende */}
          {showCaption && currentImage.caption && (
            <Typography variant="p" className="text-white max-w-2xl">
              {currentImage.caption}
            </Typography>
          )}
          
          {/* Compteur */}
          {showCounter && images.length > 1 && (
            <div className="text-sm text-white">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
        
        {/* Vignettes */}
        {showThumbnails && images.length > 1 && (
          <div className="mt-4 flex justify-center space-x-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                className={`relative w-16 h-16 overflow-hidden rounded border-2 ${index === currentIndex ? 'border-white' : 'border-transparent'} transition-all`}
                onClick={() => navigateToIndex(index)}
                aria-label={`Voir l'image ${index + 1}`}
                aria-current={index === currentIndex}
              >
                <Image 
                  src={image.src}
                  alt={image.alt || `Vignette ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Petit composant pour les galeries qui utilisent LightBox
export interface GalleryProps {
  images: LightBoxImage[];
  className?: string;
  columns?: 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto';
  rounded?: boolean;
  showCaption?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({
  images,
  className = '',
  columns = 3,
  gap = 'medium',
  aspectRatio = 'square',
  rounded = true,
  showCaption = false,
}) => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  
  // Classes pour les colonnes
  const columnsClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };
  
  // Classes pour les espacements
  const gapClasses = {
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-6',
  };
  
  // Classes pour les ratios d'aspect
  const aspectRatioClasses = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  };
  
  // Ouvrir la lightbox
  const openLightBox = (index: number) => {
    setInitialIndex(index);
    setIsLightBoxOpen(true);
  };
  
  return (
    <div className={`gallery ${className}`}>
      <div className={`grid ${columnsClasses[columns]} ${gapClasses[gap]}`}>
        {images.map((image, index) => (
          <div key={image.id} className="overflow-hidden">
            <div 
              className={`relative cursor-pointer overflow-hidden ${aspectRatioClasses[aspectRatio]} ${rounded ? 'rounded-lg' : ''} transition-transform hover:scale-[1.02]`}
              onClick={() => openLightBox(index)}
            >
              <Image 
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                fill
                className="object-cover transition-transform hover:scale-110 duration-500"
              />
            </div>
            
            {showCaption && image.caption && (
              <Typography variant="small" className="mt-2 text-center text-secondary">
                {image.caption}
              </Typography>
            )}
          </div>
        ))}
      </div>
      
      <LightBox 
        images={images}
        isOpen={isLightBoxOpen}
        initialIndex={initialIndex}
        onClose={() => setIsLightBoxOpen(false)}
        showThumbnails
        showCaption
        showCounter
        enableKeyboard
        enableSwipe
      />
    </div>
  );
}; 