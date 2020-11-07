import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';

interface AuthRouteProps extends RouteProps {
  component: any;
}

const AuthRoute: React.FC<AuthRouteProps> = props => {
  const auth = useSelector((state: RootState) => state.auth);

  // https://stackoverflow.com/a/56175010/10629172
  const { isAuthenticated, loading } = auth;
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <Spin tip="Checking authentication" size="large" className="spinner" />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default AuthRoute;
