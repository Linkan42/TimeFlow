import { Grid, TextField, Stack, Button} from "@mui/material";
import {React, Component, useState} from "react";
import './TimeSelect.css';
import useUpdateTimeSelect from './useTimeSelect';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function AddMeeting() {
    const [inputValueFrom, setInputValueFrom] = useState('');
    const [inputValueTo, setInputValueTo] = useState('');
    const [inputValueLocation, setInputValueLocation] = useState('');
    const [inputValueAgenda, setInputValueAgenda] = useState('');
    const {UpdateTimeSelect, err} = useUpdateTimeSelect();
        const handelButton = async () =>
        { 
            if(err !== true)
            {
                console.log('button pressed');
                console.log(inputValueFrom);
                console.log('hello');
                try{
                    await UpdateTimeSelect(inputValueLocation, inputValueAgenda, inputValueFrom, inputValueTo);
                }
                catch(error) {
                    console.error(error);
                }
            }
            
        };
  return (
         <>
             <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="date"/>
                </LocalizationProvider>
                <Grid>
                    <TextField className="input" label="From:" value={inputValueFrom} onChange={(e) => setInputValueFrom(e.target.value)}/>
                    <TextField className="input" label="To:"   value={inputValueTo} onChange={(e) => setInputValueTo(e.target.value)}/>
                </Grid>
                    <TextField className="input" label="Location" value={inputValueLocation} onChange={(e) => setInputValueLocation(e.target.value)}/>
                    <TextField className="input" label="Meeting name" value={inputValueAgenda} onChange={(e) => setInputValueAgenda(e.target.value)}/>
                <Button id="AddButton" className="inputButton" variant="contained" onClick={handelButton}>
                        Add to MeetingScheduler
                </Button>
            </Stack>
        </>
    );
}
export class TimeSelect extends Component {
    render(){    
        return(
            <Grid>
                <Grid>
                    <AddMeeting/>
                </Grid>
            </Grid>
        )
    }
}


export default TimeSelect;