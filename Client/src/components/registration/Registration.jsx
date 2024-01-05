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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Recaptcha from "react-google-recaptcha";
import Navbar from '../navbar/Navbar';


function onChange(value){
    console.log("Captcha Value: ", value);
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        IAmBooking.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Registration() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

    return (
    <div style={{marginBottom:"4%",overflowX:"hidden"}}>
     <Navbar />
     <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Recaptcha  
                    sitekey="6LcxpBMpAAAAAHdLPJOAW41Qb29qM-qxi_OnrbSU"
                    onChange={onChange}
                />  
              </Grid>                
              <Grid item xs={12} style={{display:"flex",marginTop:"2%"}}>
                <FormControlLabel                   
                  control={<Checkbox style={{marginTop:"-20px"}} value="allowExtraEmails" color="primary" />}
                />
                <div style={{marginLeft:"-4%",fontSize:"14px"}}>
                I want to receive inspiration, marketing promotions and updates via email.              
                </div>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <div style={{ marginTop: "7%", fontSize: "13px", marginLeft:"2%"}}>By clicking “Sign up”, you agree to our <Link to="/terms"> terms of service </Link> and acknowledge that you have read and understand our <Link to="/privacy"> privacy policy. </Link></div>          
            <Grid container justifyContent="center" marginTop="7%">
              <Grid item style={{fontSize:"14px",width:"100%",display:"flex",justifyContent:"center"}}>
                Already have an account?
                <Link href="/loginComponent" variant="body2" style={{marginLeft:"1%"}}>
                   Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}