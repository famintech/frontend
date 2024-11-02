import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';
import Login from '@/pages/auth/login.tsx';
import Dashboard from '@/pages/dashboard/index.tsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}