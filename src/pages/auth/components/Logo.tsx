import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

const LogoWrapper = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(0) // Reduced from 4 to 2
}));

const LogoImage = styled(motion.img)({
  width: '120px',
  height: '120px',
  filter: 'brightness(0) invert(1)'
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  fontSize: '0.75rem',
  letterSpacing: '1px',
  opacity: 0.9,
  maxWidth: '280px',
  textTransform: 'uppercase'
}));

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function Logo() {
  return (
    <LogoWrapper>
      <LogoImage 
        src="/logo.svg" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variant="subtitle2">
          Strategic Intelligence Resource and Execution Network
        </Title>
      </motion.div>
    </LogoWrapper>
  );
}