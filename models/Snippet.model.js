import mongoose from "mongoose";

const Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Snippet Name is required!"],
      trim: true,
    },
    code: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Snippet = mongoose.model("Snippet", Schema);
export default Snippet;
