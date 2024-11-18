import { FormattedProgress } from "@/features/ehafal/types/table";
import { PROGRESS_COLORS } from "@/features/ehafal/constants/table-formatting";

export const useProgressFormatter = () => {
  const formatProgress = (progress: string): FormattedProgress => {
    const numericProgress = parseInt(progress);
    
    const progressMap = [
      { threshold: 100, color: PROGRESS_COLORS.COMPLETE },
      { threshold: 75, color: PROGRESS_COLORS.HIGH },
      { threshold: 50, color: PROGRESS_COLORS.MEDIUM },
      { threshold: 25, color: PROGRESS_COLORS.LOW },
      { threshold: 0, color: PROGRESS_COLORS.VERY_LOW }
    ];

    const match = progressMap.find(({ threshold }) => numericProgress >= threshold);
    return {
      value: `${numericProgress > 0 ? '+' : ''}${numericProgress}%`,
      color: match?.color || PROGRESS_COLORS.NONE
    };
  };

  return { formatProgress };
};