import { styled } from '@mui/material/styles';
import { motion, useAnimationControls } from 'framer-motion';
import { Typography } from '@mui/material';
import { useEffect } from 'react';

const LogoWrapper = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(0)
}));

const LogoImage = styled(motion.img)({
  width: '120px',
  height: '120px',
  filter: 'brightness(0) invert(1)',
  transformStyle: 'preserve-3d',
  backfaceVisibility: 'hidden'
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  fontSize: '0.75rem',
  letterSpacing: '1px',
  opacity: 0.9,
  maxWidth: '280px',
  textTransform: 'uppercase',
  height: '2.5em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

export function Logo() {
  const logoControls = useAnimationControls();
  const firstLineControls = useAnimationControls();
  const secondLineControls = useAnimationControls();

  const firstLine = "Strategic Intelligence Resource";
  const secondLine = "and Execution Network";

  useEffect(() => {
    const sequence = async () => {
      // Type first line
      await firstLineControls.start({
        opacity: 1,
        transition: {
          duration: 1
        }
      });

      // Type second line
      await secondLineControls.start({
        opacity: 1,
        transition: {
          duration: 1
        }
      });

      // Spin logo after typing animation
      await logoControls.start({
        rotateY: 720,
        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: 0.2
        }
      });
    };

    sequence();
  }, [logoControls, firstLineControls, secondLineControls]);

  return (
    <LogoWrapper>
      <LogoImage 
        src="/logo.svg"
        animate={logoControls}
        initial={{ rotateY: 0 }}
      />
      <Title variant="subtitle2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={firstLineControls}
        >
          {firstLine}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={secondLineControls}
        >
          {secondLine}
        </motion.span>
      </Title>
    </LogoWrapper>
  );
}