import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import { 
    SciFiTable, 
    HeaderCell, 
    DataCell, 
    TableRowStyled, 
    MotionTableRow,
    rowVariants 
} from '@/theme/datatable';

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
];

export default function EHafal() {
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
                        {data.map((row, index) => (
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
                                <DataCell align="center">{row.progress}</DataCell>
                                <DataCell align="center">{row.startTime}</DataCell>
                                <DataCell align="center">{row.duration}</DataCell>
                                <DataCell align="center">{row.difficulty}</DataCell>
                                <DataCell align="center">{row.priority}</DataCell>
                            </MotionTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </SciFiTable>
    );
}