import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import {
    SciFiTable,
    HeaderCell,
    DataCell,
    TableRowStyled,
    MotionTableRow,
    rowVariants
} from '@/theme/datatable';
import { useFormatEhafalDatatable } from '@/hooks/use-format-ehafal-datatable';
import { EHafalDatatableProgressBar } from '@/components/ehafal/datatable-progress-bar';
import { EHafalBadge } from '@/components/ehafal/datatable-badge';
import { useTheme } from '@mui/material/styles';
import { useUiSound } from '@/hooks/use-ui-sound';
import { EHafalDatatableProps } from '@/config/types/ehafal/datatable';

const DATA_APPEAR_SOUND = '/sounds/ui-sound-hover-1.mp3';

export const EHafalDatatable = ({ data, columns }: EHafalDatatableProps) => {
    const { formatProgress, formatStartTime, formatDifficulty, formatPriority, formatDuration } = useFormatEhafalDatatable();
    const theme = useTheme();
    const playSound = useUiSound(DATA_APPEAR_SOUND, { volume: 0.15 });

    const handleAnimationStart = (index: number) => {
        setTimeout(() => {
            playSound({
                pitch: 1.5,
                volume: 0.2
            });
        }, index * 100);
    };

    return (
        <SciFiTable elevation={0}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRowStyled>
                            {columns.map((column) => (
                                <HeaderCell key={column.id} align="center" width={column.width}>
                                    {column.label}
                                </HeaderCell>
                            ))}
                        </TableRowStyled>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => {
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
                                    onAnimationStart={() => handleAnimationStart(index)}
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
                                    <DataCell align="center" width={columns[6].width}>
                                        {formattedDuration.days && (
                                            <span>
                                                <span style={{ color: theme.palette.primary.main }}>{formattedDuration.days.value}</span>
                                                {' days '}
                                            </span>
                                        )}
                                        {formattedDuration.hours && (
                                            <span>
                                                <span style={{ color: theme.palette.primary.main }}>{formattedDuration.hours.value}</span>
                                                {' hours '}
                                            </span>
                                        )}
                                        <span style={{ color: theme.palette.primary.main }}>{formattedDuration.minutes.value}</span>
                                        {' minutes'}
                                    </DataCell>
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
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </SciFiTable>
    );
};