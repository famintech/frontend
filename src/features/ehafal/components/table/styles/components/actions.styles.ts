import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const CreateButton = styled(motion.button)({
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textTransform: 'none',
    marginLeft: 'auto',
    padding: '6px 16px',
    borderRadius: 0,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
});