import { DataCell } from '@/theme/datatable';
import { EHafalBadge } from '@/components/ehafal/datatable/datatable-badge';
import { BadgeCellProps } from '@/features/ehafal/types/datatable';

export const BadgeCell = ({ badge, width }: BadgeCellProps) => (
    <DataCell align="center" width={width}>
        <EHafalBadge
            value={badge.value}
            color={badge.color}
        />
    </DataCell>
);