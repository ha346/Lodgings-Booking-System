import React, { useContext, useState } from 'react'
import "./login.css";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import Swal from "sweetalert2";

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
  
  const theme = createTheme();

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    });

    const { user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Succesfully Logged In',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/");
        }
        catch(err)
        {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Incorrect Username/Password',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

  return (
    // <div className="login">
    // <div className="lContainer">
    //     <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />    
    //     <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />    
    //     <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
    //     {error && <span>{error.message}</span>}
    // </div>
      
    // </div>
     
     <ThemeProvider theme={theme}>
     <Grid container component="main" sx={{ height: '100vh' }}>
       <CssBaseline />
       <Grid
         item
         xs={false}
         sm={4}
         md={7}
         sx={{
           backgroundImage: 'url(https://source.unsplash.com/random)',
           backgroundRepeat: 'no-repeat',
           backgroundColor: (t) =>
             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}
       />
       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
         <Box
           sx={{
             my: 8,
             mx: 4,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
           }}
         >
           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
             <LockOutlinedIcon />
           </Avatar>
           <Typography component="h1" variant="h5">
             Sign in
           </Typography>
           <Box component="form" noValidate onSubmit={handleClick} sx={{ mt: 1 }}>
             <TextField
               margin="normal"
               required
               fullWidth
               id="username"
               label="Username"
               name="username" 
               autoFocus
               onChange={handleChange}
             />
             <TextField
               margin="normal"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
               onChange={handleChange}            
             />
              
             <Button
                onClick={handleClick}
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
             >
               Sign In
             </Button>
             
             <Copyright sx={{ mt: 5 }} />
           </Box>
         </Box>
       </Grid>
     </Grid>
   </ThemeProvider>
  )
}

export default Login


/*

import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"

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

const theme = createTheme();

export default function AdminLogin() {
    const[emailid,setEmailId]=useState('')
    const[password,setPassword]=useState('')
    var navigate=useNavigate()
  const handleSubmit = async() => {
     
      var body = { emailid: emailid, password: password }
      var response = await postData('adminlogin/chkadminlogin', body)
    if (response.status) {
        localStorage.setItem('token',response.token)
        navigate('/dashboard')
        window.location.reload()
          // OR
          // navigate('/displaycities')
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Correct',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Incorrect Emailid/Password',
            showConfirmButton: false,
            timer: 1500
        })
    }
      
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(event)=>setEmailId(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event)=>setPassword(event.target.value)}
                              
              />
              
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                 onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

*/