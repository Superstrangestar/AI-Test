import { BrowserRouter } from 'react-router-dom';

import { LogProvider } from '@contexts';
import { AppRouter } from '@routes';

import '@utils';

import '@styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <LogProvider>
        <AppRouter />
      </LogProvider>
    </BrowserRouter>
  );
}

export default App;
