import { TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
const MotionComponent = motion.tr;

const baseRowStyles = {
    '&:hover td': {
        background: 'rgba(10, 29, 41, 0.8)',
    },
    '&:last-child td': {
        borderBottom: 'none',
    }
};

export const TableRowStyled = styled(TableRow)(baseRowStyles);
export const MotionTableRow = styled(MotionComponent)(baseRowStyles);