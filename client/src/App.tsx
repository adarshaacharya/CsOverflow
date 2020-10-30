import { Affix, Layout } from 'antd';
import Navbar from 'components/AppHeader';
import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { useRoutes } from 'routing/routes';
import 'styles/index.css';
import history from 'utils/history';

const App: React.FC = () => {
  const routes = useRoutes();

  useEffect(() => {

    if(localStorage.csoverflowtoken) {

    }
  }, [])

  return (
    <>
      <Router history={history}>
        <Layout id="app">
          <Affix offsetTop={0} className="app__affix-header">
            <Navbar />
          </Affix>
          {routes}
        </Layout>
      </Router>
    </>
  );
};

export default App;
