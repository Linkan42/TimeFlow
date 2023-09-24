import { Container, createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
    }
}});
export function NextMeeting(props) {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    //minWidth: 200,
                    //width: '20vw',
                    maxHeight: '60vh',
                    overflow: 'auto' 
            }}>
                <h1> Next Meeting </h1>
                <h3> Time: 11:00 </h3>
                <h3> Place: JTH Towers </h3>
            </Container>
        </ThemeProvider>
    );
}
/* <p> Time: {props.time} </p>
   <p> Place: {props.place}</p> */
// Denna kod skall användas senare

export default NextMeeting;