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
	const [nextMeetingData, setNextMeetingData] = useState({
		location: "",
		startTime: ""
	});
	useEffect(() => {
		fetch("/api/meeting", { method: "GET" })
			.then(response => response.json())
			.then(data => {
				// Update the state with the received data
				setNextMeetingData({
					location: data.location,
					startTime: data.startTime
				});
				console.log(data);
			})
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
				{nextMeetingData ? (
					<>
						<h3> Time: {nextMeetingData.startTime} </h3>
						<h3> Place: {nextMeetingData.location} </h3>
					</>
				) : (
					<p>loading..</p>
				)}
			</Container>
		</ThemeProvider>
	);
}
/* <p> Time: {props.time} </p>
   <p> Place: {props.place}</p> */
// Denna kod skall användas senare

export default NextMeeting;