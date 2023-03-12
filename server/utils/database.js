const mongoose = require('mongoose');

const DB_URL =
  'mongodb+srv://daniel:Daniel12345@cluster0.zgwqr10.mongodb.net/lessons-db?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
const db = () => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log('Database is connected.');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { db };
