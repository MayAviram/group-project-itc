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

const getLessonById = async (req, res) => {
  const { id } = req.params;
  const lesson = await Lesson.findById(id);
  res.status(200).json({ lesson });
};

const updateLesson = async (req, res) => {
  const { id } = req.params;
  const lesson = await Lesson.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json({ lesson });
};

module.exports = { createLesson, getAllLessons, getLessonById, updateLesson };
