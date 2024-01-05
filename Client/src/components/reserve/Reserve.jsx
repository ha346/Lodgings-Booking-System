import React, { useContext, useState } from 'react' 
import "./reserve.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Reserve = ({ setOpen, hotelId, hotelData }) => { 

    const [selectedRooms, setSelectedRooms] = useState([]);
    const [selectedRoomNumber, setSelectedRoomNumber] = useState([]);  
    const { user } = useContext(AuthContext);  
 
    const { data, loading, error } = useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`);
    const { dates } = useContext(SearchContext)
    
    // console.log("HotelData: ", hotelData);  
    // console.log("UserData: ", user);    
    // console.log("SelectedRooms: ", selectedRooms); 
    // console.log("SelectedRoomNumber: ", selectedRoomNumber); 


    const handleChange = async(e) => {
        const checked = e.target.checked; 
        const {value, name} = e.target;  

        setSelectedRoomNumber(
            checked 
                ? [...selectedRoomNumber, name]
                : selectedRoomNumber.filter((item) => item != name)
        )
        
        setSelectedRooms(
            checked 
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item != value)
        )
    }
    
    // console.log(selectedRooms);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list = [];

        while(date<=end)
        {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return list;
    }

    // console.log(getDatesInRange(dates[0].startDate,dates[0].endDate));

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
          alldates.includes(new Date(date).getTime())
        );
    
        return !isFound;
    };

    const navigate = useNavigate();

    const handleClick = async () => {
        const userData={
            username: user.username,
            email: user.email,
            country: user.country,
            city: user.city,
            phone:user.phone,
            hotelName: hotelData.name,
            cheapestPrice: hotelData.cheapestPrice,
            roomNumber:selectedRoomNumber,
       }
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`http://localhost:8800/api/rooms/availability/${roomId}`, {
                        dates: alldates
                    }); 
                    return res.data;
                })
            );
            await axios.post(`http://localhost:8800/api/bookUserData/${hotelData._id}`, userData);
            setOpen(false);
            navigate("/");
        } catch (error) {}
    }

  return (
    <div className="reserve">
        <div className="rContainer">
              <FontAwesomeIcon
              icon={faCircleXmark}
              className="rClose"
              onClick={()=>setOpen(false)}
              />
              <span>Select your rooms:</span>
              {data.map((item,i) => {
                  return(<div className="rItem" key={i}>
                      <div className="rItemInfo">
                          <div className="rTitle">{item.title}</div>
                          <div className="rDesc">{item.desc}</div>
                          <div className="rMax">Max People: <b>{item.maxpeople}</b></div> 
                          <div className="rPrice">{item.price}</div>
                      </div>
                      <div className="rSelectdRooms">
                          
                      {item.roomNumber.map((roomNumber,i) => { 
                          return (<div className="room" key={i}>
                              <label>{roomNumber.number}</label>
                              <input className="input" type="checkbox" name={roomNumber.number} value={roomNumber._id} onChange={handleChange} disabled={!isAvailable(roomNumber)}/>
                          </div>)
                      })}
                      </div>
                  </div>)
              })}
              <button onClick={handleClick} className="rButton">Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve
