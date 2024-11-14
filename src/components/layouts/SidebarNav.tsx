import { useState, useRef, useEffect } from 'react';
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
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 80,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    transition: 'box-shadow 0.3s ease',
  },
  '&:hover::after': {
    boxShadow: `0 0 10px ${theme.palette.primary.main}, 
                0 0 20px ${theme.palette.primary.main}, 
                0 0 30px ${theme.palette.primary.main}`,
  },
  '&.Mui-selected::after': {
    boxShadow: `0 0 10px ${theme.palette.primary.main}, 
                0 0 20px ${theme.palette.primary.main}, 
                0 0 30px ${theme.palette.primary.main}`,
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

const HOVER_SOUND_URL = '/sounds/ui-sound-hover-1.mp3'; 

export function SidebarNav({ isOpen }: SidebarNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastPlayedTimeRef = useRef<number>(0);

  const playHoverSound = () => {
    const now = Date.now();
    if (!audioRef.current) {
      const audio = new Audio(HOVER_SOUND_URL);
      audio.volume = 0.15;
      audioRef.current = audio;
    }
    
    if (audioRef.current && now - lastPlayedTimeRef.current > 100) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => {
        console.log('Error playing sound:', e);
      });
      lastPlayedTimeRef.current = now;
    }
  };


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
            onMouseEnter={playHoverSound}
          >
            <ListItemIcon sx={{ mb: 1, minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText sx={{ mb: 1 }} primary={item.title} />
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