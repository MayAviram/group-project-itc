const express = require("express");
const {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLesson,
} = require("../controllers/lessonController");
const { protectToken } = require("../middlewares/middleware");
const { upload } = require("../utils/multer.config");

const router = express.Router();

router.use(protectToken);
router.post("/create", upload.single("img"), createLesson);
router.get("/getall", getAllLessons);
router.get("/getlesson/:id", getLessonById);
router.put("/update/:id", upload.single("img"), updateLesson);

module.exports = { lessonsRoutes: router };
