import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Styled Components
const SciFiTable = styled(Paper)(({ }) => ({
    width: '95%',
    margin: '0 auto',
    borderRadius: 0,
    background: 'none',
    '& .MuiTableContainer-root': {
        background: 'transparent',
    },
    '& .MuiTable-root': {
        borderCollapse: 'separate',
        borderSpacing: '0 2px', // Add slight spacing between rows
    }
}));

const HeaderCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '0.9rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    borderTop: 'none',
    padding: '16px 8px',
    background: 'rgba(0, 0, 0, 0.2)',
}));

const DataCell = styled(TableCell)(({ }) => ({
    color: '#fff',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    borderTop: 'none',
    padding: '16px 8px',
    background: 'rgba(0, 0, 0, 0.2)',
}));

const TableRowStyled = styled(TableRow)({
    '&:hover': {
        '& td': {
            background: 'rgba(0, 0, 0, 0.3)',
        }
    }
});

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

// Row animation variants
const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const MotionRow = styled(motion.div)({
    display: 'table-row',
    width: '100%',
});

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
                            <MotionRow
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
                            </MotionRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </SciFiTable>
    );
}