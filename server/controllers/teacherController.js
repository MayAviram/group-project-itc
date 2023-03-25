const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { Teacher } = require("../model/teacherModel");
const { storage } = require("../utils/firebase.config");

const createTeacher = async (req, res) => {
  const img = req.file;

  const imgRef = ref(storage, `images/${img.originalname}`);
  await uploadBytes(imgRef, img.buffer);
  const url = await getDownloadURL(imgRef);
  // const teacher = await Teacher.create({ ...req.body, img: url });
  const teacher = await Teacher.create({
    ...req.body,
    img: url,
    raiting: 1,
  });

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

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
};
