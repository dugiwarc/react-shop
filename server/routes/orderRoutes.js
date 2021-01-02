/** @format */

import express from "express";

// Controllers
import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const { Router } = express;
const router = Router();

router.route("/").post(protect, addOrderItems);

export default router;
