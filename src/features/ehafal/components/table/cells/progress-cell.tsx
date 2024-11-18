import { DataCell } from '@/theme/datatable';
import { EHafalDatatableProgressBar } from '@/components/ehafal/datatable/datatable-progress-bar';
import { ProgressCellProps } from '@/features/ehafal/types/datatable';

export const ProgressCell = ({ progress, width }: ProgressCellProps) => (
    <DataCell align="center" width={width}>
        <EHafalDatatableProgressBar
            value={parseInt(progress.value)}
            color={progress.color}
        />
    </DataCell>
);