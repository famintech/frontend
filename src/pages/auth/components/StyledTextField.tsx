import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    backgroundColor: 'rgba(10, 14, 23, 0.5)',
    backdropFilter: 'blur(8px)',
    '& fieldset': {
      borderColor: 'rgba(15, 180, 228, 0.2)',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(15, 180, 228, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(230, 232, 236, 0.7)',
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.primary,
  }
}));