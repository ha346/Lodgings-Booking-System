import React from "react";
import "./skeleton.css";

export default function Skeleton({ type }) {
    const CustomLoading = () => (
        <div className="custom">
          <div className="balls">
            <div className="ball ball1"></div>
            <div className="ball ball2"></div>
            <div className="ball ball3"></div>
          </div>
          <span className="customText">Loading...</span>
        </div>
      );
   
 
    if (type === "custom") return <CustomLoading />;
}
