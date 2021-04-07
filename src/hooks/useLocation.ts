import type { History } from 'history';
import { useEffect, useState } from 'react';

export const useLocation = (history: History<any>) => {
  const [location, setLocation] = useState(history.location);
  useEffect(() => {
    const unlisten = history.listen((update) => setLocation(update.location));
    return () => unlisten();
  }, [history]);
  return location;
};
