import { CoffeeOutlined } from '@ant-design/icons';
import { Affix, Button, Layout } from 'antd';
import Alert from 'lib/components/Alert';
import Navbar from 'lib/components/AppHeader';
import { useRoutes } from 'lib/routing/routes';
import { displayErrorMessage, displaySuccessNotification } from 'lib/utils';
import history from 'lib/utils/history';
import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Link, Router } from 'react-router-dom';
import store from 'store';
import { loadUser } from 'store/modules/auth/auth.actions';
import { LOGOUT } from 'store/modules/auth/auth.types';
import { setAuthToken } from 'store/modules/auth/auth.utils';
import { RootState } from 'store/modules/combine-reducer';
import 'styles/index.css';

const App: React.FC = () => {
  const routes = useRoutes();
  const { msg, type } = useSelector((state: RootState) => state.alert);

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

  React.useEffect(() => {
    if (msg && type === 'error') {
      displayErrorMessage(msg);
    }
    if (msg && type === 'success') {
      displaySuccessNotification(msg);
    }
  }, [msg, type]);

  return (
    <>
      <Router history={history}>
        <Layout id="app">
          <Affix offsetTop={0} className="app__affix-header">
            <Navbar />
          </Affix>
          {/* <Alert /> */}
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
    </>
  );
};

export default App;
