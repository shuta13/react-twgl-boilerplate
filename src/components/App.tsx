import React from 'react';
import { history, Router, routes } from '../routes';
import { Layout } from './Layout';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Layout>
        <Router
          history={history}
          routes={routes}
          fallback={<div>loading...</div>}
        />
      </Layout>
    </React.StrictMode>
  );
};

export default App;
