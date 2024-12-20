import { FormattedBadge } from "@/features/ehafal/types/table";
import { DIFFICULTY_COLORS, PRIORITY_COLORS } from "@/features/ehafal/constants/table-formatting";

export const useBadgeFormatter = () => {
  const formatBadge = (value: string, colorMap: Record<string, string>): FormattedBadge => {
    const normalizedValue = value.toUpperCase();
    return {
      value,
      color: colorMap[normalizedValue] || colorMap.DEFAULT
    };
  };

  const formatDifficulty = (difficulty: string) => 
    formatBadge(difficulty, DIFFICULTY_COLORS);

  const formatPriority = (priority: string) => 
    formatBadge(priority, PRIORITY_COLORS);

  return { formatDifficulty, formatPriority };
};