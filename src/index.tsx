import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from './routes/Router';
import { history } from './routes/history';
import { routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router
      history={history}
      routes={routes}
      fallback={<div>loading...</div>}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
