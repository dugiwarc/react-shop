/** @format */

import express from "express";
import asyncHandler from "express-async-handler";

// Models
import Product from "../models/productModel.js";

const { Router } = express;
const router = Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // res.status(401);
    // throw new Error("Not authorized");
    res.json(products);
  })
);

// @desc Fetch single product
// @desc GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;