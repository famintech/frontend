import { SWRConfig } from 'swr';
import { Router } from './routes';
import { createSWRConfig } from './config/swr-config';

function App() {
  return (
    <SWRConfig value={createSWRConfig()}>
      <Router />
    </SWRConfig>
  );
}

export default App;