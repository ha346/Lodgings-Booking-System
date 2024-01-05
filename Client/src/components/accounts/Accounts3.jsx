import React, {useContext,useState} from 'react';
import "./accounts3.scss"; 
import { AuthContext } from "../../context/AuthContext";

import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const Accounts3 = () => { 

  const { user } = useContext(AuthContext); 

  const [password, setPassword] = useState(true);
  const [phone, setPhone] = useState(true);

  const [cancel, setCancel] = useState(true);

  const [disabledPassword, setDisabledPassword] = useState(false);
  const [disabledPhone, setDisabledPhone] = useState(false); 

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
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
  
    const handleClick1 = () => {
      setPassword(false);
      setDisabledPhone(true); 
  }

  const handleClick2 = () => {
    setPhone(false);
    setDisabledPassword(true);  
  }
  
  const handleCancel = () => {
    setPassword(true);
    setPhone(true); 

    setDisabledPhone(false); 
    setDisabledPassword(false); 
}
   
  return (
    <div className="securityTableContainer">
       <div className="securityDetailsMainContainer">
       <div className="securityDetailsText">
           <div className="boldText">Security</div>
           <div className="smallText">Adjust your security settings and set up two-factor authentication.</div>
       </div> 
       </div>
        <hr style={{color:"gray",width:"95%",marginLeft:"18px"}} />

          <div className="accounts3Block">
          {password ?
            <>
            <div className="accounts3BlockTitle">Password</div>
            <div className="accounts3BlockText">Reset your password regularly to keep your account secure.</div>
            <div style={{width:"60px",marginLeft:"3%"}} aria-disabled={disabledPassword} className={(disabledPassword) ? "accounts1BlockEditDisabled" : "accounts3BlockEdit"} onClick={handleClick1}>Reset</div>  
            </>
            :
            <div className="accounts1BlockEditClick">
            <div className="accounts1BlockTitle">Password</div>           
            <div className='accounts1BlockTextInput'>
                <div className="inputText">
                    <div className="nameText">Password <span className="starExponent">*</span></div>
                    <div className="inputData">
                       <Input aria-label="Demo input" required />
                    </div>
                </div> 
            </div>
            <div className="accounts1BlockCancelSave">
               <div className="accounts1BlockCancel" onClick={handleCancel}>Cancel</div>    
               <div className="accounts1BlockSave">Save</div>
            </div>
            </div> } 
          </div> 
          <hr style={{ color: "gray", width: "95%", marginLeft: "18px", marginTop: "15px" }} />
          
          <div className="accounts3Block">
          {phone ?
            <>
            <div className="accounts3BlockTitle">Two-factor authentication</div>
            <div className="accounts3BlockText">Add a phone number to set up two factor authentication</div>
            <div style={{width:"64px",marginLeft:"3%"}} aria-disabled={disabledPhone} className={(disabledPhone) ? "accounts1BlockEditDisabled" : "accounts3BlockEdit"} onClick={handleClick2}>Set up</div>  
            </>
            :
            <div className="accounts1BlockEditClick">
            <div className="accounts1BlockTitle">Phone</div>           
            <div className='accounts1BlockTextInput'>
                <div className="inputText">
                    <div className="nameText">Phone <span className="starExponent">*</span></div>
                    <div className="inputData">
                       <Input aria-label="Demo input" placeholder={user.phone} required />
                    </div>
                </div> 
            </div>
            <div className="accounts1BlockCancelSave">
               <div className="accounts1BlockCancel" onClick={handleCancel}>Cancel</div>    
               <div className="accounts1BlockSave">Save</div>
            </div>
            </div> } 
          </div> 
          <hr style={{ color: "gray", width: "95%", marginLeft: "18px", marginTop: "15px" }} />
          
          <div className="accounts3Block">
            <div className="accounts3BlockTitle">Active sessions</div>
            <div className="accounts3BlockText">Selecting ‘Sign out’ will sign you out from all devices. The process can take up to 10 minutes.</div>
            <div style={{width:"77px",marginLeft:"2%"}} className="accounts3BlockEdit">Sign out</div>  
          </div> 
          <hr style={{ color: "gray", width: "95%", marginLeft: "18px", marginTop: "15px" }} />
          
          <div className="accounts3Block">
            <div className="accounts3BlockTitle">Delete account</div>
            <div className="accounts3BlockText">Permanently delete your Iambooking.com account</div>
            <div className="accounts3BlockEdit" style={{paddingLeft:"5px",paddingRight:"7px"}}>Delete account</div>  
          </div> 
          <hr style={{ color: "gray", width: "95%", marginLeft: "18px", marginTop: "15px" }} />

   </div>
  )
}

export default Accounts3;
