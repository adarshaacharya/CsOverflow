import NotFound from 'components/NotFound';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};
