import { Container, createTheme, ThemeProvider } from "@mui/material";
import React,{Component} from "react";

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
export class Calandar extends Component {
    render(){
        return(
            <ThemeProvider theme={theme}>
            <Container sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 200,
            width: '60%',
            height: '88vh',
            }}>
                Calandar test här 
            </Container>
            </ThemeProvider>
        )
    }
}

export default Calandar;