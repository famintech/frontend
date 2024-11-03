import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useState } from 'react';

const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2)
}));

const LayoutContainer = styled(Box)<{ isSidebarOpen: boolean }>(({ theme, isSidebarOpen }) => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
  paddingLeft: isSidebarOpen ? 264 : theme.spacing(8),
  transition: theme.transitions.create('padding', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(2)
  }
}));

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <LayoutRoot>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar}
      />
      <LayoutContainer isSidebarOpen={isSidebarOpen}>
        <Outlet />
      </LayoutContainer>
    </LayoutRoot>
  );
}