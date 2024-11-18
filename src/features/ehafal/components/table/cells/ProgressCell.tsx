import { DataCell } from '@/features/ehafal/components/table/styles/elements';
import { ProgressBar } from '@/features/ehafal/components/table/ProgressBar';
import { ProgressCellProps } from '@/features/ehafal/types/table';

export const ProgressCell = ({ progress, width }: ProgressCellProps) => (
    <DataCell align="center" width={width}>
        <ProgressBar
            value={parseInt(progress.value)}
            color={progress.color}
        />
    </DataCell>
);