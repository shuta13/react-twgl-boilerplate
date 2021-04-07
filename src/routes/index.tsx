// @see https://codesandbox.io/s/vyx8q7jvk7
import type { Routes } from 'universal-router';

export const routes: Routes = [
  {
    path: '/',
    action: () => import('../pages/Home'),
  },
  {
    path: '/health',
    action: () => import('../pages/Health'),
  },
];
