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

const Letter = styled(motion.span)({
  display: 'inline-block',
  whiteSpace: 'pre'
});

export function Logo() {
  const logoControls = useAnimationControls();
  const firstLineControls = useAnimationControls();
  const secondLineControls = useAnimationControls();
  
  const firstLine = "Strategic Intelligence Resource";
  const secondLine = "and Execution Network";

  useEffect(() => {
    const sequence = async () => {
      // Start logo spin immediately
      logoControls.start({
        rotateY: 720,
        transition: {
          duration: 1,
          ease: "easeInOut"
        }
      });

      // Start first line typing
      await firstLineControls.start("visible");

      // After first line completes, start second line
      await secondLineControls.start("visible");
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
        <motion.div
          initial="hidden"
          animate={firstLineControls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.025
              }
            }
          }}
        >
          {firstLine.split("").map((char, index) => (
            <Letter
              key={index}
              variants={{
                hidden: { opacity: 0, x: -5 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              {char}
            </Letter>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          animate={secondLineControls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.025
              }
            }
          }}
        >
          {secondLine.split("").map((char, index) => (
            <Letter
              key={index}
              variants={{
                hidden: { opacity: 0, x: -5 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              {char}
            </Letter>
          ))}
        </motion.div>
      </Title>
    </LogoWrapper>
  );
}