import React, {useContext, useState} from 'react';
import "./accounts1.scss";
import { AuthContext } from "../../context/AuthContext";
import Avatar from '@mui/material/Avatar';

import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
    },
  },
};

const names = [
  'Male',
  'Female',
  'Other',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Accounts1 = () => {

    const { user } = useContext(AuthContext);  
    console.log("Accounts1 User: ", user); 

    const firstPlusLast = user.username.split(' ');
    
    const [name, setName] = useState(true);
    const [displayName, setDisplayName] = useState(true);
    const [email, setEmail] = useState(true);
    const [phone, setPhone] = useState(true);
    const [nationality, setNationality] = useState(true);
    const [gender, setGender] = useState(true);
    const [city, setCity] = useState(true);

    const [cancel, setCancel] = useState(true);

    const [disabledName, setDisabledName] = useState(false);
    const [disabledDisplayName, setDisabledDisplayName] = useState(false);
    const [disabledEmail, setDisabledEmail] = useState(false);
    const [disabledPhone, setDisabledPhone] = useState(false); 
    const [disabledGender, setDisabledGender] = useState(false);
    const [disabledCity, setDisabledCity] = useState(false);

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
        setName(false);
 
        setDisabledDisplayName(true);
        setDisabledEmail(true);
        setDisabledPhone(true); 
        setDisabledGender(true);
        setDisabledCity(true); 
    }

    const handleClick2 = () => {
        setDisplayName(false);

        setDisabledName(true);
        setDisabledEmail(true);
        setDisabledPhone(true); 
        setDisabledGender(true);
        setDisabledCity(true);
    }

    const handleClick3 = () => {
        setEmail(false);

        setDisabledName(true);
        setDisabledDisplayName(true);
        setDisabledPhone(true); 
        setDisabledGender(true);
        setDisabledCity(true);
    }

    const handleClick4 = () => {
        setPhone(false);

        setDisabledName(true);
        setDisabledDisplayName(true);
        setDisabledEmail(true); 
        setDisabledGender(true);
        setDisabledCity(true);
    }

    const handleClick6 = () => {
        setGender(false);

        setDisabledName(true);
        setDisabledDisplayName(true);
        setDisabledEmail(true);
        setDisabledPhone(true);  
        setDisabledCity(true);
    }

    const handleClick7 = () => {
        setCity(false);

        setDisabledName(true);
        setDisabledDisplayName(true);
        setDisabledEmail(true);
        setDisabledPhone(true); 
        setDisabledGender(true);
    }

    const handleCancel = () => {
        setName(true);
        setDisplayName(true);
        setEmail(true);
        setPhone(true);
        setNationality(true);
        setGender(true);
        setCity(true);

        setDisabledName(false);
        setDisabledDisplayName(false);
        setDisabledEmail(false);
        setDisabledPhone(false); 
        setDisabledGender(false);
        setDisabledCity(false);
    }
   
  return (
    <div className="personalTableContainer"> 
       <div className="personalDetailsMainContainer">
       <div className="personalDetailsText">
           <div className="boldText">Personal Details</div>
           <div className="smallText">Update your information and find out how it's used.</div>
       </div>
       <div className="personalDetailsImage">        
           <Avatar
               alt="Travis Howard"
               src={user.img} 
           />
       </div>
       </div>
       <hr style={{ color: "gray", width: "98%", marginLeft: "18px" }} />
          
          <div className="accounts1Block">
            {name ?
            <>
            <div className="accounts1BlockTitle">Name</div>
            <div className="accounts1BlockText">{user.username}</div> 
            <div aria-disabled={disabledName} className={(disabledName) ? "accounts1BlockEditDisabled" : "accounts1BlockEdit"} onClick={handleClick1}>Edit</div> 
            </>           
            :
            <div className="accounts1BlockEditClick">
            <div className="accounts1BlockTitle">Name</div>           
            <div className='accounts1BlockTextInput'>
                <div className="inputText">
                    <div className="nameText">First name(s) <span className="starExponent">*</span></div>
                    <Input aria-label="Demo input" placeholder={firstPlusLast[0]} required />
                </div> 
                <div className="inputText">
                    <div className="nameText">Last name(s) <span className="starExponent">*</span></div>
                    <Input aria-label="Demo input" placeholder={firstPlusLast[1]} className="textField" required />
                </div>
            </div>
            <div className="accounts1BlockCancelSave">
               <div className="accounts1BlockCancel" onClick={handleCancel}>Cancel</div>    
               <div className="accounts1BlockSave">Save</div>
            </div>
            </div>          
            }
        </div> 
          
        <hr style={{ color: "gray", width: "98%", marginLeft: "18px", marginTop: "15px" }} />
          
        <div className="accounts1Block">
            {displayName ?
            <>
            <div className="accounts1BlockTitle">Display Name</div>
            <div className="accounts1BlockText">Choose a display name</div> 
            <div aria-disabled={disabledDisplayName} className={(disabledDisplayName) ? "accounts1BlockEditDisabled" : "accounts1BlockEdit"} onClick={handleClick2}>Edit</div> 
            </>           
            :
            <div className="accounts1BlockEditClick">
            <div className="accounts1BlockTitle">Display Name</div>           
            <div className='accounts1BlockTextInput'>
                <div className="inputText">
                    <div className="nameText">Display Name <span className="starExponent">*</span></div>
                    <div className="inputData">
                       <Input aria-label="Demo input" required />
                    </div>
                </div> 
            </div>
            <div className="accounts1BlockCancelSave">
               <div className="accounts1BlockCancel" onClick={handleCancel}>Cancel</div>    
               <div className="accounts1BlockSave">Save</div>
            </div>
            </div>          
            }
        </div> 
          
        <hr style={{ color: "gray", width: "98%", marginLeft: "18px", marginTop: "15px" }} />
          
        <div className="accounts1Block">
            {email ?
                  <>
            <div className="accounts1BlockTitle">Email address</div>
            <div className="accounts1BlockText">{user.email}</div> 
            <div aria-disabled={disabledEmail} className={(disabledEmail) ? "accounts1BlockEditDisabled" : "accounts1BlockEdit"} onClick={handleClick3}>Edit</div>  
            </>
              :
            <div className="accounts1BlockEditClick">
            <div className="accounts1BlockTitle">Email address</div>           
            <div className='accounts1BlockTextInput'>
                <div className="inputText">
                    <div className="nameText">Email address <span className="starExponent">*</span></div>
                    <div className="inputData">
                        <Input aria-label="Demo input" placeholder={user.email} required />
                    </div>
                </div> 
            </div>
            <div className="accounts1BlockCancelSave">
               <div className="accounts1BlockCancel" onClick={handleCancel}>Cancel</div>    
               <div className="accounts1BlockSave">Save</div>
            </div>
            </div> }
        </div> 
         {email? <div className="accounts1BlockText2">This is the email address you use to sign in. It's also where we send your booking confirmations.</div>:""}  
        <hr style={{ color: "gray", width: "98%", marginLeft: "18px", marginTop: "15px" }} />
          
        <div className="accounts1Block">
        {phone ?
            <>
            <div className="accounts1BlockTitle">Phone number</div>
            <div className="accounts1BlockText">{user.phone}</div>
            <div aria-disabled={disabledPhone} className={(disabledPhone) ? "accounts1BlockEditDisabled" : "accounts1BlockEdit"} onClick={handleClick4}>Edit</div>
            </>
            : 
            <div className="accounts1BlockEditClick">
            <div className="accounts1BlockTitle">Phone number</div>           
            <div className='accounts1BlockTextInput'>
                <div className="inputText">
                    <div className="nameText">Phone number <span className="starExponent">*</span></div>
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
        {phone?<div className="accounts1BlockText2">Properties or attractions you book will use this number if they need to contact you.</div>:""}   
        <hr style={{ color: "gray", width: "98%", marginLeft: "18px", marginTop: "15px" }} />

        <div className="accounts1Block"> 
            <div className="accounts1BlockTitle">Nationality</div>
            <div className="accounts1BlockText">{user.country}</div>  
        </div> 
        <hr style={{ color: "gray", width: "98%", marginLeft: "18px", marginTop: "15px" }} />

        <div className="accounts1Block">
        {gender ?
            <>
            <div className="accounts1BlockTitle">Gender</div>
            <div className="accounts1BlockText">Male</div>
            <div aria-disabled={disabledGender} className={(disabledGender) ? "accounts1BlockEditDisabled" : "accounts1BlockEdit"} onClick={handleClick6}>Edit</div>  
            </> 
            :
            <div className="accounts1BlockEditClick">
            <div className="accounts1BlockTitle">Gender</div>           
            <div className='accounts1BlockTextInput' style={{display:"flex",flexDirection:"column",marginTop:"-10px",marginLeft:"6px"}}>
            <div className="nameText">Gender <span className="starExponent">*</span></div>             
            <FormControl sx={{ width: 450, marginTop:"-40px" }}>
                <InputLabel id="demo-multiple-name-label">Gender</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps} 
                >
                {names.map((name) => (
                    <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                    >
                    {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            </div>
            <div className="accounts1BlockCancelSave">
               <div className="accounts1BlockCancel" onClick={handleCancel}>Cancel</div>    
               <div className="accounts1BlockSave">Save</div>
            </div>
            </div> } 
        </div> 
        <hr style={{ color: "gray", width: "98%", marginLeft: "18px", marginTop: "15px" }} />

        <div className="accounts1Block">
        {city ?
            <>
            <div className="accounts1BlockTitle">City</div>
            <div className="accounts1BlockText">{user.city}</div>
            <div aria-disabled={disabledCity} className={(disabledCity) ? "accounts1BlockEditDisabled" : "accounts1BlockEdit"} onClick={handleClick7}>Edit</div> 
            </> 
            :
            <div className="accounts1BlockEditClick">
            <div className="accounts1BlockTitle">City</div>           
            <div className='accounts1BlockTextInput'>
                <div className="inputText">
                    <div className="nameText">City <span className="starExponent">*</span></div>
                    <div className="inputData">
                       <Input aria-label="Demo input" placeholder={user.city} required />
                    </div>
                </div> 
            </div>
            <div className="accounts1BlockCancelSave">
               <div className="accounts1BlockCancel" onClick={handleCancel}>Cancel</div>    
               <div className="accounts1BlockSave">Save</div>
            </div>
            </div> }   
        </div> 
        <hr style={{ color: "gray", width: "98%", marginLeft: "18px", marginTop: "15px" }} />

        <div className="accounts1Block">
            <div className="accounts1BlockTitle">Join on</div>
            <div className="accounts1BlockText">{(user.createdAt).slice(0,10)}</div>
        </div> 
        <hr style={{ color: "gray", width: "98%", marginLeft: "18px", marginTop: "15px" }} />
           
    </div>
  )
}

export default Accounts1;
