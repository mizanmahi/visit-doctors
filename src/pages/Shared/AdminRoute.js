import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
   const { user, userLoading, admin } = useAuth();

   if (userLoading) return <CircularProgress sx={{ mt: 15 }} />;

   return (
      <Route
         {...rest}
         render={({ location }) =>
            user && admin ? (
               children
            ) : (
               <Redirect
                  to={{ pathname: '/', state: { from: location } }}
               />
            )
         }
      ></Route>
   );
};

export default AdminRoute;
