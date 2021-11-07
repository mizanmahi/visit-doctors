import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../../utils/axiosInstance';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: 1,
   boxShadow: 24,
   p: 4,
};

const AppointMedal = ({ open, handleClose, name, time, date }) => {
   const { user } = useAuth();

   const { register, handleSubmit, reset } = useForm();

   const handleBookingSubmit = async (bookingFormData) => {
      const appointBooking = {
         ...bookingFormData,
         date: date.toLocaleDateString(),
         serviceName: name,
      };

      const { data } = await axiosInstance.post('/bookings', appointBooking);
      console.log(data);
      reset();
      handleClose();
   };

   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby='modal-modal-title'
         aria-describedby='modal-modal-description'
      >
         <Box sx={style}>
            <Box
               component='form'
               onSubmit={handleSubmit(handleBookingSubmit)}
               sx={{ width: '95%', mx: 'auto' }}
            >
               <Typography
                  id='modal-modal-title'
                  variant='h6'
                  component='h2'
                  color='teal'
                  sx={{ mb: 2 }}
               >
                  {name}
               </Typography>

               <TextField
                  size='small'
                  label='time'
                  variant='outlined'
                  sx={{ width: '100%', mb: 2 }}
                  defaultValue={time}
                  readOnly
                  {...register('time')}
               />

               <TextField
                  size='small'
                  label='name'
                  variant='outlined'
                  sx={{ width: '100%', mb: 2 }}
                  defaultValue={user?.displayName}
                  {...register('patientName', { required: true })}
               />
               <TextField
                  size='small'
                  label='email'
                  variant='outlined'
                  sx={{ width: '100%', mb: 2 }}
                  defaultValue={user?.email}
                  {...register('patientEmail', { required: true })}
               />
               <TextField
                  size='small'
                  label='phone'
                  variant='outlined'
                  sx={{ width: '100%', mb: 2 }}
                  {...register('phone', { required: true })}
               />
               <TextField
                  size='small'
                  label='date'
                  variant='outlined'
                  sx={{ width: '100%', mb: 2 }}
                  defaultValue={date.toDateString()}
                  {...register('date')}
               />
               <Button
                  type='submit'
                  variant='contained'
                  sx={{ background: 'teal', marginLeft: 'auto' }}
               >
                  Book
               </Button>
            </Box>
         </Box>
      </Modal>
   );
};

export default AppointMedal;
