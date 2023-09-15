import React from 'react';
import {CoworkerList} from './View/CoworkerList';
//import {BackGround} from './View/BackGround';
import './App.css';
import { Container, backgroundColor } from '@mui/material';

function App() {
  return (
      <Container>
          <CoworkerList sx={{ backgroundColor: 'ligthgray'}}>
        </CoworkerList>
      </Container>
  );
}

export default App;
