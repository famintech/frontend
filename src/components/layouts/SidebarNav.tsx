import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { menuItems, MenuItem } from '@/config/menu.config';


const NavItem = styled(ListItemButton)(({ theme }) => ({
  position: 'relative',
  height: 64,
  width: '100%',
  backgroundColor: 'rgba(10, 14, 23, 0.8)',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 12,
    height: 12,
    backgroundColor: theme.palette.primary.main,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // square shape
  },
  '&::after': {  // Add this new pseudo-element for the right square
    content: '""',
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 40,  // Adjust width as needed
    height: 4,  // Adjust height as needed
    backgroundColor: theme.palette.primary.main,
  },
  clipPath: `polygon(
    0.304% 1.335%,
    56.164% 1.326%,
    63.009% 19.749%,
    78.551% 19.749%,
    99.808% 76.962%,
    99.808% 98.65%,
    63.464% 98.65%,
    54.923% 75.662%,
    9.877% 75.662%,
    0.493% 50.408%,
    0.304% 1.335%
  )`,
  marginBottom: theme.spacing(0)
}));

interface SidebarNavProps {
  isOpen: boolean;
}

export function SidebarNav({ isOpen }: SidebarNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const handleClick = (item: MenuItem) => {
    if (item.children) {
      setOpenMenus(prev =>
        prev.includes(item.id)
          ? prev.filter(id => id !== item.id)
          : [...prev, item.id]
      );
    } else {
      navigate(item.path);
    }
  };

  const renderMenuItem = (item: MenuItem) => {
    const isSelected = location.pathname === item.path;
    const hasChildren = Boolean(item.children?.length);
    const isMenuOpen = openMenus.includes(item.id);

    return (
      <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
        {isOpen ? (
          <NavItem
            selected={isSelected}
            onClick={() => handleClick(item)}
          >
            <ListItemIcon sx={{ mb: 2, minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText sx={{ mb: 2 }} primary={item.title} />
            {hasChildren && (
              isMenuOpen ? <ExpandLess /> : <ExpandMore />
            )}
          </NavItem>
        ) : (
          <Tooltip title={item.title} placement="right">
            <NavItem
              selected={isSelected}
              onClick={() => handleClick(item)}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                {item.icon}
              </ListItemIcon>
            </NavItem>
          </Tooltip>
        )}

        {hasChildren && (
          <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              {item.children!.map((child) => renderMenuItem(child))}
            </List>
          </Collapse>
        )}
      </ListItem>
    );
  };

  return (
    <Box
      component={motion.div}
      sx={{
        overflow: 'hidden',
        flexGrow: 1,
        padding: 2
      }}
    >
      <List>
        {menuItems.map(renderMenuItem)}
      </List>
    </Box>
  );
}