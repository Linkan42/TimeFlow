import { Button, Box} from "@mui/material";
import React, { Component, useState } from "react";
import dayjs from 'dayjs';


let currentDate = dayjs();
let weekDay     = dayjs().format('dddd');

function DateButton() {
    const [buttonText, setButtonText] = useState(`${dayjs().format("dddd, DD MMMM YYYY")}`);
 
    if (weekDay === dayjs().format('dddd') && currentDate.format("D") === dayjs().format("D"))
        weekDay = "Today";

    const handleButtonClick = () => {
        currentDate = dayjs();
        if (buttonText === dayjs().format("dddd, DD MMMM YYYY"))
            setButtonText(currentDate.format("YYYY-MM-DD"));
        else
            setButtonText(currentDate.format("dddd, DD MMMM YYYY"));
        weekDay = currentDate.format('dddd');

    };

    const handleButtonClickLeft = () => { 
        currentDate = currentDate.add(-1, 'day');
        if (buttonText === dayjs().format("dddd, DD MMMM YYYY"))
            setButtonText(currentDate.format("dddd, DD MMMM YYYY"));
        else
            setButtonText(currentDate.format("YYYY-MM-DD"));
        weekDay = currentDate.format('dddd');
    }

    const handleButtonClickRight = () => {
        currentDate = currentDate.add(1, 'day');
        if (buttonText === dayjs().format("dddd, DD MMMM YYYY"))
            setButtonText(currentDate.format("dddd, DD MMMM YYYY"));
        else
            setButtonText(currentDate.format("YYYY-MM-D D"));
        weekDay = currentDate.format('dddd');
    }

  return (
         <>

            <Button sx={{width: '125px', boxShadow: 5, color: 'white', background: 'darkorange', top: 5}} variant="filledTonal" >
            {weekDay}
            </Button>
            <Button  className="ButtonL" variant="filledTonal" onClick={handleButtonClickLeft} sx={{top: 5, color: 'white'}}>
                ←
            </Button>
            <Button className="ButtonR" variant="filledTonal" onClick={handleButtonClickRight} sx={{top: 5,color: 'white'}}>
                →
            </Button>
            <Button className="dateButton" variant="primary" onClick={handleButtonClick} sx={{top: 5, color: 'white'}}> 
            {buttonText}
            </Button>
            <Button sx={{position: 'absolute', right: 30, top: 5, color: 'white'}}>
                LOGOUT
            </Button>
            <Button variant='contained' sx={{position: 'absolute', right: 115, top: 5, background: 'darkorange'}}>
                + book meeting
            </Button>
        </>
    );
}

export class HeadPanel extends Component {
    render () {
        return (
        <>
        <Box sx={{
            display: 'flow',
            width: 'fill',
            height: 50,
            background: 'steelblue'
        }}>
            <DateButton></DateButton>
        </Box>
        </>
        )

    }
}

export default HeadPanel;
