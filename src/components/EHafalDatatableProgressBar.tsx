import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  color: string;
}

const ProgressContainer = styled(Box)({
  width: '100%',
  height: '24px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const ProgressValue = styled(Box)({
  position: 'absolute',
  right: '8px',
  color: '#fff',
  zIndex: 2,
  fontSize: '0.85rem',
  fontWeight: 'bold',
  textShadow: '0 0 4px rgba(0,0,0,0.5)',
});

const StripedBackground = styled(motion.div)<{ $color: string }>(({ $color }) => ({
  position: 'absolute',
  inset: 0,
  backgroundImage: `linear-gradient(
    -45deg,
    ${$color} 25%,
    transparent 25%,
    transparent 50%,
    ${$color} 50%,
    ${$color} 75%,
    transparent 75%,
    transparent
  )`,
  backgroundSize: '35px 35px',
  opacity: 0.4,
}));

const ProgressFill = styled(motion.div)<{ $color: string }>(({ $color }) => ({
  height: '100%',
  backgroundColor: $color,
  position: 'relative',
  overflow: 'hidden',
}));

export function EHafalDatatableProgressBar({ value, color }: ProgressBarProps) {
  return (
    <ProgressContainer>
      <ProgressFill
        $color={color}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <StripedBackground
          $color={color}
          animate={{
            x: [-35, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </ProgressFill>
      <ProgressValue>
        {value > 0 ? `+${value}%` : `${value}%`}
      </ProgressValue>
    </ProgressContainer>
  );
}