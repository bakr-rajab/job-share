const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      default: "password",
      min: 3,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
