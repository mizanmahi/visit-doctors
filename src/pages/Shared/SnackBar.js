import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const SnackBar = ({ open, handleClose, message, type, duration }) => {
   return (
      <Snackbar
         open={open}
         autoHideDuration={duration ? duration : 3000}
         onClose={handleClose}
      >
         <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
            {message}
         </Alert>
      </Snackbar>
   );
};

export default SnackBar;
