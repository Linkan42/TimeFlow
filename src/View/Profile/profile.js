import { Grid, TextField, Button } from "@mui/material";
import { React, Component, useState } from "react";
import axios from "axios";

import "../Profile/profile.css";

const token = "mytoken"; // = localStorage.getItem("token");

const UserForm = () => {
	const [newName, setNewName] = useState("");
	
	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleSaveButton = async () => {
		try {
			// Handle success, update UI or show a success message
			// Send the user's unique token to the server, to know which
			// user to update
			const response = await axios.post("/updateName", { newName } , {
				headers: {
					Authorization: `Bearer ${token}`
				}}
			);
			console.log("User updated:", response.data.user);
		} catch (error) {
			// Handle error, show an error message to the user
			console.error("Error updating user:", error);
		}
	};

	return (
		<>
			<Grid Container className='container'>
				<Grid item xs={12}>
					<TextField
						margin="normal"
						id="name"
						label="Username"
						type="text"
						fullWidth
						onChange={handleNameChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						margin="normal"
						id="email"
						label="E-mail"
						type="email"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						margin="normal"
						id="cur_password"
						label="Current password"
						type="password"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						margin="normal"
						id="new_password"
						label="Enter new password"
						type="password"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField 
						margin="normal"
						id="re_new_password"
						label="Re-type password"
						type="password"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<Button className="save_button" onClick={handleSaveButton}>
							Save changes
					</Button>
				</Grid>
			</Grid>
		</>
	);
};


export class Profile extends Component {
	render(){
		return(
			<UserForm/>
		);
	}
}

export default UserForm;