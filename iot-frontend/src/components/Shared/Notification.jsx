import { Snackbar, Alert } from '@mui/material';
import { useState, forwardRef, useImperativeHandle } from 'react';

const Notification = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('info');

    const showNotification = (message, severity = 'info') => {
        setMessage(message);
        setSeverity(severity);
        setOpen(true);
    };

    useImperativeHandle(ref, () => ({
        showNotification
    }));

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
        <Alert 
            onClose={handleClose} 
            severity={severity}
            sx={{ width: '100%' }}
        >
            {message}
        </Alert>
        </Snackbar>
    );
});

export default Notification;