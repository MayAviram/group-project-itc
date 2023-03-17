const express = require('express');
const { createLesson } = require('../controllers/lessonController');
const { upload } = require('../utils/multer.config');

const router = express.Router();

router.post('/create', upload.single('img'), createLesson);

module.exports = { lessonsRoutes: router };
