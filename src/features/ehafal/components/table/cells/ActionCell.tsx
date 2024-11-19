import { DataCell } from '../styles/elements';
import { Visibility as VisibilityIcon } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ActionCellProps {
    id: string;
    width: string;
}

export const ActionCell = ({ id, width }: ActionCellProps) => {
    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/e-hafal/memorisation/${id}`);
    };

    return (
        <DataCell width={width} align="center">
            <Tooltip title="View Details">
                <IconButton 
                    size="small" 
                    onClick={handleView}
                    sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                            color: 'rgba(255, 255, 255, 0.9)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                    }}
                >
                    <VisibilityIcon fontSize="small" />
                </IconButton>
            </Tooltip>
        </DataCell>
    );
};