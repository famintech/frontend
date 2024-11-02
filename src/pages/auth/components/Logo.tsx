import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const LogoWrapper = styled(motion.div)(({ theme }) => ({
  width: '120px',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
  alignSelf: 'center',
  '& svg': {
    width: '100%',
    height: '100%',
  },
  '& path': {
    fill: theme.palette.primary.main
  }
}));

export function Logo() {
  return (
    <LogoWrapper
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6
      }}
    >
      <motion.img 
        src="/logo.svg" 
        style={{ filter: 'brightness(0) invert(1)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />
    </LogoWrapper>
  );
}