import { chargers } from '@/data/chargers';

import { ChargerCard } from './ChargerCard';

export function ComparisonCards() {
  const specificationCount = Math.max(
    ...chargers.map((charger) => charger.specifications.length),
  );

  const totalRows = 2 + 1 + specificationCount;
  // Product summary + features + specification heading + specification rows

  return (
    <section
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
      "
      style={{
        gridTemplateRows: `repeat(${totalRows}, auto)`,
      }}
    >
      {chargers.map((charger) => (
        <ChargerCard key={charger.id} charger={charger} totalRows={totalRows} />
      ))}
    </section>
  );
}
