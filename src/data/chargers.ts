import type { Charger } from '@/types/comparison';

export const chargers: Charger[] = [
  {
    id: 'urban-charge-7',
    name: 'UrbanCharge 7',
    hardwarePrice: 899,
    installationMessage: 'Installation quoted separately',
    description:
      'A compact home charger designed for everyday city driving and smaller households.',
    image: '/chargers/urban-charge-7.avif',
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
    hardwarePrice: 1299,
    installationMessage: 'Installation quoted separately',
    description:
      'A smart charger with solar integration, scheduled charging and detailed energy usage insights.',
    image: '/chargers/volt-home-11.avif',
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
    hardwarePrice: 1799,
    installationMessage: 'Installation quoted separately',
    description:
      'A high-performance three-phase charger suitable for households with multiple electric vehicles.',
    image: '/chargers/drive-max-22.avif',
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
  {
    id: 'solar-flow-7',
    name: 'SolarFlow 7',
    hardwarePrice: 1499,
    installationMessage: 'Installation quoted separately',
    description:
      'A solar-focused home charger designed to prioritise surplus rooftop energy and reduce grid usage.',
    image: '/chargers/solar-flow-7.avif',
    badge: 'Best for solar',
    features: [
      'Up to 7.4 kW charging',
      'Solar surplus charging mode',
      'Automatic off-peak scheduling',
      'Real-time household energy monitoring',
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
        value: '6 metres',
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
    id: 'dual-drive-22',
    name: 'DualDrive 22',
    hardwarePrice: 2299,
    installationMessage: 'Installation quoted separately',
    description:
      'A premium dual-vehicle charging system for larger households, shared garages and high daily driving requirements.',
    image: '/chargers/dual-drive-22.avif',
    features: [
      'Up to 22 kW total charging output',
      'Intelligent power sharing between two vehicles',
      'RFID access for multiple household drivers',
      'Advanced scheduling and downloadable usage reports',
    ],
    specifications: [
      {
        label: 'Power supply',
        value: 'Three-phase',
      },
      {
        label: 'Maximum output',
        value: '22 kW shared',
      },
      {
        label: 'Connector',
        value: 'Dual Type 2',
      },
      {
        label: 'Cable length',
        value: 'Two 7-metre cables',
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
