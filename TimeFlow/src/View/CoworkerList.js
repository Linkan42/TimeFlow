
import { List, ListItemButton, ListItemText, createTheme, ThemeProvider, Box } from "@mui/material";
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

export class CoworkerList extends Component {
    render(){
        return(
        <ThemeProvider theme={theme}>
            <List sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 200,
            width: '20%',
            height: 'auto'
            }}>
                {menuItems.map(item => (
                    <ListItemButton>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <ListItemText primary={item.name} sx={{fontSize: '1.5rem',  p: 2}}/>
                            <ListItemText secondary={item.work} sx={{fontSize: '1.5rem', p: 2}} />
                            <ListItemText secondary={item.availability} sx={{fontSize: '1.5rem', p: 2}} />
                        </Box>
                    </ListItemButton>
                ))} 
            </List>
        </ThemeProvider>
        )
    }
}

const menuItems = [
    {
        name: 'Linus',
        work: 'JTH',
        availability : 'online'
    },
    {
        name: 'Ivo',
        work: 'HLK',
        availability : 'online'
    },
    {
        name: 'Lukas',
        work: 'JIBS',
        availability : 'online'
    },
    {
        name: 'Oskar',
        work: 'Hälso',
        availability : 'online'
    },
    {
        name: 'Lars-Olaf',
        work: 'Watch Out!',
        availability : 'online'
    },
    {
        name: 'WowJoke',
        work: 'Är det något med klockan?',
        availability : 'online'
    },

]

export default CoworkerList;