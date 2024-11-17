import { Box, styled } from '@mui/material';

interface BadgeProps {
  value: string;
  color: string;
}

const BadgeContainer = styled(Box)<{ $color: string }>(({ $color }) => ({
  padding: '4px 12px',
  borderRadius: '4px',
  backgroundColor: `${$color}15`, // 15 is hex for 10% opacity
  border: `1px solid ${$color}`,
  color: $color,
  fontSize: '0.85rem',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  boxShadow: `0 0 8px ${$color}40`,
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
    <BadgeContainer $color={color}>
      {value}
    </BadgeContainer>
  );
}