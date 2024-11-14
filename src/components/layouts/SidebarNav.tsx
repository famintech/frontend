import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, List, ListItem, Collapse } from '@mui/material';
import { motion } from 'framer-motion';
import { menuItems, MenuItem } from '@/config/menu.config';
import { NavItem } from './NavItem';

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
    const isMenuOpen = openMenus.includes(item.id);

    return (
      <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
        <NavItem
          item={item}
          isOpen={isOpen}
          isSelected={isSelected}
          isMenuOpen={isMenuOpen}
          onClick={() => handleClick(item)}
        />

        {item.children && (
          <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              {item.children.map((child) => renderMenuItem(child))}
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