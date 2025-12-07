'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';

export interface CarouselProps {
  className?: string;
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  controls?: boolean;
  indicators?: boolean;
  animation?: 'slide' | 'fade';
  slidesPerView?: 1 | 2 | 3 | 4;
  responsive?: boolean;
  loop?: boolean;
  adaptiveHeight?: boolean;
  spacing?: 'none' | 'small' | 'medium' | 'large';
  title?: string;
  subtitle?: string;
  _centerMode?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  className = '',
  children,
  autoPlay = false,
  interval = 5000,
  controls = true,
  indicators = true,
  animation = 'slide',
  slidesPerView = 1,
  responsive = true,
  loop = true,
  adaptiveHeight = false,
  spacing = 'medium',
  title,
  subtitle,
  _centerMode = false,
}) => {
  // Conversion des enfants en array
  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;

  // États
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [_containerWidth, setContainerWidth] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // Déterminer le nombre de slides par vue en fonction de la taille de l'écran
  const getActiveSlidesPerView = useCallback(() => {
    if (!responsive) return slidesPerView;

    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 768) return Math.min(2, slidesPerView);
      if (width < 1024) return Math.min(3, slidesPerView);
      return slidesPerView;
    }

    return slidesPerView;
  }, [responsive, slidesPerView]);
  // Calculer les tailles des slides et du conteneur
  const updateSizes = useCallback(() => {
    if (containerRef.current && slideRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const calculatedWidth = responsive
        ? containerRef.current.offsetWidth / getActiveSlidesPerView()
        : containerRef.current.offsetWidth / slidesPerView;
      setSlideWidth(calculatedWidth);
    }
  }, [responsive, slidesPerView, getActiveSlidesPerView]);

  // Initialiser les tailles et mettre à jour lors du redimensionnement
  useEffect(() => {
    updateSizes();

    const handleResize = () => {
      updateSizes();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateSizes]);

  // Fonction pour passer au slide suivant
  const nextSlide = useCallback(() => {
    if (loop || currentIndex < totalSlides - getActiveSlidesPerView()) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return loop && newIndex >= totalSlides ? 0 : newIndex;
      });
    }
  }, [currentIndex, loop, totalSlides, getActiveSlidesPerView]);

  // Fonction pour passer au slide précédent
  const prevSlide = useCallback(() => {
    if (loop || currentIndex > 0) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        return loop && newIndex < 0 ? totalSlides - 1 : newIndex;
      });
    }
  }, [currentIndex, loop, totalSlides]);

  // Fonction pour aller à un slide spécifique
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Gestion du défilement automatique
  useEffect(() => {
    if (autoPlay && !isHovering && !isDragging) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, interval, isHovering, isDragging, nextSlide]);

  // Gestion du swipe sur mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe vers la gauche
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe vers la droite
      prevSlide();
    }
  };

  // Gestion du glisser-déposer
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDelta(0);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const delta = e.clientX - dragStartX;
      setDragDelta(delta);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (dragDelta > 50) {
        prevSlide();
      } else if (dragDelta < -50) {
        nextSlide();
      }
      setIsDragging(false);
      setDragDelta(0);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragDelta(0);
    }
    setIsHovering(false);
  };

  // Classes pour l'espacement
  const spacingClasses = {
    none: 'gap-0',
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-6',
  };

  // Calculer le décalage pour le positionnement des slides
  const getTransformStyle = () => {
    const offset = -currentIndex * slideWidth;
    const dragOffset = isDragging ? dragDelta : 0;

    if (animation === 'slide') {
      return {
        transform: `translateX(${offset + dragOffset}px)`,
        transition: isDragging ? 'none' : 'transform 0.5s ease',
      };
    }

    return {};
  };

  // Wrapper pour le contenu du slide
  const renderSlide = (child: React.ReactNode, index: number) => {
    const isActive = index === currentIndex;
    const isVisible = index >= currentIndex && index < currentIndex + getActiveSlidesPerView();

    return (
      <div
        ref={index === 0 ? slideRef : null}
        key={index}
        className={`carousel-slide ${animation === 'fade' ? 'absolute inset-0' : 'relative'} ${animation === 'fade' && isActive ? 'opacity-100 z-10' : animation === 'fade' ? 'opacity-0' : ''}`}
        style={{
          width: slideWidth,
          opacity: animation === 'fade' ? (isActive ? 1 : 0) : 1,
          transition: animation === 'fade' ? 'opacity 0.5s ease' : 'none',
        }}
      >
        <div className={`h-full ${!isVisible && animation !== 'fade' ? 'opacity-60' : ''}`}>
          {child}
        </div>
      </div>
    );
  };

  return (
    <div className={`carousel-container ${className}`}>
      {/* Titre et sous-titre */}
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <Typography variant="h2" className="mb-2">
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="lead" className="text-[var(--text-secondary)]">
              {subtitle}
            </Typography>
          )}
        </div>
      )}

      {/* Conteneur principal du carrousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Contrôles */}
        {controls && totalSlides > getActiveSlidesPerView() && (
          <>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 surface-primary/75 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Slide précédent"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 surface-primary/75 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Slide suivant"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          </>
        )}

        {/* Conteneur des slides */}
        <div
          ref={containerRef}
          className={`overflow-hidden ${adaptiveHeight ? 'h-auto' : 'relative'}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex ${animation === 'fade' ? 'relative' : ''} ${spacingClasses[spacing]}`}
            style={getTransformStyle()}
          >
            {childrenArray.map((child, index) => renderSlide(child, index))}
          </div>
        </div>

        {/* Indicateurs */}
        {indicators && totalSlides > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-[var(--foreground)] w-4' : 'bg-[var(--color-border)]'}`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller au slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
