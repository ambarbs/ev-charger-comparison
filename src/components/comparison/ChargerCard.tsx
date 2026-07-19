import type { Charger } from '@/types/comparison';

import { CardActions } from './CardActions';
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
        snap-start
        overflow-hidden
        rounded-2xl
        border
        border-teal-700
        bg-white

        md:row-[span_var(--comparison-row-count)]
        md:grid-rows-subgrid
      "
    >
      <ProductSummary charger={charger} />

      <FeatureList features={charger.features} />

      <CardActions chargerName={charger.name} />

      <SpecificationList specifications={charger.specifications} />
    </article>
  );
}
