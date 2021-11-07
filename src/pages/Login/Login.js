import { Container, Grid, TextField, Typography, Button, Divider } from '@mui/material';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import loginImage from '../../images/login.png';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
   const { loginWithEmailAndPassword, userLoading, loginWithGoogle } = useAuth();

   const location = useLocation();
   const history = useHistory();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const handleLogin = async ({ email, password }) => {
      await loginWithEmailAndPassword(email, password, location, history);
      reset();
   };

   const handleGoogleLogin = async () => {
      await loginWithGoogle(location, history)
   }

   console.log({ formErrorOfLogin: errors });

   return (
      <Container
         sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}
      >
         <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
               <Box
                  component='form'
                  onSubmit={handleSubmit(handleLogin)}
                  sx={{ bgcolor: '#f7f7f7', px: 1, py: 10 }}
               >
                  <Typography variant='h5' align='center'>
                     Login
                  </Typography>
                  <TextField
                     {...register('email')}
                     variant='standard'
                     sx={{ width: '60%', mb: 2 }}
                     label='email'
                     type='email'
                  />
                  <TextField
                     {...register('password')}
                     variant='standard'
                     sx={{ width: '60%', mb: 2 }}
                     label='password'
                     type='password'
                  />
                  <Button
                     type='submit'
                     variant='contained'
                     sx={{ background: 'teal', width: '60%', mt: 3, py: 1.2 }}
                  >
                     {userLoading ? (
                        <CircularProgress color='common' size='1.5rem' />
                     ) : (
                        'Submit'
                     )}
                  </Button>
                  <NavLink
                     to='/register'
                     style={{ textDecoration: 'none', display: 'block' }}
                  >
                     <Button variant='text'>New User?</Button>
                  </NavLink>
                  <Divider sx={{width: '50%', mx: 'auto', mt: 2}}/>
                  <Button
                     onClick={handleGoogleLogin}
                     variant='contained'
                     sx={{ background: 'danger', width: '40%', minWidth: '15rem', mt: 3, py: 1.2 }}
                  >
                     Continue with Google
                  </Button>
               </Box>
            </Grid>
            <Grid item xs={12} md={6}>
               <img
                  src={loginImage}
                  alt='login cover'
                  style={{ width: '100%' }}
               />
            </Grid>
         </Grid>
      </Container>
   );
};

export default Login;
