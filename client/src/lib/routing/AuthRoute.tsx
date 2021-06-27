import { Spin } from 'antd';
import { useAppSelector } from 'lib/hooks';
import { displayWarningMessage } from 'lib/utils';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface AuthRouteProps extends RouteProps {
  component: any;
}

const AuthRoute: React.FC<AuthRouteProps> = props => {
  const auth = useAppSelector(state => state.auth);

  // https://stackoverflow.com/a/56175010/10629172
  const { isAuthenticated, loading } = auth;
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <Spin
            tip="Launching CS Overflow"
            size="large"
            className="spinner"
            style={{ display: 'flex', flexDirection: 'column' }}
          />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <>
            {displayWarningMessage('You must login to view this page.')}
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          </>
        )
      }
    />
  );
};

export default AuthRoute;
