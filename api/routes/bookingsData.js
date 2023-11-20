import express from "express";  
import { bookUserData, getUserData } from "../controllers/bookingData.js";


const router = express.Router(); 

router.post("/:id", bookUserData);
router.get("find/:id", getUserData);

export default router;