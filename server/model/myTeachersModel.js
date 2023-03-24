const mongoose = require('mongoose');
const { Schema } = mongoose;

const myTeachersSchema = new Schema({
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

const MyTeachers = mongoose.model('MyTeachers', myTeachersSchema);

module.exports = { MyTeachers };
