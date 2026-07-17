import type { Charger, ComparisonSection } from '@/types/comparison';

export const chargers: Charger[] = [
  {
    id: 'urban-charge-7',
    name: 'UrbanCharge 7',
    price: '$899',
    description:
      'A compact home charger designed for everyday city driving and smaller households.',
    image: '/chargers/urban-charge-7.png',
    badge: 'Best value',
  },
  {
    id: 'volt-home-11',
    name: 'VoltHome 11',
    price: '$1,299',
    description:
      'A smart charger with solar integration, scheduled charging and detailed energy usage insights.',
    image: '/chargers/volt-home-11.png',
    badge: 'Recommended',
  },
  {
    id: 'drive-max-22',
    name: 'DriveMax 22',
    price: '$1,799',
    description:
      'A high-performance three-phase charger suitable for households with multiple electric vehicles.',
    image: '/chargers/drive-max-22.png',
  },
];

export const comparisonSections: ComparisonSection[] = [
  {
    id: 'charging-speed',
    title: 'Charging speed',
    values: {
      'urban-charge-7': 'Up to 7.4 kW',
      'volt-home-11': 'Up to 11 kW with three-phase power',
      'drive-max-22': 'Up to 22 kW with compatible three-phase power',
    },
  },
  {
    id: 'solar-compatible',
    title: 'Solar compatibility',
    values: {
      'urban-charge-7': false,
      'volt-home-11': true,
      'drive-max-22': true,
    },
  },
  {
    id: 'smart-features',
    title: 'Smart features',
    values: {
      'urban-charge-7': 'Basic scheduling through the mobile app',
      'volt-home-11':
        'Scheduling, solar optimisation, energy monitoring and remote access',
      'drive-max-22':
        'Advanced load balancing, fleet controls and detailed energy reporting',
    },
  },
  {
    id: 'warranty',
    title: 'Warranty',
    values: {
      'urban-charge-7': '3 years',
      'volt-home-11': '5 years with on-site support',
      'drive-max-22': '7 years',
    },
  },
];
