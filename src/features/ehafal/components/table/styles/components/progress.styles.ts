import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { StripedBackgroundProps } from '@/features/ehafal/types/table';
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

export const ProgressFill = styled(motion.div)<{ $color: string }>(({ $color }) => ({
    height: '100%',
    backgroundColor: $color,
    position: 'relative',
    overflow: 'hidden',
}));

export const StripedBackground = styled(motion.div)<StripedBackgroundProps>(
    ({ $stripeDensity, $stripeThickness }) => ({
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
    })
);