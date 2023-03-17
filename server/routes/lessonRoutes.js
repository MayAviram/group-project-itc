const express = require('express');
const {
  createLesson,
  getAllLessons,
} = require('../controllers/lessonController');
const { protectToken } = require('../middlewares/userMiddlewares');
const { upload } = require('../utils/multer.config');

const router = express.Router();

router.use(protectToken);
router.post('/create', upload.single('img'), createLesson);
router.get('/getall', getAllLessons);

module.exports = { lessonsRoutes: router };
