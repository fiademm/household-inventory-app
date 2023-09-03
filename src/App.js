import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './app/other/screens/Dashboard';
import Users from './app/other/screens/Users';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/Users' element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;