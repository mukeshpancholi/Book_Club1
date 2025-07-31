import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connecToMongo = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    dbname: "book_club",
  });
  if (!conn) {
    console.log("MongoDb connection error");
  } else {
    console.log("MongoDb connected successfully...");
  }
};

export default connecToMongo;
