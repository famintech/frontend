import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PublicIcon from '@mui/icons-material/Public';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import AssistantIcon from '@mui/icons-material/Assistant';

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
    id: 'e-hafal',
    title: 'E-Hafal',
    path: '/e-hafal',
    icon: <LightbulbIcon />
  },
  {
    id: 'top-secret',
    title: 'Top Secret',
    path: '/top-secret',
    icon: <EnhancedEncryptionIcon />
  },
  {
    id: 'master-globe',
    title: 'Master Globe',
    path: '/master-globe',
    icon: <PublicIcon />
  },
  {
    id: 'siren-ai',
    title: 'Siren AI',
    path: '/siren-ai',
    icon: <AssistantIcon />
  },
  {
    id: 'grabfood',
    title: 'GrabFood',
    path: '/grabfood',
    icon: <LightbulbIcon />
  },
  {
    id: 'financial',
    title: 'Financial',
    path: '/financial',
    icon: <LightbulbIcon />
  },
  {
    id: 'workout',
    title: 'Workout',
    path: '/workout',
    icon: <LightbulbIcon />
  },
  {
    id: 'nas-storage',
    title: 'NAS Storage',
    path: '/nas-storage',
    icon: <LightbulbIcon />
  },
  {
    id: 'music',
    title: 'Music',
    path: '/music',
    icon: <LightbulbIcon />
  },
  {
    id: 'todo',
    title: 'To Do',
    path: '/todo',
    icon: <LightbulbIcon />
  },
  {
    id: 'puasa',
    title: 'Puasa',
    path: '/puasa',
    icon: <LightbulbIcon />
  }
];