import { Affix, Layout } from 'antd';
import Navbar from 'components/AppHeader';
import ErrorBoundary from 'components/ErrorBoundary';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { useRoutes } from 'routing/routes';
import store from 'store';
import { loadUser } from 'store/modules/auth/auth.actions';
import { LOGOUT } from 'store/modules/auth/auth.types';
import { setAuthToken } from 'store/modules/auth/auth.utils';
import 'styles/index.css';
import history from 'utils/history';

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
            {routes}
          </Layout>
        </Router>
      </Provider>
    </>
  );
};

export default App;
