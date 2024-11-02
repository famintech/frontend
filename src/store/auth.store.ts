import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/user';

interface AuthState {
  user: User | null;
  permissions: string[];
  roles: string[];
  isAuthenticated: boolean;
  setAuth: (auth: {
    user: User;
    permissions: string[];
    roles: string[];
  }) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      permissions: [],
      roles: [],
      isAuthenticated: false,
      setAuth: (auth) => set({ ...auth, isAuthenticated: true }),
      clearAuth: () => set({
        user: null,
        permissions: [],
        roles: [],
        isAuthenticated: false,
      }),
    }),
    {
      name: 'auth-state', 
      partialize: (state) => ({
        user: state.user,
        permissions: state.permissions,
        roles: state.roles,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);