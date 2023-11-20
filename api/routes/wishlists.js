import express from "express";  
import { createUserWishlist, getUserWishlist, updateUserWishlist, deleteUserWishlist } from "../controllers/wishlist.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router(); 

router.post("/", createUserWishlist);
router.get("/find", getUserWishlist);
router.put("/update/:id", verifyAdmin, updateUserWishlist);
router.delete("/:id", verifyAdmin, deleteUserWishlist);   

export default router;