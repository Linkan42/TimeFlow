import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import './Login.css';
import useValidateEmail from './useValidateEmail';
import useValidateName from './useValidateName';
import useCreateUser from './useCreateUser';

function FormDialog() {
    const [open, setOpen]                     = React.useState(false);
    const [validEmail, setValidEmail]         = React.useState(true);
    const [validUserName, setValidUserName]   = React.useState(true);
    const [passwordsMatch, setPasswordsMatch] = React.useState(true);

    const [email, setEmail]                   = React.useState('');
    const [userName, setUserName]             = React.useState('');
    const [password1, setPassword1]           = React.useState('');
    const [password2, setPassword2]           = React.useState('');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const HandleCreateAccount = async () => {
        //if email exists in database, display error
        const {ValidateEmail} = useValidateEmail();
        const {ValidateName}  = useValidateName();

        const EmailExists = await ValidateEmail(email);
        const NameExists  = await ValidateName(userName);

        console.log(EmailExists);
        console.log(NameExists);

        let userid = 0;

        const {CreateUser} = useCreateUser(email, userName, password2, userid);

        if(EmailExists)
          setValidEmail(false);
        else
          setValidEmail(true);
        if(NameExists)
          setValidUserName(false);
        else
          setValidUserName(true);
        if(!passwordsMatch){
          //cant create account
        }
        if(!EmailExists && !NameExists && passwordsMatch){
          //create account
          await CreateUser(email, userName, password2);
          setOpen(false);
        }
    }
  
    const handlePasswordsMatch = (e) => {
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              error={!validEmail}
              helperText={!validEmail ? 'Email already exists' : ''}
              margin="dense"
              id="emailtf"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              error={!validUserName}
              helperText={!validUserName ? 'Name already exists' : ''}
              margin="dense"
              id="usernametf"
              label="Account Name"
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
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
              onChange={handlePasswordsMatch}
              error={!passwordsMatch}
              helperText={!passwordsMatch ? 'Passwords do not match!' : ''}
              margin="dense"
              id="pwtf2"
              label="Confirm password"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={HandleCreateAccount}>Create account</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default function SignIn() {
  
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');


  /*const [EmailExists, setEmailExists]       = React.useState(true);*/
  let auth = true;

  const HandleSignIn =  async () => {
    console.log(email);
    console.log(password);
    //const {ValidateLogin} = useValidateLogin();

    auth = false;

    const response = await fetch('/api/ValidateLogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: password
      })
    });
    if (response.ok) {
      console.log('good response authentication successful');
      auth = true;
    }
    else {
      console.log(response);
      console.log('bad response authentication failed');
      auth = false;
    }

    console.log(auth);
    
    if (auth)
        return window.location.href = '/home';
  }

  return (
    <div className='loginContainer'>
    <Paper className='loginWindow' elevation={3}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {//<LockOutlinedIcon />}
            }</Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              error={!auth}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              error={!auth}
              helperText={!auth ? 'Wrong password or username' : ''}
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
              type="button"
              fullWidth
              variant="contained"
              onClick={HandleSignIn}
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
      </Container>
    </Paper>
    </div>
  );
}