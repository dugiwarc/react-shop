/** @format */

import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import colors from "colors";

// Middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// Allow us to accept json data in the body
app.use(express.json());

connectDatabase();

app.get("/", (req, res) => {
	res.send("API is running...");
});

// Mount route
// anything going to api/products => link to productRoutes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.blue.bold
	)
);
