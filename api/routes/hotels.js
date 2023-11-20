import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelForFeaturedProperties, getHotelReviews, getHotelRooms, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
// router.post("/", async (req, res) => {

//     const newHotel = new Hotel(req.body)
    
//     try { 
//         const savedHotel = await newHotel.save()
//         res.status(200).json(savedHotel)
//     }
//     catch (err)
//     {
//         res.status(500).json(err)
//     }
// })

router.post("/", verifyAdmin, createHotel) 

// UPDATE
// router.put("/:id", async (req, res) => {

//     try {
//         const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
//         res.status(200).json(updatedHotel)
//     }
//     catch (err)
//     {
//         // console.log(err)
//         res.status(500).json(err)
//     }
// })

router.put("/:id", verifyAdmin, updateHotel)


// DELETE
// router.delete("/:id", async (req, res) => {

//     try {
//         await Hotel.findByIdAndDelete(req.params.id);
//         res.status(200).json("Hotel has been deleted")
//     }
//     catch (err)
//     {
//         res.status(500).json(err)
//     }
// })

router.delete("/:id", verifyAdmin, deleteHotel)

// GET
// router.get("/:id", async (req, res) => {

//     try {
//         const hotel = await Hotel.findById(req.params.id);
//         res.status(200).json(hotel)
//     }
//     catch (err)
//     {
//         res.status(500).json(err)
//     }
// })

router.get("/find/:id", getHotel)

// GET ALL
// router.get("/", async (req, res) => {

//     try {
//         const hotels = await Hotel.find();
//         res.status(200).json(hotels)
//     }
//     catch (err)
//     {
//         res.status(500).json(err)
//     } 
// }) 

router.get("/", getAllHotel)

router.get("/featured",getHotelForFeaturedProperties)

// next method and error handling

// router.get("/", async (req, res, next) => {

//     // error handling

//     // send manual status or message to index.js to handle
//     // const failed = true
//     // const err = new Error()
//     // err.status = 404
//     // err.message = "Sorry not found!"
//     // if(failed) return next(err)


//     // making a file error.js inside utils folder to reduce the code length increase reusability
//     const failed = true;

//     if(failed) return next(createError(401,"You are not authenticated!"))


//     // next method

//     // 1
//     // console.log("hi i'm a hotel route")
//     // next()

//     // 2
//     // return next()

//     // 3
//     // console.log("hi i'm a hotel route")


//     // error handling

//     try {
//         const hotels = await Hotel.findById("abcdefg");
//         // const hotels = await Hotel.find();
//         res.status(200).json(hotels)
//     }
//     catch (err)
//     {
//         // console.log(err)
//         // res.status(500).json(err)
//         next(err)
//     }
// })


router.get("/countByCity", countByCity);
router.get("/countByType", countByType); 
router.get("/room/:id", getHotelRooms); 
router.get("/reviews/:id", getHotelReviews); 


export default router;