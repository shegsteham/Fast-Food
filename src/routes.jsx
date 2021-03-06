import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import HomePageRedirect from './utilities/HomePageRedirect';

import {
  LandingPage,
  ErrorPage,
  LoginPage,
  SignupPage,
  MenuPage,
  CartPage
} from './views';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePageRedirect(LandingPage)} />
      <Route exact path="/home" component={HomePageRedirect(LandingPage)} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/menu" component={HomePageRedirect(MenuPage)} />
      <Route exact path="/cart" component={HomePageRedirect(CartPage)} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default routes;
