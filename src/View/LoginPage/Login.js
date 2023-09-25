import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import './Login.css';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function FormDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleCreateAccount = () => {
        
    }

    const [passwordsMatch, setPasswordsMatch] = React.useState(true);
    const [password1, setPassword1] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    const handlePassword1Change = (e) => {
        setPassword1(e.target.value);
        setPasswordsMatch(e.target.value === password2);
      };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
        setPasswordsMatch(e.target.value === password1);
    }
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          create account
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Create an account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create an account please enter your email address and set a password for your account.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="emailtf"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              value={password1}
              onChange={handlePassword1Change}
              type="password"
              margin="dense"
              id="pwtf1"
              label="Password"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              value={password2}
              onChange={handlePassword2Change}
              error={!passwordsMatch}
              helperText={!passwordsMatch ? 'Passwords do not match!' : ''}
              margin="dense"
              id="pwtf2"
              label="Re-type password"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleCreateAccount}>Create account</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  const [userName, setUserName] = React.useState('');
  const [userpw, setUserpw]     = React.useState('');

  const handleSignIn = () => {
    if (userName === 'admin' && userpw === 'admin')
        return window.location.href = '/home';
  }

  return (
    <Container className='loginContainer'>
    <Paper className='loginWindow' elevation={3}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: './legoman.png'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {//<LockOutlinedIcon />}
            }</Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setUserpw(e.target.value)}
              value={userpw}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSignIn}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <FormDialog>

                </FormDialog>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </Paper>
    </Container>
  );
}