import { Button, Grid, Stack, Paper, Container} from "@mui/material";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import "../HeadPanel/HeadPanel.css";

let currentDate = dayjs();
let weekDay     = dayjs().format("dddd");

function Panel() {
	const [buttonText, setButtonText] = useState(`${dayjs().format("DD MMMM YYYY")}`);

	if (weekDay === dayjs().format("dddd") && currentDate.format("D") === dayjs().format("D"))
		weekDay = "Today";

	const handleButtonClickLeft = () => { 
		currentDate = currentDate.add(-1, "day");
		setButtonText(currentDate.format("DD MMMM YYYY"));
		weekDay = currentDate.format("dddd");
	};

	const handleButtonClickRight = () => {
		currentDate = currentDate.add(1, "day");
		setButtonText(currentDate.format("DD MMMM YYYY"));
		weekDay = currentDate.format("dddd");
	};

	const navigate = useNavigate();
	const handleButtonNewMeeting = () => {
		navigate("/meetingScheduler");
	};

	const handleButtonLogout = () => {
		localStorage.setItem("token", ""); // wipe token upon logout
		navigate("/"); // log in page
	};

	return (
		<>
			<div className="headPanelContainer">
				<Grid container className="headPanelGrid">
					<Grid item xs={6}>
						<Stack direction="row">
							<Button className="day">
								{weekDay}
							</Button>
							<Button className="button" variant="filledTonal" onClick={handleButtonClickLeft}>
                            ←
							</Button>
							<Button className="button" variant="filledTonal" onClick={handleButtonClickRight}>
                            →
							</Button>
							<Button className="button" variant="filledTonal"> 
								{buttonText}
							</Button>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack direction="row-reverse">
							<Button className="button" onClick={handleButtonLogout}>
                            LOGOUT
							</Button>
							<Button className="newMeeting" onClick={handleButtonNewMeeting}>
                            + book meeting
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export class HeadPanel extends Component {
	render () {
		return (
			<>
				<div>
					<Container>
						<Paper elevation={10}>
							<Panel/>
						</Paper>
					</Container>
				</div>
			</>
		);

	}
}

export default HeadPanel;
