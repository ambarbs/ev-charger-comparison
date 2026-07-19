'use client';

import { useEffect, useRef, useState } from 'react';
import { chargers } from '@/data/chargers';

import { ChargerCard } from './ChargerCard';
import { MobileCarouselControls } from './MobileCarouselControls';
import { DesktopCarouselControl } from './DesktopCarouselControl';

export function ComparisonCards() {
  const containerRef = useRef<HTMLElement>(null);

  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNavStuck, setIsNavStuck] = useState(false);
  const navSentinelRef = useRef<HTMLDivElement>(null);

  const specificationCount = Math.max(
    ...chargers.map((charger) => charger.specifications.length),
  );

  const totalRows = 4 + specificationCount;

  const updateScrollState = () => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setCanScrollPrevious(container.scrollLeft > 1);
    setCanScrollNext(container.scrollLeft < maxScrollLeft - 1);
  };

  const getActiveCardIndex = () => {
    const container = containerRef.current;

    if (!container) {
      return 0;
    }

    const cards = Array.from(container.children) as HTMLElement[];

    if (cards.length === 0) {
      return 0;
    }

    return cards.reduce((closestIndex, card, index) => {
      const closestDistance = Math.abs(
        cards[closestIndex].offsetLeft - container.scrollLeft,
      );

      const currentDistance = Math.abs(card.offsetLeft - container.scrollLeft);

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
  };

  const handleCarouselScroll = () => {
    setActiveIndex(getActiveCardIndex());
    updateScrollState();
  };

  function scroll(direction: 'previous' | 'next') {
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
  }

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
  }, []);

  useEffect(() => {
    const sentinel = navSentinelRef.current;

    if (!sentinel) return;

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

    return () => observer.disconnect();
  }, []);

  const activeCharger = chargers[activeIndex] ?? chargers[0];

  return (
    <>
      <div className="relative">
        <div
          ref={navSentinelRef}
          className="h-px md:hidden"
          aria-hidden="true"
        />

        <MobileCarouselControls
          activeCharger={activeCharger}
          activeIndex={activeIndex}
          total={chargers.length}
          isStuck={isNavStuck}
          canScrollPrevious={canScrollPrevious}
          canScrollNext={canScrollNext}
          onPrevious={() => scroll('previous')}
          onNext={() => scroll('next')}
        />

        {/* Desktop arrows and comparison carousel */}
        <div
          className="
    grid
    grid-cols-1
    md:grid-cols-[3rem_minmax(0,1fr)_3rem]
  "
        >
          <DesktopCarouselControl
            direction="previous"
            disabled={!canScrollPrevious}
            onClick={() => scroll('previous')}
          />

          <section
            id="charger-comparison-carousel"
            ref={containerRef}
            onScroll={handleCarouselScroll}
            aria-label="EV charger comparison"
            className="
      col-start-1
      row-start-1
      grid
      min-w-0
      snap-x
      snap-mandatory
      scrollbar-none
      auto-cols-[calc(100%-3rem)]
      grid-flow-col
      gap-x-4
      overflow-x-auto
      scroll-smooth
      pb-4

      md:col-start-2
      md:row-start-1
      md:auto-cols-[minmax(290px,320px)]
      md:gap-x-5

      [&::-webkit-scrollbar]:hidden
    "
            style={{
              gridTemplateRows: `repeat(${totalRows}, auto)`,
            }}
          >
            {chargers.map((charger) => (
              <ChargerCard
                key={charger.id}
                charger={charger}
                totalRows={totalRows}
              />
            ))}
          </section>

          <DesktopCarouselControl
            direction="next"
            disabled={!canScrollNext}
            onClick={() => scroll('next')}
          />
        </div>
      </div>
    </>
  );
}
