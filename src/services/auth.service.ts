import { API_CONFIG, API_ENDPOINTS } from '@/config/api';
import { useAuthStore } from '@/store/auth.store';
import { Role, RolePermission } from '@/types/role';

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  requiresTwoFactor?: boolean;
  userId?: string;
}

export function useAuth() {
  const { setAuth, clearAuth } = useAuthStore();

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error(`Login failed: ${response.status}`);
      }
  
      const tokenData: TokenResponse = await response.json();
  
      if (tokenData.requiresTwoFactor) {
        return {
          requiresTwoFactor: true,
          userId: tokenData.userId,
        };
      }
  
      // Store tokens
      localStorage.setItem('access_token', tokenData.access_token);
      localStorage.setItem('refresh_token', tokenData.refresh_token);
  
      // Fetch user profile
      const profileResponse = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.USERS.PROFILE}`, {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
        },
        credentials: 'include',
      });
  
      if (!profileResponse.ok) {
        throw new Error('Failed to fetch user profile');
      }
  
      const userData = await profileResponse.json();
      
      setAuth({
        user: userData,
        permissions: userData.roles?.flatMap((role: Role) => 
          role.permissions?.map((p: RolePermission) => p.permission.name) || []
        ) || [],
        roles: userData.roles?.map((role: Role) => role.name) || [],
      });
  
      return tokenData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
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