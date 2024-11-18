import { DataCell } from '@/features/ehafal/components/table/styles/elements';
import { useTheme } from '@mui/material/styles';
import { DurationCellProps } from '@/features/ehafal/types/table';

export const DurationCell = ({ duration, width }: DurationCellProps) => {
    const theme = useTheme();
    
    return (
        <DataCell align="center" width={width}>
            {duration.days && (
                <span>
                    <span style={{ color: theme.palette.primary.main }}>{duration.days.value}</span>
                    {' days '}
                </span>
            )}
            {duration.hours && (
                <span>
                    <span style={{ color: theme.palette.primary.main }}>{duration.hours.value}</span>
                    {' hours '}
                </span>
            )}
            <span style={{ color: theme.palette.primary.main }}>{duration.minutes.value}</span>
            {' minutes'}
        </DataCell>
    );
};