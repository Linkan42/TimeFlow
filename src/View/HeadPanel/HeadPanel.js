import { ThemeProvider, createTheme, Button, Box } from "@mui/material";
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

function DateButton() {
    const [buttonText, setButtonText] = useState(`${dayjs().format("YYYY-MM-DD")}`);

    

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
    }

    const handleButtonClickRight = () => {
        currentDate = currentDate.add(1, 'day');
        setButtonText(currentDate.format("YYYY-MM-DD"));
    }

  return (
      <>
            <Button className="ButtonL" variant="filledTonal" onClick={handleButtonClickLeft}>
                ←
            </Button>
            <Button className="ButtonR" variant="filledTonal" onClick={handleButtonClickRight}>
                →
            </Button>
            <Button className="dateButton" variant="primary" onClick={handleButtonClick}> {buttonText}</Button>
        </>
    );
}

function TodayButton() {
    return (
        <Button variant="filledTonal">
            Today
        </Button>
    );
}

export class HeadPanel extends Component {
    render () {
        return (
            <ThemeProvider theme={theme}>
                
                <TodayButton></TodayButton>
                <DateButton></DateButton>
            
            </ThemeProvider>
        )

    }
}

export default HeadPanel;
