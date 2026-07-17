import type { ChargerSpecification } from '@/types/comparison';

type SpecificationListProps = {
  specifications: ChargerSpecification[];
};

export function SpecificationList({ specifications }: SpecificationListProps) {
  return (
    <section className="border-t border-slate-200 px-6 py-5">
      <h3 className="text-sm font-semibold text-slate-950">
        Technical specifications
      </h3>

      <dl className="mt-4 divide-y divide-slate-200">
        {specifications.map(({ label, value }) => (
          <div key={label} className="grid grid-cols-2 gap-4 py-3 text-sm">
            <dt className="text-slate-500">{label}</dt>

            <dd className="text-right font-medium text-slate-900">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
