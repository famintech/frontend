import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';
import Login from '@/pages/auth/login';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import Dashboard from '@/pages/dashboard';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'analytics',
            children: [
              {
                index: true,
                // element: <Analytics />
              },
              {
                path: 'reports',
                // element: <Reports />
              }
            ]
          },
          {
            path: 'users',
            // element: <Users />
          },
          {
            path: 'settings',
            // element: <Settings />
          },
          {
            path: '',
            element: <Dashboard />
          }
        ]
      }
    ]
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}