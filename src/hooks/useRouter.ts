import type { History } from 'history';
import React, { useEffect, useMemo, useState } from 'react';
import type { Routes } from 'universal-router';
import UniversalRouter from 'universal-router';
import { useLocation } from './useLocation';

export const useRouter = (routes: Routes, history: History<any>) => {
  const location = useLocation(history);
  console.log(location);
  const router = useMemo(() => new UniversalRouter(routes), [routes]);
  const [Component, setComponent] = useState<React.ElementType>('div');
  useEffect(() => {
    const LazyComponent = React.lazy(() => router.resolve(location.pathname));
    setComponent(() => LazyComponent);
  }, [location]);
  return Component;
};
