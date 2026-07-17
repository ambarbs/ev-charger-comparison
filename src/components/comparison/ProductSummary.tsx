import type { Charger } from '@/types/comparison';

type ProductSummaryProps = {
  charger: Charger;
};

export function ProductSummary({ charger }: ProductSummaryProps) {
  return (
    <header className="p-6">
      <div className="flex min-h-6 items-start">
        {charger.badge && (
          <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-900">
            {charger.badge}
          </span>
        )}
      </div>

      <div className="mt-4 flex aspect-4/3 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
        Charger image
      </div>

      <h2 className="mt-5 text-2xl font-bold text-slate-950">{charger.name}</h2>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-950">
          {charger.price}
        </span>

        <span className="text-sm text-slate-500">charger only</span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {charger.description}
      </p>
    </header>
  );
}
