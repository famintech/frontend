import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion'; 

const StyledContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: 'rgba(20, 27, 45, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: theme.spacing(6),
  width: '100%',
  maxWidth: '440px',
  position: 'relative',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    border: '2px solid transparent',
    // borderRadius: '8px',
    background: 'linear-gradient(45deg, rgba(15, 180, 228, 0.1), rgba(15, 180, 228, 0)) border-box',
    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '0.5px',
    left: '0.5px',
    right: '0.5px',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(15, 180, 228, 0.2), transparent)',
  }
}));

interface GlassContainerProps {
  children: React.ReactNode;
}

export function GlassContainer({ children }: GlassContainerProps) {
  return (
    <StyledContainer
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </StyledContainer>
  );
}