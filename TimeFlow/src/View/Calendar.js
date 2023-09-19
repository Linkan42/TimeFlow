
import React,{Component} from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export class Calandar extends Component {
    render(){
        return(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar  sx={{
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 200,
            width: 'auto',
            Height: '60vh'
            }}></DateCalendar>
          </LocalizationProvider>
        )
    }
}

export default Calandar;