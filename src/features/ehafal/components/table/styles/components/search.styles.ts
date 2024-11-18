import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import { motion } from 'framer-motion';

export const SearchContainer = styled(motion.div)({
    display: 'flex',
    alignItems: 'center',
});

export const SearchInput = styled(InputBase)({
    color: '#fff',
    width: '300px',
    '& .MuiInputBase-input': {
        padding: '8px 12px',
        fontSize: '0.9rem',
        transition: 'all 0.2s ease',
        '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.5)',
            opacity: 1,
        },
    },
    '& .MuiInputAdornment-root': {
        marginLeft: '12px',
    },
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.2s ease',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    },
});