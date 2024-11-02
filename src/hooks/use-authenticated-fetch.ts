import { useAuth } from '@/services/auth.service';
import { useCallback } from 'react';

export function useAuthenticatedFetch() {
  const { createAuthenticatedFetch } = useAuth();
  
  const authenticatedFetch = useCallback(
    async <T>(
      url: string,
      options: RequestInit = {}
    ): Promise<T> => {
      const fetch = createAuthenticatedFetch();
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      
      return response.json();
    },
    [createAuthenticatedFetch]
  );

  return authenticatedFetch;
}