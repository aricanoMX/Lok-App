import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyles';

import { LOGIN, HOME, ALBUM, LOGOUT } from 'routes/paths';

import Login from 'pages/Login/Login';
import Logout from 'pages/Logout/Logout';
import Register from 'pages/Register/RegisterEmail';
import Home from 'pages/Home/Home';
import Album from 'pages/Album/Album';
import NotFound from 'pages/NotFound';

import PrivateRoutes from 'routes/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes/PublicRoutes';

import AuthProvider from 'store/context/authContext';
import { UserProvider } from 'store/context/userContext';
import { PostsProvider } from 'store/context/postsContext';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Switch>
          <PublicRoutes exact path={LOGIN} component={Login} />
          <PublicRoutes exact path="/signin" component={Login}>
            <Redirect to={LOGIN} />
          </PublicRoutes>
          <PublicRoutes exact path="/register" component={Register} />
          <UserProvider>
            <PostsProvider>
              <PrivateRoutes exact path={HOME} component={Home} />
            </PostsProvider>
            <PrivateRoutes exact path={ALBUM} component={Album} />
            <PrivateRoutes path={LOGOUT} component={Logout} />
          </UserProvider>
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
