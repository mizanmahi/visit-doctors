import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
   const { user, logoutUser } = useAuth();

   const handleLogout = () => {
      logoutUser();
   };

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position='static'>
            <Toolbar>
               <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  Doctors Portal
               </Typography>

               <Link
                  to='/appointment'
                  style={{ textDecoration: 'none', marginRight: '16px' }}
               >
                  <Button sx={{ color: '#fff' }} variant='standard'>
                     Appointment
                  </Button>
               </Link>

               {user ? (
                  <>
                     <Link
                        to='/dashboard'
                        style={{ textDecoration: 'none', marginRight: '16px' }}
                     >
                        <Button sx={{ color: '#fff' }} variant='standard'>
                           Dashboard
                        </Button>
                     </Link>
                     <Typography variant='body1' sx={{ mr: 2 }}>
                        {user?.displayName}
                     </Typography>
                     <Button variant='standard' onClick={handleLogout}>
                        <LogoutIcon />
                     </Button>
                  </>
               ) : (
                  <NavLink
                     to='/login'
                     style={{ textDecoration: 'none', marginRight: '16px' }}
                  >
                     <Button color='primary' variant='contained'>
                        Login
                     </Button>
                  </NavLink>
               )}
            </Toolbar>
         </AppBar>
      </Box>
   );
};

export default Header;
