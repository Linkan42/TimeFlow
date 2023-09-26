import { List, Grid, ListItemButton } from "@mui/material";
import React,{Component} from "react";
import './MeetingStack.css'; 

export class MeetingStack extends Component {
    render(){
        return(
            <List className="MeetingList">
                {meetings.map( meeting => (
                    <ListItemButton>
                        <Grid background xs={12}>
                            <Grid xs={3}> From: {meeting.from} to {meeting.to}</Grid>
                            <Grid xs={8}>At {meeting.location}: {meeting.msg}</Grid>
                        </Grid>
                    </ListItemButton>
                ))} 
            </List>
        )
    }
}

const meetings = [
    {
        from: '11:00',
        to: '12:00',
        location: 'Hälso',
        msg : 'Math?'
    },
    {
      from: '11:00',
      to: '12:00',
      location: 'JTH',
      msg : 'Scrum what to hate?'
    },
    {
        from: '11:00',
        to: '12:00',
        location: 'JIBS',
        msg : 'Scrum what to love?'
      },
      {
        from: '11:00',
        to: '12:00',
        location: 'JTH',
        msg : 'online'
      },
]

export default MeetingStack;