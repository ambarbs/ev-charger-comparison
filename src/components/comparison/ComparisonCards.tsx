import { chargers } from '@/data/chargers';

import { ChargerCard } from './ChargerCard';

export function ComparisonCards() {
  return (
    <section
      aria-label="EV charger comparison"
      className="
        grid
        grid-flow-col
        grid-rows-[auto_auto_auto]
        auto-cols-[minmax(290px,320px)]
        gap-x-5
        gap-y-0
        snap-x
        snap-mandatory
        overflow-x-auto
        pb-4
      "
    >
      {chargers.map((charger) => (
        <ChargerCard key={charger.id} charger={charger} />
      ))}
    </section>
  );
}
