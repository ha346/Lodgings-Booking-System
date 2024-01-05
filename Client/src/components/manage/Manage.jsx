import React,{useState} from 'react';
import "./manage.scss";
import Navbar from '../navbar/Navbar';

import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const Manage = () => {

    const [value, setValue] = useState('1');
    const [verify, setVerify] = useState(true);
    const [confirmation, setConfirmation] = useState(true);
    const [confirmationTaxi, setConfirmationTaxi] = useState("Confirmation Number");
    

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleVerify = () => {
        setVerify(false);
    }
    
    const handleVerifyPersonal = () => {
        setVerify(true);
    }
    
    const handleConfirmationCar = () => {
        setConfirmation(false);
    }

    const handleConfirmationTaxi = () => {
        setConfirmation(false);
        setConfirmationTaxi("Taxi Reference Number");
    }

    const handleConfirmationAccomodation = () => {
        setConfirmation(true);
    }

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
        width: 100%;
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
            
    <div className="manageMainContainer">
        <div className="manageText">
            <div className="manageTextBold">Exercise your rights regarding your personal data</div>  
              <div className="manageTextSmall">     
                  Exercise your privacy rights under local law. To make a request to IAmBooking.com and have it routed to the IAmBooking.com privacy team, use the ‘Data subject request form’.<br /><br />
               
                  If your request relates to a rental car or taxi reservation, you may also receive a response from IAmBooking.com Transport Limited. This is because these services are provided in cooperation with IAmBooking.com Transport Limited.<br /> <br />

                  For more information, or to exercise other rights, please take a look at our <a href="#">IAmBooking.com Privacy Statement</a>, the <a href="#">IAmBooking.com Transport Limited Privacy Statement for Cars</a> and the <a href="#">IAmBooking.com Transport Limited Privacy Statement for Taxis.</a>
              </div>
        </div>
          
        <div className="manageInput">
            <div className="firstName">
                <div className="nameText">First name(s) *</div>
                <Input aria-label="Demo input" required />
            </div> 
            <div className="lastName">
                <div className="nameText">Last name(s) *</div>
                <Input aria-label="Demo input" className="textField" required />
            </div>
            <div className="emailAddress">
                <div className="nameText">Email address *</div>
                <Input aria-label="Demo input" className="textField" required />
            </div>
        </div>
          
        <div className="manageRadio1">
            <div className="manageRadioText">Which of the following rights would you like to exercise?</div>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            >
            <div className="manageRadioRadio">
                <FormControlLabel value="1" onClick={handleVerifyPersonal} control={<Radio />} label="Right of access to personal data" />
            <div className="manageRadioRadioText">Get a copy of your personal data.</div>
            </div>
            <div className="manageRadioRadio">
                <FormControlLabel value="2" onClick={handleVerify} control={<Radio />} label="Right to be forgotten" />
            <div className="manageRadioRadioText">Erase your personal data from our system.</div>
            </div>
            <div className="manageRadioRadio">
                <FormControlLabel value="3" onClick={handleVerify} control={<Radio />} label="Unsubscribe from email marketing" />
            <div className="manageRadioRadioText">Manage your subscription to our mailing lists.</div>
            </div>
            <div className="manageRadioRadio">
                <FormControlLabel value="4" onClick={handleVerify} control={<Radio />} label="Right to object to data sharing with other companies in the corporate group" />
            <div className="manageRadioRadioText">Right to object to data sharing with other companies in the Booking Holdings Inc. corporate group</div>
            </div>
        </RadioGroup>
        </div>

        {               
            verify ?
        <>      
        <div className="manageRadio2">
            <div className="manageRadioText">Please provide us one of the following references to verify your request</div>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            >
            <div className="manageRadioRadio">
                <FormControlLabel value="1" onClick={handleConfirmationAccomodation} control={<Radio />} label="IAmBooking.com accommodation confirmation number" />
            </div>
            <div className="manageRadioRadio">
                <FormControlLabel value="6" onClick={handleConfirmationCar} control={<Radio />} label="IAmBooking.com car reservation number" />
            </div>
            <div className="manageRadioRadio">
                <FormControlLabel value="7" onClick={handleConfirmationTaxi} control={<Radio />} label="IAmBooking.com taxi reference number" />
            </div>
            </RadioGroup>
        </div>
          
        <div className="manageConfirmation">
            <div className="confirmation">
                <div className="confirmationTitle">{confirmationTaxi} from a previous IAmBooking:*</div>
                <Input aria-label="Demo input" required />
                <div className="confirmationText">An 8-20 digit confirmation number can be found in the top-right corner of any confirmation email from a previous IAmBooking, or by logging into your IAmBooking.com account (if applicable).</div>
            </div> 
                                
            {
                confirmation ?
            <div className="pinCode">
                <div className="pinCodeTitle">PIN code from that same IAmBooking:*</div>
                <Input aria-label="Demo input" required />
                <div className="pinCodeText">The 4-6 digit PIN code can be found next to your confirmation number.</div>
            </div> 
                : ""
            }
        </div>
        </>
          : ""      
        }
        <div className="manageSubmit">Submit Request</div>
    </div>
    </div>
  )
}

export default Manage;
