import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Admin from './pages/Admin';

function Rotas(){
  return  (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
};

export default Rotas;