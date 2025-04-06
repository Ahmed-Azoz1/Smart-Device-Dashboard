import { Box, Stack, Typography, CircularProgress } from '@mui/material';

const LoadingState = ({ message = 'Loading...', size = 60, thickness = 5 }) => {
    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '80vh' 
        }}>
        <Stack spacing={3} alignItems="center">
            <CircularProgress size={size} thickness={thickness} />
            <Typography variant="h6" color="textSecondary">
            {message}
            </Typography>
        </Stack>
        </Box>
    );
};

export default LoadingState;