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

// Updated columns
const columns = [
    { id: 'id', label: 'ID' },
    { id: 'target', label: 'Target' },
    { id: 'scope', label: 'Scope' },
    { id: 'status', label: 'Status' },
    { id: 'progress', label: 'Progress' },
    { id: 'startTime', label: 'Started' },
    { id: 'duration', label: 'Duration' },
    { id: 'difficulty', label: 'Difficulty' },
    { id: 'priority', label: 'Priority' },
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
    const { formatProgress, formatStartTime } = useFormatEhafalDatatable();

    return (
        <SciFiTable elevation={0}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRowStyled>
                            {columns.map((column) => (
                                <HeaderCell key={column.id} align="center">
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
                            
                            return (
                                <MotionTableRow
                                    key={row.id}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                    variants={rowVariants}
                                >
                                    <DataCell align="center">{row.id}</DataCell>
                                    <DataCell align="center">{row.target}</DataCell>
                                    <DataCell align="center">{row.scope}</DataCell>
                                    <DataCell align="center">{row.status}</DataCell>
                                    <DataCell align="center">
                                        <EHafalDatatableProgressBar
                                            value={numericProgress}
                                            color={progress.color}
                                        />
                                    </DataCell>
                                    <DataCell align="center">{formattedStartTime}</DataCell>
                                    <DataCell align="center">{row.duration}</DataCell>
                                    <DataCell align="center">{row.difficulty}</DataCell>
                                    <DataCell align="center">{row.priority}</DataCell>
                                </MotionTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </SciFiTable>
    );
}