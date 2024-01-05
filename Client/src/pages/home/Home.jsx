import { useState } from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Offer from "../../components/offer/Offer";
import TripPlanner from "../../components/tripPlanner/TripPlanner";
import TripPlanner2 from "../../components/tripPlanner2/TripPlanner2";
import "./home.scss";

import LocationCityIcon from '@mui/icons-material/LocationCity';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Discount from "../../components/discount/Discount";
import Destination from "../../components/destination/Destination";
import ShowPropertyList from "../../components/showPropertyList/ShowPropertyList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    ["", "Beach"],
    ["", "Outdoors"],
    ["", "Romance"],
    ["", "City"],
  ];
  return (
    <div className="home-page-cont">
      <Navbar isLoading={isLoading} />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Offers</h1>
        <div className="homeDesc">
          Promotions, deals and special offers for you
        </div>
        <Offer />
        <h1 className="homeTitle">Trending destinations</h1>
        <div className="homeDesc">
          Most popular choices for travellers from India
        </div>
        <Featured />
        <h1 className="homeTitle">Explore India</h1>
        <div className="homeDesc">
          These popular destinations have a lot to offer
        </div>
        <TripPlanner />
        <h1 className="homeTitle">Quick and Easy Trip Planner</h1>
        <div className="homeDesc">
          Pick a vibe and explore the top destinations in India
        </div>
        <div className="icons">
          <div className="iconsBorder">
          <div className="iconsImg">
            <BeachAccessIcon />
          </div>
            <div className="iconsText">Beach</div>
          </div>
          
          <div className="iconsBorder">
          <div className="iconsImg">
            <LocationCityIcon />
          </div>
            <div className="iconsText">Romance</div>
          </div>
          
          <div className="iconsBorder">
          <div className="iconsImg">
            <FavoriteBorderIcon />
          </div>
            <div className="iconsText">City</div>
          </div>
          
          <div className="iconsBorder">
          <div className="iconsImg">
            <ElectricBikeIcon />
          </div>
            <div className="iconsText">Outdoors</div>
          </div>
        </div>
        <TripPlanner2 />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <Discount />
        <h1 className="homeTitle">Destinations we love</h1>   
        <Destination />
        <MailList /> 
      </div> 
      <Footer />  
    </div>
  );
};

export default Home;
