import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Power as StatusIcon } from '@mui/icons-material';

const StatusBadge = styled(Chip)(({ theme, status }) => ({
    fontWeight: 600,
    textTransform: 'uppercase',
    backgroundColor: status === 'on' ? theme.palette.success.light : theme.palette.error.light,
    color: status === 'on' ? theme.palette.success.dark : theme.palette.error.dark,
    '& .MuiChip-icon': {
        color: status === 'on' ? theme.palette.success.dark : theme.palette.error.dark,
    }
    }));

const StatusIndicator = ({ status }) => {
    return (
        <StatusBadge 
        status={status}
        icon={<StatusIcon sx={{ fontSize: '14px' }} />}
        label={status} 
        />
    );
};

export default StatusIndicator;