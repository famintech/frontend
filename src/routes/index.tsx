import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';
import Login from '@/pages/auth/login';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import Dashboard from '@/pages/dashboard';

// Export the router configuration
export const routerConfig = [
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
];

const router = createBrowserRouter(routerConfig);

export function Router() {
  return <RouterProvider router={router} />;
}