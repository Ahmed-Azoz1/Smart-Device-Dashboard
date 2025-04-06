import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormInput = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.shape.borderRadius * 2,
        '& fieldset': {
        borderColor: theme.palette.grey[300],
        },
        '&:hover fieldset': {
        borderColor: theme.palette.primary.light,
        },
        '&.Mui-focused fieldset': {
        borderWidth: 1,
        borderColor: theme.palette.primary.main,
        },
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.text.secondary,
        '&.Mui-focused': {
        color: theme.palette.primary.main,
        }
    }
}));

export default FormInput;