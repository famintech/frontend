import { styled } from '@mui/material';
import { motion } from 'framer-motion';

interface BadgeProps {
  value: string;
  color: string;
}

const BadgeContainer = styled(motion.div)<{ $color: string }>(({ $color }) => ({
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

export function EHafalBadge({ value, color }: BadgeProps) {
  return (
    <BadgeContainer
      $color={color}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 12px ${color}60`,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      {value}
    </BadgeContainer>
  );
}