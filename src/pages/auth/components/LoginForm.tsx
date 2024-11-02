import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/services/auth.service';
import { TextField, Button, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { GlassContainer } from './GlassContainer';

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
      >
        <Logo />

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Alert severity="error">
                {error}
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div variants={itemVariants}>
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
        </motion.div>

        <motion.div variants={itemVariants}>
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
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
          >
            Sign In
          </Button>
        </motion.div>
      </FormWrapper>
    </GlassContainer>
  );
}