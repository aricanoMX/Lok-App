import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoutes;
