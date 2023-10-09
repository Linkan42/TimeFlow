import { Container, createTheme, ThemeProvider } from "@mui/material";
import React, {useState, useEffect} from "react";

const theme = createTheme({
	palette: {
		background: {
			paper: "#fff",
		},
		text: {
			primary: "#173A5E",
			secondary: "#46505A",
		}
	}});
export function NextMeeting(props) {
	const [nextMeetingData, setNextMeetingData] = useState([]);

	useEffect(() => {
		fetch("/api/meeting", { method: "GET" })
			.then(response => response.json())
			.then(data => {setNextMeetingData(data); console.log(data);})
			.catch(error => {
				console.error("Error fetching next meeting:", error);
			});
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Container sx={{
				bgcolor: "background.paper",
				boxShadow: 1,
				borderRadius: 2,
				p: 2,
				//minWidth: 200,
				//width: '20vw',
				maxHeight: "60vh",
				overflow: "auto" 
			}}>
				<h1> Next Meeting </h1>
				<h3>
                Location: {nextMeetingData.length > 0 ? nextMeetingData[0].location : "Loading..."}
				</h3>
				<h3>
                Start Time: {nextMeetingData.length > 0 ? nextMeetingData[0].startTime : "Loading..."}
				</h3>
			</Container>
		</ThemeProvider>
	);
}

export default NextMeeting;
