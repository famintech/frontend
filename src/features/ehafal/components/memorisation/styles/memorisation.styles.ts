import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const MemorizationContainer = styled('div')({
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
});

export const HeaderContainer = styled(motion.div)({
    padding: '1rem',
    background: '#0a0e17',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
});

export const Title = styled('h1')({
    color: '#fff',
    fontSize: '1.5rem',
    margin: 0,
    fontWeight: 'bold'
});

export const Scope = styled('div')({
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
});

export const ProgressSection = styled('div')({
    marginTop: '1rem',
    padding: '1rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
});