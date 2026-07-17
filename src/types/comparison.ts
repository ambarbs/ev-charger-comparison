export type Charger = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
  features: string[];
};

export type ComparisonValue = string | boolean;

export type ComparisonSection = {
  id: string;
  title: string;
  values: Record<string, ComparisonValue>;
};
