import { Grid, TextField, Stack, Button} from "@mui/material";
import {React, Component} from "react";


export class TimeSelect extends Component {
    render(){    
        return(
            <Grid className="InPutField">
                <Stack>
                    <Grid>
                        <TextField label="From:"/>
                        <TextField label="To:"/>
                    </Grid>
                    <TextField label="Location"/>
                    <TextField label="Meeting name"/>
                </Stack>
                <Button id="AddButton" variant="contained">
                    Add to MeetingScheduler
                </Button>
            </Grid>
        )
    }
}


export default TimeSelect;