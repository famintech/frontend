import { Paper, TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Create a motion component type for TableRow
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
        borderCollapse: 'separate',
        borderSpacing: '0 2px',
    }
}));

export const HeaderCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '0.9rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    borderTop: 'none',
    padding: '16px 8px',
    background: 'rgba(0, 0, 0, 0.2)',
}));

export const DataCell = styled(TableCell)(({ }) => ({
    color: '#fff',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    borderTop: 'none',
    padding: '16px 8px',
    background: 'rgba(0, 0, 0, 0.2)',
}));

export const TableRowStyled = styled(TableRow)({
    '&:hover': {
        '& td': {
            background: 'rgba(0, 0, 0, 0.3)',
        }
    }
});

// Export the motion component directly
export const MotionTableRow = styled(MotionComponent)({
    '&:hover td': {
        background: 'rgba(0, 0, 0, 0.3)',
    }
});

// Animation variants
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