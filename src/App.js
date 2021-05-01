import React from 'react';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';

function App() {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
}

export default App;
