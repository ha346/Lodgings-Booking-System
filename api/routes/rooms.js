import express from "express"; 
import { createRoom, deleteRooms, getAllRooms, getRooms, updateRooms, updateRoomAvailability, getRoomNumber } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
  
router.put("/availability/:id", updateRoomAvailability);

router.put("/:id", verifyAdmin, updateRooms);

router.delete("/:id/:hotelid", verifyAdmin, deleteRooms);

router.get("/:id", verifyAdmin, getRooms); 

router.get("/", verifyAdmin, getAllRooms); 

router.get("/roomNumber", verifyAdmin, getRoomNumber); 

export default router;