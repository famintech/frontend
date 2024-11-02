import { useAuth } from '@/services/auth.service.ts';
import { API_CONFIG } from '@/config/api.ts';

export function useAuthenticatedFetch() {
  const { createAuthenticatedFetch } = useAuth();
  const authenticatedFetch = createAuthenticatedFetch();

  return async (url: string, options: RequestInit = {}) => {
    const fullUrl = url.startsWith('http') ? url : `${API_CONFIG.BASE_URL}${url}`;
    const response = await authenticatedFetch(fullUrl, {
      ...options,
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    return response.json();
  };
}