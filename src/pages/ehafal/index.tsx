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
import { EHafalDatatableProgressBar } from '@/components/EHafalDatatableProgressBar';
import { EHafalBadge } from '@/components/EHafalBadge';
import { useTheme } from '@mui/material/styles';
import { useUiSound } from '@/hooks/use-ui-sound';

const DATA_APPEAR_SOUND = '/sounds/ui-sound-hover-1.mp3';

// Updated columns
const columns = [
    { id: 'id', label: 'ID', width: '8%' },
    { id: 'target', label: 'Target', width: '25%' },
    { id: 'scope', label: 'Scope', width: '9%' },
    { id: 'status', label: 'Status', width: '8%' },
    { id: 'progress', label: 'Progress', width: '7%' },
    { id: 'startTime', label: 'Started', width: '12%' },
    { id: 'duration', label: 'Duration', width: '18%' },
    { id: 'difficulty', label: 'Difficulty', width: '6%' },
    { id: 'priority', label: 'Priority', width: '6%' },
];

// Updated dummy data
const data = [
    {
        id: 'MEM-001',
        target: 'Surah Al-Fatiha',
        scope: 'Verse 1-7',
        status: 'In Progress',
        progress: '75%',
        startTime: '2024-03-15 08:00',
        duration: '3d 5h',
        difficulty: 'Medium',
        priority: 'High',
    },
    {
        id: 'MEM-002',
        target: 'Surah Al-Ikhlas',
        scope: 'Full',
        status: 'Completed',
        progress: '100%',
        startTime: '2024-03-10 14:30',
        duration: '8d 2h',
        difficulty: 'Easy',
        priority: 'Medium',
    },
    {
        id: 'MEM-003',
        target: 'Surah Al-Falaq',
        scope: 'Verse 1-3',
        status: 'Pending',
        progress: '0%',
        startTime: '2024-03-18 10:00',
        duration: '5h',
        difficulty: 'Hard',
        priority: 'High',
    },
    {
        id: 'MEM-004',
        target: 'Surah Al-Kahfi',
        scope: 'Verse 1-3',
        status: 'Pending',
        progress: '45%',
        startTime: '2024-03-18 10:00',
        duration: '5h',
        difficulty: 'Hard',
        priority: 'High',
    },
    {
        id: 'MEM-005',
        target: 'Surah Al-Kahfi',
        scope: 'Verse 1-10',
        status: 'Pending',
        progress: '2.5%',
        startTime: '2024-03-18 10:00',
        duration: '5h',
        difficulty: 'Hard',
        priority: 'High',
    }
];

export default function EHafal() {
    const { formatProgress, formatStartTime, formatDifficulty, formatPriority, formatDuration } = useFormatEhafalDatatable();
    const theme = useTheme();
    const playSound = useUiSound(DATA_APPEAR_SOUND, { volume: 0.15 });

    // Create a function to handle animation start
    const handleAnimationStart = (index: number) => {
        // Delay the sound slightly to match the animation
        setTimeout(() => {
            const pitch = 1.3 - (index * 0.08); // Adjusted pitch range
            playSound({
                pitch,
                volume: 0.2
            });
        }, index * 200); // Match the animation delay
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
}