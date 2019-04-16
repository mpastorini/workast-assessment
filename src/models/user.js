import mongoose from "mongoose";

export default mongoose.model("User", {
  name: String,
  avatar: String
});