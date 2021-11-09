import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { axiAuth } from '../../../utils/axiosInstance';
import SnackBar from '../../Shared/SnackBar';

const MakeAdmin = () => {
   const [email, setEmail] = useState('');
   const [open, setOpen] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   const handleClose = () => {
      setOpen(false);
   };

   const handleAdminSubmit = (e) => {
      e.preventDefault();
      console.log('submitting');
      axiAuth
         .put('/users/admin', { email })
         .then((res) => {
            setErrorMessage('')
            setEmail('');
            if (res.data.modifiedCount) {
               setOpen(true);
            }
         })
         .catch((err) => {
            setErrorMessage('You are not allowed to make admin');
            setOpen(true);
            console.log(err.message);
         });
   };

   return (
      <Box>
         <Typography variant='h5' color='teal' sx={{ mb: 3 }}>
            Make Admin
         </Typography>
         {/* ====== form start ====== */}
         <Box
            component='form'
            onSubmit={handleAdminSubmit}
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <TextField
               label='Email'
               variant='standard'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <Button
               type='submit'
               variant='outlined'
               color='success'
               sx={{ ml: 2, py: 1 }}
            >
               Add
            </Button>
         </Box>
         {/* ====== form end ====== */}
         <SnackBar
            open={open}
            handleClose={handleClose}
            message={errorMessage ? errorMessage : 'Admin added successfully'}
            type={errorMessage ? 'error' : 'success'}
         />
      </Box>
   );
};

export default MakeAdmin;
