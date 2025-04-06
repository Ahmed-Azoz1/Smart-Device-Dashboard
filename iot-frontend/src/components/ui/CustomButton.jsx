import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    textTransform: 'none',
    fontWeight: 600,
    padding: theme.spacing(1.5, 3),
    boxShadow: 'none',
    '&:hover': {
        boxShadow: 'none',
    },
    '&.Mui-disabled': {
        opacity: 0.7,
    }
}));

export default CustomButton;