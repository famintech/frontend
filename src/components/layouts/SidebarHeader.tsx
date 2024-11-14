import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const HeaderRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  height: 64,
}));

const LogoImage = styled('img')({
  height: 40,
  filter: 'brightness(0) invert(1)'
});

interface SidebarHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function SidebarHeader({ isOpen, onToggle }: SidebarHeaderProps) {
  return (
    <HeaderRoot>
      <motion.div
        initial={false}
        animate={{ width: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ overflow: 'hidden', marginRight: 'auto' }}
      >
        <LogoImage src="/logo.svg" alt="Logo" />
      </motion.div>
      <IconButton
        onClick={onToggle}
        sx={{ color: 'primary.main' }}
      >
        <MenuIcon />
      </IconButton>
    </HeaderRoot>
  );
}