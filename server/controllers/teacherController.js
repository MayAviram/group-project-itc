const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { Favorite } = require("../model/favoriteSchema");
const { MyTeachers } = require("../model/myTeachersModel");
const { Teacher } = require("../model/teacherModel");
const { storage } = require("../utils/firebase.config");

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
      query.language = language;
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
    const existFavorite = favorite.teacherId.find(
      (teacher) => teacher._id.toString() === id
    );

    if (existFavorite) {
      return res.status(400).json({ message: "Teacher already added" });
    } else {
      favorite.teacherId.push(teacher._id);
      await favorite.save();
    }
  } else {
    await Favorite.create({ userId: user, teacherId: [teacher._id] });
  }

  res.status(200).json({ teacher });
};

const getFavoritesTeachers = async (req, res) => {
  const { user } = req;

  const favorites = await Favorite.findOne({ userId: user }).populate(
    "teacherId"
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
    return res.status(200).json({ message: "Favorite deleted" });
  }

  await favorite.save();

  res.status(200).json({ favorite });
};

const addTeacher = async (req, res) => {
  const { user } = req;
  const { id } = req.params;

  const teacher = await Teacher.findById(id);

  let myTeachers = await MyTeachers.findOne({ userId: user });
  if (!myTeachers) {
    myTeachers = { teacherId: [] };
  }
  const existTeacher = myTeachers.teacherId.includes(teacher._id);

  if (existTeacher) {
    return res.status(400).json({ message: "Teacher already added" });
  }

  if (myTeachers) {
    myTeachers.teacherId.push(teacher._id);
    await myTeachers.save();
  } else {
    await MyTeachers.create({ userId: user, teacherId: [teacher._id] });
  }

  res.status(200).json({ teacher });
};

const getMyTeachers = async (req, res) => {
  const { user } = req;

  const myTeachers = await MyTeachers.findOne({ userId: user }).populate(
    "teacherId"
  );

  res.status(200).json({ myTeachers });
};

const deleteMyTeacher = async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const myTeachers = await MyTeachers.findOne({ userId: user });

  myTeachers.teacherId = myTeachers.teacherId.filter(
    (teacher) => teacher._id.toString() !== id
  );

  if (myTeachers.teacherId.length === 0) {
    await MyTeachers.findByIdAndDelete(myTeachers._id);
    return res.status(200).json({ message: "Teacher deleted" });
  }

  await myTeachers.save();

  res.status(200).json({ myTeachers });
};

const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  await Favorite.deleteMany({ teacherId: id });
  await MyTeachers.deleteMany({ teacherId: id });
  await Teacher.findByIdAndDelete(id);

  res.status(200).json({ message: "Teacher deleted" });
};

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  addFavorite,
  deleteTeacher,
  getFavoritesTeachers,
  deleteTeacherFavorite,
  addTeacher,
  getMyTeachers,
  deleteMyTeacher,
};
