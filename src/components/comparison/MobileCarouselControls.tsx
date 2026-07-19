import Image from 'next/image';

import type { Charger } from '@/types/comparison';

import { CarouselNavigationButton } from './CarouselNavigationButton';

type MobileCarouselControlsProps = {
  activeCharger: Charger;
  activeIndex: number;
  total: number;
  isStuck: boolean;
  canScrollPrevious: boolean;
  canScrollNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export function MobileCarouselControls({
  activeCharger,
  activeIndex,
  total,
  isStuck,
  canScrollPrevious,
  canScrollNext,
  onPrevious,
  onNext,
}: MobileCarouselControlsProps) {
  return (
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
            isStuck
              ? 'border border-slate-200 bg-slate-50/95 shadow-md'
              : 'border border-transparent bg-transparent shadow-none'
          }
        `}
        aria-label="Charger carousel controls"
      >
        <div
          className={`
            flex
            min-w-0
            items-center
            gap-2
            transition-all
            duration-300
            ${
              isStuck
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
                {activeIndex + 1} of {total}
              </p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <CarouselNavigationButton
            direction="previous"
            label="Show previous charger"
            disabled={!canScrollPrevious}
            onClick={onPrevious}
          />

          <CarouselNavigationButton
            direction="next"
            label="Show next charger"
            disabled={!canScrollNext}
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
}
