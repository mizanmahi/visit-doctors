import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DashBoardMain from './DashBoardMain/DashBoardMain';
import { useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import { useAuth } from '../../hooks/useAuth';
import AdminRoute from '../Shared/AdminRoute';
import AddDoctor from './AddDoctor/AddDoctor';

const drawerWidth = 240;

const Dashboard = (props) => {
   // this is needed for nesting routing
   const { path, url } = useRouteMatch();
   const { admin, user } = useAuth();
      
   console.log({path, url});

   const { window } = props;
   const [mobileOpen, setMobileOpen] = useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const drawer = (
      <div>
         <Toolbar />

         <Divider />
         <Link to='/appointment' style={{ textDecoration: 'none' }}>
            <Button variant='contained' sx={{ mt: 2, bgcolor: 'teal' }}>
               Book Appointment
            </Button>
         </Link>
         <Link to={`${url}`} style={{ textDecoration: 'none' }}>
            <Button variant='contained' sx={{ mt: 2, bgcolor: 'teal' }}>
               Dashboard
            </Button>
         </Link>
         {admin && (
            <Box>
               <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}>
                  <Button variant='contained' sx={{ mt: 2, bgcolor: 'teal' }}>
                     Make Admin
                  </Button>
               </Link>
               <Link to={`${url}/addDoctor`} style={{ textDecoration: 'none' }}>
                  <Button variant='contained' sx={{ mt: 2, bgcolor: 'teal' }}>
                     Add Doctor
                  </Button>
               </Link>
            </Box>
         )}
         <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
               <ListItem button key={text}>
                  <ListItemIcon>
                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
               </ListItem>
            ))}
         </List>
      </div>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar
            position='fixed'
            sx={{
               width: {
                  sm: `calc(100% - ${drawerWidth}px)`,
                  background: 'teal',
               },
               ml: { sm: `${drawerWidth}px` },
            }}
         >
            <Toolbar>
               <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: 1,
                  }}
               >
                  <Typography variant='h6' noWrap component='div'>
                     APPOINTMENTS
                  </Typography>
                  <Typography variant='h6' noWrap component='div'>
                     {user?.displayName}
                  </Typography>
               </Box>
            </Toolbar>
         </AppBar>
         <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label='mailbox folders'
         >
            <Drawer
               container={container}
               variant='temporary'
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>

            {/* ========================================== */}

            <Drawer
               variant='permanent'
               sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>
         <Box
            component='main'
            sx={{
               flexGrow: 1,
               p: 3,
               width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
         >
            <Toolbar />

            <Switch>
               <Route exact path={path}>
                  <DashBoardMain />
               </Route>
               <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin />
               </AdminRoute>
               <AdminRoute path={`${path}/addDoctor`}>
                  <AddDoctor />
               </AdminRoute>
            </Switch>
         </Box>
      </Box>
   );
};

export default Dashboard;
