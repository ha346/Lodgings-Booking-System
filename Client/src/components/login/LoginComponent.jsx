import React from 'react';
import "./loginComponent.scss";
import Navbar from '../navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom'; 

import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
 
import IconButton from '@mui/material/IconButton'; 
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment'; 
import FormControl from '@mui/material/FormControl'; 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const LoginComponent = () => {

  const navigate = useNavigate();

  const handleSignUpWithEmail = () => {
    navigate("/registration");
  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const InputElement = styled('input')(
    ({ theme }) => `
    width: 92%;
    margin-top:10px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const Input = React.forwardRef(function CustomInput(props, ref) {
    return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});
  
  
  return (
    <div style={{overflowX:"hidden"}}>
        <Navbar />
        <div className="loginContainer">
          <div className="signInText">Sign in or create an account</div>
        
          <div className="loginEmailPhone">
            <div className="loginEmail">
                <div className="loginEmailText">Email address</div>
                <div className="loginInputData">
                  <Input aria-label="Demo input" placeholder="Enter your email address" required />
                </div> 
            </div>
            <div className="loginPassword">
              <div className="loginPasswordText">Password</div>
              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                />
               </FormControl>
            </div>
            <div className="loginButton">Sign In</div> 
          </div>

          <div className="loginHr">------------------------ or use one of these options -----------------------</div>
        
          <div className="continueWith">
             <div className="googleAuthentication" style={{marginLeft:"13%"}}>
              <GoogleOAuthProvider clientId="504260706689-n4a11cps1952ailjg2qb6kogebl0oou7.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    const decoded = jwtDecode(JSON.stringify(credentialResponse));
                    console.log(decoded);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider> 
             </div>    
             <div className="signUpWithEmail" onClick={handleSignUpWithEmail}>Sign Up With Email</div>
          </div>
           
          <hr style={{width:"33%",marginTop:"3%",marginRight:"4%"}} />
            <div className="loginTerms">By signing in or creating an account, you agree with our <a href="/terms">Terms & <br/> <br /> conditions</a> and <a href="privacy">Privacy statement</a></div>
          <hr style={{width:"33%",marginTop:"1%",marginRight:"4%"}} />
        
          <div className="loginRights">
            <div className="rightsReserved">All rights reserved.</div>
            <div className="copyright">Copyright 2023 - IAmBooking.com™</div>
          </div>
        
        </div>
          
    </div>
  )
}

export default LoginComponent;
