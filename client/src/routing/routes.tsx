import Home from 'pages/Home';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};
