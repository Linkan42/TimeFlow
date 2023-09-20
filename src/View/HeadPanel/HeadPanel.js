import { ThemeProvider, createTheme, Button, Box, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { Component, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        }
    }
});

let currentDate = dayjs();
let weekDay     = dayjs().format('dddd');

function DateButton() {
    const [buttonText, setButtonText] = useState(`${dayjs().format("YYYY-MM-DD")}`);

    if (weekDay === dayjs().format('dddd') && currentDate.format("D") === dayjs().format("D"))
        weekDay = "Today";

    const handleButtonClick = () => {
        currentDate = dayjs();
        if (buttonText === dayjs().format("YYYY-MM-DD"))
            setButtonText(currentDate.format("dddd, DD MMMM YYYY"));
        else
            setButtonText(currentDate.format("YYYY-MM-DD"));
    };

    const handleButtonClickLeft = () => {
        currentDate = currentDate.add(-1, 'day');
        setButtonText(currentDate.format("YYYY-MM-DD"));
        weekDay = currentDate.format('dddd');
    }

    const handleButtonClickRight = () => {
        currentDate = currentDate.add(1, 'day');
        setButtonText(currentDate.format("YYYY-MM-DD"));
        weekDay = currentDate.format('dddd');
    }

  return (
      <>
            <Button sx={{width: '100px'}} variant="filledTonal">
            {weekDay}
            </Button>
            <Button className="ButtonL" variant="filledTonal" onClick={handleButtonClickLeft}>
                ←
            </Button>
            <Button className="ButtonR" variant="filledTonal" onClick={handleButtonClickRight}>
                →
            </Button>
            <Button className="dateButton" variant="primary" onClick={handleButtonClick} sx={{
                color: 'white',
                background: '#1793d1',
                boxShadow: 2
            }}> 
            {buttonText}
            </Button>
        </>
    );
}

export class HeadPanel extends Component {
    render () {
        return (
        <>
            <DateButton></DateButton>
        </>
        )

    }
}

export default HeadPanel;
