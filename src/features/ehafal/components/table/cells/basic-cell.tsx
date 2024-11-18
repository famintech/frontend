import { DataCell } from '@/theme/datatable';
import { CellProps } from '@/features/ehafal/types/datatable';

export const BasicCell = ({ value, width }: CellProps) => (
    <DataCell align="center" width={width}>
        {value}
    </DataCell>
);