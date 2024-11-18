import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SciFiTable = styled(Paper)({
    width: '95%',
    margin: '0 auto',
    borderRadius: 0,
    background: 'none',
    '& .MuiTableContainer-root': {
        background: 'transparent',
    },
    '& .MuiTable-root': {
        borderCollapse: 'collapse',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    }
});