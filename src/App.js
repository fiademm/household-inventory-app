import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './app/other/screens/Dashboard';
import Users from './app/other/screens/Users';
import Transactions from './app/other/screens/Transactions';
import Help from './app/other/screens/Help';
import Settings from './app/other/screens/Settings';
import Products from './app/other/screens/Products';
import Categories from './app/other/screens/Categories';
import Login from './app/other/components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/Categories' element={<Categories />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/Settings' element={<Settings />}></Route>
        <Route path='/Support' element={<Help />}></Route>
        <Route path='/Transactions' element={<Transactions />}></Route>
        <Route path='/Users' element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;