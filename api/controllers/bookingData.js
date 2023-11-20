import BookingData from "../models/BookingData.js";

// CREATE Reviews
export const bookUserData = async (req, res, next) => { 
    const newBookingData = new BookingData(req.body);
    
    try {
        const savedBookingData = await newBookingData.save()
        res.status(200).json(savedBookingData)
    }
    catch (err) 
    {
        next(err)
    } 
}

// GET Reviews
export const getUserData = async (req, res) => {

    try {
        const bookingData = await BookingData.findById(req.params.id);
        res.status(200).json(bookingData)
    }
    catch (err)
    {
        next(err)
    } 
}
  