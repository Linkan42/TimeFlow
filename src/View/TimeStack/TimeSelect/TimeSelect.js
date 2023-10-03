import { Grid, TextField, Stack, Button} from "@mui/material";
import {React, Component} from "react";
import './TimeSelect.css';
import useUpdateTimeSelect from './useTimeSelect';

function AddButton() {
    const {UpdateTimeSelect, loading, error } = useUpdateTimeSelect();
    const handelButton = async () =>
    { 
        try{
        await UpdateTimeSelect();
        console.log("Meeting added");
        }
        catch(error) {
            console.error(error);
        }
    }
  return (
         <>
            <Button id="AddButton" className="inputButton" variant="contained" onClick={handelButton}>
                        Add to MeetingScheduler
            </Button>
        </>
    );
}
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
                        <AddButton/>
                    </Stack>
                </Grid>
            </Grid>
        )
    }
}


export default TimeSelect;