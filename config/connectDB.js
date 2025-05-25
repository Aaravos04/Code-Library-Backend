import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully!");
  } catch (err) {
    console.log(err?.message || err);
  }
};

export default connectDB;
