import { Box, Typography, Avatar, Button } from '@mui/material';
import { Info as InfoIcon, Add as AddIcon } from '@mui/icons-material';

const EmptyState = ({ 
    title = 'No data found', 
    message = 'There is currently no data available',
    actionText,
    onAction
    }) => {
    return (
        <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '80vh',
        p: 3,
        textAlign: 'center'
        }}>
        <Avatar sx={{ 
            bgcolor: 'info.light', 
            color: 'info.dark',
            width: 64,
            height: 64,
            mb: 3
        }}>
            <InfoIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5" gutterBottom>
            {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            {message}
        </Typography>
        {actionText && onAction && (
            <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onAction}
            >
            {actionText}
            </Button>
        )}
        </Box>
    );
};

export default EmptyState;