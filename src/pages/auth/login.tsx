import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/services/auth.service';
import {
  Box,
  TextField,
  Button,
  Typography,
  // Container,
  Alert,
  styled
} from '@mui/material';

const StarsWrapper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  background: '#000',
  perspective: '340px'
});

const Stars = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '2px',
  height: '2px',
  borderRadius: '50%',
  boxShadow: Array.from({ length: 350 }, () => {
    const x = Math.floor(Math.random() * 3000) - 1500;
    const y = Math.floor(Math.random() * 960) - 480;
    const color = `hsl(90, 0%, ${75 + Math.random() * 25}%)`;
    return `${x}px ${y}px ${color}`;
  }).join(','),
  animation: 'fly 3s linear infinite',
  transformStyle: 'preserve-3d',
  '&:before, &:after': {
    content: '""',
    position: 'absolute',
    width: 'inherit',
    height: 'inherit',
    boxShadow: 'inherit'
  },
  '&:before': {
    transform: 'translateZ(-300px)',
    animation: 'fade1 3s linear infinite'
  },
  '&:after': {
    transform: 'translateZ(-600px)',
    animation: 'fade2 3s linear infinite'
  },
  '@keyframes fly': {
    from: { transform: 'translateZ(0px)' },
    to: { transform: 'translateZ(300px)' }
  },
  '@keyframes fade1': {
    from: { opacity: 0.5 },
    to: { opacity: 1 }
  },
  '@keyframes fade2': {
    from: { opacity: 0 },
    to: { opacity: 0.5 }
  }
});

const MainContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  minHeight: '100vh'
});

const LeftSection = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const FormWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
  padding: '2rem',
  backgroundColor: 'rgba(30, 30, 30, 0.7)',
  backdropFilter: 'blur(8px)',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '400px'
});

const RightSection = styled('div')({
  backgroundColor: '#121212'
});

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <MainContainer>
      <LeftSection>
        <StarsWrapper>
          <Stars />
        </StarsWrapper>
        <FormWrapper>
          <Typography variant="h4" component="h2" gutterBottom>
            Welcome Back
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </FormWrapper>
      </LeftSection>
      <RightSection>
        {/* Content for right section will go here */}
      </RightSection>
    </MainContainer>
  );
}