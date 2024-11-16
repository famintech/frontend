interface FormattedProgress {
  value: string;
  color: string;
}

export const useFormatEhafalDatatable = () => {
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
    });
  };

  return { formatProgress, formatStartTime };
};