import React,{useContext} from "react";
import "./offer.scss";
import { AuthContext } from "../../context/AuthContext";

const Offer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div> 
      <div className="mainContainer">
        <div className="container">
          <div className="title">
            <div className="heading">Fly away to your dream holiday</div>
            <div className="subheading">
              {" "}
              Get inspired, compare and book flights with more flexibility{" "}
            </div>
            { (!user) ? <button className="btn">Sign in / Register</button> : ""}
          </div>
        </div>

        <div className="container">
          <div className="title">
            <div className="heading">Working, relaxing or a bit of both</div>
            <div className="subheading">
              {" "}
              Browse properties offering extended stays, many with reduced
              monthly rates{" "}
            </div>
            { (!user) ? <button className="btn">Sign in / Register</button> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
