import useSWR from 'swr';
import { API_CONFIG, API_ENDPOINTS } from '@/config/api';

const fetcher = async (url: string) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${url}`);
  if (!response.ok) throw new Error('Failed to fetch memorization details');
  return response.json();
};

export const useMemorizationDetails = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `${API_ENDPOINTS.MEMORIZATION.BASE}/${id}` : null,
    fetcher
  );

  const updateItemProgress = async (itemId: string, repetitionNumber: number, completed: boolean) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.MEMORIZATION.ITEMS.PROGRESS(itemId)}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ repetitionNumber, completed }),
        }
      );

      if (!response.ok) throw new Error('Failed to update item progress');

      mutate();
      return response.json();
    } catch (error) {
      console.error('Error updating item progress:', error);
      throw error;
    }
  };

  const addItem = async (memorizationId: string, newItem: {
    title: string;
    content: string;
    repetitionsRequired: number;
  }) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.MEMORIZATION.ITEMS.ADD(memorizationId)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        }
      );

      if (!response.ok) throw new Error('Failed to add item');

      mutate();
      return response.json();
    } catch (error) {
      console.error('Error adding item:', error);
      throw error;
    }
  };

  return {
    memorization: data,
    isLoading,
    error,
    updateItemProgress,
    addItem
  };
};