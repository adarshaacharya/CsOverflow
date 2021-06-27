import { CoffeeOutlined } from '@ant-design/icons';
import { Affix, Button, Layout } from 'antd';
import AlertBoundary from 'lib/components/AlertBoundary';
import Navbar from 'lib/components/AppHeader';
import { useRoutes } from 'lib/routing/routes';
import { history } from 'lib/utils';
import React, { useEffect } from 'react';
import { Link, Router } from 'react-router-dom';
import store from 'store';
import { loadUser } from 'store/modules/auth/auth.actions';
import { LOGOUT } from 'store/modules/auth/auth.types';
import { setAuthToken } from 'store/modules/auth/auth.utils';
import 'styles/index.css';
import * as storage from 'lib/utils/storage';
import { CSOVERFLOW_TOKEN } from 'lib/constants';

const App: React.FC = () => {
  const routes = useRoutes();

  /**
   * Heart of application
   * runs when application first load or refresh
   */
  useEffect(() => {
    if (storage.get(CSOVERFLOW_TOKEN)) {
      setAuthToken(storage.get(CSOVERFLOW_TOKEN));
      store.dispatch<any>(loadUser());
    }

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!storage.get(CSOVERFLOW_TOKEN)) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <>
      <Router history={history}>
        <Layout id="app">
          <Affix offsetTop={0} className="app__affix-header">
            <Navbar />
          </Affix>
          <Layout>
            <AlertBoundary>{routes}</AlertBoundary>
            <Affix offsetBottom={10} className="app__affix-footer">
              <Button type="primary">
                <Link to="/about">
                  <CoffeeOutlined />
                  &nbsp;About CS Overflow
                </Link>
              </Button>
            </Affix>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};

export default App;
