import pkg from "mongoose";
const { Schema, model } = pkg;

const countiesSchema = new Schema({ any: Schema.Types.Mixed });

export default model("Counties", countiesSchema);
