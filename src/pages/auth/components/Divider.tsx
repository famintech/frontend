import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const DividerContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  margin: '24px 0'
});

const Line = styled(Box)(({ theme }) => ({
  flex: 1,
  height: '1px',
  background: `linear-gradient(to right, 
    transparent,
    ${theme.palette.primary.main} 50%,
    transparent
  )`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    width: '10px',
    height: '1px',
    background: theme.palette.primary.main,
    transform: 'rotate(45deg)',
    transformOrigin: 'left'
  }
}));

const Text = styled(Typography)(({ theme }) => ({
  padding: '0 16px',
  color: theme.palette.grey[500],
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  letterSpacing: '1px'
}));

export function Divider() {
  return (
    <DividerContainer>
      <Line />
      <Text>SIGN IN</Text>
      <Line sx={{ transform: 'scaleX(-1)' }} />
    </DividerContainer>
  );
}