import React from "react";
import useFetch from "../../hooks/useFetch";
import "./tripPlanner2.scss";
import Skeleton from "../Skeleton/Skeleton.jsx";  

const TripPlanner2 = () => {
  const { loading } = useFetch("http://localhost:8800/api/hotels/countByType");

  const images = [
    [
      "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
      "Goa",
      "1,502",
    ],
    [
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
      "New Delhi",
      "1,408",
    ],
    [
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
      "Mumbai",
      "2,123",
    ],
    [
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
      "Pune",
      "5,012",
    ],
    [
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
      "Ranchi",
      "2,098",
    ],
  ];
 

  return ( 
      
    <div>
       
    <div className="trip2List">
      
      {loading ? (
        <Skeleton type="custom" />
      ) : (
        <>
          {images.map((temp, i) => {
            return (
              <div className="trip2ListItem" key={i}>
                <img src={images[i][0]} alt="" className="trip2ListImg" />
                <div className="trip2ListTitles">
                  <h1>{images[i][1]}</h1>
                  <h2>{images[i][2]}</h2>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div> 
    </div>
  );
};

export default TripPlanner2;
