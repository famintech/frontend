import { Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

const StyledSnackbar = styled(Snackbar)({
  '& .MuiAlert-root': {
    backgroundColor: '#0a1929',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 0,
    boxShadow: '0 0 20px rgba(0, 100, 255, 0.2)',
    backdropFilter: 'blur(8px)',
    '&.MuiAlert-standardSuccess': {
      borderLeft: '4px solid #4caf50',
      '& .MuiAlert-icon': {
        color: '#4caf50'
      }
    },
    '&.MuiAlert-standardError': {
      borderLeft: '4px solid #f44336',
      '& .MuiAlert-icon': {
        color: '#f44336'
      }
    }
  }
});

interface SciFiSnackbarProps {
  open: boolean;
  message: string;
  severity: 'success' | 'error';
  onClose: () => void;
}

export const SciFiSnackbar = ({ open, message, severity, onClose }: SciFiSnackbarProps) => (
  <AnimatePresence>
    {open && (
      <StyledSnackbar
        open={open}
        autoHideDuration={4000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Alert onClose={onClose} severity={severity}>
            {message}
          </Alert>
        </motion.div>
      </StyledSnackbar>
    )}
  </AnimatePresence>
);