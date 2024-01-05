import { Link } from "react-router-dom";
import "./searchItem.css";

import AdjustIcon from '@mui/icons-material/Adjust';
import DoneIcon from '@mui/icons-material/Done';
import { SearchContext } from "../../context/SearchContext";
import { useContext, useState } from "react";
import Modal from "../modal/Modal";

import Rating from '@mui/material/Rating';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import Tooltip from '@mui/material/Tooltip';
import useFetch from "../../hooks/useFetch"; 
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"; 

const SearchItem = ({ item }) => { 

  // const [toggle, setToggle] = useState(false);    
  // const [currentUser, setCurrentUser] = useState(true);    
  // const [selectedHotels, setSelectedHotels] = useState([]);    
  const { user } = useContext(AuthContext); 
  // const { data } = useFetch(`http://localhost:8800/api/wishlist/find?userId=${user._id}`);
  // console.log("User Data: ", user._id);  
  // console.log("Data Fetch: ", data);  
  // console.log("Item Fetch: ", item);  

  // const temp=data.map((items) => {
  //   if(items.userId==user._id)
  //   {
  //     setCurrentUser(false);
  //   }
  // })
   
  const { dates, options } = useContext(SearchContext);    
  const [modal, setModal] = useState(false); 
  const [value, setValue] = useState(0);

  function openModal(e) {
    document.body.style.overflowY = "hidden";
    setModal(true);
  } 

  function closeModal(e) {
    setModal(false);
      document.body.style.overflowY = "scroll";
  }

  const timestamp = dates[0].endDate;
  const enddate = new Date(timestamp);    

  function convert(str) { 
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  } 

//   const handleChange = async(e) => {
//     const checked = e.target.checked; 
//     const {value} = e.target;  

//     setSelectedHotels(
//         checked 
//             ? [...selectedHotels, value]
//             : selectedHotels.filter((item) => item != value)
//     )

// }
 
// console.log("Selected Hotels: ", selectedHotels);  

  // const handleClick = async () => {

  //   console.log("Handle Click");
  //   setToggle(!toggle);
  
  //   // new creation
  //   if (toggle) {
  //   if(currentUser)
  //   {
  //       const userWishList = {
  //         userId: user._id,
  //         hotelId: selectedHotels
  //       }
  //       await axios.post(`http://localhost:8800/api/wishlist`, userWishList);   
  //       console.log("WishList Created");
  //   }
  //   else
  //   {
  //     const userWishListUpdated = { 
  //       hotelId: selectedHotels
  //     }
  //     await axios.put(`http://localhost:8800/api/wishlist/update/${data._id}`, userWishListUpdated);   
  //     console.log("WishList Updated");
  //   }
  //   } 
  //   // else
  //   // {
  //   //   {
  //   //     const userWishListUpdated = { 
  //   //       hotelId: selectedHotels
  //   //     }
  //   //     await axios.put(`http://localhost:8800/api/wishlist/update/${data._id}`, userWishListUpdated);   
  //   //     console.log("WishList Updated");
  //   //   }
  //   // }
   
  // }

  return (
    <div className="searchItem">
      <div className="searchItemContainer">
      <img 
        src={item.photos[0]}
        alt=""
        className="siImg"
        />
        {/* <div className="loveIcon">
          <Tooltip title="Save" placement="top"> 
            <FavoriteBorderIcon onClick={handleClick} />
             <input type="checkbox" value={item._id} onChange={handleChange} />  
        </Tooltip>  
        </div> */}
        <div className="siDesc">
          <div style={{display:"flex"}}>
          <h1 className="siTitle">{item.name}</h1>
          <span className="ratingStars"> 
          <Rating name="read-only" value={item.rating} readOnly />
          </span>
          </div>
        <div style={{display:"flex"}}>
          <div className="siCity">{item.city}</div>
          <div className="siIcon"><AdjustIcon /></div>
          <div className="siDistance">{item.distance} from center</div>
        </div>
        <span className="siTaxiOp">Late Escape Deal</span>
        <div className="siRecommended">
          Recommended for your group
        </div>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <div className="siRoom">
          <span className="siRoom1">3x</span>
          <span className="siRoom2">Deluxe Room</span>
        </div>
        <div className="siCancelOp">
          <div className="siCancelOp1">3 double beds</div> 
          <div className="siCancelOp2">
            <div className="siCancelOp21"><DoneIcon /></div>
            <div className="siCancelOp22">Free Cancellation</div>
          </div>
      </div>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails"> 
        <div>
        {item.rating && <div className="siRating">
        <div className="siReviewTitle">Excellent</div>
        <div className="siReviewRating">
          <div className="siRatingNo">{item.rating}</div> 
          <div className="siRatingImg">     
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/17px-Empty_Star.svg.png" alt="" />
          </div>           
        </div> 
        </div>}
        </div>
        <div className="siDetailTexts">
          <div className="siDates">
            {convert(dates[0].startDate)} - {convert(enddate)}
          </div>
          <div className="siAdults">
            <span>{options.room} rooms,</span>
            <span>{options.adult} adults.</span>
            <span>{options.children} child</span>
          </div>
          <span className="siPrice">₹{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
            </Link>
            
          {modal ? <Modal closeModal={closeModal} hotelId={item._id} reviews={item.noOfReviews} ratingDesc={item.ratingDesc} /> : null}        
          {user ?
          <button className="reviewButton" onClick={openModal}> 
              Give Reviews
          </button>
          :
          <Link to="/loginComponent"><button className="reviewButton"> Give Reviews </button></Link>
          }
        </div>
        </div>
        </div>
    </div>
  );
};

export default SearchItem;
