const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { Favorite } = require('../model/favoriteSchema');
const { MyTeachers } = require('../model/myTeachersModel');
const { Teacher } = require('../model/teacherModel');
const { storage } = require('../utils/firebase.config');

const createTeacher = async (req, res) => {
  const img = req.file;

  const imgRef = ref(storage, `images/${img.originalname}`);
  await uploadBytes(imgRef, img.buffer);
  const url = await getDownloadURL(imgRef);

  const teacher = await Teacher.create({ ...req.body, img: url });

  res.status(200).json({ teacher });
};

const getAllTeachers = async (req, res) => {
  const { learn, language, location } = req.query;

  if (learn || language || location) {
    const query = {};

    if (learn) {
      query.instrument = learn;
    }

    if (language) {
      query.lenguage = lenguage;
    }

    if (location) {
      query.location = location;
    }

    const teachers = await Teacher.find(query);
    return res.status(200).json({ teachers });
  }

  const teachers = await Teacher.find({});
  res.status(200).json({ teachers });
};

const getTeacherById = async (req, res) => {
  const { id } = req.params;
  const teacher = await Teacher.findById(id);
  res.status(200).json({ teacher });
};

const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const teacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json({ teacher });
};

const addFavorite = async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const teacher = await Teacher.findById(id);

  const favorite = await Favorite.findOne({ userId: user });

  if (favorite) {
    favorite.teacherId.push(teacher._id);
    await favorite.save();
  } else {
    await Favorite.create({ userId: user, teacherId: [teacher._id] });
  }

  res.status(200).json({ teacher });
};

const getFavoritesTeachers = async (req, res) => {
  const { user } = req;

  const favorites = await Favorite.findOne({ userId: user }).populate(
    'teacherId'
  );

  res.status(200).json({ favorites });
};

const deleteTeacherFavorite = async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const favorite = await Favorite.findOne({ userId: user });

  favorite.teacherId = favorite.teacherId.filter(
    (teacher) => teacher._id.toString() !== id
  );

  if (favorite.teacherId.length === 0) {
    await Favorite.findByIdAndDelete(favorite._id);
    return res.status(200).json({ message: 'Favorite deleted' });
  }

  await favorite.save();

  res.status(200).json({ favorite });
};

const addTeacher = async (req, res) => {
  const { user } = req;
  const { id } = req.params;

  const teacher = await Teacher.findById(id);

  const myTeachers = await MyTeachers.findOne({ userId: user });

  if (myTeachers) {
    myTeachers.teacherId.push(teacher._id);
    await myTeachers.save();
  } else {
    await MyTeachers.create({ userId: user, teacherId: [teacher._id] });
  }

  res.status(200).json({ teacher });
};

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  addFavorite,
  getFavoritesTeachers,
  deleteTeacherFavorite,
  addTeacher,
};
