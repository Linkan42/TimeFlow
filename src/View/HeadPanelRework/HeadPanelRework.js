import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dayjs from "dayjs";




export default function ButtonNavBar() {

	let Day = dayjs().format("DD MMMM YYYY");

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{backgroundColor: "#344966"}}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Today, {Day}
					</Typography>
					<Button color="inherit">Book a meeting</Button>
					<Button color="inherit">Logout</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}