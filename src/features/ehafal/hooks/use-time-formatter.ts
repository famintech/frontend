import { FormattedDuration } from "@/features/ehafal/types/table";

export const useTimeFormatter = () => {

  const formatStartTime = (dateTimeString: string): string => {
    try {
      const date = new Date(dateTimeString);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      return date.toLocaleString('en-GB', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/am|pm/i, (match) => match.toUpperCase());
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
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
    formatStartTime,
    formatDuration
  };
};