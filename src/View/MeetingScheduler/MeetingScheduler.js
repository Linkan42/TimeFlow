import React,{Component} from "react";
import {TimeStack} from "../TimeStack/TimeStack";
import "../../App.css";
import"./MeetingScheduler.css";
import {Grid} from "@mui/material";

export class MeetingScheduler extends Component {
	render(){
		return( 
			<Grid>
				<Grid>
					<TimeStack className="TimeStack"/>
				</Grid>
			</Grid>
		);
	}
}



export default MeetingScheduler;