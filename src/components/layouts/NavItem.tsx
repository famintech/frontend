import { ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { MenuItem } from '@/config/menu.config';
import { AnimatedNavItem, NavItem as StyledNavItem } from '@/theme/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useUiSound } from '@/hooks/use-ui-sound';
import { useState } from 'react';

const HOVER_SOUND_URL = '/sounds/ui-sound-hover-1.mp3';

interface NavItemProps {
  item: MenuItem;
  isOpen: boolean;
  isSelected: boolean;
  isMenuOpen?: boolean;
  onClick: () => void;
}

export function NavItem({
  item,
  isOpen,
  isSelected,
  isMenuOpen,
  onClick
}: NavItemProps) {
  const playSound = useUiSound(HOVER_SOUND_URL, { volume: 0.15 });
  const [isFlashing, setIsFlashing] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleHover = () => {
    playSound({ pitch: 1 }); // Normal pitch for hover
  };

  const handleClick = () => {
    // Check if route is defined (you might need to adjust this check based on your route structure)
    const isRouteUndefined = !item.path || item.path === '#' || item.path === '';
    
    if (isRouteUndefined) {
      setIsError(true);
      playSound({ pitch: 0.3 }); // Lower pitch for error
      setTimeout(() => setIsError(false), 400);
    } else {
      setIsFlashing(true);
      playSound({ pitch: 0.5 }); // Normal click pitch
      onClick();
      setTimeout(() => setIsFlashing(false), 400);
    }
  };

  const getFlashClass = () => {
    if (isError) return 'error-flashing';
    if (isFlashing) return 'flashing';
    return '';
  };

  if (!isOpen) {
    return (
      <Tooltip title={item.title} placement="right">
        <AnimatedNavItem
          whileHover={{
            x: 20,
            transition: { type: "spring", stiffness: 400, damping: 20 }
          }}
          initial={{ x: 0 }}
          whileTap={{ scale: 0.98 }}
        >
          <StyledNavItem
            selected={isSelected}
            onClick={handleClick}
            onMouseEnter={handleHover}
            className={getFlashClass()}
            sx={{ justifyContent: 'center' }}
          >
            <ListItemIcon sx={{ minWidth: 'auto' }}>
              {item.icon}
            </ListItemIcon>
          </StyledNavItem>
        </AnimatedNavItem>
      </Tooltip>
    );
  }

  return (
    <AnimatedNavItem
      whileHover={{
        x: 20,
        transition: { type: "spring", stiffness: 400, damping: 20 }
      }}
      initial={{ x: 0 }}
      whileTap={{ scale: 0.98 }}
    >
      <StyledNavItem
        selected={isSelected}
        onClick={handleClick}
        onMouseEnter={handleHover}
        className={getFlashClass()}
      >
        <ListItemIcon sx={{ mb: 1, minWidth: 40 }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText sx={{ mb: 1 }} primary={item.title} />
        {item.children && (
          isMenuOpen ? <ExpandLess /> : <ExpandMore />
        )}
      </StyledNavItem>
    </AnimatedNavItem>
  );
}