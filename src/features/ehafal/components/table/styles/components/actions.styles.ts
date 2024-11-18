import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Add as AddIcon } from '@mui/icons-material';

export const StyledAddIcon = styled(AddIcon)({
    width: '20px',
    height: '20px',
    color: 'rgba(255, 255, 255, 0.7)'
});

export const CreateButtonText = styled('span')({
    fontFamily: 'inherit',
    fontSize: '0.9rem'
});

export const CreateButton = styled(motion.button)({
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textTransform: 'none',
    marginLeft: 'auto',
    padding: '6px 10px',
    borderRadius: 0,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
});