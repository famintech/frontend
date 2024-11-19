import { MotionTableRow } from '@/features/ehafal/components/table/styles/elements';
import { rowVariants } from '@/features/ehafal/components/table/styles/animations';
import { useProgressFormatter, useBadgeFormatter, useTimeFormatter } from '@/features/ehafal/hooks';
import { TableRowProps } from '@/features/ehafal/types';
import { BasicCell, ProgressCell, BadgeCell, DurationCell, ActionCell } from '@/features/ehafal/components/table/cells';

export const TableRow = ({ row, columns, index, onAnimationStart }: TableRowProps) => {
    const { formatProgress } = useProgressFormatter();
    const { formatPriority } = useBadgeFormatter();
    const { formatStartTime, formatDuration } = useTimeFormatter();

    const formattedData = {
        progress: formatProgress(row.progress?.toString() || '0'),
        startTime: formatStartTime(row.startTime),
        priority: formatPriority(row.priority),
        duration: formatDuration(row.startTime)
    };

    return (
        <MotionTableRow
            key={row.id}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={rowVariants}
            onAnimationStart={() => onAnimationStart(index)}
        >
            <BasicCell value={row.id} width={columns[0].width} />
            <BasicCell value={row.target} width={columns[1].width} />
            <BasicCell value={row.scope} width={columns[2].width} />
            <BasicCell value={row.status} width={columns[3].width} />
            <ProgressCell progress={formattedData.progress} width={columns[4].width} />
            <BasicCell value={formattedData.startTime} width={columns[5].width} />
            <DurationCell duration={formattedData.duration} width={columns[6].width} />
            <ActionCell id={row.id} width={columns[7].width} />
            <BadgeCell badge={formattedData.priority} width={columns[8].width} />
        </MotionTableRow>
    );
};