import mongoose from "mongoose";
import { MONGO_DB_URI } from "./enviornment";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI, {
      dbName: "FinTrack",
      serverSelectionTimeoutMS: 10000,
    });

    console.log(" MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;