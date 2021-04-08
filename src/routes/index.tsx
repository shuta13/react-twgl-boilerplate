// sourced from https://codesandbox.io/s/vyx8q7jvk7
import type { Routes } from 'universal-router';
export { Router } from './Router';
export { history } from './history';

export const routes: Routes = [
  {
    path: '/',
    action: () => import('../pages/Home'),
  },
  {
    path: '/health',
    action: () => import('../pages/Health'),
  },
  {
    path: '/sandbox',
    action: () => import('../pages/sandbox'),
  },
];
