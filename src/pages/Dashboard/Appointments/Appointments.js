import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { axiosInstance } from '../../../utils/axiosInstance';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({date}) => {
   const { user } = useAuth();
   const [appointments, setAppointments] = useState([]);


   useEffect(() => {
      axiosInstance
         .get(`bookings/?email=${user.email}&&date=${date.toLocaleDateString()}`)
         .then(({ data }) => {
            setAppointments(data);
            console.log(data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [date, user.email]);

   return (
      <Box>
         <Typography variant='body1' color='teal' sx={{mb: 2}}>
            Appointments {appointments.length}
         </Typography>

         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label='simple table'>
               <TableHead>
                  <TableRow>
                     <TableCell>Name</TableCell>
                     <TableCell align='center'>Service</TableCell>
                     <TableCell align='center'>Time</TableCell>
                     <TableCell align='right'>Action</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {appointments.map((row) => (
                     <TableRow
                        key={row._id}
                        sx={{
                           '&:last-child td, &:last-child th': { border: 0 },
                        }}
                     >
                        <TableCell component='th' scope='row'>
                           {row.patientName}
                        </TableCell>
                        <TableCell align='center'>{row.serviceName}</TableCell>
                        <TableCell align='center'>{row.time}</TableCell>
                        <TableCell align='right'>Delete</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   );
};

export default Appointments;
