const express = require("express");
const {
  createUser,
  loginUser,
  getUserById,
  updateUser,
} = require("../controllers/userController");
const { validateUser, existUser } = require("../middlewares/userMiddlewares");

const router = express.Router();

router.post("/signup", validateUser, createUser);
router.post("/login", loginUser);
router.get("/:id", existUser, getUserById);
router.put("/:id", existUser, updateUser);

module.exports = { userRoutes: router };
