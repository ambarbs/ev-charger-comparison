import type { Charger } from '@/types/comparison';

import { FeatureList } from './FeatureList';
import { ProductSummary } from './ProductSummary';
import { SpecificationList } from './SpecificationList';

type ChargerCardProps = {
  charger: Charger;
};

export function ChargerCard({ charger }: ChargerCardProps) {
  return (
    <article
      className="
        grid
        row-span-3
        grid-rows-subgrid
        snap-start
        overflow-hidden
        rounded-2xl
        border
        border-teal-700
        bg-white
      "
    >
      <ProductSummary charger={charger} />

      <FeatureList features={charger.features} />

      <SpecificationList specifications={charger.specifications} />
    </article>
  );
}
