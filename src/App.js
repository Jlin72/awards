import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <StoreProvider>
        <Route exact path='/' component={Home} />
      </StoreProvider>
    </Router>
  );
}

export default App;
