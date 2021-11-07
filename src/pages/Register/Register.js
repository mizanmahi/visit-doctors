import {
   Container,
   Grid,
   TextField,
   Typography,
   Button,
   CircularProgress,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import loginImage from '../../images/login.png';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SnackBar from '../Shared/SnackBar';

const Register = () => {
   const { user, registerWithEmailAndPassword, userLoading, authError } =
      useAuth();
   const history = useHistory();
   const [open, setOpen] = useState(false);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const handleRegister = async ({
      userName,
      email,
      password,
      confirmPassword,
   }) => {
      if (password !== confirmPassword) {
         alert("Password didn't match");
         return;
      }

      try {
         await registerWithEmailAndPassword(userName, email, password, history);
         setOpen(true);
      } catch (error) {
         console.log(error.message);
      }

      reset();
   };

   //@ Snackbar close handler
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpen(false);
   };

   console.log({ formErrorsOfRegister: errors });

   return (
      <Container
         sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}
      >
         <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
               <Box
                  component='form'
                  onSubmit={handleSubmit(handleRegister)}
                  sx={{ bgcolor: '#f7f7f7', px: 1, py: 10 }}
               >
                  <Typography variant='h5' align='center'>
                     Register
                  </Typography>
                  <TextField
                     {...register('userName', { required: true })}
                     variant='standard'
                     sx={{ width: '60%', mb: 2 }}
                     label='user name'
                  />
                  <TextField
                     {...register('email', {
                        required: { value: true, message: 'Email is required' },
                     })}
                     variant='standard'
                     sx={{ width: '60%', mb: 2 }}
                     label='email'
                     type='email'
                     error={errors.email ? true : false}
                     helperText={errors.email ? errors.email.message : ''}
                     required
                  />
                  <TextField
                     {...register('password')}
                     variant='standard'
                     sx={{ width: '60%', mb: 2 }}
                     label='password'
                     type='password'
                  />
                  <TextField
                     {...register('confirmPassword')}
                     variant='standard'
                     sx={{ width: '60%', mb: 2 }}
                     label='confirm password'
                     type='password'
                  />
                  <Button
                     type='submit'
                     variant='contained'
                     sx={{ background: 'teal', width: '60%', mt: 3 }}
                  >
                     {userLoading ? (
                        <CircularProgress color='common' size='1.5rem' />
                     ) : (
                        'Register'
                     )}
                  </Button>
                  <NavLink
                     to='/login'
                     style={{ textDecoration: 'none', display: 'block' }}
                  >
                     <Button variant='text'>Have an account?</Button>
                  </NavLink>
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

         {/* snackbar for notification */}
         <SnackBar
            open={open}
            handleClose={handleClose}
            message={authError ? authError : 'User created successfully!'}
            type={authError ? 'warning' : 'success'}
         />
      </Container>
   );
};

export default Register;
