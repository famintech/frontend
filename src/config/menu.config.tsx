import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

export interface MenuItem {
  id: string;
  title: string;
  path: string;
  icon: JSX.Element;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    id: 'analytics',
    title: 'Analytics',
    path: '/analytics',
    icon: <AnalyticsIcon />,
    children: [
      {
        id: 'reports',
        title: 'Reports',
        path: '/analytics/reports',
        icon: <AnalyticsIcon />
      }
    ]
  },
  {
    id: 'users',
    title: 'User Management',
    path: '/users',
    icon: <PeopleIcon />
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  }
];