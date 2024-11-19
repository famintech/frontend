import { FormattedDuration } from "@/features/ehafal/types/table";

export const useTimeFormatter = () => {

  const parseUKDate = (dateString: string): Date => {
    // Split the date string into parts
    const [datePart, timePart] = dateString.split(', ');
    const [day, month, year] = datePart.split('/');
    const [time] = timePart.split('.');
    
    // Create a new date string in ISO format
    return new Date(`${year}-${month}-${day}T${time}`);
  };

  const formatStartTime = (dateTimeString: string): string => {
    try {
      const date = parseUKDate(dateTimeString);
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
    try {
      const startTime = parseUKDate(startTimeString);
      const now = new Date();
      
      const diffMs = now.getTime() - startTime.getTime();
      
      const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));
      const hours = Math.floor((diffMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((diffMs % (60 * 60 * 1000)) / (60 * 1000));
      
      return {
        ...(days > 0 ? { days: { value: days } } : {}),
        ...(hours > 0 ? { hours: { value: hours } } : {}),
        minutes: { value: Math.max(0, minutes) }
      };
    } catch (error) {
      console.error('Error calculating duration:', error);
      return {
        minutes: { value: 0 }
      };
    }
  };

  return { 
    formatStartTime,
    formatDuration
  };
};