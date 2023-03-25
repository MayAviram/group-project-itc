const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoriteSchema = new Schema({
  teacherId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teachers',
      required: true,
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite };
