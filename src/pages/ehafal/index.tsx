import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Styled Components
const SciFiTable = styled(Paper)({
    background: 'rgba(10, 25, 41, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 255, 140, 0.2)',
    borderRadius: '8px',
});

const HeaderCell = styled(TableCell)({
    color: '#00ff8c',
    fontWeight: 'bold',
    borderBottom: '2px solid rgba(0, 255, 140, 0.3)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '0.9rem',
});

const DataCell = styled(TableCell)({
    color: '#fff',
    borderBottom: '1px solid rgba(0, 255, 140, 0.1)',
});

// Dummy Data
const columns = [
    { id: 'quantumId', label: 'QUANTUM ID' },
    { id: 'neuralSync', label: 'NEURAL SYNC' },
    { id: 'chronoFlux', label: 'CHRONO FLUX' },
    { id: 'bioMetrics', label: 'BIO METRICS' },
];

const data = [
    {
        quantumId: 'QX-7842',
        neuralSync: '98.7%',
        chronoFlux: '1.21 GW',
        bioMetrics: 'OPTIMAL',
    },
    {
        quantumId: 'QX-9571',
        neuralSync: '87.3%',
        chronoFlux: '0.98 GW',
        bioMetrics: 'NOMINAL',
    },
    {
        quantumId: 'QX-3219',
        neuralSync: '92.1%',
        chronoFlux: '1.05 GW',
        bioMetrics: 'ENHANCED',
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
        <SciFiTable>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <HeaderCell key={column.id} align="center">
                                    {column.label}
                                </HeaderCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <MotionRow
                                key={row.quantumId}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                variants={rowVariants}
                            >
                                <DataCell align="center">{row.quantumId}</DataCell>
                                <DataCell align="center">{row.neuralSync}</DataCell>
                                <DataCell align="center">{row.chronoFlux}</DataCell>
                                <DataCell align="center">{row.bioMetrics}</DataCell>
                            </MotionRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </SciFiTable>
    );
}