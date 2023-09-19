import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './Views';
import './App.css';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";


function App( {children} ) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
