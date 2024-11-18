import { ProgressBarProps } from '@/features/ehafal/types/table';
import { ProgressContainer, ProgressFill, StripedBackground, ProgressValue } from '@/features/ehafal/components/table/styles/datatable';

export function ProgressBar({
  value,
  color,
  stripeDensity = 6,
  stripeThickness = 4,
  animationSpeed = 0.3
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