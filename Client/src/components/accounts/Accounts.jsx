import React,{useState, useContext} from 'react'
import Navbar from '../navbar/Navbar';
import "./accounts.scss";


import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CommitIcon from '@mui/icons-material/Commit';
import LockIcon from '@mui/icons-material/Lock';
import PaymentIcon from '@mui/icons-material/Payment';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Accounts1 from './Accounts1';
import Accounts2 from './Accounts2';
import Accounts3 from './Accounts3';
import Accounts4 from './Accounts4';
import Accounts5 from './Accounts5';

const Accounts = () => {

    const [personalDetails, setPersonalDetails] = useState(true);
    const [preferences, setPreferences] = useState(false);
    const [security, setSecurity] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState(false);
    const [privacy, setPrivacy] = useState(false);

    const [personalColor, setpersonalColor] = useState("black");
    const [preferencesColor, setPreferencesColor] = useState("black");
    const [securityColor, setSecurityColor] = useState("black");
    const [paymentDetailsColor, setPaymentDetailsColor] = useState("black");
    const [privacyColor, setPrivacyColor] = useState("black");

    const handlePersonal = () => {
        setPersonalDetails(true);
        setPreferences(false);
        setSecurity(false);
        setPaymentDetails(false);
        setPrivacy(false);

        setpersonalColor("blue"); 
        setPreferencesColor("black");
        setSecurityColor("black");
        setPaymentDetailsColor("black");
        setPrivacyColor("black");
    }

    const handlePreferences = () => {
        setPersonalDetails(false);
        setPreferences(true);
        setSecurity(false);
        setPaymentDetails(false);
        setPrivacy(false);

        setpersonalColor("black"); 
        setPreferencesColor("blue");
        setSecurityColor("black");
        setPaymentDetailsColor("black");
        setPrivacyColor("black"); 
    }

    const handleSecurity = () => {
        setPersonalDetails(false);
        setPreferences(false);
        setSecurity(true);
        setPaymentDetails(false);
        setPrivacy(false);

        setpersonalColor("black"); 
        setPreferencesColor("black");
        setSecurityColor("blue");
        setPaymentDetailsColor("black");
        setPrivacyColor("black"); 
    }

    const handlePaymentDetails = () => {
        setPersonalDetails(false);
        setPreferences(false);
        setSecurity(false);
        setPaymentDetails(true);
        setPrivacy(false);

        setpersonalColor("black"); 
        setPreferencesColor("black");
        setSecurityColor("black");
        setPaymentDetailsColor("blue");
        setPrivacyColor("black");
    }

    const handlePrivacy = () => {
        setPersonalDetails(false);
        setPreferences(false);
        setSecurity(false);
        setPaymentDetails(false);
        setPrivacy(true);

        setpersonalColor("black"); 
        setPreferencesColor("black");
        setSecurityColor("black");
        setPaymentDetailsColor("black");
        setPrivacyColor("blue");
    }
    
  return (
    <div className="accountsMainContainer">
        <Navbar />
          
    <div className="accountsContainer">
 
        <div className="accountsSideMainContainer">
            <div className="accountsSideContainer">
            <div className="accountsSideContainerLogo" style={{color:personalColor}}><PersonAddAltIcon /></div>
            <div className="accountsSideContainerText" onClick={handlePersonal} style={{color:personalColor}}>Personal Details</div>  
            </div>
          <hr />
            <div className="accountsSideContainer">
            <div className="accountsSideContainerLogo" style={{color:preferencesColor}}><CommitIcon /></div>
            <div className="accountsSideContainerText" onClick={handlePreferences} style={{color:preferencesColor}}>Preferences</div>  
            </div>
          <hr />
            <div className="accountsSideContainer">
            <div className="accountsSideContainerLogo" style={{color:securityColor}}><LockIcon /></div>
            <div className="accountsSideContainerText" onClick={handleSecurity} style={{color:securityColor}}>Security</div>  
            </div>
          <hr />
            <div className="accountsSideContainer">
            <div className="accountsSideContainerLogo" style={{color:paymentDetailsColor}}><PaymentIcon /></div>
            <div className="accountsSideContainerText" onClick={handlePaymentDetails} style={{color:paymentDetailsColor}}>Payment details</div>  
            </div>
          <hr />
            <div className="accountsSideContainer">
            <div className="accountsSideContainerLogo" style={{color:privacyColor}}><AddModeratorIcon /></div>
            <div className="accountsSideContainerText" onClick={handlePrivacy} style={{color:privacyColor}}>Privacy</div>  
            </div> 
        </div>
          
        { personalDetails ? <Accounts1 /> : "" }
        { preferences ? <Accounts2 /> : "" }
        { security ? <Accounts3 /> : "" }
        { paymentDetails ? <Accounts4 /> : "" }
        { privacy ? <Accounts5 /> : "" }
       
    </div> 
    </div>
  )
}

export default Accounts;
