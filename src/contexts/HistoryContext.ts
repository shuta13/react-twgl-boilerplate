import type { History } from 'history';
import { createContext } from 'react';

const HistoryContext = createContext<History | null>(null);
const { Provider, Consumer } = HistoryContext;

export default HistoryContext;
export { Provider, Consumer };
