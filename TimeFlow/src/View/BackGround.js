import { Button } from "@mui/material";
import React,{Component} from "react";
import "./background.css"; // Import the CSS file

export class BackGround extends Component {

    render(){
        return(
        <div>
            <img src={require('./Images/001.png')} alt="logo" class="centered-image"/>
        </div>
        );
    }
}
export default BackGround;
