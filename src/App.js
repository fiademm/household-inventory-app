import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './app/other/screens/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;