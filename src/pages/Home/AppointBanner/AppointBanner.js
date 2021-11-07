import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const background = {
   backgroundImage: `linear-gradient(
    to right, 
    rgba(54, 55, 82, 0.9 ), 
    rgba(54, 55, 82, 0.9 )), url(${bg})`,
};

const AppointBanner = () => {
   return (
      <Box sx={{ flexGrow: 1, my: 20, px: 2 }} style={background}>
         <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
               <img
                  src={doctor}
                  alt=''
                  style={{ width: 450, marginTop: '-110px' }}
               />
            </Grid>
            <Grid
               item
               xs={12}
               sx={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'flex-start',
               }}
               md={6}
            >
               <Typography
                  variant='body1'
                  color='teal'
                  sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
               >
                  Appointment
               </Typography>
          
                  <Typography
                     variant='h4'
                     color='success.main'
                     sx={{ color: '#fff', fontWeight: 'bold', mb: 2 }}
                  >
                     Make an Appointment Today
                  </Typography>
                  <Typography
                     variant='body2'
                     color='success.main'
                     sx={{ color: '#e0e0e0', fontWeight: 'bold' }}
                  >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Deleniti magnam temporibus eos alias quas? Voluptates!
                  </Typography>
           
               <Button variant='contained' sx={{ background: 'teal' }}>
                  Learn More
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
};

export default AppointBanner;
