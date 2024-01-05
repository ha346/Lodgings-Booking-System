import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  
  const startdate = new Date(); 

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      key: "selection",
    },
  ]);

  // console.log("Dates[0].startdate: ",  new Date());
  // console.log("Dates[0].enddate: ",  new Date(new Date().setDate(new Date().getDate() + 1)));
  const [openOptions, setOpenOptions] = useState(false); 
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  
  const { dispatch } = useContext(SearchContext);
  
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  }, [destination, dates, options]); 

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, dates, options } });
  }; 

  return (
    <div className="home-page-cont">
      <div className="ecom-banner">
        <div>
 
        <div className="headerList"> 
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
            <>
              <div className="motion">
          <motion.h1
            animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.3],
                }}
                initial={{ opacity: 0, scale: 0.5 }} 
          >
            A lifetime of discounts? It's Genius. <br />A New Style!
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.3],
                }}
              initial={{ opacity: 0, scale: 0.5 }} 
          >
            Get rewarded for your travels – unlock instant savings of 10% or more with  <br />
             a free IAmBooking account
          </motion.p>
          <a href="" className="expl-a">
            Explore
          </a>  
              {
                user ?
                <div style={{ fontWeight:"bold", fontSize:"18px", marginTop:"40px" }}>
                    Welcome &nbsp; 
                  {user.username} !
                </div>
                 : ""             
              } 
              </div>
 
 
              
            
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate, 
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
                </div> 
 
          </>
        )}

 
        </div>
        <motion.div
          initial={{
            transform: "scale(1.1)",
            opacity: 0,
          }}
          whileInView={{
            transform: "scale(1)",
            opacity: 1,
          }}
          transition={{
            duration: "0.5",
          }}
        > 
        </motion.div>

 
      </div> 

    </div>
    // <div className="header">
    //   <div
    //     className={
    //       type === "list" ? "headerContainer listMode" : "headerContainer"
    //     }
    //   >
    //     <div className="headerList">
    //       <div className="headerListItem active">
    //         <FontAwesomeIcon icon={faBed} />
    //         <span>Stays</span>
    //       </div>
    //       <div className="headerListItem">
    //         <FontAwesomeIcon icon={faPlane} />
    //         <span>Flights</span>
    //       </div>
    //       <div className="headerListItem">
    //         <FontAwesomeIcon icon={faCar} />
    //         <span>Car rentals</span>
    //       </div>
    //       <div className="headerListItem">
    //         <FontAwesomeIcon icon={faBed} />
    //         <span>Attractions</span>
    //       </div>
    //       <div className="headerListItem">
    //         <FontAwesomeIcon icon={faTaxi} />
    //         <span>Airport taxis</span>
    //       </div>
    //     </div>
    //     {type !== "list" && (
    //       <>
    //         <h1 className="headerTitle">
    //           A lifetime of discounts? It's Genius.
    //         </h1>
    //         <p className="headerDesc">
    //           Get rewarded for your travels – unlock instant savings of 10% or
    //           more with a free Lamabooking account
    //         </p>
    //         { user ? (user.username) : (<button className="headerBtn">Sign in / Register</button> )}
    //         <div className="headerSearch">
    //           <div className="headerSearchItem">
    //             <FontAwesomeIcon icon={faBed} className="headerIcon" />
    //             <input
    //               type="text"
    //               placeholder="Where are you going?"
    //               className="headerSearchInput"
    //               onChange={(e) => setDestination(e.target.value)}
    //             />
    //           </div>
    //           <div className="headerSearchItem">
    //             <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
    //             <span
    //               onClick={() => setOpenDate(!openDate)}
    //               className="headerSearchText"
    //             >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
    //               dates[0].endDate, 
    //               "MM/dd/yyyy"
    //             )}`}</span>
    //             {openDate && (
    //               <DateRange
    //                 editableDateInputs={true}
    //                 onChange={(item) => setDates([item.selection])}
    //                 moveRangeOnFirstSelection={false}
    //                 ranges={dates}
    //                 className="date"
    //                 minDate={new Date()}
    //               />
    //             )}
    //           </div>
    //           <div className="headerSearchItem">
    //             <FontAwesomeIcon icon={faPerson} className="headerIcon" />
    //             <span
    //               onClick={() => setOpenOptions(!openOptions)}
    //               className="headerSearchText"
    //             >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
    //             {openOptions && (
    //               <div className="options">
    //                 <div className="optionItem">
    //                   <span className="optionText">Adult</span>
    //                   <div className="optionCounter">
    //                     <button
    //                       disabled={options.adult <= 1}
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("adult", "d")}
    //                     >
    //                       -
    //                     </button>
    //                     <span className="optionCounterNumber">
    //                       {options.adult}
    //                     </span>
    //                     <button
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("adult", "i")}
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <div className="optionItem">
    //                   <span className="optionText">Children</span>
    //                   <div className="optionCounter">
    //                     <button
    //                       disabled={options.children <= 0}
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("children", "d")}
    //                     >
    //                       -
    //                     </button>
    //                     <span className="optionCounterNumber">
    //                       {options.children}
    //                     </span>
    //                     <button
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("children", "i")}
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <div className="optionItem">
    //                   <span className="optionText">Room</span>
    //                   <div className="optionCounter">
    //                     <button
    //                       disabled={options.room <= 1}
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("room", "d")}
    //                     >
    //                       -
    //                     </button>
    //                     <span className="optionCounterNumber">
    //                       {options.room}
    //                     </span>
    //                     <button
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("room", "i")}
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             )}
    //           </div>
    //           <div className="headerSearchItem">
    //             <button className="headerBtn" onClick={handleSearch}>
    //               Search
    //             </button>
    //           </div>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div>
  );
};

export default Header;
