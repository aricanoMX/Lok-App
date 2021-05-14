import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyles';

import { LOGIN, HOME, ALBUM, LOGOUT, ALBUM_DETAILS } from 'routes/paths';

import Login from 'pages/Login/Login';
import Logout from 'pages/Logout/Logout';
import Register from 'pages/Register/RegisterEmail';
import Home from 'pages/Home/Home';
import Album from 'pages/Album/Album';
import AlbumDetails from 'pages/AlbumDetails/AlbumDetails';
import NotFound from 'pages/NotFound';

import PrivateRoutes from 'routes/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes/PublicRoutes';

import AuthProvider from 'store/context/authContext';
import { UserProvider } from 'store/context/userContext';

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
            <PrivateRoutes exact path={HOME} component={Home} />
            <PrivateRoutes exact path={ALBUM} component={Album} />
            <PrivateRoutes exact path={ALBUM_DETAILS} component={AlbumDetails} />
            <PrivateRoutes path={LOGOUT} component={Logout} />
          </UserProvider>
          <Route path="*" component={NotFound} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
