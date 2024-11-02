import { styled } from '@mui/material/styles';

const LogoWrapper = styled('div')(({ theme }) => ({
  width: '120px',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
  alignSelf: 'center',
  '& svg': {
    width: '100%',
    height: '100%',
  },
  '& path': {
    fill: theme.palette.primary.main
  }
}));

export function Logo() {
  return (
    <LogoWrapper>
      <img src="/logo.svg" style={{ filter: 'brightness(0) invert(1)' }} />
    </LogoWrapper>
  );
}