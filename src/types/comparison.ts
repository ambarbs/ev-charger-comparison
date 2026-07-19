export type ChargerSpecification = {
  label: string;
  value: string;
};

export type Charger = {
  id: string;
  name: string;
  hardwarePrice: number;
  installationMessage: string;
  description: string;
  image: string;
  badge?: string;
  features: string[];
  specifications: ChargerSpecification[];
};

export type ComparisonValue = string | boolean;

export type ComparisonSection = {
  id: string;
  title: string;
  values: Record<string, ComparisonValue>;
};
