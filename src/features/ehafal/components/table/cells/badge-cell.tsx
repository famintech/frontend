import { DataCell } from '@/theme/datatable';
import { Badge } from '@/features/ehafal/components/table/badge';
import { BadgeCellProps } from '@/features/ehafal/types/table';

export const BadgeCell = ({ badge, width }: BadgeCellProps) => (
    <DataCell align="center" width={width}>
        <Badge
            value={badge.value}
            color={badge.color}
        />
    </DataCell>
);