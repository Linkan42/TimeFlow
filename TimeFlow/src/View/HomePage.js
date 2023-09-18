import React,{Component} from "react";
import {CoworkerList} from './CoworkerList';
import {Calandar} from './Calendar';
import {NextMeeting} from './NextMeeting';
import '../App.css';
import {Grid, Container, Stack} from "@mui/material";
export class HomePage extends Component {
    render(){
        return(
        <Container> 
        <Grid> 
        <span className='header'>Navigation bar</span>
            <Stack direction="row" spacing={1} sx={{width: '100vmax'}}>
            <CoworkerList></CoworkerList>
            <Calandar></Calandar>
            <NextMeeting></NextMeeting>
            </Stack>
        <span className='header'>Navigation bar</span>
        </Grid>
        </Container>
        )
    }
}
export default HomePage;