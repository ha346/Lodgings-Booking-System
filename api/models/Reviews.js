import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true, 
    }, 
    userCity: {
        type: String,  
    }, 
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    ratingTitle: {
        type:String,
    },
    ratingDesc: {
        type: String, 
    },
    ratingArea: {
        type:String,
    },  
},{timestamps:true});

export default mongoose.model("Reviews", ReviewsSchema);