import React,{Component} from "react";
import {Grid} from "@mui/material";

import {WeekDisplay} from '../WeekDisplay/WeekDisplay';
import {NextMeeting} from '../NextMeeting/NextMeeting';
import HeadPanel from "../HeadPanel/HeadPanel"
import Profile from "../Profile/profile";

export class HomePage extends Component {
    render(){
        return( 
            <Grid container className="container">
                <Grid item xs={12}>
                    <HeadPanel/>
                </Grid>
                <Grid item xs={7}>
                    <WeekDisplay/>
                </Grid>
                <Grid item xs={5}>
                    <Grid container item xs={12}>
                        <NextMeeting/>
                    </Grid>
                    <Grid item xs={12}>
                        <Profile/>
                    </Grid>
                </Grid>
            </Grid>
            
        )
    }
}
export default HomePage;