import React from 'react';
import "./incentives.scss";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import BathtubIcon from '@mui/icons-material/Bathtub';
import WifiIcon from '@mui/icons-material/Wifi';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import ShowerIcon from '@mui/icons-material/Shower';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import TvIcon from '@mui/icons-material/Tv';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';

const Incentives = () => {
    const data = [
        [<FreeBreakfastIcon />,"Breakfast"],
        [<BathtubIcon />,"Private bathroom"],
        [<WifiIcon />,"Free Wifi"],
        [<FamilyRestroomIcon />,"Family rooms"],
        [<RoomServiceIcon />,"Room service"],
        [<ShowerIcon />,"Shower"],
        [<AcUnitIcon />,"Air conditioning"],
        [<SmokeFreeIcon />,"Non-smoking rooms"],
        [<TvIcon />,"Flat-screen TV"],
        [<PersonalVideoIcon />,"Cable channels"]
    ]
  return (
    <div className="incentivesMainContainer">
          <>
          {
            data.map((temp,i) => { 
              return (
              
          <div className="incentivesContainer" key={i}> 
            <div className="incentivesImg">
                 {data[i][0]}    
            </div>
        <div className="incentivesTitle"> 
            {data[i][1]}      
        </div>
            </div> 
              )
            })
          }
       </> 
    </div>
  )
}

export default Incentives;
