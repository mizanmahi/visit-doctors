import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Calender from '../../Shared/Calender';

const AppointmentHeader = ({ date, setDate }) => {
   return (
      <Container sx={{ my: 8 }}>
         <Box sx={{ flexGrow: 1, backgroundImage: `ur(${bg})`, }} >
            <Grid container spacing={2}>
               <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
               >
                  <div>
                     <Typography
                        variant='h5'
                        color='teal'
                        textAlign='left '
                        sx={{ fontWeight: 'bold' }}
                     >
                        Appointment
                     </Typography>
                     <Calender date={date} setDate={setDate} />
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <img src={chair} alt='chair' style={{ width: '100%' }} />
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default AppointmentHeader;
