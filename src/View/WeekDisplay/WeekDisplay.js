import { Grid, Stack, ListItemButton, ListItemText } from "@mui/material";
import React,{Component} from "react";
import '../color.css';
import './WeekDisplay.css';

export class WeekDisplay extends Component {
    render(){
        return(
            <Grid className="Panel">
                <Stack className="StackPanel" spacing={1}>
                    {Meetings.map(Meeting => (
                        <ListItemButton className="ListItemButton">
                            <Grid container spacing={2}>
                                <Grid InfoBox xs={10}>
                                    <ListItemText className="TextPlace" primary={Meeting.location} />
                                </Grid>
                                <Grid item xs={2}>
                                <ListItemText className="Text" primary={ <React.Fragment> {Meeting.start} to {Meeting.end} </React.Fragment>}/>
                                </Grid>
                                <Grid item xs={10}>
                                    <ListItemText className="Text" primary={Meeting.msg}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <ListItemText className="Text" primary={ <React.Fragment> Invited by {Meeting.creator}</React.Fragment>}/>
                                </Grid>
                            </Grid>
                        </ListItemButton>
                    ))} 
                </Stack>
            </Grid>
        )
    }
}

const Meetings = [
    {
        location: 'JTH Towers',
        start: '11:00',
        end: '12:00',
        msg: 'To scrum or not to scrum?',
        creator: 'Linus',
    },
    {
        location: 'E3303',
        start: '10:00',
        end: '11:00',
        msg: 'Srum a wast of time and money??',
        creator: 'Oskar',
    },
    {
        location: 'E1219',
        start: '05:00',
        end: '06:00',
        msg: 'I like scrum!',
        creator: 'Lucas',
    },
    {
        location: 'E4404',
        start: '12:00',
        end: '14:00',
        msg: 'Ageing in a Welfare State 101',
        creator: 'Ivo',
    },
    {
        location: 'E1219',
        start: '08:30',
        end: '09:00',
        msg: 'Advanced Failure Analysis',
        creator: 'Oskar',
    },
    {
        location: 'E1219',
        start: '07:15',
        end: '12:00',
        msg: 'How to fish, a comprehensive guide!',
        creator: 'Linus',
    },
]

export default WeekDisplay;