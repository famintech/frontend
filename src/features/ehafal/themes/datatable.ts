import { Box, Paper, TableCell, TableRow } from '@mui/material';
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
    width: '95%',
    margin: '0 auto 1rem auto', // Added margin to match SciFiTable and add bottom spacing
    padding: '1rem',
    background: '#0a0e17',
    border: '1px solid rgba(255, 255, 255, 0.1)',
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

export const BadgeContainer = styled(motion.div)<{ $color: string }>(({ $color }) => ({
    padding: '2px 8px', // Reduced padding
    backgroundColor: `${$color}15`,
    border: `1px solid ${$color}`,
    color: $color,
    fontSize: '0.75rem', // Smaller font size
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: `0 0 8px ${$color}40`,
    minWidth: '60px', // Ensure minimum width for consistency
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(
        90deg,
        transparent,
        ${$color}20,
        transparent
      )`,
        animation: 'shimmer 2s infinite',
    },
    '@keyframes shimmer': {
        '0%': {
            left: '-100%',
        },
        '100%': {
            left: '100%',
        },
    },
}));


export const ProgressContainer = styled(Box)({
    width: '100%',
    height: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
});

export const ProgressValue = styled(Box)({
    position: 'absolute',
    right: '8px',
    color: '#fff',
    zIndex: 2,
    fontSize: '0.85rem',
    fontWeight: 'bold',
    textShadow: '0 0 4px rgba(0,0,0,0.5)',
});

export const StripedBackground = styled(motion.div)<{
    $color: string;
    $stripeDensity: number;
    $stripeThickness: number;
}>(({ $stripeDensity, $stripeThickness }) => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 0px,
      rgba(255, 255, 255, 0.15) ${$stripeThickness}px,
      transparent ${$stripeThickness}px,
      transparent ${$stripeDensity}px
    )`,
    backgroundSize: `${Math.sqrt(2) * $stripeDensity}px ${Math.sqrt(2) * $stripeDensity}px`,
}));

export const ProgressFill = styled(motion.div)<{ $color: string }>(({ $color }) => ({
    height: '100%',
    backgroundColor: $color,
    position: 'relative',
    overflow: 'hidden',
}));