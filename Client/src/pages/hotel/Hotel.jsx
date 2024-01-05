import "./hotel.css";
import Navbar from "../../components/navbar/Navbar"; 
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "../../components/Skeleton/Skeleton";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import Incentives from "../../components/incentives/Incentives";

import BedIcon from '@mui/icons-material/Bed';
import CoffeeIcon from '@mui/icons-material/Coffee';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import UpdateIcon from '@mui/icons-material/Update';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SaveMoney from "../../components/saveMoney/SaveMoney";
import Reviews from "../../components/reviews/Reviews";

const Hotel = () => {
  const location = useLocation();
  // console.log(location);
  const id = location.pathname.split("/")[2]; 
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/hotels/find/${id}`);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 

  // useEffect(() => {
  //   var { data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/hotels/find/${id}`);
  // },[])

  const { dates, options } = useContext(SearchContext); 

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2)
  {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    console.log("TimeDiff: ", timeDiff);
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    console.log("diffDays: ", diffDays);
    return diffDays;
  }

  const timestamp = dates[0].endDate;
  const date = new Date(timestamp);

  const days = dayDifference(date, dates[0].startDate);
  // console.log("Days:", days);

  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  //   },
  // ];

  const facility = [
    [ <RoomServiceIcon /> ,"Room service"], 
    [ <SmokeFreeIcon /> ,"Non-smoking rooms"], 
    [ <UpdateIcon /> ,"24-hour front desk"],  
    [ <AcUnitIcon />,"Air conditioning"], 
    [ <RssFeedIcon /> ,"Free Wifi"], 
    [ <FreeBreakfastIcon /> ,"Breakfast"], 
    [ <FamilyRestroomIcon /> ,"Family rooms"], 
]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => {
    if(user)
    {
      setOpenModel(true);
    }
    else
    {
      navigate("/loginComponent")  
    }
  }

  const price = days * data.cheapestPrice * options.room;
  const discountPrice = days * data.cheapestPrice * options.room - (days * data.cheapestPrice * options.room) / 10;

  return (
    <div style={{overflowX:"hidden"}}>
      <Navbar /> 
      {loading ? (
        <div style={{marginTop:"20px"}}>
          <Skeleton type="custom" />
        </div>
      ) :
        (
          <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={handleClick}>Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {data.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
            </div>
              
              <div>
                <Incentives />
              </div>
 
              <div className="mainHotelPricingTable">
                <div className="roomAdultChild">{options.room} rooms for {options.adult} adults, {options.children} child</div>
                <div className="hotelPricingTableBox">
                  <div className="hotelPricingTableFirstBox">
                    <div className="firstBoxPricing1">3 x Deluxe Room</div>
                    <div className="firstBoxPricing2">Price for:</div>
                    <div className="firstBoxPricing3">Each unit has:</div>
                    <div style={{display:"flex",flexDirection:"row"}}>
                      <div className="firstBoxPricing4">Bed: 1 double bed</div>
                      <div className="firstBoxPricingImg1"><BedIcon /></div>
                    </div>
                    <div className="firstBoxPricing5">Free Cancellation</div>
                    <div className="firstBoxPricingWithImg1">
                      <div className="firstBoxPricingImg2"><CoffeeIcon /></div>
                      <div className="firstBoxPricing6">Breakfast included</div>
                    </div>
                    <div className="firstBoxPricingWithImg2">
                      <div className="firstBoxPricingImg3"><TimelapseIcon /></div>                    
                      <div className="firstBoxPricing7">Only two rooms left for our site</div>
                    </div>
                  </div>
                  <div className="hotelPricingTableSecondBox">
                    <div className="secondBoxPricing">
                      <span className="secondBoxPricing1">₹ {price}</span>
                      <span className="secondBoxPricing2">₹ {discountPrice}</span>
                    </div>
                    <div className="secondBoxPricing3">Include taxes and charges</div>
                    <div className="secondBoxPricing4">Late Escape Deal</div>
                  </div>
                  <div className="hotelPricingTableThirdBox">
                    <div className="thirdBoxPricing1">{days} nights, {options.adult} adults, {options.children} child</div>
                    <div className="thirdBoxPricing">
                      <span className="thirdBoxPricing2">₹ {price}</span>
                      <span className="thirdBoxPricing3">₹ {discountPrice}</span>
                    </div>
                    <div className="thirdBoxPricing4">Include taxes and charges</div>
                    <button className="thirdBoxPricingButton" onClick={handleClick}>Reserve Your Selection</button>
                    <div className="thirdBoxPricing5">Don't worry — pressing this button won't charge you anything!</div>
                  </div>
                </div>
              </div>
              
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₹ {discountPrice}</b> ({days} nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
              </div>
              
              <div className="popularFacilities">
                <div className="facilityTitle">Most Popular Facilities</div>
                <div className="facilityMainContainer">
                  {
                    facility.map((temp,i) => { 
                      return (
                      
                  <div className="facilityContainer" key={i}> 
                    <div className="facilityImg">
                        {facility[i][0]}    
                    </div>
                  <div className="facilityDesc"> 
                      {facility[i][1]}      
                  </div>
                    </div> 
                      )
                    })
                  }
                </div> 
          
              </div>

              <Reviews hotelId={id} />

              <hr style={{ marginTop: "50px", width: "100%" }} /> 
              
              <SaveMoney />
        </div>
        <MailList />
        <Footer />
          </div>)}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id} hotelData={data} />}
    </div>
  );
};

export default Hotel;
