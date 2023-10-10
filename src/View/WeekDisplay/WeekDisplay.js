import { Grid, Stack, ListItemButton, ListItemText, Container, Paper } from "@mui/material";
import React,{Component} from "react";

import "./WeekDisplay.css";

export class WeekDisplay extends Component {
	render(){
		return(
			<Container className="Panel">
				<Stack spacing={1}>
					{Meetings.map(Meeting => (
						<Paper elevation={5} className="paperContainer" key={Meeting}>
							<ListItemButton className="ListItemButton" key={Meeting.id}>
								<Grid container
									spacing={2}
									direction={"row"}
									justifyContent={"space-around"}
									alignItems={"center"}>
									<Grid InfoBox xs={9}>
										<ListItemText className="TextPlace" primary={Meeting.location} />
									</Grid>
									<Grid item xs={3}>
										<ListItemText className="Text" primary={ <React.Fragment> {Meeting.start} to {Meeting.end} </React.Fragment>}/>
									</Grid>
									<Grid item xs={9}>
										<ListItemText className="Text" primary={Meeting.msg}/>
									</Grid>
									<Grid item xs={3}>
										<ListItemText className="Text" primary={ <React.Fragment> Invited by {Meeting.creator}</React.Fragment>}/>
									</Grid>
								</Grid>
							</ListItemButton>
						</Paper>
					))} 
				</Stack>
			</Container>
		);
	}
}

const Meetings = [
	{
		id: "0",
		location: "JTH Towers",
		start: "11:00",
		end: "12:00",
		msg: "To scrum or not to scrum?",
		creator: "Linus",
	},
	{
		id: "1",
		location: "E3303",
		start: "10:00",
		end: "11:00",
		msg: "Srum a wast of time and money??",
		creator: "Oskar",
	},
	{
		id: "2",
		location: "E1219",
		start: "05:00",
		end: "06:00",
		msg: "I like scrum!",
		creator: "Lucas",
	},
	{
		id: "3",
		location: "E4404",
		start: "12:00",
		end: "14:00",
		msg: "Ageing in a Welfare State 101",
		creator: "Ivo",
	},
	{
		id: "4",
		location: "E1219",
		start: "08:30",
		end: "09:00",
		msg: "Advanced Failure Analysis",
		creator: "Oskar",
	},
	{
		id: "5",
		location: "E1219",
		start: "07:15",
		end: "12:00",
		msg: "How to fish, a comprehensive guide!",
		creator: "Linus",
	}
];

export default WeekDisplay;