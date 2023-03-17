const mongoose = require('mongoose');
const { Schema } = mongoose;

const lessonSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = { Lesson };
