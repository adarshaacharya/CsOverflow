import NotFound from 'lib/components/NotFound';
import Home from 'sections/Home';
import Login from 'sections/Login';
import Signup from 'sections/Signup';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import About from 'sections/About';
import User from 'sections/User';
import Users from 'sections/Users';
import Tags from 'sections/Tags';
import Posts from 'sections/Posts';
import Post from 'sections/Post';
import Ask from 'sections/Ask';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <AuthRoute exact path="/users/:id" component={User} />
      <AuthRoute exact path="/users" component={Users} />
      <AuthRoute exact path="/posts" component={Posts} />
      <AuthRoute exact path="/posts/:id" component={Post} />
      <AuthRoute exact path="/ask" component={Ask} />
      <AuthRoute exact path="/tags" component={Tags} />
      <Route component={NotFound} />
    </Switch>
  );
};
