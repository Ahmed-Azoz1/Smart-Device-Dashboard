import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const DashboardCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.shape.borderRadius * 1.5,
    boxShadow: theme.shadows[2],
    transition: 'all 0.3s ease',
    '&:hover': {
        boxShadow: theme.shadows[4],
        transform: 'translateY(-2px)'
    },
    backgroundColor: theme.palette.background.paper,
}));

export default DashboardCard;