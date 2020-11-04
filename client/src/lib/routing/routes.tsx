import NotFound from 'lib/components/NotFound';
import Dashboard from 'sections/Dashboard';
import Home from 'sections/Home';
import Login from 'sections/Login';
import Signup from 'sections/Signup';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import About from 'sections/About';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};
