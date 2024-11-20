import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';

export const ItemsContainer = styled('div')({
    maxHeight: '600px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem',
    padding: '0.5rem',
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

export const ItemCard = styled(motion.div)({
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1rem',
});

export const ItemHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
});

export const ItemTitle = styled('h3')({
    color: '#fff',
    margin: 0,
    fontSize: '1rem',
});

export const CheckboxesContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
});

export const CheckboxWrapper = styled('div')({
    position: 'relative',
    width: '24px',
    height: '24px',
});

export const StyledIconButton = styled(IconButton)({
    color: 'rgba(255, 255, 255, 0.7)',
    padding: '4px',
    '&:hover': {
        color: 'rgba(255, 255, 255, 0.9)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
});