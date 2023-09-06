import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

// const mongoURL = "mongodb://localhost/misGastosDB";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
