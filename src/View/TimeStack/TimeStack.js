
import { Grid, Container, Stack, Button} from "@mui/material";
import React,{Component} from "react";
import {MeetingCoworkerList} from './MeetingCoworkerList/MeetingCoworkerList';
import {TimeSelect} from './TimeSelect/TimeSelect';
import {MeetingStack} from './MeetingStack/MeetingStack'
import './TimeStack.css'
import { useNavigate } from "react-router-dom";

function HomeButton() {

    const navigate = useNavigate();
    const handleButtonHome = () => {
        navigate("/Home");
    }

  return (
         <>
            <Button className="RouteButton" onClick={handleButtonHome}>
                Done
            </Button>
        </>
    );
}
export class TimeStack extends Component {
    render(){
        return(
            <Container className="BackGround">
                <img src={require('./00035-1031831487.png')} alt="logo" class="centered-image"/>
                <Stack>
                    <Grid className="block" container item xs={8}>
                        <Grid item xs={4}>
                            <MeetingCoworkerList className="CoworkerList"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid>
                                <TimeSelect className="std"/>  
                                <MeetingStack className="std"/>
                            </Grid>                     
                        </Grid>      
                    </Grid>
                    <HomeButton/>
                </Stack>
            </Container>
        )
    }
}


export default TimeStack;