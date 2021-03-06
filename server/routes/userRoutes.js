/** @format */

import express from "express";

// Controllers
import {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const { Router } = express;
const router = Router();

router.route("/login").post(authUser);
router
	.route("/profile")
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);
router.route("/").post(registerUser);

export default router;
