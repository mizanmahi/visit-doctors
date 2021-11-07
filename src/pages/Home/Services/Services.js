import { Container, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';

// images
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
   {
      name: 'Fluoride Treatment',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: fluoride,
   },
   {
      name: 'Cavity Filling',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: cavity,
   },
   {
      name: 'Teeth Whitening',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: whitening,
   },
];

const Services = () => {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Container>
            <Box sx={{my: 10}}>
               <Typography variant='h6' component='div' color='success.main'>
                  Our Services
               </Typography>
               <Typography variant='h3' component='div' fontWeight='bold'>
                  Services we provide
               </Typography>
            </Box>
            <Grid
               container
               spacing={{ xs: 2, md: 3 }}
               columns={{ xs: 4, sm: 8, md: 12 }}
            >
               {services.map((service, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                     <Service service={service} />
                  </Grid>
               ))}
            </Grid>
         </Container>
      </Box>
   );
};

export default Services;
