import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children, ...rest }) => {
   const { user, userLoading } = useAuth();

   if(userLoading) return <CircularProgress sx={{ mt: 15}} />

   return (
      <Route
         {...rest}
         render={({ location }) =>
            user ? (
               children
            ) : (
               <Redirect
                  to={{ pathname: '/login', state: { from: location } }}
               />
            )
         }
      ></Route>
   );
};

export default ProtectedRoute;
