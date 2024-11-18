import { FormattedProgress, FormattedBadge, FormattedDuration } from "@/features/ehafal/types/table";
import { PROGRESS_COLORS, DIFFICULTY_COLORS, PRIORITY_COLORS } from "@/features/ehafal/constants/table-formatting";

export const useEHafalTableFormatter = () => {
  const formatProgress = (progress: string): FormattedProgress => {
    const numericProgress = parseInt(progress);
    
    // Color variations based on percentage
    if (numericProgress === 100) {
      return {
        value: `+${numericProgress}%`,
        color: PROGRESS_COLORS.COMPLETE
      };
    }
    if (numericProgress >= 75) {
      return {
        value: `+${numericProgress}%`,
        color: PROGRESS_COLORS.HIGH
      };
    }
    if (numericProgress >= 50) {
      return {
        value: `+${numericProgress}%`,
        color: PROGRESS_COLORS.MEDIUM
      };
    }
    if (numericProgress >= 25) {
      return {
        value: `+${numericProgress}%`,
        color: PROGRESS_COLORS.LOW
      };
    }
    if (numericProgress > 0) {
      return {
        value: `+${numericProgress}%`,
        color: PROGRESS_COLORS.VERY_LOW
      };
    }
    return {
      value: `${numericProgress}%`,
      color: PROGRESS_COLORS.NONE
    };
  };

  const formatStartTime = (dateTimeString: string): string => {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-GB', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/am|pm/i, (match) => match.toUpperCase());
  };

  const formatDifficulty = (difficulty: string): FormattedBadge => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return {
          value: difficulty,
          color: DIFFICULTY_COLORS.EASY
        };
      case 'medium':
        return {
          value: difficulty,
          color: DIFFICULTY_COLORS.MEDIUM
        };
      case 'hard':
        return {
          value: difficulty,
          color: DIFFICULTY_COLORS.HARD
        };
      default:
        return {
          value: difficulty,
          color: DIFFICULTY_COLORS.DEFAULT
        };
    }
  };

  const formatPriority = (priority: string): FormattedBadge => {
    switch (priority.toLowerCase()) {
      case 'high':
        return {
          value: priority,
          color: PRIORITY_COLORS.HIGH
        };
      case 'medium':
        return {
          value: priority,
          color: PRIORITY_COLORS.MEDIUM
        };
      case 'low':
        return {
          value: priority,
          color: PRIORITY_COLORS.LOW
        };
      default:
        return {
          value: priority,
          color: PRIORITY_COLORS.DEFAULT
        };
    }
  };

  const formatDuration = (startTimeString: string): FormattedDuration => {
    const startTime = new Date(startTimeString);
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur' }));
    
    const diffMs = now.getTime() - startTime.getTime();
    
    const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diffMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diffMs % (60 * 60 * 1000)) / (60 * 1000));
    
    return {
      ...(days > 0 ? { days: { value: days } } : {}),
      ...(hours > 0 ? { hours: { value: hours } } : {}),
      minutes: { value: minutes }
    };
  };

  return { 
    formatProgress, 
    formatStartTime,
    formatDifficulty,
    formatPriority,
    formatDuration
  };
};