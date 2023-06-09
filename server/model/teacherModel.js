const mongoose = require("mongoose");
const { Schema } = mongoose;

const teacherSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  raiting: {
    type: Number,
    required: true,
    default: 1,
  },
  language: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Teacher = mongoose.model("Teachers", teacherSchema);

module.exports = { Teacher };
