import { Paper, TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const MotionComponent = motion.tr;

export const SciFiTable = styled(Paper)(({ }) => ({
    width: '95%',
    margin: '0 auto',
    borderRadius: 0,
    background: 'none',
    '& .MuiTableContainer-root': {
        background: 'transparent',
    },
    '& .MuiTable-root': {
        borderCollapse: 'collapse',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    }
}));

export const HeaderCell = styled(TableCell)(({ }) => ({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    padding: '16px 8px',
    background: '#0a0e17',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderTop: 'none',
    '&:first-of-type': {
        borderLeft: 'none',
    },
    '&:last-of-type': {
        borderRight: 'none',
    }
}));

export const DataCell = styled(TableCell)(({ }) => ({
    color: '#fff',
    padding: '8px 8px',
    background: '#0a1d29',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.2s ease-in-out',
    '&:first-of-type': {
        borderLeft: 'none',
    },
    '&:last-of-type': {
        borderRight: 'none',
    }
}));

export const TableRowStyled = styled(TableRow)({
    '&:hover td': {
        background: 'rgba(10, 29, 41, 0.8)',
    },
    '&:last-child td': {
        borderBottom: 'none',
    }
});

export const MotionTableRow = styled(MotionComponent)({
    '&:hover td': {
        background: 'rgba(10, 29, 41, 0.8)',
    },
    '&:last-child td': {
        borderBottom: 'none',
    }
});

// Animation variants remain the same
export const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};