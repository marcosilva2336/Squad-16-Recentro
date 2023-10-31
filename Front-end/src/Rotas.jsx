import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

function Rotas(){
  return  (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </Router>
  );
};

export default Rotas;