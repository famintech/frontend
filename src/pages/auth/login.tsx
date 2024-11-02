import { Box, styled } from '@mui/material';
import { LoginForm } from './components/LoginForm';

const MainContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  height: '100%',
  overflow: 'hidden'
});

const LeftSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#121212',
  padding: '2rem',
  height: '100%'
});

const RightSection = styled(Box)({
  backgroundColor: '#000000',
  height: '100%'
});

export default function Login() {
  return (
    <MainContainer>
      <LeftSection>
        <LoginForm />
      </LeftSection>
      <RightSection />
    </MainContainer>
  );
}