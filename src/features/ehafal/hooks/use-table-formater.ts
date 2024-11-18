import { FormattedProgress, FormattedBadge, FormattedDuration } from "@/features/ehafal/types/datatable";

export const useFormatEhafalTable = () => {
  const formatProgress = (progress: string): FormattedProgress => {
    const numericProgress = parseInt(progress);
    
    // Color variations based on percentage
    if (numericProgress === 100) {
      return {
        value: `+${numericProgress}%`,
        color: '#06B46C' // Bright green for 100%
      };
    }
    if (numericProgress >= 75) {
      return {
        value: `+${numericProgress}%`,
        color: '#14C38E' // Green for 75-99%
      };
    }
    if (numericProgress >= 50) {
      return {
        value: `+${numericProgress}%`,
        color: '#00A9FF' // Blue for 50-74%
      };
    }
    if (numericProgress >= 25) {
      return {
        value: `+${numericProgress}%`,
        color: '#FFB100' // Orange for 25-49%
      };
    }
    if (numericProgress > 0) {
      return {
        value: `+${numericProgress}%`,
        color: '#FF6B6B' // Red-orange for 1-24%
      };
    }
    return {
      value: `${numericProgress}%`,
      color: '#FF0032' // Deep red for 0%
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
          color: '#00F5FF' // Cyan
        };
      case 'medium':
        return {
          value: difficulty,
          color: '#FFB100' // Orange
        };
      case 'hard':
        return {
          value: difficulty,
          color: '#FF3366' // Pink-Red
        };
      default:
        return {
          value: difficulty,
          color: '#888888'
        };
    }
  };

  const formatPriority = (priority: string): FormattedBadge => {
    switch (priority.toLowerCase()) {
      case 'high':
        return {
          value: priority,
          color: '#FF3366' // Pink-Red
        };
      case 'medium':
        return {
          value: priority,
          color: '#FFB100' // Orange
        };
      case 'low':
        return {
          value: priority,
          color: '#00F5FF' // Cyan
        };
      default:
        return {
          value: priority,
          color: '#888888'
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