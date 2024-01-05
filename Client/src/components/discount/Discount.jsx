import React,{useContext} from "react";
import "./discount.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Discount = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="smallImg">
          <img
            src="https://t-cf.bstatic.com/design-assets/assets/v3.95.0/illustrations-traveller/GlobeGeniusBadge.png"
            alt=""
          />
        </div>
        <div className="text">
          <span className="textBig">Get instant discounts</span> <br />
          <div className="textSmall">
          Simply sign into your Booking.com account and look for the <br />
          blue Genius logo to save
          </div> 
          {
            user ?
            <div style={{ fontWeight:"bold", fontSize:"18px", marginTop:"15px" }}>
                Welcome &nbsp; 
              {user.username} !
            </div>
              : <> <Link to="/loginComponent" style={{textDecoration:"none"}}><span className="button">Sign In</span></Link>
                   <Link to="/registration" style={{textDecoration:"none"}}><span className="button">Register</span></Link>  </>       
          } 
        </div>
        <div className="bigImg">
          <img
            src="https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.b4347622.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
