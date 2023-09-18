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

export class Messages extends Component {
    render(){
        return(
            <ThemeProvider theme={theme}>
                <Container sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    width: '100vw',
                    height: '20vh'
                }}>
                    messages here
                </Container>
            </ThemeProvider>
        )
    }
}

export default Messages;