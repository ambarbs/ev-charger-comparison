'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { chargers } from '@/data/chargers';

import { ChargerCard } from './ChargerCard';

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

  const navigationButtonClasses = `
  flex
  size-10
  items-center
  justify-center
  rounded-full
  border
  transition
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-teal-700
  enabled:cursor-pointer
  enabled:border-slate-300
  enabled:bg-white
  enabled:text-slate-800
  enabled:shadow-sm
  enabled:hover:border-teal-700
  enabled:hover:bg-teal-50
  disabled:cursor-not-allowed
  disabled:border-slate-200
  disabled:bg-slate-100
  disabled:text-slate-300
  disabled:shadow-none
  disabled:opacity-60
`;

  return (
    <>
      <div className="relative">
        <div
          ref={navSentinelRef}
          className="h-px md:hidden"
          aria-hidden="true"
        />
        {/* Mobile navigation controls */}
        <div
          className="
    pointer-events-none
    sticky
    top-2
    z-30
    mb-4
    flex
    md:hidden
  "
        >
          <div
            className={`
      pointer-events-auto
      flex
      w-full
      items-center
      justify-between
      gap-3
      rounded-xl
      px-2
      py-1.5
      transition-all
      duration-300
      ease-out
      ${
        isNavStuck
          ? 'border border-slate-200 bg-slate-50/95 shadow-md'
          : 'border border-transparent bg-transparent shadow-none'
      }
    `}
            aria-label="Charger carousel controls"
          >
            {/* Active charger context */}
            <div
              className={`
        flex
        min-w-0
        items-center
        gap-2
        transition-all
        duration-300
        ${
          isNavStuck
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }
      `}
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="relative size-10 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  <Image
                    src={activeCharger.image}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {activeCharger.name}
                  </p>

                  <p
                    className="text-xs text-slate-500"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {activeIndex + 1} of {chargers.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label="Show previous charger"
                aria-controls="charger-comparison-carousel"
                disabled={!canScrollPrevious}
                onClick={() => scroll('previous')}
                className={navigationButtonClasses}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="m12.5 15-5-5 5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Show next charger"
                aria-controls="charger-comparison-carousel"
                disabled={!canScrollNext}
                onClick={() => scroll('next')}
                className={navigationButtonClasses}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="m7.5 5 5 5-5 5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop arrows and comparison carousel */}
        <div
          className="
        grid
        grid-cols-1
        md:grid-cols-[3rem_minmax(0,1fr)_3rem]
      "
        >
          {/* Desktop previous button */}
          <div
            className="
    relative
    hidden
    md:col-start-1
    md:row-start-1
    md:block
  "
          >
            <div
              className="
      sticky
      top-[50vh]
      flex
      -translate-y-1/2
      justify-center
    "
            >
              <button
                type="button"
                aria-label="Show previous chargers"
                aria-controls="charger-comparison-carousel"
                disabled={!canScrollPrevious}
                onClick={() => scroll('previous')}
                className={navigationButtonClasses}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="m12.5 15-5-5 5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel */}
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
          md:scroll-px-0
          md:auto-cols-[minmax(290px,320px)]
          md:gap-x-5
          md:px-0

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

          {/* Desktop next button */}
          <div
            className="
    relative
    hidden
    md:col-start-3
    md:row-start-1
    md:block
  "
          >
            <div
              className="
      sticky
      top-[50vh]
      flex
      -translate-y-1/2
      justify-center
    "
            >
              <button
                type="button"
                aria-label="Show more chargers"
                aria-controls="charger-comparison-carousel"
                disabled={!canScrollNext}
                onClick={() => scroll('next')}
                className={navigationButtonClasses}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="m7.5 5 5 5-5 5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
