import { Box, styled } from '@mui/material';
import { LoginForm } from './components/LoginForm';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  height: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  }
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: '2rem',
  height: '100%',
  position: 'relative',
  isolation: 'isolate',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    opacity: 0.03,
    zIndex: -1,
    backgroundImage: `repeating-linear-gradient(
      135deg,
      ${theme.palette.common.white} 0,
      ${theme.palette.common.white} 1px,
      transparent 1px,
      transparent 6px
    )`
  }
}));

const RightSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.custom.darkContrast,
  height: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <MainContainer>
      <LeftSection>
        <LoginForm />
      </LeftSection>
      {!isMobile && <RightSection />}
    </MainContainer>
  );
}