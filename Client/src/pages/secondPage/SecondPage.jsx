 import "./secondPage.scss";
import Navbar from "../../components/navbar/Navbar";  
import Skeleton from "../../components/Skeleton/Skeleton";
import SearchItem from "../../components/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react"; 
import ReactSlider from "react-slider";
import ReactStars from "react-rating-stars-component";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';


const SecondPage = () => {
    const location = useLocation();
    const [price, setPrice] = useState([0, 5000000]);
    const [rating, setRating] = useState(0);
    const [type, setType] = useState("");
    // console.log("Location: ", location);
  const [destination, setDestination] = useState(location.state.city);
  
    const { data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/hotels?city=${destination}&min=${price[0] || 1}&max=${price[1] || 50000}`);
    console.log("Data: ", data);
    
    console.log("Type: ", type); 

  return (
    <div style={{overflowX:"hidden"}}>  
      <Navbar />
      <div className="secondPageContainer">
      <div className="sideContainer">
          <div className="sideContainer1">Filter by:</div>
          <hr /> 
          <div className="sideContainer2">
           <div className="sideContainer21">Your budget (per night)</div>
            <div className="sideContainer22">₹ {price[0]} - {price[1]}+</div>
            <div className="range"> 
            <ReactSlider
              defaultValue={[price[0], price[1]]}
              className="slider"
              trackClassName="tracker"
              min={0}
              max={50000}
              minDistance={800}
              step={1000}
              pearling={true}
              withTracks={true}
              renderThumb={(props) => {
                return (
                  <div {...props} className="thumb">
                    {" "}
                  </div>
                );
              }}
              renderTrack={(props) => {
                return (
                  <div {...props} className="track">
                    {" "}
                  </div>
                );
              }}
              onChange={([min, max]) => {
                setPrice([min, max]);
              }}
            />
            </div>

            <div className="mainCategory">
              <h3>Categories:</h3>
              <div className="category">
                <Checkbox onChange={()=>setType("hotel")} />
                <div className="categoryName">Hotel</div>
              </div>
              <div className="category">
                <Checkbox />
                <div className="categoryName">Apartment</div>
              </div>
              <div className="category">
                <Checkbox />
                <div className="categoryName">Resort</div>
              </div>
              <div className="category">
                <Checkbox />
                <div className="categoryName">Villa</div>
              </div>
              <div className="category">
                <Checkbox />
                <div className="categoryName">Palace</div>
              </div>
            </div>

            {/* <div className="stars">
            <h3>Rating above:({rating})</h3>
            <ReactStars
              edit={true}
              onChange={(e) => {
                setRating(e);
              }}
              value={rating}
              activeColor="rgb(238, 143, 42)"
              color={"rgba(185, 185, 185, 0.47)"}
              size={window.innerWidth < 600 ? 20 : 25}
              isHalf={true}
            ></ReactStars>
            </div> */}
        </div>
      </div>
      <div className="listContainer">
       <div className="listResult">
            {loading ? <Skeleton className="secondPageSkeleton" type="custom" /> : <>
              {data.map(item => {
               return(
                <SearchItem item={item} key={item._id} /> )
            })}
          <div className="pagination">
          <Stack spacing={2}> 
            <Pagination count={10} color="primary" />
          </Stack>
          </div>
            </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;

