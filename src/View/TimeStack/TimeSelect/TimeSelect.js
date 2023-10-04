import { TextField, Stack, Button, List, ListItemButton, Grid, Checkbox} from "@mui/material";
import {React, Component, useState, useE} from "react";
import './TimeSelect.css';
import useUpdateTimeSelect from './useTimeSelect';
import useGetUserList from './useGetUserList';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function AddMeeting() {
    const [inputValueFrom, setInputValueFrom] = useState('');
    const [inputValueTo, setInputValueTo] = useState('');
    const [inputValueLocation, setInputValueLocation] = useState('');
    const [inputValueAgenda, setInputValueAgenda] = useState('');
    const {UpdateTimeSelect, err} = useUpdateTimeSelect();
    const {GetUserList} = useGetUserList();
        const handelButton = async () =>
        { 
            if(err !== true)
            {
                try{
                    await UpdateTimeSelect(inputValueLocation, inputValueAgenda, inputValueFrom, inputValueTo);
                }
                catch(error) {
                    console.error(error);
                }
            }
            
        };
        const getUserList = async () =>
        {
            try{
                menuItems = await GetUserList();
            }
            catch(error) {
                console.error(error);
            }
        }
        getUserList();
  return (
         <>
            <Stack direction={"row"}>
             <List className="coWorkerList">
                {menuItems.map(item => (
                    <ListItemButton className="coWorkerInfo">
                      <Grid container xs={12}>
                            <Grid xs={8}>{item.Name}</Grid>
                            <Grid xs={4}>
                                <Checkbox sx={{
                                                color: "Black",
                                                '&.Mui-checked': {
                                                color: "darkorange",
                                                },
                                                }}></Checkbox>
                            </Grid>
                            <Grid xs={6}>{item.work}</Grid>
                      </Grid>
                    </ListItemButton>
                ))} 
             </List>
            <Grid>
                <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="date"/>
                </LocalizationProvider>
                    <TextField className="input" label="From:" value={inputValueFrom} onChange={(e) => setInputValueFrom(e.target.value)}/>
                    <TextField className="input" label="To:"   value={inputValueTo} onChange={(e) => setInputValueTo(e.target.value)}/>
                    <TextField className="input" label="Location" value={inputValueLocation} onChange={(e) => setInputValueLocation(e.target.value)}/>
                    <TextField className="input" label="Meeting name" value={inputValueAgenda} onChange={(e) => setInputValueAgenda(e.target.value)}/>
                <Button id="AddButton" className="inputButton" variant="contained" onClick={handelButton}>
                        Add to MeetingScheduler
                </Button>
                </Stack>
            </Grid>
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
let menuItems = [];



export default TimeSelect;