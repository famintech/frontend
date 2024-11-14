import { styled, keyframes } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';
import { motion } from 'framer-motion';

// Add keyframes for flash animation
const flashAnimation = keyframes`
  0% { opacity: 1; }
  25% { opacity: 0.3; }
  50% { opacity: 1; }
  75% { opacity: 0.3; }
  100% { opacity: 1; }
`;

// Add error flash animation
const errorFlashAnimation = keyframes`
  0% { opacity: 1; background-color: #ff0000; }
  12.5% { opacity: 0.3; background-color: #ff0000; }
  25% { opacity: 1; background-color: #ff0000; }
  37.5% { opacity: 0.3; background-color: #ff0000; }
  50% { opacity: 1; background-color: #ff0000; }
  62.5% { opacity: 0.3; background-color: #ff0000; }
  75% { opacity: 1; background-color: #ff0000; }
  87.5% { opacity: 0.3; background-color: #ff0000; }
  100% { opacity: 1; background-color: #ff0000; }
`;

// Add error flash animation for the whole polygon
const errorPolygonFlashAnimation = keyframes`
  0% { background-color: #0a1d29; }
  25% { background-color: rgba(255, 0, 0, 0.7); }
  50% { background-color: #0a1d29; }
  75% { background-color: rgba(255, 0, 0, 0.7); }
  100% { background-color: #0a1d29; }
`;

export const AnimatedNavItem = styled(motion.div)(({ theme }) => ({
  width: '100%',
  '&:hover': {
    '& > button': {
      boxShadow: `0 0 15px ${theme.palette.primary.main}20`,
    }
  },
  pointerEvents: 'none'
}));

export const NavItem = styled(ListItemButton)(({ theme }) => ({
  position: 'relative',
  height: 64,
  width: '100%',
  backgroundColor: '#0a1d29',
  transition: 'all 0.3s ease',
  pointerEvents: 'auto',
  // Customize the ripple effect
  '& .MuiTouchRipple-child': {
    backgroundColor: theme.palette.primary.main,
    animationDuration: '400ms !important', // Adjust ripple duration here
  },
  '&.error-ripple .MuiTouchRipple-child': {
    backgroundColor: '#ff0000',
    animationDuration: '800ms !important', // Longer duration for error ripple
  },
  '&.Mui-selected .MuiTouchRipple-child': {
    backgroundColor: theme.palette.custom.accent1,
  },
  '&.error-polygon': {
    animation: `${errorPolygonFlashAnimation} 0.8s linear`
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 80,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
  },
  '&.flashing::after': {
    animation: `${flashAnimation} 0.4s linear`
  },
  '&.error-flashing::after': {
    animation: `${errorFlashAnimation} 0.8s linear`,
  },
  '&:hover::after': {
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 10px ${theme.palette.primary.main},
                0 0 20px ${theme.palette.primary.main},
                0 0 30px ${theme.palette.primary.main},
                0 0 40px ${theme.palette.primary.main},
                0 0 50px ${theme.palette.primary.main}`,
  },
  '&.Mui-selected::after': {
    backgroundColor: theme.palette.custom.accent1,
    boxShadow: `0 0 10px ${theme.palette.custom.accent1},
                0 0 20px ${theme.palette.custom.accent1},
                0 0 30px ${theme.palette.custom.accent1},
                0 0 40px ${theme.palette.custom.accent1},
                0 0 50px ${theme.palette.custom.accent1}`,
  },
  '&.Mui-selected:hover::after': {
    backgroundColor: theme.palette.custom.accent1,
    boxShadow: `0 0 10px ${theme.palette.custom.accent1},
                0 0 20px ${theme.palette.custom.accent1},
                0 0 30px ${theme.palette.custom.accent1},
                0 0 40px ${theme.palette.custom.accent1},
                0 0 50px ${theme.palette.custom.accent1}`,
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