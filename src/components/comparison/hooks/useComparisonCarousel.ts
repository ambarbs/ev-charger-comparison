import { useCallback, useEffect, useRef, useState } from 'react';

import {
  findClosestItemIndex,
  getScrollBoundaries,
} from '@/components/comparison/utils/carousel';

export type CarouselDirection = 'previous' | 'next';

export function useComparisonCarousel() {
  const containerRef = useRef<HTMLElement>(null);
  const navSentinelRef = useRef<HTMLDivElement>(null);

  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNavStuck, setIsNavStuck] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const boundaries = getScrollBoundaries({
      scrollLeft: container.scrollLeft,
      scrollWidth: container.scrollWidth,
      clientWidth: container.clientWidth,
    });

    setCanScrollPrevious(boundaries.canScrollPrevious);
    setCanScrollNext(boundaries.canScrollNext);
  }, []);

  const getActiveCardIndex = useCallback(() => {
    const container = containerRef.current;

    if (!container) {
      return 0;
    }

    const itemOffsets = Array.from(
      container.children,
      (child) => (child as HTMLElement).offsetLeft,
    );

    return findClosestItemIndex(itemOffsets, container.scrollLeft);
  }, []);

  const handleCarouselScroll = useCallback(() => {
    setActiveIndex(getActiveCardIndex());
    updateScrollState();
  }, [getActiveCardIndex, updateScrollState]);

  const scroll = useCallback((direction: CarouselDirection) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const card = container.querySelector<HTMLElement>('article');

    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 20;

    container.scrollBy({
      left: direction === 'next' ? cardWidth + gap : -(cardWidth + gap),
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    updateScrollState();

    window.addEventListener('resize', updateScrollState);

    return () => {
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const sentinel = navSentinelRef.current;

    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavStuck(!entry.isIntersecting);
      },
      {
        threshold: 0,

        // Matches sticky top-2, which is 8px.
        rootMargin: '-8px 0px 0px 0px',
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    containerRef,
    navSentinelRef,
    canScrollPrevious,
    canScrollNext,
    activeIndex,
    isNavStuck,
    handleCarouselScroll,
    scroll,
  };
}
