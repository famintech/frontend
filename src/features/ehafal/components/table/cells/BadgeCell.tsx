import { DataCell } from '@/features/ehafal/components/table/styles/datatable';
import { Badge } from '@/features/ehafal/components/table/Badge';
import { BadgeCellProps } from '@/features/ehafal/types/table';

export const BadgeCell = ({ badge, width }: BadgeCellProps) => (
    <DataCell align="center" width={width}>
        <Badge
            value={badge.value}
            color={badge.color}
        />
    </DataCell>
);