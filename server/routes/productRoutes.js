/** @format */

import express from "express";

// Controllers
import {
	getProductById,
	getProducts,
} from "../controllers/productController.js";

const { Router } = express;
const router = Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
