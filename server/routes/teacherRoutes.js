const express = require('express');
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
} = require('../controllers/teacherController');
const { protectToken } = require('../middlewares/userMiddlewares');
const { upload } = require('../utils/multer.config');

const router = express.Router();

router.use(protectToken);
router.post('/create', upload.single('img'), createTeacher);
router.get('/getall', getAllTeachers);
router.get('/getlesson/:id', getTeacherById);
router.patch('/update/:id', upload.single('img'), updateTeacher);

module.exports = { teacherRoutes: router };
