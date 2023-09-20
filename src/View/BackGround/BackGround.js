import { Button, Container } from "@mui/material";
import React,{Component} from "react";
import "./background.css"; // Import the CSS file

export class BackGround extends Component {

    render(){
        return(
        <div>
            <Container className="container">
                <img src={require('./001.png')} alt="logo" class="centered-image"/>
            </Container>
        </div>
        );
    }
}
export default BackGround;
