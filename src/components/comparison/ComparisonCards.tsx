'use client';

import { getComparisonRowCount } from '@/components/comparison/utils/carousel';
import { chargers } from '@/data/chargers';

import { ChargerCard } from './ChargerCard';
import { DesktopCarouselControl } from './DesktopCarouselControl';
import { MobileCarouselControls } from './MobileCarouselControls';
import { useComparisonCarousel } from './hooks/useComparisonCarousel';

export function ComparisonCards() {
  const {
    containerRef,
    navSentinelRef,
    canScrollPrevious,
    canScrollNext,
    activeIndex,
    isNavStuck,
    handleCarouselScroll,
    scroll,
  } = useComparisonCarousel();

  const totalRows = getComparisonRowCount(chargers);

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
