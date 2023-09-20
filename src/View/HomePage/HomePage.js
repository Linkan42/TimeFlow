import React,{Component} from "react";
import {CoworkerList} from '../CoworkerList/CoworkerList';
import {WeekDisplay} from '../WeekDisplay/WeekDisplay';
import {NextMeeting} from '../NextMeeting/NextMeeting';
import {Messages} from '../Messages/Messages';
import '../../App.css';
import {Grid, Stack} from "@mui/material";
import HeadPanel from "../HeadPanel/HeadPanel"
export class HomePage extends Component {
    render(){
        return( 
        <Grid>
            <Grid>
                <HeadPanel xs={{Height:'10vh', width:'100%'}}/>
            </Grid>
            <Grid>
                <Stack direction="row">
                    <CoworkerList></CoworkerList>
                    <WeekDisplay></WeekDisplay>
                    <NextMeeting></NextMeeting>
                </Stack>
            </Grid>
            <Grid>
                <Messages/>
            </Grid>
        </Grid>
        )
    }
}
export default HomePage;