import { Grid, Stack, ListItemButton, ListItemText, Container, Button} from "@mui/material";
import React,{Component, useState} from "react";

//import {Stack, Container, Button} from "@mui/material";

import "./WeekDisplay.css";

function DispMeeting() {
	const [menuItems, setMenuItems] = useState([]);
	const [userId, setuserID] = useState(2);

	const getMeetingList = () =>
	{
		setuserID(2);
		fetch("/api/meetingList",{
			method: "POST",
			body: JSON.stringify({ UserId: userId
			})}).then((response) => response.json())
			.then((data) => {
				setMenuItems(data);
			});
		console.log(menuItems);
		console.log("here");
	};
	return (
		<>
			<Stack spacing={1}>
				{menuItems.map((Meeting) => (
					<ListItemButton className="ListItemButton" key={Meeting}>
						<Grid container
							spacing={2}
							direction={"row"}
							justifyContent={"space-around"}
							alignItems={"center"}>
							<Grid InfoBox xs={9}>
								<ListItemText className="TextPlace" primary={Meeting.location} />
							</Grid>
							<Grid item xs={3}>
								<ListItemText className="Text" primary={ <React.Fragment> {Meeting.startTime} to {Meeting.endTime} </React.Fragment>}/>
							</Grid>
							<Grid item xs={9}>
								<ListItemText className="Text" primary={Meeting.agenda}/>
							</Grid>
							<Grid item xs={3}>
								<ListItemText className="Text" primary={ <React.Fragment> Invited by {Meeting.createrUserId}</React.Fragment>}/>
							</Grid>
						</Grid>
					</ListItemButton>
				))} 
				<Button className="RouteButton" onClick={getMeetingList}/>
			</Stack>
		</>
	);
}

export class WeekDisplay extends Component {
	render(){
		return(
			<Container className="Panel">
				<DispMeeting/>
			</Container>
		);
	}
}

export default WeekDisplay;