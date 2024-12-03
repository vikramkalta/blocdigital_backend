const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: String,
  description: String,
  status: {
    type: String,
    enum: ["Complete", "Incomplete"],
    default: "Incomplete",
  },
});
module.exports = mongoose.model("Task", TaskSchema);
