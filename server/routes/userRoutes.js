const express = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const { validateUser } = require("../middleware/middleware");

const router = express.Router();

router.post("/signup", validateUser, createUser);
router.post("/login", loginUser);

module.exports = { userRoutes: router };
