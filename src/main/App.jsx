import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import style from './App.css';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
