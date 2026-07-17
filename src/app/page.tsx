import { ComparisonCards } from '@/components/comparison/ComparisonCards';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Home EV charging
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">
            Compare EV chargers
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Find the right home charger based on speed, smart features and solar
            compatibility.
          </p>
        </div>

        <ComparisonCards />
      </div>
    </main>
  );
}
