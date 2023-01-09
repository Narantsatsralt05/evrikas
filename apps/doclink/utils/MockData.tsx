import { useId } from 'react';

export const MockData = [
  {
    _id: 'id-1',
    parentId: 'main',
    name: 'Onboard',
  },
  {
    _id: 'id-2',
    parentId: 'id-1',
    name: 'Developer',
  },
  {
    _id: 'id-3',
    parentId: 'id-1',
    name: 'Back-office',
  },
  {
    _id: 'id-4',
    parentId: 'id-1',
    name: 'Designer',
  },
  {
    _id: 'id-test-5',
    parentId: 'id-2',
    name: 'Setup',
  },
  {
    _id: 'id-test-6',
    parentId: 'main',
    name: 'Projects',
  },
];
