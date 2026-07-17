'use client';

import { useRef } from 'react';

import { chargers } from '@/data/chargers';

import { ChargerCard } from './ChargerCard';

export function ComparisonCards() {
  const containerRef = useRef<HTMLElement>(null);

  const specificationCount = Math.max(
    ...chargers.map((charger) => charger.specifications.length),
  );

  const totalRows = 4 + specificationCount;

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

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Show previous chargers"
        onClick={() => scroll('previous')}
        className="
          absolute
          top-1/2
          left-2
          z-10
          -translate-y-1/2
          cursor-pointer
          rounded-full
          border
          border-slate-300
          bg-white
          px-3
          py-2
          shadow-sm
          hover:bg-slate-50
        "
      >
        ←
      </button>

      <section
        ref={containerRef}
        aria-label="EV charger comparison"
        className="
          grid
          grid-flow-col
          auto-cols-[minmax(290px,320px)]
          gap-x-5
          snap-x
          snap-mandatory
          overflow-x-auto
          pb-4
          scroll-smooth
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

      <button
        type="button"
        aria-label="Show more chargers"
        onClick={() => scroll('next')}
        className="
          absolute
          top-1/2
          right-2
          z-10
          -translate-y-1/2
          cursor-pointer
          rounded-full
          border
          border-slate-300
          bg-white
          px-3
          py-2
          shadow-sm
          hover:bg-slate-50
        "
      >
        →
      </button>
    </div>
  );
}
