import { Grid, TextField, Stack } from "@mui/material";
import React,{Component} from "react";


export class TimeSelect extends Component {
    render(){
        return(
            <Grid className="InPutField">
                <Stack>
                <Grid>
                <TextField id="StartTime" label="From:"/>
                <TextField id="EndTime" label="To:"/>
                </Grid>
                <TextField id="Location" label="Location"/>
                <TextField id="MeetingName" label="Meeting name"/>
                </Stack>
            </Grid>
        )
    }
}


export default TimeSelect;