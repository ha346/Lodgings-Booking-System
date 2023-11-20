import Hotel from "../models/Hotel.js"
import Reviews from "../models/Reviews.js"
import Room from "../models/Room.js"

// CREATE HOTEL
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch (err) 
    {
        next(err)
    } 
}
 
// UPDATE HOTEL
export const updateHotel = async (req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}) 
        res.status(200).json(updatedHotel)
    }
    catch (err)
    {
        next(err)
    } 
}

// DELETE HOTEL
export const deleteHotel = async (req, res) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted")
    }
    catch (err)
    {
        next(err)
    } 
}

// GET HOTEL
export const getHotel = async (req, res) => {

    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    }
    catch (err)
    {
        next(err)
    } 
}

// GET ALL HOTEL
// export const getAllHotel = async (req, res) => {

//     const { min, max, ...others } = req.query;

//     try {
//         // const hotels = await Hotel.find();
//         // const hotels = await Hotel.find(req.query).limit(req.query.limit);
//         const hotels = await Hotel.find(
//             {
//                 ...others,
//                 cheapestPrice: { $gt: min | 1, $lt: max || 999},
//             }).limit(req.query.limit);
//         res.status(200).json(hotels);
//     } 
//     catch (err)
//     {
//         console.log(err);
//         // next(err)
//     } 
// }

export const getAllHotel = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        // console.log(req.query);
        // const hotels = await Hotel.find().limit(req.query.limit); 
        // const insideFind = { ...others, cheapestPrice: { $gt: min | 1, $lt: max || 999 } }
        // console.log(insideFind);
          const hotels = await Hotel.find({ ...others, cheapestPrice: { $gt: min | 1, $lt: max || 9999 } }).limit(req.query.limit);
        // const hotels = await Hotel.find( req.query ).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
};
   
// for featured properties
export const getHotelForFeaturedProperties = async (req, res, next) => {  
    try {
        const hotels = await Hotel.find(req.query[0]).limit(req.query.limit);
        res.status(200).json(hotels);
    }
    catch(err)
    { 
        next(err); 
    }
}

// Count By Cities
export const countByCity = async (req, res) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            // return Hotel.find({ city: city }).length;    // it is gonna find all the cities their properties after find the length
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    }
    catch (err)
    {
        next(err)
    } 
}

// Count By Type
export const countByType = async (req, res) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });
        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartment", count: apartmentCount },
            { type: "resort", count: resortCount },
            { type: "villa", count: villaCount },
            { type: "cabin", count: cabinCount },
        ]);
    }
    catch (err)
    {
        next(err)
    } 
}

// Fetch rooms in particular hotel
export const getHotelRooms = async (req, res, next) => {
    try { 
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => { 
                return Room.findById(room); 
            })
        ) 
        res.status(200).json(list); 
    } catch (err) { 
        next(err);
    }
}

export const getHotelReviews = async (req, res, next) => {
    try { 
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.reviews.map((review) => { 
                return Reviews.findById(review); 
            })
        ) 
        res.status(200).json(list); 
    } catch (err) { 
        next(err);
    }
}