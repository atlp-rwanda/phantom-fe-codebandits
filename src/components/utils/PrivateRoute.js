import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { authenticated, user } = useSelector((state) => state?.auth);
  const location = useLocation();
  return authenticated && user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: '/login',
        state: { from: location.pathname }
      }}
    />
  );
}

export default PrivateRoute;
