import mongoose from "mongoose"; 

const WishlistSchema = new mongoose.Schema({
    userId: {
        type: String, 
    }, 
    hotelId: {
        type: [String], 
    } 
});

export default mongoose.model("Wishlist", WishlistSchema);    