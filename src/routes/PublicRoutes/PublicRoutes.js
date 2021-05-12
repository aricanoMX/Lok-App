import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';

const PublicRoutes = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => (!isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />)}
    />
  );
};

export default PublicRoutes;
