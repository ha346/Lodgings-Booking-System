import express from "express"; 
import { verifyAdmin } from "../utils/verifyToken.js";

import { createReviews, getReviews } from "../controllers/reviews.js";


const router = express.Router(); 

router.post("/:hotelid", createReviews);
router.get("/find", getReviews);

export default router; 