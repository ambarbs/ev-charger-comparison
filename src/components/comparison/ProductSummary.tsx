import Image from 'next/image';
import type { Charger } from '@/types/comparison';

type ProductSummaryProps = {
  charger: Charger;
};

export function ProductSummary({ charger }: ProductSummaryProps) {
  const formattedHardwarePrice = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(charger.hardwarePrice);

  return (
    <header className="p-6">
      <div className="flex min-h-6 items-start">
        {charger.badge && (
          <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-900">
            {charger.badge}
          </span>
        )}
      </div>
      <div className="relative mt-4 aspect-4/3 overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={charger.image}
          alt={`${charger.name} EV home charger`}
          fill
          sizes="(max-width: 768px) 80vw, 320px"
          className="object-cover"
        />
      </div>

      <h2 className="mt-5 text-2xl font-bold text-slate-950">{charger.name}</h2>

      <div className="mt-3">
        <p className="text-sm font-medium text-slate-600">Hardware from</p>

        <p className="mt-0.5 text-3xl font-bold text-slate-950">
          {formattedHardwarePrice}
        </p>

        <div className="mt-2 flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm leading-5 text-slate-700">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="mt-0.5 size-4 shrink-0"
          >
            <circle cx="10" cy="10" r="7.25" />

            <path d="M10 9v4" strokeLinecap="round" />

            <path d="M10 6.75h.01" strokeLinecap="round" />
          </svg>

          <span>{charger.installationMessage}</span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {charger.description}
      </p>
    </header>
  );
}
