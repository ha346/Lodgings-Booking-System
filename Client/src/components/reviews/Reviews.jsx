import React from 'react';
import "./reviews.scss";
import useFetch from '../../hooks/useFetch';
import Rating from '@mui/material/Rating'; 

const Reviews = ({hotelId}) => {

    const { data, loading, error } = useFetch(`http://localhost:8800/api/hotels/reviews/${hotelId}`);
    console.log("HotelIDReviews: ", hotelId);
    console.log("ReviewsData: ", new Date(new Date().setDate(new Date().getDate())));

    return ( 

        <div>
            <div className="mainHeading">See what guests loved the most:</div>
      <div className="reviewMainContainer">
          
          {data.map((review,i) => { 
              return (
                <div className="reviewContainer" key={i}>
                  <div className="RatingPlusTitle">
                    <div className="reviewRating">
                        <div className="ratingNo">{review.rating}</div> 
                        <div className="ratingImg">     
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/17px-Empty_Star.svg.png" alt="" />
                        </div>           
                    </div>     
                        <span className="reviewTitle">{review.ratingTitle}</span>
                    <span className="reviewStars"></span>
                    <span className="starRating">
                        <Rating name="read-only" value={review.rating} readOnly />
                    </span>
                  </div>
                    
                  <div className="reviewDescription">{review.ratingArea}</div>
                    
                   <div className="namePlusDate">
                        <div className="userName">{review.userName}</div> 
                        <img src="" alt="" />    
                          <div className="dateOfReview"> Certified Buyer, {review.userCity}, {(review.createdAt).slice(0,10)}</div>
                    </div>
                </div>
              )})}
      
            </div>
    </div>
    
  )
}

export default Reviews;
