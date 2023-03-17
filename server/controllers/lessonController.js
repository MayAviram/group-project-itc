const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { Lesson } = require('../model/lessonModel');
const { storage } = require('../utils/firebase.config');

const createLesson = async (req, res) => {
  const img = req.file;

  const imgRef = ref(storage, `images/${img.originalname}`);
  await uploadBytes(imgRef, img.buffer);
  const url = await getDownloadURL(imgRef);

  const lesson = await Lesson.create({ ...req.body, img: url });

  res.status(200).json({ lesson });
};

const getAllLessons = async (req, res) => {
  const lessons = await Lesson.find({});
  res.status(200).json({ lessons });
};

module.exports = { createLesson, getAllLessons };
