import { DataCell } from '@/features/ehafal/themes/datatable';
import { CellProps } from '@/features/ehafal/types/table';

export const BasicCell = ({ value, width }: CellProps) => (
    <DataCell align="center" width={width}>
        {value}
    </DataCell>
);