import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../Shared/Header';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
   const [date, setDate] = useState(new Date());

   return (
      <Box>
         <Header></Header>
         <AppointmentHeader date={date} setDate={setDate} />
         <AvailableAppointment date={date} />
      </Box>
   );
};

export default Appointment;
