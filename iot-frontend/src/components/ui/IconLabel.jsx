import { Box, Typography } from '@mui/material';

const IconLabel = ({ icon, label, color = 'primary' }) => {
    return (
        <Box display="flex" alignItems="center" gap={1}>
        {icon}
        <Typography variant="body1" color={`${color}.main`}>
            {label}
        </Typography>
        </Box>
    );
};

export default IconLabel;