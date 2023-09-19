import React,{Component} from "react";
import {CoworkerList} from './CoworkerList';
import {Calandar} from './Calendar';
import {NextMeeting} from './NextMeeting';
import {Messages} from './Messages';
import '../App.css';
import {Grid, Container, Stack} from "@mui/material";
import HeadPanel from "./HeadPanel";
export class HomePage extends Component {
    render(){
        return(
        <Container> 
        <Grid> 
        <span className='header'>Navigation bar</span>
            <Stack direction="row" spacing={0} sx={{width: '100vmax'}}>
                <HeadPanel></HeadPanel>
            </Stack>
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