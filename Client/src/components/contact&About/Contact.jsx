import React from 'react';
import "./contact.scss";
import Navbar from '../navbar/Navbar';

import TextField from '@mui/material/TextField';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Footer from '../footer/Footer';

const Contact = () => {

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
    
      const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        width: 680px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
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
    
   return (
    <div className="contactMainContainer">
      <Navbar />
      <div className='contactContainer'>
        <div className="contactTitle">Contact Us</div>
        <div className="contactTextField">
            <div className="contactTitleInput">
                <div className="contactNameTitle">Name *</div> 
                <div className="contactNameInput">      
                   <TextField fullWidth label="Name" id="name" />
                </div> 
            </div>    
            <div className="contactTitleInput">
                <div className="contactEmailTitle">Email address *</div> 
                <div className="contactEmailInput">      
                   <TextField fullWidth label="Email address" id="email" />
                </div> 
            </div>    
                <div className="contactTitleInput">
                <div className="contactPhoneTitle">Mobile number *</div> 
                <div className="contactPhoneInput">      
                   <TextField fullWidth label="Mobile number" id="mbno" />
                </div> 
            </div>    
            <div className="contactTitleInput">
                <div className="contactTextBoxTitle">How may we help you *</div>           
                <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
            </div>    
            <div className="contactSubmit">
                <Button variant="contained">Submit</Button>
            </div>
        </div>
      </div>
        <div className="contactFooter">
            <Footer />
        </div>
    </div> 
  )
}

export default Contact;
