import { Button, Box, Grid, Stack} from "@mui/material";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import "../HeadPanel/HeadPanel.css";

let currentDate = dayjs();
let weekDay     = dayjs().format("dddd");

function DateButton() {
	const [buttonText, setButtonText] = useState(`${dayjs().format("YYYY-MM-DD")}`);

	const handleButtonCurrentDate = () => {
		currentDate = dayjs();
		setButtonText(currentDate.format("YYYY-MM-DD"));
		weekDay = currentDate.format("dddd");
	};

	const handleButtonClickLeft = () => { 
		currentDate = currentDate.add(-1, "day");
		setButtonText(currentDate.format("YYYY-MM-DD"));
		weekDay = currentDate.format("dddd");
	};

	const handleButtonClickRight = () => {
		currentDate = currentDate.add(1, "day");
		setButtonText(currentDate.format("YYYY-MM-DD"));
		weekDay = currentDate.format("dddd");
	};

	const navigate = useNavigate();
	const handleButtonNewMeeting = () => {
		navigate("/meetingScheduler");
	};

	const handleButtonLogout = () => {
		localStorage.setItem("token", ""); // wipe token upon logout
		navigate("/login");
	};

	return (
		<>
			<Grid container>
				<Grid item xs={6}>
					<Stack direction="row">
						<Button className="day" variant="filledTonal">
							{weekDay}
						</Button>
						<Button className="button" variant="filledTonal" onClick={handleButtonClickLeft}>
                            ←
						</Button>
						<Button className="button" variant="filledTonal" onClick={handleButtonClickRight}>
                            →
						</Button>
						<Button className="button" variant="filledTonal" onClick={handleButtonCurrentDate}> 
							{buttonText}
						</Button>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<Stack direction="row-reverse">
						<Button className="button" onClick={handleButtonLogout}>
                            LOGOUT
						</Button>
						<Button className="newMeeting" variant='contained' onClick={handleButtonNewMeeting}>
                            + book meeting
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</>
	);
}

export class HeadPanel extends Component {
	render () {
		return (
			<>
				<Box sx={{
					display: "flow",
					width: "fill",
					background: "steelblue",
					maxHeight: "100%",
					minHeight: "100%"
				}}>
					<DateButton/>
				</Box>
			</>
		);

	}
}

export default HeadPanel;
