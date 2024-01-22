const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    phno: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otpSecret: {
      type: String,
    },
    Score: {
      type: Number,
    },
    Module: {
      type: Array,
      default: Array(10).fill(false),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("test_users", userSchema);
