import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return <Route {...rest}>{user ? <Component /> : <Redirect to="login" />}</Route>;
};

export default PrivateRoutes;
