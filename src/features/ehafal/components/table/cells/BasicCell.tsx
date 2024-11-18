import { DataCell } from '@/features/ehafal/components/table/styles/elements';
import { CellProps } from '@/features/ehafal/types/table';

export const BasicCell = ({ value, width }: CellProps) => (
    <DataCell align="center" width={width}>
        {value}
    </DataCell>
);