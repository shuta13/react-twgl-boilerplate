import type { History } from 'history';
import React from 'react';
import type { Routes } from 'universal-router';
import { Provider } from '../contexts/HistoryContext';
import { useRouter } from '../hooks/useRouter';

export type RouterProps = {
  routes: Routes;
  history: History;
  fallback: NonNullable<React.ReactNode> | null;
};

export const Router: React.FC<RouterProps> = (props) => {
  const { routes, history, fallback } = props;
  const Component = useRouter(routes, history);
  return (
    <Provider value={history}>
      <React.Suspense fallback={fallback}>
        <Component />
      </React.Suspense>
    </Provider>
  );
};
