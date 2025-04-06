import { Box, Typography, Button, Avatar, Stack } from '@mui/material';
import { Error as ErrorIcon, Refresh as RefreshIcon } from '@mui/icons-material';

const ErrorState = ({ error, onRetry, title = 'Failed to load data',message = 'Please check your network connection and try again'}) => {
    return (
        <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '80vh',
        p: 3
        }}>
        <Avatar sx={{ 
            bgcolor: 'error.light', 
            color: 'error.dark',
            width: 64,
            height: 64,
            mb: 3
        }}>
            <ErrorIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5" color="error" gutterBottom align="center">
            {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom align="center">
            {error?.message || message}
        </Typography>
        {onRetry && (
            <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={onRetry}
            sx={{ mt: 2 }}
            >
            Retry
            </Button>
        )}
        </Box>
    );
};

export default ErrorState;