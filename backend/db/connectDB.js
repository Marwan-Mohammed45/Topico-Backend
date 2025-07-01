import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectDb;
