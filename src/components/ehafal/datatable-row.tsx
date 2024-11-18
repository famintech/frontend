import { DataCell, MotionTableRow, rowVariants } from '@/theme/datatable';
import { EHafalDatatableProgressBar } from '@/components/ehafal/datatable-progress-bar';
import { EHafalBadge } from '@/components/ehafal/datatable-badge';
import { DurationCell } from '@/components/ehafal/datatable-duration-cell';
import { useFormatEhafalDatatable } from '@/hooks/use-format-ehafal-datatable';
import { TableRowProps } from '@/config/types/ehafal/datatable';

export const TableRow = ({ row, columns, index, onAnimationStart }: TableRowProps) => {
    const { 
        formatProgress, 
        formatStartTime, 
        formatDifficulty, 
        formatPriority, 
        formatDuration 
    } = useFormatEhafalDatatable();

    const progress = formatProgress(row.progress);
    const numericProgress = parseInt(row.progress);
    const formattedStartTime = formatStartTime(row.startTime);
    const formattedDifficulty = formatDifficulty(row.difficulty);
    const formattedPriority = formatPriority(row.priority);
    const formattedDuration = formatDuration(row.startTime);

    return (
        <MotionTableRow
            key={row.id}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={rowVariants}
            onAnimationStart={() => onAnimationStart(index)}
        >
            <DataCell align="center" width={columns[0].width}>{row.id}</DataCell>
            <DataCell align="center" width={columns[1].width}>{row.target}</DataCell>
            <DataCell align="center" width={columns[2].width}>{row.scope}</DataCell>
            <DataCell align="center" width={columns[3].width}>{row.status}</DataCell>
            <DataCell align="center" width={columns[4].width}>
                <EHafalDatatableProgressBar
                    value={numericProgress}
                    color={progress.color}
                />
            </DataCell>
            <DataCell align="center" width={columns[5].width}>{formattedStartTime}</DataCell>
            <DurationCell
                duration={formattedDuration}
                width={columns[6].width}
            />
            <DataCell align="center" width={columns[7].width}>
                <EHafalBadge
                    value={formattedDifficulty.value}
                    color={formattedDifficulty.color}
                />
            </DataCell>
            <DataCell align="center" width={columns[8].width}>
                <EHafalBadge
                    value={formattedPriority.value}
                    color={formattedPriority.color}
                />
            </DataCell>
        </MotionTableRow>
    );
};