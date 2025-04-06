import { Stack, Typography, IconButton, Tooltip } from '@mui/material';
import { TableView as TableIcon, Refresh as RefreshIcon } from '@mui/icons-material';

const DashboardHeader = ({ title, onRefresh }) => {
    return (
        <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            justifyContent="space-between" 
            alignItems={{ xs: 'flex-start', md: 'center' }} 
            spacing={2}
            sx={{ mb: 3 }}
        >
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.dark' }}>
            <TableIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            {title}
        </Typography>
        
        <Stack direction="row" spacing={1}>
            <Tooltip title="Refresh data">
            <IconButton color="primary" onClick={onRefresh}>
                <RefreshIcon />
            </IconButton>
            </Tooltip>
        </Stack>
        </Stack>
    );
};

export default DashboardHeader;