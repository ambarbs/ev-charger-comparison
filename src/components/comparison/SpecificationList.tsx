import type { ChargerSpecification } from '@/types/comparison';

type SpecificationListProps = {
  specifications: ChargerSpecification[];
};

export function SpecificationList({ specifications }: SpecificationListProps) {
  const rowCount = specifications.length + 1;

  return (
    <section
      className="grid grid-rows-subgrid border-t border-slate-200"
      style={{
        gridRow: `span ${rowCount}`,
      }}
    >
      <h3 className="px-6 pt-5 text-sm font-semibold text-slate-950">
        Technical specifications
      </h3>

      {specifications.map(({ label, value }) => (
        <dl
          key={label}
          className="mx-6 grid grid-cols-2 items-start gap-4 border-b border-slate-200 py-3 text-sm last:border-b-0"
        >
          <dt className="text-slate-500">{label}</dt>

          <dd className="text-right font-medium text-slate-900">{value}</dd>
        </dl>
      ))}
    </section>
  );
}
