import { useAuth } from '@/services/auth.service';
import { API_CONFIG } from '@/config/api';

export function useAuthenticatedFetch() {
  const { createAuthenticatedFetch } = useAuth();
  const authenticatedFetch = createAuthenticatedFetch();

  return async (url: string) => {
    const fullUrl = url.startsWith('http') ? url : `${API_CONFIG.BASE_URL}${url}`;
    const response = await authenticatedFetch(fullUrl);
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    return response.json();
  };
}