import React,{Component} from "react";
import {CoworkerList} from '../CoworkerList/CoworkerList';
import {TimeStack} from '../TimeStack/TimeStack'
import '../../App.css';
import'./MeetingScheduler.css';
import {Grid, Stack} from "@mui/material";

export class MeetingScheduler extends Component {
    render(){
        return( 
        <Grid>
            <Stack direction="row">
                <Grid>
                    <CoworkerList className="CoworkerList"/>
                </Grid>
                <Grid>
                    <TimeStack className="TimeStack"/>
                </Grid>
            </Stack>
        </Grid>
        )
    }
}
export default MeetingScheduler;