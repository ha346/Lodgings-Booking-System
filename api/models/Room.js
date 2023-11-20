import mongoose from "mongoose";
// const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    maxpeople: {
        type: Number,
        required: true
    },
    desc: {
        type: String, 
        required: true
    },
    roomNumber:[{number:Number, unavailableDates:{type:[Date]} }],
    // for ex: {number:101, unavailableDates:[01.05.2022,02.05.2022]}
},{timestamps:true});

export default mongoose.model("Room", RoomSchema);    // HotelSchema ----> to create model "Hotel"