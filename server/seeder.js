/** @format */

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import Order from "./models/orderModel.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported".green.inverse);

    process.exit();
  } catch (error) {
    console.error(
      `The Data was not imported. Error: ${error.message}`.red.bold
    );
    process.exit(1); // adding 1 means "exit with failure"
  }
};

const destroyData = async () => {
  try {
    // RESET ALL | DESTROY ALL DATA
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    console.log("Data Destroyed!".red.inverse);

    process.exit();
  } catch (error) {
    console.error(`The Data was not deleted. Error: ${error.message}`.red);
    process.exit(1); // adding 1 means "exit with failure"
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
