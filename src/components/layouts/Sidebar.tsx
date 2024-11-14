import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Drawer, useMediaQuery, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';
import { FullscreenButton } from './FullscreenButton';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [location.pathname, isMobile]);

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <SidebarHeader 
        isOpen={isMobile ? mobileOpen : isOpen} 
        onToggle={isMobile ? handleMobileToggle : onToggle}
        showToggle={false} // Hide the toggle in the header for both mobile and desktop
      />
      <FullscreenButton />
      <SidebarNav isOpen={isMobile ? mobileOpen : isOpen} />
    </Box>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Toggle Button - Always visible */}
        <IconButton
          onClick={handleMobileToggle}
          sx={{
            position: 'fixed',
            left: 16,
            top: 16,
            zIndex: (theme) => theme.zIndex.drawer + 2,
            color: 'primary.main',
            backgroundColor: 'rgba(10, 14, 23, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(10, 14, 23, 0.9)',
            }
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: 280,
              border: 'none',
              backgroundColor: 'transparent'
            }
          }}
        >
          {content}
        </Drawer>
      </>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          width: isOpen ? 280 : theme.spacing(10),
          border: 'none',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          backgroundColor: 'transparent'
        }
      }}
    >
      {content}
    </Drawer>
  );
}