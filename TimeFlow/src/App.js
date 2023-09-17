import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './Views';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  );
}

export default App;
