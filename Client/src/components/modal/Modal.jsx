import React, { useState, useContext } from "react";
import ReactStars from "react-rating-stars-component"; 
import { useParams } from "react-router-dom"; 
import "./modal.scss";
import { toast } from "react-toastify";
import axios from "axios";   
import { AuthContext } from "../../context/AuthContext";


const Modal = ({ closeModal, hotelId, reviews, ratingDesc }) => { 
  const { dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);  

  console.log("User: ", user);

  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [rating, setRating] = useState(0);
  const getRating=(newRating)=>{
    setRating(newRating);
  } 

  console.log("Reviews: ", reviews);

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    if(textArea === ""){
        toast.info("Review is required");
        return;
    } 
    const newHotel = {  
        rating: rating,
        ratingDesc: ratingDesc,
        noOfReviews: reviews + 1,
        
    } 
    const newReviews={
         userName: user.username,
         userCity: user.city,
         rating: rating,
         ratingTitle:title,
         ratingDesc: ratingDesc,
         ratingArea: textArea,  
    }
    try { 
        await axios.put(`http://localhost:8800/api/hotels/${hotelId}`, newHotel);
        await axios.post(`http://localhost:8800/api/reviews/${hotelId}`, newReviews);
        console.log("Review Submitted");
    } catch (err) {
      console.log(err);
    }
    closeModal();  
    window.location.reload();
  }

  return (
    <>
      <div className="modal-wrapper"> </div>
      <div className="modal">
        <div className="main-review">
          <div>
            <h4>Rating:</h4>
            <ReactStars
              classNames={"star"}
              activeColor="rgb(238, 143, 42)"
              size={window.innerWidth < 600 ? 20 : 25}
              isHalf={true}
              color={"rgba(185, 185, 185, 0.47)"}
              onChange={getRating}
            ></ReactStars>
          </div>
          <div>
            <div>Title:</div>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} />  
          </div>
          <div>
            <textarea
              placeholder="Type Something here... "
              value={textArea} 
              onChange={(e) => setTextArea(e.target.value)}
              cols="30"
              rows="30"
              required
            ></textarea>
          </div>
          <div className="modal-btn">
            <button onClick={closeModal} className="black-btn">Cancel</button>
            <button className="org-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
