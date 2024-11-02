import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/services/auth.service';
import { Box, TextField, Button, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormWrapper = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

const LogoPlaceholder = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '120px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
  alignSelf: 'center'
}));

export function LoginForm() {
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
    <FormWrapper onSubmit={handleSubmit}>
      <LogoPlaceholder />
      
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <TextField
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
        size="large"
      >
        Sign In
      </Button>
    </FormWrapper>
  );
}