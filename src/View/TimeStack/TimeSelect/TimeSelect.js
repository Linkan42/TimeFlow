import { Grid, TextField, Stack, Button} from "@mui/material";
import {React, Component} from "react";
import './TimeSelect.css';
export class TimeSelect extends Component {
    render(){    
        return(
            <Grid>
                <Grid>
                    <Stack>
                        <Grid>
                            <TextField className="input" label="From:"/>
                            <TextField className="input" label="To:"/>
                        </Grid>
                            <TextField className="input" label="Location"/>
                            <TextField className="input" label="Meeting name"/>
                        <Button id="AddButton" className="inputButton" variant="contained">
                        Add to MeetingScheduler
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        )
    }
}


export default TimeSelect;