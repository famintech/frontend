import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  color: string;
  stripeDensity?: number; // pixels between stripes
  stripeThickness?: number; // pixels of stripe thickness
  animationSpeed?: number; // seconds per cycle
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

const StripedBackground = styled(motion.div)<{ 
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

const ProgressFill = styled(motion.div)<{ $color: string }>(({ $color }) => ({
  height: '100%',
  backgroundColor: $color,
  position: 'relative',
  overflow: 'hidden',
}));

export function EHafalDatatableProgressBar({ 
  value, 
  color, 
  stripeDensity = 48, 
  stripeThickness = 4,
  animationSpeed = 0.7 
}: ProgressBarProps) {
  const patternSize = Math.sqrt(2) * stripeDensity;

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
          $stripeDensity={stripeDensity}
          $stripeThickness={stripeThickness}
          animate={{
            x: [-patternSize, 0]
          }}
          transition={{
            duration: animationSpeed,
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