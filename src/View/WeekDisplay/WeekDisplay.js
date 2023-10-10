import { Grid, Stack, ListItemButton, ListItemText, Container, Button, Paper} from "@mui/material";
import React,{Component, useState} from "react";

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
			<Container className="Panel">
				<Stack spacing={1}>
					{menuItems.map(Meeting => (
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
					<Button className="RouteButton" onClick={getMeetingList}/>
				</Stack>
			</Container>
		</>
	);
}

export class WeekDisplay extends Component {
	render(){
		return(
			<DispMeeting/>
		);
	}
}

export default WeekDisplay;
