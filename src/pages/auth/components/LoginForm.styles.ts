import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const FormWrapper = styled(motion.form)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const StyledButton = styled(Button)({
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

export const LinkText = styled(Link)(({ theme }) => ({
  color: theme.palette.error.main,
  textDecoration: 'none',
  fontSize: '0.875rem',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

export const SignUpLinkText = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontSize: '0.875rem',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

export const ForgotPasswordText = styled(Box)({
  textAlign: 'right',
  marginTop: '-8px',
  marginBottom: '-8px'
});

export const SignUpText = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(2),
  color: theme.palette.grey[500],
  fontSize: '0.875rem',
  '& a': {
    marginLeft: '8px'
  }
}));