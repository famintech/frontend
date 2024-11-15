import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Animations
const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px #00ff8c, 0 0 10px #00ff8c, 0 0 15px #00ff8c; }
  50% { box-shadow: 0 0 10px #00ff8c, 0 0 20px #00ff8c, 0 0 30px #00ff8c; }
  100% { box-shadow: 0 0 5px #00ff8c, 0 0 10px #00ff8c, 0 0 15px #00ff8c; }
`;

// Styled Components
const SciFiContainer = styled(Box)({
    position: 'relative',
    padding: '2rem',
    background: '#0a1929',
    borderRadius: '8px',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(0, 255, 140, 0.5)',
        animation: `${scanline} 4s linear infinite`,
    },
});

const SciFiTable = styled(Paper)({
    background: 'rgba(10, 25, 41, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 255, 140, 0.2)',
    borderRadius: '8px',
    animation: `${glowPulse} 2s infinite`,
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
        <SciFiContainer>
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
        </SciFiContainer>
    );
}