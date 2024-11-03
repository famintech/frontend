import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';

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

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 32px)', // Subtract margin from total height
        margin: '16px',
        backgroundColor: 'rgba(20, 27, 45, 0.4)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(15, 180, 228, 0.1)',
        borderRadius: 0,
        boxShadow: `
          0 8px 32px 0 rgba(0, 0, 0, 0.37),
          inset 0 0 80px rgba(15, 180, 228, 0.03)
        `,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          border: '1px solid transparent',
          borderRadius: 0,
          background: 'linear-gradient(45deg, rgba(15, 180, 228, 0.15), rgba(15, 180, 228, 0)) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(15, 180, 228, 0.3), transparent)',
        }
      }}
    >
      <SidebarHeader isOpen={isOpen} onToggle={onToggle} />
      <SidebarNav isOpen={isOpen} />
    </Box>
  );

  if (isMobile) {
    return (
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