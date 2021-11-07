import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AppointMedal from '../AppointMedal/AppointMedal';

const Booking = (props) => {
   const { name, space, time, date } = props;

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <>
         <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ px: 1, py: 4 }}>
               <Typography
                  variant='h4'
                  color='teal'
                  sx={{ fontWeight: 'bold' }}
               >
                  {name}
               </Typography>
               <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                  {time}
               </Typography>
               <Typography variant='body2'>{space}</Typography>
               <Button
                  variant='contained'
                  sx={{ background: 'teal' }}
                  onClick={handleOpen}
               >
                  Book Appointment
               </Button>
            </Paper>
         </Grid>
         <AppointMedal {...props} date={date} open={open} handleClose={handleClose} />
      </>
   );
};

export default Booking;
