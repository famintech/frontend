import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';
import Login from '@/pages/auth/login';
import { DashboardLayout } from '@/shared/components/layouts/DashboardLayout';
import Dashboard from '@/pages/dashboard';
import EHafal from '@/pages/ehafal/index';
import Memorisation from '@/pages/ehafal/memorisation';

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
            path: 'settings',
            // element: <Settings />
          },
          {
            path: 'e-hafal',
            element: <EHafal />
          },
          {
            path: 'e-hafal/memorisation/:id',
            element: <Memorisation />
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