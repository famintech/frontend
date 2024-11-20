import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0FB4E4', // SHIELD blue, used for primary actions
      light: '#39C7F4',
      dark: '#0A89B0',
    },
    secondary: {
      main: '#FF3D3D', // Alert red, used for critical actions
      light: '#FF6B6B',
      dark: '#CC2E2E',
    },
    background: {
      default: '#0A0E17', // Deep space black
      paper: '#141B2D', // Slightly lighter panel background
    },
    text: {
      primary: '#E6E8EC',
      secondary: '#9BA1A9',
    },
    action: {
      active: '#0FB4E4',
      hover: 'rgba(15, 180, 228, 0.08)',
    },
    error: {
      main: '#FF3D3D',
    },
    warning: {
      main: '#FFB547', // Warning amber
    },
    success: {
      main: '#26E8A0', // Success cyan
    },
    divider: 'rgba(224, 224, 224, 0.12)',
    custom: {
      accent1: '#26E8A0', // Holographic green
      accent2: '#7B61FF', // Purple for special elements
      accent3: '#FFB547', // Amber for warnings/notifications
      darkContrast: '#080B11', // Darker than background for contrast
      highlight: 'rgba(15, 180, 228, 0.12)', // Subtle highlight
    },
  },
  typography: {
    fontFamily: '"Product Sans", sans-serif',
  },
});

// Add custom palette types
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      accent1: string;
      accent2: string;
      accent3: string;
      darkContrast: string;
      highlight: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      accent1?: string;
      accent2?: string;
      accent3?: string;
      darkContrast?: string;
      highlight?: string;
    };
  }
}