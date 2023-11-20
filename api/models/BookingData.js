import mongoose from "mongoose";
// const { Schema } = mongoose;

const BookingDataSchema = new mongoose.Schema({
    username: {
        type: String, 
    }, 
    email: {
        type: String,
        required: true, 
    },
    country: {
        type: String, 
    }, 
    city: {
        type: String, 
    },
    phone: {
        type: String,
        required: true, 
    }, 
    hotelName: {
        type: String,
        required: true
    },  
    cheapestPrice: {
        type: Number,
        required: true
    }, 
    roomNumber:[String]
});

export default mongoose.model("BookingData", BookingDataSchema);    // HotelSchema ----> to create model "Hotel"