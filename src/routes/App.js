import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyles';

import Login from 'pages/Login/Login';
import Register from 'pages/Register/RegisterEmail';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={Login}>
          <Redirect to="/login" />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route paths="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
