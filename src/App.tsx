import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';
import { Router } from './routes';
import { createSWRConfig } from './config/swr-config';
import { globalStyles } from './theme/global-styles';
import { theme } from './theme';
import './theme/fonts.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles(theme)} />
      <SWRConfig value={createSWRConfig()}>
        <Router />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;