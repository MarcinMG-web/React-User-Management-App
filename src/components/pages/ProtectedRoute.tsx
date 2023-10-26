import React, { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

type TProtectedRoute = {
  path: string;
  children: ReactNode;
};

export default function ProtectedRoute({ children, ...rest }: TProtectedRoute) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
