import { BadgeProps } from '@/features/ehafal/types/table';
import { BadgeContainer } from '@/features/ehafal/components/table/styles/datatable';

export function Badge({ value, color }: BadgeProps) {
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