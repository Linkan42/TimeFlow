import { ThemeProvider, createTheme, Button, Box, Grid } from "@mui/material";
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
            setButtonText(currentDate.format("YYYY-MM-DD"));
        weekDay = currentDate.format('dddd');
    }

  return (
         <>
            <Button sx={{width: '125px', boxShadow: 5, color: 'white', background: '#1793d1'}} variant="filledTonal">
            {weekDay}
            </Button>
            <Button  className="ButtonL" variant="filledTonal" onClick={handleButtonClickLeft}>
                ←
            </Button>
            <Button className="ButtonR" variant="filledTonal" onClick={handleButtonClickRight}>
                →
            </Button>
            <Button className="dateButton" variant="primary" onClick={handleButtonClick}> 
            {buttonText}
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
            background: 'white',
            alignContent: 'bottom'
        }}>
            <DateButton></DateButton>
        </Box>
        </>
        )

    }
}

export default HeadPanel;
