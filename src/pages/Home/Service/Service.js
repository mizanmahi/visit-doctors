import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const Service = ({ service }) => {
   const { name, description, img } = service;
   return (
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
         <CardMedia
            component='img'
            sx={{ width: 'auto', height: 120, mx: 'auto' }}
            image={img}
            alt='Paella dish'
         />
         <CardContent>
            <Typography variant='h5' component='div' sx={{my: 5}}>
               {name}
            </Typography>

            <Typography variant='body1' color='text.secondary'>{description}</Typography>
         </CardContent>
      </Card>
   );
};

export default Service;
