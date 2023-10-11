import { Container, Paper  } from "@mui/material";
import React, {useState, useEffect} from "react";


export function NextMeeting(props) {
	const [nextMeetingData, setNextMeetingData] = useState([]);
	const [token] = useState(localStorage.getItem("token"));
	useEffect(() => {
		fetch("/api/meeting",{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			},body: JSON.stringify({
			})})
			.then(response => response.json())
			.then(data => {setNextMeetingData(data); console.log(data);})
			.catch(error => {
				console.error("Error fetching next meeting:", error);
			});
	}, [token]);
	return (
		<Container className="Panel" backgroundColor={"#FFFFFF"}>
			<Paper elevation={3} sx={{backgroundColor: "#FAFAFA",
				paddingLeft: 2,
				paddingBottom: 0.5,
				paddingTop: 0.5}}>
				<body>
					<h1> Next Meeting </h1>
					<h3>
                Location: {nextMeetingData.length > 0 ? nextMeetingData[0].location : "No meetings"}
					</h3>
					<h3>
                Start Time: {nextMeetingData.length > 0 ? nextMeetingData[0].startTime : ""}
					</h3>
					<h3>
                Date: {nextMeetingData.length > 0 ? nextMeetingData[0].day + "/" : ""}{nextMeetingData.length > 0 ? nextMeetingData[0].month : ""}
					</h3>
				</body>
			</Paper>
		</Container>
	);
}

export default NextMeeting;
