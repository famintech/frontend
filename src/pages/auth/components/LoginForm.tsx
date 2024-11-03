import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/services/auth.service';
import { Alert } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { GlassContainer } from './GlassContainer';
import { StyledTextField } from './StyledTextField';
import { Divider } from './Divider';
import { formVariants, itemVariants } from './LoginForm.animations';
import {
  FormWrapper,
  StyledButton,
  LinkText,
  SignUpLinkText,
  ForgotPasswordText,
  SignUpText
} from './LoginForm.styles';

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
          <SignUpLinkText to="/auth/register">Sign Up</SignUpLinkText>
        </SignUpText>
      </FormWrapper>
    </GlassContainer>
  );
}