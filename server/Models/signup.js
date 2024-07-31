import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "visitor",
  },
});

export default mongoose.models.registers ||
  mongoose.model("register", registerSchema);
