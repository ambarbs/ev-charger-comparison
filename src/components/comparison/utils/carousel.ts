import type { Charger } from '@/types/comparison';

const SCROLL_TOLERANCE_PX = 1;
const BASE_COMPARISON_ROWS = 4;

export type ScrollMetrics = {
  scrollLeft: number;
  scrollWidth: number;
  clientWidth: number;
};

export type ScrollBoundaries = {
  canScrollPrevious: boolean;
  canScrollNext: boolean;
};

export function getScrollBoundaries({
  scrollLeft,
  scrollWidth,
  clientWidth,
}: ScrollMetrics): ScrollBoundaries {
  const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);

  return {
    canScrollPrevious: scrollLeft > SCROLL_TOLERANCE_PX,
    canScrollNext: scrollLeft < maxScrollLeft - SCROLL_TOLERANCE_PX,
  };
}

export function findClosestItemIndex(
  itemOffsets: readonly number[],
  scrollLeft: number,
): number {
  if (itemOffsets.length === 0) {
    return 0;
  }

  return itemOffsets.reduce((closestIndex, offset, index) => {
    const closestDistance = Math.abs(itemOffsets[closestIndex] - scrollLeft);

    const currentDistance = Math.abs(offset - scrollLeft);

    return currentDistance < closestDistance ? index : closestIndex;
  }, 0);
}

export function getComparisonRowCount(items: readonly Charger[]): number {
  const specificationCount = items.reduce(
    (largestCount, charger) =>
      Math.max(largestCount, charger.specifications.length),
    0,
  );

  return BASE_COMPARISON_ROWS + specificationCount;
}
