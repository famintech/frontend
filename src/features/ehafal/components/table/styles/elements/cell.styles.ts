import { TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HeaderCellProps } from '@/features/ehafal/types/table';

export const HeaderCell = styled(TableCell)<HeaderCellProps>(({ width }) => ({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    padding: '16px 8px',
    background: '#0a0e17',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderTop: 'none',
    width: width || 'auto',
    '&:first-of-type': {
        borderLeft: 'none',
    },
    '&:last-of-type': {
        borderRight: 'none',
    }
}));

export const DataCell = styled(TableCell)<HeaderCellProps>(({ width }) => ({
    color: '#fff',
    padding: '8px 4px',
    background: '#0a1d29',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.2s ease-in-out',
    width: width || 'auto',
    '&:first-of-type': {
        borderLeft: 'none',
    },
    '&:last-of-type': {
        borderRight: 'none',
    }
}));