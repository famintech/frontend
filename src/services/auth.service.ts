import { API_CONFIG, API_ENDPOINTS } from '@/config/api';
import { useAuthStore } from '@/store/auth.store';
import { User } from '@/types/user';

interface AuthResponse {
  user: User;
  permissions: string[];
  roles: string[];
  access_token: string;
  refresh_token: string;
}

export function useAuth() {
  const { setAuth, clearAuth } = useAuthStore();

  const login = async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data: AuthResponse = await response.json();
    
    // Store tokens in localStorage
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);

    setAuth({
      user: data.user,
      permissions: data.permissions,
      roles: data.roles,
    });
    return data;
  };

  const logout = async () => {
    const token = localStorage.getItem('refresh_token');
    await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.LOGOUT}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh_token: token }),
    });
  
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    clearAuth();
  };

  const createAuthenticatedFetch = () => {
    return async (url: string, options: RequestInit = {}) => {
      const token = localStorage.getItem('access_token');
      
      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          const refreshed = await refreshToken();
          if (refreshed) {
            // Retry with new token
            return fetch(url, {
              ...options,
              headers: {
                ...options.headers,
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
              },
            });
          }
          await logout();
          throw new Error('Session expired');
        }

        return response;
      } catch (error) {
        if (error instanceof Error && error.message === 'Session expired') {
          throw error;
        }
        throw new Error('Network error');
      }
    };
  };

  const refreshToken = async (): Promise<boolean> => {
    try {
      const token = localStorage.getItem('refresh_token');
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: token }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      
      return true;
    } catch {
      return false;
    }
  };

  return {
    login,
    logout,
    refreshToken,
    createAuthenticatedFetch,
  };
}