import React from 'react';
import "./setings.scss";
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CommitIcon from '@mui/icons-material/Commit';
import LockIcon from '@mui/icons-material/Lock';
import PaymentIcon from '@mui/icons-material/Payment';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

const Setings = () => {
  return (
    <div>
        <Navbar />
      <div className="setingsMainContainer">
        <div className="setingsTitle">
             <div className="setingsTitleBold">Account settings</div> 
             <div className="setingsTitleSmall">Manage your Booking.com experience</div>
        </div>
        <div className="setingsContainers">
            <div className="setingsContainer1">
              <Link to="/account" className="setingsLink">
                <div className="setingsContainerImage"><PersonAddAltIcon /></div>  
                <div className="setingsContainerText">
                    <div className="setingsContainerTextTitle">Personal details</div>  
                    <div className="setingsContainerTextPara">Update your information and find out how it's used.</div>
                    <div className="setingsContainerTextLink">Manage personal details</div>  
                </div>
              </Link>
            </div>  
            <div className="setingsContainer2">
              <Link to="/account" className="setingsLink">
                <div className="setingsContainerImage"><CommitIcon /></div>  
                <div className="setingsContainerText">
                    <div className="setingsContainerTextTitle">Preferences</div>  
                    <div className="setingsContainerTextPara">Change your language, currency and accessibility requirements.</div>
                    <div className="setingsContainerTextLink">Manage preferences</div>  
                </div>
               </Link>
            </div>  
            <div className="setingsContainer3">
              <Link to="/account" className="setingsLink">
                <div className="setingsContainerImage"><LockIcon /></div>  
                <div className="setingsContainerText">
                    <div className="setingsContainerTextTitle">Security</div>  
                    <div className="setingsContainerTextPara">Adjust your security settings and set up two-factor authentication.</div>
                    <div className="setingsContainerTextLink">Manage account security</div>  
                </div>
              </Link>
            </div>  
            <div className="setingsContainer4">
              <Link to="/account" className="setingsLink">
                <div className="setingsContainerImage"><PaymentIcon /></div>  
                <div className="setingsContainerText">
                    <div className="setingsContainerTextTitle">Payment details</div>  
                    <div className="setingsContainerTextPara">Securely add or remove payment methods to make it easier when you book.</div>
                    <div className="setingsContainerTextLink">Manage payment details</div>  
                </div>
              </Link>
            </div>  
            <div className="setingsContainer5">
              <Link to="/account" className="setingsLink">
                <div className="setingsContainerImage"><AddModeratorIcon /></div>  
                <div className="setingsContainerText">
                    <div className="setingsContainerTextTitle">Privacy</div>  
                    <div className="setingsContainerTextPara">Exercise your privacy rights and control how your data is used.</div>
                    <div className="setingsContainerTextLink">Manage privacy</div>  
                </div>
              </Link>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Setings;
