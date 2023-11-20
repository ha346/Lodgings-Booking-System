import Reviews from "../models/Reviews.js" 
import Hotel from "../models/Hotel.js";

// CREATE Reviews

export const createReviews = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const reviews = new Reviews(req.body);

    try {
        const savedReviews = await reviews.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { reviews: savedReviews._id } });
        }
        catch(err)
        {
            console.log(err); 
            next(err);
        } 
        res.status(200).json(savedReviews);
    }
    catch(err)
    {
        next(err);
    }
}

// GET Reviews
export const getReviews = async (req, res, next) => {
    try { 
        const reviews = await Reviews.find();
        res.status(200).json(reviews); 
    } catch (err) { 
        next(err);
    }
}
  