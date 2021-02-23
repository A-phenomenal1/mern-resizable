const mongoose = require("mongoose");

//count schema
const countSchema = mongoose.Schema({
  addCount: {
    type: Number,
  },
  updateCount: {
    type: Number,
  },
});

const CountClick = mongoose.model("countClick", countSchema);

module.exports = CountClick;
