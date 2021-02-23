const mongoose = require("mongoose");
const validator = require("validator");

const formSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is incorrect...");
      }
    },
  },
  carName: {
    type: String,
    required: true,
  },
  carPrice: {
    type: Number,
    required: true,
  },
  contactNo: {
    type: Number,
    minLength: 10,
    maxLength: 10,
  },
});

const FormData = mongoose.model("formData", formSchema);

module.exports = FormData;
