import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

export const ToolbarContainer = styled(motion.div)({
    width: '95%',
    margin: '0 auto 1rem auto',
    padding: '1rem',
    background: '#0a0e17',
    border: '1px solid rgba(255, 255, 255, 0.1)',
});