import {
   Avatar,
   Card,
   CardContent,
   CardMedia,
   Container,
   Grid,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import quoteBg from '../../../images/quotes.jpg';
import people1 from '../../../images/people-1.png';
import Slider from 'react-slick';

const Testimonials = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
   };

   return (
      <Container sx={{ mb: 10 }}>
         <Box
            sx={{
               backgroundImage: `url(${quoteBg})`,
               backgroundSize: '250px 150px',
               pb: 5,
               pt: 5,
               mb: 5,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'top -10% right 10%',
            }}
         >
            <Typography variant='h6' color='teal' sx={{ textAlign: 'left' }}>
               Testimonials
            </Typography>
            <Typography variant='h4' sx={{ textAlign: 'left' }}>
               What our patients <br /> says
            </Typography>
         </Box>
         <Box>
            <Slider {...settings}>
               <Card sx={{ minWidth: '250', mx: 1, border: 0, boxShadow: 0  }}>
                  <CardContent>
                     <Typography
                        variant='body1'
                        color='gray'
                        component='div'
                        sx={{ my: 5 }}
                     >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id odio unde ad porro animi, quibusdam velit
                        repellat quasi veritatis earum perspiciatis, minus non
                        delectus itaque?
                     </Typography>

                     <Box>
                        <Avatar
                           sx={{ mx: 'auto', height: 80, width: 80 }}
                           alt='Sharp'
                           src={people1}
                        />
                     </Box>
                  </CardContent>
               </Card>
               <Card sx={{ minWidth: '250', mx: 1, border: 0, boxShadow: 0  }}>
                  <CardContent>
                     <Typography
                        variant='body1'
                        color='gray'
                        component='div'
                        sx={{ my: 5 }}
                     >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id odio unde ad porro animi, quibusdam velit
                        repellat quasi veritatis earum perspiciatis, minus non
                        delectus itaque?
                     </Typography>

                     <Box>
                        <Avatar
                           sx={{ mx: 'auto', height: 80, width: 80 }}
                           alt='Sharp'
                           src={people1}
                        />
                     </Box>
                  </CardContent>
               </Card>
               <Card sx={{ minWidth: '250', mx: 1, border: 0, boxShadow: 0  }}>
                  <CardContent>
                     <Typography
                        variant='body1'
                        color='gray'
                        component='div'
                        sx={{ my: 5 }}
                     >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id odio unde ad porro animi, quibusdam velit
                        repellat quasi veritatis earum perspiciatis, minus non
                        delectus itaque?
                     </Typography>

                     <Box>
                        <Avatar
                           sx={{ mx: 'auto', height: 80, width: 80 }}
                           alt='Sharp'
                           src={people1}
                        />
                     </Box>
                  </CardContent>
               </Card>
               <Card sx={{ minWidth: '250', mx: 1, border: 0, boxShadow: 0  }}>
                  <CardContent>
                     <Typography
                        variant='body1'
                        color='gray'
                        component='div'
                        sx={{ my: 5 }}
                     >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id odio unde ad porro animi, quibusdam velit
                        repellat quasi veritatis earum perspiciatis, minus non
                        delectus itaque?
                     </Typography>

                     <Box>
                        <Avatar
                           sx={{ mx: 'auto', height: 80, width: 80 }}
                           alt='Sharp'
                           src={people1}
                        />
                     </Box>
                  </CardContent>
               </Card>
               <Card sx={{ minWidth: '250', mx: 1, border: 0, boxShadow: 0  }}>
                  <CardContent>
                     <Typography
                        variant='body1'
                        color='gray'
                        component='div'
                        sx={{ my: 5 }}
                     >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id odio unde ad porro animi, quibusdam velit
                        repellat quasi veritatis earum perspiciatis, minus non
                        delectus itaque?
                     </Typography>

                     <Box>
                        <Avatar
                           sx={{ mx: 'auto', height: 80, width: 80 }}
                           alt='Sharp'
                           src={people1}
                        />
                     </Box>
                  </CardContent>
               </Card>
               <Card sx={{ minWidth: '250', mx: 1, border: 0, boxShadow: 0  }}>
                  <CardContent>
                     <Typography
                        variant='body1'
                        color='gray'
                        component='div'
                        sx={{ my: 5 }}
                     >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id odio unde ad porro animi, quibusdam velit
                        repellat quasi veritatis earum perspiciatis, minus non
                        delectus itaque?
                     </Typography>

                     <Box>
                        <Avatar
                           sx={{ mx: 'auto', height: 80, width: 80 }}
                           alt='Sharp'
                           src={people1}
                        />
                     </Box>
                  </CardContent>
               </Card>
            </Slider>
         </Box>
      </Container>
   );
};

export default Testimonials;
