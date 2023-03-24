const express = require('express');
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  addFavorite,
  getFavoritesTeachers,
  deleteTeacherFavorite,
  addTeacher,
} = require('../controllers/teacherController');
const { protectToken } = require('../middlewares/middleware');
const { upload } = require('../utils/multer.config');

const router = express.Router();

router.use(protectToken);
router.post('/create', upload.single('img'), createTeacher);
router.get('/getall', getAllTeachers);
router.get('/getlesson/:id', getTeacherById);
router.patch('/update/:id', upload.single('img'), updateTeacher);
router.post('/favorite/:id', addFavorite);
router.delete('/favorite/:id', deleteTeacherFavorite);
router.get('/getfavorites', getFavoritesTeachers);
router.post('/addmyteacher/:id', addTeacher);

module.exports = { teacherRoutes: router };
