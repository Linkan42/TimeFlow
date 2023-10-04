import React,{Component} from "react";
import {Grid} from "@mui/material";

import {CoworkerList} from '../CoworkerList/CoworkerList';
import {WeekDisplay} from '../WeekDisplay/WeekDisplay';
import {NextMeeting} from '../NextMeeting/NextMeeting';
import HeadPanel from "../HeadPanel/HeadPanel"

import '../../App.css';

export class HomePage extends Component {
    render(){
        return( 
            <Grid container className="container">
                <Grid item xs={12}>
                    <HeadPanel/>
                </Grid>
            </Grid>
            
        )
    }
}
export default HomePage;