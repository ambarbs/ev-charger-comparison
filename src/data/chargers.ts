import type { Charger } from '@/types/comparison';

export const chargers: Charger[] = [
  {
    id: 'urban-charge-7',
    name: 'UrbanCharge 7',
    price: '$899',
    description:
      'A compact home charger designed for everyday city driving and smaller households.',
    image: '/chargers/urban-charge-7.png',
    badge: 'Best value',
    features: [
      'Up to 7.4 kW charging',
      'Mobile app scheduling',
      'Built-in usage monitoring',
      'Type 2 charging cable',
    ],
    specifications: [
      {
        label: 'Power supply',
        value: 'Single-phase',
      },
      {
        label: 'Maximum output',
        value: '7.4 kW',
      },
      {
        label: 'Connector',
        value: 'Type 2',
      },
      {
        label: 'Cable length',
        value: '5 metres',
      },
      {
        label: 'Weather rating',
        value: 'IP54',
      },
      {
        label: 'Connectivity',
        value: 'Wi-Fi',
      },
    ],
  },
  {
    id: 'volt-home-11',
    name: 'VoltHome 11',
    price: '$1,299',
    description:
      'A smart charger with solar integration, scheduled charging and detailed energy usage insights.',
    image: '/chargers/volt-home-11.png',
    badge: 'Recommended',
    features: [
      'Up to 11 kW charging with three-phase power',
      'Solar surplus charging optimisation',
      'Remote scheduling and energy monitoring',
      'Dynamic household load balancing',
    ],
    specifications: [
      {
        label: 'Power supply',
        value: 'Single or three-phase',
      },
      {
        label: 'Maximum output',
        value: '11 kW',
      },
      {
        label: 'Connector',
        value: 'Type 2',
      },
      {
        label: 'Cable length',
        value: '7 metres',
      },
      {
        label: 'Weather rating',
        value: 'IP65',
      },
      {
        label: 'Connectivity',
        value: 'Wi-Fi and Bluetooth',
      },
    ],
  },
  {
    id: 'drive-max-22',
    name: 'DriveMax 22',
    price: '$1,799',
    description:
      'A high-performance three-phase charger suitable for households with multiple electric vehicles.',
    image: '/chargers/drive-max-22.png',
    features: [
      'Up to 22 kW high-speed charging',
      'Supports multiple driver profiles',
      'Advanced load balancing and usage reports',
      'RFID access control for shared installations',
    ],
    specifications: [
      {
        label: 'Power supply',
        value: 'Three-phase',
      },
      {
        label: 'Maximum output',
        value: '22 kW',
      },
      {
        label: 'Connector',
        value: 'Type 2',
      },
      {
        label: 'Cable length',
        value: '7.5 metres',
      },
      {
        label: 'Weather rating',
        value: 'IP66',
      },
      {
        label: 'Connectivity',
        value: 'Wi-Fi, Ethernet and 4G',
      },
    ],
  },
];
