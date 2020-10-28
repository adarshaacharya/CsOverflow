import 'antd/dist/antd.css';
import Navbar from 'components/AppHeader';
import React from 'react';
import { Router } from 'react-router-dom';
import { useRoutes } from 'routing/routes';
import history from 'utils/history';

const App: React.FC = () => {
  const routes = useRoutes();

  return (
    <>
      <Router history={history}>
        <>
          <Navbar />
          {routes}
        </>
      </Router>
    </>
  );
};

export default App;
