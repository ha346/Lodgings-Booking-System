import Wishlist from "../models/Wishlist.js"; 

// CREATE Wishlist
export const createUserWishlist = async (req, res, next) => { 
    const newUserWishlist = new Wishlist(req.body);
    
    try {
        const savedUserWishlist = await newUserWishlist.save()
        res.status(200).json(savedUserWishlist)
    }
    catch (err) 
    {
        next(err)
    } 
}

// GET Wishlist
export const getUserWishlist = async (req, res) => {
 
    const { userId } = req.query;
    try {
        const userWishlist = await Wishlist.find({userId:userId});
        res.status(200).json(userWishlist)
    }
    catch (err)
    {
        console.log(err);  
    } 
}

// UPDATE Wishlist
export const updateUserWishlist = async (req, res) => {

    try {
        const updatedUserWishlist = await Wishlist.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}) 
        res.status(200).json(updatedUserWishlist)
    }
    catch (err)
    {
        next(err);
        console.log("Err Update: ", err);
    } 
}

// DELETE Wishlist
export const deleteUserWishlist = async (req, res) => {

    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.status(200).json("Wishlist has been deleted")
    }
    catch (err)
    {
        next(err);
    } 
}