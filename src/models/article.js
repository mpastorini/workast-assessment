import mongoose from "mongoose";

export default mongoose.model("User", {
  userId: String,
  title: String,
  text: String,
  tags: [String]
});