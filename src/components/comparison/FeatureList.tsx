type FeatureListProps = {
  features: string[];
};

export function FeatureList({ features }: FeatureListProps) {
  return (
    <section className="border-t border-slate-200 px-6 py-5">
      <h3 className="text-sm font-semibold text-slate-950">Key features</h3>

      <ul className="mt-3 space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-2 text-sm leading-5 text-slate-700"
          >
            <span aria-hidden="true" className="font-bold text-teal-700">
              ✓
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
