import React,{Component} from "react";
import {Container, Grid, Stack} from "@mui/material";

import {CoworkerList} from '../CoworkerList/CoworkerList';
import {WeekDisplay} from '../WeekDisplay/WeekDisplay';
import {NextMeeting} from '../NextMeeting/NextMeeting';
import {Messages} from '../Messages/Messages';
import HeadPanel from "../HeadPanel/HeadPanel"

import '../../App.css';
import '../HeadPanel/HeadPanel.css';

export class HomePage extends Component {
    render(){
        return( 
            <Grid container className="container">
                <Grid item xs={12}>
                    <HeadPanel className="headpanel"/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container item xs={12}>
                        <Grid item xs={3}>
                            <CoworkerList/>
                        </Grid>
                        <Grid item xs={6}>
                            <WeekDisplay/>
                        </Grid>
                        <Grid item xs={3}>
                            <NextMeeting/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Messages/>
                </Grid>
            </Grid>
        )
    }
}
export default HomePage;