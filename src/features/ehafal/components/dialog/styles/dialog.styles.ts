import { styled } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export const StyledDialog = styled(Dialog)({
    '& .MuiDialog-paper': {
        backgroundColor: '#0a0e17',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 0,
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        minWidth: '500px',
    }
});

export const DialogHeader = styled(DialogTitle)({
    color: '#fff',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '16px 24px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
});

export const DialogBody = styled(DialogContent)({
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

export const DialogFooter = styled(DialogActions)({
    padding: '16px 24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
});

export const FormField = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
});

export const FormLabel = styled('label')({
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
});

export const FormInput = styled('input')({
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '8px 12px',
    color: '#fff',
    fontSize: '0.9rem',
    outline: 'none',
    '&:focus': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&:hover': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
    }
});

export const FormSelect = styled('select')({
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '8px 12px',
    color: '#fff',
    fontSize: '0.9rem',
    outline: 'none',
    '&:focus': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&:hover': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '& option': {
        backgroundColor: '#0a0e17',
    }
});

export const ActionButton = styled('button')({
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    padding: '8px 16px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
    }
});