import useSWR, { mutate } from 'swr';
import { API_CONFIG, API_ENDPOINTS } from '@/config/api';
import { TableData } from '@/features/ehafal/types';

const fetcher = async (url: string) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${url}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};

export const useMemorization = () => {
  const { data, error, isLoading } = useSWR<TableData[]>(
    API_ENDPOINTS.MEMORIZATION.BASE,
    fetcher
  );

  const createMemorization = async (formData: Partial<TableData>) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.MEMORIZATION.BASE}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error('Failed to create memorization');
      
      // Revalidate the data
      mutate(API_ENDPOINTS.MEMORIZATION.BASE);
      return response.json();
    } catch (error) {
      console.error('Error creating memorization:', error);
      throw error;
    }
  };

  const updateProgress = async (id: string, progress: number) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.MEMORIZATION.PROGRESS(id)}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ progress }),
        }
      );

      if (!response.ok) throw new Error('Failed to update progress');
      
      // Revalidate the data
      mutate(API_ENDPOINTS.MEMORIZATION.BASE);
      return response.json();
    } catch (error) {
      console.error('Error updating progress:', error);
      throw error;
    }
  };

  const deleteMemorization = async (id: string) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.MEMORIZATION.BASE}/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) throw new Error('Failed to delete memorization');
      
      // Revalidate the data
      mutate(API_ENDPOINTS.MEMORIZATION.BASE);
      return response.json();
    } catch (error) {
      console.error('Error deleting memorization:', error);
      throw error;
    }
  };

  return {
    memorizations: data,
    isLoading,
    error,
    createMemorization,
    updateProgress,
    deleteMemorization,
  };
};