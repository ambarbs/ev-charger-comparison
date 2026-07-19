import { describe, expect, it } from 'vitest';

import type { Charger } from '@/types/comparison';

import {
  findClosestItemIndex,
  getComparisonRowCount,
  getScrollBoundaries,
} from './carousel';

function createCharger(specificationCount: number): Charger {
  return {
    id: `charger-${specificationCount}`,
    name: `Test charger ${specificationCount}`,
    price: '$999',
    description: 'Test charger description',
    image: '/chargers/test-charger.avif',
    features: [],
    specifications: Array.from({ length: specificationCount }, (_, index) => ({
      label: `Specification ${index + 1}`,
      value: `Value ${index + 1}`,
    })),
  };
}

describe('getScrollBoundaries', () => {
  it('disables both directions when the content does not overflow', () => {
    expect(
      getScrollBoundaries({
        scrollLeft: 0,
        scrollWidth: 320,
        clientWidth: 320,
      }),
    ).toEqual({
      canScrollPrevious: false,
      canScrollNext: false,
    });
  });

  it('only enables next at the beginning of an overflowing carousel', () => {
    expect(
      getScrollBoundaries({
        scrollLeft: 0,
        scrollWidth: 1000,
        clientWidth: 320,
      }),
    ).toEqual({
      canScrollPrevious: false,
      canScrollNext: true,
    });
  });

  it('enables both directions in the middle of the carousel', () => {
    expect(
      getScrollBoundaries({
        scrollLeft: 300,
        scrollWidth: 1000,
        clientWidth: 320,
      }),
    ).toEqual({
      canScrollPrevious: true,
      canScrollNext: true,
    });
  });

  it('only enables previous at the end of the carousel', () => {
    expect(
      getScrollBoundaries({
        scrollLeft: 680,
        scrollWidth: 1000,
        clientWidth: 320,
      }),
    ).toEqual({
      canScrollPrevious: true,
      canScrollNext: false,
    });
  });

  it('ignores tiny scroll-position differences within the tolerance', () => {
    expect(
      getScrollBoundaries({
        scrollLeft: 0.5,
        scrollWidth: 1000,
        clientWidth: 320,
      }).canScrollPrevious,
    ).toBe(false);
  });
});

describe('findClosestItemIndex', () => {
  it('returns zero when there are no items', () => {
    expect(findClosestItemIndex([], 100)).toBe(0);
  });

  it('returns the item closest to the current scroll position', () => {
    expect(findClosestItemIndex([0, 336, 672], 350)).toBe(1);
  });

  it('returns the first item when positioned near the beginning', () => {
    expect(findClosestItemIndex([0, 336, 672], 20)).toBe(0);
  });

  it('returns the final item when positioned near the end', () => {
    expect(findClosestItemIndex([0, 336, 672], 650)).toBe(2);
  });

  it('prefers the earlier item when two items are equally close', () => {
    expect(findClosestItemIndex([0, 100], 50)).toBe(0);
  });
});

describe('getComparisonRowCount', () => {
  it('uses the charger with the greatest number of specifications', () => {
    const chargers = [createCharger(3), createCharger(5), createCharger(4)];

    expect(getComparisonRowCount(chargers)).toBe(9);
  });

  it('returns the base row count for an empty charger collection', () => {
    expect(getComparisonRowCount([])).toBe(4);
  });
});
