import { React, useRef , useFetch } from 'react';
import PropertyList from "../propertyList/PropertyList"; 

import { IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
 


const ShowPropertyList = () => { 

    const handleNext=()=>{   
        rs.current.slickNext()
    }
      
    const handlePrev=()=>{ 
        rs.current.slickPrev()
    }

    const rs=useRef()
   
    const settings = {
       dots: false,
       arrows: false,
       infinite: true,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 1,
    };
    
  return (
    <div>
           
        <IconButton onClick={handlePrev} variant="contained" style={{position:'absolute',top:90,left:10,zIndex:2,border:0,borderRadius:13,width:26,height:26,backgroundColor:'#FFFF',color:"#000",cursor:'pointer'}}>
        <KeyboardArrowLeftIcon /></IconButton>
        <Slider {...settings} ref={rs}> 
            <PropertyList />
        </Slider>
        <IconButton onClick={handleNext} variant="contained" style={{position:'absolute',top:90,right:10,zIndex:2,border:0,borderRadius:13,width:26,height:26,backgroundColor:'#FFFF',color:"#000",cursor:'pointer'}}>
        <KeyboardArrowRightIcon /></IconButton>
                  
    </div>
  )
}

export default ShowPropertyList
