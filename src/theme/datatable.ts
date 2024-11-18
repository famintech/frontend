import { Paper, TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface HeaderCellProps {
    width?: string;
}

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

export const HeaderCell = styled(TableCell)<HeaderCellProps>(({ width }) => ({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    padding: '16px 8px',
    background: '#0a0e17',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderTop: 'none',
    width: width || 'auto', // Use provided width or default to auto
    '&:first-of-type': {
        borderLeft: 'none',
    },
    '&:last-of-type': {
        borderRight: 'none',
    }
}));

export const DataCell = styled(TableCell)<HeaderCellProps>(({ width }) => ({
    color: '#fff',
    padding: '8px 4px',
    background: '#0a1d29',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.2s ease-in-out',
    width: width || 'auto', // Use provided width or default to auto
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
// export const rowVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (i: number) => ({
//         opacity: 1,
//         x: 0,
//         transition: {
//             delay: i * 0.2,
//             duration: 0.5,
//             ease: "easeOut"
//         }
//     })
// };

export const rowVariants = {
    hidden: { 
        opacity: 0, 
        x: -20,
        transition: {
            duration: 0
        }
    },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1, // Reduced from 0.2 to 0.1 for faster sequence
            duration: 0.2,  // Reduced from 0.4 to 0.2 for faster animation
            ease: "easeOut"
        }
    })
};

export const ToolkitContainer = styled(motion.div)({
    width: '100%',
    padding: '1rem',
    marginBottom: '1rem',
    background: '#0a0e17',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
});

export const toolkitVariants = {
    hidden: { 
        opacity: 0,
        y: -20
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};
