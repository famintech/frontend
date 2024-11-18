import { ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { MenuItem } from '@/config/menu.config';
import { AnimatedNavItem, NavItem as StyledNavItem } from '@/theme/sidebar';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useUiSound } from '@/shared/hooks/use-ui-sound';
import { useState } from 'react';
import { routerConfig } from '@/routes/index';

const HOVER_SOUND_URL = '/sounds/ui-sound-hover-1.mp3';
const ERROR_SOUND_URL = '/sounds/ui-sound-click-error-1.mp3';

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
  const playErrorSound = useUiSound(ERROR_SOUND_URL, { volume: 1 });
  const [isFlashing, setIsFlashing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPolygonError, setIsPolygonError] = useState(false);

  const isRouteImplemented = (path: string) => {
    // Safely access nested routes with optional chaining
    const routes = routerConfig[1]?.children?.[0]?.children;
    if (!routes) return false;

    const findRoute = (routes: any[], path: string): boolean => {
      for (const route of routes) {
        if (route.path === path.replace('/', '') && route.element) return true;
        if (route.children) {
          const found = findRoute(route.children, path);
          if (found) return true;
        }
      }
      return false;
    };
    
    return findRoute(routes, path);
  };

  const handleHover = () => {
    playSound({ pitch: 2 }); // Normal pitch for hover
  };

  const handleClick = () => {
    // Special handling for top-secret route
    if (item.id === 'top-secret') {
      setIsError(true);
      setIsPolygonError(true);
      playErrorSound();
      setTimeout(() => {
        setIsError(false);
        setIsPolygonError(false);
      }, 800); // Match this with animation duration
      return;
    }

    // Normal route handling
    if (!item.children && item.path && !isRouteImplemented(item.path)) {
      setIsError(true);
      playSound({ pitch: 0.3 }); // Lower pitch for normal errors
      setTimeout(() => setIsError(false), 400);
    } else {
      setIsFlashing(true);
      playSound({ pitch: 0.7 }); // Normal click pitch
      onClick();
      setTimeout(() => setIsFlashing(false), 400);
    }
  };

  const getClasses = () => {
    const classes = [];
    if (isError) classes.push('error-flashing', 'error-ripple');
    if (isFlashing) classes.push('flashing');
    if (isPolygonError) classes.push('error-polygon');
    return classes.join(' ');
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
            className={getClasses()}
            TouchRippleProps={{
              classes: {
                child: isError ? 'error-ripple' : ''
              },
              center: false, // false means ripple starts from click position
            }}   
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
        className={getClasses()}
        TouchRippleProps={{
          classes: {
            child: isError ? 'error-ripple' : ''
          },
          center: false // false means ripple starts from click position
        }}
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