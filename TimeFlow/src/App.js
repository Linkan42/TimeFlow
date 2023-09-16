import React from 'react';
import {CoworkerList} from './View/CoworkerList';
//import {BackGround} from './View/BackGround';
import './App.css';
import { Container, Grid, ListItem, Stack} from '@mui/material';

function App() {
  return (
        <Container>
          <Grid> 
            <span className='header'>Navigation bar</span>
            <Grid>
              <Stack direction="row" spacing={1}>
                <CoworkerList className='sidebar'> </CoworkerList>
                <ListItem className='schema' sx={{ backgroundColor: 'blue'}}>kalender </ListItem>
                <ListItem className='sidebar' sx={{ backgroundColor: 'red'}}>Nästa möte här </ListItem>
              </Stack>
            </Grid>
            <span className='header'>Navigation bar</span>
          </Grid>
        </Container>
  );
}

export default App;
