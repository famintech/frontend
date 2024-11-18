import { styled } from '@mui/material/styles';
import { Button, Checkbox, TextField } from '@mui/material';
import { motion } from 'framer-motion';

export const FilterContainer = styled(motion.div)({
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
});

export const FilterButton = styled(Button)({
    color: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
});

export const DropdownContainer = styled(motion.div)({
    position: 'absolute',
    top: '100%',
    marginTop: '4px',
    backgroundColor: '#0a0e17',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    padding: '8px',
    zIndex: 1000,
    minWidth: '200px',
});

export const CheckboxList = styled('div')({
    maxHeight: '200px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '6px',
    },
    '&::-webkit-scrollbar-track': {
        background: 'rgba(255, 255, 255, 0.05)',
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '3px',
    },
});

export const FilterSearch = styled(TextField)({
    marginBottom: '8px',
    width: '100%',
    '& .MuiInputBase-root': {
        color: '#fff',
        fontSize: '0.875rem',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
        },
    },
});

export const CheckboxItem = styled('div')({
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    padding: '4px 0',
});

export const StyledCheckbox = styled(Checkbox)({
    color: 'rgba(255, 255, 255, 0.5)',
    '&.Mui-checked': {
        color: '#fff',
    },
});