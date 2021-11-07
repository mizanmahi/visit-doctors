import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const verticalCenter = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: '500px',
};

const Intro = () => {
   return (
      <Container sx={{ flexGrow: 1, background: `url(${bg})`, mt: 5 }}>
         <Grid container spacing={2}>
            <Grid
               item
               xs={12}
               md={5}
               sx={{ textAlign: 'left', ...verticalCenter }}
            >
               <Box>
                  <Typography variant='h2'>
                     Your new smile <br />
                     Starts here
                  </Typography>
                  <Typography variant='body1' color='gray' sx={{my: 3}}>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Ex voluptates quos corrupti, quasi illo tempora libero
                     architecto ad vero laborum!
                  </Typography>
                  <Button variant='contained' sx={{ background: 'teal' }}>
                     Get appointment
                  </Button>
               </Box>
            </Grid>
            <Grid item xs={12} md={7} sx={{ ...verticalCenter }}>
               <img src={chair} alt='' style={{ width: 450 }} />
            </Grid>
         </Grid>
      </Container>
   );
};

export default Intro;
