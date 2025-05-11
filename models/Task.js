const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name cannot be longer than 20 charater"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
