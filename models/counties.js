import pkg from "mongoose";
const { Schema, model } = pkg;

const countiesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: Number,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    population: {
      2009: Number,
      2019: Number,
    },
    formerProvince: {
      type: String
    },
    areaInKM2: {
      type: Number
    },
    subCounty: {
      type: Array
    }
  },
);

export default model("Counties", countiesSchema);
