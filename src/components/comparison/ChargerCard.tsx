import type { Charger } from '@/types/comparison';

import { FeatureList } from './FeatureList';
import { ProductSummary } from './ProductSummary';
import { SpecificationList } from './SpecificationList';

type ChargerCardProps = {
  charger: Charger;
  totalRows: number;
};

export function ChargerCard({ charger, totalRows }: ChargerCardProps) {
  return (
    <article
      className="
        grid
        grid-rows-subgrid
        snap-start
        overflow-hidden
        rounded-2xl
        border
        border-teal-700
        bg-white
      "
      style={{
        gridRow: `span ${totalRows}`,
      }}
    >
      <ProductSummary charger={charger} />

      <FeatureList features={charger.features} />

      <SpecificationList specifications={charger.specifications} />
    </article>
  );
}
