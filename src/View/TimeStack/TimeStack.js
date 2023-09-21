
import { Grid, Stack } from "@mui/material";
import React,{Component} from "react";
import {TimeSelect} from './TimeSelect/TimeSelect';
import './TimeStack.css'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export class TimeStack extends Component {
    render(){
        return(
            <Grid>
                <Stack direction="row">
                <Grid>
                    <Stack>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker/>
                        </LocalizationProvider>
                        <TimeSelect></TimeSelect>
                    </Stack>
                </Grid>
                </Stack>
            </Grid>
        )
    }
}


export default TimeStack;