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
import TagPosts from 'sections/TagPosts';
import { PostEdit } from 'sections/Post/components';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <AuthRoute exact path="/users/:id" component={User} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/posts" component={Posts} />
      <AuthRoute exact path="/posts/:id" component={Post} />
      <AuthRoute exact path="/posts/:id/edit" component={PostEdit} />
      <AuthRoute exact path="/ask" component={Ask} />
      <Route exact path="/tags" component={Tags} />
      <Route exact path="/tags/:tagname" component={TagPosts} />
      <Route component={NotFound} />
    </Switch>
  );
};
