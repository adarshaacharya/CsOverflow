import { CoffeeOutlined } from '@ant-design/icons';
import { Affix, Button, Layout } from 'antd';
import Navbar from 'lib/components/AppHeader';
import ErrorBoundary from 'lib/components/ErrorBoundary';
import Sidebar from 'lib/components/Sidebar';
import { useRoutes } from 'lib/routing/routes';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Link, Router } from 'react-router-dom';
import store from 'store';
import { loadUser } from 'store/modules/auth/auth.actions';
import { LOGOUT } from 'store/modules/auth/auth.types';
import { setAuthToken } from 'store/modules/auth/auth.utils';
import 'styles/index.css';
import history from 'lib/utils/history';

const App: React.FC = () => {
  const routes = useRoutes();

  useEffect(() => {
    if (localStorage.cstoken) {
      setAuthToken(localStorage.cstoken);
    }

    store.dispatch<any>(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.cstoken) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Layout id="app">
            <Affix offsetTop={0} className="app__affix-header">
              <Navbar />
            </Affix>
            <ErrorBoundary />
            <Layout>
              {routes}
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
      </Provider>
    </>
  );
};

export default App;
