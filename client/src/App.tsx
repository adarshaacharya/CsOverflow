import 'antd/dist/antd.css';
import { Router } from 'react-router-dom';
import React from 'react';
import { useRoutes } from 'routing/routes';
import history from 'utils/history';

const App: React.FC = () => {
  const routes = useRoutes();

  return (
    <>
      <Router history={history}>
        <>{routes}</>
      </Router>
    </>
  );
};

export default App;
