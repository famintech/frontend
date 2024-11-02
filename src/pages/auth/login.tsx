import { Box, styled } from '@mui/material';
import { LoginForm } from './components/LoginForm';

const MainContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  margin: 0,
  padding: 0
});

const LeftSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#121212',
  padding: '2rem'
});

const RightSection = styled(Box)({
  backgroundColor: '#000000'
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