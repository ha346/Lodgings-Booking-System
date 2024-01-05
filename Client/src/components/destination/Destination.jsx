import React from "react";
import "./destination.scss";  
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'; 
import Box from '@mui/material/Box'; 

const Destination = () => {
    const data = [
        ["Texel", "410"],
        ["Phuket Province", "5,501"],
        ["Bihar", "762"],
        ["Bali", "12,696"],
        ["Ras Al Khaimah", "113"],
        ["Lake Desert", "2,407"],
        ["England", "74,172"],
        ["Mykonos", "1,452"],
        ["Uttar Pradesh", "4,384"],
        ["Zanzibar", "834"],
        ["Jersey", "89"],
        ["Santorini", "1,764"],
        ["Bora Bora", "60"],
        ["Cornwall", "5,282"],
        ["Guernsey", "61"],
        ["Ibiza", "1,640"],
        ["Isle of Wight", "935"],
        ["Hawaii", "5,517"],
        ["Tenerife", "9,619"],
        ];
    
    const [value, setValue] = React.useState(0); 

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div>
    <Box>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Regions" />
          <Tab label="Cities" />
          <Tab label="Places Of Interest" />
        </Tabs>
      </Box>
            </Box>
            
    <div className="destinationMainContainer">
      {data.map((temp, i) => {
        return (
          <div className="destinationContainer" key={i}>
            <div className="destinationContainerTitles">
              <div className="bigFont">{data[i][0]}</div>
              <div className="smallFont">{data[i][1]} properties</div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Destination;
