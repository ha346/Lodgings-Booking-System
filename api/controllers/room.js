import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

// CREATE ROOM
export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
        }
        catch(err)
        {
            console.log(err); 
            next(err);
        } 
        res.status(200).json(savedRoom);
    }
    catch(err)
    {
        next(err);
    }
}

// UPDATE ROOM
export const updateRooms = async (req, res) => {

    try {
        const updatedRooms = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}) 
        res.status(200).json(updatedRooms)
    }
    catch (err)
    {
        next(err)
    } 
}

// UPDATE ROOM AVAILABILITY

export const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumber._id": req.params.id },
        {
          $push: {
            "roomNumber.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
  };

// DELETE ROOM
export const deleteRooms = async (req, res) => {

    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: req.params.id } });
        }
        catch(err)
        {
            next(err);
        } 
        res.status(200).json("Room has been deleted")
    }
    catch (err)
    {
        next(err)
    } 
}

// GET ROOM
export const getRooms = async (req, res) => {

    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room)
    }
    catch (err)
    {
        // console.log(err) 
        next(err)
    } 
}

// GET ALL ROOM
export const getAllRooms = async (req, res) => {

    try {
        const rooms = await Room.find();
        res.status(200).json(rooms) 
    }
    catch (err)
    {
        next(err)
    } 
}

export const getRoomNumber = async (req, res, next) => {
    try { 
        const room = await Room.roomNumber.findById(req.params.id);
        res.status(200).json(room); 
    } catch (err) { 
        next(err);
    }
}