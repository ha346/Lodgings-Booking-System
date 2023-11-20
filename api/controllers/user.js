import User from "../models/User.js"

// UPDATE USER
export const updateUser = async (req, res) => {

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}) 
        res.status(200).json(updatedUser)
    }
    catch (err)
    {
        next(err)
    } 
}

// DELETE USER
export const deleteUser = async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted"); 
    }
    catch (err)
    {
        next(err)
    } 
}

// GET USER
export const getUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    }
    catch (err)
    {
        next(err)
    } 
}

// GET ALL USER
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find();
        res.status(200).json(users)
    }
    catch (err)
    {
        next(err)
    } 
}