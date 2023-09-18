import { ThemeProvider, createTheme, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { Component } from "react";


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

const date = new Date();


function DaySelector() {
    return (
        <>
            <Button variant="filledTonal">
                ←
            </Button>
            <Button variant="filledTonal">
                →
            </Button>
            <DatePicker/>
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
                
            </ThemeProvider>
        )

    }
}

export default HeadPanel;