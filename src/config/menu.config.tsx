import DashboardIcon from '@mui/icons-material/Dashboard';
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
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  },
];