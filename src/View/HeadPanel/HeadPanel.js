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


function DateButton() {
  const [buttonText, setButtonText] = useState("Click me");

  const handleButtonClick = () => {
    const currentDate = dayjs();
    setButtonText(currentDate.format("YYYY-MM-DD"));
  };

  return (
      <Button variant="contained" onClick={handleButtonClick}> {buttonText}</Button>
  );
}


function DaySelector() {
    return (
        <>
            
            <Button className="ButtonL" variant="filledTonal">
                ←
            </Button>
            <Button className="ButtonR" variant="filledTonal" onClick="OnButtonClickRight()">
                →
            </Button>
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
                <DaySelector></DaySelector>
                <DateButton></DateButton>
            
            </ThemeProvider>
        )

    }
}

export default HeadPanel;
