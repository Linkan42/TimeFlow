import { Grid, TextField, Button } from "@mui/material";
import { React, Component } from "react";

import '../Profile/profile.css'

const handleSaveButton = () => {
    alert("Save button pressed");
}

export class Profile extends Component {
    render(){
        return(
            <Grid Container className='container'>
                <Grid item xs={12}>
                    <TextField  margin="normal"
                                id="name"
                                label="Username"
                                type="text"
                                fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField  margin="normal"
                                id="email"
                                label="E-mail"
                                type="email"
                                fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField  margin="normal"
                                id="cur_password"
                                label="Current password"
                                type="password"
                                fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField  margin="normal"
                                id="new_password"
                                label="Enter new password"
                                type="password"
                                fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField  margin="normal"
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
        )
    }
}

export default Profile;