import { Typography, Divider, Box } from '@mui/material';

const SectionHeader = ({ title, subtitle, action }) => {
    return (
        <Box mb={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
            <Typography variant="h5" fontWeight="bold">
                {title}
            </Typography>
            {subtitle && (
                <Typography variant="body2" color="textSecondary">
                {subtitle}
                </Typography>
            )}
            </Box>
            {action && <Box>{action}</Box>}
        </Box>
        <Divider sx={{ mt: 2 }} />
        </Box>
    );
};

export default SectionHeader;