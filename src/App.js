import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <StoreProvider>
        <Route exact path='/' component={Home} />
      </StoreProvider>
    </HashRouter>
  );
}

export default App;
