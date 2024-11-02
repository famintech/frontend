import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion'; 

const StyledContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: 'rgba(20, 27, 45, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(15, 180, 228, 0.1)',
  padding: theme.spacing(6),
  width: '100%',
  maxWidth: '440px',
  position: 'relative',
  boxShadow: `
    0 8px 32px 0 rgba(0, 0, 0, 0.37),
    inset 0 0 80px rgba(15, 180, 228, 0.03)
  `,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    border: '1px solid transparent',
    background: 'linear-gradient(45deg, rgba(15, 180, 228, 0.15), rgba(15, 180, 228, 0)) border-box',
    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(15, 180, 228, 0.3), transparent)',
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