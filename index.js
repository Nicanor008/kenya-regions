import mongoose from "mongoose";
import Counties from "./models/counties.js";

export const GetCounties = async () => {
  // DB connection
  mongoose.connect(process.env.DB_URI)

  return await Counties.find()
}

