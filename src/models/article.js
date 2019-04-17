import mongoose from "mongoose";

export default mongoose.model("Article", {
  userId: String,
  title: String,
  text: String,
  tags: [String]
});