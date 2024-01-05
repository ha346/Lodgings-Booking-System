import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
import Skeleton from "../Skeleton/Skeleton.jsx";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/featured?featured=true&limit=3");

  console.log(data);
  return (
    <div className="fp">
      {loading ? <Skeleton type="custom" /> : <>

        {
          data.map(item => {

            return (<div className="fpItem" key={item._id}>
            <img
              src={item.photos[0]}
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            {/* {item.rating && <div className="fpRating">
              <button>{item.rating} <span className="star"><StarPurple500Icon /></span></button>
              <span>{item.ratingDesc}</span>
            </div>}  */}
            {item.rating && <div className="fpRating">
              <div className="fpReviewRating">
                <div className="fpRatingNo">{item.rating}</div> 
                <div className="fpRatingImg">     
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/17px-Empty_Star.svg.png" alt="" />
                </div>           
              </div> 
              <div className="fpReviewTitle">{item.ratingDesc}</div>
            </div>} 
            <span className="fpPrice">Starting from &nbsp; <span className="fpPriceSpan">${item.cheapestPrice}</span></span>
          </div>)
        })}
  
      </>}
    </div>
  );
};

export default FeaturedProperties;

/*
<div className="reviewRating">
                        <div className="ratingNo">{review.rating}</div> 
                        <div className="ratingImg">     
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/17px-Empty_Star.svg.png" alt="" />
                        </div>           
                    </div>  
*/
