import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

export const BadgeContainer = styled(motion.div)<{ $color: string }>(({ $color }) => ({
    padding: '2px 8px',
    backgroundColor: `${$color}15`,
    border: `1px solid ${$color}`,
    color: $color,
    fontSize: '0.75rem',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: `0 0 8px ${$color}40`,
    minWidth: '60px',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(90deg, transparent, ${$color}20, transparent)`,
        animation: 'shimmer 2s infinite',
    },
    '@keyframes shimmer': {
        '0%': { left: '-100%' },
        '100%': { left: '100%' }
    },
}));