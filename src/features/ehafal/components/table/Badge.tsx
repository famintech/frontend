import { BadgeProps } from '@/features/ehafal/types/table';
import { BadgeContainer } from '@/features/ehafal/components/table/styles/components';

export function Badge({ value, color }: BadgeProps) {
  console.log('Badge color:', color); // Add this temporarily for debugging
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
        stiffness: 401,
        damping: 17
      }}
    >
      {value}
    </BadgeContainer>
  );
}