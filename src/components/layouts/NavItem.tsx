import { ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { MenuItem } from '@/config/menu.config';
import { AnimatedNavItem, NavItem as StyledNavItem } from '@/theme/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface NavItemProps {
  item: MenuItem;
  isOpen: boolean;
  isSelected: boolean;
  isMenuOpen?: boolean;
  onHover: () => void;
  onClick: () => void;
}

export function NavItem({ 
  item, 
  isOpen, 
  isSelected, 
  isMenuOpen, 
  onHover, 
  onClick 
}: NavItemProps) {
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
            onClick={onClick}
            onMouseEnter={onHover}
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
        onClick={onClick}
        onMouseEnter={onHover}
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