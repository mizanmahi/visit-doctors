import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calender from '../../Shared/Calender';
import Appointments from '../Appointments/Appointments';

const DashBoardMain = () => {
   const [date, setDate] = useState(new Date());

   return (
      <Grid container>
         <Grid item xs={12} md={5}>
            <Calender date={date} setDate={setDate} />
         </Grid>
         <Grid item xs={12} md={7}>
            <Appointments date={date} />
         </Grid>
      </Grid>
   );
};

export default DashBoardMain;
