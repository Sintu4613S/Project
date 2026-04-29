/* eslint-env node */
/* global process */
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in .env file");
}

const connectToMongo = async () => {
  try {
    await
      mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB successfully");
  }
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
}
export default connectToMongo;
