import { API_ENDPOINTS } from '@/config/api';
import { useAuthStore } from '@/store/auth.store';
import { User } from '@/types/user';

interface AuthResponse {
  user: User;
  permissions: string[];
  roles: string[];
}

export function useAuth() {
  const { setAuth, clearAuth } = useAuthStore();

  const login = async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_ENDPOINTS.AUTH.LOGIN}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    setAuth({
      user: data.user,
      permissions: data.permissions,
      roles: data.roles,
    });
    return data;
  };

  const logout = async () => {
    const response = await fetch(`${API_ENDPOINTS.AUTH.LOGOUT}`, {
      method: 'POST',
      credentials: 'include',
    });

    if (response.ok) {
      clearAuth();
    }
  };

  // Create an axios instance with interceptors
  const createAuthenticatedFetch = () => {
    return async (url: string, options: RequestInit = {}) => {
      try {
        const response = await fetch(url, {
          ...options,
          credentials: 'include',
        });

        // If the response is 401 (Unauthorized), try to refresh the token
        if (response.status === 401) {
          const refreshed = await refreshToken();
          if (refreshed) {
            // Retry the original request
            return fetch(url, {
              ...options,
              credentials: 'include',
            });
          }
          // If refresh failed, logout
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
      const response = await fetch(`${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        return false;
      }

      const data: AuthResponse = await response.json();
      setAuth({
        user: data.user,
        permissions: data.permissions,
        roles: data.roles,
      });

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