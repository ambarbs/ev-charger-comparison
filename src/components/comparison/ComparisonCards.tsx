import { chargers } from '@/data/chargers';

import { ChargerCard } from './ChargerCard';

export function ComparisonCards() {
  return (
    <section
      aria-label="EV charger comparison"
      className="grid snap-x snap-mandatory grid-flow-col auto-cols-[minmax(290px,320px)] gap-5 overflow-x-auto pb-4"
    >
      {chargers.map((charger) => (
        <ChargerCard key={charger.id} charger={charger} />
      ))}
    </section>
  );
}
