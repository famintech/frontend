import { MotionTableRow } from '@/features/ehafal/components/table/styles/elements';
import { rowVariants } from '@/features/ehafal/components/table/styles/animations';
import { useEHafalTableFormatter } from '@/features/ehafal/hooks/use-table-formatter';
import { TableRowProps } from '@/features/ehafal/types/table';
import { BasicCell, ProgressCell, BadgeCell, DurationCell } from '@/features/ehafal/components/table/cells';

export const TableRow = ({ row, columns, index, onAnimationStart }: TableRowProps) => {
    const { 
        formatProgress, 
        formatStartTime, 
        formatDifficulty, 
        formatPriority, 
        formatDuration 
    } = useEHafalTableFormatter();

    const formattedData = {
        progress: formatProgress(row.progress),
        startTime: formatStartTime(row.startTime),
        difficulty: formatDifficulty(row.difficulty),
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
            <BadgeCell badge={formattedData.difficulty} width={columns[7].width} />
            <BadgeCell badge={formattedData.priority} width={columns[8].width} />
        </MotionTableRow>
    );
};