import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calander = ({date, setDate}) => {

   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <StaticDatePicker
            orientation='landscape'
            displayStaticWrapperAs='desktop'
            openTo='day'
            clearable
            value={date}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
               setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
         />
      </LocalizationProvider>
   );
};

export default Calander;
