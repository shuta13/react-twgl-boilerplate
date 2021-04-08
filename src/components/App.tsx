import React from 'react';
import { history, Router, routes } from '../routes';
import { css } from '@linaria/core';
import { ColorPallette } from '../config/style/variables';
import { SEO } from './SEO';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <SEO />
      <Router
        history={history}
        routes={routes}
        fallback={<div>loading...</div>}
      />
    </React.StrictMode>
  );
};

export const globals = css`
  :global() {
    html,
    body {
      padding: 0;
      margin: 0;
      width: 100%;
      min-height: 100%;
      font-size: 16px;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: ${ColorPallette.accentBlue};
    }
  }
`;

export default App;
