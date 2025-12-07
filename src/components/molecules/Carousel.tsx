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
  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;

  // Pour le loop infini, on clone les slides au debut et a la fin
  const extendedSlides = loop
    ? [...childrenArray, ...childrenArray, ...childrenArray] // 3x pour smooth loop
    : childrenArray;

  const [currentIndex, setCurrentIndex] = useState(loop ? totalSlides : 0); // Commence au milieu
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Slides par vue selon ecran
  const getActiveSlidesPerView = useCallback(() => {
    if (!responsive) return slidesPerView;
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 768) return Math.min(2, slidesPerView);
      if (width < 1024) return Math.min(3, slidesPerView);
    }
    return slidesPerView;
  }, [responsive, slidesPerView]);

  const activeSlidesPerView = getActiveSlidesPerView();
  const slideWidthPercent = 100 / activeSlidesPerView;

  // Gestion du loop infini - repositionner sans animation quand on atteint les clones
  useEffect(() => {
    if (!loop) return;

    // Si on est sur les clones de fin, sauter au debut reel
    if (currentIndex >= totalSlides * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides);
      }, 500);
      return () => clearTimeout(timeout);
    }

    // Si on est sur les clones de debut, sauter a la fin reelle
    if (currentIndex < totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides * 2 - activeSlidesPerView);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides, loop, activeSlidesPerView]);

  // Reactiver la transition apres repositionnement
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoPlay && !isHovering) {
      intervalRef.current = setInterval(nextSlide, interval);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, interval, isHovering, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) nextSlide();
    else if (touchEndX - touchStartX > 50) prevSlide();
  };

  const spacingClasses = {
    none: 'gap-0',
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-6',
  };

  const getTransformStyle = () => {
    if (animation === 'slide') {
      const offsetPercent = -currentIndex * slideWidthPercent;
      return {
        transform: `translateX(${offsetPercent}%)`,
        transition: isTransitioning ? 'transform 0.5s ease' : 'none',
      };
    }
    return {};
  };

  const renderSlide = (child: React.ReactNode, index: number) => {
    return (
      <div
        key={index}
        className="carousel-slide flex-shrink-0"
        style={{ width: `${slideWidthPercent}%` }}
      >
        <div className="h-full px-1">{child}</div>
      </div>
    );
  };

  // Indicateurs - seulement pour les slides reels
  const renderIndicators = () => {
    if (!indicators || totalSlides <= 1) return null;

    // Calculer l'index reel (0 to totalSlides-1)
    const realIndex = ((currentIndex - totalSlides) % totalSlides + totalSlides) % totalSlides;

    return (
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === realIndex
                ? 'bg-[var(--foreground)] w-4'
                : 'bg-[var(--color-border)]'
            }`}
            onClick={() => setCurrentIndex(totalSlides + index)}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`carousel-container ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <Typography variant="h2" className="mb-2">{title}</Typography>}
          {subtitle && (
            <Typography variant="lead" className="text-[var(--text-secondary)]">
              {subtitle}
            </Typography>
          )}
        </div>
      )}

      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {controls && totalSlides > activeSlidesPerView && (
          <>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              onClick={prevSlide}
              aria-label="Slide precedent"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              onClick={nextSlide}
              aria-label="Slide suivant"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          </>
        )}

        <div
          ref={containerRef}
          className={`overflow-hidden ${adaptiveHeight ? 'h-auto' : 'relative'}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex ${spacingClasses[spacing]}`}
            style={getTransformStyle()}
          >
            {extendedSlides.map((child, index) => renderSlide(child, index))}
          </div>
        </div>

        {renderIndicators()}
      </div>
    </div>
  );
};
