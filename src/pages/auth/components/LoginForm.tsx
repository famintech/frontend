import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/services/auth.service';
import { Button, Alert, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { GlassContainer } from './GlassContainer';
import { StyledTextField } from './StyledTextField';
import { Divider } from './Divider';

const FormWrapper = styled(motion.form)(({ theme }) => ({
  width: '100%',
  // maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const StyledButton = styled(Button)({
  borderRadius: 0,
  height: '48px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 600,
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
  }
});

const LinkText = styled(Link)(({ theme }) => ({
  color: theme.palette.error.main,
  textDecoration: 'none',
  fontSize: '0.875rem',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const ForgotPasswordText = styled(Box)({
  textAlign: 'right',
  marginTop: '-8px',
  // marginBottom: '16px'
});

const SignUpText = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(2),
  color: theme.palette.grey[500],
  fontSize: '0.875rem',
  '& a': {
    marginLeft: '8px'
  }
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
    <GlassContainer>
      <FormWrapper
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Logo />
        <Divider />

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Alert severity="error">{error}</Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div variants={itemVariants}>
          <StyledTextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>

        <ForgotPasswordText>
          <LinkText to="/auth/forgot-password">
            Forgot password ?
          </LinkText>
        </ForgotPasswordText>

        <motion.div variants={itemVariants}>
          <StyledTextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            size="large"
          >
            Sign In
          </StyledButton>
        </motion.div>

        <SignUpText>
          Don't have an account?
          <LinkText to="/auth/register">Sign Up</LinkText>
        </SignUpText>
      </FormWrapper>
    </GlassContainer>
  );
}