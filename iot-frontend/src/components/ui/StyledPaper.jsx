import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 1.5,
    boxShadow: theme.shadows[3],
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        boxShadow: theme.shadows[6],
        transform: 'translateY(-2px)'
    },
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
}));

export default StyledPaper;